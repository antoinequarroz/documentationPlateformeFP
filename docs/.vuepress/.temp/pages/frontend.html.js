import comp from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/frontend.html.vue"
const data = JSON.parse("{\"path\":\"/frontend.html\",\"title\":\"Frontend - Vue.js 3 & PrimeVue\",\"lang\":\"fr-EU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vue.js 3\",\"slug\":\"vue-js-3\",\"link\":\"#vue-js-3\",\"children\":[]},{\"level\":2,\"title\":\"PrimeVue\",\"slug\":\"primevue\",\"link\":\"#primevue\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"frontend.md\"}")
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
