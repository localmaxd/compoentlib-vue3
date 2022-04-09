import { getStyle } from "./tools";

export default {
  //获取当前绑定的节点 magnifier
  mounted(el) {
    const oImgWrap = el,
      // 放大镜区域
      oMagWrap = oImgWrap.querySelector(".mag-wrap"),
      oMagImg = oMagWrap.querySelector(".mag-img"),
      oMagPowerInput = oImgWrap.querySelector("input"),
      magPower = oMagPowerInput.value,
      //获取原始图片的大小
      imgWidth = getStyle(oImgWrap, "width"),
      imgHeight = getStyle(oImgWrap, "height"),
      //获取放大图片的大小
      magWidth = getStyle(oMagWrap, "width"),
      magHeight = getStyle(oMagWrap, "height"),
      //获取当前图片的坐标
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop;
    // 定义一个启动函数;
    const init = () => {
      //启动后绑定事件
      bindEvent();
    };

    // 绑定相关事件
    function bindEvent() {
      //鼠标进入当前dom对象的区域然后移动
      oImgWrap.addEventListener(
        "mouseover",
        function (e) {
          //移动到区域内的时候将放大镜显示出来
          oMagWrap.className += " show";
          oMagWrap.style =
            oMagWrap.style.cssText + "transform: scale(" + magPower + ");";
          showMag(getXy(e).x, getXy(e).y);
          document.addEventListener("mousemove", handleMouseMove, null);
        },
        null
      );
      oImgWrap.addEventListener("mouseout", handleMouseOut, null);
    }

    function handleMouseMove(e) {
      console.log(magWidth, magHeight);
      const { x, y, mouseX, mouseY } = getXy(e);
      showMag(x, y, mouseX, mouseY);
    }

    function handleMouseOut() {
      //  移出区域
      oMagWrap.className = "mag-wrap";
      document.removeEventListener("mousemove", handleMouseMove, false);
    }
    //x，y 表示放大镜的左上角 ，mousex，y表示鼠标距离父组件的距离
    function showMag(x, y, mouseX, mouseY) {
      if (y > imgHeight - magHeight) {
        y = imgHeight - magHeight;
      }
      if (x < 0) {
        x = 0;
      }
      if (x > imgWidth - magWidth) {
        x = imgWidth - magWidth;
      }
      if (y < 0) {
        y = 0;
      }
      oMagWrap.style.left = x + "px";
      oMagWrap.style.top = y + "px";
      oMagImg.style.left = -x + "px";
      oMagImg.style.top = -y + "px";
      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        oMagWrap.className = "mag-wrap";
        //  解绑
        document.removeEventListener("mousemove", handleMouseMove, false);
      }
    }
    function getXy(e) {
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      };
    }

    init();
  },
};
