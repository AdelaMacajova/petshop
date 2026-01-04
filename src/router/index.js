import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children:[{
        path: ':categorySlug',
        name: 'categories',
        component: () => import('../views/CategoryView.vue'),
      }]
    },
    {
      path: '/:productSlug',
      name: 'products',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/ContactView.vue'),
    },
    
  ],
})

export default router
