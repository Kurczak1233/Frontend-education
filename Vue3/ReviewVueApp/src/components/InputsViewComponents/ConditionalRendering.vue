<script setup lang="ts">
import { ref } from "vue";

const showComponent = ref(true);

const toggle = () => {
  showComponent.value = !showComponent.value;
};
</script>

<template>
  <h2>
    This is
    <h1 v-if="showComponent">on</h1>
    <h1 v-else>off</h1>
    <button @click="toggle">Switch</button>
  </h2>
</template>
