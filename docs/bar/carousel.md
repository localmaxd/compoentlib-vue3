##  轮播图组件


<carouselIndex></carouselIndex>

```html
 <slider-com
      :autoplay="true"
      :duration="2000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
      :urlObject="urlObject"
    >
    </slider-com>
```

### Attributes
|  属性  |  说明   | 类型  | 默认值 |
|:--:|:-----:| :----:| :----:|
| autoplay |  自动播放 | Boolean |  true  |
| duration |  循环速度  | Number |  200  |
| initial |  初始第几张  | Number |  0  |
| hasDot |  是否有点  | Boolean |  true |
| hasDirector |  是否有指示器 | Boolean |  true  |
| urlObject |  图片数据  | Object |  ""  |