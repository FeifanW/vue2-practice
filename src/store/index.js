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
      a.dispatch('demo1',b)
    },
    demo1(a,b){
      console.log("全写在add里面有点多所以把部分处理放到下面的demo中")
      a.dispatch('demo2',b)
    },
    demo2(a,b){
      console.log("demo2") 
    }
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  },
  modules: {
  }
})
