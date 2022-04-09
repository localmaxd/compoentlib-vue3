<template>
  <div class="menu-item-group" :title="title">
    <div class="menu-name">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItemGroup",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-group {
  background-color: #f5f7fa;
}
</style>
