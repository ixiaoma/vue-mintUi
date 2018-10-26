import Vue from 'vue'
import Router from 'vue-router'
import {appRouter,detailRouter} from './router'
import {Toast} from 'mint-ui'
Vue.use(Router)

export const router =  new Router({
  mode:'hash',//history开启后将不能刷新页面
  routes: appRouter
})
router.beforeEach((to, from, next) => {//路由拦截
  if(to.name != 'login'){
    if(!localStorage.getItem('loginFlag')){
      Toast('请先登录')
      next({
        replace:true,
        name:'login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
