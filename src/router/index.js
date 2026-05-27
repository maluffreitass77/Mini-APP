import { usuario }
from '../data/user'
import {

  createRouter,
  createWebHistory

} from '@ionic/vue-router'

import TabsPage
from '../views/TabsPage.vue'

const routes = [

  {
    path: '/',
    redirect: '/tabs/tarefas'
  },

  {
    path: '/tabs',

    component: TabsPage,

    children: [

      {
        path: 'tarefas',

        component: () =>
          import('../views/TarefasPage.vue')
      },

      {
        path: 'perfil',

        component: () =>
          import('../views/PerfilPage.vue')
      },

      {
        path: 'detalhe/:id',

        component: () =>
          import('../views/DetalhePage.vue')
      }
      { path: 'privado',

  component: () =>
    import('../views/PrivadoPage.vue'),

  beforeEnter: (to, from, next) => {

    if (usuario.nome) {

      next()

    } else {

      alert(
        'Digite seu nome no perfil primeiro'
      )

      next('/tabs/perfil')

      }

    ]
  }

]

const router = createRouter({

  history:
    createWebHistory(process.env.BASE_URL),

  routes

})

export default router