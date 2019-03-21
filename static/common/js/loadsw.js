
function register(sw,scope){
    window.addEventListener('load', function () {
        navigator.serviceWorker.register(sw, {scope})
            .then(function (registration) {
                // 注册成功
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function (err) {

                // 注册失败:(
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
function sub(){
    Notification.requestPermission().then(grant => {
        if (Notification.permission === 'denied') {
            console.log('Permission for Notifications was denied');
        }
    })
}
function sync(swRegistration){
    swRegistration.sync.register('qieSync');
}
export default function(sw,scope){
    if ('serviceWorker' in navigator) {
        // serviceWorker.getRegistration 处于草案阶段 用于获取当前作用域 serviceworker 信息
        if(navigator.serviceWorker){
            navigator.serviceWorker.getRegistration(scope).then(function(registration) {
                if(registration){
                    console.log(registration)
                    return ;
                }else{
                    register(sw,scope)
                }
                
            });
        }else{
            register(sw,scope)
        }
        // register(sw,scope)
        // navigator.serviceWorker.ready.then(function(swRegistration) {
        //     sync(swRegistration)
        // })

        sub()
        // var a = new Notification('企鹅体育想要显示通知',{
        //     body:'企鹅体育有你想要',
        //     tag:'div',
        //     icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553071853147&di=87f94a5dc1f20b22eb7ded1e7f795b6e&imgtype=0&src=http%3A%2F%2Ff2.dn.anqu.com%2Fdown%2FZjNlYQ%3D%3D%2Fallimg%2F120728%2F1-120HP03412.jpg',
        //     image:'http://static.qiecdn.com/static-mobile/03081859/common/res/index/logo-new.png'
        // })
    }
}
