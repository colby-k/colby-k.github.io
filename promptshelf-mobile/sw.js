const CACHE = "promptshelf-mobile-v019-rc4-favoritefix1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./rc4.css?v=favoritefix1",
  "./rc4.js?v=favoritefix1"
];

function enhanceHtml(input) {
  let html = String(input || "");
  html = html.replaceAll("Mobile Library · v0.19 RC3", "Mobile Library · v0.19 RC4");
  html = html.replaceAll("Read-only RC3", "RC4 · Favorites sync");
  html = html.replace(
    "RC3 reads and caches your library. It cannot upload, edit, delete, move, or overwrite prompts.",
    "RC4 caches your library locally. Favorite/unfavorite can sync to Google Drive with a conflict check; other changes remain read-only."
  );
  html = html.replace(
    "Clearing the mobile cache affects only this device. It does not change Google Drive or desktop PromptShelf.",
    "RC4 can write only Favorite/Unfavorite. It verifies the current Drive library before saving and refuses to overwrite a newer desktop change."
  );
  html = html.replace(
    'b.className="card";b.type="button";',
    'b.className="card";b.type="button";b.dataset.promptId=p.id;'
  );

  // PromptShelf Schema 3 uses parentId. Older backups used parentFolderId.
  html = html.replaceAll('f=folder(f.parentFolderId)', 'f=folder(f.parentId??f.parentFolderId)');
  html = html.replaceAll('String(f.parentFolderId||"")', 'String((f.parentId??f.parentFolderId)||"")');
  html = html.replaceAll('String(x.parentFolderId||"")', 'String((x.parentId??x.parentFolderId)||"")');

  if (html.includes('href="./rc4.css"')) {
    html = html.replace('href="./rc4.css"', 'href="./rc4.css?v=favoritefix1"');
  } else if (!html.includes('href="./rc4.css?v=favoritefix1"')) {
    html = html.replace("</head>", '<link rel="stylesheet" href="./rc4.css?v=favoritefix1">\n</head>');
  }
  if (html.includes('src="./rc4.js"')) {
    html = html.replace('src="./rc4.js"', 'src="./rc4.js?v=favoritefix1"');
  } else if (!html.includes('src="./rc4.js?v=favoritefix1"')) {
    html = html.replace("</body>", '<script src="./rc4.js?v=favoritefix1"></script>\n</body>');
  }
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
        keys.filter(key => key !== CACHE && key.startsWith("promptshelf-mobile-")).map(key => caches.delete(key))
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
        const response = await fetch("./index.html", { cache: "no-store" });
        if (response.ok) caches.open(CACHE).then(cache => cache.put("./index.html", response.clone()));
        return transformNavigation(response);
      } catch {
        return transformNavigation(await caches.match("./index.html"));
      }
    })());
    return;
  }

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then(response => {
        if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
