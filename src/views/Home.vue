<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="test" msg="Welcome to Your Vue.js App"/>
    <button @click="cancel">解绑</button>
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
    },
    output1(){
      console.log("打印出来world了！")
    },
    cancel(){
      // this.$refs.test.$off('hello')
      // this.$refs.test.$off('world')
      this.$refs.test.$off(['hello','world'])
    }
  },
  mounted(){
    this.$refs.test.$on('hello',this.output)
    this.$refs.test.$on('world',this.output1)
    // this.$refs.test.$once('hello',this.output)
    setTimeout(()=>{
      this.$destroy()
    },3000)
  }
}
</script>
