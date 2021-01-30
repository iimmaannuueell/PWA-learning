// Install service worker
self.addEventListener('install', evt => {
    console.log('Service work has been installed')
});

// Activate service worker
self.addEventListener('activate', evt => {
    console.log('service  worker has bee activate')
});

self.addEventListener('fetch', evt => {
    console.log('fetch event', evt)
});