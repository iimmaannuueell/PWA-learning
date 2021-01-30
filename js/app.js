if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((req) => console.log('service worker registered', req))
        .catch((err) => console.log('service worker not register', err))
}