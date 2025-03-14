import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/conclusion.html.vue"
const data = JSON.parse("{\"path\":\"/conclusion.html\",\"title\":\"Conclusion\",\"lang\":\"fr-EU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Bilan\",\"slug\":\"bilan\",\"link\":\"#bilan\",\"children\":[]},{\"level\":2,\"title\":\"Perspectives d'avenir\",\"slug\":\"perspectives-d-avenir\",\"link\":\"#perspectives-d-avenir\",\"children\":[]},{\"level\":2,\"title\":\"Remerciements\",\"slug\":\"remerciements\",\"link\":\"#remerciements\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"conclusion.md\"}")
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
