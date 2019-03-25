# pwa-new



## QuickStart



pwademo 快速开始

```bash
$ npm i
$ npm run start
$ open http://127.0.0.1:7001/ssr
```

停止 
npm run stop 

开发
npm run dev 开服务 并监听
npm run watch 开启静态资源 监听

push 控制输出台 用于测试 push 推送 推送之前请先访问 http://127.0.0.1:7001/ssr 获取通知权限
http://127.0.0.1:7001/pwapush/view

SSR demo
http://127.0.0.1:7001/ssr
使用的缓存策略：发送请求 如果缓存中有资源 那就是使用缓存资源 然后发送请求更新缓存资源

SPA demo
http://127.0.0.1:7001/spa
使用的缓存策略：发送请求 如果缓存中有资源 那就是使用缓存资源 然后发送请求更新缓存资源 等新资源返回就直接刷新数据