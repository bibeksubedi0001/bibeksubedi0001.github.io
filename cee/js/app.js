/* ============================================================
   CEE Preparation Dashboard — Application logic
   Multi-day tests · per-day timer (default 36 min) · 25% negative marking
   Single-scroll jumbled exam · persistent marks history
   ============================================================ */

(function () {
    "use strict";

    /* ---------- constants ---------- */
    const STORAGE_KEY = "cee_dashboard_prakriti";
    const LEGACY_KEYS = ["cee_dashboard_prakriti_v3", "cee_dashboard_prakriti_v2", "cee_dashboard_prakriti_v1"];
    const PLANNED_DAYS = 17;
    const TEST_DURATION_MS = 36 * 60 * 1000; // default 36 minutes per test
    // Per-day override via day.durationMinutes (e.g. Day 14 mock test = 180 min).
    const dayDurationMs = (day) => (day && day.durationMinutes ? day.durationMinutes : 36) * 60 * 1000;

    const SUBJECT_ICON = {
        Physics: '<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/>',
        Chemistry: '<path d="M9 2v6L4.5 17a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 8V2M8 2h8M7.5 14h9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        Botany: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M2 21c0-3 1.85-5.36 5.08-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        Zoology: '<circle cx="5.5" cy="11.5" r="1.7" fill="currentColor"/><circle cx="9.5" cy="7.5" r="1.8" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1.8" fill="currentColor"/><circle cx="18.5" cy="11.5" r="1.7" fill="currentColor"/><path d="M12 12.2c2.7 0 4.9 1.9 4.9 4.1 0 1.8-1.6 3.2-3.9 3.2h-2c-2.3 0-3.9-1.4-3.9-3.2 0-2.2 2.2-4.1 4.9-4.1z" fill="currentColor"/>',
        MAT: '<path d="M9 18h6M10 21h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        Mathematics: '<path d="M4 7h16M9 7v10M15 7v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };

    const RESULT_RING_C = 2 * Math.PI * 52;

    /* ---------- state ---------- */
    function freshDayState() {
        return { answers: {}, submitted: false, deadline: null, autoSubmitted: false };
    }

    const state = {
        activeDay: DAYS[0].day,
        filter: "all",
        days: {}
    };
    DAYS.forEach(d => { state.days[d.day] = freshDayState(); });

    let chart = null;
    let submitArmed = false;
    let timerInterval = null;
    let examOrder = []; // shuffled [{ q, ch }] for the active exam

    /* ---------- helpers ---------- */
    function el(tag, cls, html) {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html != null) e.innerHTML = html;
        return e;
    }
    const $ = (id) => document.getElementById(id);

    function typeset(node) {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise(node ? [node] : undefined).catch(() => { });
        }
    }

    function scrollToEl(node) {
        if (!node) return;
        const y = node.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }

    function fmt(m) { return String(Math.round(m * 100) / 100); }

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }

    /* ---------- persistence (stable key + migration) ---------- */
    function readRaw(key) {
        try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
    }

    function applyData(data) {
        if (!data || typeof data !== "object") return false;
        if (data.days) {
            DAYS.forEach(day => {
                const s = data.days[day.day];
                if (s) state.days[day.day] = {
                    answers: s.answers || {},
                    submitted: !!s.submitted,
                    deadline: s.deadline || null,
                    autoSubmitted: !!s.autoSubmitted
                };
            });
            if (data.activeDay && getDayObj(data.activeDay)) state.activeDay = data.activeDay;
            return true;
        }
        // legacy flat schema (single day) -> map onto Day 1
        if (data.answers) {
            state.days[1] = {
                answers: data.answers || {},
                submitted: !!data.submitted,
                deadline: data.deadline || null,
                autoSubmitted: !!data.autoSubmitted
            };
            return true;
        }
        return false;
    }

    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                activeDay: state.activeDay,
                days: state.days
            }));
        } catch (e) { /* storage unavailable */ }
    }

    function load() {
        let data = readRaw(STORAGE_KEY);
        let migrated = false;
        if (!data) {
            for (let i = 0; i < LEGACY_KEYS.length; i++) {
                const d = readRaw(LEGACY_KEYS[i]);
                if (d) { data = d; migrated = true; break; }
            }
        }
        if (applyData(data) && migrated) save(); // carry history forward to the stable key
    }

    /* ---------- lookups ---------- */
    const getDayObj = (n) => DAYS.find(d => d.day === n);
    const curDayObj = () => getDayObj(state.activeDay);
    const curState = () => state.days[state.activeDay];

    const chScore = (ch, ans) => ch.questions.reduce((s, q) => s + (ans[q.id] === q.answer ? 1 : 0), 0);
    const chWrong = (ch, ans) => ch.questions.reduce((s, q) => s + (ans[q.id] != null && ans[q.id] !== q.answer ? 1 : 0), 0);
    const chAnswered = (ch, ans) => ch.questions.reduce((n, q) => n + (ans[q.id] != null ? 1 : 0), 0);

    const dayCorrect = (day, ans) => day.chapters.reduce((s, ch) => s + chScore(ch, ans), 0);
    const dayWrong = (day, ans) => day.chapters.reduce((s, ch) => s + chWrong(ch, ans), 0);
    const dayAnsweredN = (day, ans) => day.chapters.reduce((s, ch) => s + chAnswered(ch, ans), 0);
    const dayTotalN = (day) => day.chapters.reduce((s, ch) => s + ch.questions.length, 0);
    function dayMarks(day, ans) {
        return dayCorrect(day, ans) - dayWrong(day, ans) * (day.negativeMarking || 0);
    }

    /* ============================================================
       Identity
       ============================================================ */
    function renderIdentity() {
        const initials = STUDENT.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
        $("navAvatar").textContent = initials;
        $("navName").textContent = STUDENT.name;
        $("navRole").textContent = STUDENT.role;
        $("heroName").textContent = "Hello, " + STUDENT.name.split(" ")[0];
    }

    /* ============================================================
       Views
       ============================================================ */
    function showView(name) {
        $("modulesGrid").hidden = name !== "dashboard";
        $("testView").hidden = name !== "test";
        $("resultsView").hidden = name !== "results";
    }

    function openDay(n) {
        state.activeDay = n;
        state.filter = "all";
        submitArmed = false;
        save();
        if (curState().submitted) {
            renderResults();
            showView("results");
            scrollToEl($("resultsView"));
        } else {
            enterTest();
        }
    }

    function enterTest() {
        submitArmed = false;
        buildExamOrder();          // jumble the questions each time the exam opens
        renderTest();
        showView("test");
        scrollToEl($("testView"));
        startTimer();
    }

    function backToDashboard() {
        renderDayCards();
        updateDashboard();
        showView("dashboard");
        scrollToEl($("modulesGrid"));
    }

    /* ============================================================
       Landing — day cards
       ============================================================ */
    function renderDayCards() {
        const grid = $("modulesGrid");
        grid.innerHTML = "";
        DAYS.forEach(day => {
            const st = state.days[day.day];
            const total = dayTotalN(day);
            const answered = dayAnsweredN(day, st.answers);

            let statusCls = "day-status", statusTxt = "Not started", cta = "Start Test ";
            let scoreHidden = true, barW = 0, scoreTxt = "";
            if (st.submitted) {
                const marks = dayMarks(day, st.answers);
                statusCls = "day-status done"; statusTxt = "Completed"; cta = "Review Analysis ";
                scoreHidden = false;
                barW = Math.max(0, marks / total * 100);
                scoreTxt = fmt(marks) + " / " + total;
            } else if (answered > 0 || st.deadline) {
                statusCls = "day-status progress"; statusTxt = "In progress"; cta = "Continue Test ";
            }

            const chapNames = day.chapters.map(c => c.name).join(" \u00B7 ");
            // Day 15 onward: show the chapter-wise question distribution as normal text.
            const descHtml = day.day >= 15
                ? `<p class="dc-desc">` + day.chapters.map(c => `${c.name}: ${c.questions.length}`).join(" \u00B7 ") + `</p>`
                : `<p class="dc-desc">${chapNames}</p>`;

            const card = el("button", "card day-card");
            card.type = "button";
            card.dataset.day = day.day;
            card.dataset.accent = "blue";
            card.innerHTML =
                `<div class="dc-top">
                    <div class="day-badge"><span>Day</span><b>${day.day}</b></div>
                    <span class="${statusCls}">${statusTxt}</span>
                 </div>
                 <h3>${day.subtitle}</h3>
                 ${descHtml}
                 <div class="dc-scoreline"${scoreHidden ? " hidden" : ""}>
                    <div class="dc-bar"><span style="width:${barW}%"></span></div>
                    <b>${scoreTxt}</b>
                 </div>
                 <div class="dc-foot">
                    <div class="dc-meta">
                        <span><b>${total}</b> Questions</span>
                        <span class="dc-dot"></span>
                        <span><b>${day.chapters.length}</b> Chapters</span>
                    </div>
                    <span class="dc-cta">${cta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                 </div>`;
            card.addEventListener("click", () => openDay(day.day));
            grid.appendChild(card);
        });
    }

    /* ============================================================
       Exam — single scroll, jumbled
       ============================================================ */
    function buildExamOrder() {
        const flat = [];
        curDayObj().chapters.forEach(ch => ch.questions.forEach(q => flat.push({ q: q, ch: ch })));
        examOrder = shuffle(flat);
    }

    function buildQuestion(item, no) {
        const q = item.q, ch = item.ch;
        const ans = curState().answers;
        const card = el("div", "question");
        card.dataset.id = q.id;

        const top = el("div", "q-top");
        top.appendChild(el("div", "q-no", String(no)));
        const main = el("div", "q-main");
        const chip = el("span", "q-subject", ch.subject);
        chip.dataset.accent = ch.accent;
        main.appendChild(chip);
        main.appendChild(el("p", "q-text", q.text));
        top.appendChild(main);
        card.appendChild(top);

        const opts = el("div", "options");
        q.options.forEach(opt => {
            const b = el("button", "option");
            b.type = "button";
            b.dataset.key = opt.key;
            if (ans[q.id] === opt.key) b.classList.add("selected");
            b.innerHTML =
                `<span class="key">${opt.key}</span>` +
                `<span class="otext">${opt.text}</span>` +
                `<span class="mark"></span>`;
            b.addEventListener("click", () => selectOpt(q, card, opt.key));
            opts.appendChild(b);
        });
        card.appendChild(opts);
        return card;
    }

    function selectOpt(q, card, key) {
        curState().answers[q.id] = key;
        card.querySelectorAll(".option").forEach(b =>
            b.classList.toggle("selected", b.dataset.key === key));
        save();
        updateTestProgress();
    }

    function renderTest() {
        const day = curDayObj();
        $("testTitle").textContent = day.title + " \u00B7 " + day.subtitle;
        $("testDayNum").textContent = day.day;
        $("testSub").textContent = "All " + dayTotalN(day) + " questions in one paper \u00B7 single correct answer.";
        $("testView").dataset.accent = "blue";

        if (!examOrder.length) buildExamOrder();
        const container = $("quizContainer");
        container.innerHTML = "";
        examOrder.forEach((item, i) => container.appendChild(buildQuestion(item, i + 1)));
        typeset(container);
        updateTestProgress();
    }

    function updateTestProgress() {
        const day = curDayObj(), st = curState();
        const answered = dayAnsweredN(day, st.answers), total = dayTotalN(day);
        $("answeredNum").textContent = answered;
        $("answeredTotal").textContent = "/" + total;
        $("testProgressBar").style.width = (answered / total * 100) + "%";
        $("sbCount").textContent = `${answered} / ${total} answered`;

        const remaining = total - answered;
        const hint = $("sbHint");
        if (submitArmed && remaining > 0) {
            hint.textContent = `${remaining} unanswered \u2014 tap Submit again to finish.`;
            hint.classList.add("warn");
        } else if (remaining > 0) {
            hint.textContent = "You can submit once you're ready.";
            hint.classList.remove("warn");
        } else {
            hint.textContent = "All questions answered \u2014 ready to submit.";
            hint.classList.remove("warn");
        }
    }

    /* ============================================================
       Submit
       ============================================================ */
    function attemptSubmit() {
        const day = curDayObj(), st = curState();
        const remaining = dayTotalN(day) - dayAnsweredN(day, st.answers);
        if (remaining > 0 && !submitArmed) {
            submitArmed = true;
            updateTestProgress();
            return;
        }
        curState().autoSubmitted = false;
        finalizeDay(state.activeDay, true);
    }

    function finalizeDay(n, navigate) {
        const st = state.days[n];
        st.submitted = true;
        st.deadline = null;
        if (state.activeDay === n) submitArmed = false;
        stopTickerIfIdle();
        save();
        if (state.activeDay === n) renderResults();
        updateDashboard();
        renderDayCards();
        if (navigate) {
            showView("results");
            scrollToEl($("resultsView"));
        }
    }

    /* ============================================================
       36-minute timer (per day, shared ticker)
       ============================================================ */
    function startTimer() {
        const st = curState();
        if (st.submitted) return;
        if (!st.deadline) { st.deadline = Date.now() + dayDurationMs(curDayObj()); save(); }
        startTicker();
        renderTimer(st.deadline - Date.now());
    }

    function startTicker() {
        if (!timerInterval) timerInterval = setInterval(globalTick, 1000);
    }

    function stopTickerIfIdle() {
        const running = DAYS.some(d => !state.days[d.day].submitted && state.days[d.day].deadline);
        if (!running && timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    }

    function globalTick() {
        DAYS.forEach(day => {
            const st = state.days[day.day];
            if (st.submitted || !st.deadline) return;
            const rem = st.deadline - Date.now();
            if (rem <= 0) {
                if (state.activeDay === day.day) renderTimer(0);
                st.autoSubmitted = true;
                finalizeDay(day.day, state.activeDay === day.day);
            } else if (state.activeDay === day.day) {
                renderTimer(rem);
            }
        });
        stopTickerIfIdle();
    }

    function renderTimer(ms) {
        const totalSec = Math.max(0, Math.ceil(ms / 1000));
        const m = Math.floor(totalSec / 60);
        const s = totalSec % 60;
        const t = $("timerText");
        if (t) t.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
        const chip = $("testTimer");
        if (chip) {
            chip.classList.toggle("warn", totalSec <= 300 && totalSec > 60);
            chip.classList.toggle("danger", totalSec <= 60);
        }
    }

    /* ============================================================
       Results
       ============================================================ */
    function verdictText(pct) {
        if (pct >= 85) return "Outstanding — you're CEE-ready on these chapters!";
        if (pct >= 70) return "Great work — a strong, confident attempt.";
        if (pct >= 50) return "Good effort. Review the misses to level up.";
        return "Keep practicing — revisit the concepts and try again.";
    }

    function renderResults() {
        const day = curDayObj(), st = curState();
        const total = dayTotalN(day);
        const correct = dayCorrect(day, st.answers);
        const wrong = dayWrong(day, st.answers);
        const answered = dayAnsweredN(day, st.answers);
        const marks = dayMarks(day, st.answers);
        const pct = Math.round(marks / total * 100);

        $("resultEyebrow").textContent = day.title + " \u00B7 Result";
        $("resultScore").textContent = fmt(marks);
        $("resultScoreTotal").textContent = " / " + total + " marks";
        $("resultPct").textContent = Math.max(0, pct) + "%";
        $("resultRingFg").style.strokeDashoffset = String(RESULT_RING_C * (1 - Math.max(0, marks) / total));
        $("resultVerdict").textContent = (st.autoSubmitted ? "Time's up \u2014 auto-submitted. " : "") + verdictText(pct);
        $("rmCorrect").textContent = correct;
        $("rmWrong").textContent = wrong;
        $("rmAcc").textContent = (answered ? Math.round(correct / answered * 100) : 0) + "%";

        renderAnalytics();
        renderAnalysis();
    }

    function renderAnalytics() {
        const day = curDayObj(), st = curState();
        const grid = $("analyticsGrid");
        grid.innerHTML = "";
        if (day.syllabus) { renderSyllabusTree(day, st, grid); return; }
        day.chapters.forEach(ch => {
            const t = ch.questions.length;
            const correct = chScore(ch, st.answers);
            const wrong = chWrong(ch, st.answers);
            const answered = chAnswered(ch, st.answers);
            const skipped = t - answered;
            const marks = correct - wrong * (day.negativeMarking || 0);
            const pct = Math.max(0, Math.round(marks / t * 100));

            const cardEl = el("div", "analytic");
            cardEl.dataset.accent = ch.accent;
            cardEl.innerHTML =
                `<div class="a-top">
                    <span class="a-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[ch.subject] || ""}</svg></span>
                    <span class="a-name"><b>${ch.name}</b><span>${ch.subject}</span></span>
                    <span class="a-score">${fmt(marks)}/${t}</span>
                 </div>
                 <div class="a-bar"><span style="width:${pct}%"></span></div>
                 <div class="a-foot"><span>&#10003; ${correct} &nbsp;&#10007; ${wrong} &nbsp;&#8211; ${skipped}</span><span>${pct}% marks</span></div>`;
            grid.appendChild(cardEl);
        });
    }

    /* Collapsible Subject → Topic → Sub-topic marks breakdown (days with a syllabus map). */
    function renderSyllabusTree(day, st, grid) {
        const ans = st.answers;
        const neg = day.negativeMarking || 0;
        const qById = {};
        day.chapters.forEach(ch => ch.questions.forEach(q => { qById[q.id] = q; }));

        const stats = (ids) => {
            let correct = 0, wrong = 0;
            ids.forEach(id => {
                const q = qById[id]; if (!q) return;
                const a = ans[id];
                if (a == null) return;
                if (a === q.answer) correct++; else wrong++;
            });
            const total = ids.length;
            return { correct, wrong, skipped: total - correct - wrong, total, marks: correct - wrong * neg };
        };
        const pctOf = (m, t) => (t ? Math.max(0, Math.round(m / t * 100)) : 0);

        const wrap = el("div", "syl-tree");

        day.syllabus.forEach(subj => {
            const subjIds = [];
            subj.topics.forEach(tp => tp.subs.forEach(s => subjIds.push.apply(subjIds, s.ids)));
            const ss = stats(subjIds);

            const subjEl = el("details", "syl-subject");
            subjEl.dataset.accent = subj.accent;

            let html = `<summary class="syl-sum syl-sum-subject">
                    <span class="syl-caret"></span>
                    <span class="syl-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[subj.subject] || ""}</svg></span>
                    <span class="syl-title">${subj.subject}</span>
                    <span class="syl-marks">${fmt(ss.marks)}<small>/${ss.total}</small></span>
                    <span class="syl-pct">${pctOf(ss.marks, ss.total)}%</span>
                </summary><div class="syl-body">`;

            subj.topics.forEach(tp => {
                const tIds = [];
                tp.subs.forEach(s => tIds.push.apply(tIds, s.ids));
                const ts = stats(tIds);
                html += `<details class="syl-topic"><summary class="syl-sum syl-sum-topic">
                        <span class="syl-caret"></span>
                        <span class="syl-title">${tp.topic}</span>
                        <span class="syl-mini"><span style="width:${pctOf(ts.marks, ts.total)}%"></span></span>
                        <span class="syl-marks">${fmt(ts.marks)}<small>/${ts.total}</small></span>
                    </summary><div class="syl-subs">`;
                tp.subs.forEach(s => {
                    const x = stats(s.ids);
                    html += `<div class="syl-sub">
                            <span class="syl-sub-name">${s.name}</span>
                            <span class="syl-sub-counts"><span class="ok">&#10003;${x.correct}</span> <span class="no">&#10007;${x.wrong}</span> <span class="sk">&#8211;${x.skipped}</span></span>
                            <span class="syl-mini sm"><span style="width:${pctOf(x.marks, x.total)}%"></span></span>
                            <span class="syl-marks sm">${fmt(x.marks)}<small>/${x.total}</small></span>
                        </div>`;
                });
                html += `</div></details>`;
            });
            html += `</div>`;
            subjEl.innerHTML = html;
            wrap.appendChild(subjEl);
        });

        grid.appendChild(wrap);
    }

    function renderAnalysis() {
        const day = curDayObj(), st = curState(), ans = st.answers;
        const list = $("analysisList");
        list.innerHTML = "";
        let correct = 0, n = 0;

        day.chapters.forEach(ch => {
            ch.questions.forEach(q => {
                n++;
                const chosen = ans[q.id];
                const status = chosen == null ? "skip" : (chosen === q.answer ? "ok" : "no");
                if (status === "ok") correct++;

                const item = el("div", "analysis-item");
                item.dataset.status = status;

                const chipLabel = status === "ok" ? "Correct" : status === "no" ? "Incorrect" : "Not answered";
                const chipMark = status === "ok" ? "&#10003;" : status === "no" ? "&#10007;" : "&#8211;";

                const head =
                    `<div class="ai-top">
                        <span class="ai-no ${status}">${n}</span>
                        <div class="ai-head">
                            <span class="ai-chip ${status}">${chipMark} ${chipLabel} \u00B7 ${ch.name}</span>
                            <p class="ai-q">${q.text}</p>
                        </div>
                     </div>`;

                const optsHtml = q.options.map(opt => {
                    let cls = "option";
                    let mark = "";
                    if (opt.key === q.answer) { cls += " correct"; mark = "&#10003;"; }
                    else if (opt.key === chosen) { cls += " incorrect"; mark = "&#10007;"; }
                    else { cls += " dim"; }
                    return `<div class="${cls}"><span class="key">${opt.key}</span><span class="otext">${opt.text}</span><span class="mark">${mark}</span></div>`;
                }).join("");

                const yourAns = chosen == null
                    ? `<b>You skipped this question.</b> `
                    : (status === "no" ? `<b>Your answer (${chosen}) was incorrect.</b> ` : "");
                const exp = `<div class="ai-exp">${yourAns}<b>Correct answer (${q.answer}).</b> ${q.explanation}</div>`;

                item.innerHTML = head + `<div class="ai-options">${optsHtml}</div>` + exp;
                list.appendChild(item);
            });
        });

        $("fAll").textContent = n;
        $("fCorrect").textContent = correct;
        $("fWrong").textContent = n - correct;

        applyFilter(state.filter);
        typeset(list);
    }

    function applyFilter(f) {
        state.filter = f;
        document.querySelectorAll("#filterPills .pill").forEach(p =>
            p.classList.toggle("active", p.dataset.f === f));
        document.querySelectorAll("#analysisList .analysis-item").forEach(item => {
            const stt = item.dataset.status;
            const show = f === "all" || (f === "correct" && stt === "ok") || (f === "incorrect" && stt !== "ok");
            item.classList.toggle("hide", !show);
        });
    }

    /* ============================================================
       Retake
       ============================================================ */
    function retake() {
        const day = curDayObj(), st = curState();
        day.chapters.forEach(ch => ch.questions.forEach(q => { delete st.answers[q.id]; }));
        st.submitted = false;
        st.deadline = null;
        st.autoSubmitted = false;
        state.filter = "all";
        save();
        updateDashboard();
        renderDayCards();
        enterTest();
    }

    /* ============================================================
       Dashboard + subject performance + chart
       ============================================================ */
    function updateDashboard() {
        const allQ = DAYS.reduce((s, d) => s + dayTotalN(d), 0);
        let marks = 0, correct = 0, answered = 0, anySub = false;
        DAYS.forEach(day => {
            const st = state.days[day.day];
            if (!st.submitted) return;
            anySub = true;
            marks += dayMarks(day, st.answers);
            correct += dayCorrect(day, st.answers);
            answered += dayAnsweredN(day, st.answers);
        });

        $("heroTotal").innerHTML = `${fmt(marks)}<small style="opacity:.7">/${allQ}</small>`;
        $("heroDays").textContent = DAYS.length;
        $("heroChapters").textContent = allQ;
        $("statScore").innerHTML = `${fmt(marks)}<small>/${allQ}</small>`;
        $("statAtt").innerHTML = `${answered}<small>/${allQ}</small>`;
        $("statAcc").innerHTML = (anySub && answered)
            ? `${Math.round(correct / answered * 100)}<small>%</small>` : `\u2014<small>%</small>`;

        let best = null;
        DAYS.forEach(day => {
            const st = state.days[day.day];
            if (!st.submitted) return;
            day.chapters.forEach(ch => {
                const sc = chScore(ch, st.answers);
                if (sc > 0 && (!best || sc > best.s)) best = { name: ch.name, s: sc };
            });
        });
        $("statBest").textContent = best ? best.name : "\u2014";

        renderSubjectPerformance();
        updateChart();
    }

    function renderSubjectPerformance() {
        const list = $("subjectList");
        if (!list) return;
        list.innerHTML = "";

        SUBJECTS.forEach(sub => {
            let plannedTotal = 0, total = 0, correct = 0, anySub = false;
            DAYS.forEach(day => {
                const st = state.days[day.day];
                day.chapters.filter(c => c.subject === sub.name).forEach(ch => {
                    plannedTotal += ch.questions.length;
                    if (st.submitted) {
                        total += ch.questions.length;
                        correct += chScore(ch, st.answers);
                        anySub = true;
                    }
                });
            });
            const hasQ = plannedTotal > 0;
            const reveal = anySub && total > 0;
            const pct = total ? Math.round(correct / total * 100) : 0;

            let val;
            if (!hasQ) val = `<span class="subj-val soon">Coming soon</span>`;
            else if (reveal) val = `<span class="subj-val"><b>${correct}/${total}</b> \u00B7 ${pct}%</span>`;
            else val = `<span class="subj-val muted">${plannedTotal} questions</span>`;

            const row = el("div", "subj-row" + (hasQ ? "" : " muted"));
            row.dataset.accent = sub.accent;
            row.innerHTML =
                `<span class="subj-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[sub.name] || ""}</svg></span>` +
                `<div class="subj-body">` +
                    `<div class="subj-top"><b>${sub.name}</b>${val}</div>` +
                    `<div class="subj-bar"><span style="width:${reveal ? pct : 0}%"></span></div>` +
                `</div>`;
            list.appendChild(row);
        });
    }

    function chartMax() { return 100; }

    function chartData() {
        const arr = new Array(PLANNED_DAYS).fill(0);
        DAYS.forEach(day => {
            const i = day.day - 1;
            if (i < PLANNED_DAYS) {
                const st = state.days[day.day];
                if (st.submitted) {
                    const t = dayTotalN(day);
                    arr[i] = t ? Math.max(0, Math.round(dayMarks(day, st.answers) / t * 100)) : 0;
                }
            }
        });
        return arr;
    }

    function makeGrad(ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, 280);
        grad.addColorStop(0, "rgba(90,134,201,0.34)");
        grad.addColorStop(1, "rgba(90,134,201,0.02)");
        return grad;
    }

    function chartColors() {
        const colors = new Array(PLANNED_DAYS).fill("#c3ccda");
        DAYS.forEach(day => {
            const i = day.day - 1;
            if (i < PLANNED_DAYS && state.days[day.day].submitted) colors[i] = "#5a86c9";
        });
        return colors;
    }

    function buildChart() {
        const ctx = $("progressChart").getContext("2d");
        const labels = [];
        for (let i = 1; i <= PLANNED_DAYS; i++) labels.push("Day " + i);
        const grad = makeGrad(ctx);

        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [{
                    label: "Daily score (%)",
                    data: chartData(),
                    borderColor: "#5a86c9",
                    backgroundColor: grad,
                    fill: true,
                    tension: 0.35,
                    borderWidth: 3,
                    pointBackgroundColor: chartColors(),
                    pointBorderColor: "#e4e9f0",
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 600, easing: "easeOutQuart" },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: chartMax(),
                        ticks: { stepSize: 20, color: "#94a3b8", font: { family: "Plus Jakarta Sans", size: 12 }, callback: (v) => v + "%" },
                        grid: { color: "rgba(148,163,184,0.16)", drawTicks: false },
                        border: { display: false },
                        title: { display: true, text: "Score (%)", color: "#94a3b8", font: { family: "Plus Jakarta Sans", size: 11, weight: "600" } }
                    },
                    x: {
                        ticks: { color: "#94a3b8", font: { family: "Plus Jakarta Sans", size: 12, weight: "600" } },
                        grid: { display: false },
                        border: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "#0f172a",
                        padding: 12,
                        cornerRadius: 10,
                        titleFont: { family: "Space Grotesk", size: 13 },
                        bodyFont: { family: "Plus Jakarta Sans", size: 12 },
                        callbacks: {
                            label: (item) => {
                                const day = getDayObj(item.dataIndex + 1);
                                if (!day) return " Upcoming";
                                const st = state.days[day.day];
                                if (st.submitted) {
                                    const t = dayTotalN(day);
                                    const mk = dayMarks(day, st.answers);
                                    const pct = Math.round(mk / t * 100);
                                    return ` Score: ${pct}% (${fmt(mk)}/${t} marks)`;
                                }
                                return " Not submitted yet";
                            }
                        }
                    }
                }
            }
        });
    }

    function updateChart() {
        if (!chart) return;
        const grad = makeGrad($("progressChart").getContext("2d"));
        chart.data.datasets[0].data = chartData();
        chart.data.datasets[0].backgroundColor = grad;
        chart.data.datasets[0].pointBackgroundColor = chartColors();
        chart.options.scales.y.max = chartMax();
        chart.update();
    }

    /* ============================================================
       Init
       ============================================================ */
    function init() {
        load();
        renderIdentity();
        buildChart();
        renderDayCards();
        updateDashboard();
        showView("dashboard");

        // finalize any timed test that expired while the page was closed
        DAYS.forEach(day => {
            const st = state.days[day.day];
            if (!st.submitted && st.deadline && Date.now() >= st.deadline) {
                st.autoSubmitted = true;
                finalizeDay(day.day, false);
            }
        });
        if (DAYS.some(d => !state.days[d.day].submitted && state.days[d.day].deadline)) startTicker();

        $("backFromTest").addEventListener("click", backToDashboard);
        $("backFromResults").addEventListener("click", backToDashboard);
        $("toDashboardBtn").addEventListener("click", backToDashboard);
        $("submitBtn").addEventListener("click", attemptSubmit);
        $("retakeBtn").addEventListener("click", retake);
        document.querySelectorAll("#filterPills .pill").forEach(p =>
            p.addEventListener("click", () => applyFilter(p.dataset.f)));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
