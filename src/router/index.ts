import SobreNosPage from '@/views/SobreNosPage.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  { path: "/", component: HomePage},
  { path: "/sobrenos", component: SobreNosPage},
  { path: "/login", component: LoginPage}

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
