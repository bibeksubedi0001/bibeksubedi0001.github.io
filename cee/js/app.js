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
    const PLANNED_DAYS = 38;
    const TEST_DURATION_MS = 36 * 60 * 1000; // default 36 minutes per test
    // Per-day override via day.durationMinutes (e.g. Day 14 mock test = 180 min).
    const dayDurationMs = (day) => (day && day.durationMinutes ? day.durationMinutes : 36) * 60 * 1000;
    const uiIcon = window.CEE_UI_ICONS.svg;

    const SUBJECT_ICON = {
        Physics: '<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/>',
        Chemistry: '<path d="M9 2v6L4.5 17a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 8V2M8 2h8M7.5 14h9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        Botany: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M2 21c0-3 1.85-5.36 5.08-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        Zoology: '<circle cx="5.5" cy="11.5" r="1.7" fill="currentColor"/><circle cx="9.5" cy="7.5" r="1.8" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1.8" fill="currentColor"/><circle cx="18.5" cy="11.5" r="1.7" fill="currentColor"/><path d="M12 12.2c2.7 0 4.9 1.9 4.9 4.1 0 1.8-1.6 3.2-3.9 3.2h-2c-2.3 0-3.9-1.4-3.9-3.2 0-2.2 2.2-4.1 4.9-4.1z" fill="currentColor"/>',
        MAT: '<path d="M9 18h6M10 21h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        Mathematics: '<path d="M4 7h16M9 7v10M15 7v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };

    // Civil model-set chapters all share one icon.
    const CIVIL_ICON = '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    ["Basic Civil", "Structural Mech", "Design of Str", "Soil Mechanics", "Water Resources",
        "Hydropower", "Irrigation", "Transportation", "Water Supply"].forEach(n => { SUBJECT_ICON[n] = CIVIL_ICON; });

    // The Day 31 reasoning paper has no subject of its own, so its four sections share the MAT icon.
    ["Logical", "Quantitative", "Analytical", "Non-verbal"].forEach(n => { SUBJECT_ICON[n] = SUBJECT_ICON.MAT; });

    // "Day 7" for plan days, the set title for standalone model papers.
    const dayTag = (day) => day.kind === "model" ? day.title : "Day " + day.day;

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
    let currentView = "dashboard";

    function showView(name) {
        if (name !== "test" && $("ceeExamNavigator")?.open) $("ceeExamNavigator").close();
        if (name !== "notes") window.CEE_STUDY?.suspend();
        if (name !== "practice") window.CEE_PRACTICE?.suspend();
        currentView = name;
        document.body.dataset.view = name;
        $("dashboardView").hidden = name !== "dashboard";
        $("papersView").hidden = name !== "papers";
        $("ceeNotesView").hidden = name !== "notes";
        $("ceePracticeView").hidden = name !== "practice";
        $("testView").hidden = name !== "test";
        $("resultsView").hidden = name !== "results";
        $("omrView").hidden = name !== "omr";
        $("syllabusView").hidden = name !== "syllabus";
        const navView = name === "test" || name === "results" ? "papers" : name;
        document.querySelectorAll("[data-cee-view]").forEach(button => {
            if (button.dataset.ceeView === navView) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
        if (name === "dashboard" && chart) chart.resize();
    }

    function leaveScanner() {
        if (currentView === "omr") $("omrBack").click();
    }

    function openStudy(name, topicId) {
        if (name !== "notes" && name !== "practice") return;
        leaveScanner();
        showView(name);
        if (name === "notes") window.CEE_STUDY.open(topicId);
        else window.CEE_PRACTICE.open(topicId);
        scrollToEl($(name === "notes" ? "ceeNotesView" : "ceePracticeView"));
    }

    function openPapers(status) {
        leaveScanner();
        if (status) {
            paperStatus = status;
            $("ceePaperStatus").querySelector(`input[value="${status}"]`).checked = true;
        }
        renderDayCards();
        showView("papers");
        scrollToEl($("papersView"));
    }

    function openPaperPractice(dayNumber, review = false) {
        leaveScanner();
        showView("practice");
        if (review) window.CEE_PRACTICE.reviewPaper(dayNumber);
        else window.CEE_PRACTICE.openPaper(dayNumber);
        scrollToEl($("ceePracticeView"));
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
        scrollToEl($("dashboardView"));
    }

    /* ============================================================
       Official CEE syllabus (reference view)
       ============================================================ */
    let syllabusBuilt = false;

    function renderSyllabusRef() {
        if (syllabusBuilt || typeof CEE_SYLLABUS === "undefined") return;
        const S = CEE_SYLLABUS, ex = S.exam;

        $("syllabusMeta").textContent =
            ex.questions + " questions \u00b7 " + ex.marks + " marks \u00b7 " +
            ex.negative + " deducted per wrong answer \u00b7 " + (ex.durationMinutes / 60) + " hours";

        $("syllabusStats").innerHTML = S.subjects.map(sub =>
            `<div class="syl-ref-stat" data-accent="${sub.accent}">
                <span class="syl-ref-stat-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[sub.name] || ""}</svg></span>
                <b>${sub.total}</b><span>${sub.name}</span>
            </div>`).join("") +
            `<div class="syl-ref-stat total"><b>${ex.marks}</b><span>Total</span></div>`;

        const wrap = $("syllabusBody");
        wrap.innerHTML = "";
        S.subjects.forEach(sub => {
            const subjEl = el("details", "syl-subject");
            subjEl.dataset.accent = sub.accent;

            let html = `<summary class="syl-sum syl-sum-subject">
                    <span class="syl-caret"></span>
                    <span class="syl-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[sub.name] || ""}</svg></span>
                    <span class="syl-title">${sub.name}</span>
                    <span class="syl-ref-units">${sub.units.length} units</span>
                    <span class="syl-marks">${sub.total}<small> Q</small></span>
                </summary><div class="syl-body">`;

            sub.units.forEach(u => {
                html += `<details class="syl-topic"><summary class="syl-sum syl-sum-topic">
                        <span class="syl-caret"></span>
                        <span class="syl-title">${u.n}. ${u.title}</span>
                        <span class="syl-weight" title="Questions this unit carries in the real CEE paper">CEE ${u.weight}Q</span>
                        <span class="syl-mini"><span style="width:${Math.round(u.weight / sub.total * 100)}%"></span></span>
                    </summary><div class="syl-ref-topics">`;
                u.topics.forEach(t => {
                    html += `<div class="syl-ref-topic">` +
                        (t.label ? `<b>${t.label}</b>` : "") +
                        `<p>${t.detail}</p></div>`;
                });
                html += `</div></details>`;
            });
            html += `</div>`;
            subjEl.innerHTML = html;
            wrap.appendChild(subjEl);
        });
        syllabusBuilt = true;
    }

    function openSyllabus() {
        leaveScanner();
        renderSyllabusRef();
        showView("syllabus");
        scrollToEl($("syllabusView"));
    }

    /* ============================================================
       Landing — day cards
       ============================================================ */
    let paperQuery = "";
    let paperStatus = "all";
    let paperOrder = "newest";
    let suggestedDay = null;

    function paperState(day) {
        const record = state.days[day.day];
        if (record.submitted) return "done";
        return dayAnsweredN(day, record.answers) || record.deadline ? "progress" : "new";
    }

    function paperLabel(status) {
        return { done: "Completed", progress: "In progress", new: "Not started" }[status];
    }

    function paperAction(status) {
        return { done: "Review", progress: "Resume", new: "Start" }[status];
    }

    function paperPracticeStats(paper, total, available) {
        if (!available) return '<span class="muted">Progress unavailable</span>';
        return `<b>${paper?.attempted || 0} / ${total} attempted</b><small>${paper?.correct || 0} correct &middot; ${paper?.wrong || 0} incorrect${paper?.attempted ? ` &middot; ${paper.accuracy}% accuracy` : ""}</small>`;
    }

    function paperPracticeBreakdown(paper) {
        const esc = window.CEE_STUDY.esc;
        return (paper?.subjects || []).map(subject => `<section class="cee-paper-subject-progress" data-paper-subject="${esc(subject.name)}" data-attempted="${subject.attempted}" data-correct="${subject.correct}" data-wrong="${subject.wrong}"><div class="cee-paper-subject-heading"><h4>${esc(subject.name)}</h4><span>${subject.attempted} / ${subject.total} attempted</span></div><p>${subject.correct} correct &middot; ${subject.wrong} incorrect${subject.attempted ? ` &middot; ${subject.accuracy}% accuracy` : ""}</p>${subject.topics.length ? `<dl>${window.CEE_PRACTICE.arrangeTopics(subject.topics).map(topic => `<div data-paper-topic="${esc(topic.id)}" data-attempted="${topic.attempted}" data-correct="${topic.correct}" data-wrong="${topic.wrong}"><dt>${esc(topic.title)}</dt><dd>${topic.attempted} attempted<small>${topic.correct} correct &middot; ${topic.wrong} incorrect</small></dd></div>`).join("")}</dl>` : ""}</section>`).join("");
    }

    function visiblePapers() {
        const search = paperQuery.toLowerCase().trim();
        return DAYS.filter(day => {
            if (paperStatus !== "all" && paperState(day) !== paperStatus) return false;
            const keywords = [day.title, day.subtitle, String(day.day), ...day.chapters.flatMap(chapter => [chapter.name, chapter.subject])].join(" ").toLowerCase();
            return !search || keywords.includes(search);
        }).sort((first, second) => paperOrder === "oldest" ? first.day - second.day : second.day - first.day);
    }

    function renderDayCards() {
        const grid = $("modulesGrid");
        grid.replaceChildren();
        const papers = visiblePapers();
        const practice = window.CEE_PRACTICE.getSummary();
        const practised = new Map(practice.papers.map(paper => [paper.day, paper]));
        $("ceePaperInventory").textContent = `${DAYS.length} papers in your study plan`;
        $("ceePapersCount").textContent = `${papers.length} of ${DAYS.length} papers`;
        $("ceePapersEmpty").hidden = papers.length > 0;
        papers.forEach(day => {
            const record = state.days[day.day];
            const total = dayTotalN(day);
            const answered = dayAnsweredN(day, record.answers);
            const status = paperState(day);
            const action = paperAction(status);
            const paper = practised.get(day.day);
            const practiceAction = practice.draftPaperDay === day.day ? "Resume practice" : "Practice";
            const subjects = new Map();
            day.chapters.forEach(chapter => subjects.set(chapter.subject, (subjects.get(chapter.subject) || 0) + chapter.questions.length));
            const badge = day.badge || { top: "Day", main: day.day };
            const card = el("article", "card day-card");
            card.dataset.day = day.day;
            card.dataset.status = status;
            card.setAttribute("aria-label", `${dayTag(day)}: ${day.subtitle}`);
            card.innerHTML = `<div class="dc-top">
                <div class="day-badge"><span>${badge.top}</span><b>${badge.main}</b></div>
                <div class="dc-top-right"><span class="day-status ${status}">${paperLabel(status)}</span>
                    <button type="button" class="dc-scan" title="Scan OMR for ${dayTag(day)}" aria-label="Scan OMR for ${dayTag(day)}">${uiIcon("grid")}</button>
                </div>
            </div>
            <h2>${day.subtitle}</h2>
            <div class="cee-paper-subjects">${Array.from(subjects, ([name, count]) => `<span data-subject="${name}">${name}<b>${count}</b></span>`).join("")}</div>
            <div class="cee-paper-progress">${status === "done" ? `<span>Net marks</span><b>${fmt(dayMarks(day, record.answers))}<small> / ${total}</small></b>` : `<span>${answered} / ${total} answered</span><div class="dc-bar" role="progressbar" aria-label="${dayTag(day)} answered" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answered}"><span style="width:${answered / total * 100}%"></span></div>`}</div>
            <div class="cee-paper-practice-progress"><span>Practice</span><span>${paperPracticeStats(paper, total, practice.available)}</span></div>
            <div class="dc-foot"><div class="dc-meta"><span>${total} questions</span><span>${dayDurationMs(day) / 60000} min exam</span></div><div class="cee-paper-actions" role="group" aria-label="${dayTag(day)} modes"><button type="button" class="cee-practice-paper" aria-label="Practice ${dayTag(day)}">${uiIcon("check")}${practiceAction}</button><button type="button" class="cee-open-paper" aria-label="${action} ${dayTag(day)}">${action} exam${uiIcon("arrow-right")}</button>${practice.available && paper?.attempted ? `<button type="button" class="cee-review-practice" aria-label="Review ${dayTag(day)} practice">${uiIcon("library")}Review practice</button>` : ""}</div></div>`;
            card.querySelector(".cee-open-paper").addEventListener("click", () => openDay(day.day));
            card.querySelector(".cee-practice-paper").addEventListener("click", () => openPaperPractice(day.day));
            card.querySelector(".cee-review-practice")?.addEventListener("click", () => openPaperPractice(day.day, true));
            card.querySelector(".dc-scan").addEventListener("click", () => {
                if (window.CEE_OMR) window.CEE_OMR.open(day.day);
            });
            grid.appendChild(card);
        });
    }

    function renderDashboardPapers(practice) {
        const papers = DAYS.slice().sort((first, second) => second.day - first.day);
        const practised = new Map(practice.papers.map(paper => [paper.day, paper]));
        const active = getDayObj(state.activeDay);
        suggestedDay = active && paperState(active) === "progress" ? active : papers.find(day => paperState(day) === "progress") || papers.find(day => paperState(day) === "new") || papers[0];
        if (suggestedDay) {
            const status = paperState(suggestedDay);
            const answered = dayAnsweredN(suggestedDay, state.days[suggestedDay.day].answers);
            $("ceeNextStatus").textContent = status === "progress" ? "Continue your exam" : status === "done" ? "Latest exam result" : "Next exam";
            $("ceeNextTitle").textContent = `${dayTag(suggestedDay)} \u00b7 ${suggestedDay.subtitle}`;
            $("ceeNextMeta").textContent = `${dayTotalN(suggestedDay)} questions \u00b7 ${dayDurationMs(suggestedDay) / 60000} min${status === "progress" ? ` \u00b7 ${answered} answered` : ""}`;
            $("ceeNextLabel").textContent = `${paperAction(status)} ${dayTag(suggestedDay)} exam`;
        }
        const list = $("ceeLatestPapers");
        const expanded = new Set([...list.querySelectorAll("details[open]")].map(detail => detail.dataset.paperBreakdown));
        list.replaceChildren();
        papers.sort((first, second) => (practised.get(second.day)?.updatedAt || 0) - (practised.get(first.day)?.updatedAt || 0) || second.day - first.day).slice(0, 4).forEach(day => {
            const status = paperState(day);
            const total = dayTotalN(day);
            const record = state.days[day.day];
            const paper = practised.get(day.day);
            const practiceAction = practice.draftPaperDay === day.day ? "Resume practice" : "Practice";
            const row = el("article", "cee-latest-paper");
            row.dataset.day = day.day;
            row.setAttribute("aria-label", `${dayTag(day)}: ${day.subtitle}`);
            row.innerHTML = `<div class="cee-paper-row"><span class="cee-row-day">${dayTag(day)}</span><span class="cee-row-main"><b>${day.subtitle}</b><small>${total} questions \u00b7 ${dayDurationMs(day) / 60000} min exam</small></span></div>
                <div class="cee-latest-mode" data-mode="exam"><span class="cee-mode-name">Exam</span><span class="cee-mode-progress">${status === "done" ? `<b>${fmt(dayMarks(day, record.answers))} / ${total} net marks</b><small>${dayCorrect(day, record.answers)} correct &middot; ${dayWrong(day, record.answers)} incorrect</small>` : `<b>${paperLabel(status)}</b><small>${dayAnsweredN(day, record.answers)} / ${total} answered</small>`}</span><button type="button" class="cee-text-action" data-latest-exam="${day.day}" aria-label="${paperAction(status)} ${dayTag(day)} exam">${paperAction(status)} exam${uiIcon("arrow-up-right")}</button></div>
                <div class="cee-latest-mode" data-mode="practice" data-attempted="${paper?.attempted || 0}" data-correct="${paper?.correct || 0}" data-wrong="${paper?.wrong || 0}"><span class="cee-mode-name">Practice</span><span class="cee-mode-progress">${paperPracticeStats(paper, total, practice.available)}</span><div class="cee-latest-practice-actions">${practice.available && paper?.attempted ? `<button type="button" class="cee-text-action" data-latest-review="${day.day}" aria-label="Review ${dayTag(day)} practice">${uiIcon("library")}Review practice</button>` : ""}<button type="button" class="cee-text-action" data-latest-practice="${day.day}" aria-label="Practice ${dayTag(day)}">${practiceAction}${uiIcon("arrow-right")}</button></div></div>
                ${practice.available ? `<details class="cee-paper-breakdown" data-paper-breakdown="${day.day}" ${expanded.has(String(day.day)) ? "open" : ""}><summary><span>Practice by subject and topic</span>${uiIcon("chevron-right")}</summary><div class="cee-paper-breakdown-body">${paperPracticeBreakdown(paper)}</div></details>` : ""}`;
            row.querySelector("[data-latest-exam]").addEventListener("click", () => openDay(day.day));
            row.querySelector("[data-latest-practice]").addEventListener("click", () => openPaperPractice(day.day));
            row.querySelector("[data-latest-review]")?.addEventListener("click", () => openPaperPractice(day.day, true));
            list.appendChild(row);
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
        card.tabIndex = -1;
        card.setAttribute("role", "group");
        card.setAttribute("aria-label", `Question ${no}, ${ch.subject}`);

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

    let examJump = null;

    function jumpToExamQuestion(index) {
        if (currentView !== "test" || curState().submitted) return;
        const card = $("quizContainer").children[index];
        if (!card) return;
        if ($("ceeExamNavigator")?.open) $("ceeExamNavigator").close();
        const header = $("testView").querySelector(".exam-bar");
        const offset = header.getBoundingClientRect().height + 12;
        card.focus({ preventScroll: true });
        window.scrollTo({ top: Math.max(0, window.scrollY + card.getBoundingClientRect().top - offset), behavior: "instant" });
        examJump = { index, scrollY: window.scrollY };
    }

    function nextUnanswered() {
        if (currentView !== "test" || curState().submitted || !examOrder.length) return;
        const answers = curState().answers;
        const cards = $("quizContainer").children;
        const edge = $("testView").querySelector(".exam-bar").getBoundingClientRect().bottom + 13;
        let current = -1;
        for (let index = 0; index < cards.length; index++) {
            if (cards[index].getBoundingClientRect().top > edge) break;
            current = index;
        }
        if (examJump && Math.abs(window.scrollY - examJump.scrollY) <= 1) current = examJump.index;
        for (let step = 1; step <= examOrder.length; step++) {
            const index = (current + step) % examOrder.length;
            if (answers[examOrder[index].q.id] == null) {
                jumpToExamQuestion(index);
                return;
            }
        }
    }

    function renderExamNavigator() {
        const answers = curState().answers;
        const filter = $("ceeExamMapFilters").querySelector("input:checked").value;
        const grid = $("ceeExamQuestionMap");
        grid.replaceChildren();
        let remaining = 0;
        examOrder.forEach((item, index) => {
            const answered = answers[item.q.id] != null;
            if (!answered) remaining++;
            if (filter === "unanswered" && answered) return;
            const button = el("button", "cee-exam-map-question");
            button.type = "button";
            button.dataset.examIndex = index;
            button.dataset.status = answered ? "answered" : "unanswered";
            button.setAttribute("aria-label", `Question ${index + 1}, ${item.ch.subject}, ${answered ? "answered" : "unanswered"}`);
            button.innerHTML = `<span>${index + 1}</span>${answered ? uiIcon("check") : ""}`;
            grid.appendChild(button);
        });
        $("ceeExamMapSummary").textContent = `${remaining} unanswered / ${examOrder.length} questions`;
        $("ceeExamMapEmpty").hidden = filter !== "unanswered" || remaining > 0;
    }

    function openExamNavigator() {
        if (currentView !== "test" || curState().submitted) return;
        $("ceeExamMapFilters").querySelector("input[value='unanswered']").checked = true;
        renderExamNavigator();
        $("ceeExamNavigator").showModal();
        $("ceeExamQuestionMap").scrollTop = 0;
        ($("ceeExamQuestionMap").querySelector("button") || $("ceeExamMapClose")).focus({ preventScroll: true });
    }

    function renderTest() {
        const day = curDayObj();
        examJump = null;
        $("testTitle").textContent = day.title + " \u00B7 " + day.subtitle;
        const badge = day.badge || { top: "Day", main: day.day };
        $("testDayLabel").textContent = badge.top;
        $("testDayNum").textContent = badge.main;
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
        $("ceeExamUnansweredCount").textContent = remaining;
        $("ceeExamNextUnanswered").disabled = remaining === 0;
        $("ceeExamUnanswered").setAttribute("aria-label", `Show ${remaining} unanswered questions`);
        if ($("ceeExamNavigator").open) renderExamNavigator();
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
                 <div class="a-foot"><span class="ui-stat-group"><span class="ui-stat" aria-label="${correct} correct">${uiIcon("check")} ${correct}</span><span class="ui-stat" aria-label="${wrong} incorrect">${uiIcon("close")} ${wrong}</span><span class="ui-stat" aria-label="${skipped} skipped">${uiIcon("minus")} ${skipped}</span></span><span>${pct}% marks</span></div>`;
            grid.appendChild(cardEl);
        });
        if (day.syllabus) renderSyllabusTree(day, st, grid);
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

        const head = el("div", "syl-head");
        head.innerHTML = `<b>Syllabus-wise breakdown</b><small>official CEE units ${uiIcon("chevron-right")} sub-topics &middot; tap to expand</small>`;
        grid.appendChild(head);

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
                        ${tp.weight ? `<span class="syl-weight" title="Questions this unit carries in the real CEE paper">CEE ${tp.weight}Q</span>` : ""}
                        <span class="syl-mini"><span style="width:${pctOf(ts.marks, ts.total)}%"></span></span>
                        <span class="syl-marks">${fmt(ts.marks)}<small>/${ts.total}</small></span>
                    </summary><div class="syl-subs">`;
                tp.subs.forEach(s => {
                    const x = stats(s.ids);
                    html += `<div class="syl-sub">
                            <span class="syl-sub-name">${s.name}</span>
                            <span class="syl-sub-counts"><span class="ok ui-stat" aria-label="${x.correct} correct">${uiIcon("check")}${x.correct}</span> <span class="no ui-stat" aria-label="${x.wrong} incorrect">${uiIcon("close")}${x.wrong}</span> <span class="sk ui-stat" aria-label="${x.skipped} skipped">${uiIcon("minus")}${x.skipped}</span></span>
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
                const chipMark = uiIcon(status === "ok" ? "check" : status === "no" ? "close" : "minus");

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
                    if (opt.key === q.answer) { cls += " correct"; mark = uiIcon("check"); }
                    else if (opt.key === chosen) { cls += " incorrect"; mark = uiIcon("close"); }
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
        let marks = 0, correct = 0, answered = 0, completed = 0, gradedTotal = 0;
        DAYS.forEach(day => {
            const st = state.days[day.day];
            if (!st.submitted) return;
            completed++;
            gradedTotal += dayTotalN(day);
            marks += dayMarks(day, st.answers);
            correct += dayCorrect(day, st.answers);
            answered += dayAnsweredN(day, st.answers);
        });
        const practice = window.CEE_PRACTICE.getSummary();
        const totalAnswered = answered + practice.attempted;
        const totalCorrect = correct + practice.correct;
        const totalWrong = answered - correct + practice.wrong;

        $("ceePlanMeta").textContent = `${DAYS.length} papers \u00b7 ${allQ.toLocaleString()} questions`;
        $("statDone").innerHTML = `${completed}<small> / ${DAYS.length}</small>`;
        $("ceeCompletionBar").style.width = `${completed / DAYS.length * 100}%`;
        $("ceeCompletionTrack").setAttribute("aria-valuenow", Math.round(completed / DAYS.length * 100));
        $("statScore").innerHTML = completed ? `${fmt(marks)}<small> / ${gradedTotal}</small>` : "\u2014";
        $("statPractisedPapers").innerHTML = practice.available ? `${practice.papers.filter(paper => paper.attempted).length}<small> / ${DAYS.length}</small>` : "\u2014";
        $("statAtt").textContent = totalAnswered.toLocaleString();
        $("statCorrect").textContent = totalCorrect.toLocaleString();
        $("statWrong").textContent = totalWrong.toLocaleString();
        $("statAcc").innerHTML = totalAnswered ? `${Math.round(totalCorrect / totalAnswered * 100)}<small>%</small>` : "\u2014";
        $("ceePaperAttempted").textContent = answered.toLocaleString();
        $("ceePaperCorrect").textContent = correct.toLocaleString();
        $("ceePaperWrong").textContent = (answered - correct).toLocaleString();
        $("ceePracticeAttempted").textContent = practice.available ? practice.attempted.toLocaleString() : "\u2014";
        $("ceePracticeCorrect").textContent = practice.available ? practice.correct.toLocaleString() : "\u2014";
        $("ceePracticeWrong").textContent = practice.available ? practice.wrong.toLocaleString() : "\u2014";
        $("ceePracticeStatsNotice").hidden = practice.available;
        $("ceeAnswerTrack").setAttribute("aria-label", `${totalCorrect} correct and ${totalWrong} incorrect from ${totalAnswered} attempted questions`);
        $("ceeAnswerCorrectBar").style.width = totalAnswered ? totalCorrect / totalAnswered * 100 + "%" : "0%";
        $("ceeAnswerWrongBar").style.width = totalAnswered ? totalWrong / totalAnswered * 100 + "%" : "0%";
        const hasScores = completed > 0 || practice.papers.some(paper => paper.attempted > 0);
        $("ceeChartEmpty").hidden = hasScores && !!chart;
        $("ceeChartMessage").textContent = hasScores ? "Score chart unavailable" : "No graded paper attempts yet";
        renderDashboardPapers(practice);
        renderSubjectPerformance(practice);
        updateChart(practice);
    }

    let subjectTopicBank = null;

    function subjectTopicProgress(bank, subject, practice, papers) {
        const practiceTopics = new Map((practice.topics || []).map(topic => [topic.id, topic]));
        const topics = bank.topics.filter(topic => topic.subject === subject).map(topic => ({ ...topic,
            attempted: practiceTopics.get(topic.id)?.attempted || 0, correct: practiceTopics.get(topic.id)?.correct || 0 }));
        const totals = new Map(topics.map(topic => [topic.id, topic]));
        for (const item of bank.records) {
            if (item.origin !== "papers" || item.subject !== subject) continue;
            const paper = papers[item.source.day];
            const answer = paper?.answers[item.q.id];
            if (!paper?.submitted || answer == null) continue;
            const topic = totals.get(item.topicId);
            topic.attempted++;
            if (answer === item.q.answer) topic.correct++;
        }
        return topics;
    }

    async function renderSubjectTopics(group, subject) {
        if (group.dataset.topicState === "loading") return;
        const body = group.querySelector(".cee-subject-topic-body");
        group.dataset.topicState = "loading";
        body.innerHTML = '<p class="cee-study-status" role="status">Loading topics...</p>';
        try {
            if (!subjectTopicBank) {
                await new Promise(resolve => requestAnimationFrame(resolve));
                if (!subjectTopicBank) subjectTopicBank = window.CEE_STUDY_CORE.createBank(DAYS, [], window.CEE_STUDY_CATALOG);
            }
            if (!group.isConnected) return;
            const topics = window.CEE_PRACTICE.arrangeTopics(subjectTopicProgress(subjectTopicBank, subject, window.CEE_PRACTICE.getSummary(), state.days));
            const units = new Map();
            for (const topic of topics) {
                const title = (topic.syllabus.number == null ? "" : "Unit " + topic.syllabus.number + ": ") + topic.syllabus.title;
                if (!units.has(title)) units.set(title, []);
                units.get(title).push(topic);
            }
            const esc = window.CEE_STUDY.esc;
            body.innerHTML = [...units].map(([title, entries]) => `<section class="cee-subject-unit"><h4>${esc(title)}</h4><dl>${entries.map(topic => {
                const accuracy = topic.attempted ? Math.round(topic.correct / topic.attempted * 100) : 0;
                return `<div class="cee-subject-topic-row" data-topic-id="${esc(topic.id)}" data-correct="${topic.correct}" data-attempted="${topic.attempted}"><dt>${esc(topic.title)}</dt><dd class="${topic.attempted ? "" : "muted"}"><b>${topic.correct}/${topic.attempted}</b>${topic.attempted ? ` <span>${accuracy}%</span>` : ""}</dd><div class="subj-bar" aria-hidden="true"><span style="width:${accuracy}%"></span></div></div>`;
            }).join("")}</dl></section>`).join("");
            group.dataset.topicState = "ready";
        } catch {
            if (!group.isConnected) return;
            group.dataset.topicState = "error";
            body.innerHTML = '<p class="cee-study-status" role="status">Topic progress could not be loaded.</p><button type="button" class="cee-text-action">Retry</button>';
            body.querySelector("button").addEventListener("click", () => renderSubjectTopics(group, subject));
        }
    }

    function renderSubjectPerformance(practice) {
        const list = $("subjectList");
        if (!list) return;
        const expanded = new Set([...list.querySelectorAll("details[open]")].map(group => group.dataset.subject));
        list.innerHTML = "";

        SUBJECTS.forEach(sub => {
            const practiceSubject = practice.subjects.find(subject => subject.name === sub.name);
            let plannedTotal = 0, total = practiceSubject?.attempted || 0, correct = practiceSubject?.correct || 0;
            DAYS.forEach(day => {
                const st = state.days[day.day];
                day.chapters.filter(chapter => chapter.subject === sub.name || sub.name === "MAT"
                    && ["Logical", "Quantitative", "Analytical", "Non-verbal"].includes(chapter.subject)).forEach(ch => {
                    plannedTotal += ch.questions.length;
                    if (st.submitted) {
                        total += chAnswered(ch, st.answers);
                        correct += chScore(ch, st.answers);
                    }
                });
            });
            const hasQ = plannedTotal > 0 || total > 0;
            const reveal = total > 0;
            const pct = total ? Math.round(correct / total * 100) : 0;

            let val;
            if (!hasQ) return;
            else if (reveal) val = `<span class="subj-val"><b>${correct}/${total}</b> \u00B7 ${pct}%</span>`;
            else val = `<span class="subj-val muted">${plannedTotal} questions</span>`;

            const group = el("details", "cee-subject-group");
            group.dataset.subject = sub.name;
            group.dataset.accent = sub.accent;
            const row = el("summary", "subj-row");
            row.dataset.accent = sub.accent;
            row.dataset.correct = correct;
            row.dataset.attempted = total;
            row.innerHTML =
                `<span class="subj-ico"><svg viewBox="0 0 24 24">${SUBJECT_ICON[sub.name] || ""}</svg></span>` +
                `<div class="subj-body">` +
                    `<div class="subj-top"><b>${sub.name}</b>${val}</div>` +
                    `<div class="subj-bar"><span style="width:${reveal ? pct : 0}%"></span></div>` +
                `</div>${window.CEE_UI_ICONS.svg("chevron-right")}`;
            group.append(row, el("div", "cee-subject-topic-body"));
            group.addEventListener("toggle", () => {
                if (group.isConnected && group.open && group.dataset.topicState !== "ready") renderSubjectTopics(group, sub.name);
            });
            list.appendChild(group);
            group.open = expanded.has(sub.name);
        });
    }

    function chartMax() { return 100; }

    function chartData() {
        const arr = new Array(PLANNED_DAYS).fill(null);
        DAYS.forEach(day => {
            const i = day.day - 1;
            if (i < PLANNED_DAYS) {
                const st = state.days[day.day];
                if (st.submitted) {
                    const t = dayTotalN(day);
                    arr[i] = t ? Math.round(dayMarks(day, st.answers) / t * 100) : 0;
                }
            }
        });
        return arr;
    }

    function practiceChartData(practice) {
        const values = new Array(PLANNED_DAYS).fill(null);
        for (const paper of practice.papers) {
            if (paper.day >= 1 && paper.day <= PLANNED_DAYS && paper.attempted && paper.total) {
                values[paper.day - 1] = Math.round(paper.netMarks / paper.total * 10000) / 100;
            }
        }
        return values;
    }

    function buildChart() {
        if (typeof Chart === "undefined") return;
        const ctx = $("progressChart").getContext("2d");
        const labels = [];
        for (let i = 1; i <= PLANNED_DAYS; i++) labels.push("Day " + i);
        const practiceValues = practiceChartData(window.CEE_PRACTICE.getSummary());

        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [{
                    label: "Exam net score (%)",
                    data: chartData(),
                    borderColor: "#2467ac",
                    backgroundColor: "#5288ba",
                    borderRadius: 3,
                    maxBarThickness: 18,
                    borderWidth: 0
                }, {
                    label: "Practice net score (%)",
                    data: practiceValues,
                    backgroundColor: "#318463",
                    borderRadius: 3,
                    maxBarThickness: 18,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350 },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: chartMax(),
                        min: [...chartData(), ...practiceValues].some(value => value < 0) ? -25 : 0,
                        ticks: { stepSize: 25, color: "#677884", font: { family: "Plus Jakarta Sans", size: 11 }, callback: (v) => v + "%" },
                        grid: { color: "rgba(148,163,184,0.16)", drawTicks: false },
                        border: { display: false },
                        title: { display: false }
                    },
                    x: {
                        ticks: { color: "#677884", maxRotation: 0, autoSkip: true, maxTicksLimit: 8, font: { family: "Plus Jakarta Sans", size: 11 } },
                        grid: { display: false },
                        border: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "#0f172a",
                        padding: 12,
                        cornerRadius: 6,
                        titleFont: { family: "Plus Jakarta Sans", size: 13 },
                        bodyFont: { family: "Plus Jakarta Sans", size: 12 },
                        callbacks: {
                            label: (item) => {
                                const day = getDayObj(item.dataIndex + 1);
                                if (!day) return " Upcoming";
                                if (item.datasetIndex === 1) {
                                    const paper = window.CEE_PRACTICE.getSummary().papers.find(paper => paper.day === day.day);
                                    return paper?.attempted ? ` Practice: ${fmt(paper.netMarks)}/${paper.total} net marks (${paper.attempted} attempted)` : " Not practised yet";
                                }
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

    function updateChart(practice) {
        const values = chartData();
        const practiceValues = practiceChartData(practice);
        const examScores = DAYS.filter(day => state.days[day.day].submitted).map(day => `${dayTag(day)} exam ${values[day.day - 1]}%`);
        const practiceScores = practice.papers.filter(paper => paper.attempted).map(paper => `Day ${paper.day} practice ${practiceValues[paper.day - 1]}%, ${paper.attempted} attempted`);
        $("progressChart").setAttribute("aria-label", `Paper net scores: ${[...examScores, ...practiceScores].join(", ") || "no graded paper attempts"}`);
        if (!chart) return;
        chart.data.datasets[0].data = values;
        chart.data.datasets[0].backgroundColor = "#5288ba";
        chart.data.datasets[1].data = practiceValues;
        chart.options.scales.y.max = chartMax();
        chart.options.scales.y.min = [...values, ...practiceValues].some(value => value < 0) ? -25 : 0;
        chart.update();
    }

    /* ============================================================
       OMR scanner bridge (used by js/omr.js)
       ============================================================ */
    window.CEE_APP = {
        openStudy,
        openPapers,
        openOmr() {
            showView("omr");
            scrollToEl($("omrView"));
        },
        closeOmr() {
            backToDashboard();
        },
        isSubmitted(n) {
            const st = state.days[n];
            return !!(st && st.submitted);
        },
        applyScan(n, answers) {
            const day = getDayObj(n);
            if (!day) return;
            const st = state.days[n];
            st.answers = answers || {};
            st.submitted = true;
            st.deadline = null;
            st.autoSubmitted = false;
            state.activeDay = n;
            state.filter = "all";
            stopTickerIfIdle();
            save();
            renderResults();
            updateDashboard();
            renderDayCards();
            showView("results");
            scrollToEl($("resultsView"));
        }
    };

    /* ============================================================
       Init
       ============================================================ */
    function init() {
        load();
        document.querySelectorAll("[data-cee-icon]").forEach(element => { element.innerHTML = uiIcon(element.dataset.ceeIcon); });
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

        $("backFromTest").addEventListener("click", () => openPapers());
        $("backFromResults").addEventListener("click", () => openPapers());
        $("toDashboardBtn").addEventListener("click", backToDashboard);
        $("submitBtn").addEventListener("click", attemptSubmit);
        $("ceeExamNextUnanswered").addEventListener("click", nextUnanswered);
        $("ceeExamUnanswered").addEventListener("click", openExamNavigator);
        $("ceeExamMapClose").addEventListener("click", () => $("ceeExamNavigator").close());
        $("ceeExamMapFilters").addEventListener("change", renderExamNavigator);
        $("ceeExamQuestionMap").addEventListener("click", event => {
            const button = event.target.closest("button[data-exam-index]");
            if (button) jumpToExamQuestion(Number(button.dataset.examIndex));
        });
        $("ceeExamNavigator").addEventListener("keydown", event => {
            if (event.key === "Escape") { event.preventDefault(); $("ceeExamNavigator").close(); }
        });
        $("retakeBtn").addEventListener("click", retake);
        $("syllabusOpenBtn").addEventListener("click", openSyllabus);
        $("syllabusBack").addEventListener("click", backToDashboard);
        const openDashboard = () => { leaveScanner(); backToDashboard(); };
        $("ceeHomeBtn").addEventListener("click", openDashboard);
        $("ceeDashboardBtn").addEventListener("click", openDashboard);
        $("ceePapersBtn").addEventListener("click", () => openPapers());
        $("ceeNotesBtn").addEventListener("click", () => openStudy("notes"));
        $("ceeReadNotesBtn").addEventListener("click", () => openStudy("notes"));
        $("ceePracticeBtn").addEventListener("click", () => openStudy("practice"));
        $("ceeStartPracticeBtn").addEventListener("click", () => openStudy("practice"));
        window.addEventListener("cee:practice-updated", updateDashboard);
        $("ceeBrowseBtn").addEventListener("click", () => openPapers());
        $("ceeResultsBtn").addEventListener("click", () => openPapers("done"));
        $("ceeNextBtn").addEventListener("click", () => { if (suggestedDay) openDay(suggestedDay.day); });
        $("ceePaperSearch").addEventListener("input", event => { paperQuery = event.target.value; renderDayCards(); });
        $("ceePaperOrder").addEventListener("change", event => { paperOrder = event.target.value; renderDayCards(); });
        $("ceePaperStatus").addEventListener("change", event => { paperStatus = event.target.value; renderDayCards(); });
        $("ceeClearFilters").addEventListener("click", () => {
            paperQuery = "";
            paperStatus = "all";
            $("ceePaperSearch").value = "";
            $("ceePaperStatus").querySelector("input[value='all']").checked = true;
            renderDayCards();
        });
        document.querySelectorAll("#filterPills .pill").forEach(p =>
            p.addEventListener("click", () => applyFilter(p.dataset.f)));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
