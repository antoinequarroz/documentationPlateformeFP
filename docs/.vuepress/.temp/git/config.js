import { GitContributors } from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/antoine.quarroz/Desktop/loicFormationPratiquePlateforme/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
