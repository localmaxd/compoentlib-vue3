export default {
  mounted(el) {
    function init() {
      const oSelectInput = el.querySelector("input");
      const placeHolder = oSelectInput.placeholder;
      oSelectInput.addEventListener("focus", function () {
        oSelectInput.placeholder = "";
      });

      oSelectInput.addEventListener("blur", function () {
        oSelectInput.placeholder = placeHolder;
      });
    }
    init();
  },
};
