<template>
  <div class="tree-wrapper">
    <template v-for="item of menuData">
      <menu-item v-if="!item.children" :key="item.id">{{
        item.title
      }}</menu-item>
      <re-sub-menu v-else :key="item.id" :data="item"></re-sub-menu>
    </template>
  </div>
</template>

<script>
import MenuItem from "./item";
import menuData from "@/libs/appui/compoents/TreeMenu/data/menulist";
import ReSubMenu from "@/libs/appui/compoents/TreeMenu/reSubMenu";
export default {
  name: "TreeMenu",
  components: {
    ReSubMenu,
    MenuItem,
  },
  setup() {
    return {
      menuData,
    };
  },
};
</script>

<style lang="scss" scoped>
.tree-wrapper {
  width: 100%;
  background-color: black;
  color: white;
}
</style>
