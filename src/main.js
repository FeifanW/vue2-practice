import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCropper from 'vue-cropper'

Vue.config.productionTip = false
Vue.use(VueCropper)

const vm = new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')