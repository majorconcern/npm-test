import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Layout from '../layout/packages/index'
Vue.use(Layout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')