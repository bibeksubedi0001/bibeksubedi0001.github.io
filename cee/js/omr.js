/* ============================================================
   OMR Sheet Scanner — camera / photo bubble-sheet grading
   Reads black-filled bubbles from a printed OMR sheet
   (4 blocks × 50 rows × A–D, numbers on the left of each block)
   and grades them against a selected day's answer key.
   Loads after questions.js + app.js (uses DAYS + window.CEE_APP).
   ============================================================ */

(function () {
    "use strict";

    const $ = (id) => document.getElementById(id);
    const LETTERS = ["a", "b", "c", "d"];
    const FILL_REL = 40;      // darkness above row baseline (0-255) => bubble is filled
    const MULTI_GAP = 25;     // darkest must beat 2nd by this, else "multiple marks"
    const GUIDE_MX = 0.06;    // live-guide margins (fraction of frame)
    const GUIDE_MY = 0.045;
    const MAX_DIM = 1800;     // capture downscale cap

    const omr = {
        dayNum: DAYS[DAYS.length - 1].day,
        stream: null,
        img: null,            // offscreen canvas holding the captured photo
        gray: null,           // Uint8ClampedArray luminance, W*H
        W: 0, H: 0,
        corners: null,        // [TL,TR,BR,BL] in image px — corners of the bubble table
        numFrac: 0.20,        // number-column width, fraction of one block
        gapFrac: 0.010,       // gap between blocks, fraction of table width
        letters: [],          // per question: "a".."d" | null (blank) | "x" (multi)
        dotRows: [],          // per question: [{x,y} ×4] sample centres for drawing
        radius: 6,
        dragging: -1,
        rafPending: false
    };

    /* ---------- day helpers ---------- */
    const dayObj = () => DAYS.find(d => d.day === omr.dayNum);
    function flatQuestions(day) {
        const f = [];
        day.chapters.forEach(ch => ch.questions.forEach(q => f.push(q)));
        return f;
    }

    /* ---------- geometry: unit square -> quad (true perspective) ---------- */
    function quadMapper(c) {
        const x0 = c[0].x, y0 = c[0].y, x1 = c[1].x, y1 = c[1].y;
        const x2 = c[2].x, y2 = c[2].y, x3 = c[3].x, y3 = c[3].y;
        const sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
        let a, b, cc, d, e, f, g, h;
        if (Math.abs(sx) < 1e-7 && Math.abs(sy) < 1e-7) {
            a = x1 - x0; b = x3 - x0; cc = x0;
            d = y1 - y0; e = y3 - y0; f = y0;
            g = 0; h = 0;
        } else {
            const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2;
            const den = dx1 * dy2 - dx2 * dy1;
            g = (sx * dy2 - sy * dx2) / den;
            h = (dx1 * sy - dy1 * sx) / den;
            a = x1 - x0 + g * x1; b = x3 - x0 + h * x3; cc = x0;
            d = y1 - y0 + g * y1; e = y3 - y0 + h * y3; f = y0;
        }
        return (u, v) => {
            const w = g * u + h * v + 1;
            return { x: (a * u + b * v + cc) / w, y: (d * u + e * v + f) / w };
        };
    }

    /* ---------- sheet layout (normalized u,v inside the corner quad) ---------- */
    function blockCount(n) { return Math.max(1, Math.ceil(n / 50)); }

    function bubbleUV(qi, oi, nBlocks) {
        const gap = omr.gapFrac;
        const wB = (1 - gap * (nBlocks - 1)) / nBlocks;
        const b = Math.floor(qi / 50), r = qi % 50;
        return {
            u: b * (wB + gap) + wB * (omr.numFrac + (1 - omr.numFrac) * (oi + 0.5) / 4),
            v: (r + 0.5) / 50
        };
    }

    /* ---------- pixel sampling ---------- */
    function buildGray(canvas) {
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const g = new Uint8ClampedArray(canvas.width * canvas.height);
        for (let i = 0, p = 0; p < g.length; i += 4, p++) {
            g[p] = (data[i] * 77 + data[i + 1] * 150 + data[i + 2] * 29) >> 8;
        }
        return g;
    }

    function darknessAt(x, y, r) {
        const W = omr.W, H = omr.H, g = omr.gray;
        const r2 = r * r;
        let sum = 0, n = 0;
        const x0 = Math.max(0, Math.round(x - r)), x1 = Math.min(W - 1, Math.round(x + r));
        const y0 = Math.max(0, Math.round(y - r)), y1 = Math.min(H - 1, Math.round(y + r));
        for (let yy = y0; yy <= y1; yy++) {
            const dy = yy - y;
            for (let xx = x0; xx <= x1; xx++) {
                const dx = xx - x;
                if (dx * dx + dy * dy <= r2) { sum += g[yy * W + xx]; n++; }
            }
        }
        return n ? 255 - sum / n : 0;
    }

    function sampleRadius(map, nBlocks) {
        const a = bubbleUV(0, 0, nBlocks), b = bubbleUV(0, 1, nBlocks), c = bubbleUV(1, 0, nBlocks);
        const pa = map(a.u, a.v), pb = map(b.u, b.v), pc = map(c.u, c.v);
        const dOpt = Math.hypot(pb.x - pa.x, pb.y - pa.y);
        const dRow = Math.hypot(pc.x - pa.x, pc.y - pa.y);
        return Math.max(2, Math.min(40, 0.32 * Math.min(dOpt, dRow)));
    }

    /* ---------- detection ---------- */
    function detect() {
        if (!omr.gray) return;
        const N = flatQuestions(dayObj()).length;
        const nBlocks = blockCount(N);
        const map = quadMapper(omr.corners);
        const r = sampleRadius(map, nBlocks);
        const letters = [], dotRows = [];

        for (let qi = 0; qi < N; qi++) {
            const cells = [];
            for (let oi = 0; oi < 4; oi++) {
                const { u, v } = bubbleUV(qi, oi, nBlocks);
                const p = map(u, v);
                cells.push({ p, d: darknessAt(p.x, p.y, r) });
            }
            const base = Math.min(cells[0].d, cells[1].d, cells[2].d, cells[3].d);
            const marked = [];
            cells.forEach((cell, i) => { if (cell.d - base > FILL_REL) marked.push({ i, ex: cell.d - base }); });

            let letter = null;
            if (marked.length === 1) letter = LETTERS[marked[0].i];
            else if (marked.length > 1) {
                marked.sort((m, n2) => n2.ex - m.ex);
                letter = marked[0].ex - marked[1].ex > MULTI_GAP ? LETTERS[marked[0].i] : "x";
            }
            letters.push(letter);
            dotRows.push(cells.map(cell => cell.p));
        }
        omr.letters = letters;
        omr.dotRows = dotRows;
        omr.radius = r;
        drawWork();
        renderReport();
    }

    function scheduleDetect() {
        if (omr.rafPending) return;
        omr.rafPending = true;
        requestAnimationFrame(() => { omr.rafPending = false; detect(); });
    }

    /* ---------- work canvas (frozen capture + adjustable grid) ---------- */
    function drawWork() {
        const cv = $("omrWork");
        if (!omr.img) return;
        cv.width = omr.W; cv.height = omr.H;
        const ctx = cv.getContext("2d");
        ctx.drawImage(omr.img, 0, 0);

        const c = omr.corners;
        const lw = Math.max(1.5, omr.W / 700);

        // quad outline
        ctx.strokeStyle = "rgba(37,99,235,0.9)";
        ctx.lineWidth = lw * 1.4;
        ctx.beginPath();
        ctx.moveTo(c[0].x, c[0].y);
        for (let i = 1; i < 4; i++) ctx.lineTo(c[i].x, c[i].y);
        ctx.closePath();
        ctx.stroke();

        // block dividers
        const N = flatQuestions(dayObj()).length;
        const nBlocks = blockCount(N);
        const map = quadMapper(c);
        ctx.strokeStyle = "rgba(37,99,235,0.35)";
        ctx.lineWidth = lw;
        const gap = omr.gapFrac, wB = (1 - gap * (nBlocks - 1)) / nBlocks;
        for (let b = 1; b < nBlocks; b++) {
            const u = b * (wB + gap) - gap / 2;
            const t = map(u, 0), bt = map(u, 1);
            ctx.beginPath(); ctx.moveTo(t.x, t.y); ctx.lineTo(bt.x, bt.y); ctx.stroke();
        }

        // sample dots: large solid markers with a white halo (visible on black fills)
        for (let qi = 0; qi < omr.dotRows.length; qi++) {
            const chosen = omr.letters[qi];
            omr.dotRows[qi].forEach((p, oi) => {
                const on = chosen === LETTERS[oi];
                const multi = chosen === "x";
                const r = on ? omr.radius * 0.95 : multi ? omr.radius * 0.7 : omr.radius * 0.45;
                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(2.5, r), 0, Math.PI * 2);
                ctx.lineWidth = lw * 1.6;
                ctx.strokeStyle = "rgba(255,255,255,0.95)";
                ctx.stroke();
                ctx.fillStyle = on ? "#047857" : multi ? "#b45309" : "#1e3a8a";
                ctx.fill();
            });
        }

        // corner handles
        const hr = Math.max(9, omr.W * 0.013);
        c.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, hr, 0, Math.PI * 2);
            ctx.fillStyle = i === omr.dragging ? "rgba(37,99,235,0.95)" : "rgba(255,255,255,0.92)";
            ctx.fill();
            ctx.lineWidth = lw * 1.6;
            ctx.strokeStyle = "#2563eb";
            ctx.stroke();
        });
    }

    /* ---------- corner dragging ---------- */
    function canvasPos(ev) {
        const cv = $("omrWork");
        const rect = cv.getBoundingClientRect();
        return {
            x: (ev.clientX - rect.left) * (omr.W / rect.width),
            y: (ev.clientY - rect.top) * (omr.H / rect.height)
        };
    }

    function onPointerDown(ev) {
        if (!omr.corners) return;
        const p = canvasPos(ev);
        const grab = Math.max(20, omr.W * 0.035);
        let best = -1, bestD = grab;
        omr.corners.forEach((q, i) => {
            const d = Math.hypot(q.x - p.x, q.y - p.y);
            if (d < bestD) { bestD = d; best = i; }
        });
        if (best >= 0) {
            omr.dragging = best;
            $("omrWork").setPointerCapture(ev.pointerId);
            ev.preventDefault();
        }
    }

    function onPointerMove(ev) {
        if (omr.dragging < 0) return;
        const p = canvasPos(ev);
        omr.corners[omr.dragging] = {
            x: Math.max(0, Math.min(omr.W, p.x)),
            y: Math.max(0, Math.min(omr.H, p.y))
        };
        scheduleDetect();
    }

    function onPointerUp() {
        if (omr.dragging < 0) return;
        omr.dragging = -1;
        scheduleDetect();
    }

    /* ---------- report / grading ---------- */
    function gradeLetters() {
        const day = dayObj();
        const flat = flatQuestions(day);
        const neg = day.negativeMarking || 0;
        let correct = 0, wrong = 0, blank = 0, multi = 0;
        const rows = flat.map((q, i) => {
            const got = omr.letters[i] !== undefined ? omr.letters[i] : null;
            let s;
            if (got === null || got === undefined) { s = "skip"; blank++; }
            else if (got === "x") { s = "multi"; multi++; } // ungraded until fixed by tapping
            else if (got === q.answer) { s = "ok"; correct++; }
            else { s = "no"; wrong++; }
            return { q, got, s };
        });
        const marks = correct - wrong * neg;
        return { rows, correct, wrong, blank, multi, marks, total: flat.length, neg };
    }

    function renderReport() {
        const scanned = omr.letters.length > 0;
        const g = gradeLetters();

        $("omrCorrect").textContent = scanned ? g.correct : "\u2013";
        $("omrWrong").textContent = scanned ? g.wrong : "\u2013";
        $("omrBlank").textContent = scanned ? g.blank : "\u2013";
        $("omrMulti").textContent = scanned ? g.multi : "\u2013";
        $("omrMarks").textContent = scanned
            ? String(Math.round(g.marks * 100) / 100) : "\u2013";
        $("omrMarksLbl").textContent = "Marks / " + g.total +
            (g.neg ? " (\u2212" + g.neg + " each wrong)" : "");

        const grid = $("omrCells");
        grid.innerHTML = "";
        if (scanned) {
            const frag = document.createDocumentFragment();
            g.rows.forEach((row, i) => {
                const cell = document.createElement("button");
                cell.type = "button";
                cell.className = "omr-cell";
                cell.dataset.s = row.s;
                cell.dataset.i = i;
                const mark = row.got === null ? "\u2013" : row.got === "x" ? "\u2260" : row.got.toUpperCase();
                cell.innerHTML = "<b>" + (i + 1) + "</b><span>" + mark + "</span>";
                cell.title = "Q" + (i + 1) + " \u00B7 marked: " +
                    (row.got === null ? "blank" : row.got === "x" ? "multiple" : row.got.toUpperCase()) +
                    " \u00B7 key: " + row.q.answer.toUpperCase();
                frag.appendChild(cell);
            });
            grid.appendChild(frag);
        }

        const apply = $("omrApplyBtn");
        apply.disabled = !scanned;
        apply.textContent = "Save as Day " + omr.dayNum + " result";
    }

    function onCellClick(ev) {
        const cell = ev.target.closest(".omr-cell");
        if (!cell) return;
        const i = +cell.dataset.i;
        const cur = omr.letters[i];
        const order = ["a", "b", "c", "d", null];
        omr.letters[i] = cur === "x" ? null : order[(order.indexOf(cur) + 1) % order.length];
        drawWork();
        renderReport();
    }

    /* ---------- automatic table detection ---------- */
    // Finds the printed block borders (adaptive threshold -> connected components ->
    // extreme-point quad) so the user doesn't have to drag the corners manually.
    function autoDetectCorners() {
        if (!omr.gray) return false;
        const nBlocks = blockCount(flatQuestions(dayObj()).length);
        const sc = Math.min(1, 900 / Math.max(omr.W, omr.H));
        const w = Math.max(50, Math.round(omr.W * sc));
        const h = Math.max(50, Math.round(omr.H * sc));

        // downscaled grayscale
        const g = new Uint8ClampedArray(w * h);
        for (let y = 0; y < h; y++) {
            const row = Math.min(omr.H - 1, Math.round(y / sc)) * omr.W;
            for (let x = 0; x < w; x++) {
                g[y * w + x] = omr.gray[row + Math.min(omr.W - 1, Math.round(x / sc))];
            }
        }

        // integral image for local-mean thresholding
        const ii = new Uint32Array((w + 1) * (h + 1));
        for (let y = 0; y < h; y++) {
            let rs = 0;
            for (let x = 0; x < w; x++) {
                rs += g[y * w + x];
                ii[(y + 1) * (w + 1) + x + 1] = ii[y * (w + 1) + x + 1] + rs;
            }
        }
        const win = Math.max(8, Math.round(Math.max(w, h) / 24));
        const ink = new Uint8Array(w * h);
        for (let y = 0; y < h; y++) {
            const y0 = Math.max(0, y - win), y1 = Math.min(h - 1, y + win);
            for (let x = 0; x < w; x++) {
                const x0 = Math.max(0, x - win), x1 = Math.min(w - 1, x + win);
                const area = (x1 - x0 + 1) * (y1 - y0 + 1);
                const sum = ii[(y1 + 1) * (w + 1) + x1 + 1] - ii[y0 * (w + 1) + x1 + 1]
                    - ii[(y1 + 1) * (w + 1) + x0] + ii[y0 * (w + 1) + x0];
                const px = g[y * w + x];
                ink[y * w + x] = (px < (sum / area) * 0.87 && px < 220) ? 1 : 0;
            }
        }

        // connected components (4-neighbour flood fill)
        const label = new Int32Array(w * h);
        const stack = new Int32Array(w * h);
        const comps = [];
        let nextLabel = 0;
        for (let i = 0; i < w * h; i++) {
            if (!ink[i] || label[i]) continue;
            nextLabel++;
            let sp = 0, count = 0, minX = w, maxX = -1, minY = h, maxY = -1;
            stack[sp++] = i; label[i] = nextLabel;
            while (sp) {
                const p = stack[--sp];
                const px = p % w, py = (p / w) | 0;
                count++;
                if (px < minX) minX = px; if (px > maxX) maxX = px;
                if (py < minY) minY = py; if (py > maxY) maxY = py;
                if (px > 0 && ink[p - 1] && !label[p - 1]) { label[p - 1] = nextLabel; stack[sp++] = p - 1; }
                if (px < w - 1 && ink[p + 1] && !label[p + 1]) { label[p + 1] = nextLabel; stack[sp++] = p + 1; }
                if (py > 0 && ink[p - w] && !label[p - w]) { label[p - w] = nextLabel; stack[sp++] = p - w; }
                if (py < h - 1 && ink[p + w] && !label[p + w]) { label[p + w] = nextLabel; stack[sp++] = p + w; }
            }
            comps.push({ id: nextLabel, count, minX, maxX, minY, maxY });
        }

        // keep components that look like tall block borders, left to right
        let cand = comps.filter(c => {
            const bw = c.maxX - c.minX + 1, bh = c.maxY - c.minY + 1;
            if (bh < 0.32 * h || bw < 0.04 * w || bw > 0.97 * w || bh > 0.985 * h) return false;
            if (c.minX <= 1 || c.minY <= 1 || c.maxX >= w - 2 || c.maxY >= h - 2) return false;
            return c.count / (bw * bh) < 0.6 && c.count > (bw + bh);
        });
        // drop containers (paper-edge ring / outer frame): a much bigger box holding another candidate
        const bboxArea = c => (c.maxX - c.minX + 1) * (c.maxY - c.minY + 1);
        cand = cand.filter(a => !cand.some(b => b !== a &&
            bboxArea(a) > 1.4 * bboxArea(b) &&
            b.minX >= a.minX - 2 && b.maxX <= a.maxX + 2 &&
            b.minY >= a.minY - 2 && b.maxY <= a.maxY + 2));
        // drop height outliers (edge shadows etc.) vs the median candidate
        if (cand.length > 1) {
            const hs = cand.map(c => c.maxY - c.minY + 1).sort((a, b) => a - b);
            const med = hs[(hs.length - 1) >> 1];
            cand = cand.filter(c => {
                const bh = c.maxY - c.minY + 1;
                return bh > 0.72 * med && bh < 1.38 * med;
            });
        }
        cand.sort((a, b) => (a.minX + a.maxX) - (b.minX + b.maxX));
        if (!cand.length) return false;

        // pick the blocks the selected day actually uses
        let chosen, cutFrac = 0;
        if (cand.length >= nBlocks) {
            chosen = cand.slice(0, nBlocks);
        } else {
            chosen = cand;
            // borders merged into one component: cut the 4-block table proportionally
            if (nBlocks < 4 && cand.length === 1 && (cand[0].maxX - cand[0].minX) > 0.55 * w) {
                const gpf = omr.gapFrac, wB = (1 - 3 * gpf) / 4;
                cutFrac = nBlocks * wB + (nBlocks - 1) * gpf;
            }
        }
        const use = new Uint8Array(nextLabel + 1);
        chosen.forEach(c => { use[c.id] = 1; });

        // extreme-point corners of the chosen borders (true quad, handles tilt)
        let tl = null, tr = null, br = null, bl = null;
        let vTL = Infinity, vTR = -Infinity, vBR = -Infinity, vBL = Infinity;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (!use[label[y * w + x]]) continue;
                const s = x + y, d = x - y;
                if (s < vTL) { vTL = s; tl = { x, y }; }
                if (s > vBR) { vBR = s; br = { x, y }; }
                if (d > vTR) { vTR = d; tr = { x, y }; }
                if (d < vBL) { vBL = d; bl = { x, y }; }
            }
        }
        if (!tl || !tr || !br || !bl) return false;
        if (cutFrac > 0) {
            tr = { x: tl.x + (tr.x - tl.x) * cutFrac, y: tl.y + (tr.y - tl.y) * cutFrac };
            br = { x: bl.x + (br.x - bl.x) * cutFrac, y: bl.y + (br.y - bl.y) * cutFrac };
        }

        const area = 0.5 * Math.abs(
            tl.x * (tr.y - bl.y) + tr.x * (br.y - tl.y) + br.x * (bl.y - tr.y) + bl.x * (tl.y - br.y));
        if (area < 0.10 * w * h) return false;

        omr.corners = [tl, tr, br, bl].map(p => ({ x: p.x / sc, y: p.y / sc }));

        // estimate the block gap from the detected boxes
        // (bboxes widen by blockHeight*sin(tilt), which shrinks the visible gap — undo that)
        if (chosen.length >= 2) {
            const s = Math.abs(Math.sin(Math.atan2(tr.y - tl.y, tr.x - tl.x)));
            const avgH = chosen.reduce((a, c) => a + (c.maxY - c.minY + 1), 0) / chosen.length;
            let gaps = 0;
            for (let i = 1; i < chosen.length; i++) gaps += (chosen[i].minX - chosen[i - 1].maxX) + avgH * s;
            const span = (chosen[chosen.length - 1].maxX - chosen[0].minX + 1) - avgH * s;
            const gf = Math.max(0, Math.min(0.05, (gaps / (chosen.length - 1)) / Math.max(1, span)));
            omr.gapFrac = gf;
            const gapEl = $("omrGap");
            if (gapEl) gapEl.value = String(Math.round(gf * 1000));
        }
        return true;
    }

    /* ---------- stages ---------- */
    function setStage(stage, hint) {
        $("omrIdle").hidden = stage !== "idle";
        $("omrLive").hidden = stage !== "live";
        $("omrFrozen").hidden = stage !== "frozen";
        $("omrStartBtn").hidden = stage === "live";
        $("omrCaptureBtn").hidden = stage !== "live";
        $("omrRetakeBtn").hidden = stage !== "frozen";
        $("omrTune").hidden = stage !== "frozen";
        if (hint) $("omrHint").textContent = hint;
    }

    /* ---------- live camera + alignment guide ---------- */
    async function startCamera() {
        stopCamera();
        const video = $("omrVideo");
        try {
            omr.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1920 } },
                audio: false
            });
            video.srcObject = omr.stream;
            await video.play();
            setStage("live", "Hold the sheet flat and fit the whole bubble table inside the blue frame, then capture.");
            drawGuide();
        } catch (err) {
            setStage("idle", "Camera unavailable (" + (err && err.name ? err.name : "error") +
                "). You can still upload a photo of the sheet.");
        }
    }

    function stopCamera() {
        if (omr.stream) {
            omr.stream.getTracks().forEach(t => t.stop());
            omr.stream = null;
        }
        const video = $("omrVideo");
        if (video) video.srcObject = null;
    }

    function contentRect(video) {
        const ew = video.clientWidth, eh = video.clientHeight;
        const vw = video.videoWidth || 4, vh = video.videoHeight || 3;
        const va = vw / vh, ea = ew / eh;
        if (ea > va) { const h = eh, w = h * va; return { x: (ew - w) / 2, y: 0, w, h }; }
        const w = ew, h = w / va;
        return { x: 0, y: (eh - h) / 2, w, h };
    }

    function drawGuide() {
        const video = $("omrVideo"), cv = $("omrGuide");
        if (!video || video.videoWidth === 0 || $("omrLive").hidden) return;
        const dpr = window.devicePixelRatio || 1;
        cv.width = video.clientWidth * dpr;
        cv.height = video.clientHeight * dpr;
        const ctx = cv.getContext("2d");
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, video.clientWidth, video.clientHeight);

        const r = contentRect(video);
        const fx = r.x + r.w * GUIDE_MX, fy = r.y + r.h * GUIDE_MY;
        const fw = r.w * (1 - 2 * GUIDE_MX), fh = r.h * (1 - 2 * GUIDE_MY);

        // dim outside the frame
        ctx.fillStyle = "rgba(15,23,42,0.42)";
        ctx.beginPath();
        ctx.rect(r.x, r.y, r.w, r.h);
        ctx.rect(fx, fy, fw, fh);
        ctx.fill("evenodd");

        ctx.strokeStyle = "rgba(96,165,250,0.95)";
        ctx.lineWidth = 2;
        ctx.strokeRect(fx, fy, fw, fh);

        // block dividers + row ticks for the selected day
        const N = flatQuestions(dayObj()).length;
        const nBlocks = blockCount(N);
        const gap = omr.gapFrac, wB = (1 - gap * (nBlocks - 1)) / nBlocks;
        ctx.strokeStyle = "rgba(96,165,250,0.45)";
        ctx.lineWidth = 1;
        for (let b = 1; b < nBlocks; b++) {
            const x = fx + fw * (b * (wB + gap) - gap / 2);
            ctx.beginPath(); ctx.moveTo(x, fy); ctx.lineTo(x, fy + fh); ctx.stroke();
        }
        for (let t = 1; t < 5; t++) {
            const y = fy + fh * t / 5;
            ctx.beginPath(); ctx.moveTo(fx, y); ctx.lineTo(fx + 8, y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(fx + fw - 8, y); ctx.lineTo(fx + fw, y); ctx.stroke();
        }

        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("Fit the bubble table (" + (nBlocks * 50 >= N ? N : nBlocks * 50) +
            " questions \u00B7 " + nBlocks + (nBlocks > 1 ? " columns" : " column") + ") in this frame", fx + 10, fy + 20);
    }

    /* ---------- capture / upload ---------- */
    function adoptImage(source, sw, sh, insetX, insetY) {
        const scale = Math.min(1, MAX_DIM / Math.max(sw, sh));
        const W = Math.max(2, Math.round(sw * scale));
        const H = Math.max(2, Math.round(sh * scale));
        const img = document.createElement("canvas");
        img.width = W; img.height = H;
        img.getContext("2d").drawImage(source, 0, 0, W, H);
        omr.img = img;
        omr.W = W; omr.H = H;
        omr.gray = buildGray(img);
        omr.corners = [
            { x: W * insetX, y: H * insetY },
            { x: W * (1 - insetX), y: H * insetY },
            { x: W * (1 - insetX), y: H * (1 - insetY) },
            { x: W * insetX, y: H * (1 - insetY) }
        ];
        const auto = autoDetectCorners();
        setStage("frozen", auto
            ? "Bubble table detected automatically \u2014 green dots sit on your marks. Drag a corner or tap a tile only if something looks off."
            : "Couldn't find the table automatically \u2014 drag the corner handles so the frame hugs the bubble table.");
        detect();
    }

    function capture() {
        const video = $("omrVideo");
        if (!video.videoWidth) return;
        adoptImage(video, video.videoWidth, video.videoHeight, GUIDE_MX, GUIDE_MY);
        // keep the stream warm for "Retake"
    }

    function retake() {
        omr.letters = [];
        omr.dotRows = [];
        if (omr.stream) {
            setStage("live", "Align the sheet inside the frame, then capture.");
            drawGuide();
        } else {
            setStage("idle", "Start the camera or upload a photo of the filled sheet.");
        }
        renderReport();
    }

    function onFile(ev) {
        const file = ev.target.files && ev.target.files[0];
        ev.target.value = "";
        if (!file) return;
        const url = URL.createObjectURL(file);
        const im = new Image();
        im.onload = () => {
            stopCamera();
            adoptImage(im, im.naturalWidth, im.naturalHeight, 0.08, 0.08);
            URL.revokeObjectURL(url);
        };
        im.onerror = () => { URL.revokeObjectURL(url); $("omrHint").textContent = "Could not read that image \u2014 try another photo."; };
        im.src = url;
    }

    /* ---------- open / close / apply ---------- */
    function resetScan() {
        stopCamera();
        omr.letters = [];
        omr.dotRows = [];
        omr.img = null;
        omr.gray = null;
        omr.corners = null;
    }

    function openScanner() {
        window.CEE_APP.openOmr();
        renderReport();
        setStage("idle", "Start the camera and align the sheet, or upload a photo. Bubbles must be filled solid black.");
    }

    function closeScanner() {
        resetScan();
        window.CEE_APP.closeOmr();
    }

    function applyScan() {
        if (!omr.letters.length) return;
        const n = omr.dayNum;
        if (window.CEE_APP.isSubmitted(n) &&
            !confirm("Day " + n + " already has a saved result. Overwrite it with this scanned sheet?")) return;
        const answers = {};
        flatQuestions(dayObj()).forEach((q, i) => {
            const letter = omr.letters[i];
            if (letter && letter !== "x") answers[q.id] = letter;
        });
        resetScan();
        window.CEE_APP.applyScan(n, answers);
    }

    /* ---------- init ---------- */
    // Open the scanner preloaded with a specific day's answer key (used by day cards).
    window.CEE_OMR = {
        open(dayNum) {
            if (dayNum && DAYS.some(d => d.day === dayNum)) {
                omr.dayNum = dayNum;
                const sel = $("omrDaySel");
                if (sel) sel.value = String(dayNum);
            }
            resetScan();
            openScanner();
        }
    };

    function fillDaySelect() {
        const sel = $("omrDaySel");
        DAYS.forEach(day => {
            const n = flatQuestions(day).length;
            const opt = document.createElement("option");
            opt.value = day.day;
            opt.textContent = "Day " + day.day + " \u00B7 " + n + " Q \u00B7 " + day.subtitle;
            sel.appendChild(opt);
        });
        sel.value = String(omr.dayNum);
    }

    function init() {
        if (!$("omrView")) return;
        fillDaySelect();

        $("omrOpenBtn").addEventListener("click", openScanner);
        $("omrBack").addEventListener("click", closeScanner);
        $("omrStartBtn").addEventListener("click", startCamera);
        $("omrCaptureBtn").addEventListener("click", capture);
        $("omrRetakeBtn").addEventListener("click", retake);
        $("omrUploadBtn").addEventListener("click", () => $("omrFile").click());
        $("omrFile").addEventListener("change", onFile);
        $("omrApplyBtn").addEventListener("click", applyScan);
        $("omrCells").addEventListener("click", onCellClick);

        $("omrDaySel").addEventListener("change", (ev) => {
            omr.dayNum = +ev.target.value;
            drawGuide();
            if (omr.gray) { autoDetectCorners(); detect(); } else renderReport();
        });
        $("omrAutoBtn").addEventListener("click", () => {
            if (!omr.gray) return;
            const ok = autoDetectCorners();
            $("omrHint").textContent = ok
                ? "Bubble table re-detected \u2014 check that the green dots sit on your marks."
                : "Couldn't find the table automatically \u2014 drag the corner handles instead.";
            detect();
        });
        $("omrNumW").addEventListener("input", (ev) => {
            omr.numFrac = +ev.target.value / 100;
            if (omr.gray) scheduleDetect();
        });
        $("omrGap").addEventListener("input", (ev) => {
            omr.gapFrac = +ev.target.value / 1000;
            if (omr.gray) scheduleDetect();
        });

        const work = $("omrWork");
        work.addEventListener("pointerdown", onPointerDown);
        work.addEventListener("pointermove", onPointerMove);
        work.addEventListener("pointerup", onPointerUp);
        work.addEventListener("pointercancel", onPointerUp);

        const video = $("omrVideo");
        video.addEventListener("loadedmetadata", drawGuide);
        window.addEventListener("resize", drawGuide);
        window.addEventListener("pagehide", stopCamera);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
