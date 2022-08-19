<script setup lang="ts">
import { ref } from "vue";

const text = ref("");

const props = defineProps({
  msg: String,
  staticMessage: String,
});

function onInput(e) {
  text.value = e.target.value;
}
</script>

<template>
  <!-- Insteaad of using :value={text} and @click=onInput we can use v-model what automatically syncs value and change -->
  <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
  <div>{{ props.msg }}{{ props.staticMessage }}</div>
</template>
