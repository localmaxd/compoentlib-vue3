export const themeData = {
  "logo": "/1.jpeg/",
  "navbar": [
    {
      "text": "github",
      "link": "https://github.com/localmaxd/compoentlib-vue31"
    },
    {
      "text": "npm",
      "link": "https:https://www.npmjs.com/package/compoent-vue3-uiapp"
    }
  ],
  "sidebar": [
    {
      "text": "按钮组件",
      "link": "/bar/button"
    },
    {
      "text": "输入组件",
      "link": "/bar/input"
    },
    {
      "text": "放大镜组件",
      "link": "/bar/magnifier"
    },
    {
      "text": "轮播图组件",
      "link": "/bar/carousel"
    },
    {
      "text": "导航条组件",
      "link": "/bar/navbar"
    },
    {
      "text": "模态框组件",
      "link": "/bar/modal"
    },
    {
      "text": "搜索组件",
      "link": "/bar/search"
    },
    {
      "text": "树形组件",
      "link": "/bar/treeMenus"
    },
    {
      "text": "下拉菜单组件",
      "link": "/bar/downMenu"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
