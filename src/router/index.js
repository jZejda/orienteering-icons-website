import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Error404 from '@/components/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/ioficon/'
    },
    {
      path: '/ioficon/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ioficon/:pathMatch(.*)*',
      name: 'Error404',
      component: Error404
    }
  ]
})

export default router
