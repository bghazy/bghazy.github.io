// Service Worker for performance optimization
const CACHE_NAME = 'ghazi-portfolio-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/js/case-studies-slider.js',
  '/js/translations.js',
  '/images/edf-logo.svg',
  '/images/sncf-logo.svg',
  '/images/stellantis-logo.svg',
  '/images/sg-logo.svg',
  '/images/laposte-logo.svg',
  '/images/bein-logo.svg'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Service worker cache failed:', error);
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', function(event) {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request).then(function(response) {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});