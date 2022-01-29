import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import middleware from '../../../../src'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'
import Baz from './views/Baz.vue'
import Qux from './views/Qux.vue'

import MiddlewareA from './middlewares/MiddlewareA'
import MiddlewareB from './middlewares/MiddlewareB'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-enter-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { middlewares: [MiddlewareA, MiddlewareB] },
      children: [
        {
          path: 'baz',
          component: Baz
        },
        {
          path: 'qux',
          component: Qux
        }
      ]
    },
    {
      path: '/bar',
      component: Bar,
      meta: { middlewares: [MiddlewareB] }
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
app.mount('#app')
