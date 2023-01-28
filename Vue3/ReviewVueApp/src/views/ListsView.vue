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

const mockedList = [
  {
    id: 1,
    text: "Todo 1",
    path: "/about/",
    children: [
      { id: 3, text: "Child 1" },
      { id: 4, text: "Child 2 lists" },
      {
        id: 5,
        text: "Child 3 lists",
        children: [
          { id: 6, text: "Nested Child 1" },
          { id: 7, text: "Nested Child 2" },
          { id: 8, text: "Nested Child 3 lists" },
        ],
      },
    ],
  },
  { id: 2, text: "Todo 2" },
];
</script>

<template>
  <main>
    <ListsComponent v-for="todo in mockedList" :key="todo.id" :todo="todo">
      <template #header>{{ todo.id }}</template>
      {{ todo.text }}
      <!-- <button @click="removeTodo(todo)">X</button> -->
    </ListsComponent>
    <input v-model="newTodo" />
    <button @click="addTodo">Add item</button>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </main>
</template>
