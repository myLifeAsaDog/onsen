const version = '1.0'
const timeStamp = Date.now()

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('onsen').then(cache => {
      return cache
        .addAll([
          `/onsen/`,
          `/onsen/index.html?timestamp=${timeStamp}`,
          `/onsen/css/onsen.css?timestamp=${timeStamp}`,
          `/onsen/js/onsen.js?timestamp=${timeStamp}`
        ])
        .then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request)
    })
  )
})
