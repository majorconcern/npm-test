import System from './index.vue'
System.install = function (Vue) {
  Vue.component(System.name, System)
}
export default System