import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/backend.html.vue"
const data = JSON.parse("{\"path\":\"/backend.html\",\"title\":\"Backend - Firebase\",\"lang\":\"fr-EU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Firebase Authentication\",\"slug\":\"firebase-authentication\",\"link\":\"#firebase-authentication\",\"children\":[]},{\"level\":2,\"title\":\"Firebase Realtime Database\",\"slug\":\"firebase-realtime-database\",\"link\":\"#firebase-realtime-database\",\"children\":[]},{\"level\":2,\"title\":\"Firebase Storage\",\"slug\":\"firebase-storage\",\"link\":\"#firebase-storage\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"backend.md\"}")
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
