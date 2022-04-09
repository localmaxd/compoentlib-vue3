<template>
  <div class="navBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navBar {
  width: 100%;
  height: 100px;
  line-height: 40px;
  background-color: #fff;
  overflow: hidden;
}
</style>
