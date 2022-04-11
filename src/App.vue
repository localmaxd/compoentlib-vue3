<template>
  <div class="wrapper">
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
    <!--    <InputCom-->
    <!--      placeholder="placeholder"-->
    <!--      type="text"-->
    <!--      v-model:value="username"-->
    <!--      :clearable="true"-->
    <!--    ></InputCom>-->
    <!--        <input-com-->
    <!--      placeholder="placeholder"-->
    <!--      type="password"-->
    <!--      :disabled="false"-->
    <!--      :clearable="false"-->
    <!--      :showPassword="true"-->
    <!--      v-model:value="password"-->
    <!--      name="name"-->
    <!--    ></input-com>-->
    <!--        <my-selector placeholder="请选择" :show-arrow="true" arrow-area="top">-->
    <!--          <menu-item><a href="">1 st list</a></menu-item>-->
    <!--          <menu-item><a href="">2 st list</a></menu-item>-->
    <!--          <menu-item><a href="">3 st list</a></menu-item>-->
    <!--        </my-selector>-->
    <!--        <menu-index>-->
    <!--          <menuItem>option 1</menuItem>-->
    <!--          <SubMenu title="option2" SubMode="">-->
    <!--            <menu-item-group title="item1">-->
    <!--              <menuItem>option 1-1</menuItem>-->
    <!--              <menuItem>option 1-2</menuItem>-->
    <!--              <menuItem>option 1-3</menuItem>-->
    <!--            </menu-item-group>-->
    <!--            <sub-menu title="option 1-4" SubMode="hor">-->
    <!--              <menu-item-group title="item2">-->
    <!--                <menuItem>option 2-1</menuItem>-->
    <!--                <menuItem>option 2-2</menuItem>-->
    <!--                <menuItem>option 2-3</menuItem>-->
    <!--              </menu-item-group>-->
    <!--            </sub-menu>-->
    <!--          </SubMenu>-->
    <!--          <menuItem>option 3</menuItem>-->
    <!--          <menuItem>option 4</menuItem>-->
    <!--        </menu-index>-->
    <!--    "serve": "vue-cli-service serve",-->
    <!--    "build": "vue-cli-service build",-->
    <!--    "test:unit": "vue-cli-service test:unit",-->
    <!--    "lint": "vue-cli-service lint",-->
    <!--    "build:js": "webpack &#45;&#45;config ./webpack.config.js",-->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // const username = ref("asd");
    // const password = ref("123");
    // return {
    //   username,
    //   password,
    // };
    const state = reactive({
      links: "https:www.baidu.com",
      blank: true,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110603%2F52-11060319503629.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650180660&t=629159c989220f44ff99c389daa25d75",
      imgAlt: "sense",
      imgWidth: 500,
      imgHeight: 500,
      magWidth: 100,
      magHeight: 100,
      //放大倍数
      magPower: 1.5,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  padding-left: 300px;
  margin: 0 auto;
  a {
    list-style: none;
    text-decoration: none;
    border: none;
    color: #999999;
  }
  .line-item {
    display: inline-block;
  }
  .col-item {
    display: block;
  }
}
</style>
