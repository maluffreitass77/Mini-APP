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
        <IonTabButton
  tab="privado"
  href="/tabs/privado"
>

  <IonIcon
    :icon="lockClosedOutline"
  />

  <IonLabel>
    Privado
  </IonLabel>

</IonTabButton>

      </IonTabBar>

    </IonTabs>

  </IonPage>

</template>

<script setup>

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
  personOutline,
  lockClosedOutline

} from 'ionicons/icons'

</script>