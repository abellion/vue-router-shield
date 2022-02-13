export default function install(vue, options) {
  vue.directive('cypress-target', {
    mounted (el, { value }) {
      el.classList.add(`cy-target-${value}`)
    }
  })
}
