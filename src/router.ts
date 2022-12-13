import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const history = createWebHistory()

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
]
const router = createRouter({
  history,
  routes,
})
export default router
