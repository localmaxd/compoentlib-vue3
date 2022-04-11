module.exports = {
  // 站点配置
  base:"/compoentlib-vue3/",
  lang: "zh-CN",
  title: "Vue3 组件库",
  description: "vue3 + compontent",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo:"/1.jpeg",
    navbar: [
      // NavbarItem
      {
        text: "github",
        link: "https://github.com/localmaxd/compoentlib-vue31",
      },
      // NavbarGroup
      {
        text: "npm",
        link: "https:https://www.npmjs.com/package/compoent-vue3-uiapp"
      },
      // 字符串 - 页面文件路径
    ],
    sidebar: [
      // SidebarItem
      // 字符串 - 页面文件路径
      {
        text:"按钮组件",
        link: "/bar/button",
      },
      {
        text:"输入组件",
        link: "/bar/input",
      },
      {
        text:"放大镜组件",
        link: "/bar/magnifier",
      },
      {
        text:"轮播图组件",
        link: "/bar/carousel",
      },
      {
        text:"导航条组件",
        link: "/bar/navbar",
      },
      {
        text:"模态框组件",
        link: "/bar/modal",
      },
      {
        text:"搜索组件",
        link: "/bar/search",
      },
      {
        text:"树形组件",
        link: "/bar/treeMenus",
      },
      {
        text:"下拉菜单组件",
        link: "/bar/downMenu",
      },
    ],
  },
};
