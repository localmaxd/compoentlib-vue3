<template>
  <li class="menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "menuItem",
};
</script>

<style lang="scss" scoped>
.menu-item {
  width: 162px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  color: #666;
  list-style: none;
  background-color: #f5f7fa;
  z-index: 58;
  &:hover {
    color: #409eff;
    transition: background-color 0.5s;
  }
}
</style>
