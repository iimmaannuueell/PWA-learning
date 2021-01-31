const staticCacheName = 'site-static-v2';
const dynamicCache = 'site-dynamic-v1';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/materialize.min.css',
    '/css/styles.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// Install service worker
self.addEventListener('install', evt => {
    // console.log('Service work has been installed')
    evt.waitUntil(
            caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets)
        })
    );
});

// Activate service worker
self.addEventListener('activate', evt => {
    // console.log('service  worker has bee activate')
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys)
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone())
                    return fetchRes;
                })
            })
        })
    );
});