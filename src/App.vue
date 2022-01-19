<template>
  <div id="container">
    <div>{{num}}</div>
    <button @click="add">+</button>
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
