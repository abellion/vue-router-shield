export default (middleware) => {
  let last = null

  const wrapper = (to, from, next) => {
    let skip = false

    if (last && last.from.path === from.path && last.to.path !== to.path) {
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
      if (from.matched[index].meta.hasOwnProperty('middlewares') && from.matched[index].meta.middlewares.includes(wrapper) && from.matched[index] === to.matched[index]) {
        return next()
      }
    }

    middleware(to, from, next)
  }

  return wrapper
}
