import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyComponent from '../MyComponent.vue' // Adjust the path

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Users/Ayann/Desktop/Intro to Responsive Webapps/Week 2/2.3c/Task2.3C/src/MyComponent.vue',
      component: MyComponent, 
    },
  ]
})

export default router
