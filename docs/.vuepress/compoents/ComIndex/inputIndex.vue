<template>
  <div class="input-group">
    <InputCom
      placeholder="请输入用户名"
      v-model:value="username"
      type="text"
      :clearable="true"
    ></InputCom>
  </div>
  <div class="input-group">
    <InputCom
      placeholder="请输入密码"
      v-model:value="password"
      type="password"
      :clearable="false"
      :show-password="true"
    ></InputCom>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "inputIndex",
  setup() {
    const username = ref("");
    const password = ref("");
    return {
      username,
      password,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  width: 240px;
}
</style>
