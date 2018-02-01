//define what service worker does here
self.addEventListener('fetch', function(event) {
  console.log(event.request);
});