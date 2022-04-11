# 🛡 Vue Router Shield

Looking for a clean and elegent way to define navigation guards in your Vue.js application ? This library is made for you ! Whether you want to authenticate your users across your application, or just fetch some data before entering a view, this is a perfect fit.

## Installation 🔽

```bash
npm install vue-router-shield
# or
yarn add vue-router-shield
```

```js
import VueRouterShield from 'vue-router-shield'

Vue.use(VueRouterShield, {
  router // A router instance must be given
})
```

## Example 🔽

Unlike classic [navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html), these are defined at the route level. Doing so has several advantages, as it helps your views to stay light and allows the guards to be reused elsewhere. Using a concise syntax, you can define the guards to be executed before entering the route, before the route is updated, or both. Let's create a guard that will be called `BeforeEach` navigations and log a greeting message :

```js
import { BeforeEach } from 'vue-router-shield'

export default BeforeEach((to, from, next) => {
  console.log('Hello !')
  
  next()
})
```

Now, this guard must be bound to the route on which we want it to be executed. Of course, we can list as many as we want, and they'll all be called one after the other :

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: {},
      meta: { guard: [SayHello] }
    }
  ]
})
```

## Guards 🔽

As said above, the guards can be executed in three different ways :

- `BeforeEach` guards are executed when the route they're bound to is **entered or updated**.
- `BeforeUpdate` guards are executed **only** when the route they're bound to is **updated**.
- `BeforeEnter` guards are executed **only** when the route they're bound to is **entered**.

They are called with three arguments : the route we're going to (`to`), the route we're coming from (`from`), and a `next` function that must be called in order to validate the navigation. If you want to abort the navigation or create a redirect, either pass `false` or a route location.

```js
// BeforeEach
import { BeforeEach } from 'vue-router-shield'

export default BeforeEach((to, from, next) => {
  next()
})

// BeforeUpdate
import { BeforeUpdate } from 'vue-router-shield'

export default BeforeUpdate((to, from, next) => {
  next()
})

// BeforeEnter
import { BeforeEnter } from 'vue-router-shield'

export default BeforeEnter((to, from, next) => {
  next()
})
```

## Configuration 🔽

Instead of `guard` as the name of the meta field the guards are taken from, you can choose another one when initializing the library :

```js
import VueRouterShield from 'vue-router-shield'

Vue.use(VueRouterShield, {
  router,
  guard: 'middleware'
})
```
