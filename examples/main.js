import Vue from 'vue'
import App from './App.vue'

import Button from '../layout/packages/button/index'
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
