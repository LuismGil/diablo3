import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/Index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
