export const data = {
  "key": "v-e12556a0",
  "path": "/bar/three.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1677232899000,
    "contributors": [
      {
        "name": "localmaxd",
        "email": "1483573670@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "bar/three.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
