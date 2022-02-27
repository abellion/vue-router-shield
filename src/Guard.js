class Guard {
  constructor (request, next) {
    this.request = request
    this.next = next
  }

  /**
   * Handle the guards
   * @return mixed
   */
  async handle () {
    const chain = this.chain()

    for (let guard of chain) {
      const result = await this.run(guard)

      if (result !== undefined) {
        return this.next(result)
      }
    }

    return this.next()
  }

  /**
   * Run a guard
   * @param  function guard
   * @return promise
   */
  run (guard) {
    return new Promise((resolve) => {
      guard(this.request.to, this.request.from, resolve)
    })
  }

  /**
   * Build the guards chain
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
  new Guard({ to, from }, next).handle()
}
