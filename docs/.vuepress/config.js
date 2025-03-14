import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'fr-EU',

  title: 'Doc Plateforme FP',
  description: 'Documentation de la plateforme FP',

  theme: defaultTheme({
    logo: 'https://pfp.hedsvs.ch/assets/face1-DWHXM54F.png',

    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Gestion de projet', link: '/gestionprojet' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Frontend', link: '/frontend' },
      { text: 'Backend', link: '/backend' },
      { text: 'GitHub', link: '/github' },
      { text: 'Contribution', link: '/contribution' },
    ],

  }),

  bundler: viteBundler(),
})
