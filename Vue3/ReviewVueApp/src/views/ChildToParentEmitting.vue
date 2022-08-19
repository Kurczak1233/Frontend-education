<script setup lang="ts">
import { ref } from "vue";
import ChildComp from "../components/ChildToPareentEmmitingComponents/ChildComp.vue";

const childMsg = ref("No child msg yet");
</script>

<template>
  <main>
    <ChildComp @response="(msg) => (childMsg = msg)" />
    <p>{{ childMsg }}</p>
  </main>
</template>
