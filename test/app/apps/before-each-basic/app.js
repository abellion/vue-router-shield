import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import middleware from '../../../../src'
import cypress from '../../Cypress'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

import MiddlewareA from './middlewares/MiddlewareA'
import MiddlewareB from './middlewares/MiddlewareB'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-each-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { middlewares: [MiddlewareA] },
      children: [
        {
          path: 'bar',
          component: Bar,
          meta: { middlewares: [MiddlewareB] }
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
