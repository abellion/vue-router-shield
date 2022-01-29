export default (middleware) => {
  const wrapper = (to, from, next) => {
    for (let index in from.matched) {
      if (from.matched[index].meta.hasOwnProperty('middlewares') && from.matched[index].meta.middlewares.includes(wrapper) && from.matched[index] === to.matched[index]) {
        return middleware(to, from, next)
      }
    }

    next()
  }

  return wrapper
}
