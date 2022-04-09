<template>
  <div class="navGroup1">
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
  </div>

  <div class="group2">
    <menu-index>
      <menuItem>option 1</menuItem>
      <SubMenu title="option2" SubMode="ver">
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
  </div>



<div class="group3">
  <menu-index>
    <menuItem>option 1</menuItem>
    <SubMenu title="option2" SubMode="ver">
      <menu-item-group title="item1">
        <menuItem>option 1-1</menuItem>
        <menuItem>option 1-2</menuItem>
        <menuItem>option 1-3</menuItem>
      </menu-item-group>
      <sub-menu title="option 1-4" SubMode="ver">
        <menu-item-group title="item2">
          <menuItem>option 2-1</menuItem>
          <menuItem>option 2-2</menuItem>
          <menuItem>option 2-3</menuItem>
        </menu-item-group>
      </sub-menu>
    </SubMenu>
    <menuItem>option 3</menuItem>
  </menu-index>
</div>


</template>

<script>
export default {
  name: "navbarIndex"
};
</script>

<style lang="scss" scoped>
.group2{
  margin-top: 150px;
  display: inline-block;
}
.group3 {
  display: inline-block;
}
</style>