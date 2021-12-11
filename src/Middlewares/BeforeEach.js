export default (middleware) => {
  return (to, from, next) => {
    middleware(to, from, next)
  }
}
