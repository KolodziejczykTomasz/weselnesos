import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/church' },
    { path: '/church', name: 'ChurchView', component: () => import('@/views/ChurchView.vue'),},
    { path: '/church/firstReading', name: 'ChurchFirstReadingView', component: () => import('@/views/ChurchFirstReadingView.vue'),},
    { path: '/church/secondReading', name: 'ChurchSecondReadingView', component: () => import('@/views/ChurchSecondReadingView.vue'),},
    { path: '/church/psalms', name: 'ChurchPsalmsView', component: () => import('@/views/ChurchPsalmsView.vue'),},
    { path: '/church/gospels', name: 'ChurchGospelsView', component: () => import('@/views/ChurchGospelsView.vue'),},
    { path: '/church/psalms', name: 'PsalmsView', component: () => import('@/views/ChurchPsalmsView.vue'),},    
    { path: '/church/music', name: 'ChurchMusicView', component: () => import('@/views/ChurchMusicView.vue'),}
    ,    
    { path: '/cookies', name: 'CookiesView', component: () => import('@/views/CookiesView.vue'),}          
  ]
})

export default router