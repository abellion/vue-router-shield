import * as Logger from '../../../Logger'
import { BeforeEach } from '../../../../../src'

export default BeforeEach((to, from, next) => {
  Logger.log('Middleware B called')

  next()
})