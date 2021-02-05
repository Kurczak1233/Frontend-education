<template>
  <textarea :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "FormTexxtAreae",
  props: {
    value: {
      default: "",
      type: String
    }
  }
};
</script>
