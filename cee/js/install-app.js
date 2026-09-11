/* Install-app button + PWA service-worker registration.
   The button is always visible (unless the app is already installed):
   - If the browser fires `beforeinstallprompt` (Chrome/Edge/Android), clicking
     it shows the native install prompt.
   - Otherwise (iOS Safari, Firefox, or before the event fires) it shows short
     platform-specific instructions in a small dialog. */
(function () {
    "use strict";

    var btn = document.getElementById("installAppBtn");
    if (!btn) return;
    var script = document.currentScript;
    var workerVersion = script ? new URL(script.src).search : "";
    var offlineButton = document.getElementById("ceeOfflineOpen");
    var offlineState = { state: "checking" };
    var offlineRegistration = null;
    var offlinePolling = null;

    // Register the service worker on secure origins only (skipped on file://).
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
        window.addEventListener("load", function () {
            navigator.serviceWorker.register((btn.dataset.serviceWorker || "service-worker.js") + workerVersion).then(activeRegistration).then(function (registration) {
                offlineRegistration = registration;
                refreshOffline();
            }).catch(function () {
                showOfflineState({ state: "unavailable", error: "Offline storage could not be started. Reload while online to retry." });
            });
        });
    }

    function activeRegistration(registration) {
        var worker = registration.installing || registration.waiting || registration.active;
        if (!worker) return Promise.reject(new Error("No service worker is available."));
        if (worker.state === "activated") return Promise.resolve(registration);
        return new Promise(function (resolve, reject) {
            var finish = function (error) {
                clearTimeout(timer);
                worker.removeEventListener("statechange", changed);
                if (error) reject(error); else resolve(registration);
            };
            var changed = function () {
                if (worker.state === "activated") finish();
                else if (worker.state === "redundant") finish(new Error("The offline update could not be installed."));
            };
            var timer = setTimeout(function () { finish(new Error("The offline update timed out.")); }, 20000);
            worker.addEventListener("statechange", changed);
            changed();
        });
    }

    if (offlineButton) {
        offlineButton.addEventListener("click", function () {
            document.getElementById("ceeOfflineDialog").showModal();
            refreshOffline();
        });
        document.getElementById("ceeOfflineClose").addEventListener("click", function () { document.getElementById("ceeOfflineDialog").close(); });
        document.getElementById("ceeOfflineSave").addEventListener("click", async function () {
            showOfflineState({ state: "preparing" });
            try {
                var urls = await offlineFiles();
                if (navigator.storage?.persist) navigator.storage.persist().catch(function () {});
                await sendOffline("CEE_OFFLINE_DOWNLOAD", { urls: urls }, showOfflineState);
            } catch (error) { showOfflineState({ state: "error", error: error.message }); }
        });
        document.getElementById("ceeOfflineCancel").addEventListener("click", async function () {
            try { await sendOffline("CEE_OFFLINE_CANCEL"); await refreshOffline(); }
            catch (error) { showOfflineState({ state: "error", error: error.message }); }
        });
        window.addEventListener("online", refreshOffline);
        window.addEventListener("offline", function () { showOfflineState(offlineState); });
        if ("serviceWorker" in navigator) navigator.serviceWorker.addEventListener("controllerchange", refreshOffline);
        showOfflineState("serviceWorker" in navigator && window.isSecureContext ? { state: "checking" }
            : { state: "unavailable", error: "Offline downloads require HTTPS or localhost. Open the hosted site while online." });
    }

    function showOfflineState(value) {
        if (!offlineButton) return;
        if (offlineRegistration?.active && new URL(offlineRegistration.active.scriptURL).search !== workerVersion) {
            value = { state: "unavailable", error: "An app update is ready. Reload before downloading offline files." };
        }
        offlineState = value;
        var busy = ["checking", "preparing", "downloading"].includes(value.state);
        var message = { checking: "Checking offline storage...", empty: "Not downloaded", preparing: "Preparing download...",
            downloading: "Downloading " + (value.done || 0) + " of " + (value.total || 0) + " files",
            partial: (value.done || 0) + " of " + (value.total || 0) + " files saved. Download incomplete.", ready: "Ready offline" }[value.state];
        document.getElementById("ceeOfflineStatus").textContent = value.error || message || "Download failed. Retry while online.";
        document.getElementById("ceeOfflineConnection").textContent = navigator.onLine ? "Online" : "Offline";
        document.getElementById("ceeOfflineLabel").textContent = value.state === "ready" ? "Ready offline" : value.state === "downloading" ? "Downloading..." : "Download offline";
        offlineButton.dataset.state = value.state;
        var progress = document.getElementById("ceeOfflineProgress");
        progress.hidden = !value.total;
        progress.max = value.total || 1;
        progress.value = value.done || 0;
        var save = document.getElementById("ceeOfflineSave");
        save.disabled = busy || value.state === "unavailable" || !navigator.onLine || !offlineRegistration;
        save.querySelector("span:last-child").textContent = value.state === "ready" ? "Update download" : ["partial", "error"].includes(value.state) ? "Resume download" : "Download all";
        document.getElementById("ceeOfflineCancel").hidden = value.state !== "downloading";
    }

    async function sendOffline(type, payload, progress) {
        if (!offlineRegistration?.active) throw new Error("Offline storage is not ready. Reload while online and retry.");
        return new Promise(function (resolve, reject) {
            var channel = new MessageChannel();
            var timer;
            var close = function () { clearTimeout(timer); channel.port1.close(); };
            var arm = function () {
                clearTimeout(timer);
                timer = setTimeout(function () { close(); reject(new Error("The download stopped responding. Reopen offline storage to resume.")); }, type === "CEE_OFFLINE_DOWNLOAD" ? 90000 : 15000);
            };
            channel.port1.onmessage = function (event) {
                var value = event.data;
                if (progress) progress(value);
                if (type === "CEE_OFFLINE_DOWNLOAD" && value.state === "downloading" && !value.error) { arm(); return; }
                close();
                resolve(value);
            };
            arm();
            offlineRegistration.active.postMessage({ type: type, ...payload }, [channel.port2]);
        });
    }

    async function refreshOffline() {
        if (!offlineButton || !offlineRegistration) return;
        clearTimeout(offlinePolling);
        try {
            var status = await sendOffline("CEE_OFFLINE_STATUS");
            showOfflineState(status);
            if (status.state === "downloading") offlinePolling = setTimeout(refreshOffline, 4000);
        } catch (error) { showOfflineState({ state: "error", error: error.message }); }
    }

    async function offlineFiles() {
        var catalog = window.CEE_STUDY_CATALOG;
        var base = new URL("./", location.href);
        var files = new Set([base.href, new URL("index.html", base).href]);
        var add = function (value) { files.add(new URL(value, base).href); };
        var styles = [...document.querySelectorAll('link[rel="stylesheet"][href]')];
        document.querySelectorAll('script[src], link[rel="stylesheet"], link[rel="manifest"], link[rel="icon"], link[rel="apple-touch-icon"]').forEach(function (element) {
            var url = new URL(element.src || element.href, base);
            if (url.origin === base.origin || ["cdn.jsdelivr.net", "fonts.googleapis.com"].includes(url.hostname)) add(url.href);
        });
        var manifest = await fetch(new URL("manifest.webmanifest", base)).then(function (response) {
            if (!response.ok) throw new Error("The app manifest could not be downloaded.");
            return response.json();
        });
        manifest.icons.forEach(function (image) { add(image.src); });
        catalog.questionFiles.forEach(function (file) { add(file + workerVersion); });
        catalog.topics.filter(function (topic) { return topic.ranges.length && topic.subject !== "Reference"; }).forEach(function (topic) {
            add("js/cee-notes/digital/" + topic.id + ".js" + workerVersion);
        });
        for (var style of styles) {
            var response = await fetch(style.href);
            if (!response.ok) throw new Error("The app styles could not be downloaded.");
            var sheet = new CSSStyleSheet();
            sheet.replaceSync(await response.text());
            for (var rule of sheet.cssRules) {
                if (rule.type !== CSSRule.FONT_FACE_RULE) continue;
                for (var match of rule.style.getPropertyValue("src").matchAll(/url\(["']?([^"')]+)["']?\)/g)) add(new URL(match[1], style.href).href);
            }
        }
        return [...files];
    }

    function isStandalone() {
        return window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone === true;
    }

    if (isStandalone()) {
        btn.hidden = true; // already installed — nothing to do
    }

    var deferred = null;

    window.addEventListener("beforeinstallprompt", function (e) {
        e.preventDefault();
        deferred = e;
        btn.hidden = false;
    });

    window.addEventListener("appinstalled", function () {
        deferred = null;
        btn.hidden = true;
    });

    btn.addEventListener("click", function () {
        if (deferred) {
            deferred.prompt();
            deferred.userChoice.then(function () { deferred = null; });
            return;
        }
        showHelp();
    });

    function capSvg() {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
            'stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>' +
            '<path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
    }

    function showHelp() {
        var ua = navigator.userAgent || "";
        var isiOS = /iphone|ipad|ipod/i.test(ua) ||
            (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
        var steps = isiOS
            ? "On iPhone or iPad: tap the <b>Share</b> button in Safari, then choose <b>Add to Home Screen</b>."
            : "Open your browser menu (\u22ee) and choose <b>Install app</b> or <b>Add to Home screen</b>. " +
              "On desktop Chrome or Edge, use the install icon in the address bar.";

        var dlg = document.getElementById("installHelpDlg");
        if (!dlg) {
            dlg = document.createElement("dialog");
            dlg.id = "installHelpDlg";
            dlg.className = "install-help";
            dlg.innerHTML =
                '<div class="ih-head"><span class="ih-ico">' + capSvg() + "</span>" +
                "<h3></h3></div>" +
                '<p id="ihSteps"></p>' +
                '<form method="dialog"><button class="ih-close" type="submit">Got it</button></form>';
            dlg.querySelector("h3").textContent = "Install " + (btn.dataset.appName || "CEE Prep");
            document.body.appendChild(dlg);
        }
        dlg.querySelector("#ihSteps").innerHTML = steps;
        if (typeof dlg.showModal === "function") {
            dlg.showModal();
        } else {
            dlg.setAttribute("open", "");
        }
    }
})();
