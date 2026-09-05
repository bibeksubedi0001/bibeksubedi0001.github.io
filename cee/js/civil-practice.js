(function () {
    "use strict";

    const STORE_KEY = "cee_civil_practice_v1";
    const PAGE_SIZE = 20;
    const HISTORY_LIMIT = 20;
    const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const questionKey = (item) => item.q.src || item.q.id;
    const plainText = (value) => String(value || "").replace(/<svg[\s\S]*?<\/svg>/gi, " ")
        .replace(/<[^>]*>/g, " ").replace(/&(?:nbsp|amp|lt|gt|quot|#\d+);/g, " ")
        .replace(/\s+/g, " ").trim().toLowerCase();
    const isObject = (value) => value && typeof value === "object" && !Array.isArray(value);

    function chaptersFrom(entries) {
        const chapters = new Map();
        entries.forEach((entry) => entry.meta.chapters.forEach((chapter) => {
            const id = slug(chapter.name);
            if (!chapters.has(id)) chapters.set(id, { id, name: chapter.name, count: 0, index: chapters.size });
            chapters.get(id).count += chapter.count;
        }));
        return [...chapters.values()];
    }

    function createTaxonomy(entries, syllabus = window.CIVIL_SYLLABUS, mapping = window.CIVIL_TOPIC_MAP) {
        const legacy = chaptersFrom(entries);
        if (!syllabus || !mapping) return { chapters: legacy, official: [], topics: new Map(), assignments: new Map(), total: legacy.reduce((sum, chapter) => sum + chapter.count, 0) };
        const chapters = syllabus.chapters.map((chapter, index) => ({ ...chapter, index, count: 0,
            subchapters: chapter.subchapters.map((topic, i) => ({ ...topic, id: topic.code, chapterId: chapter.id, index: i, count: 0 })) }));
        const official = chapters.slice();
        const topics = new Map(chapters.flatMap((chapter) => chapter.subchapters.map((topic) => [topic.id, topic])));
        const sources = {
            BASI674: "basic-civil-engineering", SOIL136: "soil-mechanics-and-foundation", WATE701: "basic-water-resources-engineering",
            STRU935: "structural-mechanics", DESI787: "design-of-structures", WATE813: "water-supply-sanitation-and-environment",
            IRRI951: "irrigation-and-drainage", HYDR626: "hydropower", TRAN808: "transportation"
        };
        const extra = { id: "additional-bank-questions", name: "Additional bank questions", short: "+", index: 10, count: 0, additional: true, subchapters: [] };
        const assignments = new Map();
        for (const [source, data] of Object.entries(mapping)) {
            const codes = new Map();
            for (const [first, last, code] of data.ranges) for (let n = first; n <= last; n++) codes.set(n, code);
            for (const [n, code] of Object.entries(data.overrides || {})) codes.set(+n, code);
            for (let n = 1; n <= data.length; n++) {
                let topic = topics.get(codes.get(n));
                if (!topic) {
                    const id = "additional-" + source;
                    if (!topics.has(id)) {
                        const original = legacy.find((chapter) => chapter.id === sources[source]);
                        const group = { id, code: "", number: "", name: original ? original.name : source,
                            detail: "These original bank questions do not have a sufficiently clear match to a listed syllabus subchapter. They remain available in both Exam and Practice modes.",
                            chapterId: extra.id, index: extra.subchapters.length, additional: true, count: 0 };
                        topics.set(id, group); extra.subchapters.push(group);
                    }
                    topic = topics.get(id);
                }
                topic.count++;
                assignments.set(source + "-" + String(n).padStart(5, "0"), topic);
            }
        }
        extra.count = extra.subchapters.reduce((sum, topic) => sum + topic.count, 0);
        if (extra.count) chapters.push(extra);
        chapters.forEach((chapter) => { chapter.count = chapter.subchapters.reduce((sum, topic) => sum + topic.count, 0); });
        return { chapters, official, topics, assignments, total: assignments.size };
    }

    function inScope(item, selected) {
        return selected.size === 0 || selected.has(item.chapterId) || selected.has(item.subchapterId);
    }

    function createBank(entries, loadSet) {
        const taxonomy = createTaxonomy(entries);
        const chapters = taxonomy.chapters;
        const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
        let records = null;
        let pending = null;
        let loaded = 0;
        const listeners = new Set();
        function load(onProgress) {
            if (records) return Promise.resolve(records);
            if (onProgress) { listeners.add(onProgress); onProgress(loaded, entries.length); }
            if (!pending) {
                loaded = 0;
                pending = (async () => {
                    let cursor = 0;
                    const groups = new Array(entries.length);
                    const failures = [];
                    await Promise.all(Array.from({ length: Math.min(4, entries.length) }, async () => {
                        while (cursor < entries.length) {
                            const i = cursor++;
                            const entry = entries[i];
                            try {
                                const data = await loadSet(entry);
                                let no = 0;
                                groups[i] = data.chapters.flatMap((ch) => ch.questions.map((q) => {
                                    const topic = taxonomy.assignments.get(q.src || q.id);
                                    const chapterId = topic ? topic.chapterId : slug(ch.name);
                                    const chapter = chapterMap.get(chapterId);
                                    return { q, ch, chapterId, chapterName: chapter ? chapter.name : ch.name,
                                        subchapterId: topic ? topic.id : null, subchapterName: topic ? topic.name : null,
                                        subchapterNumber: topic ? topic.number : null, chapterOrder: chapter ? chapter.index : 99,
                                        subchapterOrder: topic ? topic.index : 0, setKey: entry.key, setNo: entry.no, sourceNo: ++no };
                                }));
                                loaded++;
                                listeners.forEach((listener) => listener(loaded, entries.length));
                            } catch (error) { failures.push(error); }
                        }
                    }));
                    if (failures.length) throw new Error("Some question files could not be loaded. Check your connection and retry; your answers are safe.");
                    const seen = new Set();
                    records = groups.flat().filter((item) => {
                        const key = questionKey(item);
                        if (seen.has(key)) return false;
                        seen.add(key);
                        return true;
                    });
                    const order = new Map(chapters.map((chapter, i) => [chapter.id, i]));
                    records.sort((a, b) => order.get(a.chapterId) - order.get(b.chapterId)
                        || a.subchapterOrder - b.subchapterOrder
                        || questionKey(a).localeCompare(questionKey(b), "en", { numeric: true }));
                    return records;
                })().catch((error) => { pending = null; records = null; loaded = 0; throw error; });
            }
            return pending.finally(() => { if (onProgress) listeners.delete(onProgress); });
        }
        return { chapters, taxonomy, load };
    }

    function grade(records, answers) {
        const result = { total: records.length, answered: 0, correct: 0, wrong: 0, skipped: 0, score: 0, pct: 0, accuracy: 0, chapters: [] };
        const chapters = new Map();
        const topics = new Map();
        records.forEach((item) => {
            if (!chapters.has(item.chapterId)) chapters.set(item.chapterId, {
                id: item.chapterId, name: item.chapterName || item.ch.name, order: item.chapterOrder || 0,
                total: 0, answered: 0, correct: 0, wrong: 0, subchapters: []
            });
            const chapter = chapters.get(item.chapterId);
            chapter.total++;
            let topic = null;
            if (item.subchapterId) {
                if (!topics.has(item.subchapterId)) {
                    topic = { id: item.subchapterId, name: item.subchapterName, number: item.subchapterNumber,
                        order: item.subchapterOrder || 0, total: 0, answered: 0, correct: 0, wrong: 0 };
                    topics.set(item.subchapterId, topic); chapter.subchapters.push(topic);
                }
                topic = topics.get(item.subchapterId); topic.total++;
            }
            const answer = answers[questionKey(item)];
            if (!item.q.options.some((option) => option.key === answer)) { result.skipped++; return; }
            result.answered++; chapter.answered++;
            if (topic) topic.answered++;
            if (answer === item.q.answer) { result.correct++; chapter.correct++; if (topic) topic.correct++; }
            else { result.wrong++; chapter.wrong++; if (topic) topic.wrong++; }
        });
        result.score = result.correct;
        result.pct = result.total ? Math.round(result.score / result.total * 100) : 0;
        result.accuracy = result.answered ? Math.round(result.correct / result.answered * 100) : 0;
        result.chapters = [...chapters.values()].sort((a, b) => a.order - b.order);
        result.chapters.forEach((chapter) => chapter.subchapters.sort((a, b) => a.order - b.order));
        return result;
    }

    function filterPool(records, scope, filter, progress, bookmarks) {
        const selected = new Set(scope);
        return records.filter((item) => {
            if (!inScope(item, selected)) return false;
            const key = questionKey(item);
            if (filter === "unseen") return !progress[key];
            if (filter === "wrong") return progress[key] && progress[key].correct === false;
            if (filter === "saved") return !!bookmarks[key];
            return true;
        });
    }

    function sample(records, count, random = Math.random) {
        const copy = records.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy.slice(0, Math.max(0, Math.min(Math.floor(count), copy.length)));
    }

    const modeOf = (run) => run && run.mode === "practice" ? "practice" : "exam";
    const draftKey = (mode) => mode === "practice" ? "practiceDraft" : "draft";

    function recordFeedback(store, run, item, answer, at = Date.now()) {
        const key = questionKey(item);
        if (modeOf(run) !== "practice" || run.finishedAt || run.answers[key] != null || !item.q.options.some((option) => option.key === answer)) return false;
        run.answers[key] = answer;
        const previous = store.progress[key];
        store.progress[key] = { answer, correct: answer === item.q.answer, chapterId: item.chapterId, subchapterId: item.subchapterId,
            attempts: (previous && previous.attempts || 0) + 1, updatedAt: at, mode: "practice" };
        return true;
    }

    function freshStore() {
        return { version: 1, bookmarks: {}, progress: {}, draft: null, practiceDraft: null, history: [] };
    }

    function create(deps) {
        const { $, esc, entries, loadSet, show, confirm, typeset, isOpen } = deps;
        const bank = createBank(entries, loadSet);
        const chapters = bank.chapters;
        const taxonomy = bank.taxonomy;
        const topics = taxonomy.topics;
        const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
        const total = chapters.reduce((sum, chapter) => sum + chapter.count, 0);
        let store = freshStore();
        let storageReadable = true;
        let screen = null;
        let serial = 0;
        let timer = null;
        let retryLoad = null;
        let selected = new Set();
        let desiredCount = 20;
        let poolFilter = "all";
        let selectedMode = "practice";
        let timed = true;
        let customMinutes = null;
        let builderOpen = new Set();
        let chapterOpen = new Set();
        const uiIcon = window.CEE_UI_ICONS.svg;
        const flagIcon = uiIcon("flag");
        const bookmarkIcon = uiIcon("bookmark");
        const chevron = uiIcon("chevron-right");
        const chapterIcons = { "basic-civil-engineering": "building", "soil-mechanics-and-foundation": "foundation",
            "basic-water-resources-engineering": "waves", "structural-mechanics": "structure", "design-of-structures": "ruler",
            "water-supply-sanitation-and-environment": "droplet", "irrigation-and-drainage": "irrigation", hydropower: "turbine",
            transportation: "road", "project-planning-design-and-implementation": "clipboard", "additional-bank-questions": "library" };
        const number = (n) => n.toLocaleString("en-US");
        const date = (at) => new Date(at).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

        function notice(message) {
            $("cvSaveNotice").textContent = message;
            $("cvSaveNotice").hidden = !message;
        }

        function readStore() {
            try {
                const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
                if (raw == null) return;
                if (!isObject(raw) || raw.version !== 1) throw new Error("Unsupported practice data");
                store = { ...raw, bookmarks: isObject(raw.bookmarks) ? raw.bookmarks : {},
                    progress: isObject(raw.progress) ? raw.progress : {},
                    draft: validRun(raw.draft) ? raw.draft : null,
                    practiceDraft: validRun(raw.practiceDraft) && modeOf(raw.practiceDraft) === "practice" ? raw.practiceDraft : null,
                    history: Array.isArray(raw.history) ? raw.history.filter(validRun).slice(0, HISTORY_LIMIT) : [] };
                const classify = (key, item) => {
                    const topic = taxonomy.assignments.get(key);
                    return topic ? { ...item, chapterId: topic.chapterId, subchapterId: topic.id } : item;
                };
                store.bookmarks = Object.fromEntries(Object.entries(store.bookmarks).filter(([, item]) => isObject(item)).map(([key, item]) => [key, classify(key, item)]));
                store.progress = Object.fromEntries(Object.entries(store.progress).filter(([, item]) => isObject(item) && typeof item.correct === "boolean").map(([key, item]) => [key, classify(key, item)]));
            } catch (error) {
                storageReadable = false;
                notice("Saved practice data could not be read. It has not been overwritten. This session can continue, but practice progress cannot be saved until storage is available.");
            }
        }

        function validRun(run) {
            return isObject(run) && typeof run.id === "string" && typeof run.title === "string"
                && Array.isArray(run.ids) && run.ids.length > 0 && run.ids.every((id) => typeof id === "string")
                && new Set(run.ids).size === run.ids.length && isObject(run.answers) && isObject(run.flags)
                && (!run.endsAt || Number.isFinite(run.endsAt));
        }

        function save() {
            if (!storageReadable) return;
            try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); notice(""); }
            catch (error) { notice("Practice progress could not be saved on this device. Keep this page open; your current answers are still here."); }
        }

        function replace(node, html) {
            if (window.MathJax && window.MathJax.typesetClear) window.MathJax.typesetClear([node]);
            node.innerHTML = html;
            typeset(node);
        }

        function stopTimer() {
            if (timer) clearInterval(timer);
            timer = null;
        }

        function suspend() {
            serial++; stopTimer();
            if ($("fpMapDialog") && $("fpMapDialog").open) $("fpMapDialog").close();
        }

        function icon(chapter) {
            return `<span class="cv-chapter-icon" data-tone="${chapter.index}" aria-hidden="true">${uiIcon(chapterIcons[chapter.id] || "library")}</span>`;
        }

        function counts(scope) {
            const chosen = new Set(scope);
            const progress = Object.values(store.progress).filter((item) => inScope(item, chosen));
            const count = topics.size ? [...topics.values()].filter((topic) => inScope({ chapterId: topic.chapterId, subchapterId: topic.id }, chosen)).reduce((sum, topic) => sum + topic.count, 0)
                : chapters.filter((chapter) => chosen.size === 0 || chosen.has(chapter.id)).reduce((sum, chapter) => sum + chapter.count, 0);
            return { total: count, attempted: progress.length, correct: progress.filter((item) => item.correct).length,
                wrong: progress.filter((item) => item.correct === false).length,
                saved: Object.values(store.bookmarks).filter((item) => inScope(item, chosen)).length };
        }

        function availableCount() {
            if (!selected.size) return 0;
            const stats = counts([...selected]);
            return poolFilter === "unseen" ? Math.max(0, stats.total - stats.attempted)
                : poolFilter === "wrong" ? stats.wrong : poolFilter === "saved" ? stats.saved : stats.total;
        }

        function draftCard() {
            return [store.practiceDraft, store.draft].filter(Boolean).map((run) => {
                const mode = modeOf(run), label = mode === "practice" ? "Practice" : "Exam";
                const expired = mode === "exam" && run.endsAt && run.endsAt <= Date.now();
                return `<div class="cv-resume-card"><div class="cv-resume-copy"><b>${expired ? "Your custom exam has ended" : "Continue " + label.toLowerCase()}</b>
                    <span>${esc(run.title)} &middot; ${Object.keys(run.answers).length} of ${run.ids.length} answered${run.endsAt && mode === "exam" ? " &middot; Deadline: " + date(run.endsAt) : ""}</span></div>
                    <div class="cv-head-actions"><button type="button" class="cv-btn" data-cp-action="resume" data-mode="${mode}">${expired ? "View result" : "Resume " + label.toLowerCase()}</button>
                    <button type="button" class="cv-btn cv-btn-ghost" data-cp-action="discard" data-mode="${mode}">Discard</button></div></div>`;
            }).join("");
        }

        function refreshSavedCount() { $("cvSavedCount").textContent = Object.keys(store.bookmarks).length; }

        function renderDashboard() {
            refreshSavedCount();
            $("cvHomeResume").innerHTML = draftCard();
            $("cvActivity").innerHTML = store.history.length ? `<div class="cv-history-list">${store.history.slice(0, 5).map((run) => {
                const summary = run.summary || {};
                return `<button type="button" class="cv-history-row" data-cp-action="history" data-id="${esc(run.id)}">
                    <span class="cv-history-score">${summary.pct || 0}%</span><span class="cv-history-copy"><b>${esc(run.title)}</b>
                        <small>${modeOf(run) === "practice" ? "Practice" : "Exam"} &middot; ${run.ids.length} questions &middot; ${date(run.finishedAt)}</small></span><span class="cv-history-arrow" aria-hidden="true">${uiIcon("arrow-right")}</span></button>`;
                    }).join("")}</div>` : '<div class="cv-empty"><b>Your next session starts here</b><p>Finish a practice round or custom exam to see its summary here. Model-exam scores stay with their model papers.</p></div>';
            const stats = counts([]);
            const accuracy = stats.attempted ? Math.round(stats.correct / stats.attempted * 100) : 0;
            $("cvPracticeSummary").innerHTML = `<div class="cv-metrics"><div><b>${number(stats.attempted)}</b><span>Questions practised</span></div>
                <div><b>${stats.attempted ? accuracy + "%" : "—"}</b><span>Latest-answer accuracy</span></div><div><b>${stats.saved}</b><span>Saved for later</span></div></div>
                <div class="cv-progress-track" role="progressbar" aria-label="Question bank practised" aria-valuenow="${stats.attempted}" aria-valuemin="0" aria-valuemax="${total}"><span style="width:${Math.min(100, stats.attempted / total * 100)}%"></span></div>
                <p class="cv-muted">${number(stats.attempted)} of ${number(total)} questions attempted in practice.</p>
                <div class="cv-summary-actions"><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="mistakes" ${stats.wrong ? "" : "disabled"}>Revisit incorrect (${stats.wrong})</button>
                <button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cv-nav="saved">Saved questions</button></div>`;
        }

        function leafNodes(chapter) {
            return chapter.subchapters || [chapter];
        }

        function selectChapter(id, on) {
            const chapter = chapterMap.get(id);
            if (!chapter) return;
            leafNodes(chapter).filter((topic) => topic.count > 0).forEach((topic) => {
                if (on) selected.add(topic.id); else selected.delete(topic.id);
            });
        }

        function topicTitle(topic) {
            return (topic.number ? topic.number + " " : "") + topic.name;
        }

        function selectedTitle() {
            if (selected.size === 1) return topicTitle(topics.get([...selected][0]) || chapterMap.get([...selected][0]));
            return "Custom " + selectedMode + " · " + selected.size + " topic groups";
        }

        function builderChapter(chapter) {
            const leaves = leafNodes(chapter);
            return `<details class="cv-builder-chapter${chapter.additional ? " cv-additional" : ""}" data-builder-group="${chapter.id}"${builderOpen.has(chapter.id) ? " open" : ""}>
                <summary><span class="cv-chevron">${chevron}</span>${icon(chapter)}<span class="cv-chapter-name"><b>${chapter.number ? chapter.number + ". " : ""}${esc(chapter.name)}</b><small>${chapter.additional ? "Outside or unclear in the supplied syllabus" : leaves.length + " official subchapters"} &middot; ${number(chapter.count)} questions</small></span><span class="cv-selection-count" data-selection-count="${chapter.id}"></span></summary>
                <div class="cv-builder-chapter-body"><label class="cv-select-chapter"><input type="checkbox" data-cp-chapter="${chapter.id}" ${chapter.count ? "" : "disabled"} /><span>Select all available ${chapter.additional ? "groups" : "subchapters"}</span></label>
                <div class="cv-subchapter-picks">${leaves.map((topic) => `<label class="cv-pick-subchapter${selected.has(topic.id) ? " on" : ""}${topic.count ? "" : " cv-topic-empty"}">
                    <input type="checkbox" data-cp-subchapter="${topic.id}"${selected.has(topic.id) ? " checked" : ""}${topic.count ? "" : " disabled"} />
                    <span class="cv-pick-info"><b>${esc(topicTitle(topic))}</b><small>${topic.code ? esc(topic.code) : "Additional bank questions"}${topic.count ? "" : " · No matching bank questions yet"}</small></span><span class="cv-count">${topic.count} Q</span></label>`).join("")}</div></div></details>`;
        }

        function renderBuilder() {
            $("cvBuilder").innerHTML = draftCard() + `<div class="cv-builder-layout">
                <section class="cv-panel"><div class="cv-step-head"><span class="cv-step-no">1</span><div><h3>Select chapters &amp; subchapters</h3></div></div>
                    <div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="select-all">Select all</button><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="clear-selection">Clear</button></div>
                    <div class="cv-selection-list">${chapters.map(builderChapter).join("")}</div>
                </section>
                <section class="cv-panel cv-builder-summary"><div class="cv-step-head"><span class="cv-step-no">2</span><div><h3>Choose how to learn</h3><p>One mark per correct answer. No negative marking.</p></div></div>
                    <fieldset class="cs-session-mode"><legend>Session mode</legend><label><input type="radio" name="cpMode" value="practice" ${selectedMode === "practice" ? "checked" : ""} /><span><b>Practice</b></span></label><label><input type="radio" name="cpMode" value="exam" ${selectedMode === "exam" ? "checked" : ""} /><span><b>Exam</b></span></label></fieldset>
                    <label class="cv-field"><span>Question pool</span><select id="cpPool"><option value="all">All questions</option><option value="unseen">Not yet attempted in practice</option><option value="wrong">Incorrect in practice</option><option value="saved">Saved questions</option></select></label>
                    <span class="cv-builder-hint">Number of questions</span><div class="cv-count-presets">${[10, 20, 30, 50, 100].map((n) => `<button type="button" class="cv-count-chip" data-cp-action="count" data-count="${n}">${n}</button>`).join("")}</div>
                    <label class="cv-field"><span>Custom count (1–100)</span><input type="number" id="cpCount" min="1" max="100" step="1" value="${desiredCount}" inputmode="numeric" /></label>
                    <label class="cv-switch-line" id="cpTimedLine"><input type="checkbox" id="cpTimed" ${timed ? "checked" : ""} /><span>Use a countdown timer</span></label>
                    <label class="cv-field" id="cpMinutesField"><span>Time limit (minutes)</span><input type="number" id="cpMinutes" min="1" max="720" step="1" inputmode="numeric" /></label>
                    <div class="cv-build-total" aria-live="polite" id="cpBuildTotal"></div><div class="cv-selected-chips" id="cpSelectedChips"></div>
                    <p class="cv-builder-hint" id="cpBuilderHint" hidden></p><p class="cv-notice cv-notice-warn" id="cpBuilderError" role="alert" hidden></p>
                    <div class="cv-builder-actions"><button type="button" class="cv-btn cv-btn-blue" data-cp-action="start-custom" id="cpBuildStart">Start practice</button></div>
                </section></div>`;
            $("cpPool").value = poolFilter;
            updateBuilder();
        }

        function updateBuilder() {
            const available = availableCount();
            const max = Math.min(100, available);
            const count = Math.max(0, Math.min(Math.floor(desiredCount), max));
            const additional = [...selected].filter((id) => topics.has(id) && topics.get(id).additional).length;
            const official = selected.size - additional;
            const selectionLabel = [official ? `${official} subchapter${official === 1 ? "" : "s"}` : "", additional ? `${additional} additional group${additional === 1 ? "" : "s"}` : ""].filter(Boolean).join(" and ") || "0 subchapters";
            $("cpBuildTotal").innerHTML = `<b>${number(available)}</b><span>questions available in ${selectionLabel} selected</span>`;
            $("cpSelectedChips").innerHTML = [...selected].slice(0, 5).map((id) => `<span>${esc(topicTitle(topics.get(id) || chapterMap.get(id)))}</span>`).join("")
                + (selected.size > 5 ? `<span>+${selected.size - 5} more selected</span>` : "");
            chapters.forEach((chapter) => {
                const leaves = leafNodes(chapter).filter((topic) => topic.count > 0);
                const chosen = leaves.filter((topic) => selected.has(topic.id)).length;
                const input = $("cvBuilder").querySelector(`[data-cp-chapter="${chapter.id}"]`);
                if (input) { input.checked = leaves.length > 0 && chosen === leaves.length; input.indeterminate = chosen > 0 && chosen < leaves.length; }
                const label = $("cvBuilder").querySelector(`[data-selection-count="${chapter.id}"]`);
                if (label) label.textContent = chosen ? `${chosen}/${leaves.length} selected` : "";
            });
            $("cvBuilder").querySelectorAll("[data-cp-subchapter]").forEach((input) => {
                input.checked = selected.has(input.dataset.cpSubchapter);
                input.closest(".cv-pick-subchapter").classList.toggle("on", input.checked);
            });
            $("cpCount").max = Math.max(1, max);
            $("cpTimedLine").hidden = selectedMode !== "exam";
            $("cpMinutesField").hidden = selectedMode !== "exam" || !timed;
            $("cpMinutes").value = customMinutes || Math.max(1, Math.ceil(Math.max(1, count) * 1.2));
            $("cpBuildStart").disabled = !selected.size || available === 0;
            $("cpBuildStart").textContent = count ? `Start ${count}-question ${selectedMode}` : "Start " + selectedMode;
            $("cpBuilderHint").textContent = !selected.size ? "Choose at least one chapter or subchapter to begin."
                : !available ? "No questions match this pool. Try All questions, or save and answer some questions first."
                : selectedMode === "exam" && timed ? "The timer continues if you leave." : "";
            $("cpBuilderHint").hidden = !$("cpBuilderHint").textContent;
            $("cvBuilder").querySelectorAll("[data-count]").forEach((button) => {
                button.disabled = +button.dataset.count > max;
                button.classList.toggle("active", +button.dataset.count === count);
                button.setAttribute("aria-pressed", String(+button.dataset.count === count));
            });
        }

        function renderChapters() {
            const query = $("cvChapterSearch").value.trim().toLowerCase();
            const matchesChapter = (chapter) => `${chapter.number || ""} ${chapter.code || ""} ${chapter.name}`.toLowerCase().includes(query);
            const matchesTopic = (topic) => `${topic.number} ${topic.code} ${topic.name} ${topic.detail}`.toLowerCase().includes(query);
            const matching = chapters.filter((chapter) => matchesChapter(chapter) || leafNodes(chapter).some(matchesTopic));
            $("cvChapterList").innerHTML = matching.length ? matching.map((chapter) => {
                const stats = counts([chapter.id]);
                const leaves = matchesChapter(chapter) ? leafNodes(chapter) : leafNodes(chapter).filter(matchesTopic);
                return `<details class="cv-chapter${chapter.additional ? " cv-additional" : ""}" data-chapter-group="${chapter.id}"${query || chapterOpen.has(chapter.id) ? " open" : ""}><summary><span class="cv-chevron">${chevron}</span>${icon(chapter)}
                    <span class="cv-chapter-name"><b>${chapter.number ? chapter.number + ". " : ""}${esc(chapter.name)}</b><small>${chapter.additional ? "Kept outside the official topic counts" : leafNodes(chapter).length + " subchapters · " + chapter.code}${stats.attempted ? " · " + stats.attempted + " practised" : ""}</small></span><span class="cv-count">${chapter.count} Q</span></summary>
                    <div class="cv-chapter-body">
                    <div class="cv-chapter-progress"><div class="cv-progress-track"><span style="width:${chapter.count ? Math.min(100, stats.attempted / chapter.count * 100) : 0}%"></span></div><span>${stats.attempted} / ${chapter.count} practised</span></div>
                    <div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-blue" data-cp-action="practice-chapter" data-chapter="${chapter.id}"${chapter.count ? "" : " disabled"}>Practice ${chapter.additional ? "additional questions" : "chapter"}</button>
                    <button type="button" class="cv-btn cv-btn-ghost" data-cp-action="exam-chapter" data-chapter="${chapter.id}"${chapter.count ? "" : " disabled"}>Exam mode</button>
                    <button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="build-chapter" data-chapter="${chapter.id}"${chapter.count ? "" : " disabled"}>Build a shorter set</button>${window.CIVIL_NOTES && window.CIVIL_NOTES.hasChapter(chapter.id) ? `<button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cv-nav="notes" data-note-topic="${window.CIVIL_NOTES.chapterCodes(chapter.id)[0]}">Read chapter notes</button>` : ""}</div>
                    <div class="cv-subchapter-list">${leaves.map((topic) => {
                        const progress = counts([topic.id]);
                        return `<article class="cv-subchapter${topic.count ? "" : " cv-topic-empty"}" data-subchapter="${topic.id}"><div class="cv-subchapter-head"><div><h4>${esc(topicTitle(topic))}</h4>${topic.code ? `<span class="cv-topic-code">${topic.code}</span>` : ""}</div><span class="cv-count">${topic.count} Q</span></div>
                            <p class="cv-subchapter-detail">${esc(topic.detail)}</p><p class="cv-subchapter-progress">${topic.count ? `${progress.attempted} practised · ${progress.correct} last answered correctly` : "No matching questions in the current bank. This official syllabus topic is not yet covered."}</p>
                            <div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-blue cv-btn-sm" data-cp-action="practice-subchapter" data-topic="${topic.id}"${topic.count ? "" : " disabled"}>Practice</button><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="exam-subchapter" data-topic="${topic.id}"${topic.count ? "" : " disabled"}>Exam</button><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="build-subchapter" data-topic="${topic.id}"${topic.count ? "" : " disabled"}>Add to session</button>${window.CIVIL_NOTES && window.CIVIL_NOTES.hasTopic(topic.id) ? `<button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cv-nav="notes" data-note-topic="${topic.id}">Read notes</button>` : ""}</div></article>`;
                    }).join("")}</div></div></details>`;
            }).join("") : '<div class="cv-empty"><b>No matching syllabus topics</b><p>Try a chapter name, subchapter number, official code or syllabus keyword.</p></div>';
        }

        async function loadFor(config, callback) {
            suspend();
            const token = serial;
            screen = null;
            retryLoad = () => loadFor(config, callback);
            show("learning", config.origin || "chapters");
            replace($("cvLearning"), `<div class="cv-viewer-top"><button type="button" class="cv-btn cv-btn-ghost" data-cv-nav="${config.origin || "chapters"}">${uiIcon("arrow-left")} Back</button></div>
                <div class="cv-panel cv-loading" role="status"><h3>Preparing your question bank</h3><progress id="cpLoadProgress" value="0" max="${entries.length}"></progress><p id="cpLoadText">Loading…</p></div>`);
            try {
                const records = await bank.load((done, count) => {
                    if (token !== serial || !isOpen()) return;
                    if ($("cpLoadProgress")) $("cpLoadProgress").value = done;
                    if ($("cpLoadText")) $("cpLoadText").textContent = `${done} of ${count} question files ready`;
                });
                if (token !== serial || !isOpen()) return;
                retryLoad = null;
                callback(records);
            } catch (error) {
                if (token !== serial || !isOpen()) return;
                replace($("cvLearning"), `<div class="cv-panel cv-empty" role="alert"><b>Questions could not be loaded</b><p>${esc(error.message)}</p><div class="cv-head-actions"><button type="button" class="cv-btn" data-cp-action="retry-load">Retry loading</button><button type="button" class="cv-btn cv-btn-ghost" data-cv-nav="${config.origin || "chapters"}">Back</button></div></div>`);
            }
        }

        function resolveIds(records, ids) {
            const byId = new Map(records.map((item) => [questionKey(item), item]));
            const result = ids.map((id) => byId.get(id));
            if (result.some((item) => !item)) throw new Error("A question in this saved attempt is missing from the bank. The saved attempt has not been changed.");
            return result;
        }

        function openSavedLibrary(config) {
            loadFor(config, (records) => {
                const pool = config.ids ? resolveIds(records, config.ids)
                    : filterPool(records, config.scope || [], config.filter || "all", store.progress, store.bookmarks);
                screen = { mode: "library", records: pool, config, page: 0, query: "", filter: "all" };
                renderViewer();
            });
        }

        function startPractice(config) {
            const mode = config.mode === "exam" ? "exam" : "practice";
            const slot = draftKey(mode);
            const start = () => loadFor(config, (records) => {
                let pool = config.ids ? resolveIds(records, config.ids)
                    : filterPool(records, config.scope || [], config.filter || "all", store.progress, store.bookmarks);
                if (config.setKey) pool = pool.filter((item) => item.setKey === config.setKey).sort((a, b) => a.sourceNo - b.sourceNo);
                const chosen = config.count ? sample(pool, config.count) : pool;
                if (!chosen.length) {
                    screen = { mode: "library", records: [], config, page: 0, query: "", filter: "all" };
                    renderViewer();
                    return;
                }
                const startedAt = Date.now();
                const minutes = mode === "exam" ? config.minutes || 0 : 0;
                const run = { id: mode + "-" + startedAt + "-" + Math.random().toString(36).slice(2, 8), mode,
                    title: config.title, origin: config.origin || "practice", scope: config.scope || [],
                    ids: chosen.map(questionKey), answers: {}, flags: {}, page: 0, index: 0, startedAt,
                    durationMinutes: minutes, endsAt: minutes ? startedAt + minutes * 60000 : null };
                store[slot] = run;
                save();
                screen = { mode, records: chosen, config, run, page: 0, query: "", filter: "all", navPage: 0 };
                renderViewer(); startTimer();
            });
            if (store[slot]) confirm({ title: "Replace your current " + mode + "?", label: "Start new " + mode,
                html: `Only the unfinished ${mode} session will be replaced. ${mode === "practice" ? "Instant-feedback progress already recorded stays saved. " : ""}The other mode, completed results and model-exam progress are unaffected.`, action: start });
            else start();
        }

        function resume(mode = "exam") {
            const run = store[draftKey(mode)];
            if (!run) return;
            const actualMode = modeOf(run);
            const config = { title: run.title, origin: run.origin || "practice", scope: run.scope || [], ids: run.ids, mode: actualMode };
            loadFor(config, (records) => {
                screen = { mode: actualMode, records: resolveIds(records, run.ids), config, run, page: run.page || 0, query: "", filter: "all", navPage: Math.floor((run.index || 0) / 100) };
                if (actualMode === "exam" && run.endsAt && run.endsAt <= Date.now()) { submit(true); return; }
                renderViewer(); startTimer();
            });
        }

        function openHistory(id) {
            const run = store.history.find((item) => item.id === id);
            if (!run) return;
            const config = { title: run.title, origin: run.origin || "practice", scope: run.scope || [], ids: run.ids, mode: modeOf(run) };
            loadFor(config, (records) => {
                screen = { mode: "result", records: resolveIds(records, run.ids), config, run, page: 0, query: "", filter: "all" };
                renderViewer();
            });
        }

        function chooseCustom() {
            const countValue = $("cpCount").valueAsNumber;
            const minuteValue = $("cpMinutes").valueAsNumber;
            const error = !Number.isInteger(countValue) || countValue < 1 || countValue > 100
                ? "Enter a whole number of questions between 1 and 100."
                : selectedMode === "exam" && timed && (!Number.isInteger(minuteValue) || minuteValue < 1 || minuteValue > 720)
                    ? "Enter a time limit between 1 and 720 minutes." : "";
            $("cpBuilderError").textContent = error;
            $("cpBuilderError").hidden = !error;
            if (error || !selected.size || !availableCount()) return;
            startPractice({ title: selectedTitle(),
                origin: "practice", scope: [...selected], filter: poolFilter, mode: selectedMode,
                count: Math.min(countValue, availableCount()), minutes: selectedMode === "exam" && timed ? minuteValue : 0 });
        }

        function submit(auto = false) {
            if (!screen || !["practice", "exam"].includes(screen.mode) || store[draftKey(screen.mode)] !== screen.run) return;
            stopTimer();
            const run = screen.run;
            const result = grade(screen.records, run.answers);
            if (screen.mode === "exam") screen.records.forEach((item) => {
                const key = questionKey(item), answer = run.answers[key];
                if (!item.q.options.some((option) => option.key === answer)) return;
                const old = store.progress[key];
                store.progress[key] = { answer, correct: answer === item.q.answer, chapterId: item.chapterId, subchapterId: item.subchapterId,
                    attempts: (old && old.attempts || 0) + 1, updatedAt: Date.now(), mode: "exam" };
            });
            run.finishedAt = Date.now(); run.autoSubmitted = auto; run.endsAt = null; run.summary = result;
            store.history = [run, ...store.history.filter((item) => item.id !== run.id)].slice(0, HISTORY_LIMIT);
            store[draftKey(screen.mode)] = null;
            screen.mode = "result"; screen.page = 0; screen.filter = "all"; screen.query = "";
            save(); deps.closeModal(); renderViewer();
            window.scrollTo({ top: 0, behavior: "auto" });
        }

        function askSubmit() {
            if (!screen || !["practice", "exam"].includes(screen.mode)) return;
            if (expired()) return;
            if ($("fpMapDialog") && $("fpMapDialog").open) $("fpMapDialog").close();
            const result = grade(screen.records, screen.run.answers);
            const instant = screen.mode === "practice";
            confirm({ title: instant ? "Finish this practice round?" : "Submit exam?", label: instant ? "Finish practice" : "Submit exam", html:
                `You have answered <b>${result.answered}</b> of <b>${result.total}</b> questions. ${instant ? "Your first-choice feedback is already saved. Finish to view the session summary; unanswered questions stay skipped." : "Marks and solutions will appear after submission. Unanswered and incorrect answers score zero; there is no negative marking."}`,
                action: () => submit() });
        }

        function expired() {
            if (screen && screen.mode === "exam" && screen.run.endsAt && screen.run.endsAt <= Date.now()) { submit(true); return true; }
            return false;
        }

        function renderTimer() {
            if (!screen || screen.mode !== "exam" || !$("cpTimer")) return;
            const end = screen.run.endsAt;
            if (!end) { $("cpTimer").textContent = "Untimed"; return; }
            const seconds = Math.max(0, Math.ceil((end - Date.now()) / 1000));
            const hours = Math.floor(seconds / 3600);
            $("cpTimer").textContent = (hours ? hours + ":" : "") + String(Math.floor(seconds % 3600 / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
            $("cpTimer").className = seconds <= 120 ? "danger" : seconds <= 300 ? "warn" : "";
        }

        function startTimer() {
            stopTimer(); renderTimer();
            if (!screen || screen.mode !== "exam" || !screen.run.endsAt) return;
            timer = setInterval(() => { if (!expired()) renderTimer(); }, 1000);
        }

        function recordStatus(item) {
            const answer = screen.run && screen.run.answers[questionKey(item)];
            return !item.q.options.some((option) => option.key === answer) ? "skipped" : answer === item.q.answer ? "correct" : "wrong";
        }

        function filteredRecords() {
            return screen.records.map((item, i) => ({ ...item, no: i + 1 })).filter((item) => {
                const key = questionKey(item);
                if (screen.config.filter === "saved" && screen.mode === "library" && !store.bookmarks[key]) return false;
                if (screen.query && !plainText(item.q.text + " " + item.ch.name + " " + (item.subchapterNumber || "") + " " + (item.subchapterName || "")).includes(screen.query.toLowerCase())) return false;
                if (screen.filter === "saved") return !!store.bookmarks[key];
                if (screen.filter === "flagged") return !!(screen.run && screen.run.flags[key]);
                if (screen.filter !== "all") return recordStatus(item) === screen.filter;
                return true;
            });
        }

        function bookmarkButton(item) {
            const key = questionKey(item), on = !!store.bookmarks[key];
            return `<button type="button" class="cv-save-button${on ? " on" : ""}" data-cp-action="bookmark" data-id="${esc(key)}" aria-pressed="${on}" aria-label="${on ? "Unsave" : "Save"} question">${bookmarkIcon}<span>${on ? "Saved" : "Save"}</span></button>`;
        }

        function toggleBookmark(item) {
            const key = questionKey(item);
            if (store.bookmarks[key]) delete store.bookmarks[key];
            else {
                const topic = taxonomy.assignments.get(key);
                store.bookmarks[key] = { chapterId: topic ? topic.chapterId : item.chapterId || slug(item.ch.name),
                    subchapterId: topic ? topic.id : item.subchapterId, at: Date.now() };
            }
            save(); refreshSavedCount();
            $("civilSection").querySelectorAll('[data-cp-action="bookmark"]').forEach((button) => {
                if (button.dataset.id !== key) return;
                const on = !!store.bookmarks[key];
                button.classList.toggle("on", on); button.setAttribute("aria-pressed", String(on));
                button.setAttribute("aria-label", (on ? "Unsave" : "Save") + " question");
                button.querySelector("span").textContent = on ? "Saved" : "Save";
            });
            if (screen && screen.mode === "library" && screen.config.filter === "saved") renderViewer();
            if (screen && screen.mode === "practice" && $("civilSection").dataset.sessionMode === "practice") renderFocus();
        }

        function questionHtml(item) {
            const { q } = item, key = questionKey(item);
            const practice = screen.mode === "exam", result = screen.mode === "result";
            const reveal = result, chosen = screen.run && screen.run.answers[key];
            const flagged = !!(screen.run && screen.run.flags[key]);
            const status = result ? recordStatus(item) : "";
            return `<article class="cv-q${flagged ? " flagged" : ""}" data-cp-q="${esc(key)}">
                <div class="cv-q-head"><span class="cv-q-num">${item.no}.</span><div class="cv-q-body">${q.text}</div></div>
                <div class="cv-q-meta"><span class="cv-q-source">${esc(item.subchapterName ? (item.subchapterNumber ? item.subchapterNumber + " " : "Additional · ") + item.subchapterName : item.ch.name)} &middot; Model ${item.setNo}, Q${item.sourceNo}${result ? ` &middot; <b class="cv-q-status ${status}">${status === "skipped" ? "Not answered" : status === "correct" ? "Correct" : "Incorrect"}</b>` : ""}</span>
                <div class="cv-q-controls">${practice ? `<button type="button" class="cv-flag${flagged ? " on" : ""}" data-cp-action="flag" data-id="${esc(key)}" aria-pressed="${flagged}" aria-label="Flag question ${item.no} for review">${flagIcon}</button>` : ""}${bookmarkButton(item)}</div></div>
                <ul class="cv-opts">${q.options.map((option) => {
                    const selectedOption = option.key === chosen, correct = reveal && option.key === q.answer;
                    const wrong = result && selectedOption && !correct;
                    const content = `<span class="cv-ltr">${option.key})</span><span class="cv-option-text">${option.text}</span>${correct ? '<span class="cv-answer-tag">Correct answer</span>' : wrong ? '<span class="cv-answer-tag">Your answer</span>' : ""}`;
                    return `<li class="cv-opt cv-option-row${correct ? " correct" : wrong ? " wrong" : selectedOption && practice ? " selected" : ""}">
                        ${practice ? `<label class="cv-option-label"><input type="radio" name="cp-${esc(q.id)}" data-cp-pick="${esc(key)}" value="${option.key}"${selectedOption ? " checked" : ""} />${content}</label>` : `<div class="cv-option-label">${content}</div>`}</li>`;
                }).join("")}</ul>
                ${practice ? `<button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="clear-answer" data-id="${esc(key)}"${chosen == null ? " hidden" : ""}>Clear answer</button>` : ""}
                ${reveal && q.explanation ? `<div class="cv-solution"><span class="cv-sol-tag">Solution</span>${q.explanation}</div>` : ""}</article>`;
        }

        function resultHtml() {
            const result = grade(screen.records, screen.run.answers);
            const instant = modeOf(screen.run) === "practice";
            return `<div class="cv-res-head"><span class="cv-eyebrow">${instant ? "Practice summary · first choices" : "Exam result"}</span><h2>${result.score} / ${result.total} marks &middot; ${result.pct}%</h2>
                <p>${screen.run.autoSubmitted ? "Time expired — this exam was submitted automatically. " : ""}${result.accuracy}% accuracy on attempted questions. ${instant ? "Each answer was checked immediately; this is not an exam score." : "No negative marking."}</p></div>
                <div class="cv-res-stats">${[["gray", result.answered, "Attempted"], ["green", result.correct, "Correct"], ["red", result.wrong, "Incorrect"], ["gold", result.skipped, "Skipped"]].map(([color, value, label]) => `<div class="cv-res-stat ${color}"><div class="cv-res-badge">${value}</div><div class="cv-res-label">${label}</div></div>`).join("")}</div>
                <div class="cv-panel"><div class="cv-sec-head"><h3>Chapter &amp; subchapter performance</h3><div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="retry-wrong" ${result.wrong ? "" : "disabled"}>Practise incorrect (${result.wrong})</button><button type="button" class="cv-btn cv-btn-blue cv-btn-sm" data-cp-action="practice-again">${instant ? "Practice again" : "Retake exam"}</button></div></div>
                <div class="cv-result-chapters">${result.chapters.map((chapter) => `<details class="cv-result-chapter" open><summary><b>${esc(chapter.name)}</b><span>${chapter.correct} / ${chapter.total} marks</span></summary>
                    ${(chapter.subchapters.length ? chapter.subchapters : [chapter]).map((topic) => `<div class="cv-subchapter-result"><span class="cv-subchapter-result-name"><b>${esc((topic.number ? topic.number + " " : "") + topic.name)}</b><small>${esc(topic.id.startsWith("additional-") ? "Additional bank questions" : topic.id)}</small></span><span class="cv-result-counts"><span>Correct ${topic.correct}</span><span>Incorrect ${topic.wrong}</span><span>Skipped ${topic.total - topic.answered}</span></span><b>${topic.correct}/${topic.total}</b></div>`).join("")}</details>`).join("")}</div></div>`;
        }

        function focusNavigator(mobile = false) {
            const run = screen.run, result = grade(screen.records, run.answers);
            const list = screen.records.map((item, index) => ({ item, index })).filter(({ item }) => {
                const key = questionKey(item);
                if (screen.filter === "wrong") return run.answers[key] != null && run.answers[key] !== item.q.answer;
                if (screen.filter === "unanswered") return run.answers[key] == null;
                if (screen.filter === "flagged") return !!run.flags[key];
                return true;
            });
            const pages = Math.max(1, Math.ceil(list.length / 100));
            screen.navPage = Math.max(0, Math.min(screen.navPage || 0, pages - 1));
            const start = screen.navPage * 100;
            return `<div class="fp-nav-heading"><div><span class="fp-eyebrow">YOUR PROGRESS</span><h3>This practice round</h3></div>${mobile ? `<button type="button" class="fp-icon-button" data-cp-action="focus-close-map" aria-label="Close question navigator">${uiIcon("close")}</button>` : ""}</div>
                <div class="fp-stats"><div><b>${result.correct}</b><span>Correct</span></div><div><b>${result.wrong}</b><span>Incorrect</span></div><div><b>${result.skipped}</b><span>Remaining</span></div></div>
                <div class="fp-progress"><div><span>${result.answered} of ${result.total} answered</span><b>${Math.round(result.answered / result.total * 100)}%</b></div><div><span style="width:${result.answered / result.total * 100}%"></span></div></div>
                <label class="fp-map-filter">Question map<select data-fp-filter><option value="all"${screen.filter === "all" ? " selected" : ""}>All questions</option><option value="wrong"${screen.filter === "wrong" ? " selected" : ""}>Incorrect first choices</option><option value="unanswered"${screen.filter === "unanswered" ? " selected" : ""}>Unanswered</option><option value="flagged"${screen.filter === "flagged" ? " selected" : ""}>Flagged</option></select></label>
                <div class="fp-map" aria-label="Practice question numbers">${list.slice(start, start + 100).map(({ item, index }) => {
                    const key = questionKey(item), answer = run.answers[key];
                    const status = answer == null ? "unanswered" : answer === item.q.answer ? "correct" : "wrong";
                    const flag = !!run.flags[key];
                    return `<button type="button" class="fp-number ${status}${index === run.index ? " current" : ""}${flag ? " flagged" : ""}" data-cp-action="focus-go" data-index="${index}" aria-label="Question ${index + 1}, ${status}${flag ? ", flagged" : ""}"${index === run.index ? ' aria-current="step"' : ""}>${index + 1}${flag || answer != null ? `<small aria-hidden="true">${uiIcon(flag ? "flag" : status === "correct" ? "check" : "close")}</small>` : ""}</button>`;
                }).join("") || '<p class="fp-empty">No questions in this filter.</p>'}</div>
                ${pages > 1 ? `<div class="fp-map-paging"><button type="button" class="fp-text-button" data-cp-action="focus-map-page" data-page="${screen.navPage - 1}"${screen.navPage === 0 ? " disabled" : ""}>${uiIcon("arrow-left")} Earlier</button><span>${start + 1}–${Math.min(start + 100, list.length)}</span><button type="button" class="fp-text-button" data-cp-action="focus-map-page" data-page="${screen.navPage + 1}"${screen.navPage === pages - 1 ? " disabled" : ""}>Later ${uiIcon("arrow-right")}</button></div>` : ""}
                <div class="fp-legend"><span><i class="correct" aria-hidden="true"></i>Correct</span><span><i class="wrong" aria-hidden="true"></i>Incorrect</span><span><i class="current" aria-hidden="true"></i>Current</span><span>${flagIcon} Flagged</span></div>
                <button type="button" class="fp-button fp-primary" data-cp-action="submit">Finish practice ${uiIcon("arrow-right")}</button><p class="fp-nav-note">First choices are recorded once.<br />Retry questions in a fresh round.</p>`;
        }

        function renderFocus() {
            if (!screen || screen.mode !== "practice" || !screen.records.length) return;
            const run = screen.run;
            run.index = Math.max(0, Math.min(Number.isInteger(run.index) ? run.index : 0, screen.records.length - 1));
            const item = screen.records[run.index], key = questionKey(item), q = item.q;
            const chosen = run.answers[key], answered = chosen != null, correct = answered && chosen === q.answer;
            const result = grade(screen.records, run.answers), flagged = !!run.flags[key];
            const mapWasOpen = $("fpMapDialog") && $("fpMapDialog").open;
            if (mapWasOpen) $("fpMapDialog").close();
            $("cvLearning").dataset.learningView = "practice";
            deps.setSessionMode("practice");
            replace($("cvLearning"), `<div class="fp-app"><header class="fp-header"><div class="fp-header-title"><button type="button" class="fp-icon-button" data-cp-action="leave-session" aria-label="Pause practice and return to workspace">${uiIcon("arrow-left")}</button><div><span class="fp-eyebrow">PRACTICE MODE · FOCUS PRO</span><b>${esc(screen.config.title)}</b></div></div>
                <div class="fp-header-meta"><span class="fp-untimed">Your pace. No timer.</span><button type="button" class="fp-button fp-map-toggle" data-cp-action="focus-map" aria-haspopup="dialog">Questions <span>${result.answered}/${result.total}</span></button></div></header>
                <div class="fp-top-progress" role="progressbar" aria-label="Practice answered" aria-valuemin="0" aria-valuemax="${result.total}" aria-valuenow="${result.answered}"><span style="width:${result.answered / result.total * 100}%"></span></div>
                <div class="fp-workspace"><section class="fp-question-area"><div class="fp-context"><span>${esc(item.chapterName || item.ch.name)}</span><span>${esc(item.subchapterNumber || "")}</span></div>
                    <article class="fp-card" id="fpQuestion" tabindex="-1" data-fp-question="${esc(key)}"><header class="fp-card-head"><div class="fp-counter"><small>QUESTION</small><b>${String(run.index + 1).padStart(2, "0")}</b><span>/ ${screen.records.length}</span></div><span class="fp-instant-tag">Instant feedback</span></header>
                        <h2 class="fp-question-text" id="fpQuestionText">${q.text}</h2>
                        <div class="fp-options" role="group" aria-labelledby="fpQuestionText">${q.options.map((option) => {
                            const isCorrect = answered && option.key === q.answer, isWrong = answered && option.key === chosen && !isCorrect;
                            return `<button type="button" class="fp-choice${isCorrect ? " correct" : ""}${isWrong ? " wrong" : ""}${option.key === chosen ? " chosen" : ""}" data-cp-action="feedback-answer" data-id="${esc(key)}" data-answer="${option.key}"${answered ? " disabled" : ""}><span class="fp-letter">${option.key.toUpperCase()}</span><span class="fp-choice-text">${option.text}</span>${isCorrect || isWrong ? `<span class="fp-choice-label">${uiIcon(isCorrect ? "check" : "close")}${isCorrect ? "Correct answer" : "Your answer"}</span>` : '<span class="fp-choice-circle" aria-hidden="true"></span>'}</button>`;
                        }).join("")}</div>
                        ${answered ? `<div class="fp-feedback ${correct ? "correct" : "wrong"}" id="fpFeedback" role="status" tabindex="-1"><b>${correct ? "Correct. Well done." : "Not quite — here’s the answer."}</b><p>The correct option is <strong>${q.answer.toUpperCase()}</strong>. Your first choice has been recorded.</p><div class="fp-explanation"><span>WHY THIS ANSWER</span><div>${q.explanation || "No explanation is available for this question."}</div></div></div>` : '<p class="fp-answer-prompt">Choose an option to reveal the correct answer and explanation.</p>'}
                        <footer class="fp-card-foot"><span>${esc(item.subchapterName || item.ch.name)} · Model ${item.setNo}, Q${item.sourceNo}</span>${bookmarkButton(item)}</footer>
                    </article><p class="fp-help">${answered ? "This answer stays locked for the round. Retry it after finishing." : "No rush. Take your time to work it through."}</p>
                </section><aside class="fp-sidebar">${focusNavigator()}</aside></div>
                <footer class="fp-footer"><div><button type="button" class="fp-button" data-cp-action="focus-go" data-index="${run.index - 1}"${run.index === 0 ? " disabled" : ""}>${uiIcon("arrow-left")} Previous</button><button type="button" class="fp-button fp-flag${flagged ? " on" : ""}" data-cp-action="flag" data-id="${esc(key)}" aria-pressed="${flagged}">${flagIcon}<span>${flagged ? "Flagged" : "Flag for review"}</span></button>${run.index === screen.records.length - 1 ? `<button type="button" class="fp-button fp-primary" data-cp-action="submit">Finish practice ${uiIcon("arrow-right")}</button>` : `<button type="button" class="fp-button fp-primary" data-cp-action="focus-go" data-index="${run.index + 1}">Next question ${uiIcon("arrow-right")}</button>`}</div></footer>
                <dialog class="fp-map-dialog" id="fpMapDialog" aria-label="Practice question navigator">${focusNavigator(true)}</dialog></div>`);
            if (mapWasOpen) $("fpMapDialog").showModal();
        }

        function focusGo(index) {
            if (!screen || screen.mode !== "practice" || !Number.isInteger(index)) return;
            if ($("fpMapDialog") && $("fpMapDialog").open) $("fpMapDialog").close();
            screen.run.index = Math.max(0, Math.min(index, screen.records.length - 1));
            screen.navPage = Math.floor(screen.run.index / 100);
            save(); renderFocus();
            $("fpQuestion").focus({ preventScroll: true });
            window.scrollTo({ top: 0, behavior: "auto" });
        }

        function renderViewer() {
            if (!screen) return;
            $("cvLearning").dataset.learningView = screen.mode;
            deps.setSessionMode(["practice", "exam"].includes(screen.mode) ? screen.mode : null);
            if (screen.mode === "practice") { renderFocus(); return; }
            const { config, mode } = screen;
            const filtered = filteredRecords();
            const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
            screen.page = Math.max(0, Math.min(screen.page, pages - 1));
            const start = screen.page * PAGE_SIZE;
            const slice = filtered.slice(start, start + PAGE_SIZE);
            const result = mode === "result" ? grade(screen.records, screen.run.answers) : null;
            const practice = mode === "exam";
            const pager = (bottom) => `<div class="cv-pager${bottom ? " cv-pager-bottom" : ""}"><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="page" data-page="${screen.page - 1}"${screen.page === 0 ? " disabled" : ""}>Previous</button>
                <span class="cv-pager-info">${bottom ? `Page ${screen.page + 1} of ${pages}` : `Questions <b>${filtered.length ? start + 1 : 0}–${Math.min(start + PAGE_SIZE, filtered.length)}</b> of ${filtered.length}`}</span>
                <button type="button" class="cv-btn cv-btn-blue cv-btn-sm" data-cp-action="page" data-page="${screen.page + 1}"${screen.page === pages - 1 ? " disabled" : ""}>Next</button></div>`;
            const filterButtons = result ? `<div class="cv-review-filters">${[["all", "All", result.total], ["correct", "Correct", result.correct], ["wrong", "Incorrect", result.wrong], ["skipped", "Skipped", result.skipped], ["flagged", "Flagged", Object.keys(screen.run.flags).length]].map(([filter, label, count]) => `<button type="button" class="cv-fpill${screen.filter === filter ? " active" : ""}" data-cp-action="filter" data-filter="${filter}" aria-pressed="${screen.filter === filter}">${label} (${count})</button>`).join("")}</div>` : "";
            const libraryActions = mode === "library" && filtered.length ? `<div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-blue" data-cp-action="practice-saved">Practise saved questions</button><button type="button" class="cv-btn cv-btn-ghost" data-cp-action="exam-saved">Exam on saved questions</button></div>` : "";
            const topic = config.scope && config.scope.length === 1 ? topics.get(config.scope[0]) : null;
            const parent = topic && chapterMap.get(topic.chapterId);
            replace($("cvLearning"), `<div class="cv-viewer-top"><button type="button" class="cv-btn cv-btn-ghost" ${practice ? 'data-cp-action="leave-session"' : `data-cv-nav="${config.origin === "saved" ? "dash" : config.origin || "chapters"}"`}>${uiIcon("arrow-left")} ${practice ? "Leave exam" : config.origin === "practice" ? "Session builder" : config.origin === "notes" ? "Chapter notes" : config.origin === "saved" ? "Overview" : "Question bank"}</button>${libraryActions}</div>
                ${practice ? "" : `<div class="cv-breadcrumb">Civil Engineering ${chevron} ${parent ? esc(parent.name) + " " + chevron + " " : ""}${esc(config.title)}</div><div class="cv-page-intro"><h2>${esc(config.title)}</h2></div>`}
                ${topic && !practice ? `<p class="cv-notice cv-notice-info"><b>${esc(topic.code || "Additional bank questions")}</b> &middot; ${esc(topic.detail)}</p>` : ""}
                ${result ? resultHtml() : ""}
                <div class="cv-exam">${practice ? `<div class="cv-infobox"><div><div class="cv-ei-name">${esc(deps.candidate)} · ${esc(config.title)} · Exam</div><div class="cv-ei-timer">${screen.run.endsAt ? "Time remaining" : "Your pace"}: <b id="cpTimer"></b></div><div class="cv-ei-answered" id="cpAnswered"></div><button type="button" class="cv-ei-link" data-cp-action="show-unanswered">View unanswered questions</button><p id="cpUnanswered" hidden></p></div><span class="cv-ei-photo" aria-hidden="true">${esc(deps.candidate[0])}</span></div>` : ""}
                ${!practice ? `<div class="cv-viewer-tools"><label class="cv-search"><span>Search within these questions</span><input type="search" id="cpQuestionSearch" value="${esc(screen.query)}" placeholder="Type a keyword and press Enter" /></label><button type="button" class="cv-btn cv-btn-ghost" data-cp-action="search">Search</button></div>` : ""}
                ${filterButtons}${pager(false)}<div class="cv-pager-nums">${Array.from({ length: pages }, (_, p) => `<button type="button" class="cv-pager-num${p === screen.page ? " active" : ""}" data-cp-action="page" data-page="${p}" ${p === screen.page ? 'aria-current="page"' : ""}>${p + 1}</button>`).join("")}</div>
                <div id="cpQuestionList">${slice.length ? slice.map((item) => mode === "library" ? `<article class="cs-saved-question" data-saved-q="${esc(questionKey(item))}"><div><small>${esc(item.subchapterName || item.ch.name)} · Model ${item.setNo}</small><h3>${item.q.text}</h3></div>${bookmarkButton(item)}<div class="cv-head-actions"><button type="button" class="cv-btn cv-btn-blue cv-btn-sm" data-cp-action="practice-single" data-id="${esc(questionKey(item))}">Practice</button><button type="button" class="cv-btn cv-btn-ghost cv-btn-sm" data-cp-action="exam-single" data-id="${esc(questionKey(item))}">Exam</button></div></article>` : questionHtml(item)).join("") : `<div class="cv-empty"><b>${config.filter === "saved" && !screen.records.length ? "No saved questions yet" : "No questions match"}</b><p>${config.filter === "saved" ? "Use Save beside any question to keep it here for later." : "Choose another filter, clear your search or return to the chapter list."}</p></div>`}</div>
                ${pager(true)}${practice ? '<div class="cv-exam-actions"><button type="button" class="cv-btn cv-btn-blue" data-cp-action="submit">Submit exam</button><button type="button" class="cv-btn cv-btn-ghost" data-cp-action="discard" data-mode="exam">Discard exam</button><span class="cv-muted" id="cpAnswerCount"></span></div>' : ""}</div>`);
            if (practice) refreshPractice();
        }

        function refreshPractice() {
            if (!screen || screen.mode !== "exam") return;
            const result = grade(screen.records, screen.run.answers);
            if ($("cpAnswered")) $("cpAnswered").textContent = `You have answered ${result.answered} out of ${result.total}.`;
            if ($("cpAnswerCount")) $("cpAnswerCount").textContent = `Answered ${result.answered} / ${result.total}`;
            $("cvLearning").querySelectorAll('.cv-pager-num[data-page]').forEach((button) => {
                const chunk = screen.records.slice(+button.dataset.page * PAGE_SIZE, (+button.dataset.page + 1) * PAGE_SIZE);
                button.classList.toggle("done", chunk.length > 0 && chunk.every((item) => screen.run.answers[questionKey(item)] != null));
                button.classList.toggle("flagged", chunk.some((item) => screen.run.flags[questionKey(item)]));
            });
            if ($("cpUnanswered") && !$("cpUnanswered").hidden) showUnanswered(false);
            renderTimer();
        }

        function pick(key, answer) {
            if (!screen || !["practice", "exam"].includes(screen.mode) || expired()) return;
            const item = screen.records.find((record) => questionKey(record) === key);
            if (!item || (answer != null && !item.q.options.some((option) => option.key === answer))) return;
            if (screen.mode === "practice") {
                if (!recordFeedback(store, screen.run, item, answer)) return;
                save(); renderFocus();
                if ($("fpFeedback")) $("fpFeedback").focus({ preventScroll: true });
                return;
            }
            if (answer == null) delete screen.run.answers[key]; else screen.run.answers[key] = answer;
            save();
            $("cvLearning").querySelectorAll("[data-cp-pick]").forEach((input) => {
                if (input.dataset.cpPick !== key) return;
                input.checked = input.value === answer;
                input.closest(".cv-opt").classList.toggle("selected", input.checked);
            });
            $("cvLearning").querySelectorAll('[data-cp-action="clear-answer"]').forEach((button) => { if (button.dataset.id === key) button.hidden = answer == null; });
            refreshPractice();
        }

        function showUnanswered(toggle = true) {
            const node = $("cpUnanswered");
            if (!node || !screen || screen.mode !== "exam") return;
            if (toggle) node.hidden = !node.hidden;
            const missing = screen.records.map((item, i) => screen.run.answers[questionKey(item)] == null ? i + 1 : null).filter(Boolean);
            node.textContent = missing.length ? "Unanswered: " + missing.join(", ") : "All questions answered.";
            $("cvLearning").querySelector('[data-cp-action="show-unanswered"]').textContent = (node.hidden ? "View" : "Hide") + " unanswered questions";
        }

        function discard(mode = screen && screen.mode || "exam") {
            const slot = draftKey(mode);
            if (!store[slot]) return;
            confirm({ title: "Discard this " + mode + "?", label: "Discard " + mode, html: `Only this unfinished ${mode} session will be removed. Instant feedback already recorded, the other mode, saved questions and model exams stay intact.`, action: () => {
                store[slot] = null; save(); suspend(); deps.navigate("practice");
            } });
        }

        function leaveSession() {
            if (!screen || !["practice", "exam"].includes(screen.mode)) return;
            const instant = screen.mode === "practice";
            confirm({ title: instant ? "Pause practice?" : "Leave this exam?", label: instant ? "Save & leave" : "Leave exam",
                html: instant ? "Your answers and feedback stay saved. Resume from this question whenever you are ready."
                    : "Your answers stay saved. " + (screen.run.endsAt ? "The exam timer continues while you are away." : "You can resume this untimed exam later."),
                action: () => deps.navigate(screen.config.origin === "saved" ? "dash" : screen.config.origin || "practice") });
        }

        function handleAction(button) {
            const action = button.dataset.cpAction;
            const id = button.dataset.id, chapterId = button.dataset.chapter, topicId = button.dataset.topic;
            if (action === "select-all" || action === "clear-selection") {
                selected = new Set(action === "select-all" ? chapters.flatMap((chapter) => leafNodes(chapter).filter((topic) => topic.count > 0).map((topic) => topic.id)) : []);
                updateBuilder();
            } else if (action === "count") {
                desiredCount = +button.dataset.count; $("cpCount").value = desiredCount; updateBuilder();
            } else if (action === "start-custom") chooseCustom();
            else if (action === "resume") resume(button.dataset.mode || "exam");
            else if (action === "discard") discard(button.dataset.mode || screen && screen.mode || "exam");
            else if (action === "history") openHistory(id);
            else if (action === "retry-load" && retryLoad) retryLoad();
            else if (action === "practice-all") startPractice({ title: "All Civil Engineering questions", origin: "chapters", scope: [], mode: "practice" });
            else if (action === "exam-chapter" && chapterMap.has(chapterId)) startPractice({ title: chapterMap.get(chapterId).name, origin: "chapters", scope: [chapterId], mode: "exam" });
            else if (action === "practice-chapter" && chapterMap.has(chapterId)) startPractice({ title: chapterMap.get(chapterId).name, origin: "chapters", scope: [chapterId], mode: "practice" });
            else if (action === "build-chapter" && chapterMap.has(chapterId)) { selected.clear(); selectChapter(chapterId, true); builderOpen.add(chapterId); poolFilter = "all"; deps.navigate("practice"); }
            else if (action === "exam-subchapter" && topics.has(topicId)) startPractice({ title: topicTitle(topics.get(topicId)), origin: "chapters", scope: [topicId], mode: "exam" });
            else if (action === "practice-subchapter" && topics.has(topicId)) startPractice({ title: topicTitle(topics.get(topicId)), origin: "chapters", scope: [topicId], mode: "practice" });
            else if (action === "build-subchapter" && topics.has(topicId)) { selected.add(topicId); builderOpen.add(topics.get(topicId).chapterId); poolFilter = "all"; deps.navigate("practice"); }
            else if (action === "mistakes") { selected = new Set([...topics.values()].filter((topic) => topic.count > 0).map((topic) => topic.id)); selectedMode = "practice"; poolFilter = "wrong"; deps.navigate("practice"); }
            else if (!screen) return;
            else if (action === "leave-session") leaveSession();
            else if (action === "feedback-answer") pick(id, button.dataset.answer);
            else if (action === "focus-go") focusGo(+button.dataset.index);
            else if (action === "focus-map") $("fpMapDialog").showModal();
            else if (action === "focus-close-map") $("fpMapDialog").close();
            else if (action === "focus-map-page") { screen.navPage = +button.dataset.page; renderFocus(); }
            else if (action === "practice-saved" || action === "exam-saved") {
                const ids = filteredRecords().map(questionKey);
                if (ids.length) startPractice({ title: "Saved questions", origin: "saved", ids, mode: action === "practice-saved" ? "practice" : "exam" });
            } else if (action === "practice-single" || action === "exam-single") {
                if (screen.records.some((item) => questionKey(item) === id)) startPractice({ title: "Saved question", origin: "saved", ids: [id], mode: action === "practice-single" ? "practice" : "exam" });
            }
            else if (action === "page") {
                if (expired()) return;
                screen.page = +button.dataset.page;
                if (screen.mode === "exam") { screen.run.page = screen.page; save(); }
                renderViewer(); window.scrollTo({ top: 0, behavior: "auto" });
            } else if (action === "search") {
                screen.query = $("cpQuestionSearch").value.trim(); screen.page = 0; renderViewer();
            } else if (action === "filter") { screen.filter = button.dataset.filter; screen.page = 0; renderViewer(); }
            else if (action === "show-unanswered") showUnanswered();
            else if (action === "submit") askSubmit();
            else if (action === "clear-answer") pick(id, null);
            else if (action === "bookmark") {
                const item = screen.records.find((record) => questionKey(record) === id);
                if (item) toggleBookmark(item);
            } else if (action === "flag" && ["practice", "exam"].includes(screen.mode)) {
                if (expired()) return;
                if (screen.run.flags[id]) delete screen.run.flags[id]; else screen.run.flags[id] = true;
                save();
                if (screen.mode === "practice") { renderFocus(); return; }
                button.classList.toggle("on", !!screen.run.flags[id]);
                button.setAttribute("aria-pressed", String(!!screen.run.flags[id]));
                button.closest(".cv-q").classList.toggle("flagged", !!screen.run.flags[id]);
                refreshPractice();
            } else if (action === "practice-again" || action === "retry-wrong") {
                const ids = screen.records.filter((item) => action === "practice-again" || recordStatus(item) === "wrong").map(questionKey);
                if (ids.length) startPractice({ ...screen.config, ids, count: null, mode: action === "retry-wrong" ? "practice" : modeOf(screen.run), minutes: action === "practice-again" ? screen.run.durationMinutes || 0 : 0, title: action === "retry-wrong" ? "Incorrect questions · Retry" : screen.config.title });
            }
        }

        function change(event) {
            const node = event.target;
            if (node.matches("[data-cp-chapter]")) {
                selectChapter(node.dataset.cpChapter, node.checked); updateBuilder();
            } else if (node.matches("[data-cp-subchapter]")) {
                if (node.checked) selected.add(node.dataset.cpSubchapter); else selected.delete(node.dataset.cpSubchapter);
                updateBuilder();
            } else if (node.id === "cpPool") { poolFilter = node.value; updateBuilder(); }
            else if (node.name === "cpMode") { selectedMode = node.value === "exam" ? "exam" : "practice"; updateBuilder(); }
            else if (node.matches("[data-fp-filter]") && screen && screen.mode === "practice") { screen.filter = node.value; screen.navPage = 0; renderFocus(); }
            else if (node.id === "cpTimed") { timed = node.checked; updateBuilder(); }
            else if (node.id === "cpCount") { desiredCount = Number.isFinite(node.valueAsNumber) ? node.valueAsNumber : 20; updateBuilder(); }
            else if (node.id === "cpMinutes") customMinutes = node.valueAsNumber;
            else if (node.matches("[data-cp-pick]")) pick(node.dataset.cpPick, node.value);
        }

        $("civilSection").addEventListener("change", change);
        $("civilSection").addEventListener("toggle", (event) => {
            const node = event.target;
            if (!node.isConnected) return;
            const key = node.dataset.builderGroup || node.dataset.chapterGroup;
            if (!key) return;
            const open = node.dataset.builderGroup ? builderOpen : chapterOpen;
            if (node.open) open.add(key); else open.delete(key);
        }, true);
        $("civilSection").addEventListener("click", (event) => {
            const button = event.target.closest("[data-cp-action]");
            if (button && !button.disabled && isOpen()) handleAction(button);
        });
        $("cvChapterSearch").addEventListener("input", renderChapters);
        $("cvLearning").addEventListener("keydown", (event) => {
            if (screen && screen.mode === "practice" && $("civilSection").dataset.sessionMode === "practice" && $("cvModalBack").hidden
                && (!$("fpMapDialog") || !$("fpMapDialog").open) && !event.ctrlKey && !event.altKey && !event.metaKey
                && !event.target.closest('input,select,textarea,[contenteditable="true"]')) {
                const key = event.key.toLowerCase();
                if (["a", "b", "c", "d"].includes(key)) { event.preventDefault(); pick(questionKey(screen.records[screen.run.index]), key); }
                else if (event.key === "ArrowRight") { event.preventDefault(); focusGo(screen.run.index + 1); }
                else if (event.key === "ArrowLeft") { event.preventDefault(); focusGo(screen.run.index - 1); }
            }
            if (event.key === "Enter" && event.target.id === "cpQuestionSearch") {
                event.preventDefault(); screen.query = event.target.value.trim(); screen.page = 0; renderViewer();
            }
        });
        readStore(); refreshSavedCount();
        return { renderDashboard, renderBuilder, renderChapters, suspend, toggleBookmark, bookmarkButton,
            setBuilderMode: (mode) => { selectedMode = mode === "exam" ? "exam" : "practice"; },
            practiceTopic: (code, mode) => {
                const topic = topics.get(code);
                if (topic && topic.count) startPractice({ title: topicTitle(topic), origin: "notes", scope: [code], mode: mode === "exam" ? "exam" : "practice" });
            },
            practiceModel: (key) => {
                const entry = entries.find((item) => item.key === key);
                if (entry) startPractice({ title: entry.meta.title, origin: "sets", setKey: key, mode: "practice" });
            },
            openSaved: () => {
                const config = { title: "Saved Questions", origin: "saved", scope: [], filter: "saved" };
                if (Object.keys(store.bookmarks).length) { openSavedLibrary(config); return; }
                suspend();
                screen = { mode: "library", records: [], config, page: 0, query: "", filter: "all" };
                show("learning", "saved"); renderViewer();
            } };
    }

    window.CIVIL_PRACTICE = { create, chaptersFrom, createTaxonomy, createBank, grade, filterPool, sample, questionKey, slug, modeOf, recordFeedback, STORE_KEY };
})();