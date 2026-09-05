/* Service worker for the CEE Prep Dashboard PWA.
   Strategy: network-first for same-origin GET requests, so a fresh deploy is
   NEVER masked by the cache. The cache is only an offline fallback. Versioned
   (?v=N) assets simply create new cache entries; old ones are pruned on activate.
   Cross-origin requests (MathJax, Chart.js, Google Fonts) are left untouched. */

const CACHE = "cee-pwa-v1";
const CORE = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => {})
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const req = event.request;
    if (req.method !== "GET") return;

    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return; // let CDN/fonts hit the network directly

    event.respondWith(
        fetch(req)
            .then((res) => {
                if (res && res.ok && res.type === "basic") {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
                }
                return res;
            })
            .catch(() =>
                caches.match(req).then(
                    (hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())
                )
            )
    );
});
