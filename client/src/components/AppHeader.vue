<template>
<div class="header">
  <div class="title-container">
    <img class="logo" src="@/assets/box.png">
    <h1>Todo Boi</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.header {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;

  max-width: 1024px;
  margin: 25px 0;
}

.title-container {
  width: 165px;
  height: 50px;
  margin: 0 auto;
}

.logo {
  width: 30px;
  height: 30px;
  float: left;
  vertical-align: middle;
  top: 18%;
  position: relative;
}

h1 {
  float: right;
  font-size: 200%;
  font-weight: regular;
}
</style>
