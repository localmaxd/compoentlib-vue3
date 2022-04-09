<template>
  <transition>
    <div v-picSize class="card-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from "vue";
import { watch } from "vue";
import picSize from "./carousel";
export default {
  name: "CardItem",
  directives: {
    picSize,
  },
  setup() {
    const instance = getCurrentInstance();
    // console.log(instance);
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });

    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
//开始进入
.v-enter-active {
  transform: translateX(100%);
}
//进入完毕
.v-enter-to {
  transform: translateX(0);
}
//开始退出
.v-leave-active {
  transform: translateX(0);
}
//退出结束
.v-leave-to {
  transform: translateX(-100%);
}

img {
  width: 100%;
  height: 100%;
}
</style>
