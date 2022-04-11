<template>
  <search-com placeholder="请选择" :data="searchData" @setItemValue="setItemValue"></search-com>
</template>

<script>
import searchData from "../Search/data/searchData";
export default {
  name: "searchIndex",
  setup() {
    const setItemValue = (value) =>{
      console.log(value);
    }
    return {
      searchData,
      setItemValue,
    }
  }
};
</script>

<style lang="scss" scoped>
</style>