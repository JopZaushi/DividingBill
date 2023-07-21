import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/users',
    name: 'add',
    component: () => import('@/views/AddUsers.vue'),
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('@/views/CalculateProducts.vue'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/ResultsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
