import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView',component: HomeView },
    { path: '/psalmy', name: 'PsalmsView', component: () => import('@/views/PsalmsView.vue'),}        
  ]
})

export default router