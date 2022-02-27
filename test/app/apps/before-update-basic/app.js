import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import middleware from '../../../../src'
import cypress from '../../Cypress'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

import MiddlewareA from './middlewares/MiddlewareA'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-update-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: ':route',
          component: Bar,
          meta: { middlewares: [MiddlewareA] }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/foo'
    }
  ]
})

const app = Vue.createApp(App)

app.use(router)
app.use(middleware, { router })
app.use(cypress)
app.mount('#app')
