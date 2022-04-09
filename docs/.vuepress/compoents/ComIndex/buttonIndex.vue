<template>
  <div class="button-session">
    <div class="group-wrapper">
      <div class="button-wrapper"><my-button type="primary">确定</my-button></div>
      <div class="button-wrapper"> <my-button type="dashed">确定</my-button></div>
      <div class="button-wrapper"> <my-button type="default">确定</my-button></div>
    </div>
    <div class="group-wrapper">
      <div class="button-wrapper"><my-button type="primary" danger="danger">确定</my-button></div>
      <div class="button-wrapper"><my-button type="dashed" danger="danger">确定</my-button></div>
      <div class="button-wrapper"><my-button type="default" danger="danger">确定</my-button></div>
    </div>
    <div class="group-wrapper">
      <div class="button-wrapper"><my-button type="dashed" danger="inDanger" shape="circle">确定</my-button></div>
      <div class="button-wrapper"><my-button type="default" danger="inDanger" shape="circle">确定</my-button></div>
      <div class="button-wrapper"><my-button type="primary" danger="inDanger" shape="circle">确定</my-button></div>
    </div>
    <div class="group-wrapper">
      <div class="button-wrapper"><my-button type="dashed" danger="danger" shape="round">确定</my-button></div>
      <div class="button-wrapper"><my-button type="default" danger="danger" shape="round">确定</my-button></div>
      <div class="button-wrapper"><my-button type="primary" danger="danger" shape="round">确定</my-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonIndex"
};
</script>

<style lang="scss" scoped>
.button-session{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}
.group-wrapper{
  margin-top: 20px;
}
.button-wrapper{
  width: 80px;
  height: 40px;
  display: inline-block;
  margin-left: 20px;
}
</style>