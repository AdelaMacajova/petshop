import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/eshop',
      name: 'eshop',
      component: () => import('../views/EshopView.vue'),
      children:[
      {
        path: 'product/:productSlug',
        name: 'product',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: ':categorySlug',
        name: 'categories',
        component: () => import('../views/CategoryView.vue'),
      }
    ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      children:[

      ]
    },
    {
        path: '/article/:articleSlug',
        name: 'articles',
        component: () => import('../views/ArticleView.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/CartView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    }
  ],
})

export default router
