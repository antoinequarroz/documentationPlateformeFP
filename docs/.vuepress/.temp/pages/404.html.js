import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"fr-EU\",\"frontmatter\":{\"layout\":\"NotFound\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
export { comp, data }

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
