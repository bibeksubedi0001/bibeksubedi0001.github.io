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

    // max over a small neighbourhood — tolerates the grid sitting slightly off a fill
    function darknessMax(x, y, r) {
        const rr = r * 0.75, st = r * 0.6;
        let m = 0;
        for (let oy = -1; oy <= 1; oy++) {
            for (let ox = -1; ox <= 1; ox++) {
                const d = darknessAt(x + ox * st, y + oy * st, rr);
                if (d > m) m = d;
            }
        }
        return m;
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
                cells.push({ p, d: darknessMax(p.x, p.y, r) });
            }
            const base = Math.min(cells[0].d, cells[1].d, cells[2].d, cells[3].d);
            const marked = [];
            cells.forEach((cell, i) => { if (cell.d - base > FILL_REL) marked.push({ i, ex: cell.d - base }); });

            let letter = null;
            if (marked.length === 1) letter = LETTERS[marked[0].i];
            else if (marked.length > 1) {
                marked.sort((m, n2) => n2.ex - m.ex);
                // single answer only if the darkest clearly dominates the runner-up
                letter = (marked[0].ex - marked[1].ex > MULTI_GAP && marked[0].ex > 2 * marked[1].ex)
                    ? LETTERS[marked[0].i] : "x";
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
    // Progressive passes catch faint / thin / blurry print; dilation heals broken lines.
    function autoDetectCorners() {
        if (!omr.img || !omr.gray) return false;
        const nBlocks = blockCount(flatQuestions(dayObj()).length);
        const sc = Math.min(1, 1100 / Math.max(omr.W, omr.H));
        const w = Math.max(60, Math.round(omr.W * sc));
        const h = Math.max(60, Math.round(omr.H * sc));

        // area-averaged downscale (nearest-neighbour sampling loses 1px printed lines)
        const dc = document.createElement("canvas");
        dc.width = w; dc.height = h;
        const dctx = dc.getContext("2d", { willReadFrequently: true });
        dctx.imageSmoothingEnabled = true;
        dctx.imageSmoothingQuality = "high";
        dctx.drawImage(omr.img, 0, 0, w, h);
        const data = dctx.getImageData(0, 0, w, h).data;
        const g = new Uint8ClampedArray(w * h);
        for (let i = 0, p = 0; p < g.length; i += 4, p++) {
            g[p] = (data[i] * 77 + data[i + 1] * 150 + data[i + 2] * 29) >> 8;
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

        const passes = [
            { f: 0.87, cap: 220, dil: 1, minH: 0.30, edge: false },
            { f: 0.93, cap: 235, dil: 1, minH: 0.26, edge: false },
            { f: 0.97, cap: 246, dil: 2, minH: 0.20, edge: true }
        ];
        // score every pass's quad against the actual bubble content and keep the best —
        // a paper outline can masquerade as a border in an early pass while the true
        // (fainter) borders only appear in a later one
        const oldGap = omr.gapFrac;
        let best = null;
        let firstFound = null; // earliest geometric quad, kept for empty sheets
        const dbg = [];
        for (let pi = 0; pi < passes.length; pi++) {
            const r = detectPass(g, ii, w, h, nBlocks, passes[pi]);
            if (!r) { dbg.push({ pi, found: false }); continue; }
            const corners = [r.tl, r.tr, r.br, r.bl].map(p => ({ x: p.x / sc, y: p.y / sc }));

            // estimate the block gap from the detected boxes
            // (bboxes widen by blockHeight*sin(tilt), which shrinks the visible gap — undo that)
            const chosen = r.chosen;
            let gf = null;
            if (chosen.length >= 2) {
                const s = Math.abs(Math.sin(Math.atan2(r.tr.y - r.tl.y, r.tr.x - r.tl.x)));
                const avgH = chosen.reduce((a, c) => a + (c.maxY - c.minY + 1), 0) / chosen.length;
                let gaps = 0;
                for (let i = 1; i < chosen.length; i++) gaps += (chosen[i].minX - chosen[i - 1].maxX) + avgH * s;
                const span = (chosen[chosen.length - 1].maxX - chosen[0].minX + 1) - avgH * s;
                gf = Math.max(0, Math.min(0.05, (gaps / (chosen.length - 1)) / Math.max(1, span)));
            }

            omr.gapFrac = gf != null ? gf : oldGap;
            const sq = scoreQuad(corners);
            omr.gapFrac = oldGap;
            const score = sq.single - 0.5 * sq.multi + Math.min(sq.meanEx, 150) / 1500;
            const plausible = sq.single >= 0.15 && sq.multi <= 0.35 && sq.meanEx >= 55;
            dbg.push({
                pi, found: true, nChosen: r.chosen.length, gf,
                corners: corners.map(c => [Math.round(c.x), Math.round(c.y)]),
                single: +sq.single.toFixed(3), multi: +sq.multi.toFixed(3),
                meanEx: Math.round(sq.meanEx), score: +score.toFixed(3), plausible
            });
            if (!firstFound) firstFound = { corners, gf };
            if (plausible && (!best || score > best.score)) best = { corners, gf, score };
        }
        if (window.CEE_OMR) window.CEE_OMR._debug = { w, h, sc, dbg };

        // content-based grid fit: rectify via the paper outline (or whole image)
        // and globally lock onto the 50-row / option-column pattern — works even
        // when the printed borders are too faint to see; always competes with the
        // border quad and the better-scoring one wins
        const paper = detectPaperQuad(g, w, h, sc);
        if (window.CEE_OMR) window.CEE_OMR._debug.paper = { isPaper: paper.isPaper, quad: paper.quad.map(p => [Math.round(p.x), Math.round(p.y)]) };
        const fits = gridFitRect(paper.quad, nBlocks, paper.isPaper) || [];
        if (window.CEE_OMR) window.CEE_OMR._debug.fit = fits.map(f => f.dbg);

        const cands = [];
        const borderCand = best || firstFound;
        if (borderCand) {
            // the number-column width varies between sheet designs — scan for the
            // best fit before letting the border quad compete
            let bNf = omr.numFrac, bMet = -Infinity;
            const keepNf2 = omr.numFrac, keepGf2 = omr.gapFrac;
            omr.gapFrac = borderCand.gf != null ? borderCand.gf : oldGap;
            for (let nf = 0.10; nf <= 0.281; nf += 0.02) {
                omr.numFrac = nf;
                const sq = scoreQuad(borderCand.corners);
                const met = sq.single - 0.5 * sq.multi + Math.min(sq.meanEx, 150) / 1500;
                if (met > bMet) { bMet = met; bNf = nf; }
            }
            omr.numFrac = keepNf2; omr.gapFrac = keepGf2;
            cands.push({ corners: borderCand.corners, nf: bNf, gf: borderCand.gf != null ? borderCand.gf : oldGap, tag: "border" });
        }
        fits.forEach((f, i) => cands.push({ corners: f.corners, nf: f.nf, gf: f.gf, tag: "gridfit" + i }));
        let win = null;
        for (const cd of cands) {
            const keepNf = omr.numFrac, keepGf = omr.gapFrac;
            omr.numFrac = cd.nf; omr.gapFrac = cd.gf;
            const sq = scoreQuad(cd.corners);
            const rc = rowContrast(cd.corners);
            omr.numFrac = keepNf; omr.gapFrac = keepGf;
            cd.metric = sq.single - 0.5 * sq.multi + Math.min(sq.meanEx, 150) / 1500 + Math.min(rc, 40) / 40;
            cd.plaus = sq.single >= 0.15 && sq.multi <= 0.35 && sq.meanEx >= 55 && rc >= 4;
            cd.sq = { single: +sq.single.toFixed(3), multi: +sq.multi.toFixed(3), meanEx: Math.round(sq.meanEx), rc: +rc.toFixed(1) };
        }
        if (window.CEE_OMR) window.CEE_OMR._debug.cands = cands.map(c => ({ tag: c.tag, metric: +c.metric.toFixed(3), plaus: c.plaus, sq: c.sq }));
        cands.forEach(cd => { if (cd.plaus && (!win || cd.metric > win.metric)) win = cd; });
        // empty / barely-filled sheet: no content to validate against — trust the
        // geometric border quad (or the grid fit) rather than giving up, preferring
        // whichever aligns with the 50-row rhythm
        if (!win && cands.length) {
            let structBest = null;
            cands.forEach(cd => {
                if (cd.sq.rc >= 4 && (!structBest || cd.sq.rc > structBest.sq.rc)) structBest = cd;
            });
            win = structBest || cands.find(c => c.tag === "border") || cands[0];
            if (window.CEE_OMR) window.CEE_OMR._debug.weak = true;
        }
        if (!win) { omr.gapFrac = oldGap; return false; }
        omr.corners = win.corners;
        omr.numFrac = win.nf;
        omr.gapFrac = win.gf;
        syncTuneSliders();
        if (window.CEE_OMR) window.CEE_OMR._debug.mode = win.tag;
        return true;
    }

    function syncTuneSliders() {
        const nEl = $("omrNumW"), gEl = $("omrGap");
        if (nEl) nEl.value = String(Math.round(omr.numFrac * 100));
        if (gEl) gEl.value = String(Math.round(omr.gapFrac * 1000));
    }

    // paper = largest bright region of the photo (fallback: the whole image)
    function detectPaperQuad(g, w, h, sc) {
        // Otsu split, iterated: if it only splits off dark speckle (nearly all
        // "bright"), re-run on the upper class until paper separates from carpet
        const hist = new Uint32Array(256);
        let total = 0;
        for (let i = 0; i < g.length; i += 4) { hist[g[i]]++; total++; }
        let lo = 0, thr = 127;
        for (let round = 0; round < 3; round++) {
            let sum = 0, cnt = 0;
            for (let i = lo; i < 256; i++) { sum += i * hist[i]; cnt += hist[i]; }
            let sumB = 0, wB = 0, maxVar = -1;
            thr = lo;
            for (let t = lo; t < 256; t++) {
                wB += hist[t];
                if (!wB) continue;
                const wF = cnt - wB;
                if (!wF) break;
                sumB += t * hist[t];
                const mB = sumB / wB, mF = (sum - sumB) / wF;
                const v = wB * wF * (mB - mF) * (mB - mF);
                if (v > maxVar) { maxVar = v; thr = t; }
            }
            let brightN = 0;
            for (let t = thr + 1; t < 256; t++) brightN += hist[t];
            if (brightN / total <= 0.92) break;
            lo = thr + 1;
        }
        thr = Math.max(100, thr + 1);
        let brightN = 0;
        for (let t = thr; t < 256; t++) brightN += hist[t];
        if (brightN / total > 0.92) { // no distinct background — photo is all paper
            return { quad: [{ x: 0, y: 0 }, { x: omr.W, y: 0 }, { x: omr.W, y: omr.H }, { x: 0, y: omr.H }], isPaper: false };
        }
        const bright = new Uint8Array(w * h);
        for (let i = 0; i < g.length; i++) bright[i] = g[i] >= thr ? 1 : 0;
        // close thin dark creases (paper folds) that would split the paper in two;
        // corners are still measured on the ORIGINAL bright pixels only
        let mask = bright;
        for (let d = 0; d < 2; d++) {
            const src = mask;
            mask = new Uint8Array(w * h);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const i = y * w + x;
                    if (src[i] ||
                        (x > 0 && src[i - 1]) || (x < w - 1 && src[i + 1]) ||
                        (y > 0 && src[i - w]) || (y < h - 1 && src[i + w])) mask[i] = 1;
                }
            }
        }

        const label = new Int32Array(w * h);
        const stack = new Int32Array(w * h);
        let bestC = null, next = 0;
        for (let i = 0; i < w * h; i++) {
            if (!mask[i] || label[i]) continue;
            next++;
            let sp = 0, count = 0;
            let vTL = Infinity, vTR = -Infinity, vBR = -Infinity, vBL = Infinity;
            let tl = null, tr = null, br = null, bl = null;
            stack[sp++] = i; label[i] = next;
            while (sp) {
                const p = stack[--sp];
                const x = p % w, y = (p / w) | 0;
                count++;
                if (bright[p]) {
                    const s = x + y, d2 = x - y;
                    if (s < vTL) { vTL = s; tl = { x, y }; }
                    if (s > vBR) { vBR = s; br = { x, y }; }
                    if (d2 > vTR) { vTR = d2; tr = { x, y }; }
                    if (d2 < vBL) { vBL = d2; bl = { x, y }; }
                }
                if (x > 0 && mask[p - 1] && !label[p - 1]) { label[p - 1] = next; stack[sp++] = p - 1; }
                if (x < w - 1 && mask[p + 1] && !label[p + 1]) { label[p + 1] = next; stack[sp++] = p + 1; }
                if (y > 0 && mask[p - w] && !label[p - w]) { label[p - w] = next; stack[sp++] = p - w; }
                if (y < h - 1 && mask[p + w] && !label[p + w]) { label[p + w] = next; stack[sp++] = p + w; }
            }
            if (tl && (!bestC || count > bestC.count)) bestC = { count, tl, tr, br, bl };
        }
        if (!bestC || bestC.count < 0.25 * w * h) {
            return { quad: [{ x: 0, y: 0 }, { x: omr.W, y: 0 }, { x: omr.W, y: omr.H }, { x: 0, y: omr.H }], isPaper: false };
        }
        return { quad: [bestC.tl, bestC.tr, bestC.br, bestC.bl].map(p => ({ x: p.x / sc, y: p.y / sc })), isPaper: true };
    }

    // rectify through the reference quad, then fit rows (50-comb) and the
    // block/option column structure on 1-D darkness profiles
    function gridFitRect(refQuad, nBlocks, isPaper) {
        const M = quadMapper(refQuad);
        const WR = 840, HR = 1120;
        const gImg = omr.gray, GW = omr.W, GH = omr.H;
        const colD = new Uint8Array(WR * HR);
        const rowProf = new Float64Array(HR);
        for (let yy = 0; yy < HR; yy++) {
            const v = (yy + 0.5) / HR;
            let rs = 0;
            for (let xx = 0; xx < WR; xx++) {
                const u = (xx + 0.5) / WR;
                const p = M(u, v);
                let d = 0;
                const xi = p.x | 0, yi = p.y | 0;
                if (xi >= 0 && yi >= 0 && xi < GW && yi < GH) d = 255 - gImg[yi * GW + xi];
                colD[yy * WR + xx] = d;
                rs += d;
            }
            rowProf[yy] = rs / WR;
        }
        smooth1d(rowProf, 2);

        const idx = (arr, x) => arr[Math.max(0, Math.min(arr.length - 1, Math.round(x)))];
        // high-pass the profile so bold print (headers, summary tables) can't
        // dominate — only the fast row-to-row rhythm survives
        const hp = new Float64Array(HR);
        {
            const R2 = 30;
            for (let y = 0; y < HR; y++) {
                let s = 0, c = 0;
                for (let j = Math.max(0, y - R2); j <= Math.min(HR - 1, y + R2); j++) { s += rowProf[j]; c++; }
                hp[y] = Math.max(0, rowProf[y] - s / c);
            }
        }
        // row pitch via autocorrelation — periodicity is unambiguous even when other
        // tables/headers lurk on the sheet
        const pMaxCap = ((isPaper ? 0.80 : 1.0) * HR) / 50;
        const pMin = 6, pMax = Math.max(pMin + 1, Math.min(26, Math.floor(pMaxCap)));
        const acArr = [];
        let acMax = 0;
        for (let p = pMin; p <= pMax; p++) {
            let s = 0, n = 0;
            for (let y = 0; y + p < HR; y++) { s += hp[y] * hp[y + p]; n++; }
            const v = s / n;
            acArr.push({ p, v });
            if (v > acMax) acMax = v;
        }
        const pitches = [];
        for (let i = 0; i < acArr.length && pitches.length < 3; i++) {
            const a = acArr[i];
            const l = i > 0 ? acArr[i - 1].v : -1, r = i < acArr.length - 1 ? acArr[i + 1].v : -1;
            if (a.v >= 0.72 * acMax && a.v >= l && a.v >= r) pitches.push(a.p);
        }
        if (!pitches.length) pitches.push(acArr.reduce((m, a) => (a.v > m.v ? a : m), acArr[0]).p);
        if (window.CEE_OMR && window.CEE_OMR._debug) window.CEE_OMR._debug.ac = {
            pitches, top: acArr.slice().sort((a, b) => b.v - a.v).slice(0, 6).map(a => ({ p: a.p, v: Math.round(a.v) }))
        };

        // phase search at (nearly) locked pitch; ends just outside must be quiet
        const comb = (t, p) => {
            let s = 0;
            for (let r = 0; r < 50; r++) s += idx(hp, t + (r + 0.5) * p);
            for (let r = 1; r < 50; r++) s -= 0.9 * idx(hp, t + r * p);
            s -= 4 * idx(hp, t - p / 2);
            s -= 4 * idx(hp, t + 50 * p + p / 2);
            return s;
        };
        const rowCands = [];
        for (const p0 of pitches) {
            for (let p = p0 - 0.8; p <= p0 + 0.8001; p += 0.1) {
                const span = 50 * p;
                if (span > (isPaper ? 0.82 : 1.0) * HR || span < 0.28 * HR) continue;
                for (let t = 0; t + span <= HR; t += 1) {
                    rowCands.push({ t, hh: span, s: comb(t, p) });
                }
            }
        }
        if (!rowCands.length) return null;
        rowCands.sort((a, b) => b.s - a.s);
        // only the best comb fit competes — content metrics can't tell a row-shifted
        // grid from the true one, but the comb score always can
        const picks = [];
        for (const rc of rowCands) {
            if (picks.length >= 1) break;
            if (picks.some(pk => Math.abs(pk.t - rc.t) < 10 && Math.abs(pk.hh - rc.hh) < 14)) continue;
            picks.push({ ...rc });
        }
        const results = [];
        for (const pick of picks) {
            const fit = fitColumns(colProfFor(pick.t, pick.hh), pick.t, pick.hh);
            if (fit) results.push(fit);
        }
        return results;

        function colProfFor(bt, bh) {
            const colProf = new Float64Array(WR);
            const y0 = Math.max(0, Math.round(bt)), y1 = Math.min(HR - 1, Math.round(bt + bh));
            for (let xx = 0; xx < WR; xx++) {
                let s = 0;
                for (let yy = y0; yy <= y1; yy++) s += colD[yy * WR + xx];
                colProf[xx] = s / Math.max(1, y1 - y0 + 1);
            }
            smooth1d(colProf, 2);
            return colProf;
        }

        function fitColumns(colProf, bt, bh) {
            const prints = nBlocks === 4 ? [4] : [4, nBlocks];
            let bestF = null;
            for (const nPrint of prints) {
                for (let L = 0; L <= 0.30001; L += 0.01) {
                    for (let R = Math.min(1, L + 0.5); R <= 1.00001; R += 0.01) {
                        for (let gRel = 0; gRel <= 0.0251; gRel += 0.005) {
                            for (let nf = 0.12; nf <= 0.301; nf += 0.02) {
                                const s = colScore(colProf, WR, L, R, gRel, nf, nPrint);
                                if (!bestF || s > bestF.s) bestF = { s, L, R, gRel, nf, nPrint };
                            }
                        }
                    }
                }
            }
            if (!bestF) return null;
            for (let L = Math.max(0, bestF.L - 0.012); L <= bestF.L + 0.0121; L += 0.003) {
                for (let R = Math.max(L + 0.4, bestF.R - 0.012); R <= Math.min(1, bestF.R + 0.012) + 1e-9; R += 0.003) {
                    for (let gRel = Math.max(0, bestF.gRel - 0.004); gRel <= bestF.gRel + 0.0041; gRel += 0.002) {
                        for (let nf = Math.max(0.10, bestF.nf - 0.03); nf <= bestF.nf + 0.0301; nf += 0.01) {
                            const s = colScore(colProf, WR, L, R, gRel, nf, bestF.nPrint);
                            if (s > bestF.s) bestF = { s, L, R, gRel, nf, nPrint: bestF.nPrint };
                        }
                    }
                }
            }

            const T = bestF.R - bestF.L;
            const wB = T * (1 - bestF.gRel * (bestF.nPrint - 1)) / bestF.nPrint;
            const gAbs = T * bestF.gRel;
            const uL = bestF.L;
            const uR = bestF.L + nBlocks * wB + (nBlocks - 1) * gAbs;
            const vT = bt / HR, vB = (bt + bh) / HR;
            const corners = [M(uL, vT), M(uR, vT), M(uR, vB), M(uL, vB)].map(p => ({ x: p.x, y: p.y }));
            const span = uR - uL;
            return {
                corners,
                nf: bestF.nf,
                gf: span > 0 ? Math.max(0, Math.min(0.05, gAbs / span)) : omr.gapFrac,
                dbg: { bt: Math.round(bt), bh: Math.round(bh), L: +bestF.L.toFixed(3), R: +bestF.R.toFixed(3), gRel: bestF.gRel, nf: bestF.nf, nPrint: bestF.nPrint }
            };
        }
    }

    // peaks at number column (digits/cross-outs) + 4 option columns; valleys between
    // options, between numbers and A, and in the block gaps — the extra valleys pin
    // the phase so the fit can't lock one option-column off
    function colScore(colProf, WR, L, R, gRel, nf, nPrint) {
        const T = R - L;
        const wB = T * (1 - gRel * (nPrint - 1)) / nPrint;
        if (wB <= 0.02) return -Infinity;
        const at = (u) => colProf[Math.max(0, Math.min(WR - 1, Math.round(u * WR)))];
        let peaks = 0, valleys = 0, nPk = 0, nVl = 0;
        let prevD = null;
        for (let b = 0; b < nPrint; b++) {
            const bl = L + b * (wB + T * gRel);
            const numU = bl + wB * nf * 0.5;
            peaks += 0.75 * at(numU); nPk += 0.75;
            if (prevD != null) { valleys += at((prevD + bl) / 2); nVl++; } // block gap
            let prev = null;
            for (let o = 0; o < 4; o++) {
                const u = bl + wB * (nf + (1 - nf) * (o + 0.5) / 4);
                peaks += at(u); nPk++;
                if (prev != null) { valleys += at((prev + u) / 2); nVl++; }
                else { valleys += at((numU + u) / 2); nVl++; } // numbers -> A
                prev = u;
            }
            prevD = prev;
        }
        return peaks / nPk - 0.85 * (valleys / nVl);
    }

    function smooth1d(a, r) {
        const n = a.length, src = Float64Array.from(a);
        for (let i = 0; i < n; i++) {
            let s = 0, c = 0;
            for (let j = Math.max(0, i - r); j <= Math.min(n - 1, i + r); j++) { s += src[j]; c++; }
            a[i] = s / c;
        }
    }

    // structural check: mean darkness on the 50 row-centre lines minus the 49
    // between-row lines, sampled through the quad — near zero for misaligned quads
    function rowContrast(corners) {
        const map = quadMapper(corners);
        const nBlocks = blockCount(flatQuestions(dayObj()).length);
        const r = Math.max(1.5, sampleRadius(map, nBlocks) * 0.5);
        const line = (v) => {
            let s = 0, n = 0;
            for (let k = 0; k < 24; k++) {
                const u = 0.02 + 0.96 * (k + 0.5) / 24;
                const p = map(u, v);
                s += darknessAt(p.x, p.y, r); n++;
            }
            return s / n;
        };
        let centres = 0, bounds = 0;
        for (let i = 0; i < 50; i++) centres += line((i + 0.5) / 50);
        for (let i = 1; i < 50; i++) bounds += line(i / 50);
        return centres / 50 - bounds / 49;
    }

    // fraction of questions that read as one clean fill / as smeared multi-fills;
    // EXACT-centre sampling on purpose — misaligned grids must score badly here
    // (final reading uses the tolerant darknessMax instead)
    function scoreQuad(corners) {
        const N = flatQuestions(dayObj()).length;
        const nBlocks = blockCount(N);
        const map = quadMapper(corners);
        const r = sampleRadius(map, nBlocks);
        let single = 0, multi = 0, exSum = 0;
        for (let qi = 0; qi < N; qi++) {
            const ds = [];
            for (let oi = 0; oi < 4; oi++) {
                const { u, v } = bubbleUV(qi, oi, nBlocks);
                const p = map(u, v);
                ds.push(darknessAt(p.x, p.y, r));
            }
            const base = Math.min(ds[0], ds[1], ds[2], ds[3]);
            const marked = ds.filter(d => d - base > FILL_REL).length;
            if (marked === 1) { single++; exSum += Math.max(ds[0], ds[1], ds[2], ds[3]) - base; }
            else if (marked > 1) multi++;
        }
        return { single: single / N, multi: multi / N, meanEx: single ? exSum / single : 0 };
    }

    function detectPass(g, ii, w, h, nBlocks, ps) {
        const win = Math.max(8, Math.round(Math.max(w, h) / 24));
        let ink = new Uint8Array(w * h);
        for (let y = 0; y < h; y++) {
            const y0 = Math.max(0, y - win), y1 = Math.min(h - 1, y + win);
            for (let x = 0; x < w; x++) {
                const x0 = Math.max(0, x - win), x1 = Math.min(w - 1, x + win);
                const area = (x1 - x0 + 1) * (y1 - y0 + 1);
                const sum = ii[(y1 + 1) * (w + 1) + x1 + 1] - ii[y0 * (w + 1) + x1 + 1]
                    - ii[(y1 + 1) * (w + 1) + x0] + ii[y0 * (w + 1) + x0];
                const px = g[y * w + x];
                ink[y * w + x] = (px < (sum / area) * ps.f && px < ps.cap) ? 1 : 0;
            }
        }
        // dilate to heal thin/broken border lines
        for (let d = 0; d < ps.dil; d++) {
            const src = ink;
            ink = new Uint8Array(w * h);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const i = y * w + x;
                    if (src[i] ||
                        (x > 0 && src[i - 1]) || (x < w - 1 && src[i + 1]) ||
                        (y > 0 && src[i - w]) || (y < h - 1 && src[i + w])) ink[i] = 1;
                }
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

        // keep components that look like tall block borders
        let cand = comps.filter(c => {
            const bw = c.maxX - c.minX + 1, bh = c.maxY - c.minY + 1;
            if (bh < ps.minH * h || bw < 0.035 * w || bw > 0.97 * w || bh > 0.99 * h) return false;
            if (!ps.edge && (c.minX <= 1 || c.minY <= 1 || c.maxX >= w - 2 || c.maxY >= h - 2)) return false;
            return c.count / (bw * bh) < 0.6 && c.count > 0.6 * (bw + bh);
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
        if (!cand.length) return null;

        // pick the blocks the selected day actually uses
        let chosen, cutFrac = 0;
        if (cand.length >= nBlocks) {
            // best consecutive window: most uniform widths and clean gaps
            let best = null;
            for (let i = 0; i + nBlocks <= cand.length; i++) {
                const grp = cand.slice(i, i + nBlocks);
                const ws = grp.map(c => c.maxX - c.minX + 1);
                const meanW = ws.reduce((a, b) => a + b, 0) / ws.length;
                let score = ws.reduce((a, b) => a + Math.abs(b - meanW), 0) / meanW;
                for (let j = 1; j < grp.length; j++) {
                    const gp = grp[j].minX - grp[j - 1].maxX;
                    score += (gp < 0 ? 2 : gp / meanW) * 0.5;
                }
                if (!best || score < best.score) best = { grp, score };
            }
            chosen = best.grp;
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
        if (!tl || !tr || !br || !bl) return null;
        if (cutFrac > 0) {
            tr = { x: tl.x + (tr.x - tl.x) * cutFrac, y: tl.y + (tr.y - tl.y) * cutFrac };
            br = { x: bl.x + (br.x - bl.x) * cutFrac, y: bl.y + (br.y - bl.y) * cutFrac };
        }

        const area = 0.5 * Math.abs(
            tl.x * (tr.y - bl.y) + tr.x * (br.y - tl.y) + br.x * (bl.y - tr.y) + bl.x * (tl.y - br.y));
        if (area < 0.06 * w * h) return null;
        return { tl, tr, br, bl, chosen };
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
        // fresh layout params per photo — a previous scan's fitted values must not leak
        omr.numFrac = 0.20;
        omr.gapFrac = 0.010;
        syncTuneSliders();
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
