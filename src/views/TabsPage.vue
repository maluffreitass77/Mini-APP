<template>

  <IonPage>

    <IonTabs>

      <IonRouterOutlet />

      <IonTabBar slot="bottom">

        <IonTabButton
          tab="tarefas"
          href="/tabs/tarefas"
        >

          <IonIcon :icon="listOutline" />

          <IonLabel>
            Tarefas
          </IonLabel>

        </IonTabButton>

        <IonTabButton
          tab="perfil"
          href="/tabs/perfil"
        >

          <IonIcon :icon="personOutline" />

          <IonLabel>
            Perfil
          </IonLabel>

        </IonTabButton>

      </IonTabBar>

    </IonTabs>

  </IonPage>

</template>

<script setup lang="ts">

import {

  IonPage,
  IonTabs,

  IonRouterOutlet,

  IonTabBar,
  IonTabButton,

  IonIcon,
  IonLabel

} from '@ionic/vue'

import {

  listOutline,
  personOutline

} from 'ionicons/icons'

</script>