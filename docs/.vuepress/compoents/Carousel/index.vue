<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <card-item
        v-for="(item, index) of urlObject"
        :key="index"
        :selfIndex="index"
        :currentIndex="currentIndex"
      >
        <img :src="`${item.ImgUrl}`" alt="" />
      </card-item>
      <card-dot
        :has-dot="hasDot"
        :item-len="4"
        :current-index="currentIndex"
        dot-bg-color="#000000"
        @dot-click="dotClick"
      ></card-dot>
      <template v-if="hasDirector">
        <card-director dir="pre" @dirClick="dirClick"></card-director>
        <card-director dir="next" @dirClick="dirClick"></card-director>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  // getCurrentInstance,
} from "vue";
import CardItem from "./item.vue";
import CardDirector from "./Director.vue";

import CardDot from "./Dot.vue";
export default {
  name: "SliderCom",
  components: { CardDot, CardItem, CardDirector },
  emits: ["dotClick"],
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 3,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: String,
    urlObject: Object,
  },
  // methods: {
  //   dotClick(s) {
  //     console.log(s);
  //   },
  // },
  //z这里的值本质上传递给了虚拟dom，子组件可以通过parent找到这个数据
  setup(probes) {
    const state = reactive({
      currentIndex: probes.initial,
      itemLen: 0,
    });

    // const instance = getCurrentInstance();
    let t;
    const autoplay = async () => {
      if (probes.autoplay) {
        t = setInterval(() => {
          // console.log(1);
          setIndex("next");
        }, probes.duration);
      }
    };

    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "pre":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
    };

    const dotClick = async (index) => {
      state.currentIndex = index;
    };

    const dirClick = (dir) => {
      setIndex(dir);
    };

    // 清除定时器即可
    const mouseEnter = () => {
      clearInterval(t);
      t = null;
    };

    // 开启autoplay
    const mouseLeave = () => {
      autoplay();
    };

    onMounted(() => {
      state.itemLen = probes.urlObject.length;
      autoplay();
    });

    onBeforeUnmount(() => {
      clearInterval(t);
      t = null;
    });

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
