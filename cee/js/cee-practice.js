(function () {
    "use strict";
    const core = window.CEE_STUDY_CORE;
    const ui = window.CEE_STUDY;
    const { esc, icon } = ui;
    const $ = id => document.getElementById(id);
    const format = value => Number(value).toLocaleString("en-US");
    const syllabusTopics = {
        Physics: [
            ["dynamics", "rotation", "fluids", "circular-motion", "oscillations", "gravitation", "elasticity"],
            ["thermal-physics"], ["wave-optics", "ray-optics"],
            ["electricity", "alternating-current", "magnetism"], ["electrostatics"],
            ["modern-physics", "semiconductors"]
        ],
        Chemistry: [
            ["stoichiometry", "periodicity", "bonding", "gases", "solutions", "solid-state", "chemical-equilibrium", "kinetics", "electrochemistry", "thermochemistry"],
            ["s-block", "p-block", "d-block"],
            ["organic-basics", "hydrocarbons", "haloalkanes", "alcohols", "carbonyl", "carboxylic-acids", "amines", "organic-biomolecules"],
            ["applied-chemistry", "polymers"], ["analytical-chemistry"]
        ],
        Zoology: [
            ["evolution"], ["animal-diversity", "protozoa"], ["animal-tissues"],
            ["plasmodium", "earthworm", "frog"],
            ["digestion", "nutrition", "human-respiration", "circulation", "excretion", "nervous-system", "senses", "endocrine", "human-reproduction", "embryology", "skeleton"],
            ["diseases"], ["applied-zoology"], ["adaptation"]
        ],
        Botany: [
            ["biomolecules"], ["microbes", "fungi", "algae", "bryophytes", "pteridophytes", "gymnosperms", "flowering-plants"],
            ["ecology"], ["cell-biology"], ["genetics"], ["plant-anatomy"],
            ["plant-transport", "photosynthesis", "plant-respiration", "plant-growth", "plant-minerals"],
            ["plant-reproduction"], ["biotechnology"]
        ],
        MAT: [["verbal-reasoning"], ["numerical-reasoning"], ["logical-reasoning"], ["spatial-reasoning"]]
    };
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
    let requestedPaper = null;
    let requestedReview = false;

    function notify(message) {
        $("ceePracticeNotice").textContent = message;
        $("ceePracticeNotice").hidden = !message;
    }

    function save() {
        if (!readable) { notify("Saved practice data is unreadable and has not been overwritten. This session is temporary."); return; }
        try { localStorage.setItem(core.STORE_KEY, JSON.stringify(store)); notify(""); }
        catch { notify("This browser could not save practice progress. Keep this page open to retain the current session."); }
    }

    function getSummary() {
        try {
            const data = initialized ? store : core.restore(localStorage.getItem(core.STORE_KEY));
            const topics = window.CEE_STUDY_CATALOG.topics;
            return { ...core.summarizeProgress(data.progress, topics),
                papers: core.summarizePaperProgress(typeof DAYS === "undefined" ? [] : DAYS, data.progress, topics),
                draftPaperDay: data.draft?.settings?.paperDay ?? null, available: readable };
        } catch {
            return { ...core.summarizeProgress({}), papers: [], draftPaperDay: null, available: false };
        }
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

    async function open(topicId, paperDay = null, review = false) {
        init();
        const ticket = ++serial;
        requestedPaper = paperDay;
        requestedReview = review;
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
            if (paperDay != null) requestPaper(paperDay, review);
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

    function paperTitle(run) {
        if (run?.settings?.paperDay == null) return "";
        const paper = DAYS.find(day => day.day === run.settings.paperDay);
        return paper ? paper.kind === "model" ? paper.title : "Day " + paper.day : "";
    }

    function requestPaper(dayNumber, review = false) {
        const paper = DAYS.find(day => day.day === dayNumber);
        if (!paper) throw new Error("This paper is not available for practice.");
        const items = paper.chapters.flatMap(chapter => chapter.questions.map(question => bank.byId.get(`day-${paper.day}:${question.id}`)));
        if (!items.length || items.some(item => !item)) throw new Error("Some paper questions are not available. Reload the page and retry.");
        const configuration = { topics: [...new Set(items.map(item => item.topicId))], source: "papers", filter: "all", paperDay: paper.day };
        if (review) {
            const answers = Object.fromEntries(items.flatMap(item => {
                const record = store.progress[item.id];
                return record && typeof record.correct === "boolean" && item.q.options.some(option => option.key === record.answer)
                    ? [[item.id, record.answer]] : [];
            }));
            if (!Object.keys(answers).length) throw new Error("No saved practice answers for this paper yet.");
            active = { ids: items.map(item => item.id), answers, flags: {}, index: 0, settings: configuration, latestPractice: true };
            reviewFilter = "all";
            reviewPage = 0;
            renderResults();
            $("ceePracticeBody").scrollIntoView({ behavior: "instant", block: "start" });
            return;
        }
        if (store.draft?.settings?.paperDay === paper.day && !store.draft.finishedAt) {
            runItems(store.draft);
            active = store.draft;
            renderSession(true);
            return;
        }
        const begin = () => startItems(items, configuration);
        if (store.draft) {
            $("ceePracticeStart").focus({ preventScroll: true });
            confirm("Replace unfinished practice?", "Your earlier answers remain in practice progress, but the unfinished session will be replaced.", "Start paper practice", begin);
        } else begin();
    }

    function renderBuilder() {
        screen = "builder";
        document.body.classList.remove("cee-practicing");
        const subjects = [...new Set(arrangeTopics(bank.topics).filter(topic => topic.count).map(topic => topic.subject))];
        const summary = getSummary();
        const saved = bank.records.filter(item => store.bookmarks[item.id]).length;
        const covered = Math.min(summary.attempted, bank.records.length);
        const correctShare = Math.min(100, summary.correct / bank.records.length * 100);
        const coveredShare = Math.min(100, covered / bank.records.length * 100);
        $("ceePracticeBody").innerHTML = `<div class="cee-page-heading"><div><span class="cee-overline">Question bank</span><h1>Practice</h1><p>${format(bank.records.length)} questions</p></div><span class="cee-practice-mode"><span class="cee-status-dot"></span>Untimed practice</span></div>
            <dl class="cee-practice-stats cee-practice-overview" aria-label="Practice performance"><div><dt>${icon("clipboard")}Attempted</dt><dd id="ceePracticeStatAttempted">${format(summary.attempted)}</dd><small>Unique questions</small></div><div><dt>${icon("check")}Correct</dt><dd id="ceePracticeStatCorrect">${format(summary.correct)}</dd><small>Latest answers</small></div><div><dt>${icon("close")}Incorrect</dt><dd id="ceePracticeStatWrong">${format(summary.wrong)}</dd><small>Latest answers</small></div><div><dt>${icon("grid")}Accuracy</dt><dd id="ceePracticeStatAccuracy">${summary.attempted ? summary.accuracy + "%" : "&mdash;"}</dd><small>Correct / attempted</small></div></dl>
            <section class="cee-practice-coverage" aria-labelledby="ceePracticeCoverageTitle"><div class="cee-practice-ring" role="img" aria-label="${summary.correct} correct, ${summary.wrong} incorrect, ${Math.max(0, bank.records.length - covered)} not attempted" style="--correct-share:${correctShare}%;--covered-share:${coveredShare}%"><span><b>${Math.round(coveredShare)}%</b><small>covered</small></span></div><div class="cee-coverage-copy"><h2 id="ceePracticeCoverageTitle">Question coverage</h2><p>${summary.attempted ? `${format(covered)} of ${format(bank.records.length)} questions practised` : "No practice answers yet"}</p><div class="cee-coverage-legend"><span class="correct">Correct</span><span class="wrong">Incorrect</span><span class="unseen">Not attempted</span></div></div><div class="cee-practice-shortcuts"><button type="button" class="btn" data-practice-quick="wrong" ${summary.wrong ? "" : "disabled"}>${icon("close")}Review incorrect<span>${format(summary.wrong)}</span></button><button type="button" class="btn" data-practice-quick="saved" ${saved ? "" : "disabled"}>${icon("bookmark")}Saved questions<span>${format(saved)}</span></button></div></section>
            ${store.draft ? `<section class="cee-resume"><span class="cee-resume-icon">${icon("clipboard")}</span><div><h2>Continue ${paperTitle(store.draft) ? esc(paperTitle(store.draft)) + " practice" : "your practice"}</h2><p>${Object.keys(store.draft.answers).length} / ${store.draft.ids.length} answered</p></div><button type="button" class="btn-primary" data-practice-action="resume">Resume${icon("arrow-right")}</button></section>` : ""}
            <form id="ceePracticeForm" class="cee-practice-builder"><div class="cee-builder-topics"><div class="cee-section-heading"><h2>Choose topics</h2><div class="cee-topic-actions"><button type="button" class="cee-text-action" data-practice-action="select-visible">Select visible</button><button type="button" class="cee-text-action" data-practice-action="clear-topics">Clear</button></div></div><div class="cee-topic-filters"><label><span class="sr-only">Subject</span><select id="ceePracticeSubject"><option value="all">All subjects</option>${subjects.map(value => `<option>${esc(value)}</option>`).join("")}</select></label><label><span class="sr-only">Find topics</span><input type="search" id="ceePracticeTopicSearch" placeholder="Find a topic" value="${esc(topicQuery)}" /></label></div><div id="ceePracticeTopics" class="cee-topic-checks"></div><p id="ceePracticeSelected" class="cee-study-status"></p></div>
            <div class="cee-builder-settings"><h2>Session</h2><label>Question source<select id="ceePracticeSource"><option value="all">All CEE questions</option><option value="notes">Generated from notes</option><option value="pdf">Original PDF MCQs</option><option value="papers">Daily papers only</option></select></label><label>Question pool<select id="ceePracticeFilter"><option value="all">All questions</option><option value="unseen">Not yet practised</option><option value="wrong">Previously incorrect</option><option value="saved">Saved questions</option></select></label><label>Number of questions<input type="number" id="ceePracticeCount" min="1" step="1" inputmode="numeric" value="${count}" required /></label><div class="cee-count-presets">${[10, 20, 50, 100].map(value => `<button type="button" data-practice-count="${value}" aria-label="Set ${value} questions">${value}</button>`).join("")}</div><p id="ceePracticePool" role="status"></p><p id="ceePracticeCountError" class="cee-count-error" role="alert" hidden></p><button class="btn-primary cee-start-practice" id="ceePracticeStart" type="submit">Start practice${icon("arrow-right")}</button></div></form>
            ${store.history.length ? `<section class="cee-practice-history"><div class="cee-section-heading"><h2>Recent sessions</h2><span>${store.history.length} sessions</span></div>${store.history.map((run, index) => `<button type="button" class="cee-history-row" data-practice-history="${index}"><span>${paperTitle(run) ? esc(paperTitle(run)) + " practice<small>" + esc(new Date(run.finishedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })) + "</small>" : esc(new Date(run.finishedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" }))}<small>${run.ids.length} questions</small></span><span>${run.summary?.correct ?? 0} correct<small>${run.summary?.wrong ?? 0} incorrect</small></span>${icon("arrow-right")}</button>`).join("")}</section>` : ""}`;
        $("ceePracticeSubject").value = subject;
        $("ceePracticeSource").value = source;
        $("ceePracticeFilter").value = filter;
        renderTopics();
        updatePool();
    }

    function arrangeTopics(topics) {
        const placements = new Map();
        const subjects = new Map();
        CEE_SYLLABUS.subjects.forEach((entry, subjectIndex) => {
            subjects.set(entry.name, subjectIndex);
            entry.units.forEach((unit, unitIndex) => {
                (syllabusTopics[entry.name]?.[unitIndex] || []).forEach((id, topicIndex) => {
                    placements.set(id, { subjectIndex, unitIndex, topicIndex, title: unit.title, number: unit.n });
                });
            });
        });
        return topics.map((topic, topicIndex) => ({ ...topic, syllabus: placements.get(topic.id) || {
            subjectIndex: subjects.get(topic.subject) ?? subjects.size,
            unitIndex: Number.MAX_SAFE_INTEGER - (topic.id.endsWith("-mixed") ? 0 : 1),
            topicIndex, title: topic.id.endsWith("-mixed") ? "Mixed topics" : "Additional topics", number: null
        } })).sort((first, second) => first.syllabus.subjectIndex - second.syllabus.subjectIndex
            || first.subject.localeCompare(second.subject) || first.syllabus.unitIndex - second.syllabus.unitIndex
            || first.syllabus.topicIndex - second.syllabus.topicIndex);
    }

    function availableTopics() {
        const needle = topicQuery.toLowerCase();
        return arrangeTopics(bank.topics).filter(topic => topic.count && (subject === "all" || topic.subject === subject)
            && (source === "all" || bank.records.some(item => item.topicId === topic.id && item.origin === source))
            && (topic.title + " " + topic.subject + " " + topic.syllabus.title).toLowerCase().includes(needle));
    }

    function renderTopics() {
        const visible = availableTopics();
        const topicProgress = new Map(core.summarizeProgress(store.progress, bank.topics).topics.map(topic => [topic.id, topic]));
        let previousSubject = null;
        let previousUnit = null;
        $("ceePracticeTopics").innerHTML = visible.length ? visible.map(topic => {
            let headings = "";
            if (topic.subject !== previousSubject) {
                headings += `<h3 class="cee-topic-subject-heading">${esc(topic.subject)}</h3>`;
                previousSubject = topic.subject;
                previousUnit = null;
            }
            if (topic.syllabus.title !== previousUnit) {
                headings += `<h4 class="cee-topic-unit-heading">${topic.syllabus.number == null ? "" : `<span>Unit ${topic.syllabus.number}</span>`}<span>${esc(topic.syllabus.title)}</span></h4>`;
                previousUnit = topic.syllabus.title;
            }
            const available = core.filterPool(bank.records, { topics: [topic.id], source, filter }, store).length;
            const progress = topicProgress.get(topic.id);
            return `${headings}<label class="cee-topic-check"><input type="checkbox" data-practice-topic="${topic.id}" ${selected.has(topic.id) ? "checked" : ""} /><span><strong>${esc(topic.title)}</strong><small>${esc(topic.subject)}${progress ? " / " + progress.attempted + " attempted" : ""}</small>${progress ? `<span class="cee-topic-progress" aria-hidden="true"><span style="width:${Math.min(100, progress.correct / topic.count * 100)}%"></span><span style="width:${Math.min(100, progress.wrong / topic.count * 100)}%"></span></span>` : ""}</span><span class="cee-topic-count">${available}<small>questions</small></span></label>`;
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
        $("ceePracticeStart").innerHTML = `${Number.isInteger(count) && count > 0 && count <= available ? "Start " + format(count) + " question" + (count === 1 ? "" : "s") : "Start practice"}${icon("arrow-right")}`;
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
        if (input.id === "ceePracticeJump") {
            active.index = Number(input.value);
            if (window.matchMedia("(max-width: 900px)").matches) $("ceePracticeNavigator").open = false;
            save(); renderSession(true);
        }
    }

    function onClick(event) {
        const quick = event.target.closest("[data-practice-quick]");
        if (quick) {
            filter = quick.dataset.practiceQuick;
            source = "all"; subject = "all"; topicQuery = "";
            selected = new Set(bank.topics.filter(topic => topic.count).map(topic => topic.id));
            count = Math.max(1, Math.min(20, pool().length));
            renderBuilder();
            $("ceePracticeForm").scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        const option = event.target.closest("[data-practice-answer]");
        if (option) { chooseAnswer(option.dataset.practiceAnswer); return; }
        const preset = event.target.closest("[data-practice-count]");
        if (preset) { count = Number(preset.dataset.practiceCount); $("ceePracticeCount").value = String(count); updatePool(); return; }
        const question = event.target.closest("[data-practice-index]");
        if (question) {
            active.index = Number(question.dataset.practiceIndex);
            if (window.matchMedia("(max-width: 900px)").matches) $("ceePracticeNavigator").open = false;
            save(); renderSession(true); return;
        }
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
        if (action === "retry") open(null, requestedPaper, requestedReview);
        if (action === "clear-topics") { selected.clear(); renderTopics(); updatePool(); }
        if (action === "select-visible") { availableTopics().forEach(topic => selected.add(topic.id)); renderTopics(); updatePool(); }
        if (action === "resume") {
            active = store.draft;
            try { runItems(active); renderSession(true); } catch (error) { notify(error.message); }
        }
        if (action === "pause") {
            save();
            if (paperTitle(active)) window.CEE_APP.openPapers();
            else renderBuilder();
        }
        if (action === "papers") window.CEE_APP.openPapers();
        if (action === "previous") go(-1);
        if (action === "next") go(1);
        if (action === "navigator") {
            const navigator = $("ceePracticeNavigator");
            navigator.open = true;
            navigator.scrollIntoView({ behavior: "instant", block: "center" });
            navigator.querySelector("summary").focus({ preventScroll: true });
            $("ceePracticeMapToggle").setAttribute("aria-expanded", "true");
        }
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
            const configuration = { ...active.settings, topics: [...new Set(wrong.map(item => item.topicId))], source: paperTitle(active) ? "papers" : "all", filter: "wrong" };
            const begin = () => startItems(wrong, configuration);
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
        window.dispatchEvent(new Event("cee:practice-updated"));
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
        const completed = Math.round(summary.answered / summary.total * 100);
        const navigatorOpen = $("ceePracticeNavigator")?.open ?? window.matchMedia("(min-width: 901px)").matches;
        const title = paperTitle(active);
        $("ceePracticeBody").innerHTML = `<header class="cee-practice-session-bar cee-exam-toolbar"><button type="button" class="cee-icon-button" data-practice-action="pause" title="Save and pause" aria-label="Save and pause">${icon("arrow-left")}</button><div class="cee-session-heading"><span class="cee-session-eyebrow">${esc(item.subject)} <span aria-hidden="true">/</span> Practice</span><h1>${esc(title ? title + " practice" : item.topicTitle)}</h1></div><span class="cee-session-mode">Untimed</span><span class="cee-session-count"><b>${summary.answered}</b><span> / ${summary.total}</span><small>answered</small></span><button type="button" class="btn cee-session-finish" data-practice-action="finish">${icon("check")}Finish</button></header>
            <div class="cee-session-progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${summary.total}" aria-valuenow="${summary.answered}"><span style="width:${summary.answered / summary.total * 100}%"></span></div>
            <div class="cee-focus-layout cee-exam-workspace"><article class="cee-focus-question"><div class="cee-question-heading"><div class="cee-question-identifier"><b>${String(active.index + 1).padStart(2, "0")}</b><span>Question<small>of ${items.length}</small></span></div><div class="cee-question-tools"><button type="button" class="cee-icon-button" data-practice-save="${esc(item.id)}" aria-pressed="${!!store.bookmarks[item.id]}" title="Save question" aria-label="Save question">${icon("bookmark")}</button><button type="button" class="cee-icon-button" data-practice-action="flag" aria-pressed="${!!active.flags[item.id]}" title="Flag for review" aria-label="Flag for review">${icon("flag")}</button></div></div><small class="cee-question-source">${icon("library")}<span>${esc(item.sourceLabel)}${item.q.source?.adapted ? " (adapted)" : ""}</span></small><div id="ceePracticeQuestion" class="cee-question-text" tabindex="-1">${item.q.text}</div><div class="cee-answer-options cee-exam-options">${item.q.options.map(option => {
                const correct = picked != null && option.key === item.q.answer;
                const chosen = picked === option.key;
                const wrong = chosen && !correct;
                return `<button type="button" class="cee-answer ${correct ? "is-correct" : ""} ${wrong ? "is-wrong" : ""} ${chosen ? "is-selected" : ""}" data-practice-answer="${option.key}" ${picked == null ? "" : "disabled"}><span class="cee-answer-key">${esc(option.key.toUpperCase())}</span><span class="cee-answer-content">${option.text}${correct || wrong ? `<small class="cee-choice-caption">${correct ? chosen ? "Your answer is correct" : "Correct answer" : "Your answer"}</small>` : ""}</span><span class="cee-choice-mark" aria-hidden="true">${correct ? icon("check") : wrong ? icon("close") : ""}</span></button>`;
            }).join("")}</div>${picked == null ? "" : `<div class="cee-session-review">${ui.solution(item, picked)}</div>`}</article>
            <aside class="cee-practice-map"><div class="cee-session-overview"><div class="cee-session-dial" style="--session-correct:${summary.correct / summary.total * 100}%;--session-answered:${summary.answered / summary.total * 100}%" role="img" aria-label="${completed}% answered, ${summary.correct} correct and ${summary.wrong} incorrect"><span>${completed}<small>%</small></span></div><div><h2>Session progress</h2><p>${summary.answered} of ${summary.total} answered</p></div></div><dl class="cee-session-totals"><div class="correct"><dt>${icon("check")}Correct</dt><dd>${summary.correct}</dd></div><div class="wrong"><dt>${icon("close")}Incorrect</dt><dd>${summary.wrong}</dd></div><div class="unanswered"><dt>${icon("minus")}Unanswered</dt><dd>${summary.skipped}</dd></div></dl><details id="ceePracticeNavigator" class="cee-question-navigator" ${navigatorOpen ? "open" : ""}><summary><span>${icon("grid")}Questions</span>${icon("chevron-right")}</summary><label>Go to question<select id="ceePracticeJump">${items.map((record, index) => `<option value="${index}">Question ${index + 1}${active.answers[record.id] != null ? " - answered" : ""}</option>`).join("")}</select></label><div class="cee-question-map">${items.slice(start, start + 100).map((record, offset) => {
                const index = start + offset;
                const answer = active.answers[record.id];
                const status = answer == null ? "unanswered" : answer === record.q.answer ? "correct" : "wrong";
                return `<button type="button" data-practice-index="${index}" class="${status} ${active.flags[record.id] ? "is-flagged" : ""}" ${index === active.index ? 'aria-current="step"' : ""} aria-label="Question ${index + 1}, ${status}${active.flags[record.id] ? ", flagged" : ""}"><span>${index + 1}</span>${answer == null ? "" : `<span class="cee-map-result" aria-hidden="true">${icon(status === "correct" ? "check" : "close")}</span>`}</button>`;
            }).join("")}</div><div class="cee-map-legend"><span>${icon("check")}Correct</span><span>${icon("close")}Incorrect</span><span>${icon("flag")}Flagged</span></div>${items.length > 100 ? `<p class="cee-study-status">${start + 1}-${Math.min(start + 100, items.length)} / ${items.length}</p>` : ""}</details></aside></div>
            <footer class="cee-session-dock"><div class="cee-focus-actions"><button type="button" class="btn" data-practice-action="previous" aria-label="Previous question" title="Previous question" ${active.index ? "" : "disabled"}>${icon("arrow-left")}<span>Previous</span></button><button type="button" class="cee-dock-position" id="ceePracticeMapToggle" data-practice-action="navigator" aria-controls="ceePracticeNavigator" aria-expanded="${navigatorOpen}" title="Show question navigator" aria-label="Show question navigator, question ${active.index + 1} of ${items.length}">${icon("grid")}<span>${active.index + 1} / ${items.length}</span></button>${active.index === items.length - 1 ? `<button type="button" class="btn-primary" id="ceePracticeNext" data-practice-action="finish"><span>Finish practice</span>${icon("check")}</button>` : `<button type="button" class="btn-primary" id="ceePracticeNext" data-practice-action="next"><span>${picked == null ? "Skip question" : "Next question"}</span>${icon("arrow-right")}</button>`}</div></footer>`;
        $("ceePracticeJump").value = String(active.index);
        $("ceePracticeNavigator").addEventListener("toggle", event => {
            if (event.target.isConnected) $("ceePracticeMapToggle")?.setAttribute("aria-expanded", String(event.target.open));
        });
        ui.typeset($("ceePracticeBody"));
        if (focus) { $("ceePracticeQuestion").focus({ preventScroll: true }); $("ceePracticeBody").scrollIntoView({ behavior: "instant", block: "start" }); }
    }

    function renderResults() {
        screen = "results";
        document.body.classList.remove("cee-practicing");
        let items;
        try { items = runItems(active); } catch (error) { notify(error.message); renderBuilder(); return; }
        const summary = active.summary || core.grade(items, active.answers);
        const subjects = summary.subjects || core.grade(items, active.answers).subjects;
        const filtered = items.filter(item => {
            const picked = active.answers[item.id];
            if (reviewFilter === "wrong") return picked != null && picked !== item.q.answer;
            if (reviewFilter === "skipped") return picked == null;
            if (reviewFilter === "saved") return !!store.bookmarks[item.id];
            return true;
        });
        reviewPage = Math.max(0, Math.min(reviewPage, Math.max(0, Math.ceil(filtered.length / 10) - 1)));
        const title = paperTitle(active);
        const unanswered = active.latestPractice ? "Unanswered" : "Skipped";
        const breakdownOpen = $("ceePracticeReviewBreakdown")?.open;
        $("ceePracticeBody").innerHTML = `<div class="cee-page-heading"><div><h1>${title ? esc(title) + (active.latestPractice ? " practice review" : " practice results") : "Practice results"}</h1><p>${active.latestPractice ? "Latest practice answers / " : ""}${format(summary.total)} questions</p></div><button type="button" class="btn" data-practice-action="${title ? "papers" : "builder"}">${icon("arrow-left")}${title ? "Papers" : "Practice"}</button></div><dl class="cee-practice-stats cee-result-stats"><div><dt>Correct</dt><dd>${summary.correct}</dd></div><div><dt>Incorrect</dt><dd>${summary.wrong}</dd></div><div><dt>${unanswered}</dt><dd>${summary.skipped}</dd></div><div><dt>CEE net marks</dt><dd>${summary.netMarks}<small> / ${summary.total}</small></dd></div></dl><p class="cee-study-status">+1 correct / -0.25 incorrect / 0 ${unanswered.toLowerCase()}</p>
            <div class="cee-results-actions"><button type="button" class="btn-primary" data-practice-action="retry-wrong" ${summary.wrong ? "" : "disabled"}>Retry incorrect${icon("arrow-right")}</button><label>Review<select id="ceePracticeReviewFilter"><option value="all">All questions</option><option value="wrong">Incorrect</option><option value="skipped">${unanswered}</option><option value="saved">Saved</option></select></label></div>
            ${active.latestPractice ? `<details id="ceePracticeReviewBreakdown" class="cee-paper-breakdown cee-review-breakdown" ${breakdownOpen ? "open" : ""}><summary><span>By subject and topic</span>${icon("chevron-right")}</summary>` : ""}
            <section class="cee-topic-results cee-practice-subject-results"><h2>By subject</h2>${subjects.map(subject => `<div data-practice-subject-result="${esc(subject.name)}" data-correct="${subject.correct}" data-wrong="${subject.wrong}" data-attempted="${subject.answered}"><span>${esc(subject.name)}<small>${subject.answered} / ${subject.total} attempted</small></span><span>${subject.correct} correct<small>${subject.wrong} incorrect / ${subject.skipped} ${unanswered.toLowerCase()}</small></span><progress max="${subject.total}" value="${subject.correct}" aria-label="${esc(subject.name)} correct"></progress></div>`).join("")}</section>
            <section class="cee-topic-results"><h2>By topic</h2>${summary.topics.map(topic => `<div><span>${esc(topic.title)}</span><span>${topic.correct} / ${topic.total}</span><progress max="${topic.total}" value="${topic.correct}" aria-label="${esc(topic.title)} correct"></progress></div>`).join("")}</section>
            ${active.latestPractice ? "</details>" : ""}
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

    window.CEE_PRACTICE = Object.freeze({ open, openPaper: dayNumber => open(null, dayNumber), reviewPaper: dayNumber => open(null, dayNumber, true), suspend, getSummary, arrangeTopics });
})();