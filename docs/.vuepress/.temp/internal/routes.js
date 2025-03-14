export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/architecture.html", { loader: () => import(/* webpackChunkName: "architecture.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/architecture.html.js"), meta: {"title":"Architecture du projet"} }],
  ["/backend.html", { loader: () => import(/* webpackChunkName: "backend.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/backend.html.js"), meta: {"title":"Backend - Firebase"} }],
  ["/conclusion.html", { loader: () => import(/* webpackChunkName: "conclusion.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/conclusion.html.js"), meta: {"title":"Conclusion"} }],
  ["/contribution.html", { loader: () => import(/* webpackChunkName: "contribution.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/contribution.html.js"), meta: {"title":"Contribution et bonnes pratiques"} }],
  ["/errors.html", { loader: () => import(/* webpackChunkName: "errors.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/errors.html.js"), meta: {"title":"Gestion des erreurs et logs"} }],
  ["/frontend.html", { loader: () => import(/* webpackChunkName: "frontend.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/frontend.html.js"), meta: {"title":"Frontend - Vue.js 3 & PrimeVue"} }],
  ["/gestionprojet.html", { loader: () => import(/* webpackChunkName: "gestionprojet.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/gestionprojet.html.js"), meta: {"title":"Gestion de Projet"} }],
  ["/github.html", { loader: () => import(/* webpackChunkName: "github.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/github.html.js"), meta: {"title":"GitHub et Gestion de Version"} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Introduction au Projet"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Documentation Technique du Projet"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
