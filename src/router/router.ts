// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/layouts/Home.vue'
import BenchmarkPage from '../components/benchmark/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/benchmark',
    name: 'Benchmark',
    component: BenchmarkPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
