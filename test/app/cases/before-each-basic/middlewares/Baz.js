import * as Logger from '../../../Logger'

export default (to, from, next) => {
  Logger.log('Baz called')

  next()
}
