export default (guard) => {
  return (to, from, next) => {
    guard(to, from, next)
  }
}
