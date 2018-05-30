import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend'
import Disc from '@/components/disc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',  
      redirect: '/recommend' // 重定向，默认进来根路径指向推荐页面
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path:'/disc',  
      component: Disc
    },
  ]
})
