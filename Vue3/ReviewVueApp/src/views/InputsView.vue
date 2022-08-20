<script setup lang="ts">
import InputsComponent from "../components/InputsViewComponents/InputsComponent.vue";
import ConditionalRendering from "../components/InputsViewComponents/ConditionalRendering.vue";
import { ref } from "vue";

const greeting = ref("Hello from parent!");
</script>

<template>
  <main>
    <InputsComponent :msg="greeting" staticMessage="I am static!" />
    <ConditionalRendering />
  </main>
</template>
