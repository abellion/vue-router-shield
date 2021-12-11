import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import middleware from '../../../../src'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'
import Baz from './views/Baz.vue'
import Qux from './views/Qux.vue'

import FooMiddleware from './middlewares/Foo'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/apps/before-enter-basic'),
  routes: [
    {
      path: '/foo',
      component: Foo,
      meta: { middlewares: [FooMiddleware] },
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
      component: Bar
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
