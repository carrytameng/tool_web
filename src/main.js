import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Company from './components/Company.vue'
import StringLength from './components/StringLength'
import Base64Transform from './components/Base64Transform'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      components: {
        Header: Header,
        Menu: Menu,
        Main: Company
      }
    },
    { 
      path: '/company',
      components: {
        Header: Header,
        Menu: Menu,
        Main: Company
      }
    },
    {
      path: '/stringLength',
      components: {
        Header: Header,
        Menu: Menu,
        Main: StringLength
      }
    },
    {
      path: '/base64Transform',
      components: {
        Header: Header,
        Menu: Menu,
        Main: Base64Transform
      }
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
