<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="test" msg="Welcome to Your Vue.js App"/>
    <button @click="cancel">解绑</button>
    <!-- to的字符串写法 -->
    <!-- <router-link :to='`/home/about?content=${test}`'>about</router-link> -->
    <!-- to的对象写法 -->
    <router-link :to="{
      name:'About',
      query:{
        title:test
      }
    }">
      about
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      test:'测试'
    }
  },
  methods:{
    output(){
      console.log("打印出来了！")
    },
    output1(){

      console.log("打印出来this了！",this)
    },
    cancel(){
      // this.$refs.test.$off('hello')
      // this.$refs.test.$off('world')
      this.$refs.test.$off(['hello','world'])
    }
  },
  mounted(){
    // this.$refs.test.$on('hello',function(){
    //   console.log(this)
    // })
    // this.$refs.test.$on('world',this.output1)
    // // this.$refs.test.$once('hello',this.output)
    // this.$bus.$on('testBus',function(){
    //   console.log("接收到了bus传过来的数据")
    // })

    // 接收数据
    this.pubId = pubsub.subscribe('testPub',function(msgName,data){
      console.log("接收到了pubsub消息",msgName,data)
    })
  },
  beforeDestroy(){
    // 销毁的时候，关闭发布订阅
    // pubsub.unsubscribe(this.pubId)
  }
}
</script>
