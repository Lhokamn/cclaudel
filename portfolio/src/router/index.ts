import { createRouter, createWebHistory } from 'vue-router'

// Import des pages
import Home from '@/pages/Home/Home.vue'
import Experience from '@/pages/Experiences/Experiences.vue'
import Projects from '@/components/Projects/Projects.vue'
import NotFound from '@/pages/Error/404.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience},
  { path: '/projects', component: Projects},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
