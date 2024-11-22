import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue';
import Contador from '../pages/Contador.vue';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contador',
      component: Contador
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;