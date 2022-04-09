<template>
  <div
    class="input-wrapper"
    :class="{ 'input-suffix-wrapper': clearable || showPassword }"
  >
    <input
      class="input-inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      :type="showPassword ? (PassIsVisible ? 'text' : 'password') : type"
      @input="handleInput"
    />
    <span class="input-suffix" v-if="clearable || showPassword">
      <i
        :class="
          PassIsVisible
            ? 'iconfont icon-yanjing_yincang_o'
            : 'iconfont icon-yanjing_xianshi_o'
        "
        v-if="showPassword"
        @click="show"
      ></i>
      <i class=""></i>
      <i
        class="iconfont icon-close-bold"
        v-if="clearable && value"
        @click="clear"
      ></i>
    </span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "InputCom",
  props: {
    placeholder: {
      type: String,
      default: "请输入用户名",
    },
    type: {
      type: String,
      default: "password",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
  },
  setup(props, ctx) {
    let PassIsVisible = ref(false);

    const show = () => {
      PassIsVisible.value = !PassIsVisible.value;
    };

    const handleInput = (e) => {
      ctx.emit("update:value", e.target.value);
    };
    const clear = () => {
      ctx.emit("update:value", "");
    };
    // const show = () => {
    // }
    console.log(PassIsVisible.value);
    return {
      PassIsVisible,
      handleInput,
      clear,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .input-inner {
    width: 100%;
    -webkit-appearance: none; //禁止默认渲染
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 0.1);
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.input-suffix-wrapper {
  .input-suffix {
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 980;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
