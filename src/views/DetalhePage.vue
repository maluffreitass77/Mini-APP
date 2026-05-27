<script setup>

import {

  IonPage,
  IonHeader,
  IonToolbar,

  IonTitle,
  IonContent

} from '@ionic/vue'

import { useRoute }
from 'vue-router'

const route = useRoute()

const id = route.params.id

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar>

        <IonTitle>
          Detalhe
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <h2>
        Tarefa ID:
        {{ id }}
      </h2>

    </IonContent>

  </IonPage>

</template>