import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCropper from 'vue-cropper'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button } from 'element-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(VueCropper)

const vm = new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')