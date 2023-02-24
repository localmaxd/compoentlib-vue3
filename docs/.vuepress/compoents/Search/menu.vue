<template>
  <div class="search-menu">
    <div
      class="search-menu-item"
      @click="clickEvent(item)"
      v-for="(item, index) of data"
      :key="index"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "search-menu-item",
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            value: "1",
            text: "1",
          },
        ];
      },
    },
  },
  setup(props, ctx) {
    const clickEvent = (item) => {
      ctx.emit("setItemValue", item);
    };
    return {
      clickEvent,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-menu {
  display: block;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  .search-menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: background-color 0.2s linear;
    &:hover {
      background-color: #dddddd;
    }
  }
}
</style>
