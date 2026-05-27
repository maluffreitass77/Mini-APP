<script setup lang="ts">

import { ref } from 'vue'

import {

  IonPage,
  IonHeader,
  IonToolbar,

  IonTitle,
  IonContent,

  IonInput

} from '@ionic/vue'

const nome = ref('')

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar>

        <IonTitle>
          Perfil
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonInput
        v-model="nome"
        placeholder="Digite seu nome"
      />

    </IonContent>

  </IonPage>

</template>