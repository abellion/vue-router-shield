import Guard from './Guard'

export BeforeEach from './Guards/BeforeEach'
export BeforeEnter from './Guards/BeforeEnter'
export BeforeUpdate from './Guards/BeforeUpdate'

export default function install(vue, options) {
  if (Boolean(options) !== true || options.hasOwnProperty('router') !== true) {
    throw new Error('A Vue Router instance must be given to vue-router-shield')
  }

  options.router.beforeEach(Guard)
}
