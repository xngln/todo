<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}
</style>
