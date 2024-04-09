import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetails from '@/views/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:userid',
      name: 'User Details',
      component: UserDetails,
      props: (route) => ({ userId: route.params.userid }),
    }
  ]
})

export default router
