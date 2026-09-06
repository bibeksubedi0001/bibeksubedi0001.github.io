(function () {
    "use strict";

    const SOURCE = "https://bibeksubedi0001.com.np";
    const TARGET = "https://nec.bibeksubedi0001.com.np";
    const KEYS = ["cee_civil_v1", "cee_civil_practice_v1"];
    const BACKUP = "nec_import_backup_v1";
    const LIMIT = 4 * 1024 * 1024;
    const $ = (id) => document.getElementById(id);
    const status = (message) => { $("necTransferStatus").textContent = message; };
    const record = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

    function validate(values) {
        if (!record(values) || Object.keys(values).some((key) => !KEYS.includes(key))) throw new Error("The transfer contains unsupported data.");
        let length = 0;
        for (const [key, raw] of Object.entries(values)) {
            if (typeof raw !== "string" || (length += raw.length) > LIMIT) throw new Error("The saved progress is too large or invalid.");
            const parsed = JSON.parse(raw);
            if (!record(parsed)) throw new Error("The saved progress format is not recognized.");
            if (key === KEYS[0] && !record(parsed.sets)) throw new Error("The saved model-paper format is not recognized.");
            if (key === KEYS[1] && (parsed.version !== 1 || !record(parsed.bookmarks) || !record(parsed.progress) || !Array.isArray(parsed.history))) throw new Error("The saved practice format is not recognized.");
        }
        return values;
    }

    function readValues() {
        return validate(Object.fromEntries(KEYS.map((key) => [key, localStorage.getItem(key)]).filter(([, value]) => value !== null)));
    }

    function summary(values) {
        const models = JSON.parse(values[KEYS[0]] || '{"sets":{}}');
        const practice = JSON.parse(values[KEYS[1]] || '{"bookmarks":{},"history":[]}');
        const modelCount = Object.values(models.sets).filter((set) => record(set) && (set.submitted || Object.keys(set.answers || {}).length || set.endsAt)).length;
        const drafts = [practice.draft, practice.practiceDraft].filter(Boolean).length;
        return modelCount + " model records, " + practice.history.length + " completed sessions, " + drafts + " drafts and " + Object.keys(practice.bookmarks).length + " bookmarks.";
    }

    if (document.body.dataset.necTransfer === "source") {
        const request = new URLSearchParams(location.hash.slice(1)).get("request");
        const button = $("necSendProgress");
        if (location.origin !== SOURCE || !window.opener || !/^[a-f0-9]{32}$/.test(request || "")) {
            status("Open Import previous progress from NEC Civil in the browser where your old progress is saved.");
            return;
        }
        try {
            const values = readValues();
            $("necTransferSummary").textContent = summary(values);
            button.disabled = !Object.keys(values).length;
            if (button.disabled) status("No Civil progress was found on this browser.");
        } catch (error) { status(error.message); }
        button.addEventListener("click", () => {
            try {
                const values = readValues();
                if (!Object.keys(values).length) throw new Error("No Civil progress was found on this browser.");
                window.opener.postMessage({ type: "nec:progress", request, values }, TARGET);
                button.disabled = true;
                status("Sent. Confirm the import in the NEC window. No records have been removed here.");
            } catch (error) { status(error.message); }
        });
        return;
    }

    if (document.body.dataset.necTransfer !== "target") return;
    const button = $("necImportProgress");
    const dialog = $("necTransferDialog");
    let popup = null, request = null, incoming = null;

    button.addEventListener("click", () => {
        if (location.origin !== TARGET) {
            status("Progress transfer is available on nec.bibeksubedi0001.com.np.");
            return;
        }
        const bytes = crypto.getRandomValues(new Uint8Array(16));
        request = Array.from(bytes, (value) => value.toString(16).padStart(2, "0")).join("");
        incoming = null;
        popup = window.open(SOURCE + "/cee/nec-transfer.html#request=" + request, "nec-progress-transfer", "popup,width=620,height=620");
        status(popup ? "Confirm Send to NEC in the transfer window." : "Allow the transfer popup, then try again.");
    });

    window.addEventListener("message", (event) => {
        if (event.origin !== SOURCE || event.source !== popup || !popup || !request
            || event.data?.type !== "nec:progress" || event.data.request !== request) return;
        try {
            incoming = validate(event.data.values);
            if (!Object.keys(incoming).length) throw new Error("No Civil progress was received.");
            const current = readValues();
            const conflict = Object.entries(incoming).some(([key, value]) => current[key] && current[key] !== value);
            $("necTransferSummary").textContent = summary(incoming) + (conflict
                ? " Existing NEC records for these categories will be replaced. A backup of the current records will be kept on this browser."
                : " The original records on CEE remain unchanged.");
            if (!dialog.open) dialog.showModal();
        } catch (error) { incoming = null; status(error.message); }
    });

    $("necTransferCancel").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => { incoming = null; button.focus({ preventScroll: true }); });
    $("necTransferConfirm").addEventListener("click", () => {
        if (!incoming) return;
        let previous = null, started = false;
        try {
            const values = validate(incoming);
            previous = Object.fromEntries(Object.keys(values).map((key) => [key, localStorage.getItem(key)]));
            if (Object.values(previous).some((value) => value !== null)) {
                localStorage.setItem(BACKUP, JSON.stringify({ version: 1, createdAt: new Date().toISOString(), values: previous }));
            }
            started = true;
            for (const [key, value] of Object.entries(values)) localStorage.setItem(key, value);
            status("Progress imported.");
            dialog.close();
            location.reload();
        } catch (error) {
            if (started) {
                try {
                    for (const [key, value] of Object.entries(previous)) {
                        if (value === null) localStorage.removeItem(key);
                        else localStorage.setItem(key, value);
                    }
                } catch { status("Import failed. The previous records are retained in the local import backup."); return; }
            }
            status("Import failed; your previous records were kept. " + error.message);
        }
    });
})();