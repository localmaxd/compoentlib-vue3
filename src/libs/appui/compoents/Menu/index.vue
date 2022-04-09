<template>
  <ul class="menu" ref="menuRef">
    <slot></slot>
  </ul>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "MenuIndex",
  props: {
    mode: {
      type: String,
      default: "horizontal",
    },
  },
  setup(props) {
    const menuRef = ref(null);
    const mode = ref(props.mode);
    onMounted(() => {
      if (mode.value === "horizontal") {
        const menuIndex = menuRef.value;
        const menuList = menuIndex.children;
        for (let i = 0; i < menuList.length; i++) {
          console.log(menuList[i]);
          menuList[i].style.float = "left";
          menuList[i].style.display = "inline-block";
        }
      }
    });
    return {
      menuRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 42px;
}
</style>
