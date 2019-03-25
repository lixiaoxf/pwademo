function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i)  {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}
function notifiRegister(){
   return  Notification.requestPermission().then(grant => {
        if (Notification.permission === 'denied') {
            console.log('Permission for Notifications was denied');
        }
    })
}
function pushRegister(registration){
    if ('PushManager' in window) {
        return registration.pushManager.getSubscription().then(function(subscription){
            // if (subscription) {
            //     return subscription;
            // }
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                  'BBTV_sGMbDL47vda7QEleoJiiEV0iBGGHwXPeZFMgFLlr8OTFlF-l-7abUpy5bgQK70_SMVoITkNXPvm4q38pjM'
                )
            };
            return registration.pushManager.subscribe(subscribeOptions).then(function(subscription){
                let sub = subscription.toJSON()
               
                fetch('/pwapush/save',{
                    method: 'POST',
                    mode: 'cors',
                    credentials: "include",
                    headers: {
                        'x-csrf-token': getCookie('csrfToken'),
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(sub)
                }).then(res=>{
                    console.log(res)
                })  
            })
        })
       
      }
    return ;  
}
export default function(sw,scope){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(sw, {scope})
        navigator.serviceWorker.ready.then(function(registration) {
            pushRegister(registration)
        })
        notifiRegister()
    }
}
