
const cacheName = 'qie-cache-ws-v1';
const dataCacheName = 'qie-cache-data-ws-v1';
this.addEventListener('install', function (event
    ) {
  // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
  event.waitUntil(
      // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
      caches.open(cacheName).then(function (cache) {
          // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
          cache.addAll([
            '/api/v1/videos',
            '/api/v1/news'
          ]);
          return cache.addAll([
             '/spa',
             '/spa/index.css',
             '/spa/index.js'
          ]);
      })
  );
});

this.addEventListener('fetch', function (e) {
    var dataUrl = '/api/v1/';
    if (e.request.url.indexOf(dataUrl) > -1) {
        e.respondWith(
          caches.open(dataCacheName).then(function(cache) {
            return fetch(e.request).then(function(response){
              cache.put(e.request.url, response.clone());
              return response;
            });
          })
        );
      } else {
        e.respondWith(
          caches.match(e.request).then(function(response) {  
            return response || fetch(e.request);
          })
        );
      }
});
self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
            if (key !== cacheName && key !== dataCacheName) {
                return caches.delete(key);
              }
          }));
        })
      );
    // return self.clients.claim();
  });