import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import guard from '../../../../src'
import cypress from '../../Cypress'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'
import Logs from './views/Logs.vue'

import MiddlewareA from './middlewares/MiddlewareA'
import MiddlewareB from './middlewares/MiddlewareB'
import MiddlewareC from './middlewares/MiddlewareC'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-enter-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { guard: [MiddlewareA, MiddlewareB] },
      children: [
        {
          path: 'bar',
          component: Logs
        },
        {
          path: 'baz',
          component: Logs
        }
      ]
    },
    {
      path: '/bar',
      component: Bar,
      meta: { guard: [MiddlewareB] },
      children: [
        {
          path: 'baz',
          component: Logs,
          meta: { guard: [MiddlewareC] },
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
app.use(guard, { router })
app.use(cypress)
app.mount('#app')
