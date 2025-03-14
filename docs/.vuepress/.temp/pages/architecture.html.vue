<template><div><h1 id="architecture-du-projet" tabindex="-1"><a class="header-anchor" href="#architecture-du-projet"><span>Architecture du projet</span></a></h1>
<p>L'architecture du projet est basée sur les meilleures pratiques de développement. Voici les composants clés :</p>
<h2 id="structure-des-fichiers" tabindex="-1"><a class="header-anchor" href="#structure-des-fichiers"><span>Structure des fichiers</span></a></h2>
<p>Le projet est structuré en plusieurs modules qui gèrent différentes parties de l'application. Les modules sont indépendants les uns des autres, permettant ainsi une gestion flexible et une évolutivité facile.</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── assets/         # Fichiers statiques (images, polices, etc.)</span>
<span class="line">├── components/     # Composants réutilisables</span>
<span class="line">├── router/         # Configuration du router</span>
<span class="line">├── store/          # Configuration du store Vuex</span>
<span class="line">├── views/          # Vues de l'application</span>
<span class="line">└── App.vue         # Composant racine de l'application</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router-et-gestion-de-la-navigation" tabindex="-1"><a class="header-anchor" href="#vue-router-et-gestion-de-la-navigation"><span>Vue Router et gestion de la navigation</span></a></h3>
<p>Le <strong>Vue Router</strong> est utilisé pour gérer les différentes pages de l'application. Les utilisateurs peuvent naviguer entre les pages principales : Page d'accueil, Profil utilisateur, Liste des places, etc.</p>
<h3 id="gestion-de-l-etat-avec-vuex" tabindex="-1"><a class="header-anchor" href="#gestion-de-l-etat-avec-vuex"><span>Gestion de l'état avec Vuex</span></a></h3>
<p><strong>Vuex</strong> est utilisé pour stocker les informations globales de l'application, telles que les informations utilisateur et les données provenant de Firebase.</p>
</div></template>


