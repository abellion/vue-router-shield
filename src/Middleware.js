class Middleware {
  constructor (request, next) {
    this.request = request
    this.next = next
  }

  /**
   * Handle the middlewares
   * @return mixed
   */
  async handle () {
    const chain = this.chain()

    for (let middleware of chain) {
      const result = await this.run(middleware)

      if (result !== undefined) {
        return this.next(result)
      }
    }

    return this.next()
  }

  /**
   * Run a middleware
   * @param  function middleware
   * @return promise
   */
  run (middleware) {
    return new Promise((resolve) => {
      middleware(this.request.to, this.request.from, resolve)
    })
  }

  /**
   * Build the middleware chain
   * @return array
   */
  chain () {
    const chain = new Set()

    for (let route of this.request.to.matched) {
      if (route.meta.hasOwnProperty('guard')) {
        route.meta.guard.forEach(Set.prototype.add, chain)
      }
    }

    return Array.from(chain)
  }
}

export default (to, from, next) => {
  new Middleware({ to, from }, next).handle()
}
