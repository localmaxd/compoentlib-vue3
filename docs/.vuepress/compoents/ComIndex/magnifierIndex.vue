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
      links: "",
      blank: true,
      imgUrl: "	/compoentlib-vue3/img/1.jpeg",
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
    };
  },
};
</script>

<style lang="scss" scoped>
.magnifier-wrapper {
  display: block;
  height: 400px;
}
</style>
