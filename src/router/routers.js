const _import = require('./_import_' + process.env.NODE_ENV)
export const constantRouterMap = [{
  path: '',
  redirect: 'company',
  component: _import('layout/layout'),
  children: [{
    path: 'company',
    component: _import('company/index'),
    name: '企业信息',
    icon: 'el-icon-search',
    meta: {
      menu_key: '1',
    }
  }, {
    path: 'stringLength',
    component: _import('stringLength/index'),
    name: '计算字符长度',
    icon: 'el-icon-document',
    meta: {
      menu_key: '2',
    }
  }, {
    path: 'base64Transform',
    component: _import('base64Transform/index'),
    name: '图片转base64',
    icon: 'el-icon-setting',
    meta: {
      menu_key: '3',
    }
  }]
}]
