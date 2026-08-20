const CACHE = "promptshelf-mobile-v019-rc2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./rc2.css",
  "./rc2.js"
];

const RC2_NAV = `<nav id="mobileTabBar" class="mobile-tab-bar" aria-label="PromptShelf navigation" hidden>
<button id="tabAllButton" class="mobile-tab-button active" type="button" data-mobile-tab="all" aria-current="page"><span class="mobile-tab-icon" aria-hidden="true">⌂</span><span>All</span></button>
<button id="tabRecentButton" class="mobile-tab-button" type="button" data-mobile-tab="recent" aria-current="false"><span class="mobile-tab-icon" aria-hidden="true">◷</span><span>Recent</span></button>
<button id="tabFavoritesButton" class="mobile-tab-button" type="button" data-mobile-tab="favorites" aria-current="false"><span class="mobile-tab-icon" aria-hidden="true">★</span><span>Favorites</span></button>
<button id="tabFoldersButton" class="mobile-tab-button" type="button" data-mobile-tab="folders" aria-current="false"><span class="mobile-tab-icon" aria-hidden="true">▤</span><span>Folders</span></button>
</nav>`;

function enhanceHtml(input) {
  let html = String(input || "");
  if (html.includes("promptshelf-rc2-marker")) return html;
  html = html.replaceAll("RC1", "RC2");
  html = html.replace(
    '<link rel="icon" href="./icon.svg">',
    '<link rel="apple-touch-icon" href="./icon.svg">\n<link rel="icon" href="./icon.svg">'
  );
  html = html.replace(
    "</head>",
    '<link rel="stylesheet" href="./rc2.css">\n<meta name="promptshelf-rc2-marker" content="true">\n</head>'
  );
  html = html.replace(
    "</body>",
    `${RC2_NAV}\n<script src="./rc2.js"></script>\n</body>`
  );
  return html;
}

async function transformNavigation(response) {
  if (!response) return response;
  const text = await response.text();
  const headers = new Headers(response.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.delete("content-length");
  return new Response(enhanceHtml(text), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE && key.startsWith("promptshelf-mobile-"))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          caches.open(CACHE).then(cache => cache.put("./index.html", response.clone()));
        }
        return transformNavigation(response);
      } catch {
        const cached = await caches.match("./index.html");
        return transformNavigation(cached);
      }
    })());
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
        }
        return response;
      });
    })
  );
});
