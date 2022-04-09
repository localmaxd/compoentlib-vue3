// import Magnifier from "@/libs/appui/compoents/Magnifier/Magnifier";
// import Selector from "@/libs/appui/compoents/Selector";
// import Carousel from "@/libs/appui/compoents/Carousel";
// import TreeMenu from "@/libs/appui/compoents/TreeMenu";
// import Modal from "@/libs/appui/compoents/Modal";
import Button from "./compoents/Button/index.vue";
import Input from "./compoents/Input/index.vue";
// import Magnifier from "@/libs/appui/compoents/Magnifier/Magnifier";
// import NavBar from "@/libs/appui/compoents/NavBar";
// import MenuItem from "@/libs/appui/compoents/Menu/MenuItem";
// import Menu from "@/libs/appui/compoents/Menu";
// import menuItemGroup from "@/libs/appui/compoents/Menu/MenuItemGroup";
// import subMenu from "@/libs/appui/compoents/Menu/SubMenu";

const x = function install(Vue) {
  // Vue.component(Menu.name, Menu);
  // Vue.component(MenuItem.name, MenuItem);
  // Vue.component(menuItemGroup.name, menuItemGroup);
  // Vue.component(subMenu.name, subMenu);
  // 注册放大镜
  // Vue.component(Magnifier.name, Magnifier);
  //注册下拉框
  // Vue.component(Selector.name, Selector);
  // 轮播图
  // Vue.component(Carousel.name, Carousel);
  // 树形组件 data驱动的
  // Vue.component(TreeMenu.name, TreeMenu);
  //模态框
  // Vue.component(Modal.name, Modal);
  //按钮
  Vue.component(Button.name, Button);
  //input
  Vue.component(Input.name, Input);
  //NavBar
  // Vue.component(NavBar.name, NavBar);
};
export default x;
