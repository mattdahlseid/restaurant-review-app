const staticCacheName = 'mwsApp-static-v1';

const cacheAssets = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
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
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(cacheAssets);
            })
            .catch(err => {
                console.log('Error caching assets ', err);
            })
    );
})

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('mwsApp') &&
                           cacheName != staticCacheName;
                }).map(cacheName => {
                    return cache.delete(cacheName);
                })
            );
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.open('mwsApp-static-v1')
        .then(cache => {
            return cache.match(e.request)
            .then(response => {
                let fetchPromise = fetch(e.request)
                .then(networkResponse => {
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        })
    )
})