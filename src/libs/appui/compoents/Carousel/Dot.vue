<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#dddddd',
        }"
        @click="$emit('dotClick', item - 1)"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDots",
  props: {
    itemLen: Number,
    hasDot: {
      type: Boolean,
      default: true,
    },
    currentIndex: Number,
    dotBgColor: {
      type: String,
      default: "#ff5000",
    },
  },
};
</script>

<style lang="scss" scoped>
.dot-wrapper {
  border: 1px solid darkgreen;
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 10;
  margin-left: -39px;
  background-color: rgba(255, 255, 255, 0.3);
  .dot-item {
    display: inline-block;
    margin: 3px;
  }
  .dot-lk {
    display: block;
    padding-top: 8px;
    width: 8px;
    height: 0;
    border-radius: 50%;
    background: #ffffff;
  }
}
</style>
