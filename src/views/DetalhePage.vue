<script setup>

import {

  IonPage,
  IonHeader,
  IonToolbar,

  IonTitle,
  IonContent,

  IonCard,
  IonCardContent

} from '@ionic/vue'

import { useRoute }
from 'vue-router'

const route = useRoute()

const id = route.params.id

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar color="success">

        <IonTitle>
          Detalhes
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonCard>

        <IonCardContent>

          <h2>

            Tarefa selecionada:
            {{ id }}

          </h2>

        </IonCardContent>

      </IonCard>

    </IonContent>

  </IonPage>

</template>