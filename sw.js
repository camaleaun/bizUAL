/*global self,caches*/
var version = 'v9';

self.oninstall = function (event) {
  'use strict';
  event.waitUntil(
<<<<<<< HEAD
    caches.open('bizual-static-' + version).then(function (cache) {
=======
    caches.open('bizual-static-v8').then(function (cache) {
>>>>>>> origin/gh-pages
      return cache.addAll([
        './',
        'css/all.css',
        'css/fonts/MaterialIcons-Regular.eot',
        'css/fonts/MaterialIcons-Regular.woff',
        'css/fonts/MaterialIcons-Regular.woff2',
        'css/fonts/MaterialIcons-Regular.ttf',
        'js/page.js',
        'js/material.min.js',
        'js/aceual.js',
        'imgs/icon.png'
      ]);
    })
  );
};

self.onfetch = function (event) {
  'use strict';
  event.respondWith(
    caches.match(event.request)
  );
};

self.onactivate = function activator (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(version) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
};
