export const themeData = JSON.parse("{\"logo\":\"https://pfp.hedsvs.ch/assets/face1-DWHXM54F.png\",\"nav\":[{\"text\":\"Accueil\",\"link\":\"/\"},{\"text\":\"Introduction\",\"link\":\"/introduction\"},{\"text\":\"Gestion de projet\",\"link\":\"/gestionprojet\"},{\"text\":\"Architecture\",\"link\":\"/architecture\"},{\"text\":\"Frontend\",\"link\":\"/frontend\"},{\"text\":\"Backend\",\"link\":\"/backend\"},{\"text\":\"GitHub\",\"link\":\"/github\"},{\"text\":\"Contribution\",\"link\":\"/contribution\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
