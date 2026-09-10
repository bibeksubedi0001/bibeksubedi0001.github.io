(function () {
    "use strict";
    const catalog = window.CEE_STUDY_CATALOG;
    const core = window.CEE_STUDY_CORE;
    const version = new URL(document.currentScript.src).search;
    const scripts = new Map();
    const $ = id => document.getElementById(id);
    const esc = value => String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    const icon = name => window.CEE_UI_ICONS.svg(name);
    const topics = catalog.topics.filter(topic => topic.ranges.length);
    let serial = 0;
    let initialized = false;
    let currentTopic = "nervous-system";
    let currentPage = 0;
    let currentMode = "guide";
    let sourceFilter = "all";
    let questionOffset = 0;
    let query = "";
    let searchOffset = 0;
    let lastSearch = [];
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
        if (!bankPromise) bankPromise = Promise.all(catalog.questionFiles.map(loadScript)).then(() => {
            if (!Array.isArray(window.CEE_SOURCE_QUESTIONS) || window.CEE_SOURCE_QUESTIONS.length !== catalog.questionCount) {
                throw new Error("The question files are incomplete. Reload the page before starting practice.");
            }
            return core.createBank(DAYS, window.CEE_SOURCE_QUESTIONS, catalog);
        }).catch(error => { bankPromise = null; throw error; });
        return bankPromise;
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
        const image = `assets/cee-notes/${documentSource.id}/${String(source.page).padStart(3, "0")}.webp`;
        return `<a href="${image}" target="_blank" rel="noopener" title="Open source page image">${esc(documentSource.title)} p.${source.page}${icon("arrow-up-right")}</a>`;
    }

    function solution(item, picked) {
        const question = item.q;
        const status = picked == null ? "Answer" : picked === question.answer ? "Correct" : "Incorrect";
        return `<div class="cee-feedback ${picked === question.answer ? "is-correct" : picked == null ? "" : "is-wrong"}" role="status"><strong>${icon(picked === question.answer ? "check" : picked == null ? "library" : "close")}${status}${picked != null ? "" : ": " + esc(question.answer.toUpperCase())}</strong><div class="cee-explanation"><p>${question.explanation}</p>${question.editorialNote ? `<details class="cee-source-correction"><summary>Source correction</summary><p>${esc(question.editorialNote)}</p></details>` : ""}<div class="cee-source-link">${item.origin === "pdf" ? sourceLink(item.source) : esc(item.sourceLabel)}</div></div></div>`;
    }

    function init() {
        if (initialized) return;
        initialized = true;
        $("ceeNotesView").innerHTML = `<div class="cee-page-heading"><div><h1>Notes</h1><p>75 topics <span aria-hidden="true">/</span> 506 source pages</p></div><button type="button" class="btn" id="ceeNotesPractice">${icon("arrow-right")}Practice topic</button></div>
            <div class="cee-study-controls"><label>Subject<select id="ceeNotesSubject"></select></label><label class="cee-topic-control">Topic<select id="ceeNotesTopic"></select></label><label>Source<select id="ceeNotesSource"><option value="all">Both PDFs</option>${catalog.sources.map(source => `<option value="${source.id}">${esc(source.title)}</option>`).join("")}</select></label></div>
            <form class="cee-note-search" id="ceeNotesSearchForm"><label for="ceeNotesSearch" class="sr-only">Search all notes</label><input type="search" id="ceeNotesSearch" placeholder="Search notes" autocomplete="off" /><button type="submit" class="btn">Search</button><button type="button" class="cee-icon-button" id="ceeNotesClear" aria-label="Clear search" title="Clear search" hidden>${icon("close")}</button></form>
            <div class="cee-reader-tabs" role="tablist" aria-label="Topic content"><button type="button" role="tab" id="ceeGuideTab" data-note-mode="guide" aria-controls="ceeNoteBody" aria-selected="true">Study guide</button><button type="button" role="tab" id="ceePagesTab" data-note-mode="pages" aria-controls="ceeNoteBody" aria-selected="false">Source pages</button><button type="button" role="tab" id="ceeQuestionsTab" data-note-mode="questions" aria-controls="ceeNoteBody" aria-selected="false">MCQs</button></div>
            <div id="ceeNoteBody" class="cee-note-body" role="tabpanel" aria-labelledby="ceeGuideTab" aria-live="polite"></div>
            <nav class="cee-topic-pagination" aria-label="Note topics"><button type="button" class="btn" id="ceeNotePreviousTopic">${icon("arrow-left")}Previous topic</button><button type="button" class="btn" id="ceeNoteNextTopic">Next topic${icon("arrow-right")}</button></nav>
            <dialog id="ceeSourceImageDialog" class="cee-image-dialog"><div class="cee-dialog-bar"><strong id="ceeImageTitle"></strong><button type="button" class="cee-icon-button" id="ceeCloseImage" aria-label="Close source image" title="Close">${icon("close")}</button></div><div class="cee-image-scroll"><img id="ceeFullImage" alt="" /></div></dialog>`;
        $("ceeNotesSubject").innerHTML = [...new Set(topics.map(topic => topic.subject))].map(subject => `<option>${esc(subject)}</option>`).join("");
        $("ceeNotesSubject").addEventListener("change", () => {
            const subject = $("ceeNotesSubject").value;
            chooseTopic(topics.find(topic => topic.subject === subject).id);
        });
        $("ceeNotesTopic").addEventListener("change", event => chooseTopic(event.target.value));
        $("ceeNotesSource").addEventListener("change", event => { sourceFilter = event.target.value; currentPage = 0; render(); });
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
                currentMode = target.dataset.noteGuide ? "guide" : "pages";
                sourceFilter = "all";
                chooseTopic(target.dataset.noteTopic, target.dataset.noteSource, Number(target.dataset.notePage));
            }
            const move = event.target.closest("[data-note-page-step]");
            if (move) { currentPage += Number(move.dataset.notePageStep); render(); }
            const questionMove = event.target.closest("[data-note-question-step]");
            if (questionMove) { questionOffset += Number(questionMove.dataset.noteQuestionStep); render(); }
            const searchMove = event.target.closest("[data-note-search-step]");
            if (searchMove) { searchOffset += Number(searchMove.dataset.noteSearchStep); showSearch(); }
            const option = event.target.closest("[data-note-answer]");
            if (option && !answers.has(option.dataset.noteQuestion)) {
                answers.set(option.dataset.noteQuestion, option.dataset.noteAnswer); render();
            }
            if (event.target.closest("[data-note-image]")) openImage();
            if (event.target.closest("[data-note-retry]")) render();
        });
        $("ceeNotesView").addEventListener("change", event => {
            if (event.target.id === "ceeNotePageSelect") { currentPage = Number(event.target.value); render(); }
        });
        $("ceeNotePreviousTopic").addEventListener("click", () => stepTopic(-1));
        $("ceeNoteNextTopic").addEventListener("click", () => stepTopic(1));
        $("ceeCloseImage").addEventListener("click", () => $("ceeSourceImageDialog").close());
        $("ceeSourceImageDialog").addEventListener("click", event => { if (event.target === $("ceeSourceImageDialog")) event.target.close(); });
        $("ceeSourceImageDialog").addEventListener("keydown", event => {
            if (event.key === "Escape") { event.preventDefault(); $("ceeSourceImageDialog").close(); }
        });
        $("ceeSourceImageDialog").addEventListener("close", () => { $("ceeFullImage").removeAttribute("src"); });
        $("ceeNotesView").addEventListener("keydown", event => {
            if (event.target.matches("[role='tab']") && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
                event.preventDefault();
                const tabs = [...$("ceeNotesView").querySelectorAll("[data-note-mode]")];
                const index = (tabs.indexOf(event.target) + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                tabs[index].click(); tabs[index].focus();
            }
        });
    }

    function clearSearch() {
        query = ""; $("ceeNotesSearch").value = ""; render();
    }

    function chooseTopic(id, source, page) {
        currentTopic = topics.some(topic => topic.id === id) ? id : topics[0].id;
        currentPage = 0;
        questionOffset = 0;
        query = "";
        $("ceeNotesSearch").value = "";
        render(source, page);
    }

    function stepTopic(direction) {
        const group = topics.filter(topic => topic.subject === topics.find(item => item.id === currentTopic).subject);
        const index = group.findIndex(topic => topic.id === currentTopic) + direction;
        if (group[index]) chooseTopic(group[index].id);
    }

    function visiblePages() {
        return (window.CEE_NOTE_PAGES?.[currentTopic] || []).filter(page => sourceFilter === "all" || page.source === sourceFilter);
    }

    function openImage() {
        const page = visiblePages()[currentPage];
        if (!page) return;
        const source = catalog.sources.find(item => item.id === page.source);
        $("ceeImageTitle").textContent = source.title + " - page " + page.page;
        $("ceeFullImage").src = page.image;
        $("ceeFullImage").alt = source.title + ", page " + page.page;
        $("ceeSourceImageDialog").showModal();
    }

    async function render(source, pageNumber) {
        const ticket = ++serial;
        const topic = topics.find(item => item.id === currentTopic);
        $("ceeNotesSubject").value = topic.subject;
        const group = topics.filter(item => item.subject === topic.subject);
        $("ceeNotesTopic").innerHTML = group.map(item => `<option value="${item.id}">${esc(item.title)}</option>`).join("");
        $("ceeNotesTopic").value = topic.id;
        $("ceeNotesSource").value = sourceFilter;
        $("ceeNotesPractice").disabled = topic.subject === "Reference";
        $("ceeNotePreviousTopic").disabled = group[0].id === topic.id;
        $("ceeNoteNextTopic").disabled = group[group.length - 1].id === topic.id;
        $("ceeNotesClear").hidden = !query;
        document.querySelectorAll("[data-note-mode]").forEach(button => {
            const active = !query && button.dataset.noteMode === currentMode;
            button.setAttribute("aria-selected", active);
            button.tabIndex = active ? 0 : -1;
        });
        const body = $("ceeNoteBody");
        body.setAttribute("aria-busy", "true");
        body.innerHTML = '<p class="cee-study-status">Loading notes...</p>';
        try {
            if (query) {
                await Promise.all([loadScript("js/cee-notes/search-index.js"), loadScript("js/cee-notes/guides-physical.js"), loadScript("js/cee-notes/guides-biology.js")]);
                if (ticket !== serial) return;
                showSearch();
                return;
            }
            if (currentMode === "questions") {
                const bank = await loadBank();
                if (ticket !== serial) return;
                showQuestions(bank, topic);
            } else {
                const files = ["js/cee-notes/" + topic.id + ".js"];
                if (currentMode === "guide" && topic.subject !== "Reference") files.push("js/cee-notes/guides-" + (["Physics", "Chemistry"].includes(topic.subject) ? "physical" : "biology") + ".js");
                await Promise.all(files.map(loadScript));
                if (ticket !== serial) return;
                const pages = visiblePages();
                if (source && pageNumber) currentPage = Math.max(0, pages.findIndex(page => page.source === source && page.page === pageNumber));
                currentPage = Math.max(0, Math.min(currentPage, pages.length - 1));
                if (currentMode === "guide" && topic.subject !== "Reference") showGuide(topic);
                else showPage(topic, pages);
            }
            body.setAttribute("aria-busy", "false");
            typeset(body);
        } catch (error) {
            if (ticket !== serial) return;
            body.setAttribute("aria-busy", "false");
            body.innerHTML = `<div class="cee-study-status" role="alert"><p>${esc(error.message)}</p><button type="button" class="btn" data-note-retry>Retry</button></div>`;
        }
    }

    function showGuide(topic) {
        const sections = window.CEE_NOTE_GUIDES?.[topic.id] || [];
        const page = visiblePages().find(item => item.text.length > 100) || visiblePages()[0];
        $("ceeNoteBody").setAttribute("aria-labelledby", "ceeGuideTab");
        $("ceeNoteBody").innerHTML = `<article class="cee-reading"><header><span class="cee-overline">${esc(topic.subject)}</span><h2>${esc(topic.title)}</h2></header>${sections.map(([title, text]) => `<section class="cee-reading-section"><h3>${esc(title)}</h3><p>${text}</p></section>`).join("")}
            <div class="cee-reading-sources"><h3>Source material</h3>${topic.ranges.map(range => {
                const source = catalog.sources.find(item => item.id === range.source);
                return `<button type="button" class="cee-source-row" data-note-topic="${topic.id}" data-note-source="${range.source}" data-note-page="${range.first}"><span>${icon("library")}${esc(source.title)}</span><span>Pages ${range.first}${range.last !== range.first ? "-" + range.last : ""}${icon("arrow-right")}</span></button>`;
            }).join("")}</div>
            ${page ? `<figure class="cee-note-preview"><button type="button" data-note-topic="${topic.id}" data-note-source="${page.source}" data-note-page="${page.page}" aria-label="Open source page ${page.page}"><img src="${page.image}" width="${page.width}" height="${page.height}" alt="${esc(topic.title)} source page ${page.page}" loading="lazy" /></button><figcaption>Source page ${page.page}</figcaption></figure>` : ""}</article>`;
    }

    function showPage(topic, pages) {
        $("ceeNoteBody").setAttribute("aria-labelledby", "ceePagesTab");
        if (!pages.length) { $("ceeNoteBody").innerHTML = '<p class="cee-study-status">No pages from this PDF in the selected topic.</p>'; return; }
        const page = pages[currentPage];
        const source = catalog.sources.find(item => item.id === page.source);
        const options = pages.map((item, index) => `<option value="${index}">${esc(catalog.sources.find(source => source.id === item.source).title)} - p.${item.page}</option>`).join("");
        $("ceeNoteBody").innerHTML = `<div class="cee-page-controls"><button class="cee-icon-button" type="button" data-note-page-step="-1" ${currentPage ? "" : "disabled"} title="Previous page" aria-label="Previous page">${icon("arrow-left")}</button><label><span class="sr-only">Source page</span><select id="ceeNotePageSelect">${options}</select></label><button class="cee-icon-button" type="button" data-note-page-step="1" ${currentPage === pages.length - 1 ? "disabled" : ""} title="Next page" aria-label="Next page">${icon("arrow-right")}</button><span>${currentPage + 1} / ${pages.length}</span></div>
            <p class="cee-source-warning">Original source, not an independently verified textbook. Scanned text may contain recognition errors.</p>
            <figure class="cee-source-page"><button type="button" data-note-image aria-label="Enlarge source page ${page.page}" title="Enlarge source page"><img id="ceeCurrentPageImage" src="${page.image}" width="${page.width}" height="${page.height}" alt="${esc(source.title)} page ${page.page}: ${esc(topic.title)}" /></button><figcaption>${esc(source.title)} - page ${page.page} ${sourceLink({ document: page.source, page: page.page })}</figcaption></figure>
            <details class="cee-transcript tex2jax_ignore"><summary>${page.method === "pdf-text" ? "Extracted text" : "Machine transcription (unverified)"}</summary><div class="cee-transcript-text"></div></details>`;
        $("ceeNotePageSelect").value = String(currentPage);
        $("ceeNoteBody").querySelector(".cee-transcript-text").textContent = page.text || "No text was detected on this source page. The original page is retained above.";
        $("ceeCurrentPageImage").addEventListener("error", event => {
            event.target.closest("figure").insertAdjacentHTML("beforeend", '<p role="alert">The page image could not load. Try opening the source page link or reload to retry.</p>');
        }, { once: true });
    }

    function showQuestions(bank, topic) {
        const items = bank.records.filter(item => item.topicId === topic.id && (sourceFilter === "all" || item.origin === "pdf" && item.source.document === sourceFilter));
        $("ceeNoteBody").setAttribute("aria-labelledby", "ceeQuestionsTab");
        questionOffset = Math.max(0, Math.min(questionOffset, Math.max(0, Math.ceil(items.length / 10) - 1) * 10));
        $("ceeNoteBody").innerHTML = `<div class="cee-section-heading"><h2>${esc(topic.title)}</h2><span>${items.length} MCQs</span></div>${items.length ? `<div class="cee-source-mcqs">${items.slice(questionOffset, questionOffset + 10).map((item, index) => {
            const picked = answers.get(item.id);
            return `<article class="cee-source-mcq"><header><span>Question ${questionOffset + index + 1}</span><small>${esc(item.sourceLabel)}${item.q.source?.adapted ? " (adapted)" : ""}</small></header><div class="cee-question-text">${item.q.text}</div><div class="cee-answer-options">${item.q.options.map(option => `<button type="button" data-note-question="${esc(item.id)}" data-note-answer="${option.key}" ${picked == null ? "" : "disabled"} class="cee-answer ${picked != null && option.key === item.q.answer ? "is-correct" : ""} ${picked === option.key && picked !== item.q.answer ? "is-wrong" : ""}"><span class="cee-answer-key">${esc(option.key.toUpperCase())}</span><span>${option.text}</span>${picked != null && option.key === item.q.answer ? icon("check") : ""}</button>`).join("")}</div>${picked == null ? "" : solution(item, picked)}</article>`;
        }).join("")}</div><div class="cee-page-controls"><button class="btn" type="button" data-note-question-step="-10" ${questionOffset ? "" : "disabled"}>${icon("arrow-left")}Previous</button><span>${questionOffset + 1}-${Math.min(questionOffset + 10, items.length)} / ${items.length}</span><button class="btn" type="button" data-note-question-step="10" ${questionOffset + 10 >= items.length ? "disabled" : ""}>Next${icon("arrow-right")}</button></div>` : '<p class="cee-study-status">No MCQs in this source selection. The original notes are still available.</p>'}`;
    }

    function showSearch() {
        const needle = query.toLowerCase();
        if (!needle) return;
        lastSearch = (window.CEE_NOTE_SEARCH || []).filter(item => (sourceFilter === "all" || item.source === sourceFilter)
            && (item.text.toLowerCase().includes(needle) || topics.find(topic => topic.id === item.topicId)?.title.toLowerCase().includes(needle)));
        const guideHits = Object.entries(window.CEE_NOTE_GUIDES || {}).filter(([id, sections]) => sections.some(section => section.join(" ").toLowerCase().includes(needle)))
            .map(([id]) => ({ topicId: id, guide: true, text: window.CEE_NOTE_GUIDES[id].map(section => section.join(" ")).join(" ") }));
        const hits = [...guideHits, ...lastSearch];
        searchOffset = Math.max(0, Math.min(searchOffset, Math.max(0, Math.ceil(hits.length / 30) - 1) * 30));
        $("ceeNoteBody").setAttribute("aria-busy", "false");
        $("ceeNoteBody").innerHTML = `<h2>Search results</h2><p class="cee-study-status">${hits.length} matches for "${esc(query)}"</p><div class="cee-search-results">${hits.slice(searchOffset, searchOffset + 30).map(hit => {
            const topic = topics.find(topic => topic.id === hit.topicId);
            const position = Math.max(0, hit.text.toLowerCase().indexOf(needle) - 60);
            return `<button type="button" class="cee-search-result" data-note-topic="${hit.topicId}" ${hit.guide ? 'data-note-guide="true"' : `data-note-source="${hit.source}" data-note-page="${hit.page}"`}><strong>${esc(topic.title)}</strong><small>${esc(topic.subject)} / ${hit.guide ? "Study guide" : esc(catalog.sources.find(source => source.id === hit.source).title) + " p." + hit.page}</small><span>${esc(hit.text.slice(position, position + 210))}</span></button>`;
        }).join("")}</div>${hits.length > 30 ? `<div class="cee-page-controls"><button type="button" class="btn" data-note-search-step="-30" ${searchOffset ? "" : "disabled"}>${icon("arrow-left")}Previous</button><span>${searchOffset + 1}-${Math.min(searchOffset + 30, hits.length)} / ${hits.length}</span><button type="button" class="btn" data-note-search-step="30" ${searchOffset + 30 >= hits.length ? "disabled" : ""}>Next${icon("arrow-right")}</button></div>` : ""}`;
    }

    function open(topicId) {
        init();
        if (topicId && topics.some(topic => topic.id === topicId)) { currentTopic = topicId; currentPage = 0; questionOffset = 0; }
        render();
    }

    function suspend() {
        serial++;
        if ($("ceeSourceImageDialog")?.open) $("ceeSourceImageDialog").close();
    }

    window.CEE_STUDY = Object.freeze({ open, suspend, loadScript, loadBank, esc, icon, typeset, solution, sourceLink });
})();