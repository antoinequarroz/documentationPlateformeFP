import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/errors.html.vue"
const data = JSON.parse("{\"path\":\"/errors.html\",\"title\":\"Gestion des erreurs et logs\",\"lang\":\"fr-EU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Firebase Error Handling\",\"slug\":\"firebase-error-handling\",\"link\":\"#firebase-error-handling\",\"children\":[]},{\"level\":2,\"title\":\"Logs\",\"slug\":\"logs\",\"link\":\"#logs\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"errors.md\"}")
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
