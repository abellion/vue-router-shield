import Middleware from './Middleware'

export BeforeEach from './Middlewares/BeforeEach'
export BeforeEnter from './Middlewares/BeforeEnter'
export BeforeUpdate from './Middlewares/BeforeUpdate'

export default function install(vue, options) {
  if (Boolean(options) !== true || options.hasOwnProperty('router') !== true) {
    throw new Error('A Vue Router instance must be given to vue-router-middleware')
  }

  options.router.beforeEach(
    Middleware
  )
}
