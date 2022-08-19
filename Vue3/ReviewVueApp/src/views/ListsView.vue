<script setup lang="ts">
import { computed, ref } from "vue";
import ListsComponent from "../components/ListsComponents/ListsComponent.vue";
let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const addTodo = () => {
  if (!newTodo.value || newTodo.value === "") {
    return;
  }
  todos.value.push({
    id: id++,
    text: newTodo.value,
    done: false,
  });
  newTodo.value = "";
};

const removeTodo = (todo: any) => {
  todos.value = todos.value.filter((item) => item.id !== todo.id);
};

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});
</script>

<template>
  <main>
    <ListsComponent v-for="todo in filteredTodos" :key="todo.id">
      <template #header>{{ todo.id }}</template>
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </ListsComponent>
    <input v-model="newTodo" />
    <button @click="addTodo">Add item</button>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </main>
</template>
