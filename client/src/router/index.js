import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/views/Login/LoginPage';
import TodoPage from '@/views/TodoPage/TodoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoPage,
    },
  ],
});
