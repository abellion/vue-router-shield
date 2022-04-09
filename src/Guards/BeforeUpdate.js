import { Settings } from '../index'

export default (guard) => {
  const wrapper = (to, from, next) => {
    for (let index in from.matched) {
      if (from.matched[index].meta.hasOwnProperty(Settings.guard) && from.matched[index].meta[Settings.guard].includes(wrapper) && from.matched[index] === to.matched[index]) {
        return guard(to, from, next)
      }
    }

    next()
  }

  return wrapper
}
