import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
    path: '/',
    name: 'Home',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminView.vue'),
    children: [
      {
        path: 'adminHome',
        name: 'adminHome',
        component: () => import('../views/admin/AdminHome.vue')
      },
      {
        path: 'adminProducts',
        name: 'adminProducts',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'adminOrder',
        name: 'adminOrder',
        component: () => import('../views/admin/AdminOrder.vue')
      }
    ]
  }
  ]
})

export default router
