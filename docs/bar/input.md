## 输入框组件
<div class="inputs-wrapper">
<input-index></input-index>
</div>

<style>
.inputs-wrapper{
    width: 100%;
    margin-top: 10%;
    margin-left: 30%;
}
</style>

```html
<div class="input-group">
    <InputCom placeholder="请输入用户名" v-model:value="username" type="text" :clearable="true"></InputCom>
    <InputCom placeholder="请输入密码" v-model:value="password" type="password" :clearable= "false" :show-password="true"></InputCom>
</div>
```

### Attributes
|  属性  |  说明   | 类型  | 默认值 |
|:--:|:-----:| :----:| :----:|
| type |  类型 | String{default/primary/dashed} |  primary  |
| placeholder |  提示信息  | String |  ""  |
| disabled |  是否禁用  | Boolean |  false  |
| clearable |  是否可清除  | Boolean |  false |
| showPassword |  是否可显示密码  | Boolean |  false |
| name |  姓名  | String |  "" |
| value |  输入框的值  | String |  "" |