---
title: Bookshelves
subtitle: Bibliothèque en ligne
abstract: Une bibliothèque pour les gouverner tous, une bibliothèque pour les trouver. Une bibliothèque pour les amener tous, et dans les rayons les lier.
---

Projet d'application web et mobile où le back-end peut **créer une base de données** à partir d'une liste de **fichiers EPUB** en extrayant les métadonnées de chaque EPUB pour créer des **auteurs**, des **séries** et des livres tout en gérant les **relations entre chaque modèle**, sans omettre des informations telles que **balises**, **éditeur**, **ISBN**, **langue** et **description**. Les informations qui ne peuvent pas être récupérées à partir des métadonnées du fichier EPUB sont récupérées à partir de **APIs externes comme Wikipedia ou Google Books**. Tout ceci permet de gérer une base de données complète présentant tous les livres présentés sur le fronton de l'application qui permet de **consulter chaque entité avec ses relations** et de télécharger les livres.

- Il est possible de faire des **recherches par entité** afin de trouver un livre plus facilement.
- Des guides détaillés permettent de mieux comprendre comment utiliser un lecteur pour lire les fichiers EPUB
- Un système de **commentaires** et de **favoris** est également disponible pour les utilisateurs enregistrés.
- Un **formulaire de contact** permet d'envoyer des messages à l'équipe.
- Embarque le **OPDS** (Open Publication Distribution System) pour proposer des livres aux applications qui proposent ce flux mais aussi le **Catalog** qui offre une interface simplifiée pour pouvoir parcourir les Bookshelves depuis le navigateur web de la liseuse si celle-ci ne supporte pas l'OPDS
- Disponible en mode sombre
- Offre une documentation API avec **scribe**
