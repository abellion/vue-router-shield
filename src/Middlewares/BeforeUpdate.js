export default (middleware) => {
  const wrapper = (to, from, next) => {
    for (let index in from.matched) {
      if (from.matched[index].meta.hasOwnProperty('guard') && from.matched[index].meta.guard.includes(wrapper) && from.matched[index] === to.matched[index]) {
        return middleware(to, from, next)
      }
    }

    next()
  }

  return wrapper
}
