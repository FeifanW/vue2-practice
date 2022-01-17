<template>
  <div class="category">
    <h3>xxxx分类</h3>
    <slot :hello="games">我是默认值1</slot>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
      return {
          games:["植物大战僵尸","魂斗罗","赛尔号","弹弹堂"]
      }
  },
  methods:{

  },
}
</script>
<style scoped>
.category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
img{
  width: 100px;
  height: 100px;
}
</style>
