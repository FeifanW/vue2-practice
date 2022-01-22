<template>
  <div id="container">
    <div>{{$store.state.sum}}</div>
    <button @click="add">+</button>
    <div>{{$store.getters.bigSum}}</div>
  </div>
</template>
<script>
import Category from './components/Category.vue'
export default {
  data(){
    return{
      num:1
    }
  },
  components:{Category},
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
