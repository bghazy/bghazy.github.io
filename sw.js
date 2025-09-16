// Service Worker for performance optimization
const CACHE_NAME = 'ghazi-portfolio-v2';
const STATIC_CACHE_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year
const DYNAMIC_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week

const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/js/case-studies-slider.js',
  '/js/translations.js',
  '/translations/en.json',
  '/translations/fr.json',
  '/translations/ar.json',
  '/translations/es.json',
  // Images
  '/images/edf-logo.svg',
  '/images/sncf-logo.svg',
  '/images/stellantis-logo.svg',
  '/images/seloger-logo.svg',
  '/images/sg-logo.svg',
  '/images/laposte-logo.svg',
  '/images/bein-logo.svg',
  '/images/aws-certified-solutions-architect.png',
  '/images/hortonworks-hdp-certified.png',
  '/images/epfl-functional-programming.png',
  '/images/arnauld-recommendation.png',
  '/images/amine-recommendation.png',
  '/images/antoine-recommendation.png',
  '/images/maryline-recommendation.png'
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

// Fetch event - serve from cache with network fallback and cache optimization
self.addEventListener('fetch', function(event) {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Determine caching strategy based on resource type
  const url = new URL(event.request.url);
  const isImage = /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(url.pathname);
  const isStatic = /\.(css|js|json)$/i.test(url.pathname) || isImage;

  if (isStatic) {
    // Cache first strategy for static assets (images, CSS, JS)
    event.respondWith(
      caches.match(event.request).then(function(cachedResponse) {
        if (cachedResponse) {
          // Check if cache is expired for dynamic content
          const cachedDate = new Date(cachedResponse.headers.get('date') || 0);
          const now = new Date();
          const maxAge = isImage ? STATIC_CACHE_DURATION : DYNAMIC_CACHE_DURATION;

          if (now - cachedDate < maxAge) {
            return cachedResponse;
          }
        }

        // Fetch from network and cache
        return fetch(event.request).then(function(networkResponse) {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(function() {
          // Return stale cache if network fails
          return cachedResponse;
        });
      })
    );
  } else {
    // Network first strategy for HTML pages
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  }
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