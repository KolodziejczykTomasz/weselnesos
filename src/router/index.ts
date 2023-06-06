import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import PsalmsView from '../views/PsalmsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/psalmy',
      name: 'psalms',
      component: PsalmsView
    }        
  ]
})

export default router
