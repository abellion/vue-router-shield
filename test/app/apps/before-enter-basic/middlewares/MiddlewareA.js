import * as Logger from '../../../Logger'
import { BeforeEnter } from '../../../../../src'

export default BeforeEnter((to, from, next) => {
  Logger.log('Middleware A called')

  if (to.path === '/foo') {
    next({ path: '/foo/baz' })
  } else {
    next()
  }
})
