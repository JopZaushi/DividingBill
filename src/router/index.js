import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/users',
    name: 'addUsers',
    component: () => import('@/views/AddUsers.vue'),
  },
  {
    path: '/products',
    name: 'addProducts',
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
