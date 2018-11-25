<template>
  <div class="login">
    <p>Simple and minimalist todo app to help you keep track of your tasks.</p>
    <form @submit.prevent="login">
      <h2>Please sign in</h2>
      <label for="input_email">Email address</label>
      <input v-model="email" type="email" id="input_email" placeholder="Email address" required autofocus>
      <label for="input_password">Password</label>
      <input v-model="password" type="password" id="input_password" placeholder="Password" required>
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import { todoApi, userApi } from '@/services/appApi';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      let response = await userApi.loginUser(this.email, this.password);
      console.log(response.headers['x-auth']);
        // .catch(() => { delete localStorage.token; });
      // console.log(userApi.loginUser);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
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
