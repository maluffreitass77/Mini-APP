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

import { usuario }
from '../data/user'

</script>

<template>

  <IonPage>

    <IonHeader>

      <IonToolbar color="danger">

        <IonTitle>
          Área Privada
        </IonTitle>

      </IonToolbar>

    </IonHeader>

    <IonContent class="ion-padding">

      <IonCard>

        <IonCardContent>

          <h2>
            Bem-vinda,
            {{ usuario.nome }}
          </h2>

          <p>
            Você acessou uma rota protegida.
          </p>

        </IonCardContent>

      </IonCard>

    </IonContent>

  </IonPage>

</template>