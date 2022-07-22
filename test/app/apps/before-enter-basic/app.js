import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import guard from '../../../../src'
import cypress from '../../Cypress'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'
import Baz from './views/Baz.vue'
import Logs from './views/Logs.vue'

import GuardA from './guards/GuardA'
import GuardB from './guards/GuardB'
import GuardC from './guards/GuardC'
import GuardD from './guards/GuardD'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-enter-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { guard: [GuardA, GuardB] },
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
      children: [
        {
          path: 'baz',
          component: Logs,
          meta: { guard: [GuardC] },
        }
      ]
    },
    {
      path: '/baz',
      component: Baz,
      children: [
        {
          path: ':param',
          component: Logs,
          meta: { guard: [GuardD] }
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
