<!--注意点1：可以通过给当前dom 设置ref，在onmounted阶段获取dom节点，以此来获取上面的属性-->
<!--注意点2：双向绑定可以用在任意两个组件之间，父组件传递的props用v-model修饰，子组件通过emit update'paras'的形式传递-->
<!--子组件中emit需要注册，否则父组件中会执行两次-->
<!--子组件用emit向父组件传递事件，在父组件中可以@事件，定义方法-->
<template>
  <div class="modal-mask" v-show="isVisible">
    <div
      class="ul-modal"
      ref="uiModel"
      :style="{
        width: width + 'px',
        height: height + 'px',
        borderRadius: borderRadius + 'px',
        marginLeft: -width / 2 + 'px',
        top: position === 'center' ? '50%' : '50px',
        marginTop: position === 'center' ? -uiModelHeight / 2 + 'px' : '',
      }"
    >
      <div
        class="header"
        :style="{ color: headerTextColor, backgroundColor: headerColor }"
      >
        <h1>{{ headerText }}</h1>
        <a href="javascript:;" @click="close">&times;</a>
      </div>
      <div class="article">
        <p>{{ contentText }}</p>
      </div>
      <div class="but-group" v-if="btnGroupShow">
        <button class="btn btn-cancel" @click="close">
          {{ cancelText }}
        </button>
        <button class="btn btn-confirm" @click="confirm">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    borderRadius: {
      type: Number,
      default: 10,
    },
    headerColor: {
      type: String,
      default: "black",
    },
    headerText: {
      type: String,
      default: "",
    },
    headerTextColor: {
      type: String,
      default: "red",
    },
    contentText: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "center",
    },
    btnGroupShow: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: "yes",
    },
    cancelText: {
      type: String,
      default: "no",
    },
  },
  emits: ["confirm", "cancel", "update:isVisible"],
  setup(props, ctx) {
    const uiModel = ref(null);
    const state = reactive({
      uiModelHeight: 0,
    });
    const close = () => {
      ctx.emit("update:isVisible", false);
      ctx.emit("cancel");
    };
    const confirm = () => {
      ctx.emit("update:isVisible", false);
      ctx.emit("confirm", { username: "dcw" });
    };
    onMounted(() => {
      state.uiModelHeight = uiModel.value.offsetHeight;
    });
    return {
      uiModel,
      ...toRefs(state),
      close,
      confirm,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
    outline: none;
    color: #333;
  }
  h1,
  p {
    font-weight: normal;
    margin: 0;
  }
  button {
    outline: none;
    border: none;
  }

  .ul-modal {
    position: fixed;
    left: 60%;
    overflow: hidden;
    background-color: white;
    box-shadow: 1px 2px 3px #3333;
  }
  .header {
    height: 44px;
    padding: 0 15px;
    box-sizing: border-box;
    h1 {
      display: inline-block;
      font-size: 18px;
      line-height: 44px;
    }
    a {
      font-size: 18px;
      line-height: 44px;
      float: right;
    }
  }
  .article {
    height: 50%;
    border: 1px solid #3333;
  }
  .but-group {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
  button {
    cursor: pointer;
    height: 30px;
    width: 50px;
    margin-left: 10px;
    border: 1px solid #3333;
  }
  .btn-confirm {
    color: white;
    background-color: #409eff;
  }
}
</style>
