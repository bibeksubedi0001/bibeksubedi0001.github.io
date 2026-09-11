(function () {
    "use strict";
    const catalog = window.CEE_STUDY_CATALOG;
    const core = window.CEE_STUDY_CORE;
    const version = new URL(document.currentScript.src).search;
    const scripts = new Map();
    const $ = id => document.getElementById(id);
    const esc = value => String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    const icon = name => window.CEE_UI_ICONS.svg(name);
    const topics = catalog.topics.filter(topic => topic.ranges.length && topic.subject !== "Reference");
    let serial = 0;
    let initialized = false;
    let currentTopic = "nervous-system";
    let currentMode = "guide";
    let sourceFilter = "all";
    let questionOffset = 0;
    let questionSource = "notes";
    let selectedSection = null;
    let query = "";
    let searchOffset = 0;
    let bankPromise = null;
    let typesetQueue = Promise.resolve();
    const answers = new Map();

    function loadScript(file) {
        if (scripts.has(file)) return scripts.get(file);
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = file + version;
            script.onload = () => resolve();
            script.onerror = () => {
                scripts.delete(file);
                script.remove();
                reject(new Error("This file could not be loaded. Check your connection and retry."));
            };
            document.head.appendChild(script);
        });
        scripts.set(file, promise);
        return promise;
    }

    function loadBank() {
        if (!bankPromise) bankPromise = Promise.all([Promise.all(catalog.questionFiles.map(loadScript)), loadDigital()]).then(() => {
            if (!Array.isArray(window.CEE_SOURCE_QUESTIONS) || window.CEE_SOURCE_QUESTIONS.length !== catalog.questionCount) {
                throw new Error("The question files are incomplete. Reload the page before starting practice.");
            }
            return core.createBank(DAYS, window.CEE_SOURCE_QUESTIONS, catalog, window.CEE_DIGITAL_TOPICS);
        }).catch(error => { bankPromise = null; throw error; });
        return bankPromise;
    }

    async function loadDigital(ids = topics.filter(topic => topic.subject !== "Reference").map(topic => topic.id)) {
        const requested = [...new Set(ids)];
        if (requested.some(id => !topics.some(topic => topic.id === id && topic.subject !== "Reference"))) {
            throw new Error("Unknown digital-note topic.");
        }
        let cursor = 0;
        await Promise.all(Array.from({ length: Math.min(4, requested.length) }, async () => {
            while (cursor < requested.length) {
                const id = requested[cursor++];
                await loadScript("js/cee-notes/digital/" + id + ".js");
                const data = window.CEE_DIGITAL_TOPICS?.[id];
                if (!data || data.id !== id || !data.sections?.length || !Array.isArray(data.pageCoverage)
                    || !Array.isArray(data.questions) || data.questions.length < 20 || data.questions.length > 50) {
                    throw new Error("The digital notes for this topic are incomplete. Reload before starting practice.");
                }
            }
        }));
        return requested.map(id => window.CEE_DIGITAL_TOPICS[id]);
    }

    function typeset(node) {
        typesetQueue = typesetQueue.catch(() => {}).then(async () => {
            if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
            if (node.isConnected && window.MathJax?.typesetPromise) await window.MathJax.typesetPromise([node]);
        }).catch(() => {});
        return typesetQueue;
    }

    function sourceLink(source) {
        const documentSource = catalog.sources.find(item => item.id === source.document);
        if (!documentSource || !Number.isInteger(source.page) || source.page < 1 || source.page > documentSource.pages) return "";
        return `<span class="cee-source-reference">${esc(documentSource.title)} p.${source.page}</span>`;
    }

    function solution(item, picked) {
        const question = item.q;
        const status = picked == null ? "Answer" : picked === question.answer ? "Correct" : "Incorrect";
        return `<div class="cee-feedback ${picked === question.answer ? "is-correct" : picked == null ? "" : "is-wrong"}" role="status"><strong>${icon(picked === question.answer ? "check" : picked == null ? "library" : "close")}${status}${picked != null ? "" : ": " + esc(question.answer.toUpperCase())}</strong><div class="cee-explanation"><p>${question.explanation}</p>${question.editorialNote ? `<details class="cee-source-correction"><summary>Source correction</summary><p>${esc(question.editorialNote)}</p></details>` : ""}<div class="cee-source-link">${item.origin === "pdf" || item.origin === "notes" ? sourceLink(item.source) : esc(item.sourceLabel)}</div></div></div>`;
    }

    function init() {
        if (initialized) return;
        initialized = true;
        $("ceeNotesView").innerHTML = `<div class="cee-page-heading"><div><h1>Notes</h1><p>${topics.length} topics</p></div><button type="button" class="btn" id="ceeNotesPractice">${icon("arrow-right")}Practice topic</button></div>
            <div class="cee-study-controls"><label>Subject<select id="ceeNotesSubject"></select></label><label class="cee-topic-control">Topic<select id="ceeNotesTopic"></select></label><label>Source<select id="ceeNotesSource"><option value="all">Both PDFs</option>${catalog.sources.map(source => `<option value="${source.id}">${esc(source.title)}</option>`).join("")}</select></label></div>
            <form class="cee-note-search" id="ceeNotesSearchForm"><label for="ceeNotesSearch" class="sr-only">Search all notes</label><input type="search" id="ceeNotesSearch" placeholder="Search notes" autocomplete="off" /><button type="submit" class="btn">Search</button><button type="button" class="cee-icon-button" id="ceeNotesClear" aria-label="Clear search" title="Clear search" hidden>${icon("close")}</button></form>
            <div class="cee-reader-tabs" role="tablist" aria-label="Topic content"><button type="button" role="tab" id="ceeGuideTab" data-note-mode="guide" aria-controls="ceeNoteBody" aria-selected="true">Digital notes</button><button type="button" role="tab" id="ceeQuestionsTab" data-note-mode="questions" aria-controls="ceeNoteBody" aria-selected="false">MCQs</button></div>
            <div id="ceeNoteBody" class="cee-note-body" role="tabpanel" aria-labelledby="ceeGuideTab" aria-live="polite"></div>
            <nav class="cee-topic-pagination" aria-label="Note topics"><button type="button" class="btn" id="ceeNotePreviousTopic">${icon("arrow-left")}Previous topic</button><button type="button" class="btn" id="ceeNoteNextTopic">Next topic${icon("arrow-right")}</button></nav>`;
        $("ceeNotesSubject").innerHTML = [...new Set(topics.map(topic => topic.subject))].map(subject => `<option>${esc(subject)}</option>`).join("");
        $("ceeNotesSubject").addEventListener("change", () => {
            const subject = $("ceeNotesSubject").value;
            chooseTopic(topics.find(topic => topic.subject === subject).id);
        });
        $("ceeNotesTopic").addEventListener("change", event => chooseTopic(event.target.value));
        $("ceeNotesSource").addEventListener("change", event => { sourceFilter = event.target.value; render(); });
        $("ceeNotesPractice").addEventListener("click", () => window.CEE_APP.openStudy("practice", currentTopic));
        $("ceeNotesSearchForm").addEventListener("submit", event => {
            event.preventDefault(); query = $("ceeNotesSearch").value.trim(); searchOffset = 0; render();
        });
        $("ceeNotesSearch").addEventListener("input", event => { if (!event.target.value && query) clearSearch(); });
        $("ceeNotesClear").addEventListener("click", clearSearch);
        $("ceeNotesView").addEventListener("click", event => {
            const mode = event.target.closest("[data-note-mode]");
            if (mode) { currentMode = mode.dataset.noteMode; query = ""; $("ceeNotesSearch").value = ""; questionOffset = 0; render(); }
            const target = event.target.closest("[data-note-topic]");
            if (target) {
                currentMode = "guide";
                chooseTopic(target.dataset.noteTopic, target.dataset.noteSection);
            }
            const questionMove = event.target.closest("[data-note-question-step]");
            if (questionMove) { questionOffset += Number(questionMove.dataset.noteQuestionStep); render(); }
            const searchMove = event.target.closest("[data-note-search-step]");
            if (searchMove) { searchOffset += Number(searchMove.dataset.noteSearchStep); showSearch(); }
            const option = event.target.closest("[data-note-answer]");
            if (option && !answers.has(option.dataset.noteQuestion)) {
                answers.set(option.dataset.noteQuestion, option.dataset.noteAnswer); render();
            }
            if (event.target.closest("[data-note-retry]")) render();
        });
        $("ceeNotesView").addEventListener("change", event => {
            if (event.target.id === "ceeNoteSectionSelect") focusSection(event.target.value);
            if (event.target.id === "ceeNoteQuestionSource") { questionSource = event.target.value; questionOffset = 0; render(); }
        });
        $("ceeNotePreviousTopic").addEventListener("click", () => stepTopic(-1));
        $("ceeNoteNextTopic").addEventListener("click", () => stepTopic(1));
        $("ceeNotesView").addEventListener("keydown", event => {
            if (event.target.matches("[role='tab']") && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
                event.preventDefault();
                const tabs = [...$("ceeNotesView").querySelectorAll("[data-note-mode]")];
                const index = (tabs.indexOf(event.target) + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
                tabs[index].click(); tabs[index].focus();
            }
        });
    }

    function clearSearch() {
        query = ""; $("ceeNotesSearch").value = ""; render();
    }

    function chooseTopic(id, sectionId) {
        currentTopic = topics.some(topic => topic.id === id) ? id : topics[0].id;
        questionOffset = 0;
        selectedSection = sectionId || null;
        query = "";
        $("ceeNotesSearch").value = "";
        render();
    }

    function stepTopic(direction) {
        const group = topics.filter(topic => topic.subject === topics.find(item => item.id === currentTopic).subject);
        const index = group.findIndex(topic => topic.id === currentTopic) + direction;
        if (group[index]) chooseTopic(group[index].id);
    }

    function focusSection(sectionId) {
        if (!sectionId) return;
        const section = $("ceeNoteBody").querySelector('[data-digital-section="' + CSS.escape(sectionId) + '"]');
        if (!section) return;
        section.scrollIntoView({ behavior: "instant", block: "start" });
        section.focus({ preventScroll: true });
        if ($("ceeNoteSectionSelect")) $("ceeNoteSectionSelect").value = sectionId;
    }

    async function render() {
        const ticket = ++serial;
        const topic = topics.find(item => item.id === currentTopic);
        $("ceeNotesSubject").value = topic.subject;
        const group = topics.filter(item => item.subject === topic.subject);
        $("ceeNotesTopic").innerHTML = group.map(item => `<option value="${item.id}">${esc(item.title)}</option>`).join("");
        $("ceeNotesTopic").value = topic.id;
        $("ceeNotesSource").value = sourceFilter;
        $("ceeNotePreviousTopic").disabled = group[0].id === topic.id;
        $("ceeNoteNextTopic").disabled = group[group.length - 1].id === topic.id;
        $("ceeNotesClear").hidden = !query;
        document.querySelectorAll("[data-note-mode]").forEach(button => {
            const active = !query && button.dataset.noteMode === currentMode;
            button.setAttribute("aria-selected", active);
            button.tabIndex = active ? 0 : -1;
        });
        const body = $("ceeNoteBody");
        window.MathJax?.typesetClear?.([body]);
        body.setAttribute("aria-busy", "true");
        body.innerHTML = '<p class="cee-study-status">Loading notes...</p>';
        try {
            if (query) {
                await loadDigital();
                if (ticket !== serial) return;
                showSearch();
                return;
            }
            if (currentMode === "questions") {
                const bank = await loadBank();
                if (ticket !== serial) return;
                showQuestions(bank, topic);
            } else {
                await loadDigital([topic.id]);
                if (ticket !== serial) return;
                showGuide(topic);
            }
            body.setAttribute("aria-busy", "false");
            await typeset(body);
            if (ticket === serial && selectedSection) { focusSection(selectedSection); selectedSection = null; }
        } catch (error) {
            if (ticket !== serial) return;
            body.setAttribute("aria-busy", "false");
            body.innerHTML = `<div class="cee-study-status" role="alert"><p>${esc(error.message)}</p><button type="button" class="btn" data-note-retry>Retry</button></div>`;
        }
    }

    function typedNoteHtml(html) {
        const template = document.createElement("template");
        template.innerHTML = html;
        const scanRoot = new URL("assets/cee-notes/", document.baseURI);
        for (const element of template.content.querySelectorAll("img[src], a[href]")) {
            const url = new URL(element.getAttribute(element.tagName === "IMG" ? "src" : "href"), document.baseURI);
            if (url.origin !== scanRoot.origin || !url.pathname.startsWith(scanRoot.pathname)) continue;
            if (element.tagName === "A") { element.replaceWith(document.createTextNode(element.textContent)); continue; }
            const container = element.closest("figure") || element;
            const disclosure = container.closest("details");
            container.remove();
            if (disclosure && [...disclosure.childNodes].every(node => node.nodeName === "SUMMARY" || node.nodeType === 3 && !node.textContent.trim())) disclosure.remove();
        }
        return template.innerHTML;
    }

    function showGuide(topic) {
        const data = window.CEE_DIGITAL_TOPICS[topic.id];
        const matchesSource = source => sourceFilter === "all" || source.document === sourceFilter;
        const sections = data.sections.filter(section => section.sources.some(matchesSource));
        const coverage = data.pageCoverage.filter(matchesSource);
        const partial = coverage.filter(page => page.status === "partial");
        const questionCount = data.questions.filter(question => matchesSource(question.source)).length;
        $("ceeNoteBody").setAttribute("aria-labelledby", "ceeGuideTab");
        $("ceeNoteBody").innerHTML = `<article class="cee-reading cee-digital-reading"><header><span class="cee-overline">${esc(topic.subject)}</span><h2>${esc(topic.title)}</h2><p class="cee-study-status">${sections.length} sections / ${questionCount} generated MCQs</p></header>
            ${sections.length ? `<label class="cee-note-contents">On this page<select id="ceeNoteSectionSelect"><option value="">Select a section</option>${sections.map(section => `<option value="${esc(section.id)}">${esc(section.title)}</option>`).join("")}</select></label>` : '<p class="cee-study-status">No digital sections from this source in the selected topic.</p>'}
            ${partial.length ? `<details class="cee-note-gaps"><summary>${partial.length} source ${partial.length === 1 ? "page needs" : "pages need"} clarification</summary>${partial.map(page => `<div class="cee-note-gap"><h3>${sourceLink(page)}</h3><ul>${page.unresolved.map(text => `<li>${esc(text)}</li>`).join("")}</ul></div>`).join("")}</details>` : ""}
            ${sections.map(section => `<section class="cee-reading-section" id="digital-${topic.id}-${section.id}" data-digital-section="${esc(section.id)}" tabindex="-1"><h3>${esc(section.title)}</h3><div class="cee-digital-prose">${typedNoteHtml(section.html)}</div><div class="cee-section-sources">${section.sources.filter(matchesSource).map(sourceLink).join("")}</div></section>`).join("")}</article>`;
        $("ceeNoteBody").querySelectorAll(".cee-digital-prose table").forEach(table => {
            const wrapper = document.createElement("div");
            wrapper.className = "cee-note-table";
            wrapper.tabIndex = 0;
            wrapper.setAttribute("role", "region");
            wrapper.setAttribute("aria-label", table.closest("section").querySelector("h3").textContent + " table");
            table.replaceWith(wrapper);
            wrapper.appendChild(table);
        });
    }

    function showQuestions(bank, topic) {
        const items = bank.records.filter(item => item.topicId === topic.id && (questionSource === "all" || item.origin === questionSource)
            && (sourceFilter === "all" || (item.origin === "pdf" || item.origin === "notes") && item.source.document === sourceFilter));
        $("ceeNoteBody").setAttribute("aria-labelledby", "ceeQuestionsTab");
        questionOffset = Math.max(0, Math.min(questionOffset, Math.max(0, Math.ceil(items.length / 10) - 1) * 10));
        $("ceeNoteBody").innerHTML = `<div class="cee-section-heading"><h2>${esc(topic.title)}</h2><span>${items.length} MCQs</span></div><label class="cee-note-question-filter">Question source<select id="ceeNoteQuestionSource"><option value="notes">Generated from notes</option><option value="pdf">Original PDF MCQs</option><option value="papers">Daily papers</option><option value="all">All CEE questions</option></select></label>${items.length ? `<div class="cee-source-mcqs">${items.slice(questionOffset, questionOffset + 10).map((item, index) => {
            const picked = answers.get(item.id);
            return `<article class="cee-source-mcq"><header><span>Question ${questionOffset + index + 1}</span><small>${esc(item.sourceLabel)}${item.q.source?.adapted ? " (adapted)" : ""}</small></header><div class="cee-question-text">${item.q.text}</div><div class="cee-answer-options">${item.q.options.map(option => `<button type="button" data-note-question="${esc(item.id)}" data-note-answer="${option.key}" ${picked == null ? "" : "disabled"} class="cee-answer ${picked != null && option.key === item.q.answer ? "is-correct" : ""} ${picked === option.key && picked !== item.q.answer ? "is-wrong" : ""}"><span class="cee-answer-key">${esc(option.key.toUpperCase())}</span><span>${option.text}</span>${picked != null && option.key === item.q.answer ? icon("check") : ""}</button>`).join("")}</div>${picked == null ? "" : solution(item, picked)}</article>`;
        }).join("")}</div><div class="cee-page-controls"><button class="btn" type="button" data-note-question-step="-10" ${questionOffset ? "" : "disabled"}>${icon("arrow-left")}Previous</button><span>${questionOffset + 1}-${Math.min(questionOffset + 10, items.length)} / ${items.length}</span><button class="btn" type="button" data-note-question-step="10" ${questionOffset + 10 >= items.length ? "disabled" : ""}>Next${icon("arrow-right")}</button></div>` : '<p class="cee-study-status">No MCQs in this source selection. The original notes are still available.</p>'}`;
        $("ceeNoteQuestionSource").value = questionSource;
    }

    function showSearch() {
        const needle = query.toLowerCase();
        if (!needle) return;
        const hits = Object.values(window.CEE_DIGITAL_TOPICS || {}).flatMap(topic => topic.sections
            .filter(section => section.sources.some(source => sourceFilter === "all" || source.document === sourceFilter))
            .map(section => ({ topicId: topic.id, sectionId: section.id, sectionTitle: section.title, guide: true,
                text: core.plain(topic.title + " " + section.title + " " + typedNoteHtml(section.html)) }))
            .filter(section => section.text.toLowerCase().includes(needle)));
        searchOffset = Math.max(0, Math.min(searchOffset, Math.max(0, Math.ceil(hits.length / 30) - 1) * 30));
        $("ceeNoteBody").setAttribute("aria-busy", "false");
        $("ceeNoteBody").innerHTML = `<h2>Search results</h2><p class="cee-study-status">${hits.length} matches for "${esc(query)}"</p><div class="cee-search-results">${hits.slice(searchOffset, searchOffset + 30).map(hit => {
            const topic = topics.find(topic => topic.id === hit.topicId);
            const position = Math.max(0, hit.text.toLowerCase().indexOf(needle) - 60);
            return `<button type="button" class="cee-search-result" data-note-topic="${hit.topicId}" data-note-guide="true" data-note-section="${esc(hit.sectionId)}"><strong>${esc(topic.title)}</strong><small>${esc(topic.subject)} / ${esc(hit.sectionTitle)}</small><span>${esc(hit.text.slice(position, position + 210))}</span></button>`;
        }).join("")}</div>${hits.length > 30 ? `<div class="cee-page-controls"><button type="button" class="btn" data-note-search-step="-30" ${searchOffset ? "" : "disabled"}>${icon("arrow-left")}Previous</button><span>${searchOffset + 1}-${Math.min(searchOffset + 30, hits.length)} / ${hits.length}</span><button type="button" class="btn" data-note-search-step="30" ${searchOffset + 30 >= hits.length ? "disabled" : ""}>Next${icon("arrow-right")}</button></div>` : ""}`;
    }

    function open(topicId) {
        init();
        if (topicId && topics.some(topic => topic.id === topicId)) { currentTopic = topicId; questionOffset = 0; }
        render();
    }

    function suspend() {
        serial++;
    }

    window.CEE_STUDY = Object.freeze({ open, suspend, loadScript, loadDigital, loadBank, esc, icon, typeset, solution, sourceLink });
})();