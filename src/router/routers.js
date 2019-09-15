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
    path: 'court-blacklist',
    component: _import('court-blacklist/index'),
    name: '法院被执行人',
    icon: 'el-icon-user',
    meta: {
      menu_key: '2',
    }
  }, {
    path: 'string-length',
    component: _import('string-length/index'),
    name: '字符串长度计算',
    icon: 'el-icon-setting',
    meta: {
      menu_key: '3',
    }
  }, {
    path: 'base64-transform',
    component: _import('base64-transform/index'),
    name: '图片转base64',
    icon: 'el-icon-orange',
    meta: {
      menu_key: '4',
    }
  }, {
    path: 'json-format',
    component: _import('json-format/index'),
    name: 'json格式化',
    icon: 'el-icon-reading',
    meta: {
      menu_key: '5',
    }
  }]
}]
