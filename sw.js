const cacheName = 'v1';

// assets to be cached
const cacheAssets = [
    'index.html',
    'restaurant.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/dbhelper.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1_450w.jpg',
    '/img/2_450w.jpg',
    '/img/3_450w.jpg',
    '/img/4_450w.jpg',
    '/img/5_450w.jpg',
    '/img/6_450w.jpg',
    '/img/7_450w.jpg',
    '/img/8_450w.jpg',
    '/img/9_450w.jpg',
    '/img/10_450w.jpg',
    '/img/1_800w.jpg',
    '/img/2_800w.jpg',
    '/img/3_800w.jpg',
    '/img/4_800w.jpg',
    '/img/5_800w.jpg',
    '/img/6_800w.jpg',
    '/img/7_800w.jpg',
    '/img/8_800w.jpg',
    '/img/9_800w.jpg',
    '/img/10_800w.jpg'
];


// Call install event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});


self.addEventListener('activate', e => {
    // remove old cache if new cache is available
    e.waitUntil(caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// Call fetch Event
self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});