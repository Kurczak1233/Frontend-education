<script setup lang="ts">
import { computed, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import components1 from "./testOe.vue";
import components2 from "./testTw.vue";

const router = useRouter();
const showChildren = ref(false);
const props = defineProps<{
  todo: any;
  smallMargin: boolean | undefined;
}>();

console.log(props.todo);

const changeChildrenVisiblity = () => {
  showChildren.value = !showChildren.value;
};

const navigateToPage = () => {
  router.push({ path: props.todo.path });
};

const isActive = computed(() => {
  return props.todo.text.includes("lists");
});

const isSideMenuOpen = ref(false);

onMounted(() => {
  console.log("isSideMenuOpen", isSideMenuOpen.value);
});
const toggleSidebarButton = document.querySelector(".logo");
//Create on click event on toggle-sidebar-button
console.log(toggleSidebarButton);
if (toggleSidebarButton) {
  toggleSidebarButton.addEventListener("click", (event) => {
    event.preventDefault();
    isSideMenuOpen.value = !isSideMenuOpen.value;
    console.log(isSideMenuOpen.value);
    toggleSidebarButton.removeEventListener("click", () => {
      console.log("REMOVED");
    });
    return;
  });
}
</script>

<template>
  <div
    :style="{ marginBottom: props.smallMargin ? '1rem' : '2rem' }"
    class="item-wrapper"
  >
    <div class="item" @click="changeChildrenVisiblity">
      <!-- <img src="./defaultDocsIcon.svg" /> -->
      <svg
        width="16"
        height="21"
        viewBox="0 0 16 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 3C12.9045 3 13.6067 3 14.1111 3.33706C14.3295 3.48298 14.517 3.67048 14.6629 3.88886C15 4.39331 15 5.09554 15 6.5V16C15 17.8856 15 18.8284 14.4142 19.4142C13.8284 20 12.8856 20 11 20H5C3.11438 20 2.17157 20 1.58579 19.4142C1 18.8284 1 17.8856 1 16V6.5C1 5.09554 1 4.39331 1.33706 3.88886C1.48298 3.67048 1.67048 3.48298 1.88886 3.33706C2.39331 3 3.09554 3 4.5 3"
          stroke="#9F9F9F"
          stroke-width="2"
        />
        <path
          d="M5 3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3C11 4.10457 10.1046 5 9 5H7C5.89543 5 5 4.10457 5 3Z"
          stroke="#9F9F9F"
          stroke-width="2"
        />
        <path
          d="M5 10L11 10"
          stroke="#9F9F9F"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5 14L9 14"
          stroke="#9F9F9F"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <i>
        <slot name="header"></slot>
      </i>
      <div class="content" :style="{ color: isActive ? 'red' : 'blue' }">
        <slot></slot>
        <div v-if="props.todo.children" @click="navigateToPage">></div>
      </div>
    </div>
    <div>{{ isSideMenuOpen }}</div>
    <!-- <components /> -->
    <div v-if="props.todo.children && showChildren">
      <ListsComponent
        v-for="child in props.todo.children"
        :key="child.id"
        :todo="child"
        :smallMargin="true"
      >
        <template #header>{{ child.id }}</template>
        {{ child.text }}
        <!-- <button @click="removeTodo(todo)">X</button> -->
      </ListsComponent>
    </div>
  </div>
</template>

<style scoped>
.item-wrapper {
  margin: 10px;
}
.item {
  display: flex;
  height: 32px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  margin-left: 1rem;
  justify-content: space-between;
  display: flex;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
}
</style>
