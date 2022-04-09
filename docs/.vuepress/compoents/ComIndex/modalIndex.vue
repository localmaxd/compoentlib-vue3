<template>
      <div class="button-wrapper">
        <my-button @click="isVisible = true">点击我显示</my-button>
      </div>
      <Modal
        v-model:isVisible="isVisible"
        :width="350"
        :height="200"
        :boderRadius="10"
        headerColor="#ffffff"
        headerText="this is a super model"
        contentText="Modal body text"
        postion="center"
        :btnGroupShow="true"
        confirmText="Yes"
        cancelText="No"
        @confirm="ModalConfirm"
        @cancel="ModalCancel"
      ></Modal>

</template>

<script>
import { ref } from "vue";

export default {
  name: "modalIndex",
  setup (){
    let isVisible = ref(false);
    const ModalConfirm = async (data) => {
      isVisible = false;
      console.log(data);
    };
    const ModalCancel = async () => {
      isVisible = false;
      console.log("cancel");
    };
    const showModal = function () {
      isVisible = true;
    };
    return {
      // urlObject,
      ModalConfirm,
      ModalCancel,
      showModal,
      isVisible,
    };
  }

};
</script>

<style scoped>
.button-wrapper{
  width: 200px;
}
</style>