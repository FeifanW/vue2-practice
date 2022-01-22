<template>
  <div id="container">
    <div>{{sum}}</div>
    <!-- <div>{{$store.state.sum}}</div> -->
    <button @click="add">+</button>
    <div>{{bigSum}}</div>
    <!-- <div>{{$store.getters.bigSum}}</div> -->
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import Category from './components/Category.vue'
export default {
  data(){
    return{
      num:1
    }
  },
  components:{Category},
  computed:{
    // 对象写法
    // ...mapState({sum:'sum'})
    // 数组写法
    ...mapState(['sum']),

    // 对象写法
    // ...mapGetters({big:'bigSum'}),
    // 数组写法
    ...mapGetters(['bigSum'])
  },
  mounted() {
    console.log(this)
  },
  methods:{
    add(){
      this.$store.dispatch('add',1)
    }
  }
}
</script>
<style>
  #container{
    display: flex;
    justify-content: space-around;
  }
</style>
