import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"ssadas  asd"},["/index.html","/README.md"]],
  ["v-079bb8d2","/bar/button.html",{"title":""},["/bar/button","/bar/button.md"]],
  ["v-532f46b8","/bar/carousel.html",{"title":"轮播图组件"},["/bar/carousel","/bar/carousel.md"]],
  ["v-37426183","/bar/downMenu.html",{"title":"下拉组件"},["/bar/downMenu","/bar/downMenu.md"]],
  ["v-221a1e04","/bar/input.html",{"title":""},["/bar/input","/bar/input.md"]],
  ["v-fa316860","/bar/magnifier.html",{"title":"放大镜组件"},["/bar/magnifier","/bar/magnifier.md"]],
  ["v-7952d101","/bar/modal.html",{"title":"模态框组件"},["/bar/modal","/bar/modal.md"]],
  ["v-2cf1c298","/bar/navbar.html",{"title":"导航条组件"},["/bar/navbar","/bar/navbar.md"]],
  ["v-5056141c","/bar/search.html",{"title":"搜索组件"},["/bar/search","/bar/search.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
