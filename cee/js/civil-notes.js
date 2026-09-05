(function () {
    "use strict";

    const FILES = Object.freeze({
        "chapter-01-materials.js": ["ACiE0101", "ACiE0102"],
        "chapter-01-building.js": ["ACiE0103", "ACiE0104"],
        "chapter-01-surveying.js": ["ACiE0105", "ACiE0106"],
        "chapter-02-properties.js": ["ACiE0201", "ACiE0202"],
        "chapter-02-strength.js": ["ACiE0203", "ACiE0204"],
        "chapter-02-foundations.js": ["ACiE0205", "ACiE0206"],
        "chapter-03-fluids.js": ["ACiE0301", "ACiE0302"],
        "chapter-03-flow.js": ["ACiE0303", "ACiE0304"],
        "chapter-03-channels.js": ["ACiE0305"],
        "chapter-03-hydrology.js": ["ACiE0306"],
        "chapter-04-forces.js": ["ACiE0401"],
        "chapter-04-stress.js": ["ACiE0402"],
        "chapter-04-flexure.js": ["ACiE0403"],
        "chapter-04-determinate.js": ["ACiE0404", "ACiE0405"],
        "chapter-04-indeterminate.js": ["ACiE0406"]
    });
    const CHAPTER_FILES = Object.freeze({
        "basic-civil-engineering": ["chapter-01-materials.js", "chapter-01-building.js", "chapter-01-surveying.js"],
        "soil-mechanics-and-foundation": ["chapter-02-properties.js", "chapter-02-strength.js", "chapter-02-foundations.js"],
        "basic-water-resources-engineering": ["chapter-03-fluids.js", "chapter-03-flow.js", "chapter-03-channels.js", "chapter-03-hydrology.js"],
        "structural-mechanics": ["chapter-04-forces.js", "chapter-04-stress.js", "chapter-04-flexure.js", "chapter-04-determinate.js", "chapter-04-indeterminate.js"]
    });
    const CODES = Object.freeze(Object.values(FILES).flat());
    const hasChapter = (id) => Object.hasOwn(CHAPTER_FILES, id);
    const chapterCodes = (id) => hasChapter(id) ? CHAPTER_FILES[id].flatMap((file) => FILES[file]) : [];
    const script = document.currentScript;
    const base = script ? new URL("civil-notes/", script.src).href : "js/civil-notes/";
    const version = script ? new URL(script.src).search : "";
    const hasTopic = (code) => CODES.includes(code);
    const text = (value) => String(value || "").replace(/<[^>]*>/g, " ").replace(/&(?:amp|nbsp|lt|gt|quot);/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    const sourcesOf = (topic) => [...new Map([...topic.blocks, ...topic.cautions].flatMap((block) => block.sources).map((source) => [source.id, source])).values()];

    function search(topics, query) {
        const terms = text(query).split(" ").filter(Boolean);
        if (!terms.length) return [];
        return topics.flatMap((topic) => [
            ...topic.blocks.map((block) => ({ ...block, code: topic.code, kind: "note" })),
            ...topic.cautions.map((item, i) => ({ ...item, id: "caution-" + i, title: "Bank check", code: topic.code, kind: "caution" }))
        ]).filter((block) => {
            const content = text(block.title + " " + block.html + " " + block.code + " " + block.sources.map((source) => source.id).join(" "));
            return terms.every((term) => content.includes(term));
        });
    }

    function create(deps) {
        const { $, esc, syllabus, entries, loadSet, typeset, isOpen, startTopic } = deps;
        const chapters = syllabus.chapters.filter((item) => hasChapter(item.id));
        const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
        const topicMap = new Map(chapters.flatMap((chapter) => chapter.subchapters.map((topic) => [topic.code, { ...topic, chapterId: chapter.id }])));
        const pending = new Map();
        const selections = new Map();
        const content = $("cvNotesContent"), dialog = $("cvNoteSourceDialog"), sourceBody = $("cvNoteSourceBody");
        const uiIcon = window.CEE_UI_ICONS.svg;
        let selectedChapterId = chapters[0].id, selectedCode = chapterCodes(selectedChapterId)[0];
        let query = "", serial = 0, sourceSerial = 0;

        function replace(node, html) {
            if (window.MathJax && window.MathJax.typesetClear) window.MathJax.typesetClear([node]);
            node.innerHTML = html;
            typeset(node);
        }

        function selectTopic(code) {
            const topic = topicMap.get(code);
            if (topic && hasTopic(code)) {
                selectedChapterId = topic.chapterId; selectedCode = code; query = "";
                selections.set(selectedChapterId, code);
            }
        }

        function selectChapter(id) {
            if (chapterMap.has(id)) selectTopic(selections.get(id) || chapterCodes(id)[0]);
        }

        function suspend() {
            serial++; sourceSerial++;
            if (dialog.open) dialog.close();
        }

        function loadFile(file) {
            const ready = () => FILES[file].every((code) => window.CIVIL_NOTE_TOPICS && window.CIVIL_NOTE_TOPICS[code]);
            if (ready()) return Promise.resolve();
            if (pending.has(file)) return pending.get(file);
            const promise = new Promise((resolve, reject) => {
                const tag = document.createElement("script");
                const timeout = setTimeout(() => finish(new Error("Notes loading timed out. Please retry.")), 25000);
                function finish(error) {
                    clearTimeout(timeout); tag.onload = null; tag.onerror = null;
                    if (error) { tag.remove(); reject(error); } else resolve();
                }
                tag.src = base + file + version;
                tag.onload = () => finish(ready() ? null : new Error("The notes file is incomplete. Please retry."));
                tag.onerror = () => finish(new Error("Notes could not be loaded. Check your connection and retry."));
                document.head.appendChild(tag);
            }).catch((error) => { pending.delete(file); throw error; });
            pending.set(file, promise);
            return promise;
        }

        async function loadNotes(chapterId) {
            await Promise.all(CHAPTER_FILES[chapterId].map(loadFile));
            for (const code of chapterCodes(chapterId)) {
                const topic = window.CIVIL_NOTE_TOPICS[code];
                if (!topic || topic.code !== code || !Array.isArray(topic.blocks) || !topic.blocks.length
                    || !Array.isArray(topic.cautions) || !Array.isArray(topic.gaps)
                    || sourcesOf(topic).length !== topic.questionCount) throw new Error("The notes coverage could not be verified. Please reload the page.");
            }
        }

        function references(sources) {
            if (!sources.length) return "";
            return `<details class="cn-sources"><summary>Source questions (${sources.length})</summary><div class="cn-source-links">${sources.map((source) =>
                `<button type="button" data-cn-source="${esc(source.id)}" title="${esc(source.id)}" aria-label="Read Model ${source.set}, question ${source.question}, ${esc(source.id)}">Model ${source.set} · Q${source.question}</button>`).join("")}</div></details>`;
        }

        function externalReferences(topic) {
            return (topic.references || []).length ? `<details class="cn-sources"><summary>Standards checked</summary><ul>${topic.references.filter((ref) => /^https:\/\//.test(ref.url)).map((ref) => `<li><a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.title)}</a></li>`).join("")}</ul></details>` : "";
        }

        function topicHtml(code) {
            const meta = topicMap.get(code), topic = window.CIVIL_NOTE_TOPICS[code];
            const codes = chapterCodes(meta.chapterId), index = codes.indexOf(code);
            return `<article class="cn-topic" data-note-topic="${code}">
                <header class="cn-topic-head"><div><span class="cn-code">${code}</span><h3 id="cnTopicTitle" tabindex="-1">${esc(meta.number + " " + meta.name)}</h3><span class="cn-count">${topic.questionCount} source questions</span></div>
                    <div class="cn-actions"><button type="button" class="cn-button" data-cn-session="practice" data-topic="${code}">Practice topic</button><button type="button" class="cn-button cn-secondary" data-cn-session="exam" data-topic="${code}">Exam</button></div></header>
                <details class="cn-scope" open><summary>Syllabus scope</summary><p>${esc(meta.detail)}</p></details>
                <nav class="cn-contents" aria-label="Contents of ${esc(meta.number)}">${topic.blocks.map((block) => `<a href="#cn-${code}-${block.id}" data-cn-jump="cn-${code}-${block.id}">${esc(block.title)}</a>`).join("")}</nav>
                ${topic.blocks.map((block) => `<section class="cn-block" id="cn-${code}-${block.id}" tabindex="-1"><h4>${esc(block.title)}</h4><div class="cn-prose">${block.html}</div>${references(block.sources)}</section>`).join("")}
                <section class="cn-checks" id="cn-${code}-checks"><h4>Bank checks</h4>${topic.cautions.map((item, i) => `<div class="cn-caution" id="cn-${code}-caution-${i}" tabindex="-1"><div class="cn-prose">${item.html}</div>${references(item.sources)}</div>`).join("")}${externalReferences(topic)}</section>
                <section class="cn-gaps"><h4>Coverage gaps</h4><ul>${topic.gaps.map((gap) => `<li>${esc(gap)}</li>`).join("")}</ul></section>
                <footer class="cn-pagination"><button type="button" class="cn-button cn-secondary" data-cn-topic="${codes[index - 1] || code}"${index === 0 ? " disabled" : ""}>${uiIcon("arrow-left")} Previous subchapter</button><button type="button" class="cn-button" data-cn-topic="${codes[index + 1] || code}"${index === codes.length - 1 ? " disabled" : ""}>Next subchapter ${uiIcon("arrow-right")}</button></footer>
            </article>`;
        }

        function renderBody() {
            const reader = $("cnReader");
            content.querySelectorAll("[data-cn-topic]").forEach((button) => button.setAttribute("aria-pressed", String(!query && button.dataset.cnTopic === selectedCode)));
            if (!query) { replace(reader, topicHtml(selectedCode)); return; }
            const results = search(chapterCodes(selectedChapterId).map((code) => window.CIVIL_NOTE_TOPICS[code]), query);
            replace(reader, `<div class="cn-search-summary" role="status"><b>${results.length} matching sections</b><button type="button" class="cn-button cn-secondary" data-cn-clear>Clear search</button></div>${results.length ? results.map((block) => {
                const meta = topicMap.get(block.code);
                return `<article class="cn-search-result"><span class="cn-code">${esc(meta.number + " " + meta.name)}</span><h3>${esc(block.title)}</h3><div class="cn-prose">${block.html}</div><button type="button" class="cn-button cn-secondary" data-cn-topic="${block.code}" data-cn-block="${block.id}">Open subchapter ${uiIcon("arrow-right")}</button></article>`;
            }).join("") : '<div class="cn-empty">No matching notes. Try a topic, formula name or source question ID.</div>'}`);
        }

        async function render() {
            const restoreChapterFocus = document.activeElement === $("cnChapterSelect");
            suspend();
            const token = serial;
            const chapterId = selectedChapterId, chapter = chapterMap.get(chapterId);
            const codes = chapterCodes(chapterId);
            replace(content, `<div class="cn-tools"><label class="cn-field"><span>Chapter</span><select id="cnChapterSelect">${syllabus.chapters.map((item) => `<option value="${item.id}"${item.id === chapterId ? " selected" : ""}${hasChapter(item.id) ? "" : " disabled"}>${esc(item.number + ". " + item.name)}${hasChapter(item.id) ? "" : " — Notes not added"}</option>`).join("")}</select></label>
                <form id="cnSearchForm" role="search"><label class="cn-field"><span>Search Chapter ${chapter.number} notes</span><input type="search" id="cnSearch" value="${esc(query)}" placeholder="Topic, formula or source question ID" disabled /></label><button class="cn-button" type="submit" disabled>Search</button></form></div>
                <nav class="cn-topics" aria-label="Chapter ${chapter.number} subchapters">${chapter.subchapters.map((topic) => `<button type="button" data-cn-topic="${topic.code}" aria-pressed="${!query && topic.code === selectedCode}" disabled><b>${esc(topic.number)}</b><span>${esc(topic.name)}</span></button>`).join("")}</nav>
                <div id="cnReader" aria-busy="true"><div class="cn-empty" role="status">Loading Chapter ${chapter.number} notes…</div></div>
                <details class="cn-about" hidden><summary>Sources and scope</summary><p id="cnAboutText"></p></details>`);
            if (restoreChapterFocus) $("cnChapterSelect").focus({ preventScroll: true });
            try {
                await loadNotes(chapterId);
                if (token !== serial || !isOpen()) return;
                content.querySelectorAll("#cnSearchForm :disabled, .cn-topics > button").forEach((node) => { node.disabled = false; });
                $("cnReader").setAttribute("aria-busy", "false");
                const count = codes.reduce((sum, code) => sum + window.CIVIL_NOTE_TOPICS[code].questionCount, 0);
                $("cnAboutText").textContent = `Study notes organized by the supplied NEC syllabus and the ${count} questions mapped to Chapter ${chapter.number}. Source links open the original model items without recording an attempt. Bank checks flag errors or uncertain wording; worked extensions and untested syllabus areas are labelled. These are authored study notes, not NEC-issued guidance. Original model keys and saved results are unchanged.`;
                content.querySelector(".cn-about").hidden = false;
                renderBody();
            } catch (error) {
                if (token !== serial || !isOpen()) return;
                $("cnReader").setAttribute("aria-busy", "false");
                replace($("cnReader"), `<div class="cn-empty" role="alert"><h3>Notes could not be loaded</h3><p>${esc(error.message)}</p><button type="button" class="cn-button" data-cn-retry>Retry</button></div>`);
            }
        }

        function focusBlock(id) {
            const target = $(id);
            if (!target || !$("cnReader").contains(target)) return;
            target.focus({ preventScroll: true });
            target.scrollIntoView({ block: "start", behavior: "auto" });
        }

        async function openSource(id) {
            const topic = chapterCodes(selectedChapterId).map((code) => window.CIVIL_NOTE_TOPICS && window.CIVIL_NOTE_TOPICS[code]).find((item) => item && sourcesOf(item).some((ref) => ref.id === id));
            if (!topic || !isOpen()) return;
            const ref = sourcesOf(topic).find((source) => source.id === id);
            const entry = entries.find((item) => item.no === ref.set);
            if (!entry) return;
            const token = ++sourceSerial;
            $("cvNoteSourceTitle").textContent = `Model ${ref.set} · Question ${ref.question}`;
            replace(sourceBody, '<p role="status">Loading source question…</p>');
            if (!dialog.open) dialog.showModal();
            try {
                const data = await loadSet(entry);
                if (token !== sourceSerial || !dialog.open || !isOpen()) return;
                const q = data.chapters.flatMap((chapter) => chapter.questions)[ref.question - 1];
                if (!q || (q.src || q.id) !== id) throw new Error("This reference no longer matches the source paper.");
                const checks = topic.cautions.filter((item) => item.sources.some((source) => source.id === id));
                replace(sourceBody, `<span class="cn-code">${esc(id)}</span>${checks.length ? `<section class="cn-source-check"><h3>Bank check</h3>${checks.map((check) => check.html).join("")}${externalReferences(topic)}</section>` : ""}<div class="cn-source-question">${q.text}</div>
                    <ol class="cn-source-options" type="a">${q.options.map((option) => `<li value="${option.key.charCodeAt(0) - 96}">${option.text}</li>`).join("")}</ol>
                    <details class="cn-stored-answer"><summary>Stored answer and explanation</summary><p><strong>Bank key: ${esc(q.answer.toUpperCase())}</strong></p><div>${q.explanation || "No explanation is stored for this item."}</div></details>`);
            } catch (error) {
                if (token !== sourceSerial || !dialog.open || !isOpen()) return;
                replace(sourceBody, `<div role="alert"><p>${esc(error.message)}</p><button type="button" class="cn-button" data-cn-source="${esc(id)}">Retry source</button></div>`);
            }
        }

        $("cvNotes").addEventListener("click", (event) => {
            const button = event.target.closest("button, a[data-cn-jump]");
            if (!button || button.disabled || !isOpen()) return;
            if (button.hasAttribute("data-cn-close")) dialog.close();
            else if (button.hasAttribute("data-cn-retry")) render();
            else if (button.dataset.cnSource) openSource(button.dataset.cnSource);
            else if (button.dataset.cnTopic && topicMap.get(button.dataset.cnTopic)?.chapterId === selectedChapterId) {
                selectTopic(button.dataset.cnTopic); $("cnSearch").value = ""; renderBody();
                focusBlock(button.dataset.cnBlock ? `cn-${selectedCode}-${button.dataset.cnBlock}` : "cnTopicTitle");
            } else if (button.dataset.cnJump) { event.preventDefault(); focusBlock(button.dataset.cnJump); }
            else if (button.hasAttribute("data-cn-clear")) { query = ""; $("cnSearch").value = ""; renderBody(); $("cnSearch").focus(); }
            else if (button.dataset.cnSession && hasTopic(button.dataset.topic)) startTopic(button.dataset.topic, button.dataset.cnSession);
        });
        $("cvNotes").addEventListener("submit", (event) => {
            if (event.target.id !== "cnSearchForm" || !isOpen()) return;
            event.preventDefault();
            if ($("cnSearch").disabled) return;
            query = $("cnSearch").value.trim(); renderBody();
        });
        $("cvNotes").addEventListener("change", (event) => {
            if (event.target.id !== "cnChapterSelect" || !isOpen() || !chapterMap.has(event.target.value)) return;
            selectChapter(event.target.value); render();
        });
        dialog.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && dialog.open) {
                event.preventDefault(); event.stopPropagation(); dialog.close();
            }
        });
        dialog.addEventListener("close", () => { sourceSerial++; });
        return { render, selectTopic, suspend };
    }

    window.CIVIL_NOTES = Object.freeze({ create, hasTopic, hasChapter, chapterCodes, search, sourcesOf, FILES, CHAPTER_FILES, CODES });
})();