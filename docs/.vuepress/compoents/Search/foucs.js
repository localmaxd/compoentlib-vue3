export default {
  mounted(el){

    const oSearchInput = el.querySelector('.search-input'),
      oSearchMenu = el.querySelector('.search-menu');
    const oInput = oSearchInput.querySelector('input'),
      oIcon = oSearchInput.querySelector('span');
    const oMenu = el.querySelector('.search-menu');
    const oMenuItem = oMenu.querySelectorAll('.search-menu-item');
    for(let i = 0;i<oMenuItem.length;i++){
      oMenuItem[i].addEventListener('click',function(){
        oInput.value = oMenuItem[i].innerHTML;
      })
    };

    oInput.addEventListener('focus',function(){
      setTimeout(() => {
        oSearchMenu.style.display = "block";

      },200);
      oIcon.className = "iconfont icon-sousuo";
      //重点，延迟隐藏的行为
    });
    oInput.addEventListener('blur',function(){
      setTimeout(()=>{
        oSearchMenu.style.display = "none";
      },200)
      oIcon.className = "iconfont icon-down";
    });

    oInput.addEventListener('input',function(e){
      const inputValue = e.target.value;

    })
  }
}