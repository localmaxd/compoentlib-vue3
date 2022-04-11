## 模态框组件

<modalIndex></modalIndex>

```html
<Modal
        :width="350"
        :height="200"
        :boderRadius="10"
        headerColor="#ffffff"
        headerText="this is a super model"
        contentText="Modal body text"
        postion="center"
        :btnGroupShow="true"
        confirmText="Yes"
        cancelText="No"
></Modal>
```

### Attributes
|  属性  |  说明   | 类型  | 默认值 |
|:--:|:-----:| :----:| :----:|
| width |  宽度 | Number |  300  |
| height |  高度  | Number |  200  |
| boderRadius |  弧度  | Number |  10  |
| headerColor |  头部颜色  | String |  - |
| headerText |  头部文字 | String |  #fff  |
| contentText |  内容  | String |  ""  |
| position |  位置  | String |  center  |
| btnGroupShow |  是否显示按钮  | Boolean |  true |
| confirmText |  确认文字  | String |  yes |
| cancelText |  取消文字  | String |  no |