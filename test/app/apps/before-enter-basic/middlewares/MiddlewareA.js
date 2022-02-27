import * as Logger from '../../../Logger'
import { BeforeEnter } from '../../../../../src'

export default BeforeEnter((to, from, next) => {
  Logger.log('Guard A called')

  if (to.path === '/foo') {
    next({ path: '/foo/bar' })
  } else {
    next()
  }
})
