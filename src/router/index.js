import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  },
  {
    path: "/login",
    name: "login",
    component: function(){return import('../views/LoginView.vue')}
  },
  {
    path: '/register',
    name: 'register',
    component: function(){return import('../views/RegisterView.vue')}
  },
  {
    path: '/contact',
    name: 'contact',
    component: function(){return import('../views/ContactView.vue')}
  },
  {
    path: '/products',
    name: 'products',
    component: function(){return import('../views/ProductsView.vue')}
  },
  {
    path: '/products/:id',
    name: 'product',
    component: function(){return import('../views/SingleProductView.vue')}
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
