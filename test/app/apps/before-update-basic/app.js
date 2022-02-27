import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import guard from '../../../../src'
import cypress from '../../Cypress'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

import MiddlewareA from './guards/MiddlewareA'

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
          meta: { guard: [MiddlewareA] }
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
