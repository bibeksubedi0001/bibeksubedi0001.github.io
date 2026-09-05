(function () {
    "use strict";

    const STORAGE_KEY = "cee_civil_design_preview_v1";
    const DURATION = 120 * 60 * 1000;
    const DESIGNS = ["focus", "console", "midnight"];
    const script = document.currentScript;
    const dataUrl = script ? new URL("civil-model-1.js" + new URL(script.src).search, script.src).href : "js/civil-model-1.js?v=58";
    const $ = (id) => document.getElementById(id);
    const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    const uiIcon = window.CEE_UI_ICONS.svg;
    const sectionLabels = ["Basic Civil", "Structures", "Design", "Soil & Foundations", "Water Resources", "Hydropower", "Irrigation", "Transportation", "Water & Environment"];

    function freshState() {
        return { version: 1, answers: {}, flags: {}, notes: {}, index: 18, startedAt: null, endsAt: null, submitted: false, autoSubmitted: false };
    }

    function normalizeState(value, questions) {
        const state = freshState();
        if (!value || value.version !== 1) return state;
        const rows = new Map(questions.map((item) => [item.q.id, item.q]));
        for (const [id, key] of Object.entries(value.answers || {})) {
            const question = rows.get(id);
            if (question && question.options.some((option) => option.key === key)) state.answers[id] = key;
        }
        for (const [id, flag] of Object.entries(value.flags || {})) if (rows.has(id) && flag === true) state.flags[id] = true;
        for (const [id, text] of Object.entries(value.notes || {})) if (rows.has(id) && typeof text === "string") state.notes[id] = text.slice(0, 4000);
        state.index = Number.isInteger(value.index) ? Math.min(Math.max(value.index, 0), Math.max(0, questions.length - 1)) : 18;
        state.submitted = value.submitted === true;
        state.autoSubmitted = value.autoSubmitted === true;
        state.startedAt = Number.isFinite(value.startedAt) ? value.startedAt : null;
        state.endsAt = !state.submitted && Number.isFinite(value.endsAt) ? value.endsAt : null;
        return state;
    }

    function grade(questions, answers) {
        let correct = 0, wrong = 0;
        questions.forEach(({ q }) => {
            const answer = answers[q.id];
            if (!q.options.some((option) => option.key === answer)) return;
            if (answer === q.answer) correct++; else wrong++;
        });
        return { total: questions.length, answered: correct + wrong, correct, wrong,
            skipped: questions.length - correct - wrong, score: correct };
    }

    window.CIVIL_EXAM_DESIGNS = { STORAGE_KEY, freshState, normalizeState, grade };

    let questions = [];
    let chapters = [];
    let state = freshState();
    let rawSaved = null;
    let design = "gallery";
    let loader = null;
    let loadGeneration = 0;
    let ticker = null;
    let writeFailed = false;
    let readFailed = false;
    let saveMessage = "Preview ready";
    let drawerOpen = false;
    let drawerTrigger = null;
    let modalAction = null;
    let modalTrigger = null;
    let navFilter = "all";
    let notesOpen = false;
    const mobile = window.matchMedia("(max-width: 1020px)");

    function announce(message) { $("edLive").textContent = message; }

    function persist() {
        if (readFailed) return updateSaveStatus();
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            rawSaved = state;
            writeFailed = false;
            saveMessage = "Demo saved";
        } catch (error) { writeFailed = true; saveMessage = "Not saved"; }
        updateSaveStatus();
    }

    function updateSaveStatus() {
        $("edSaveStatus").classList.toggle("is-warning", writeFailed || readFailed);
        $("edSaveStatus").querySelector("span").textContent = readFailed ? "Not saved" : saveMessage;
        const notice = $("edNotice");
        notice.hidden = !writeFailed && !readFailed;
        notice.textContent = readFailed
            ? "The previous demo could not be read and has not been overwritten. You can still compare designs; real exam progress is unaffected."
            : "This demo could not be saved. Keep this tab open to retain your current preview answers. Real exam progress is unaffected.";
    }

    function loadQuestions() {
        if (questions.length) return Promise.resolve();
        if (loader) return loader;
        loader = new Promise((resolve, reject) => {
            const tag = document.createElement("script");
            const timeout = setTimeout(() => fail("The question file took too long to load. Please retry."), 20000);
            function fail(message) {
                clearTimeout(timeout); tag.onload = null; tag.onerror = null; tag.remove();
                reject(new Error(message));
            }
            tag.src = dataUrl;
            tag.onload = () => {
                clearTimeout(timeout);
                const data = window.CIVIL_SET_DATA && window.CIVIL_SET_DATA["civil-1"];
                if (!data || !Array.isArray(data.chapters)) return fail("The preview paper did not load correctly.");
                let start = 0;
                chapters = data.chapters.map((chapter, index) => {
                    const row = { ...chapter, start, index };
                    start += chapter.questions.length;
                    return row;
                });
                questions = chapters.flatMap((chapter) => chapter.questions.map((q, index) => ({ q, chapter, inChapter: index + 1 })));
                if (!questions.length) return fail("There are no questions available in this preview.");
                state = normalizeState(rawSaved, questions);
                resolve();
            };
            tag.onerror = () => fail("The preview question file could not be loaded. Check your connection and retry.");
            document.head.appendChild(tag);
        }).catch((error) => { loader = null; throw error; });
        return loader;
    }

    function overlayMode() { return design === "midnight" || mobile.matches; }

    function setDrawer(open, restore = true) {
        const overlay = overlayMode();
        if (open && overlay) drawerTrigger = document.activeElement;
        drawerOpen = open && overlay;
        document.body.classList.toggle("drawer-open", drawerOpen);
        $("edBackdrop").hidden = !drawerOpen;
        $("edOpenNavigator").setAttribute("aria-expanded", String(drawerOpen));
        $("edNavigator").inert = overlay && !drawerOpen;
        $("edNavigator").toggleAttribute("aria-hidden", overlay && !drawerOpen);
        if (overlay && !drawerOpen) $("edNavigator").setAttribute("aria-hidden", "true");
        if (drawerOpen) {
            $("edNavigator").setAttribute("role", "dialog");
            $("edNavigator").setAttribute("aria-modal", "true");
        } else {
            $("edNavigator").removeAttribute("role");
            $("edNavigator").removeAttribute("aria-modal");
        }
        ["edExamHeader", "edQuestionPane", "edExamFooter", "edSubjects", "edConsoleRibbon"].forEach((id) => { $(id).inert = drawerOpen; });
        if (drawerOpen) requestAnimationFrame(() => { if (drawerOpen) $("edCloseNavigator").focus(); });
        else if (restore && drawerTrigger && drawerTrigger.isConnected && design !== "gallery") {
            drawerTrigger.focus(); drawerTrigger = null;
        }
    }

    function gallery() {
        loadGeneration++;
        setDrawer(false, false);
        design = "gallery";
        document.body.dataset.design = design;
        document.body.classList.remove("ed-reviewing");
        $("edGallery").hidden = false;
        $("edPreview").hidden = true;
        $("edLoading").hidden = true;
        const saved = questions.length ? state : rawSaved;
        $("edResumeNotice").hidden = !(saved && saved.startedAt);
        if (saved && saved.startedAt) {
            const count = Object.keys(saved.answers || {}).length;
            $("edResumeNotice").innerHTML = `<div><b>${saved.submitted ? "Your demo result is ready" : "Your preview is right where you left it"}</b><p>${count} demo answers retained. ${saved.submitted ? "Open any design to compare its review screen." : "The demo timer continues while you compare. Real exam progress is unchanged."}</p></div><a class="ed-button" href="#focus">${saved.submitted ? "View preview result" : "Continue preview"} ${uiIcon("arrow-right")}</a>`;
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }

    async function openDesign(next) {
        setDrawer(false, false);
        design = next;
        document.body.dataset.design = next;
        $("edDesign").value = next;
        $("edGallery").hidden = true;
        $("edPreview").hidden = true;
        $("edLoading").hidden = false;
        $("edRetry").hidden = true;
        $("edLoadingText").textContent = "Loading the original Civil Model Set 1…";
        const token = ++loadGeneration;
        try {
            await loadQuestions();
            if (token !== loadGeneration) return;
            if (!state.startedAt) state.startedAt = Date.now();
            if (!state.submitted && !state.endsAt) state.endsAt = Date.now() + DURATION;
            if (!state.submitted && state.endsAt <= Date.now()) complete(true);
            persist();
            $("edLoading").hidden = true;
            $("edPreview").hidden = false;
            render(); setDrawer(false, false); startTimer();
            window.scrollTo({ top: 0, behavior: "instant" });
            announce(next === "focus" ? "Focus Pro preview" : next === "console" ? "Exam Console preview" : "Midnight Focus preview");
        } catch (error) {
            if (token !== loadGeneration) return;
            $("edLoadingText").textContent = error.message;
            $("edRetry").hidden = false;
        }
    }

    function route() {
        const next = location.hash.slice(1);
        if (DESIGNS.includes(next)) openDesign(next); else gallery();
    }

    function illustration(q) {
        if (q.id !== "cm1q019") return "";
        return `<svg viewBox="0 0 600 180" role="img" aria-label="A horizontal beam resting on roller supports at both ends"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M65 60h470v12H65z" fill="var(--ed-diagram-fill, #dcebe7)"/><path d="m100 72-19 31h38zm400 0-19 31h38z"/><circle cx="87" cy="110" r="6"/><circle cx="112" cy="110" r="6"/><circle cx="487" cy="110" r="6"/><circle cx="512" cy="110" r="6"/><path d="M69 119h62m338 0h62M71 128l9-9m5 9 9-9m5 9 9-9m5 9 9-9m349 9 9-9m5 9 9-9m5 9 9-9m5 9 9-9"/></g><g fill="currentColor" text-anchor="middle" font-size="15" font-family="inherit"><text x="100" y="45">A</text><text x="500" y="45">B</text><text x="100" y="158" font-size="12">Roller support</text><text x="500" y="158" font-size="12">Roller support</text></g></svg><figcaption>Illustration: both supports are rollers on a horizontal surface.</figcaption>`;
    }

    function render() {
        if (!questions.length) return;
        const item = questions[state.index], q = item.q;
        const selected = state.answers[q.id];
        document.body.classList.toggle("ed-reviewing", state.submitted);
        $("edQNumber").textContent = String(state.index + 1).padStart(2, "0");
        $("edTotalCount").textContent = "/ " + questions.length;
        $("edQuestionText").innerHTML = q.text;
        $("edChapter").textContent = item.chapter.name;
        $("edSectionPosition").textContent = `${item.inChapter} of ${item.chapter.questions.length} in this subject`;
        const figure = illustration(q);
        $("edFigure").hidden = !figure;
        $("edFigure").innerHTML = figure;
        $("edQuestionLayout").classList.toggle("has-figure", !!figure);
        $("edFlagBadge").hidden = !state.flags[q.id];
        $("edOptions").innerHTML = '<legend class="ed-sr-only">Choose one answer</legend>' + q.options.map((option) => {
            const on = selected === option.key;
            const correct = state.submitted && option.key === q.answer;
            const wrong = state.submitted && on && !correct;
            return `<label class="ed-option${on ? " is-selected" : ""}${correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}"><input class="ed-radio" type="radio" name="ed-answer" value="${option.key}"${on ? " checked" : ""}${state.submitted ? " disabled" : ""} /><span class="ed-option-key">${option.key.toUpperCase()}</span><span class="ed-option-copy">${option.text}</span><span class="ed-option-indicator" aria-hidden="true">${on || correct ? uiIcon("check") : ""}</span>${correct || wrong ? `<span class="ed-option-status">${correct ? "Correct answer" : "Your answer"}</span>` : ""}</label>`;
        }).join("");
        $("edClear").disabled = selected == null || state.submitted;
        $("edFlag").disabled = state.submitted;
        $("edFlag").classList.toggle("is-flagged", !!state.flags[q.id]);
        $("edFlag").setAttribute("aria-pressed", String(!!state.flags[q.id]));
        $("edFlag").querySelector("span").textContent = state.flags[q.id] ? "Flagged for review" : "Flag for review";
        $("edPrev").disabled = state.index === 0;
        $("edNext").hidden = state.index === questions.length - 1;
        $("edNext").querySelector("span").textContent = design === "console" ? "Save & next" : design === "midnight" ? "Continue" : "Next question";
        $("edFinish").hidden = state.index < questions.length - 1;
        $("edFinish").innerHTML = state.submitted ? `Compare designs <span aria-hidden="true">${uiIcon("arrow-right")}</span>` : `Review &amp; submit <span aria-hidden="true">${uiIcon("arrow-right")}</span>`;
        $("edNotes").hidden = design !== "console" || !notesOpen;
        $("edNotesInput").value = state.notes[q.id] || "";
        $("edNotesInput").readOnly = state.submitted;
        $("edNotesToggle").setAttribute("aria-expanded", String(notesOpen));
        $("edNotesToggle").textContent = notesOpen ? "Close scratchpad" : "Open scratchpad";
        const answerStatus = state.submitted ? selected == null ? "skipped" : selected === q.answer ? "correct" : "wrong" : selected == null ? "unanswered" : "answered";
        $("edAnswerState").dataset.status = answerStatus;
        $("edAnswerState").textContent = { unanswered: "Not answered", answered: "Answer selected", skipped: "Not answered", correct: "Correct answer", wrong: "Incorrect answer" }[answerStatus];
        $("edQuestionHint").textContent = state.submitted ? "This result belongs only to the design preview." : "You can change your answer before submitting.";
        $("edExplanation").hidden = !state.submitted;
        $("edExplanation").innerHTML = state.submitted ? `<b>Worked solution</b><p>${q.explanation || "No explanation supplied."}</p>` : "";
        renderSubjects(); renderNavigator(); renderResult(); renderTimer(); updateSaveStatus();
    }

    function renderSubjects() {
        $("edSubjects").innerHTML = chapters.map((chapter) => {
            const active = questions[state.index].chapter.id === chapter.id;
            const answered = chapter.questions.filter((q) => state.answers[q.id] != null).length;
            return `<button type="button" class="ed-subject-tab${active ? " active" : ""}" data-section="${chapter.start}"${active ? ' aria-current="true"' : ""} title="${esc(chapter.name)}"><span>${esc(sectionLabels[chapter.index] || chapter.name)}</span><small>${answered}/${chapter.questions.length}</small></button>`;
        }).join("");
    }

    function renderNavigator() {
        const result = grade(questions, state.answers), flags = Object.keys(state.flags).length;
        const percent = Math.round(result.answered / Math.max(1, result.total) * 100);
        $("edNavStats").innerHTML = `<div class="answered"><b>${result.answered}</b><span>Answered</span></div><div class="remaining"><b>${result.skipped}</b><span>Remaining</span></div><div class="flagged"><b>${flags}</b><span>Flagged</span></div>`;
        $("edPercent").textContent = percent + "%";
        $("edNavProgressFill").style.width = percent + "%";
        $("edProgressFill").style.width = percent + "%";
        $("edProgress").setAttribute("aria-valuenow", String(result.answered));
        $("edProgress").setAttribute("aria-valuemax", String(result.total));
        const palette = $("edPalette"), scroll = palette.scrollTop;
        const visible = questions.map((item, index) => ({ ...item, index })).filter(({ q }) => navFilter === "flagged" ? state.flags[q.id] : navFilter === "unanswered" ? state.answers[q.id] == null : true);
        palette.innerHTML = visible.map(({ q, index }) => {
            const on = state.answers[q.id] != null, flagged = state.flags[q.id], current = index === state.index;
            const correct = state.submitted && state.answers[q.id] === q.answer;
            const wrong = state.submitted && on && !correct;
            return `<button type="button" class="ed-number${on ? " answered" : ""}${flagged ? " flagged" : ""}${current ? " current" : ""}${correct ? " correct" : ""}${wrong ? " wrong" : ""}" data-q="${index}" aria-label="Question ${index + 1}, ${correct ? "correct" : wrong ? "incorrect" : on ? "answered" : "unanswered"}${flagged ? ", flagged" : ""}${current ? ", current" : ""}"${current ? ' aria-current="step"' : ""}>${index + 1}${flagged || on ? `<span class="ed-number-status" aria-hidden="true">${flagged ? uiIcon("flag") : wrong ? uiIcon("close") : uiIcon("check")}</span>` : ""}</button>`;
        }).join("") || '<p class="ed-palette-empty">No questions in this filter.</p>';
        palette.scrollTop = scroll;
        $("edReviewSubmit").innerHTML = state.submitted ? `Compare designs <span aria-hidden="true">${uiIcon("arrow-right")}</span>` : `Review &amp; submit <span aria-hidden="true">${uiIcon("arrow-right")}</span>`;
    }

    function renderResult() {
        $("edResultSummary").hidden = !state.submitted;
        if (!state.submitted) return;
        const result = grade(questions, state.answers);
        $("edResultSummary").innerHTML = `<div class="ed-result-heading"><span class="ed-eyebrow">DEMO RESULT · NOT A REAL ATTEMPT</span><h2>${state.autoSubmitted ? "Time is up." : "Preview complete."}</h2><p>${result.score} / ${result.total} marks. Explore the question review, or switch designs to compare this same result.</p></div><div class="ed-result-stats"><div><b>${result.correct}</b><span>Correct</span></div><div><b>${result.wrong}</b><span>Incorrect</span></div><div><b>${result.skipped}</b><span>Skipped</span></div></div><div class="ed-result-actions"><a href="#" class="ed-button">Compare designs</a><button type="button" class="ed-button ed-primary" data-reset-demo>Try a fresh demo</button></div>`;
    }

    function currentExpired() {
        if (!state.submitted && state.endsAt && state.endsAt <= Date.now()) { complete(true); return true; }
        return false;
    }

    function selectAnswer(key) {
        if (state.submitted || currentExpired() || !questions.length) return;
        const q = questions[state.index].q;
        if (!q.options.some((option) => option.key === key)) return;
        state.answers[q.id] = key;
        persist(); render();
        $("edOptions").querySelector(`input[value="${key}"]`).focus({ preventScroll: true });
        announce("Option " + key.toUpperCase() + " selected. " + (writeFailed || readFailed ? "Not saved on this device." : "Demo answer saved."));
    }

    function goTo(index) {
        if (!questions.length || currentExpired()) return;
        state.index = Math.max(0, Math.min(questions.length - 1, index));
        persist(); render(); setDrawer(false, false);
        $("edQuestionCard").focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: "instant" });
        if (design === "console") {
            const tab = $("edSubjects").querySelector('[aria-current="true"]');
            if (tab) {
                const bar = $("edSubjects").getBoundingClientRect(), button = tab.getBoundingClientRect();
                if (button.right > bar.right) $("edSubjects").scrollLeft += button.right - bar.right + 8;
                else if (button.left < bar.left) $("edSubjects").scrollLeft += button.left - bar.left - 8;
            }
        }
        announce("Question " + (state.index + 1) + " of " + questions.length);
    }

    function toggleFlag() {
        if (state.submitted || currentExpired()) return;
        const id = questions[state.index].q.id;
        if (state.flags[id]) delete state.flags[id]; else state.flags[id] = true;
        persist(); render(); announce(state.flags[id] ? "Question flagged for review" : "Flag removed");
    }

    function renderTimer() {
        const seconds = state.endsAt ? Math.max(0, Math.ceil((state.endsAt - Date.now()) / 1000)) : DURATION / 1000;
        $("edTime").textContent = state.submitted ? "Complete" : [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60].map((n) => String(n).padStart(2, "0")).join(":");
        $("edTimerLabel").textContent = state.submitted ? "DEMO ATTEMPT" : "TIME LEFT";
        const timer = $("edTime").closest(".ed-timer");
        timer.classList.toggle("is-low", !state.submitted && seconds <= 300);
        timer.classList.toggle("is-finished", state.submitted);
    }

    function startTimer() {
        if (ticker) clearInterval(ticker);
        ticker = null;
        if (state.submitted) return;
        ticker = setInterval(() => { if (!currentExpired()) renderTimer(); }, 1000);
    }

    function showDialog(title, html, label, action, cancel = "Keep working") {
        setDrawer(false, false);
        modalTrigger = document.activeElement;
        modalAction = action;
        $("edDialogTitle").textContent = title;
        $("edDialogBody").innerHTML = html;
        $("edDialogConfirm").textContent = label;
        $("edDialogCancel").textContent = cancel;
        $("edDialog").showModal();
        $("edDialogCancel").focus();
    }

    function askSubmit() {
        if (state.submitted) { location.hash = ""; return; }
        if (currentExpired()) return;
        const result = grade(questions, state.answers), flags = Object.keys(state.flags).length;
        showDialog("Ready to finish?", `<p>A final look before you submit this <b>demo attempt</b>.</p><div class="ed-confirm-stats"><div><b>${result.answered}</b><span>Answered</span></div><div><b>${result.skipped}</b><span>Unanswered</span></div><div><b>${flags}</b><span>Flagged</span></div></div><p class="ed-dialog-note">${result.skipped ? `${result.skipped} questions will be marked as skipped. ` : "All questions have an answer. "}${flags ? "Your flagged questions are included in the submission. " : ""}No negative marking.</p><p class="ed-dialog-note">This will not submit or overwrite a real model exam.</p>`, "Submit demo", () => complete(false));
    }

    function complete(auto) {
        if (state.submitted) return;
        state.submitted = true; state.autoSubmitted = auto; state.endsAt = null;
        if (ticker) clearInterval(ticker);
        ticker = null;
        if ($("edDialog").open) $("edDialog").close();
        setDrawer(false, false);
        persist();
        if (design === "gallery") gallery(); else render();
        announce(auto ? "The preview timer ended. Demo result ready." : "Demo submitted. Real exam progress is unchanged.");
        window.scrollTo({ top: 0, behavior: "instant" });
    }

    function askReset() {
        showDialog("Start a fresh demo?", "<p>Only the answers, flags and scratchpad in these three design previews will be cleared. Your real model exams and practice results will not be changed.</p>", "Reset demo", () => {
            state = freshState(); rawSaved = null; readFailed = false;
            if (ticker) clearInterval(ticker);
            ticker = null; navFilter = "all"; $("edNavFilter").value = "all"; notesOpen = false;
            if (DESIGNS.includes(design)) { state.startedAt = Date.now(); state.endsAt = Date.now() + DURATION; }
            persist();
            if (design === "gallery") gallery(); else { render(); startTimer(); }
        }, "Cancel");
    }

    function wire() {
        try { rawSaved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); }
        catch (error) { readFailed = true; }
        window.addEventListener("hashchange", route);
        $("edDesign").addEventListener("change", (event) => { location.hash = event.target.value; });
        $("edRetry").addEventListener("click", () => openDesign(DESIGNS.includes(design) ? design : "focus"));
        $("edOptions").addEventListener("change", (event) => { if (event.target.matches("input[type=radio]")) selectAnswer(event.target.value); });
        $("edPrev").addEventListener("click", () => goTo(state.index - 1));
        $("edNext").addEventListener("click", () => goTo(state.index + 1));
        $("edClear").addEventListener("click", () => {
            if (state.submitted || currentExpired()) return;
            delete state.answers[questions[state.index].q.id]; persist(); render(); announce("Demo answer cleared");
        });
        $("edFlag").addEventListener("click", toggleFlag);
        $("edSubjects").addEventListener("click", (event) => { const button = event.target.closest("[data-section]"); if (button) goTo(+button.dataset.section); });
        $("edPalette").addEventListener("click", (event) => { const button = event.target.closest("[data-q]"); if (button) goTo(+button.dataset.q); });
        $("edNavFilter").addEventListener("change", (event) => { navFilter = event.target.value; renderNavigator(); });
        $("edOpenNavigator").addEventListener("click", () => setDrawer(true));
        $("edCloseNavigator").addEventListener("click", () => setDrawer(false));
        $("edBackdrop").addEventListener("click", () => setDrawer(false));
        $("edNotesToggle").addEventListener("click", () => { notesOpen = !notesOpen; render(); if (notesOpen) $("edNotesInput").focus(); });
        $("edNotesInput").addEventListener("input", (event) => {
            if (state.submitted || currentExpired()) return;
            state.notes[questions[state.index].q.id] = event.target.value.slice(0, 4000); persist();
        });
        $("edReviewSubmit").addEventListener("click", askSubmit);
        $("edFinish").addEventListener("click", askSubmit);
        $("edResetGallery").addEventListener("click", askReset);
        $("edResultSummary").addEventListener("click", (event) => { if (event.target.closest("[data-reset-demo]")) askReset(); });
        $("edLeave").addEventListener("click", () => showDialog("Back to the designs?", `<p>Your demo answers and flags will stay saved${state.submitted ? "." : ", and the preview timer will continue."} You can open another design and carry on from this question.</p><p class="ed-dialog-note">No portal menus appear inside the exam. This is the only exit control.</p>`, "Back to designs", () => { location.hash = ""; }));
        $("edDialogCancel").addEventListener("click", () => $("edDialog").close());
        $("edDialogConfirm").addEventListener("click", () => { const action = modalAction; modalAction = null; $("edDialog").close(); if (action) action(); });
        $("edDialog").addEventListener("close", () => { modalAction = null; if (modalTrigger && modalTrigger.isConnected) modalTrigger.focus({ preventScroll: true }); });
        $("edFullscreen").addEventListener("click", async () => {
            try {
                if (document.fullscreenElement) await document.exitFullscreen();
                else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
                else announce("Fullscreen is not available in this browser. Use the browser fullscreen shortcut instead.");
            } catch (error) { announce("Fullscreen is unavailable here. The preview still works normally."); }
        });
        document.addEventListener("fullscreenchange", () => $("edFullscreen").setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen"));
        mobile.addEventListener("change", () => setDrawer(false, false));
        document.addEventListener("keydown", (event) => {
            if ($("edDialog").open || !DESIGNS.includes(design) || !questions.length) return;
            if (drawerOpen) {
                if (event.key === "Escape") { event.preventDefault(); setDrawer(false); }
                if (event.key === "Tab") {
                    const focusable = [...$("edNavigator").querySelectorAll('button:not(:disabled),select,a[href]')].filter((node) => node.getClientRects().length);
                    const first = focusable[0], last = focusable[focusable.length - 1];
                    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
                }
                return;
            }
            if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('input:not([type="radio"]),select,textarea,[contenteditable="true"]')) return;
            const key = event.key.toLowerCase();
            if (["a", "b", "c", "d"].includes(key)) { event.preventDefault(); selectAnswer(key); }
            else if (key === "f") { event.preventDefault(); toggleFlag(); }
            else if (!event.target.matches('input[type="radio"]') && event.key === "ArrowRight") { event.preventDefault(); goTo(state.index + 1); }
            else if (!event.target.matches('input[type="radio"]') && event.key === "ArrowLeft") { event.preventDefault(); goTo(state.index - 1); }
        });
        route();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
    else wire();
})();