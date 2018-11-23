<template>
  <div class="home">
    <app-header></app-header>
    <p>Simple and minimalist todo app to help you keep track of your tasks.</p>
    <router-link to="/login">Login</router-link> to get started!
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'Homepage',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}

</style>
