<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="test" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    output(){
      console.log("打印出来了！")
    }
  },
  mounted(){
    // this.$refs.test.$on('hello',this.output)
    this.$refs.test.$once('hello',this.output)
  }
}
</script>
