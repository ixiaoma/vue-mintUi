import Vue from 'vue'
import Router from 'vue-router'
import {appRouter} from './router'

Vue.use(Router)

export const router =  new Router({
  mode:'hash',
  routes: appRouter
})
router.beforeEach((to, from, next) => {
  if(to.name == 'HelloWorld'){
    alert('路由拦截')
  }
  next()
})
