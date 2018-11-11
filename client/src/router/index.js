import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/views/Homepage/Homepage';
import LoginPage from '@/views/Login/LoginPage';
import TodoPage from '@/views/TodoPage/TodoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoPage,
    },
  ],
});
