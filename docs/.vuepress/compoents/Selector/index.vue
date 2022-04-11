<template>
  <div
    v-focus
    class="selector"
    ref="selectInfo"
    @mouseenter="showHover = true"
    @mouseleave="showHover = false"
  >
    <input class="selector-inner" type="text" :placeholder="placeholder" />
    <span v-if="showArrow" class="downIcon"><i @click="handleClick">v</i></span>
    <div class="menu" :class="{ menuTop: menuTop }" v-if="showHover">
      <div class="triangle-down" v-show="!menuTop"></div>
      <slot></slot>
      <div class="triangle-up" v-show="menuTop"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import focus from "./focus";
export default {
  name: "mySelector",
  directives: {
    focus,
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    arrowDir: {
      type: String,
      default: "bottom",
    },
  },
  setup(props) {
    const state = reactive({
      showHover: false,
      menuTop: false
    });
    const selectInfo = ref(null);
    onMounted(() => {
      let selectEl = selectInfo.value;
      const selectTop = selectEl.offsetTop;
      const clientTop = document.documentElement.clientHeight;
      if (selectTop > Math.round(clientTop / 2)) {
        state.menuTop = true;
      } else {
        state.menuTop = false;
      }
      console.log(selectEl);
    });
    const handleClick = () => {
      state.showHover = !state.showHover;
    };
    return {
      handleClick,
      ...toRefs(state),
      selectInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.selector {
  width: 180px;
  font-size: 14px;
  display: inline-block;
  position: relative;
  .selector-inner {
    padding: 0;
    margin: 0;
    border: 1px solid #c0c4cc;
    width: 100%;
    height: 20px;
  }
  .downIcon {
    position: absolute;
    right: 0px;
    top: 2px;
    height: 20px;
    width: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .menu {
    position: absolute;
    width: 100%;
    z-index: 99;
    border-bottom: none;
    color: #333333;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    .triangle-up {
      width: 0;
      height: 0;
      margin-left: 45%;
      margin-top: 5px;
      border-bottom: 10px solid #e4e7ed;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: none;
    }
    .triangle-down {
      width: 0;
      height: 0;
      margin-left: 45%;
      margin-top: 5px;
      border-top: 10px solid #e4e7ed;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-buttom: none;
    }
  }
  .menuTop {
    top: -141px;
  }
}
</style>
