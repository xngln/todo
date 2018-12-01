<template>
  <div class="login level columns">
    <div class="login left-panel level-item columns column">
      <div class="column title-container">
        <h1>Todo Boi</h1>
        <div class="text-container">
          <p>Simple and minimalist todo app to help you keep track of your tasks.</p>
        </div>
      </div>
    </div>

    <div class="login level-item column">
      <div class="form-container column">
        <form @submit.prevent="submit(activeModal)">
          <div class="level form-header">
            <div class="level-left" @click="activeModal = 'Login'">
              Login
            </div>
            <div class="level-right" @click="activeModal = 'Sign up'">
              Sign Up
            </div>
          </div>

          <div class="login-underline underline" v-if="activeModal === 'Login'" ></div>
          <div class="signup-underline underline" v-if="activeModal === 'Sign up'"></div>
          <div class="underline"></div>

          <div class="field" v-if="activeModal === 'Sign up'">
            <label class="label" for="input_first">First name</label>
            <div class="control">
              <input class="input" v-model="firstName" id="input_first" placeholder="First name" required autofocus>
            </div>
          </div>

          <div class="field" v-if="activeModal === 'Sign up'">
            <label class="label" for="input_last">Last name</label>
            <div class="control">
              <input class="input" v-model="lastName" id="input_last" placeholder="Last name" required autofocus>
            </div>
          </div>

          <div class="field">
            <label class="label" for="input_email">Email address</label>
            <div class="control">
              <input class="input" v-model="email" type="email" id="input_email" placeholder="Email address" required autofocus>
            </div>
          </div>

          <div class="field">
            <label class="label" for="input_password">Password</label>
            <div class="control">
              <input class="input" v-model="password" type="password" id="input_password" placeholder="Password" required>
            </div>
          </div>

          <div class="button-control control">
            <button class="button" type="submit">{{activeModal}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { userApi } from '@/services/appApi';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      activeModal: 'Login',
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    async submit(type) {
      let response;
      if (type === 'Login') {
        response = await userApi.loginUser(this.email, this.password);
      } else if (type === 'Sign up') {
        response = await userApi.createUser(this.firstName, this.lastName, this.email, this.password);
      }
      if (response.status === 200) {
        this.$router.replace({ name: 'todos' });
      }
      console.log(response);
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
  height: 100%;

  .title-container {
    position: relative;
    top: -8%;
  }

  .text-container {
    width: 70%;
    margin: auto;
  }

  h1 {
    font-size: 350%;
    font-weight: 400;
    position: relative;
    bottom: 50px;
  }

  p {
    font-size: 130%;
  }
}

.left-panel {
  background-image: url('../../assets/ueno-temple-todo.jpg');
  background-size: 120% auto;
  background-repeat: no-repeat;
  color:#e3ecf5ec;
}

.form-container {
  margin: 20% 20%;
}

.form-header {
  font-size: 200%;
  font-weight: normal;
}

.label {
  text-align: left;
  font-weight: 450;
  font-size: 80%;
  margin-bottom: 3px;
  color: #c8c8c9;
  clear: both;
}

.underline {
  height: 2px;
  background-color: #c1c4c7;
  width: 100%;
  position: relative;
  top: -15px;
}

.signup-underline {
  height: 4px;
  background-color: #5389c0;
  width: 30%;
  float: right;
  top: -17px;
  z-index: 1;
}

.login-underline {
  height: 4px;
  background-color: #5389c0;
  width: 30%;
  float: left;
  top: -17px;
  z-index: 1;
}

.button {
  background-color: rgb(63, 132, 175);
  color: white;
}

.button-control {
    margin-top: 20px;
  }
</style>
