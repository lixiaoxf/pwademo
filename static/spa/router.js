
import Vue from 'vue'
import Router from 'vue-router'

import page from '@/spa/page/index.vue'
import noBottom from '@/spa/page/noBottom.vue'

import videos from '@/spa/page/content/index.vue'
import news from '@/spa/page/content/news.vue'
import detail from '@/spa/page/content/detail.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'home',
      component: page,
      children:[
        {
          path:'',
          redirect:'videos'
        },
        {
          path:'videos',
          name:'videos',
          component: videos
        },
        {
          path:'news',
          name:'news',
          component: news
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: noBottom,
      children:[
        {
          path:'',
          component: detail
        }
      ]
    },
  ]
})
