import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import CrudView from './components/CrudView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/crud', component: CrudView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router