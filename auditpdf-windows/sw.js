const CACHE='auditpdf-windows-v0.1.0';
const LOCAL=[
  './','./index.html','./manifest.json','./loader.js',
  './favicon-16.png','./favicon-32.png','./icon-192.png','./icon-512.png',
  './payload-01.js','./payload-02.js','./payload-03.js','./payload-04.js',
  './payload-05.js','./payload-06.js','./payload-07.js','./payload-08.js',
  './payload-09.js','./payload-10.js','./payload-11.js','./payload-12.js',
  './payload-13.js','./payload-14.js',
  './tail-01.js','./tail-02.js','./tail-03.js','./tail-04.js',
  './tail-05.js','./tail-06.js','./tail-07.js'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(LOCAL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith('auditpdf-windows-')&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(
    caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }))
  );
});
