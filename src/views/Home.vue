<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="test" msg="Welcome to Your Vue.js App"/>
    <button @click="houtui">后退</button>
    <button @click="qianjin">前进</button>
    <button @click="gou">go测试</button>
    <button @click="cancel">解绑</button>
    <!-- to的字符串写法 -->
    <!-- <router-link :to='`/home/about?content=${test}`'>about</router-link> -->
    <!-- <router-link :to='`/home/about/${test}/123`'>about</router-link> -->
    <!-- to的对象写法 -->
    <!-- <router-link :to="{
      name:'About',
      query:{
        title:test
      }
    }">
      about
    </router-link> -->
    <button @click="jump">跳转到about</button>
    <!-- <router-link
    replace
     :to="{
        name:'About',
        query:{
          test:456,
          name:'测试名称'
        }
      }"
    >
      about
    </router-link> -->
    <keep-alive include="about"> 
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
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
    },
    jump(){  // 跳转到about路由
      this.$router.push({
        name:'About',
        query:{
          test:456,
          name:'测试名称'
        }
      })
    },
    // jump(){  // 跳转到about路由
    //   this.$router.replace({
    //     name:'About',
    //     query:{
    //       test:456,
    //       name:'测试名称'
    //     }
    //   })
    // }
    houtui(){
      this.$router.back()
    },
    qianjin(){
      this.$router.forward()
    },
    gou(){
      this.$router.go(-1)
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
