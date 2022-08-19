<script setup lang="ts">
import { onMounted, ref, onUpdated, watch, onBeforeMount } from "vue";

const name = ref<string>("");
const result = ref<boolean>(false);
const h1Ref = ref<HTMLElement | null>(null);

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

onBeforeMount(() => {
  fetchData();
});

watch(todoId, fetchData);

onMounted(() => {
  if (h1Ref.value) {
    h1Ref.value.textContent = "I control it right now!";
  }
});

onUpdated(() => {
  result.value = true;
});
</script>

<template>
  <div>
    <h1 ref="h1Ref">Make me red</h1>
    <input v-model="name" />
    <p>{{ result }}</p>

    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>
