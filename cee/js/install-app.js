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

    // Register the service worker on secure origins only (skipped on file://).
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
        window.addEventListener("load", function () {
            navigator.serviceWorker.register((btn.dataset.serviceWorker || "service-worker.js") + workerVersion).catch(function () { });
        });
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
