import buttons from "./compoents/Button/index.vue";
import input from "./compoents/Input/index.vue";
import buttonIndex from "./compoents/ComIndex/buttonIndex.vue";
import inputIndex from "./compoents/ComIndex/inputIndex.vue";
import carousel from "./compoents/Carousel/index.vue";
import carouselIndex from "./compoents/ComIndex/carouselIndex.vue";
import Magnifier from "./compoents/Magnifier/Magnifier.vue";
import magnifierIndex from "./compoents/ComIndex/magnifierIndex.vue";
import navbarIndex from "./compoents/ComIndex/navbarIndex.vue";
import "./fonts/iconfont.css";
import Menu from "./compoents/Menu/index.vue";
import MenuItem from "./compoents/Menu/MenuItem.vue";
import menuItemGroup from "./compoents/Menu/MenuItemGroup.vue";
import subMenu from "./compoents/Menu/SubMenu.vue";
import Modal from "./compoents/Modal/index.vue";
import modalIndex from "./compoents/ComIndex/modalIndex.vue";
import selector from "./compoents/Selector/index.vue";
import search from "./compoents/Search/index.vue";
import TreeMenu from "./compoents/TreeMenu/index.vue";
import treeIndex from "./compoents/ComIndex/treeIndex.vue";
import searchIndex from "./compoents/ComIndex/searchIndex.vue";

export default function(Vue) {
  Vue.app.component(buttons.name,buttons)
  Vue.app.component(input.name,input)
  Vue.app.component(buttonIndex.name,buttonIndex)
  Vue.app.component(inputIndex.name,inputIndex)
  Vue.app.component(carousel.name,carousel)
  Vue.app.component(carouselIndex.name,carouselIndex)
  Vue.app.component(Magnifier.name,Magnifier)
  Vue.app.component(magnifierIndex.name,magnifierIndex)
  Vue.app.component(Menu.name, Menu);
  Vue.app.component(MenuItem.name, MenuItem);
  Vue.app.component(menuItemGroup.name, menuItemGroup);
  Vue.app.component(subMenu.name, subMenu);
  Vue.app.component(navbarIndex.name, navbarIndex);
  Vue.app.component(Modal.name, Modal);
  Vue.app.component(modalIndex.name, modalIndex);
  Vue.app.component(selector.name, selector);
  Vue.app.component(TreeMenu.name, TreeMenu);
  Vue.app.component(treeIndex.name, treeIndex);
  Vue.app.component(search.name, search);
  Vue.app.component(searchIndex.name,searchIndex);
}
