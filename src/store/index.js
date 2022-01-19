import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex，并且直接导出
export default new Vuex.Store({
  state: {
    sum:0
  },
  mutations: {
    Add(value,c){
      value.sum += c
    }
  },
  actions: {
    add(a,b){
      a.commit('Add',b)
    }
  },
  modules: {
  }
})
