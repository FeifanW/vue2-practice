<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h1>{{$route.params.test}}</h1> -->
    <!-- <h1>{{$route.params.name}}</h1> -->
    <h1>test:{{id}}</h1>
    <h1>name:{{title}}</h1>
    <!-- <h1>a:{{a}}</h1> -->
    <!-- <h1>b:{{b}}</h1> -->
    <button @click="backLast">返回Home路由</button>

  </div>
</template>
<script>
export default {
  name: 'about',
  // props:['a','b'],
  props:['id','title'],
  data(){
    return{
      test:'测试'
    }
  },
  methods:{
    backLast(){
      // this.$router.
    }
  },
  beforeDestroy(){
    console.log("组件销毁了！")
  }
}
</script>

