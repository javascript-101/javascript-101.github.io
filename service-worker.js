var CACHE_NAME = 'index'
var urlsToCache = [
  '/',
  'index.html',
  'styles/styles.css',
  'images/icon-72x72.png',
  'images/icon-96x96.png',
  'images/icon-128x128.png',
  'images/icon-144x144.png',
  'images/icon-152x152.png',
  'images/icon-192x192.png',
  'images/icon-256x256.png',
  'images/icon-384x384.png',
  'images/icon-512x512.png',
  'images/background.jpg',
  'images/logo.svg',
  'images/favicons/apple-touch-icon-57x57.png',
  'images/favicons/apple-touch-icon-60x60.png',
  'images/favicons/apple-touch-icon-72x72.png',
  'images/favicons/apple-touch-icon-76x76.png',
  'images/favicons/apple-touch-icon-114x114.png',
  'images/favicons/apple-touch-icon-120x120.png',
  'images/favicons/apple-touch-icon-144x144.png',
  'images/favicons/apple-touch-icon-152x152.png',
  'images/favicons/apple-touch-icon-180x180.png',
  'images/favicons/apple-touch-icon.png',
  'images/favicons/favicon-16x16.png',
  'images/favicons/favicon-32x32.png',
  'images/favicons/favicon.ico',
  'images/favicons/safari-pinned-tab.svg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', event => {
  console.log(event.request.url)
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
