import axios from 'axios'
export default {
    cacheNService(path,cb){
        if ('caches' in window) {
            caches.match(path).then(function(response) {
                if (response) {
                    response.json().then(function updateFromCache(json) {
                        cb(json)
                    });
                }
            });
        }
        axios.get(path).then(res=>{
            cb(res.data)
        })
    }
}