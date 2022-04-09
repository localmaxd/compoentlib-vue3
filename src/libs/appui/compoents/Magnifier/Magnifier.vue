<!--涉及大量dom操作可以不使用vue-->
<!--e。pagex 表示当前鼠标距离左侧的距离，dom.offsetlet表示dom距离左边的距离 相减得到鼠标距离dom左侧的距离-->
<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      class="mag-wrap"
      :href="link"
      target="blank?'_blank':''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px',
      }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        alt="imgAlt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px',
        }"
      />
    </a>
    <a class="img-lk">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
    <input type="text" :value="magPower" />
  </div>
</template>

<script>
import { magnifier } from "@/libs/appui/compoents/Magnifier/directives/dindex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Magnifier",
  //放大的逻辑不写在vue中，抽离出来，因为放大镜逻辑涉及大量的dom操作，还是会被重新渲染
  directives: { magnifier },
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 375,
    },
    magWidth: {
      type: Number,
      default: 100,
    },
    magHeight: {
      type: Number,
      default: 100,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    magPower: {
      type: Number,
      default: 1.5,
    },
    link: String,
    imgUrl: String,
    imgAlt: String,
  },
};
</script>

<style lang="scss" scoped>
.img-wrap {
  position: relative;
  border: 1px solid #ddd;
  //四边5px的阴影
  box-shadow: 0 0 5px #999;
  .static-img {
    width: 100%;
  }
  input {
    display: none;
  }
  .mag-wrap {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;
    zoom: normal;
    .mag-img {
      //放大的图片相对于mag-wrapper定位
      position: absolute;
      top: 0;
      left: 0;
    }
    &.show {
      display: block;
    }
  }
}
</style>
