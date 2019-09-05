import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './routers'

Vue.use(Router)

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap // 非登陆即可使用路由
})
