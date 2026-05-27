<script setup>

import { ref }
from 'vue'

import {

  IonPage,
  IonHeader,
  IonToolbar,

  IonTitle,
  IonContent,

  IonInput,
  IonButton,

  toastController

} from '@ionic/vue'

const nome = ref('')

async function salvar() {

  if (!nome.value.trim()) {

    const toast = await toastController.create({

      message: 'Digite seu nome',

      duration: 2000,

      color: 'warning'

    })

    await toast.present()

    return

  }

  const toast = await toastController.create({

    message: 'Perfil salvo!',

    duration: 2000,

    color: 'success'

  })

  await toast.present()

}

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar color="tertiary">

        <IonTitle>
          Perfil
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonInput

        v-model="nome"

        placeholder="Digite seu nome"

        fill="outline"

      />

      <IonButton

        expand="block"

        class="ion-margin-top"

        @click="salvar"
      >

        Salvar

      </IonButton>

    </IonContent>

  </IonPage>

</template>