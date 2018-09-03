/* test if browser supports service worker
 * if so, register service worker
*/

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('../sw.js')
      .then((reg) => {
        console.log('Service Worker Registered', reg)
      })
      .catch((err) => {
        console.log('Service Worker Error', err)
      })
  }