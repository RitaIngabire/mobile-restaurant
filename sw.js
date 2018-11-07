/*
 * The Service Worker
 */

console.log('Registered');
var CACHE_NAME = 'my-site-cache';
const urlsToCache = [
    "/",
    "/index.html",
    "/restaurant.html",    
    "/manifest.json",
    "/README.md",
    "/favicon.ico",
    "/css/styles.css",
    "/sw.js",
    "js/dbhelper.js",
    "js/main.js",
    "js/restaurant_info.js",
    "js/registersw.js",
    "data/restaurants.json",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",    
    "img/map.png",
    "img/favicon.png"    
  ];  
  
/*
 * Fill up the cache with the Application files 
 */
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
});
  
  
/*
 * Requests to cache 
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});


  /*
   * Reference for setting up service worker
   * https://goo.gl/e7Fbd2
   */