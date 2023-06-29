import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/church', name: 'ChurchView', component: () => import('@/views/ChurchView.vue'),},
    { path: '/church/firstReading', name: 'ChurchFirstReadingView', component: () => import('@/views/ChurchFirstReadingView.vue'),},
    { path: '/church/secondReading', name: 'ChurchSecondReadingView', component: () => import('@/views/ChurchSecondReadingView.vue'),},
    { path: '/church/psalms', name: 'ChurchPsalmsView', component: () => import('@/views/ChurchPsalmsView.vue'),},
    { path: '/church/gospels', name: 'ChurchGospelsView', component: () => import('@/views/ChurchGospelsView.vue'),},
    { path: '/church/psalms', name: 'PsalmsView', component: () => import('@/views/ChurchPsalmsView.vue'),},    
    { path: '/church/music', name: 'ChurchMusicView', component: () => import('@/views/ChurchMusicView.vue'),},    
    { path: '/church/confession', name: 'ChurchConfessionView', component: () => import('@/views/ChurchConfessionView.vue'),},  
    { path: '/firstdance', name: 'FirstDanceList', component: () => import('@/views/FirstDanceList.vue'),},
    { path: '/cookies', name: 'CookiesView', component: () => import('@/views/CookiesView.vue'),},
    { path: '/contact', name: 'ContactView', component: () => import('@/views/ContactView.vue'),}              
  ]
})

export default router