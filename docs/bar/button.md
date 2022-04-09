<div class="button-session">
    <div class="group-wrapper">
      <div class="button-wrapper"><my-button type="primary">确定</my-button></div>
      <div class="button-wrapper"> <my-button type="dashed">确定</my-button></div>
      <div class="button-wrapper"> <my-button type="default">确定</my-button></div>
    </div>

```html
<div class="button-wrapper"><my-button type="primary">确定</my-button></div>
<div class="button-wrapper"> <my-button type="dashed">确定</my-button></div>
<div class="button-wrapper"> <my-button type="default">确定</my-button></div>
```

<div class="group-wrapper">
      <div class="button-wrapper"><my-button type="primary" danger="danger">确定</my-button></div>
      <div class="button-wrapper"><my-button type="dashed" danger="danger">确定</my-button></div>
      <div class="button-wrapper"><my-button type="default" danger="danger">确定</my-button></div>
</div>

```html
<div class="button-wrapper"><my-button type="primary" danger="danger">确定</my-button></div>
<div class="button-wrapper"><my-button type="dashed" danger="danger">确定</my-button></div>
<div class="button-wrapper"><my-button type="default" danger="danger">确定</my-button></div>
```
<div class="group-wrapper">
    <div class="button-wrapper"><my-button type="dashed" danger="inDanger" shape="circle">确定</my-button></div>
    <div class="button-wrapper"><my-button type="default" danger="inDanger" shape="circle">确定</my-button></div>
    <div class="button-wrapper"><my-button type="primary" danger="inDanger" shape="circle">确定</my-button></div>
</div>

```html
<div class="button-wrapper"><my-button type="dashed" danger="inDanger" shape="circle">确定</my-button></div>
<div class="button-wrapper"><my-button type="default" danger="inDanger" shape="circle">确定</my-button></div>
<div class="button-wrapper"><my-button type="primary" danger="inDanger" shape="circle">确定</my-button></div>
```
<div class="group-wrapper">
      <div class="button-wrapper"><my-button type="dashed" danger="danger" shape="round">确定</my-button></div>
      <div class="button-wrapper"><my-button type="default" danger="danger" shape="round">确定</my-button></div>
      <div class="button-wrapper"><my-button type="primary" danger="danger" shape="round">确定</my-button></div>
</div>

```html
<div class="button-wrapper"><my-button type="dashed" danger="danger" shape="round">确定</my-button></div>
<div class="button-wrapper"><my-button type="default" danger="danger" shape="round">确定</my-button></div>
<div class="button-wrapper"><my-button type="primary" danger="danger" shape="round">确定</my-button></div>
```
</div>

<style>
.button-session{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.group-wrapper{
  margin-top: 20px;
}
.button-wrapper{
  width: 80px;
  height: 40px;
  display: inline-block;
  margin-left: 20px;
}
</style>

### Attributes
|  属性  |  说明   | 类型  | 默认值 |
|:--:|:-----:| :----:| :----:|
| type |  类型 | String{default/primary/dashed} |  primary  |
| danger |  危险  | String{danger/inDanger} |  inDanger  |
| shape |  形状  | String{normal/round/circle} |  normal  |
| onclick |  自定义点击事件  | event |  - |