const CACHE_NANE = 'onsen-v1.0'

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NANE).then(cache => {
      return cache
        .addAll([`./`, `./index.html`, `./css/onsen.css`, `./js/onsen.js`])
        .then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response

      /* fetchとcacheでrequestが2個必要になる */
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        /* fetchとcacheでrequestが2個必要になる */
        const responseToCache = response.clone()

        caches.open(CACHE_NANE).then(cache => {
          cache.put(event.request, responseToCache)
        })
        return response
      })
    })
  )
})
