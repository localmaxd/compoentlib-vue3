<script>
import { ref, onMounted, reactive, toRefs } from "vue";
import { opneai } from "./generate.js";
export default {
  name: "Polish",
  setup() {
    const input_ref = ref(null);
    const state = reactive({
      data: [],
      isLoading: true,
      hint: "",
    });
    const testStr = "123";
    const changeSize = () => {
      console.log(window.innerWidth, window.innerHeight);
    };

    const LCS = (str1, str2) => {
      let dp = [];
      let path = [];
      for (let i = 0; i <= str1.length; i++) {
        dp.push(new Array(str2.length + 1).fill(-1));
      }
      for (let i = 0; i <= str1.length; i++) {
        path.push(new Array(str2.length + 1).fill(""));
      }

      function dfs(i, j) {
        if (dp[i][j] != -1) {
          return dp[i][j];
        }
        if (i == 0 || j == 0) {
          dp[i][j] = 0;
          return dp[i][j];
        } else if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
          dp[i][j] = dfs(i - 1, j - 1) + 1;
          path[i][j] = "lu";
          return dp[i][j];
        } else {
          if (dfs(i - 1, j) >= dfs(i, j - 1)) {
            dp[i][j] = dfs(i - 1, j);
            path[i][j] = "u";
          } else {
            dp[i][j] = dfs(i, j - 1);
            path[i][j] = "l";
          }
          return dp[i][j];
        }
      }
      let resStr = "";
      function dfs_path(i, j) {
        if (i == 0 || j == 0) {
          return;
        }
        if (path[i][j] == "lu") {
          resStr += str1.charAt(i - 1);
          dfs_path(i - 1, j - 1);
        } else if (path[i][j] == "u") {
          dfs_path(i - 1, j);
        } else {
          dfs_path(i, j - 1);
        }
      }
      dfs(str1.length, str2.length);
      dfs_path(path.length - 1, path[0].length - 1);
      return new Set(resStr.split("").reverse());
    };

    onMounted(() => {
      const input_dom = input_ref.value;
      input_dom.addEventListener("blur", async () => {
        const inputText = input_dom.value.trim();

        if (inputText.length > 10) {
          state.hint = "润色中,稍等!";
          try {
            const completion = await opneai.createChatCompletion({
              model: "gpt-3.5-turbo",
              temperature: 0.5,
              messages: [
                { role: "system", content: "你是一个论文写作高手" },
                {
                  role: "user",
                  content:
                    "润色这段文字,使得结构完整,语言流畅,逻辑性强:" + inputText,
                },
              ],
              max_tokens: 1024,
            });
            // console.log(completion.data.choices[0].message.content);
            let temp = completion.data.choices[0].message.content.trim();
            // let temp = "1231234412";
            const lcsArray = LCS(inputText, temp);
            let resStr = [];
            for (let i = 0; i < temp.length; i++) {
              if (temp[i] == "\t") {
                continue;
              } else {
                if (lcsArray.has(temp[i])) {
                  resStr.push({ value: temp[i], color: "span_black" });
                } else {
                  resStr.push({ value: temp[i], color: "span_red" });
                }
              }
            }
            state.data = resStr;
            state.isLoading = false;
            if (
              navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
            ) {
              state.hint = "润色完成，已经复制到剪贴板，请直接粘贴";
              return navigator.clipboard.writeText(temp);
            } else {
              state.hint = "浏览器不支持剪贴板";
              return Promise.reject("不支持剪贴板");
            }
          } catch (error) {
            state.hint = "错误" + error;
          }
        } else {
          state.hint = "汉字数量至少大于10!";
        }
      });
      input_dom.addEventListener("focus", () => {
        state.isLoading = true;
      });
    });

    return { changeSize, input_ref, ...toRefs(state) };
  },
};
</script>
<template>
  <div class="main">
    <textarea
      rows="20"
      cols="40"
      maxlength="2000"
      name="input_area"
      ref="input_ref"
      value=""
      autofocus="true"
      placeholder="请复制需要润色的段落，粘贴到此处"
    >
    </textarea>
    <div class="out_put">
      <div class="out_put_inner" v-show="isLoading === false">
        <span v-for="(item, index) in data" :key="index" :class="item.color">{{
          item.value
        }}</span>
      </div>

      <div class="hint">{{ hint }}</div>
      <!-- <p>{{ isLoading === false ? data : "正在加载" }}</p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  //   border: 1px solid;
  display: flex;
  flex-direction: row;
  margin: 20px;
  textarea {
    border-radius: 2px;
  }
  span {
    white-space: pre;
  }
  .span_red {
    color: red;
  }
  .out_put {
    margin-left: 20px;
    .hint {
      color: greenyellow;
    }
  }
  .out_put_inner {
    width: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
}
</style>
