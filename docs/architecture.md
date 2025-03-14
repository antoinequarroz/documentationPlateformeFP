# Architecture du projet

L'architecture du projet est basée sur les meilleures pratiques de développement. Voici les composants clés :

## Structure des fichiers

Le projet est structuré en plusieurs modules qui gèrent différentes parties de l'application. Les modules sont indépendants les uns des autres, permettant ainsi une gestion flexible et une évolutivité facile.

```plaintext
src/
├── assets/         # Fichiers statiques (images, polices, etc.)
├── components/     # Composants réutilisables
├── router/         # Configuration du router
├── store/          # Configuration du store Vuex
├── views/          # Vues de l'application
└── App.vue         # Composant racine de l'application
```


### Vue Router et gestion de la navigation

Le **Vue Router** est utilisé pour gérer les différentes pages de l'application. Les utilisateurs peuvent naviguer entre les pages principales : Page d'accueil, Profil utilisateur, Liste des places, etc.

### Gestion de l'état avec Vuex

**Vuex** est utilisé pour stocker les informations globales de l'application, telles que les informations utilisateur et les données provenant de Firebase.
