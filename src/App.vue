<template>
  <div id="container">
    <category>
      <img slot="first" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2F12ca9832j00r0sbu50019c000hs009zc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644940351&t=928189114369cfef16b6daddf8eae8f0" alt="">
    </category>
    <category>
      <template v-slot:default="test">
        <div>
          {{test.hello}}
        </div>
      </template>
    </category>
    <category>
    </category>
  </div>
</template>
<script>
import Category from './components/Category.vue'
export default {
  components:{Category}
}
</script>
<style>
  #container{
    display: flex;
    justify-content: space-around;
  }
</style>
