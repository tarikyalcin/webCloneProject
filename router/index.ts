import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('~/pages/index.vue')
    },
    {
      path: '/dergiler',
      name: 'Dergiler',
      component: () => import('~/pages/dergiler.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('~/pages/Blog.vue')
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: () => import('~/pages/book/[id].vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('~/pages/cart.vue')
    }
  ]
})

export default router 