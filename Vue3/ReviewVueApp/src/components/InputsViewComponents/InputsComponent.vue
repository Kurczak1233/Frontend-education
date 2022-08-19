<script setup>
import { ref } from "vue";

const text = ref("");

function onInput(e) {
  text.value = e.target.value;
}
</script>

<template>
  <!-- Insteaad of using :value={text} and @click=onInput we can use v-model what automatically syncs value and change -->
  <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
</template>
