# 导航条组件
<navbarIndex></navbarIndex>


```html
<menu-index mode="vertical">
<menuItem>option 1</menuItem>
    <SubMenu title="option2" SubMode="hor">
        <menu-item-group title="item1">
            <menuItem>option 1-1</menuItem>
                <menuItem>option 1-2</menuItem>
                <menuItem>option 1-3</menuItem>
        </menu-item-group>
        <sub-menu title="option 1-4" SubMode="hor">
            <menu-item-group title="item2">
                <menuItem>option 2-1</menuItem>
                <menuItem>option 2-2</menuItem>
                <menuItem>option 2-3</menuItem>
            </menu-item-group>
        </sub-menu>
    </SubMenu>
    <menuItem>option 3</menuItem>
</menu-index>
```