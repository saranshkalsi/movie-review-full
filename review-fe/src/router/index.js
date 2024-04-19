import Home from '../views/Home.vue';
import Review from '../components/MovieDetail.vue';


import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
  {
    name: 'Home',
    path: "/",
    component: Home
  },
  {
    name: 'Review',
    path: "/movie/:id",
    component: Review,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos
})

export default router;