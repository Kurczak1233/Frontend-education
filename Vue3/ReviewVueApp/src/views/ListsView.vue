<script setup lang="ts">
import { ref } from "vue";
import ListsComponent from "../components/ListsComponents/ListsComponent.vue";
let id = 0;

const newTodo = ref("");
const todos = ref([
  { id: id++, text: "Learn HTML" },
  { id: id++, text: "Learn JavaScript" },
  { id: id++, text: "Learn Vue" },
]);

const addTodo = () => {
  if (!newTodo.value || newTodo.value === "") {
    return;
  }
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
};

const removeTodo = (todo: any) => {
  todos.value = todos.value.filter((item) => item.id !== todo.id);
};
</script>

<template>
  <main>
    <ListsComponent v-for="todo in todos" :key="todo.id">
      <template #header>{{ todo.id }}</template>
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </ListsComponent>
    <input v-model="newTodo" />
    <button @click="addTodo">Add item</button>
  </main>
</template>
