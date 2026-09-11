(function () {
    "use strict";
    const STORE_KEY = "cee_topic_practice_v1";
    const plain = value => String(value || "").replace(/<svg[\s\S]*?<\/svg>/gi, " ")
        .replace(/<[^>]*>/g, " ").replace(/&(?:amp|lt|gt|nbsp|quot|#\d+);/g, " ").replace(/\s+/g, " ").trim();
    const slug = value => plain(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const validObject = value => value && typeof value === "object" && !Array.isArray(value);
    const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

    function matchScore(value, topic) {
        const text = " " + plain(value).toLowerCase().replace(/[^a-z0-9]+/g, " ") + " ";
        return topic.terms.reduce((score, term) => {
            const normalized = term.toLowerCase().replace(/[^a-z0-9]+/g, " ");
            const matched = normalized.length <= 3 ? text.includes(" " + normalized + " ") : text.includes(normalized);
            return score + (matched ? Math.min(normalized.length, 18) : 0);
        }, 0);
    }

    function createBank(days, imported, catalog, digital = {}) {
        const topics = catalog.topics.filter(topic => topic.subject !== "Reference").map(topic => ({ ...topic }));
        const records = [];
        const aliases = { Logical: "MAT", Quantitative: "MAT", Analytical: "MAT", "Non-verbal": "MAT" };
        for (const day of days) {
            const syllabus = new Map();
            for (const subject of day.syllabus || []) for (const topic of subject.topics || []) {
                for (const sub of topic.subs || []) for (const id of sub.ids || []) {
                    syllabus.set(id, { subject: subject.subject, topic: topic.topic, sub: sub.name });
                }
            }
            let number = 0;
            for (const chapter of day.chapters) for (const question of chapter.questions) {
                number++;
                const mapped = syllabus.get(question.id);
                const rawSubject = mapped?.subject || chapter.subject || "Other";
                const subject = aliases[rawSubject] || rawSubject;
                const candidates = topics.filter(topic => topic.subject === subject && topic.terms.length);
                const specificCandidates = candidates.filter(topic => matchScore(mapped?.sub, topic));
                const broadScope = specificCandidates.length !== 1 || /^(?:\d+\.?\s*)?(?:mechanics|physical chemistry|inorganic chemistry|organic chemistry|human biology|biodiversity|genetics|revision|mixed|full syllabus)$/i.test(mapped?.sub || "");
                const scored = candidates.map(topic => ({ topic,
                    score: matchScore(mapped?.sub, topic) * (broadScope ? 1 : 8) + matchScore(mapped?.topic, topic)
                        + matchScore(chapter.name, topic) + matchScore(question.text, topic) * (broadScope ? 8 : 2) }));
                scored.sort((first, second) => second.score - first.score);
                let topic = scored[0]?.score ? scored[0].topic : null;
                if (!topic) {
                    const id = slug(subject) + "-mixed";
                    topic = topics.find(item => item.id === id);
                    if (!topic) {
                        topic = { id, subject, title: "Mixed " + subject.toLowerCase(), ranges: [], terms: [] };
                        topics.push(topic);
                    }
                }
                records.push({ id: `day-${day.day}:${question.id}`, q: question, subject, topicId: topic.id,
                    topicTitle: topic.title, origin: "papers", sourceLabel: `Day ${day.day}, Q${number}`,
                    source: { day: day.day, number }, mapping: mapped ? "syllabus-assisted" : "content-assisted" });
            }
        }
        for (const question of imported) {
            const topic = topics.find(item => item.id === question.topicId);
            if (!topic) throw new Error("Unknown source topic: " + question.topicId);
            const setName = { "nerve-a": "Nerve A", "nerve-b": "Nerve B", mendel: "Mendel", "genetics-bank": "Genetics" }[question.source.set];
            records.push({ id: question.id, q: question, subject: question.subject, topicId: topic.id,
                topicTitle: topic.title, origin: "pdf", sourceLabel: `Biology p.${question.source.page}, ${setName} Q${question.source.number}`,
                source: question.source, mapping: "source" });
        }
        for (const data of Object.values(digital)) {
            const topic = topics.find(item => item.id === data.id);
            if (!topic || data.subject !== topic.subject) throw new Error("Unknown digital topic: " + data.id);
            for (const question of data.questions) {
                const section = data.sections.find(item => item.id === question.sectionId);
                const source = catalog.sources.find(item => item.id === question.source.document);
                if (!source || !section?.sources.some(item => item.document === question.source.document && item.page === question.source.page)) {
                    throw new Error("Missing digital question source: " + question.id);
                }
                records.push({ id: question.id, q: question, subject: topic.subject, topicId: topic.id,
                    topicTitle: topic.title, origin: "notes", sourceLabel: `From notes: ${source.title} p.${question.source.page}`,
                    source: question.source, sectionId: question.sectionId, mapping: "source" });
            }
        }
        if (new Set(records.map(item => item.id)).size !== records.length) throw new Error("Duplicate practice question identity");
        topics.forEach(topic => { topic.count = records.filter(item => item.topicId === topic.id).length; });
        return { records, topics, byId: new Map(records.map(item => [item.id, item])) };
    }

    function filterPool(records, { topics = [], source = "all", filter = "all" }, store) {
        const selected = new Set(topics);
        return records.filter(item => {
            if (!selected.has(item.topicId)) return false;
            if (source !== "all" && item.origin !== source) return false;
            if (filter === "unseen") return !has(store.progress, item.id);
            if (filter === "wrong") return store.progress[item.id]?.correct === false;
            if (filter === "saved") return store.bookmarks[item.id] === true;
            return true;
        });
    }

    function sample(records, count, random = Math.random) {
        if (!Number.isInteger(count) || count < 1 || count > records.length) throw new RangeError("Choose a whole question count within the available pool.");
        const copy = records.slice();
        for (let index = copy.length - 1; index > 0; index--) {
            const other = Math.floor(random() * (index + 1));
            [copy[index], copy[other]] = [copy[other], copy[index]];
        }
        return copy.slice(0, count);
    }

    function freshStore() {
        return { version: 1, progress: {}, bookmarks: {}, draft: null, history: [] };
    }

    function summarizeProgress(progress, topics = []) {
        const summary = { attempted: 0, correct: 0, wrong: 0, accuracy: 0, subjects: [], topics: [] };
        const topicMap = new Map(topics.map(topic => [topic.id, topic]));
        const subjectTotals = new Map();
        const topicTotals = new Map();
        const mixedSubjects = { "physics-mixed": "Physics", "chemistry-mixed": "Chemistry", "botany-mixed": "Botany",
            "zoology-mixed": "Zoology", "mat-mixed": "MAT", "mathematics-mixed": "Mathematics" };
        for (const record of Object.values(validObject(progress) ? progress : {})) {
            if (!validObject(record) || typeof record.correct !== "boolean" || !/^[abcd]$/.test(record.answer || "")) continue;
            const name = topicMap.get(record.topicId)?.subject || mixedSubjects[record.topicId] || "Other";
            const topicId = typeof record.topicId === "string" ? record.topicId : "unknown";
            if (!subjectTotals.has(name)) subjectTotals.set(name, { name, attempted: 0, correct: 0, wrong: 0 });
            if (!topicTotals.has(topicId)) topicTotals.set(topicId, { id: topicId, attempted: 0, correct: 0, wrong: 0 });
            for (const total of [summary, subjectTotals.get(name), topicTotals.get(topicId)]) {
                total.attempted++;
                if (record.correct) total.correct++;
                else total.wrong++;
            }
        }
        summary.accuracy = summary.attempted ? Math.round(summary.correct / summary.attempted * 100) : 0;
        summary.subjects = [...subjectTotals.values()];
        summary.topics = [...topicTotals.values()];
        return summary;
    }

    function restore(raw) {
        if (raw == null) return freshStore();
        const data = typeof raw === "string" ? JSON.parse(raw) : raw;
        if (!validObject(data) || data.version !== 1 || !validObject(data.progress) || !validObject(data.bookmarks)
            || !Array.isArray(data.history) || (data.draft != null && !validRun(data.draft)) || !data.history.every(validRun)) {
            throw new Error("Saved practice data is not readable. It has not been overwritten.");
        }
        return data;
    }

    function validRun(run) {
        return validObject(run) && typeof run.id === "string" && Array.isArray(run.ids) && run.ids.length > 0
            && run.ids.every(id => typeof id === "string") && new Set(run.ids).size === run.ids.length
            && validObject(run.answers) && validObject(run.flags) && Number.isInteger(run.index)
            && run.index >= 0 && run.index < run.ids.length;
    }

    function createRun(items, settings, at = Date.now()) {
        if (!items.length) throw new RangeError("No questions match this selection.");
        return { id: "practice-" + at + "-" + Math.random().toString(36).slice(2, 9),
            ids: items.map(item => item.id), answers: {}, flags: {}, index: 0,
            settings: { ...settings }, startedAt: at, finishedAt: null };
    }

    function answer(store, run, item, key, at = Date.now()) {
        if (run.finishedAt || !run.ids.includes(item.id) || has(run.answers, item.id)
            || !item.q.options.some(option => option.key === key)) return false;
        run.answers[item.id] = key;
        const previous = store.progress[item.id];
        store.progress[item.id] = { answer: key, correct: key === item.q.answer,
            attempts: (Number(previous?.attempts) || 0) + 1, updatedAt: at, topicId: item.topicId };
        return true;
    }

    function grade(items, answers) {
        const summary = { total: items.length, correct: 0, wrong: 0, skipped: 0, answered: 0, accuracy: 0, netMarks: 0, topics: [] };
        const topics = new Map();
        for (const item of items) {
            if (!topics.has(item.topicId)) topics.set(item.topicId, { id: item.topicId, title: item.topicTitle, total: 0, correct: 0, wrong: 0, skipped: 0 });
            const topic = topics.get(item.topicId);
            topic.total++;
            const key = answers[item.id];
            if (!item.q.options.some(option => option.key === key)) { summary.skipped++; topic.skipped++; }
            else if (key === item.q.answer) { summary.correct++; topic.correct++; }
            else { summary.wrong++; topic.wrong++; }
        }
        summary.answered = summary.correct + summary.wrong;
        summary.accuracy = summary.answered ? Math.round(summary.correct / summary.answered * 100) : 0;
        summary.netMarks = summary.correct - summary.wrong * 0.25;
        summary.topics = [...topics.values()];
        return summary;
    }

    function finish(store, run, items, at = Date.now()) {
        if (run.finishedAt) return false;
        run.finishedAt = at;
        run.summary = grade(items, run.answers);
        store.history.unshift(JSON.parse(JSON.stringify(run)));
        store.history = store.history.slice(0, 20);
        if (store.draft?.id === run.id) store.draft = null;
        return true;
    }

    window.CEE_STUDY_CORE = Object.freeze({ STORE_KEY, plain, createBank, filterPool, sample, freshStore, summarizeProgress, restore, createRun, answer, grade, finish });
})();