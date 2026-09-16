const CACHE_NAME = 'aroma-cacao-v1';
const urlsToCache = [
  '../index.html',
  '../nosotros.html',
  '../carta.html',
  '../reservas.html',
  '../contacto.html',
  '../css/styles.css',
  '../js/main.js',
  '../js/cart.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});