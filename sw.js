const CACHE_NAME = 'ems-national-v29';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // A plain fetch() keeps GitHub Pages' 10-minute HTML cache, so a desktop
  // that opened the site just before a deploy can keep the old page.
  const req = e.request.mode === 'navigate' ? fetch(e.request, { cache: 'no-cache' }) : fetch(e.request);
  e.respondWith(req.catch(() => caches.match(e.request.mode === 'navigate' ? './index.html' : e.request)));
});
