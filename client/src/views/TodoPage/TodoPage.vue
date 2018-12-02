<template>
  <div class="todos">
    <h1>Secure Area</h1>
    <p>
        This is a secure area
    </p>

    <form @submit.prevent="logout">
      <div class="button-control control">
        <button class="button" type="submit">Log out</button>
      </div>
    </form>
  </div>
</template>

<script>
import { userApi } from '@/services/appApi';

export default {
  name: 'Secure',
  data() {
    return {};
  },
  methods: {
    async logout() {
      let response = await userApi.logoutUser();
      console.log(response);
      if (response.status === 200) {
        this.$router.replace({ name: "Login" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todos {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
