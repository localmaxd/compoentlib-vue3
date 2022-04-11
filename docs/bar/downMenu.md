## 下拉组件


<div class="selector-wrapper">
    <my-selector placeholder="请选择" :show-arrow="true">
        <menu-item><a href="">1 st list</a></menu-item>
        <menu-item><a href="">2 st list</a></menu-item>
        <menu-item><a href="">3 st list</a></menu-item>
    </my-selector>
</div>

<div class="selector-wrapper">
    <my-selector placeholder="请选择" :show-arrow="true" arrowDir="top">
        <menu-item><a href="">1 st list</a></menu-item>
        <menu-item><a href="">2 st list</a></menu-item>
        <menu-item><a href="">3 st list</a></menu-item>
    </my-selector>
</div>

<style>
.selector-wrapper{
    margin-top:100px;
}
</style>

```html
<div class="selector-wrapper">
    <my-selector placeholder="请选择" :show-arrow="true">
        <menu-item><a href="">1 st list</a></menu-item>
        <menu-item><a href="">2 st list</a></menu-item>
        <menu-item><a href="">3 st list</a></menu-item>
    </my-selector>
</div>

<div class="selector-wrapper">
    <my-selector placeholder="请选择" :show-arrow="true" arrowDir="top">
        <menu-item><a href="">1 st list</a></menu-item>
        <menu-item><a href="">2 st list</a></menu-item>
        <menu-item><a href="">3 st list</a></menu-item>
    </my-selector>
</div>
```


### Attributes
|  属性  |  说明   | 类型  | 默认值 |
|:--:|:-----:| :----:| :----:|
| placeHolder |  hint | String |  "请选择"  |
| show-arrow |  显示箭头  | Boolean |  false  |
