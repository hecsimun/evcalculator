self.addEventListener('install', event => {
console.log('Installed');
});
 
self.addEventListener('fetch', event => {
event.respondWith(fetch(event.request));
});
