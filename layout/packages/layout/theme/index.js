import Theme from './index.vue'
Theme.install = function(Vue) {
  Vue.component(Theme.name, Theme)
}
export default Theme