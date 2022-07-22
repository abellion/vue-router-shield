import { Settings } from '../index'

export default (guard) => {
  let last = null

  const wrapper = (to, from, next) => {
    let skip = false

    if (last && last.from.path === from.path && last.to.matched[last.to.matched.length - 1].path !== to.matched[to.matched.length - 1].path) {
      skip = true
    }

    if (skip) {
      last = null
    } else {
      last = { to, from }
    }

    if (skip) {
      return next()
    }

    for (let index in from.matched) {
      if (from.matched[index].meta.hasOwnProperty(Settings.guard) && from.matched[index].meta[Settings.guard].includes(wrapper) && from.matched[index] === to.matched[index]) {
        return next()
      }
    }

    guard(to, from, next)
  }

  return wrapper
}
