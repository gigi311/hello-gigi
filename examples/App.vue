<template>
  <div id="app">
    <demo-gigi></demo-gigi>
    <button @click="src='//sina.com.cn'">change sina</button>
    <frame-panel :src="src" fstyle="height:500px;"></frame-panel>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      src:'http://erp.jd.com?timeout=2000',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
