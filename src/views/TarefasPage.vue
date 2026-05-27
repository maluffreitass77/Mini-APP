<script setup lang="ts">

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
  IonLabel

} from '@ionic/vue'

import { useRouter }
from 'vue-router'

const router = useRouter()

const novaTarefa = ref('')

const tarefas = ref([
  'Estudar Ionic'
])

function adicionarTarefa() {

  if (!novaTarefa.value.trim())
    return

  tarefas.value.push(
    novaTarefa.value
  )

  novaTarefa.value = ''

}

function abrirDetalhe(index: number) {

  router.push(
    `/tabs/detalhe/${index}`
  )

}

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar>

        <IonTitle>
          Tarefas
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonInput
        v-model="novaTarefa"
        placeholder="Digite uma tarefa"
      />

      <IonButton
        expand="block"
        @click="adicionarTarefa"
      >
        Adicionar
      </IonButton>

      <IonList>

        <IonItem

          v-for="(tarefa, index) in tarefas"

          :key="index"

          button

          @click="abrirDetalhe(index)"
        >

          <IonLabel>

            {{ tarefa }}

          </IonLabel>

        </IonItem>

      </IonList>

    </IonContent>

  </IonPage>

</template>