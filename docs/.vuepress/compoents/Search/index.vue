<template>
  <div v-focus class="search-wrapper">
    <searchInput></searchInput>
    <search-menu :data="menuDate"></search-menu>
  </div>
</template>

<script>
import searchInput from "./input.vue"
import searchMenu from "./menu.vue";
import focus from "./foucs";
import { reactive, toRefs } from "vue";
export default {
  name: "searchCom",
  components:{
    searchInput,
    searchMenu,
  },
  props:{
    placeholder:{
      type:String,
      default:"请输入"
    },
    data:Array,
  },
  directives:{focus},
  setup(props,ctx){
    let state = reactive({
      menuDate:props.data,
    });
    return {
      ...toRefs(state),
    }
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper{
  position: absolute;
  width: 300px;
}
</style>