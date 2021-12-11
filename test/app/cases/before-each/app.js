import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from './views/App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/cases/before-each'),
  routes: [
    {
      path: '/foo',
      component: Foo,
    },
    {
      path: '/bar',
      component: Bar,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/foo'
    }
  ]
})

Vue.createApp(App).use(router).mount('#app')
