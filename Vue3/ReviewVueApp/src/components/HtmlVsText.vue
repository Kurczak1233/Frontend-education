<script setup lang="ts">
import { ref } from "vue";
const text = ref("<span style='color: red'>This is red</span>");
</script>

<template>
  <h1 v-html="text"></h1>
</template>
