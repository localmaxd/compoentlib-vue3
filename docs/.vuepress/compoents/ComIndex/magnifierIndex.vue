<template>
  <div class="magnifier-wrapper">
    <Magnifier
      :link="links"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :magPower="magPower"
    ></Magnifier>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
name: "magnifierIndex",
  setup() {
      const state = reactive({
        links: "https:www.baidu.com",
        blank: true,
        imgUrl:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110603%2F52-11060319503629.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650180660&t=629159c989220f44ff99c389daa25d75",
        imgAlt: "sense",
        imgWidth: 300,
        imgHeight: 300,
        magWidth: 150,
        magHeight: 150,
        //放大倍数
        magPower: 1.5,
      });
      return {
        ...toRefs(state),
      }
  }
}
</script>

<style lang="scss" scoped>
.magnifier-wrapper{
  display: block;
  height: 400px;
}
</style>