<template>
  <div id="d_canvasID" ref="canvasRef"></div>
  <button @click="cc">{{ isRotate ? "停止" : "旋转" }}</button>
</template>

<script>
import { ref, nextTick, onMounted, reactive, toRefs } from "vue";
import { World } from "./index.js";

export default {
  name: "threeGuild",
  setup(props, ctx) {
    const canvasRef = ref(null);

    const state = reactive({ isRotate: false, world: {} });
    const cc = function () {
      if (!state.isRotate) {
        state.isRotate = true;
        state.world.start();
      } else {
        state.isRotate = false;
        state.world.stop();
      }

      //   const world = new World(canvasRef.value);
      //   world.start();
    };
    onMounted(() => {
      const canvas = document.getElementById("d_canvasID");
      state.world = new World(canvas);
      state.world.render();
    });
    return { ...toRefs(state), cc, canvasRef };
  },
};
</script>

<style lang="scss" scoped>
#d_canvasID {
  height: 400px;
}
</style>
