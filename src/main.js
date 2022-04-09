import { createApp } from "vue";
import App from "./App.vue";
// import appUI from "./libs/appui";
import "./assets/fonts/iconfont.css";
import x from "./libs/appui";
//index 文件中导入
createApp(App).use(x).mount("#app");
