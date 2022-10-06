import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../views/UserProfile.vue'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/home/:id',
    name: 'HomePage',
    component: HomePage,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
