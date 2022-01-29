import * as Logger from '../../../Logger'
import { BeforeEnter } from '../../../../../src'

export default BeforeEnter((to, from, next) => {
  Logger.log('Middleware B called')

  next()
})
