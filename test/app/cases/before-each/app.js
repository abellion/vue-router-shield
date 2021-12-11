import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from './views/App.vue'
import Foo from './views/Foo.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/cases/before-each'),
  routes: [
    {
      path: '/foo',
      component: Foo,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/foo'
    }
  ]
})

Vue.createApp(App).use(router).mount('#app')
