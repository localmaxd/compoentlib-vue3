import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/dcw/vue_project/vite_test/compoentlib-vue3/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/dcw/vue_project/vite_test/compoentlib-vue3/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
