// Install service worker
self.addEventListener('install', evt => {
    console.log('Service work has been installed')
});

// Activate service worke
self.addEventListener('activate', evt => {
    console.log('service  worker has bee activate')
});