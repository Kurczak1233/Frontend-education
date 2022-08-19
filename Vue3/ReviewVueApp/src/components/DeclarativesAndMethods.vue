<script setup lang="ts">
import { reactive, ref } from "vue";

interface ITest {
  className: string;
}

const classRef = ref<string>("red");
const titleClass = reactive<ITest>({ className: "red" });

const changeClassNameToRed = () => {
  titleClass.className = "red";
};

const changeClassNameToBlue = () => {
  titleClass.className = "blue";
};

const secondRedBlue = () => {
  classRef.value = "blue";
};
const secondRedRed = () => {
  classRef.value = "red";
};
</script>

<template>
  <div>
    <h1 @click="changeClassNameToRed()" :class="titleClass.className">
      Make me red
    </h1>
    <div @click="changeClassNameToBlue()">Test</div>
    <h2 @click="secondRedRed()" :class="classRef">Second red with ref</h2>
    <h3 @click="secondRedBlue()">Button to blue</h3>
  </div>
</template>

<style>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
