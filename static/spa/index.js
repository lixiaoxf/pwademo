import Vue from 'vue';
import app from './app.vue'
import 'rem';
import router from './router'
import loadsw from '@/common/js/loadsw';
loadsw('/sw-spa.js','/spa')
Vue.config.prodcutionTip = false;
new Vue({
    router,
    render: h => h(app), 
}).$mount('#app')