import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export const constantRouterMap = [{
  path: '',
  redirect: 'company',
  component: _import('layout/layout'),
  children: [{
    path: 'company',
    component: _import('company/index'),
    name: '企业信息'
  }, {
    path: 'stringLength',
    component: _import('stringLength/index'),
    name: '计算字符长度'
  }, {
    path: 'base64Transform',
    component: _import('base64Transform/index'),
    name: '图片转base64'
  }]
}]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap // 非登陆即可使用路由
})
