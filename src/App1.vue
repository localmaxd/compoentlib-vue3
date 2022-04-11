<template>
  <!--  <div class="app">-->
  <div class="wrapper">
    <!-- 触发showModal事件 修改visible的值  -->
    <!--    <button @click="isVisible = true">模态框</button>-->
    <!--    <my-button type="dashed" danger="danger">确定</my-button>-->
    <!--  </div>-->
    <!--  <div class="button-wrapper">-->
    <!--            <my-button-->
    <!--              type="default"-->
    <!--              danger="danger"-->
    <!--              shape="round"-->
    <!--              icon="tessIcon"-->
    <!--              @click="onClicks"-->
    <!--              >删除</my-button-->
    <!--            >-->
    <!--  </div>-->
    <!--  <div class="button-wrapper">-->
    <!--    <my-button type="primary" shape="circle">取</my-button>-->
    <!--  </div>-->
    <!--  <div class="button-wrapper">-->
    <!--    <my-button-->
    <!--      type="primary"-->
    <!--      danger="danger"-->
    <!--      shape="round"-->
    <!--      icon="testIcon"-->
    <!--    ></my-button>-->

    <!--    <Modal-->
    <!--      v-model:isVisible="isVisible"-->
    <!--      :width="350"-->
    <!--      :height="200"-->
    <!--      :boderRadius="10"-->
    <!--      headerColor="#ffffff"-->
    <!--      headerText="this is a super model"-->
    <!--      contentText="Modal body text"-->
    <!--      postion="center"-->
    <!--      :btnGroupShow="true"-->
    <!--      confirmText="Yes"-->
    <!--      cancelText="No"-->
    <!--      @confirm="ModalConfirm"-->
    <!--      @cancel="ModalCancel"-->
    <!--    ></Modal>-->
    <!--    <tree-menu></tree-menu>-->
    <!--    <Magnifier-->
    <!--      :link="links"-->
    <!--      :blank="blank"-->
    <!--      :imgUrl="imgUrl"-->
    <!--      :imgAlt="imgAlt"-->
    <!--      :imgWidth="imgWidth"-->
    <!--      :imgHeight="imgHeight"-->
    <!--      :magWidth="magWidth"-->
    <!--      :magHeight="magHeight"-->
    <!--      :magPower="magPower"-->
    <!--    ></Magnifier>-->
    <slider-com
      :autoplay="true"
      :duration="2000"
      :initial="1"
      :hasDot="true"
      :hasDirector="false"
      :urlObject="urlObject"
    >
    </slider-com>
  </div>
</template>

<script>
// import { reactive, toRefs } from "vue";
import cardData from "@/libs/appui/compoents/Carousel/data/carouselData";

// import { ref } from "vue";

// import { reactive, toRefs } from "vue";
// import { ref } from "vue";

export default {
  name: "AppT",
  setup() {
    const urlObject = cardData;
    //   const state = reactive({
    //     links: "https:www.baidu.com",
    //     blank: true,
    //     imgUrl:
    //       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110603%2F52-11060319503629.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650180660&t=629159c989220f44ff99c389daa25d75",
    //     imgAlt: "sense",
    //     imgWidth: 500,
    //     imgHeight: 500,
    //     magWidth: 150,
    //     magHeight: 150,
    //     //放大倍数
    //     magPower: 1.5,
    //   });
    //   return {
    //     //将state平铺
    //     ...toRefs(state),
    //   };
    // let isVisible = ref(false);
    // const ModalConfirm = async (data) => {
    //   isVisible = false;
    //   console.log(data);
    // };
    // const ModalCancel = async () => {
    //   isVisible = false;
    //   console.log("cancel");
    // };
    // const showModal = function () {
    //   isVisible = true;
    // };
    // return {
    //   // urlObject,
    //   ModalConfirm,
    //   ModalCancel,
    //   showModal,
    //   isVisible,
    // };
    return {
      urlObject,
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 380px;
  height: 200px;
  margin: 100px auto;
}

//.button-wrapper {
//  width: 70px;
//  height: 40px;
//  display: inline-block;
//  padding-left: 20px;
//}
</style>
