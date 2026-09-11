(function () {
    "use strict";
    const core = window.CEE_STUDY_CORE;
    const ui = window.CEE_STUDY;
    const { esc, icon } = ui;
    const $ = id => document.getElementById(id);
    const format = value => Number(value).toLocaleString("en-US");
    let store = core.freshStore();
    let readable = true;
    let initialized = false;
    let bank = null;
    let serial = 0;
    let screen = "builder";
    let active = null;
    let selected = new Set();
    let subject = "all";
    let topicQuery = "";
    let count = 20;
    let source = "all";
    let filter = "all";
    let reviewFilter = "all";
    let reviewPage = 0;
    let resumeFocus = null;
    let pendingConfirmation = null;

    function notify(message) {
        $("ceePracticeNotice").textContent = message;
        $("ceePracticeNotice").hidden = !message;
    }

    function save() {
        if (!readable) { notify("Saved practice data is unreadable and has not been overwritten. This session is temporary."); return; }
        try { localStorage.setItem(core.STORE_KEY, JSON.stringify(store)); notify(""); }
        catch { notify("This browser could not save practice progress. Keep this page open to retain the current session."); }
    }

    function init() {
        if (initialized) return;
        initialized = true;
        $("ceePracticeView").innerHTML = `<p id="ceePracticeNotice" class="cee-storage-notice" role="alert" hidden></p><div id="ceePracticeBody"></div>
            <dialog id="ceePracticeConfirm" class="cee-practice-dialog"><form method="dialog"><h2 id="ceePracticeConfirmTitle"></h2><p id="ceePracticeConfirmText"></p><div class="cee-dialog-actions"><button type="submit" class="btn" value="cancel">Cancel</button><button type="submit" class="btn-primary" id="ceePracticeConfirmAccept" value="accept">Continue</button></div></form></dialog>`;
        try { store = core.restore(localStorage.getItem(core.STORE_KEY)); }
        catch { readable = false; notify("Saved practice data could not be read. It has not been overwritten; new work will remain temporary."); }
        $("ceePracticeConfirm").addEventListener("close", () => {
            const action = pendingConfirmation;
            pendingConfirmation = null;
            if ($("ceePracticeConfirm").returnValue === "accept" && action) action();
            else if (resumeFocus?.isConnected) resumeFocus.focus();
        });
        $("ceePracticeConfirm").addEventListener("keydown", event => {
            if (event.key === "Escape") { event.preventDefault(); $("ceePracticeConfirm").close("cancel"); }
        });
        $("ceePracticeView").addEventListener("click", onClick);
        $("ceePracticeView").addEventListener("change", onChange);
        $("ceePracticeView").addEventListener("input", event => {
            if (event.target.id === "ceePracticeTopicSearch") { topicQuery = event.target.value; renderTopics(); }
            if (event.target.id === "ceePracticeCount") { count = Number(event.target.value); updatePool(); }
        });
        $("ceePracticeView").addEventListener("submit", event => {
            if (event.target.id !== "ceePracticeForm") return;
            event.preventDefault();
            requestStart();
        });
        document.addEventListener("keydown", event => {
            if (document.body.dataset.view !== "practice" || screen !== "session" || $("ceePracticeConfirm").open
                || event.ctrlKey || event.metaKey || event.altKey || event.target.closest("input, select, textarea, [contenteditable='true']")) return;
            const key = event.key.toLowerCase();
            if (["a", "b", "c", "d"].includes(key)) { event.preventDefault(); chooseAnswer(key); }
            else if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
            else if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
        });
    }

    function confirm(title, message, label, action) {
        resumeFocus = document.activeElement;
        pendingConfirmation = action;
        $("ceePracticeConfirmTitle").textContent = title;
        $("ceePracticeConfirmText").textContent = message;
        $("ceePracticeConfirmAccept").textContent = label;
        $("ceePracticeConfirm").returnValue = "";
        $("ceePracticeConfirm").showModal();
    }

    async function open(topicId) {
        init();
        const ticket = ++serial;
        screen = "builder";
        document.body.classList.remove("cee-practicing");
        $("ceePracticeBody").innerHTML = '<p class="cee-study-status" role="status">Loading question bank...</p>';
        try {
            bank = await ui.loadBank();
            if (ticket !== serial) return;
            if (topicId && bank.topics.some(topic => topic.id === topicId)) {
                selected = new Set([topicId]); subject = bank.topics.find(topic => topic.id === topicId).subject;
                filter = "all"; source = "all"; topicQuery = "";
            } else if (!selected.size) selected = new Set(bank.topics.filter(topic => topic.count).map(topic => topic.id));
            renderBuilder();
        } catch (error) {
            if (ticket !== serial) return;
            $("ceePracticeBody").innerHTML = `<div class="cee-study-status" role="alert"><h1>Practice</h1><p>${esc(error.message)}</p><button class="btn" type="button" data-practice-action="retry">Retry</button></div>`;
        }
    }

    function settings() { return { topics: [...selected], source, filter }; }
    function pool() { return core.filterPool(bank.records, settings(), store); }
    function runItems(run) {
        const items = run.ids.map(id => bank.byId.get(id));
        if (items.some(item => !item)) throw new Error("Some saved questions are not available. The original session has been retained.");
        return items;
    }

    function renderBuilder() {
        screen = "builder";
        document.body.classList.remove("cee-practicing");
        const subjects = [...new Set(bank.topics.filter(topic => topic.count).map(topic => topic.subject))];
        const attempted = bank.records.filter(item => store.progress[item.id]);
        const correct = attempted.filter(item => store.progress[item.id].correct).length;
        const saved = bank.records.filter(item => store.bookmarks[item.id]).length;
        $("ceePracticeBody").innerHTML = `<div class="cee-page-heading"><div><h1>Practice</h1><p>${format(bank.records.length)} questions / ${format(bank.records.filter(item => item.origin === "notes").length)} generated from notes / ${format(bank.records.filter(item => item.origin === "pdf").length)} original PDF MCQs</p></div><span class="cee-practice-mode">Untimed</span></div>
            <dl class="cee-practice-stats"><div><dt>Practised</dt><dd>${format(attempted.length)}<small> / ${format(bank.records.length)}</small></dd></div><div><dt>Latest accuracy</dt><dd>${attempted.length ? Math.round(correct / attempted.length * 100) + "%" : "Not yet attempted"}</dd></div><div><dt>Saved questions</dt><dd>${format(saved)}</dd></div></dl>
            ${store.draft ? `<section class="cee-resume"><div><h2>Unfinished practice</h2><p>${Object.keys(store.draft.answers).length} / ${store.draft.ids.length} answered</p></div><button type="button" class="btn-primary" data-practice-action="resume">Resume${icon("arrow-right")}</button></section>` : ""}
            <form id="ceePracticeForm" class="cee-practice-builder"><div class="cee-builder-topics"><div class="cee-section-heading"><h2>Topics</h2><div class="cee-topic-actions"><button type="button" class="cee-text-action" data-practice-action="select-visible">Select visible</button><button type="button" class="cee-text-action" data-practice-action="clear-topics">Clear</button></div></div><div class="cee-topic-filters"><label><span class="sr-only">Subject</span><select id="ceePracticeSubject"><option value="all">All subjects</option>${subjects.map(value => `<option>${esc(value)}</option>`).join("")}</select></label><label><span class="sr-only">Find topics</span><input type="search" id="ceePracticeTopicSearch" placeholder="Find a topic" value="${esc(topicQuery)}" /></label></div><div id="ceePracticeTopics" class="cee-topic-checks"></div><p id="ceePracticeSelected" class="cee-study-status"></p></div>
            <div class="cee-builder-settings"><h2>Session</h2><label>Question source<select id="ceePracticeSource"><option value="all">All CEE questions</option><option value="notes">Generated from notes</option><option value="pdf">Original PDF MCQs</option><option value="papers">Daily papers only</option></select></label><label>Question pool<select id="ceePracticeFilter"><option value="all">All questions</option><option value="unseen">Not yet practised</option><option value="wrong">Previously incorrect</option><option value="saved">Saved questions</option></select></label><label>Number of questions<input type="number" id="ceePracticeCount" min="1" step="1" inputmode="numeric" value="${count}" required /></label><div class="cee-count-presets">${[10, 20, 50, 100].map(value => `<button type="button" data-practice-count="${value}" aria-label="Set ${value} questions">${value}</button>`).join("")}</div><p id="ceePracticePool" role="status"></p><p id="ceePracticeCountError" class="cee-count-error" role="alert" hidden></p><button class="btn-primary cee-start-practice" id="ceePracticeStart" type="submit">Start practice${icon("arrow-right")}</button></div></form>
            ${store.history.length ? `<section class="cee-practice-history"><div class="cee-section-heading"><h2>Recent sessions</h2><span>${store.history.length} sessions</span></div>${store.history.map((run, index) => `<button type="button" class="cee-history-row" data-practice-history="${index}"><span>${esc(new Date(run.finishedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" }))}<small>${run.ids.length} questions</small></span><span>${run.summary?.correct ?? 0} correct<small>${run.summary?.wrong ?? 0} incorrect</small></span>${icon("arrow-right")}</button>`).join("")}</section>` : ""}`;
        $("ceePracticeSubject").value = subject;
        $("ceePracticeSource").value = source;
        $("ceePracticeFilter").value = filter;
        renderTopics();
        updatePool();
    }

    function availableTopics() {
        const needle = topicQuery.toLowerCase();
        return bank.topics.filter(topic => topic.count && (subject === "all" || topic.subject === subject)
            && (source === "all" || bank.records.some(item => item.topicId === topic.id && item.origin === source))
            && (topic.title + " " + topic.subject).toLowerCase().includes(needle));
    }

    function renderTopics() {
        const visible = availableTopics();
        $("ceePracticeTopics").innerHTML = visible.length ? visible.map(topic => {
            const available = core.filterPool(bank.records, { topics: [topic.id], source, filter }, store).length;
            return `<label class="cee-topic-check"><input type="checkbox" data-practice-topic="${topic.id}" ${selected.has(topic.id) ? "checked" : ""} /><span><strong>${esc(topic.title)}</strong><small>${esc(topic.subject)}</small></span><span class="cee-topic-count">${available}</span></label>`;
        }).join("") : '<p class="cee-study-status">No matching topics.</p>';
        $("ceePracticeSelected").textContent = selected.size + " topics selected";
    }

    function updatePool() {
        const available = pool().length;
        $("ceePracticeCount").max = String(Math.max(1, available));
        $("ceePracticePool").textContent = format(available) + " questions available";
        const error = !selected.size ? "Select at least one topic." : !available ? "No questions match these filters." :
            !Number.isInteger(count) || count < 1 ? "Enter a whole number of at least 1." : count > available ? `Only ${available} questions match. Reduce the count or add topics.` : "";
        $("ceePracticeCount").setCustomValidity(error);
        $("ceePracticeCountError").textContent = error;
        $("ceePracticeCountError").hidden = !error;
        $("ceePracticeStart").disabled = !!error;
        document.querySelectorAll("[data-practice-count]").forEach(button => {
            button.disabled = Number(button.dataset.practiceCount) > available;
            button.setAttribute("aria-pressed", String(Number(button.dataset.practiceCount) === count));
        });
        $("ceePracticeSelected").textContent = selected.size + " topics selected";
    }

    function onChange(event) {
        const input = event.target;
        if (input.dataset.practiceTopic) {
            if (input.checked) selected.add(input.dataset.practiceTopic); else selected.delete(input.dataset.practiceTopic);
            updatePool();
        }
        if (input.id === "ceePracticeSubject") {
            subject = input.value;
            selected = new Set(bank.topics.filter(topic => topic.count && (subject === "all" || topic.subject === subject)).map(topic => topic.id));
            renderTopics(); updatePool();
        }
        if (input.id === "ceePracticeSource") {
            source = input.value;
            selected = new Set([...selected].filter(id => bank.records.some(item => item.topicId === id && (source === "all" || item.origin === source))));
            renderTopics(); updatePool();
        }
        if (input.id === "ceePracticeFilter") { filter = input.value; renderTopics(); updatePool(); }
        if (input.id === "ceePracticeReviewFilter") { reviewFilter = input.value; reviewPage = 0; renderResults(); }
        if (input.id === "ceePracticeJump") { active.index = Number(input.value); save(); renderSession(true); }
    }

    function onClick(event) {
        const option = event.target.closest("[data-practice-answer]");
        if (option) { chooseAnswer(option.dataset.practiceAnswer); return; }
        const preset = event.target.closest("[data-practice-count]");
        if (preset) { count = Number(preset.dataset.practiceCount); $("ceePracticeCount").value = String(count); updatePool(); return; }
        const question = event.target.closest("[data-practice-index]");
        if (question) { active.index = Number(question.dataset.practiceIndex); save(); renderSession(true); return; }
        const saved = event.target.closest("[data-practice-save]");
        if (saved) {
            const id = saved.dataset.practiceSave;
            if (store.bookmarks[id]) delete store.bookmarks[id]; else store.bookmarks[id] = true;
            save();
            if (screen === "session") renderSession(); else renderResults();
            return;
        }
        const history = event.target.closest("[data-practice-history]");
        if (history) { active = store.history[Number(history.dataset.practiceHistory)]; reviewFilter = "all"; reviewPage = 0; renderResults(); return; }
        const action = event.target.closest("[data-practice-action]")?.dataset.practiceAction;
        if (!action) return;
        if (action === "retry") open();
        if (action === "clear-topics") { selected.clear(); renderTopics(); updatePool(); }
        if (action === "select-visible") { availableTopics().forEach(topic => selected.add(topic.id)); renderTopics(); updatePool(); }
        if (action === "resume") {
            active = store.draft;
            try { runItems(active); renderSession(true); } catch (error) { notify(error.message); }
        }
        if (action === "pause") { save(); renderBuilder(); }
        if (action === "previous") go(-1);
        if (action === "next") go(1);
        if (action === "flag") {
            const id = active.ids[active.index];
            if (active.flags[id]) delete active.flags[id]; else active.flags[id] = true;
            save(); renderSession();
        }
        if (action === "finish") {
            const remaining = active.ids.length - Object.keys(active.answers).length;
            confirm("Finish practice?", remaining ? `${remaining} unanswered questions will be recorded as skipped.` : "Save this session to your practice history?", "Finish practice", () => {
                core.finish(store, active, runItems(active)); save(); reviewFilter = "all"; reviewPage = 0; renderResults();
            });
        }
        if (action === "builder") renderBuilder();
        if (action === "review-previous") { reviewPage = Math.max(0, reviewPage - 1); renderResults(); }
        if (action === "review-next") { reviewPage++; renderResults(); }
        if (action === "retry-wrong") {
            const wrong = runItems(active).filter(item => active.answers[item.id] != null && active.answers[item.id] !== item.q.answer);
            if (!wrong.length) return;
            const begin = () => startItems(wrong, { topics: [...new Set(wrong.map(item => item.topicId))], source: "all", filter: "wrong" });
            if (store.draft) confirm("Replace unfinished practice?", "Your earlier answers remain in topic progress, but its unfinished session will be replaced.", "Start new practice", begin);
            else begin();
        }
    }

    function requestStart() {
        if (!$("ceePracticeForm").reportValidity()) return;
        const begin = () => {
            try { startItems(core.sample(pool(), count), settings()); }
            catch (error) { notify(error.message); }
        };
        if (store.draft) confirm("Replace unfinished practice?", "Your earlier answers remain in topic progress, but its unfinished session will be replaced.", "Start new practice", begin);
        else begin();
    }

    function startItems(items, configuration) {
        active = core.createRun(items, configuration);
        store.draft = active;
        save();
        renderSession(true);
    }

    function go(direction) {
        if (!active || active.finishedAt) return;
        const index = active.index + direction;
        if (index < 0 || index >= active.ids.length) return;
        active.index = index;
        save(); renderSession(true);
    }

    function chooseAnswer(key) {
        if (screen !== "session" || !active) return;
        const item = bank.byId.get(active.ids[active.index]);
        if (!core.answer(store, active, item, key)) return;
        save(); renderSession();
        $("ceePracticeNext")?.focus({ preventScroll: true });
    }

    function renderSession(focus = false) {
        screen = "session";
        document.body.classList.add("cee-practicing");
        const items = runItems(active);
        const item = items[active.index];
        const picked = active.answers[item.id];
        const summary = core.grade(items, active.answers);
        const start = Math.floor(active.index / 100) * 100;
        $("ceePracticeBody").innerHTML = `<header class="cee-practice-session-bar"><button type="button" class="cee-icon-button" data-practice-action="pause" title="Save and pause" aria-label="Save and pause">${icon("arrow-left")}</button><div><h1>Topic practice</h1><span>${esc(item.subject)} / ${esc(item.topicTitle)}</span></div><span class="cee-session-count">${summary.answered} / ${summary.total}<small>answered</small></span><button type="button" class="btn" data-practice-action="finish">Finish</button></header>
            <div class="cee-session-progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${summary.total}" aria-valuenow="${summary.answered}"><span style="width:${summary.answered / summary.total * 100}%"></span></div>
            <div class="cee-focus-layout"><article class="cee-focus-question"><div class="cee-question-heading"><span>Question ${active.index + 1} / ${items.length}</span><div><button type="button" class="cee-icon-button" data-practice-save="${esc(item.id)}" aria-pressed="${!!store.bookmarks[item.id]}" title="Save question" aria-label="Save question">${icon("bookmark")}</button><button type="button" class="cee-icon-button" data-practice-action="flag" aria-pressed="${!!active.flags[item.id]}" title="Flag for review" aria-label="Flag for review">${icon("flag")}</button></div></div><small class="cee-question-source">${esc(item.sourceLabel)}${item.q.source?.adapted ? " (adapted)" : ""}</small><div id="ceePracticeQuestion" class="cee-question-text" tabindex="-1">${item.q.text}</div><div class="cee-answer-options">${item.q.options.map(option => `<button type="button" class="cee-answer ${picked != null && option.key === item.q.answer ? "is-correct" : ""} ${picked === option.key && picked !== item.q.answer ? "is-wrong" : ""}" data-practice-answer="${option.key}" ${picked == null ? "" : "disabled"}><span class="cee-answer-key">${esc(option.key.toUpperCase())}</span><span>${option.text}</span>${picked != null && option.key === item.q.answer ? icon("check") : ""}</button>`).join("")}</div>${picked == null ? "" : ui.solution(item, picked)}<div class="cee-focus-actions"><button type="button" class="btn" data-practice-action="previous" ${active.index ? "" : "disabled"}>${icon("arrow-left")}Previous</button>${active.index === items.length - 1 ? `<button type="button" class="btn-primary" id="ceePracticeNext" data-practice-action="finish">Finish practice${icon("check")}</button>` : `<button type="button" class="btn-primary" id="ceePracticeNext" data-practice-action="next">${picked == null ? "Skip" : "Next"}${icon("arrow-right")}</button>`}</div></article>
            <aside class="cee-practice-map"><h2>Session progress</h2><div class="cee-session-totals"><span>${summary.correct}<small>Correct</small></span><span>${summary.wrong}<small>Incorrect</small></span><span>${summary.skipped}<small>Unanswered</small></span></div><label>Go to question<select id="ceePracticeJump">${items.map((record, index) => `<option value="${index}">Question ${index + 1}${active.answers[record.id] != null ? " - answered" : ""}</option>`).join("")}</select></label><div class="cee-question-map">${items.slice(start, start + 100).map((record, offset) => {
                const index = start + offset;
                const answer = active.answers[record.id];
                const status = answer == null ? "unanswered" : answer === record.q.answer ? "correct" : "wrong";
                return `<button type="button" data-practice-index="${index}" class="${status} ${active.flags[record.id] ? "is-flagged" : ""}" ${index === active.index ? 'aria-current="step"' : ""} aria-label="Question ${index + 1}, ${status}${active.flags[record.id] ? ", flagged" : ""}">${index + 1}</button>`;
            }).join("")}</div>${items.length > 100 ? `<p class="cee-study-status">${start + 1}-${Math.min(start + 100, items.length)} / ${items.length}</p>` : ""}</aside></div>`;
        $("ceePracticeJump").value = String(active.index);
        ui.typeset($("ceePracticeBody"));
        if (focus) { $("ceePracticeQuestion").focus({ preventScroll: true }); $("ceePracticeBody").scrollIntoView({ behavior: "instant", block: "start" }); }
    }

    function renderResults() {
        screen = "results";
        document.body.classList.remove("cee-practicing");
        let items;
        try { items = runItems(active); } catch (error) { notify(error.message); renderBuilder(); return; }
        const summary = active.summary || core.grade(items, active.answers);
        const filtered = items.filter(item => {
            const picked = active.answers[item.id];
            if (reviewFilter === "wrong") return picked != null && picked !== item.q.answer;
            if (reviewFilter === "skipped") return picked == null;
            if (reviewFilter === "saved") return !!store.bookmarks[item.id];
            return true;
        });
        reviewPage = Math.max(0, Math.min(reviewPage, Math.max(0, Math.ceil(filtered.length / 10) - 1)));
        $("ceePracticeBody").innerHTML = `<div class="cee-page-heading"><div><h1>Practice results</h1><p>${format(summary.total)} questions</p></div><button type="button" class="btn" data-practice-action="builder">${icon("arrow-left")}Practice</button></div><dl class="cee-practice-stats cee-result-stats"><div><dt>Correct</dt><dd>${summary.correct}</dd></div><div><dt>Incorrect</dt><dd>${summary.wrong}</dd></div><div><dt>Skipped</dt><dd>${summary.skipped}</dd></div><div><dt>CEE net marks</dt><dd>${summary.netMarks}<small> / ${summary.total}</small></dd></div></dl><p class="cee-study-status">+1 correct / -0.25 incorrect / 0 skipped</p>
            <div class="cee-results-actions"><button type="button" class="btn-primary" data-practice-action="retry-wrong" ${summary.wrong ? "" : "disabled"}>Retry incorrect${icon("arrow-right")}</button><label>Review<select id="ceePracticeReviewFilter"><option value="all">All questions</option><option value="wrong">Incorrect</option><option value="skipped">Skipped</option><option value="saved">Saved</option></select></label></div>
            <section class="cee-topic-results"><h2>By topic</h2>${summary.topics.map(topic => `<div><span>${esc(topic.title)}</span><span>${topic.correct} / ${topic.total}</span><progress max="${topic.total}" value="${topic.correct}" aria-label="${esc(topic.title)} correct"></progress></div>`).join("")}</section>
            <section class="cee-practice-review"><h2>Question review</h2>${filtered.slice(reviewPage * 10, reviewPage * 10 + 10).map(item => `<article class="cee-source-mcq"><header><span>${esc(item.sourceLabel)}</span><button type="button" class="cee-icon-button" data-practice-save="${esc(item.id)}" aria-pressed="${!!store.bookmarks[item.id]}" title="Save question" aria-label="Save question">${icon("bookmark")}</button></header><div class="cee-question-text">${item.q.text}</div><ol class="cee-review-options" type="a">${item.q.options.map(option => `<li class="${option.key === item.q.answer ? "is-correct" : active.answers[item.id] === option.key ? "is-wrong" : ""}">${option.text}${option.key === item.q.answer ? icon("check") : active.answers[item.id] === option.key ? icon("close") : ""}</li>`).join("")}</ol>${ui.solution(item, active.answers[item.id])}</article>`).join("") || '<p class="cee-study-status">No questions in this review filter.</p>'}</section>
            ${filtered.length > 10 ? `<div class="cee-page-controls"><button type="button" class="btn" data-practice-action="review-previous" ${reviewPage ? "" : "disabled"}>${icon("arrow-left")}Previous</button><span>${reviewPage * 10 + 1}-${Math.min(reviewPage * 10 + 10, filtered.length)} / ${filtered.length}</span><button type="button" class="btn" data-practice-action="review-next" ${reviewPage * 10 + 10 >= filtered.length ? "disabled" : ""}>Next${icon("arrow-right")}</button></div>` : ""}`;
        $("ceePracticeReviewFilter").value = reviewFilter;
        ui.typeset($("ceePracticeBody"));
    }

    function suspend() {
        serial++;
        document.body.classList.remove("cee-practicing");
        if ($("ceePracticeConfirm")?.open) {
            pendingConfirmation = null;
            $("ceePracticeConfirm").close();
        }
    }

    window.CEE_PRACTICE = Object.freeze({ open, suspend });
})();