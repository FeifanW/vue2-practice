<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h1>{{$route.params.test}}</h1> -->
    <!-- <h1>{{$route.params.name}}</h1> -->
    <h1>test:{{id}}</h1>
    <h1>name:{{title}}</h1>
    <!-- <h1>a:{{a}}</h1> -->
    <!-- <h1>b:{{b}}</h1> -->

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
  },

}
</script>

