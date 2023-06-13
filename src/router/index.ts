import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView',component: HomeView },
    { path: '/church', name: 'ChurchView', component: () => import('@/views/ChurchView.vue'),},
    { path: '/church/firstReading', name: 'ChurchFirstReadingView', component: () => import('@/views/ChurchFirstReadingView.vue'),},
    { path: '/church/secondReading', name: 'ChurchSecondReadingView', component: () => import('@/views/ChurchSecondReadingView.vue'),},
    { path: '/church/psalms', name: 'ChurchPsalmsView', component: () => import('@/views/ChurchPsalmsView.vue'),},
    { path: '/church/gospels', name: 'ChurchGospelsView', component: () => import('@/views/ChurchGospelsView.vue'),},
    { path: '/church/psalms', name: 'PsalmsView', component: () => import('@/views/PsalmsView.vue'),},    
    { path: '/church/music', name: 'ChurchMusicView', component: () => import('@/views/ChurchMusicView.vue'),}       
  ]
})

export default router