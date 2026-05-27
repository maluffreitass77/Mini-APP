import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router'

import TabsPage
from '../views/TabsPage.vue'

import { usuario }
from '../data/user'

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
        path: 'privado',

        component: () =>
          import('../views/PrivadoPage.vue'),

      {

          if (usuario.nome) {

            next()

          } else {

            alert(
              'Digite seu nome no perfil primeiro'
            )

            next('/tabs/perfil')

          }

        }

      },

      {
        path: 'detalhe/:id',

        component: () =>
          import('../views/DetalhePage.vue')
      }

    ]

  }

]

const router = createRouter({

  history:
    createWebHistory(
      process.env.BASE_URL
    ),

  routes

})
router.beforeEach((to, from, next) => {

  if (
    to.meta.requerNome &&
    !usuario.nome
  ) {

    alert(
      'Digite seu nome primeiro'
    )

    next('/tabs/tarefas')

  } else {

    next()

  }

})

export default router