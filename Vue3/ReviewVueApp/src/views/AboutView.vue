<script setup lang="ts">
import HtmlVsText from "../components/HtmlVsText.vue";
import DeclarativesAndMethods from "../components/DeclarativesAndMethods.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <HtmlVsText class="htmlVsText" />
      <DeclarativesAndMethods class="declaratives" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .htmlVsText {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .declaratives {
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
</style>
