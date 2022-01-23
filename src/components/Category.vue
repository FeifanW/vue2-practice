<template>
  <div class="category">
    <h3>练习vuex组件共享</h3>
    <div>{{sum}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Test',
  data(){
      return {
          games:["植物大战僵尸","魂斗罗","赛尔号","弹弹堂"]
      }
  },
  computed:{
    ...mapState(['sum'])
  },
  methods:{

  },
}
</script>
<style scoped>
.category{
  width: 200px;
  height: 300px;
}
img{
  width: 100px;
  height: 100px;
}
</style>
