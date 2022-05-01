import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import rsView from '../views/3rsView.vue'
import ContactView from '../views/ContactView.vue'
import AlliancesView from '../views/AlliancesView.vue'
import IdentityView from '../views/IdentityView.vue'



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
      component: AboutView
    },
    {
      path: '/3rs',
      name: '3rs',
      component: rsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/alliances',
      name: 'Alliances',
      component: AlliancesView
    },
    ,
    {
      path: '/identity',
      name: 'Identity',
      component: IdentityView
    },
  ]
})

export default router
