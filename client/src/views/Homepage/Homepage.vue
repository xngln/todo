<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <div class="homepage">
      <h1>This is the home page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu ali...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    font-weight: lighter;
  }
}
</style>
