const VERSION = new URL(self.location.href).searchParams.get("v") || "local";
const CACHE = "cee-pwa-runtime-" + VERSION;
const OFFLINE = "cee-pwa-offline-" + VERSION;
const SCOPE = new URL(self.registration.scope);
const MANIFEST = new URL(".offline-manifest", SCOPE).href;
const CORE = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./icons/icon.svg",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/apple-touch-icon.png"
];
let download = null;

function retiredSource(url) {
    if (url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return false;
    const file = url.pathname.slice(SCOPE.pathname.length);
    return /^assets\/cee-notes\/(?:biology|quick-revision)\/\d{3}\.webp$/.test(file)
        || /^js\/cee-notes\/[^/]+\.js$/.test(file);
}

function allowed(url) {
    if (url.origin === SCOPE.origin) return url.pathname.startsWith(SCOPE.pathname) && !url.hash && !retiredSource(url);
    return url.protocol === "https:" && (url.hostname === "fonts.googleapis.com" && url.pathname === "/css2"
        || url.hostname === "fonts.gstatic.com" && url.pathname.startsWith("/s/")
        || url.hostname === "cdn.jsdelivr.net" && /^\/npm\/(?:mathjax@3(?:\.\d+\.\d+)?\/es5\/|chart\.js@4\.4\.1\/dist\/)/.test(url.pathname));
}

function validFile(response, url) {
    if (!response.ok || response.type === "opaque") return false;
    const pathname = new URL(url).pathname;
    const type = response.headers.get("Content-Type") || "";
    const types = { js: /javascript|ecmascript/i, css: /text\/css/i, html: /text\/html/i,
        webmanifest: /json/i, svg: /image\/svg\+xml/i, png: /image\/png/i, webp: /image\/webp/i,
        woff2: /font|woff|octet-stream/i, woff: /font|woff|octet-stream/i, ttf: /font|octet-stream/i };
    const expected = pathname.endsWith("/") ? types.html : types[pathname.split(".").pop()];
    return !expected || expected.test(type);
}

async function cached(request) {
    for (const name of [OFFLINE, CACHE, ...(await caches.keys()).filter(name => name.startsWith("cee-pwa-") && name !== OFFLINE && name !== CACHE)]) {
        const cache = await caches.open(name);
        const response = await cache.match(request);
        if (response) return response;
    }
}

async function offlineStatus() {
    const cache = await caches.open(OFFLINE);
    const response = await cache.match(MANIFEST);
    if (!response) return { state: "empty", done: 0, total: 0 };
    const manifest = await response.json();
    const stored = await Promise.all(manifest.urls.map(url => cache.match(url)));
    const done = stored.filter(Boolean).length;
    return { state: download ? "downloading" : manifest.complete && done === manifest.urls.length ? "ready" : "partial",
        done, total: manifest.urls.length, updatedAt: manifest.updatedAt };
}

async function downloadOffline(urls, port) {
    if (download) { port.postMessage({ ...(await offlineStatus()), error: "A download is already running." }); return; }
    if (!Array.isArray(urls) || !urls.length || urls.length > 2000) throw new Error("Invalid offline file list.");
    const files = [...new Set(urls.map(value => new URL(value, SCOPE).href))];
    if (files.some(value => !allowed(new URL(value)))) throw new Error("An offline file is outside this app.");
    const controller = new AbortController();
    download = controller;
    const manifest = { version: VERSION, urls: files, complete: false, updatedAt: null };
    let done = 0;
    let cursor = 0;
    const report = state => port.postMessage({ state, done, total: files.length });
    try {
        const cache = await caches.open(OFFLINE);
        await cache.put(MANIFEST, new Response(JSON.stringify(manifest), { headers: { "Content-Type": "application/json" } }));
        report("downloading");
        const workers = await Promise.allSettled(Array.from({ length: Math.min(4, files.length) }, async () => {
            while (cursor < files.length && !controller.signal.aborted) {
                const url = files[cursor++];
                if (!(await cache.match(url))) {
                    const timeout = setTimeout(() => controller.abort(), 60000);
                    try {
                        const response = await fetch(url, { mode: "cors", credentials: "same-origin", cache: "reload", signal: controller.signal });
                        if (!validFile(response, url)) throw new Error("Could not download " + new URL(url).pathname);
                        await cache.put(url, response);
                    } finally { clearTimeout(timeout); }
                }
                done++;
                report("downloading");
            }
        }));
        const failure = workers.find(worker => worker.status === "rejected");
        if (controller.signal.aborted) { report("partial"); return; }
        if (failure) throw failure.reason;
        manifest.complete = true;
        manifest.updatedAt = new Date().toISOString();
        await cache.put(MANIFEST, new Response(JSON.stringify(manifest), { headers: { "Content-Type": "application/json" } }));
        report("ready");
    } finally { download = null; }
}

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(CORE)).catch(() => {})
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil((async () => {
        try {
            for (const name of (await caches.keys()).filter(name => name.startsWith("cee-pwa-"))) {
                const cache = await caches.open(name);
                for (const request of await cache.keys()) {
                    if (retiredSource(new URL(request.url))) await cache.delete(request);
                }
                const response = await cache.match(MANIFEST);
                if (response) {
                    const manifest = await response.json();
                    if (manifest.urls?.some(url => retiredSource(new URL(url)))) await cache.delete(MANIFEST);
                }
            }
        } catch {}
        await self.clients.claim();
    })());
});

self.addEventListener("message", event => {
    const port = event.ports[0];
    if (!port || !event.source?.url?.startsWith(SCOPE.href)) return;
    event.waitUntil((async () => {
        try {
            if (event.data.type === "CEE_OFFLINE_DOWNLOAD") await downloadOffline(event.data.urls, port);
            else if (event.data.type === "CEE_OFFLINE_CANCEL") { download?.abort(); port.postMessage(await offlineStatus()); }
            else if (event.data.type === "CEE_OFFLINE_STATUS") port.postMessage(await offlineStatus());
        } catch (error) {
            port.postMessage({ state: "error", error: error.name === "QuotaExceededError"
                ? "Not enough storage. Free some device space and retry." : error.message });
        }
    })());
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method === "GET" && retiredSource(new URL(request.url))) {
        event.respondWith(new Response("Not found", { status: 404 }));
        return;
    }
    if (request.method !== "GET" || !allowed(new URL(request.url))) return;
    event.respondWith((async () => {
        let fallback;
        try {
            fallback = await cached(request) || (request.mode === "navigate" && await cached(new URL("index.html", SCOPE).href));
        } catch {}
        const controller = new AbortController();
        const timeout = fallback ? setTimeout(() => controller.abort(), 5000) : null;
        try {
            const response = await fetch(request, { signal: controller.signal });
            if (validFile(response, request.url)) {
                if (fallback) await response.clone().arrayBuffer();
                await caches.open(CACHE).then(cache => cache.put(request, response.clone())).catch(() => {});
            }
            if (!validFile(response, request.url) && response.type !== "opaque") return fallback || response;
            return response;
        } catch {
            return fallback || Response.error();
        } finally { clearTimeout(timeout); }
    })());
});
