<script setup>

import { ref } from 'vue'

import {

  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,

  IonContent,

  IonInput,
  IonButton,

  IonList,
  IonItem,
  IonLabel,

  IonIcon,

  alertController,
  toastController

} from '@ionic/vue'

import {

  addCircleOutline,
  trashOutline

} from 'ionicons/icons'

import { useRouter }
from 'vue-router'

const router = useRouter()

const novaTarefa = ref('')

const tarefas = ref([
  'Estudar Ionic',
  'Fazer atividade',
  'Entregar projeto'
])

async function adicionarTarefa() {

  if (!novaTarefa.value.trim()) {

    const toast = await toastController.create({

      message: 'Digite uma tarefa',

      duration: 2000,

      color: 'warning'

    })

    await toast.present()

    return

  }

  tarefas.value.push(
    novaTarefa.value
  )

  novaTarefa.value = ''

  const toast = await toastController.create({

    message: 'Tarefa adicionada!',

    duration: 1500,

    color: 'success'

  })

  await toast.present()

}

function abrirDetalhe(index) {

  router.push(
    `/tabs/detalhe/${index}`
  )

}

async function excluirTarefa(index) {

  const alert = await alertController.create({

    header: 'Excluir',

    message: 'Deseja excluir a tarefa?',

    buttons: [

      'Cancelar',

      {
        text: 'Excluir',

        role: 'destructive',

        handler: () => {

          tarefas.value.splice(index, 1)

        }

      }

    ]

  })

  await alert.present()

}

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar color="primary">

        <IonTitle>
          Mini App
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonInput

        v-model="novaTarefa"

        placeholder="Digite uma tarefa"

        fill="outline"

      />

      <IonButton

        expand="block"

        class="ion-margin-top"

        @click="adicionarTarefa"
      >

        <IonIcon
          :icon="addCircleOutline"
          slot="start"
        />

        Adicionar

      </IonButton>

      <IonList class="ion-margin-top">

        <IonItem

          v-for="(tarefa, index) in tarefas"

          :key="index"

          button

          @click="abrirDetalhe(index)"
        >

          <IonLabel>

            {{ tarefa }}

          </IonLabel>

          <IonButton

            color="danger"

            fill="clear"

            @click.stop="excluirTarefa(index)"
          >

            <IonIcon :icon="trashOutline" />

          </IonButton>

        </IonItem>

      </IonList>

    </IonContent>

  </IonPage>

</template>