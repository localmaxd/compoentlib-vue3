import myButton from "./index";
myButton.install = function (Vue) {
  Vue.component(myButton.name, myButton);
};
export default myButton;
