/* The access key is a convenience gate, not a security boundary; question data is public. */
(function () {
    "use strict";

    const ACCESS_KEY = " ";                 // a single space
    const STORE_KEY = "cee_civil_v1";
    const UNLOCK_KEY = "cee_civil_unlocked"; // sessionStorage, cleared when the tab closes
    const PAGE_SIZE = 20;

    const $ = (id) => document.getElementById(id);
    const pad = (n) => String(n).padStart(2, "0");
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    // this section belongs to Bibek, not to the CEE dashboard owner (STUDENT in questions.js)
    const CANDIDATE = "Bibek";

    /* ---------- sets ---------- */
    // set files are versioned with the same ?v= query this script was loaded with
    const VER = (document.currentScript && document.currentScript.src.indexOf("?") > -1)
        ? "?" + document.currentScript.src.split("?")[1] : "";

    const SETS = (window.CIVIL_SET_INDEX || []).map((meta) => ({ key: meta.key, no: meta.n, meta: meta, set: null }));
    const pending = {};

    function loadSetData(entry) {
        const cache = window.CIVIL_SET_DATA || (window.CIVIL_SET_DATA = {});
        if (cache[entry.key]) return Promise.resolve(cache[entry.key]);
        if (pending[entry.key]) return pending[entry.key];
        pending[entry.key] = new Promise((resolve, reject) => {
            const tag = document.createElement("script");
            const timeout = setTimeout(() => fail("Loading timed out. Please retry."), 25000);
            function fail(message) {
                clearTimeout(timeout);
                tag.onload = null;
                tag.onerror = null;
                tag.remove();
                reject(new Error(message));
            }
            tag.src = entry.meta.file + VER;
            tag.onload = () => {
                clearTimeout(timeout);
                if (cache[entry.key]) resolve(cache[entry.key]);
                else fail("The question file did not finish loading. Please retry.");
            };
            tag.onerror = () => fail("Could not load questions. Check your connection and retry.");
            document.head.appendChild(tag);
        }).catch((error) => { delete pending[entry.key]; throw error; });
        return pending[entry.key];
    }

    function flatten(set) {
        const out = [];
        set.chapters.forEach((ch) => ch.questions.forEach((q) => out.push({ q: q, ch: ch, no: out.length + 1 })));
        return out;
    }

    const totalOf = (set) => set.chapters.reduce((n, ch) => n + ch.questions.length, 0);

    /* ---------- state ---------- */
    let store = { sets: {} };
    let unlocked = false;
    let active = null;          // { key, no, set }
    let items = [];             // flattened questions of the active set
    let page = 0;
    let showUnanswered = false;
    let reviewFilter = "all";
    let ticker = null;
    let armedSubmit = false;    // true while the confirm modal is open
    let practice = null;
    let notes = null;
    let loadToken = 0;
    let modelLoading = false;
    let currentView = "gate";
    let modalAction = null;
    let modalFocus = null;

    function freshSet() {
        return { answers: {}, flags: {}, endsAt: null, submitted: false, autoSubmitted: false, best: null, summary: null };
    }

    function stateOf(key) {
        if (!store.sets[key]) store.sets[key] = freshSet();
        return store.sets[key];
    }

    function load() {
        try {
            const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
            if (raw && raw.sets) store = raw;
        } catch (e) { /* corrupt or unavailable storage — start clean */ }
        SETS.forEach((s) => stateOf(s.key));
        try { unlocked = sessionStorage.getItem(UNLOCK_KEY) === "1"; } catch (e) { unlocked = false; }
    }

    function save() {
        try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* quota / private mode */ }
    }

    /* ---------- scoring ---------- */
    function grade(entry) {
        const set = entry.set, st = stateOf(entry.key);
        const total = totalOf(set);
        let correct = 0, wrong = 0, answered = 0;
        const bySubject = {};
        set.chapters.forEach((ch) => {
            const row = bySubject[ch.name] || (bySubject[ch.name] = { name: ch.name, total: 0, correct: 0, wrong: 0, answered: 0 });
            ch.questions.forEach((q) => {
                row.total++;
                const a = st.answers[q.id];
                if (a == null) return;
                answered++; row.answered++;
                if (a === q.answer) { correct++; row.correct++; } else { wrong++; row.wrong++; }
            });
        });
        const neg = set.negativeMarking || 0;
        const score = Math.round((correct - wrong * neg) * 100) / 100;
        return {
            total, correct, wrong, answered, score,
            skipped: total - answered,
            pct: total ? Math.round(score / total * 100) : 0,
            accuracy: answered ? Math.round(correct / answered * 100) : 0,
            subjects: Object.keys(bySubject).map((k) => bySubject[k])
        };
    }

    /* ---------- views ---------- */
    function setSessionMode(mode) {
        if (mode) $("civilSection").dataset.sessionMode = mode;
        else delete $("civilSection").dataset.sessionMode;
        document.body.classList.toggle("civil-session", !!mode);
        $("cvGoTop").hidden = mode === "practice" || !["exam", "result", "learning"].includes(currentView);
    }

    function show(view, tab) {
        if (view !== "notes" && notes) notes.suspend();
        currentView = view;
        setSessionMode(view === "exam" ? "exam" : null);
        $("cvGate").hidden = view !== "gate";
        $("cvApp").hidden = view === "gate";
        const views = { dash: "cvDash", sets: "cvSets", practice: "cvPractice", chapters: "cvChapters", notes: "cvNotes", learning: "cvLearning", exam: "cvExam", result: "cvResult" };
        Object.entries(views).forEach(([name, id]) => { $(id).hidden = name !== view; });
        $("cvGoTop").hidden = !["exam", "result", "learning"].includes(view);
        const activeTab = tab || (["exam", "result"].includes(view) ? "sets" : view);
        const titles = { dash: "Overview", chapters: "Question bank", notes: "Chapter notes", practice: "Build a session", sets: "Model papers", saved: "Saved questions" };
        $("cvWorkspaceTitle").textContent = titles[activeTab] || "Civil Engineering";
        $("cvNav").querySelectorAll("[data-cv-nav]").forEach((button) => {
            const active = button.dataset.cvNav === activeTab;
            button.classList.toggle("active", active);
            if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
            if (active && $("cvNav").clientWidth) {
                const navBox = $("cvNav").getBoundingClientRect(), buttonBox = button.getBoundingClientRect();
                if (buttonBox.right > navBox.right) $("cvNav").scrollLeft += buttonBox.right - navBox.right + 8;
                else if (buttonBox.left < navBox.left) $("cvNav").scrollLeft += buttonBox.left - navBox.left - 8;
            }
        });
        window.scrollTo({ top: 0, behavior: "auto" });
    }

    function navigate(view) {
        if (!unlocked) return;
        loadToken++;
        stopTicker();
        closeModal();
        practice.suspend();
        modelLoading = false;
        if (view === "saved") { practice.openSaved(); return; }
        if (view === "notes") { show("notes"); notes.render(); return; }
        if (view === "practice") practice.renderBuilder();
        else if (view === "chapters") practice.renderChapters();
        else if (view === "dash" || view === "sets") renderDash();
        else return;
        show(view);
    }

    function openSection() {
        load();
        if (window.CEE_APP && window.CEE_APP.openCivil) window.CEE_APP.openCivil();
        if (unlocked) navigate("dash");
        else { $("cvPass").value = ""; $("cvGateErr").hidden = true; show("gate"); $("cvPass").focus(); }
    }

    function lock() {
        unlocked = false;
        try { sessionStorage.removeItem(UNLOCK_KEY); } catch (e) { /* ignore */ }
        loadToken++;
        practice.suspend();
        closeModal();
        stopTicker();
        $("cvPass").value = "";
        $("cvGateErr").hidden = true;
        show("gate");
    }

    function tryUnlock() {
        if ($("cvPass").value !== ACCESS_KEY) {
            $("cvGateErr").hidden = false;
            $("cvPass").select();
            return;
        }
        unlocked = true;
        try { sessionStorage.setItem(UNLOCK_KEY, "1"); } catch (e) { /* ignore */ }
        $("cvGateErr").hidden = true;
        navigate("dash");
    }

    /* ---------- dashboard ---------- */
    const ICON = {
        sets: '<path d="M4 5h16M4 12h16M4 19h10"/>',
        tests: '<path d="M9 11l3 3L20 6"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
        best: '<path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21l2.3-7.4-6-4.6h7.6z"/>',
        avg: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/>',
        play: '<path d="M6 4l14 8-14 8z" fill="currentColor" stroke="none"/>',
        resume: '<path d="M6 4l14 8-14 8z" fill="currentColor" stroke="none"/>',
        review: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
    };

    function kpi(cls, icon, value, label) {
        return `<div class="cv-kpi">
            <span class="cv-kpi-ic ${cls}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">${icon}</svg></span>
            <div><div class="cv-kpi-v">${value}</div><div class="cv-kpi-k">${label}</div></div>
        </div>`;
    }

    function renderDash() {
        // built from the catalogue + saved state only, so no set file has to be loaded here
        const rows = SETS.map((e) => ({ e: e, st: stateOf(e.key) }));
        const done = rows.filter((r) => r.st.submitted && r.st.summary);
        const personalBests = rows.filter((r) => r.st.best || r.st.submitted && r.st.summary);
        const bestPct = personalBests.length ? Math.max.apply(null, personalBests.map((r) => r.st.best ? r.st.best.pct : r.st.summary.pct)) : null;
        const avgPct = done.length ? Math.round(done.reduce((s, r) => s + r.st.summary.pct, 0) / done.length) : null;
        const allQ = SETS.reduce((n, e) => n + e.meta.total, 0);

        $("cvHeroName").textContent = "Welcome, " + CANDIDATE + ".";

        $("cvKpis").innerHTML =
            kpi("sets", ICON.sets, SETS.length, "Model papers") +
            kpi("tests", ICON.tests, done.length + "<small style=\"font-size:15px;opacity:.6\">/" + SETS.length + "</small>", "Sets completed") +
            kpi("best", ICON.best, bestPct == null ? "\u2014" : bestPct + "%", "Best exam score") +
            kpi("avg", ICON.avg, avgPct == null ? "\u2014" : avgPct + "%", "Average exam score");

        const unfinished = rows.find((row) => !row.st.submitted && (row.st.endsAt || Object.keys(row.st.answers).length));
        $("cvModelResume").innerHTML = unfinished ? `<div class="cv-resume-card"><div class="cv-resume-copy"><b>Continue your model exam</b><span>${esc(unfinished.e.meta.title)} &middot; ${Object.keys(unfinished.st.answers).length} of ${unfinished.e.meta.total} answered</span></div><button type="button" class="cv-btn cv-btn-ghost" data-open="${unfinished.e.key}">Resume model exam</button></div>` : "";
        const query = $("cvSetSearch").value.trim().toLowerCase();
        const statusFilter = $("cvSetStatus").value;
        const visibleRows = rows.filter((row) => {
            const status = row.st.submitted ? "done" : row.st.endsAt || Object.keys(row.st.answers).length ? "live" : "new";
            return (statusFilter === "all" || statusFilter === status) && (row.e.meta.title.toLowerCase().includes(query) || String(row.e.no) === query);
        });
        $("cvSetList").innerHTML = visibleRows.map((r) => {
                const meta = r.e.meta, st = r.st;
                const answered = Object.keys(st.answers).length;
                const live = !st.submitted && (st.endsAt || answered > 0);
                const cls = st.submitted ? "is-done" : live ? "is-live" : "";
                return `<article class="cs-paper ${cls}"><div class="cs-paper-top"><span class="cs-paper-number">PAPER ${String(meta.n).padStart(2, "0")}</span><span class="cv-pill ${st.submitted ? "done" : live ? "live" : "new"}">${st.submitted ? "Exam completed" : live ? "Exam in progress" : "Ready to begin"}</span></div>
                    <h3>${esc(meta.title)}</h3><div class="cs-paper-meta"><span>${meta.total} questions</span><span>${meta.durationMinutes} min exam</span><span>${meta.chapters.length} subjects</span></div>
                    <div class="cs-paper-progress" role="progressbar" aria-label="Model exam answered" aria-valuemin="0" aria-valuemax="${meta.total}" aria-valuenow="${answered}"><span style="width:${Math.min(100, answered / meta.total * 100)}%"></span></div>
                    <div class="cs-paper-score"><small>Personal best · exam</small><b>${st.best ? st.best.pct + "%" : "—"}</b></div>
                    <div class="cs-paper-actions"><button type="button" class="cv-btn" data-open="${meta.key}">${st.submitted ? "Review exam" : live ? "Resume exam" : "Start exam"}</button><button type="button" class="cv-btn cv-btn-ghost" data-model-practice="${meta.key}">Practice</button></div></article>`;
            }).join("") + (!visibleRows.length ? '<div class="cv-empty"><b>No matching model sets</b><p>Clear the search or choose another status.</p></div>' : "");

        const bank = {};
        SETS.forEach((e) => e.meta.chapters.forEach((c) => { bank[c.name] = (bank[c.name] || 0) + c.count; }));
        const names = Object.keys(bank);
        const max = Math.max.apply(null, names.map((n) => bank[n]));
        $("cvBreakdown").innerHTML = `<div class="cv-break">
            <div class="cv-break-row" style="border-bottom:1px solid #e3ecef">
                <b style="text-align:left;font-size:14px;color:var(--cv-ink)">All ${SETS.length} sets combined</b>
                <span></span><span class="cv-muted" style="font-size:12px;text-align:right">${allQ.toLocaleString("en-US")} Q</span>
            </div>` +
            names.map((n) => `<div class="cv-break-row">
                <span>${esc(n)}</span>
                <div class="cv-break-bar"><span style="width:${Math.round(bank[n] / max * 100)}%"></span></div>
                <b>${bank[n]}</b>
            </div>`).join("") + `</div>`;

        practice.renderDashboard();
    }

    /* ---------- exam ---------- */
    function openSet(key) {
        if (!unlocked) return;
        const entry = SETS.find((s) => s.key === key);
        if (!entry) return;
        const token = ++loadToken;
        stopTicker();
        practice.suspend();
        closeModal();
        active = null;
        modelLoading = true;
        $("cvExam").querySelectorAll("button:not(#cvBackToSets)").forEach((button) => { button.disabled = true; });
        $("cvEiName").textContent = "Preparing your model exam";
        $("cvTimer").textContent = "--:--";
        $("cvEiAnswered").textContent = "The timer starts after questions are ready.";
        $("cvEiPopup").hidden = true;
        const st = stateOf(key);
        $("cvExamTitle").textContent = entry.meta.title;
        $("cvExamSub").textContent = "Loading questions\u2026";
        $("cvQuestions").innerHTML = '<p class="cv-muted" style="padding:22px 4px">Loading questions\u2026</p>';
        $("cvPagerNums").innerHTML = "";
        show("exam");
        loadSetData(entry).then((data) => {
            if (token !== loadToken || !unlocked || $("civilSection").hidden) return;
            modelLoading = false;
            $("cvExam").querySelectorAll("button").forEach((button) => { button.disabled = false; });
            entry.set = data;
            active = entry;
            items = flatten(data);
            page = 0;
            showUnanswered = false;
            if (st.submitted) { reviewFilter = "all"; renderResult(); show("result"); return; }
            if (!st.endsAt) { st.endsAt = Date.now() + (data.durationMinutes || entry.meta.durationMinutes) * 60 * 1000; save(); }
            if (st.endsAt <= Date.now()) { st.autoSubmitted = true; submitSet(); return; }
            renderExam();
            show("exam");
            startTicker();
        }).catch((err) => {
            if (token !== loadToken || !unlocked || $("civilSection").hidden) return;
            modelLoading = false;
            $("cvExamSub").textContent = "";
            $("cvQuestions").innerHTML = `<div class="cv-empty" role="alert"><b>Questions could not be loaded</b><p>${esc(err.message)}</p><button type="button" class="cv-btn" data-open="${entry.key}">Retry loading</button></div>`;
        });
    }

    function answeredCount() {
        const st = stateOf(active.key);
        return items.reduce((n, it) => n + (st.answers[it.q.id] != null ? 1 : 0), 0);
    }

    function renderExam() {
        const set = active.set, st = stateOf(active.key);
        const total = items.length;
        const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
        page = Math.min(Math.max(0, page), pages - 1);
        const start = page * PAGE_SIZE;
        const slice = items.slice(start, start + PAGE_SIZE);

        $("cvExamTitle").textContent = set.title;
        $("cvExamSub").textContent = set.subtitle + " \u00b7 " + total + " questions \u00b7 " +
            set.durationMinutes + " minutes \u00b7 " +
            (set.negativeMarking ? set.negativeMarking + " deducted per wrong answer" : "no negative marking");

        const name = CANDIDATE;
        $("cvEiName").textContent = name + " (ID: " + active.key.toUpperCase() + ")";
        $("cvEiPhoto").textContent = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

        $("cvPagerInfo").innerHTML = "Questions <b>" + (start + 1) + "\u2013" + Math.min(start + PAGE_SIZE, total) + "</b> of " + total;
        $("cvPagerInfoBottom").textContent = "Page " + (page + 1) + " of " + pages;
        $("cvPrev").disabled = page === 0;
        $("cvPrevBottom").disabled = page === 0;
        $("cvNext").disabled = page >= pages - 1;
        $("cvNextBottom").hidden = page >= pages - 1;
        $("cvSubmitBottom").hidden = page < pages - 1;

        $("cvPagerNums").innerHTML = Array.from({ length: pages }, (_, p) => {
            const chunk = items.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE);
            const allDone = chunk.every((it) => st.answers[it.q.id] != null);
            const anyFlag = chunk.some((it) => st.flags[it.q.id]);
            return `<button type="button" class="cv-pager-num${p === page ? " active" : ""}${allDone ? " done" : ""}${anyFlag ? " flagged" : ""}" data-page="${p}">${p + 1}</button>`;
        }).join("");

        let lastCh = null;
        $("cvQuestions").innerHTML = slice.map((it) => {
            const q = it.q, chosen = st.answers[q.id];
            const band = it.ch !== lastCh ? `<div class="cv-subject-band">${esc(it.ch.name)}</div>` : "";
            lastCh = it.ch;
            return band + `<div class="cv-q${st.flags[q.id] ? " flagged" : ""}" id="cvq-${it.no}">
                <div class="cv-q-head">
                    <span class="cv-q-num">${it.no}.</span>
                    <span class="cv-q-body">${q.text}</span>
                </div>
                <div class="cv-q-meta">
                    <span>(1 mark)</span>
                    <button type="button" class="cv-flag${st.flags[q.id] ? " on" : ""}" data-flag="${q.id}"
                        title="${st.flags[q.id] ? "Flagged for review" : "Flag for review"}" aria-label="Flag for review" aria-pressed="${!!st.flags[q.id]}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
                        </svg>
                    </button>
                </div>
                <ul class="cv-opts">${q.options.map((o) => `
                    <li class="cv-opt cv-option-row${chosen === o.key ? " selected" : ""}" data-pick="${q.id}" data-key="${o.key}">
                        <label class="cv-option-label"><input type="radio" name="cvq-${q.id}" data-model-pick="${q.id}" value="${o.key}" ${chosen === o.key ? "checked" : ""}>
                        <span class="cv-ltr">${o.key})</span><span class="cv-option-text">${o.text}</span></label>
                    </li>`).join("")}</ul>
            </div>`;
        }).join("");

        typeset($("cvQuestions"));
        updateInfobox();

        $("cvPagerNums").querySelectorAll("[data-page]").forEach((b) =>
            b.addEventListener("click", () => { page = +b.dataset.page; renderExam(); window.scrollTo({ top: $("cvExam").offsetTop - 20, behavior: "smooth" }); }));
        $("cvQuestions").querySelectorAll("[data-model-pick]").forEach((input) =>
            input.addEventListener("change", () => pick(input.dataset.modelPick, input.value)));
        $("cvQuestions").querySelectorAll("[data-flag]").forEach((b) =>
            b.addEventListener("click", () => toggleFlag(b.dataset.flag)));
    }

    function pick(qid, key) {
        if (!active || modelLoading || currentView !== "exam") return;
        const st = stateOf(active.key);
        if (st.submitted) return;
        if (st.endsAt && st.endsAt <= Date.now()) { st.autoSubmitted = true; submitSet(); return; }
        const item = items.find((item) => item.q.id === qid);
        if (!item || !item.q.options.some((option) => option.key === key)) return;
        st.answers[qid] = key;
        save();
        $("cvQuestions").querySelectorAll(`[data-pick="${qid}"]`).forEach((li) => {
            const on = li.dataset.key === key;
            li.classList.toggle("selected", on);
            li.querySelector("input").checked = on;
        });
        refreshPagerDots();
        updateInfobox();
    }

    function toggleFlag(qid) {
        if (!active || modelLoading || currentView !== "exam") return;
        const st = stateOf(active.key);
        if (st.submitted) return;
        if (st.flags[qid]) delete st.flags[qid]; else st.flags[qid] = true;
        save();
        renderExam();
    }

    function refreshPagerDots() {
        const st = stateOf(active.key);
        $("cvPagerNums").querySelectorAll("[data-page]").forEach((b) => {
            const p = +b.dataset.page;
            const chunk = items.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE);
            b.classList.toggle("done", chunk.every((it) => st.answers[it.q.id] != null));
            b.classList.toggle("flagged", chunk.some((it) => st.flags[it.q.id]));
        });
    }

    function updateInfobox() {
        const st = stateOf(active.key);
        const done = answeredCount(), total = items.length;
        $("cvEiAnswered").innerHTML = "You have answered <b>" + done + "</b> out of <b>" + total + "</b>";
        $("cvExamCount").textContent = "Answered " + done + " / " + total;
        const popup = $("cvEiPopup");
        popup.hidden = !showUnanswered;
        $("cvEiLink").textContent = (showUnanswered ? "Hide" : "View") + " unanswered questions";
        if (showUnanswered) {
            const list = items.filter((it) => st.answers[it.q.id] == null).map((it) => it.no);
            popup.innerHTML = list.length ? "<b>Unanswered:</b> " + list.join(", ") : "All questions answered.";
        }
        renderTimer();
    }

    /* ---------- timer ---------- */
    function fmtTimer(sec) {
        const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
        return h > 0 ? h + ":" + pad(m) + ":" + pad(s) : pad(m) + ":" + pad(s);
    }

    function renderTimer() {
        if (!active) return;
        const st = stateOf(active.key);
        const left = st.endsAt ? Math.max(0, Math.round((st.endsAt - Date.now()) / 1000)) : 0;
        const b = $("cvTimer");
        b.textContent = fmtTimer(left);
        b.className = left <= 300 ? "danger" : left <= 900 ? "warn" : "";
        return left;
    }

    function startTicker() {
        stopTicker();
        ticker = setInterval(() => {
            if (!active) return stopTicker();
            const st = stateOf(active.key);
            if (st.submitted || !st.endsAt) return stopTicker();
            if (renderTimer() <= 0) {
                stopTicker();
                st.autoSubmitted = true;
                submitSet();
            }
        }, 1000);
    }

    function stopTicker() {
        if (ticker) { clearInterval(ticker); ticker = null; }
    }

    /* ---------- submit ---------- */
    function askSubmit() {
        if (!active || modelLoading || currentView !== "exam" || stateOf(active.key).submitted) return;
        const done = answeredCount(), total = items.length;
        requestModal({ title: "Submit model exam?", label: "Submit exam", html:
            "You have attempted <b>" + done + "</b> out of <b>" + total + "</b> questions. Submit your answers?" +
            (done < total ? '<br><span class="cv-muted">Unanswered questions score 0 (no penalty).</span>' : ""), action: submitSet });
    }

    function requestModal({ title, html, label, action }) {
        armedSubmit = true;
        modalFocus = document.activeElement;
        modalAction = action;
        $("cvModalTitle").textContent = title;
        $("cvModalBody").innerHTML = html;
        $("cvModalOk").textContent = label;
        $("cvModalBack").hidden = false;
        $("cvModalCancel").focus();
    }

    function closeModal() {
        armedSubmit = false;
        modalAction = null;
        $("cvModalBack").hidden = true;
        if (modalFocus && modalFocus.isConnected) modalFocus.focus();
        modalFocus = null;
    }

    function submitSet() {
        if (!active || stateOf(active.key).submitted) return;
        const st = stateOf(active.key);
        st.submitted = true;
        st.endsAt = null;
        const g = grade(active);
        st.summary = { total: g.total, correct: g.correct, wrong: g.wrong, answered: g.answered, score: g.score, pct: g.pct };
        if (!st.best || g.pct > st.best.pct) st.best = { score: g.score, total: g.total, pct: g.pct, at: Date.now() };
        stopTicker();
        closeModal();
        save();
        reviewFilter = "all";
        renderResult();
        show("result");
    }

    function retake() {
        if (!active) return;
        requestModal({ title: "Retake this model set?", label: "Retake set", html:
            "Your latest answers in this set will be reset. Your personal best, practice results and saved questions will stay saved.", action: () => {
        const st = stateOf(active.key);
        const best = st.best;
        store.sets[active.key] = freshSet();
        store.sets[active.key].best = best;      // keep the personal best across retakes
        save();
        openSet(active.key);
        } });
    }

    /* ---------- result ---------- */
    function renderResult() {
        const set = active.set, st = stateOf(active.key), g = grade(active);
        items = flatten(set);

        $("cvResEyebrow").textContent = set.title + " \u00b7 Result";
        $("cvResTitle").textContent = g.score + " / " + g.total + " marks \u00b7 " + g.pct + "%";
        $("cvResNote").textContent = (st.autoSubmitted ? "Time expired \u2014 the paper was submitted automatically. " : "") +
            "Accuracy " + g.accuracy + "% on " + g.answered + " attempted question" + (g.answered === 1 ? "" : "s") + ".";

        $("cvResStats").innerHTML =
            `<div class="cv-res-stat gray"><div class="cv-res-badge">${g.answered}</div><div class="cv-res-label">Attempted</div></div>
             <div class="cv-res-stat green"><div class="cv-res-badge">${g.correct}</div><div class="cv-res-label">Correct</div></div>
             <div class="cv-res-stat red"><div class="cv-res-badge">${g.wrong}</div><div class="cv-res-label">Incorrect</div></div>
             <div class="cv-res-stat gold"><div class="cv-res-badge">${g.score}</div><div class="cv-res-label">Score</div></div>`;

        $("cvSubjTable").innerHTML =
            `<div class="cv-subj-row head"><span>Subject</span><span>Accuracy</span><b>Correct</b><b>Total</b></div>` +
            g.subjects.map((s) => {
                const p = s.total ? Math.round(s.correct / s.total * 100) : 0;
                return `<div class="cv-subj-row">
                    <span>${esc(s.name)}</span>
                    <div class="cv-subj-meter"><span style="width:${p}%"></span></div>
                    <b>${s.correct}</b><b>${s.total}</b>
                </div>`;
            }).join("");

        renderReview();
    }

    function renderReview() {
        const st = stateOf(active.key);
        $("cvReviewFilters").querySelectorAll("[data-filter]").forEach((b) =>
            b.classList.toggle("active", b.dataset.filter === reviewFilter));

        const keep = items.filter((it) => {
            const a = st.answers[it.q.id];
            if (reviewFilter === "correct") return a === it.q.answer;
            if (reviewFilter === "wrong") return a != null && a !== it.q.answer;
            if (reviewFilter === "skipped") return a == null;
            if (reviewFilter === "flagged") return !!st.flags[it.q.id];
            return true;
        });

        let lastCh = null;
        $("cvReview").innerHTML = keep.length ? keep.map((it) => {
            const q = it.q, a = st.answers[q.id];
            const band = it.ch !== lastCh ? `<div class="cv-subject-band">${esc(it.ch.name)}</div>` : "";
            lastCh = it.ch;
            return band + `<div class="cv-q">
                <div class="cv-q-head"><span class="cv-q-num">${it.no}.</span><span class="cv-q-body">${q.text}</span></div>
                <div class="cv-q-meta"><span>${a == null ? "Not answered" : a === q.answer ? "Correct" : "Incorrect"}</span>${practice.bookmarkButton(it).replace("data-cp-action", "data-cv-action")}</div>
                <ul class="cv-opts">${q.options.map((o) => {
                    const cls = o.key === q.answer ? " correct" : (a === o.key ? " wrong" : "");
                    return `<li class="cv-opt${cls}" style="cursor:default">
                        <input type="radio" disabled ${a === o.key ? "checked" : ""}>
                        <span class="cv-ltr">${o.key})</span><span>${o.text}</span></li>`;
                }).join("")}</ul>
                ${q.explanation ? `<div class="cv-solution"><span class="cv-sol-tag">Solution</span>${q.explanation}</div>` : ""}
            </div>`;
        }).join("") : `<p class="cv-muted" style="padding:18px 4px">No questions in this filter.</p>`;

        typeset($("cvReview"));
    }

    function typeset(node) {
        if (window.MathJax && window.MathJax.typesetPromise) {
            const ready = window.MathJax.startup && window.MathJax.startup.promise || Promise.resolve();
            ready.then(() => window.MathJax.typesetPromise([node])).catch(() => { /* rendering is best-effort */ });
        }
    }

    /* ---------- wiring ---------- */
    function wire() {
        if (!$("civilSection")) return;

        practice = window.CIVIL_PRACTICE.create({ $, esc, entries: SETS, loadSet: loadSetData, show,
            navigate, setSessionMode, confirm: requestModal, closeModal, typeset, candidate: CANDIDATE,
            isOpen: () => unlocked && !$("civilSection").hidden });
        notes = window.CIVIL_NOTES.create({ $, esc, syllabus: window.CIVIL_SYLLABUS, entries: SETS, loadSet: loadSetData, typeset,
            isOpen: () => unlocked && currentView === "notes" && !$("civilSection").hidden,
            startTopic: (code, mode) => practice.practiceTopic(code, mode) });
        $("civilSection").addEventListener("click", (event) => {
            if (!unlocked) return;
            const nav = event.target.closest("[data-cv-nav]");
            const model = event.target.closest("[data-open]");
            const modelPractice = event.target.closest("[data-model-practice]");
            const bookmark = event.target.closest('[data-cv-action="bookmark"]');
            if (nav) {
                if (nav.dataset.cvMode) practice.setBuilderMode(nav.dataset.cvMode);
                if (nav.dataset.noteTopic) notes.selectTopic(nav.dataset.noteTopic);
                navigate(nav.dataset.cvNav);
            }
            else if (model && !model.disabled) openSet(model.dataset.open);
            else if (modelPractice && !modelPractice.disabled) { loadToken++; stopTicker(); closeModal(); practice.suspend(); practice.practiceModel(modelPractice.dataset.modelPractice); }
            else if (bookmark) {
                const item = items.find((item) => (item.q.src || item.q.id) === bookmark.dataset.id);
                if (item) {
                    practice.toggleBookmark(item);
                    bookmark.outerHTML = practice.bookmarkButton(item).replace("data-cp-action", "data-cv-action");
                }
            }
        });
        $("cvSetSearch").addEventListener("input", renderDash);
        $("cvSetStatus").addEventListener("change", renderDash);

        $("civilOpenBtn").addEventListener("click", openSection);
        $("cvUnlock").addEventListener("click", tryUnlock);
        $("cvPass").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); tryUnlock(); } });
        $("cvGateBack").addEventListener("click", () => { if (window.CEE_APP) window.CEE_APP.closeCivil(); });
        $("cvLock").addEventListener("click", lock);
        $("cvExit").addEventListener("click", () => {
            loadToken++; stopTicker(); practice.suspend(); notes.suspend(); closeModal();
            setSessionMode(null);
            if (window.CEE_APP) window.CEE_APP.closeCivil();
        });

        $("cvBackToSets").addEventListener("click", () => {
            if (!active || modelLoading) { navigate("sets"); return; }
            requestModal({ title: "Leave this exam?", label: "Save & leave", html: "Your answers stay saved and the exam timer continues while you are away. Resume this paper from Model papers.", action: () => navigate("sets") });
        });
        $("cvResBack").addEventListener("click", () => navigate("sets"));
        $("cvRetake").addEventListener("click", retake);

        $("cvEiLink").addEventListener("click", () => { showUnanswered = !showUnanswered; updateInfobox(); });
        $("cvPrev").addEventListener("click", () => { page--; renderExam(); });
        $("cvNext").addEventListener("click", () => { page++; renderExam(); window.scrollTo({ top: $("cvExam").offsetTop - 20, behavior: "smooth" }); });
        $("cvPrevBottom").addEventListener("click", () => { page--; renderExam(); window.scrollTo({ top: $("cvExam").offsetTop - 20, behavior: "smooth" }); });
        $("cvNextBottom").addEventListener("click", () => { page++; renderExam(); window.scrollTo({ top: $("cvExam").offsetTop - 20, behavior: "smooth" }); });
        $("cvSubmit").addEventListener("click", askSubmit);
        $("cvSubmitBottom").addEventListener("click", askSubmit);
        $("cvModalCancel").addEventListener("click", closeModal);
        $("cvModalOk").addEventListener("click", () => {
            const action = modalAction;
            closeModal();
            if (action) action();
        });
        $("cvGoTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        document.addEventListener("keydown", (e) => {
            if (!armedSubmit) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "Tab") {
                const first = $("cvModalCancel"), last = $("cvModalOk");
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });

        $("cvReviewFilters").querySelectorAll("[data-filter]").forEach((b) =>
            b.addEventListener("click", () => { reviewFilter = b.dataset.filter; renderReview(); }));

        load();
        if (!SETS.length) {
            $("cvSetList").innerHTML = '<p class="cv-muted" style="padding:14px">No civil model sets are loaded.</p>';
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
    else wire();
})();
