<template>
  <div class="sub-menu" @mouseenter="showSub" @mouseleave="hidSub">
    <div class="sub-title">
      <!--      递归子菜单名称和图像-->
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <!--    下一个递归项-->
    <div class="sub-item" v-show="subMenuShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "subMenus",
  setup() {
    const subMenuShow = ref(false);
    const showSub = async () => {
      subMenuShow.value = true;
    };
    const hidSub = async () => {
      subMenuShow.value = false;
    };
    return {
      subMenuShow,
      showSub,
      hidSub,
    };
  },
};
</script>

<style lang="scss" scoped>
.sub-menu {
  position: relative;
  .sub-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .icon {
      position: absolute;
      top: 0;
      right: 15px;
    }
  }
  .sub-item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background-color: #f333;
  }
}
</style>
