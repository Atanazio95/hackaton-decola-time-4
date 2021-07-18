import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ListaProfissionais from '../views/ListaProfissionais.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/listaprofissionais',
    name: 'ListaProfissionais',
    component: ListaProfissionais
  },

]

const router = new VueRouter({
  routes
})

export default router
