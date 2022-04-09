import Guard from './Guard'

export { default as BeforeEach } from './Guards/BeforeEach'
export { default as BeforeEnter } from './Guards/BeforeEnter'
export { default as BeforeUpdate } from './Guards/BeforeUpdate'

export const Settings = {
  guard: 'guard'
}

export default function install(vue, options) {
  if (Boolean(options) !== true || options.hasOwnProperty('router') !== true) {
    throw new Error('A Vue Router instance must be given to vue-router-shield')
  }

  if (options.hasOwnProperty('guard')) {
    Settings.guard = options.guard
  }

  options.router.beforeEach(Guard)
}
