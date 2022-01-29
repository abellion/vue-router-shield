import * as Logger from '../../../Logger'
import { BeforeUpdate } from '../../../../../src'

export default BeforeUpdate((to, from, next) => {
  Logger.log('Middleware A called')

  next()
})
