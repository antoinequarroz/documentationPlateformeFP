import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/architecture.html.vue"
const data = JSON.parse("{\"path\":\"/architecture.html\",\"title\":\"Architecture du projet\",\"lang\":\"fr-EU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Structure des fichiers\",\"slug\":\"structure-des-fichiers\",\"link\":\"#structure-des-fichiers\",\"children\":[{\"level\":3,\"title\":\"Vue Router et gestion de la navigation\",\"slug\":\"vue-router-et-gestion-de-la-navigation\",\"link\":\"#vue-router-et-gestion-de-la-navigation\",\"children\":[]},{\"level\":3,\"title\":\"Gestion de l'état avec Vuex\",\"slug\":\"gestion-de-l-etat-avec-vuex\",\"link\":\"#gestion-de-l-etat-avec-vuex\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"architecture.md\"}")
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
