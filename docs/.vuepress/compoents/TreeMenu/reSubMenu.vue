<template>
  <sub-menu :key="data.id">
    <template v-slot:title>{{ data.title }}</template>
    <template v-for="c of data.children">
      <menu-item v-if="!c.children" :key="c.id">
        {{ c.title }}
      </menu-item>
      <re-sub-menu v-else :key="c.id" :data="c"></re-sub-menu>
    </template>
  </sub-menu>
</template>

<script>
import subMenu from "./subMenu.vue";
import menuItem from "./item.vue";
export default {
  name: "reSubMenu",
  props: {
    data: Object,
  },
  components: {
    subMenu,
    menuItem,
  },
};
</script>

<style scoped></style>
