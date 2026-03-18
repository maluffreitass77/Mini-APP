<script setup lang="ts">
import { ref } from "vue";

import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";

import { addOutline, trashOutline } from "ionicons/icons";

const novaTarefa = ref("");
const tarefas = ref<string[]>([]);

function adicionar() {
  if (!novaTarefa.value.trim()) return;

  tarefas.value.push(novaTarefa.value);
  novaTarefa.value = "";
}

function remover(index: number) {
  tarefas.value.splice(index, 1);
}
</script>

<template>
<IonPage>

<IonContent class="ion-padding">

<!-- Input da tarefa -->

<IonList>
<IonItem>

<IonInput
label="Nova tarefa"
label-placement="floating"
v-model="novaTarefa"
placeholder="Ex: estudar Vue"
/>

</IonItem>
</IonList>

<!-- Botão adicionar -->

<IonButton expand="block" @click="adicionar">

<IonIcon slot="start" :icon="addOutline" />

Adicionar Tarefa

</IonButton>

<!-- Lista de tarefas -->

<IonList>

<IonItem v-for="(t, i) in tarefas" :key="i">

<IonLabel>
{{ t }}
</IonLabel>

<IonButton
slot="end"
fill="clear"
color="danger"
@click="remover(i)"
>

<IonIcon :icon="trashOutline" />

</IonButton>

</IonItem>

</IonList>

</IonContent>

</IonPage>
</template>

<style scoped>

ion-item {
  margin-bottom: 8px;
}

ion-button {
  margin-top: 10px;
}

</style>