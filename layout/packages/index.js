import Button from './button'
import Button2 from './button2'
const components = [
  Button,
  Button2
]
const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).fortach(key => {
    Vue.component(components[key].name, components[key]);
  })
}

const API = {
  install,
}

export default API;