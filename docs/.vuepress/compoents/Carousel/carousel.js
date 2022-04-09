export default {
  mounted(el) {
    // console.log(el);
    const cardItem = el;
    const width = parseInt(window.getComputedStyle(el, null)["width"]);
    const height = parseInt(window.getComputedStyle(el, null)["height"]);
    const img = cardItem.querySelector("img");
    console.log(width, height);
    img.style.height = height + "px";
    img.style.width = width + "px";
  },
};
