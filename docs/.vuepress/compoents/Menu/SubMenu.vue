<template>
  <li class="subMenu" @mouseenter="showHover" @mouseleave="hiddenHover">
    <menu-item>{{ title }}</menu-item>
    <div
      class="subHidden"
      v-show="isShow"
      :style="{
        position: subIsHor ? 'absolute' : '',
        left: subIsHor ? 162 + 'px' : 0,
      }"
    >
      <slot></slot>
    </div>
  </li>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "SubMenu",
  props: {
    title: {
      type: String,
      default: "",
    },
    SubMode: {
      type: String,
      default: "ver",
    },
  },
  setup(props) {
    const state = reactive({
      isShow: false,
      subIsHor: props.SubMode === "hor",
    });
    const showHover = () => {
      state.isShow = true;
    };
    const hiddenHover = () => {
      state.isShow = false;
    };
    return {
      ...toRefs(state),
      showHover,
      hiddenHover,
    };
  },
};
</script>

<style lang="scss" scoped>
.subMenu {
  width: 162px;
  z-index: 200;
  position: relative;
  cursor: pointer;
  display: inline-block;
  .subHidden {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 998;
  }
}
</style>
