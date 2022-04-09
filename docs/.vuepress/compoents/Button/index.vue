<!--可以通过：class的传递一个动态props数组，若要选择用并集选择器 之间不能有空格-->
<!--在组件中嵌入文字，可以设置一个slot-->
<!--组件里面使用组件库想要覆盖样式可以用：：deep解决 less中用/deep-->
<template>
    <button
      class="MyButton"
      ref="butItem"
      :class="[`${type}`, `${danger}`, `${shape}`]"
      @click="handleClick"
    >
      <i v-if="icon" :class="icon"></i>
      <span class="button-name"><slot></slot></span>
    </button>
</template>

<script>
import { onMounted, ref } from "vue";
// import bUtil from "./utils";
export default {
  name: "MyButton",
  // directives: { bUtil },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    shape: {
      type: String,
      default: "inRound",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: String,
      default: "inDanger",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  emits: ["click"], //必须先注册 否则会执行两次
  setup(props, ctx) {
    const handleClick = () => {
      console.log("x");
      ctx.emit("click");
    };
    const butItem = ref(null);
    onMounted(() => {
      let el = butItem.value;
      let height = parseInt(window.getComputedStyle(el, null)["height"]);
      let width = parseInt(window.getComputedStyle(el, null)["width"]);
      if (height < 30) {
        return new Promise((resolve, reject) => {
          reject(new Error("please enlarge height"));
        });
      } else if ((height > 30 && height < 100) || width < 100) {
        el.style.fontSize = (Math.min(height, width) * 0.2).toFixed(2) + "px";
      } else {
        el.style.fontSize = (Math.min(height, width) * 0.3).toFixed(2) + "px";
      }
    });
    return {
      butItem,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
  .MyButton {
    width: 100%;
    height: 100%;
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    background-color: white;
    border: 1px solid #0000000b;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    font-weight: 300;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 12px 20px;
    font-size: 80px;
    border-radius: 4px;
    transition: 0.1s;
  }
  .primary {
    color: white;
    background-color: #409eff;
    &:hover {
      background-color: skyblue;
      transition: 0.5s;
    }
  }
  .dashed {
    color: black;
    border: 1px dashed #909399;
    &:hover {
      color: #409eff;
      border: 1px dashed #409eff;
      transition: 0.5s;
    }
  }
  .default {
    color: black;
    background-color: white;
    border: 1px solid black;
    &:hover {
      color: #409eff;
      border: 1px solid #409eff;
      transition: 0.5s;
    }
  }
  .primary.danger {
    color: white;
    background-color: red;
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  .default.danger {
    background-color: white;
    color: red;
    border: 1px solid red;
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  .dashed.danger {
    background-color: white;
    color: red;
    border: 1px dashed red;
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  .round {
    border-radius: 10px 10px;
  }
  .circle {
    border-radius: 50% 50%;
  }
</style>
