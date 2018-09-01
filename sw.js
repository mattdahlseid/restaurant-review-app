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
    console.log('Service Worker Installed!');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});


self.addEventListener('activate', e => {
    console.log('Service Worker Activated');
    // remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker Clearing Old Cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// Call fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});