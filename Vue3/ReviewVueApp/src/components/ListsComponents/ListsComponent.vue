<template>
  <div class="item">
    <i>
      <slot name="header"></slot>
    </i>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  border: 1px solid gray;
  height: 32px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
}
</style>
