<template>
<div class="search-input" ref="searchRef">
  <input class="input" type="text"/>
  <span class="iconfont icon-down"></span>
</div>
</template>

<script>

export default {
  name: "searchInput",
  props :{
    placeholder:{
      type:String,
      default:"请选择",
    },
    inputValue:{
      type:String,
      default:"",
    }
  },
};
</script>

<style lang="scss" scoped>
.search-input{
  position: relative;
  width: 100%;
  height: 38px;
  .input{
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s linear;
    color: black;
    &:focus{
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }

  .iconfont,
  .placeholder{
    position: absolute;
  }
  .placeholder{
    left: 15px;
    top: 8px;
    color: #999;
  }
  .iconfont{
    right: 15px;
    top: 12px;
    color: #999;
    line-height: 15px;
    font-size: 15px;
    cursor: pointer;
    &.icon-search{
      font-size: 22px;
      top: 8px;
    }
  }
}
</style>