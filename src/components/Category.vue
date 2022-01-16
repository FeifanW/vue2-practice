<template>
  <div class="category">
    <h3>xxxx分类</h3>
    <slot name="first">我是默认值1</slot>
    <slot name="second">我是默认值2</slot>
    <ul>
      <li>xxxx</li>
      <li>xxxx</li>
      <li>xxxx</li>
      <li>xxxx</li>
      <li>xxxx</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
      return {
          
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
