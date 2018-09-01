// check if service worker is supported, and if so, register sw
if ('serviceWorker' in navigator) {
    console.log('Service worker supported');
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(reg => console.log('service worker is registered!', reg))
        .catch(err => console.log('Service Worker: Error', err))
    })
  } 