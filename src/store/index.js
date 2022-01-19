import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex，并且直接导出
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    add(){
      console.log('vuex里的action被调用了')
    }
  },
  modules: {
  }
})
