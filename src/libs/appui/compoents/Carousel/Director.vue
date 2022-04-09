<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="$emit('dirClick', dir)">&gt;</a>
  </div>
  <div class="director dir-pre" v-if="dir === 'pre'">
    <a href="javascript:;" @click="$emit('dirClick', dir)">&lt;</a>
  </div>
</template>

<script>
export default {
  name: "CardDirector",
  props: {
    dir: String,
  },
  emits: ["dirClick"],
};
</script>

<style lang="scss" scoped>
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #ffff;
  background-color: rgba(0, 0, 0, 0.5);
  a {
    color: white;
    text-decoration: none;
  }
  &.dir-next {
    right: 0;
  }
  &.dir-pre {
    left: 0;
  }
}
</style>
