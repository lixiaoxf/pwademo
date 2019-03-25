
const cacheName = 'qie-cache-ws-v1';

this.addEventListener('install', function (event
    ) {
    // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
    event.waitUntil(
        // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
        caches.open(cacheName).then(function (cache) {
            // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
            self.skipWaiting();
            cache.addAll([
                '/ssr/index/index.css',
                '/ssr/index/index.js',
                '/ssr/news/index.css',
                '/ssr/news/index.js',
                '/ssr/detail/index.css',
                '/ssr/detail/index.js',
                '/common/vendors.chunk.js',
            ]);
            return cache.addAll([
                '/ssr',
                '/ssr/news',
                '/ssr/detail/'
            ]);
        })
    );
});

this.addEventListener('push', function(res) {
    const resData = res.data.text();
    this.registration.showNotification('消息推送',{
        body:resData,
        icon:'http://static.qiecdn.com/static-mobile/03081859/common/res/index/logo-new.png'
    })
}) 

this.addEventListener('sync', function(res) {
    const resData = res.tag;
    this.registration.showNotification('同步事件',{
        body:resData,
        icon:'http://static.qiecdn.com/static-mobile/03081859/common/res/index/logo-new.png'
    })
}) 
function _fetch(event){
    var request = event.request.clone(); // 把原始请求拷过来
    return fetch(request).then(function (httpRes) {

        // http请求的返回已被抓到，可以处置了。

        // 请求失败了，直接返回失败的结果就好了。。
        if (!httpRes || httpRes.status !== 200) {
            return httpRes;
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone();
        caches.open(cacheName).then(function (cache) {
            cache.put(event.request, responseClone);
        })

        return httpRes;
    });
}
this.addEventListener('fetch', function (event) {
    if(event.request.method=='GET'){
        event.respondWith(
            caches.match(event.request).then(function (response) {
                // 来来来，代理可以搞一些代理的事情
                // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
                if (response) {
                    _fetch(event)
                    return response;
                }
                // 如果 service worker 没有返回，那就得直接请求真实远程服务
                
                return _fetch(event)
            })
        );
    }
});
self.addEventListener('activate', function(e) {
    return self.clients.claim();
  });