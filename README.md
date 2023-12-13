# Control Tower - Test technique 🚀

- 🎨 Built with React and TypeScript
- 🚀 Styled with Tailwind CSS for a sleek look
  
## Objectif
Dans cette mission, j'ai été chargé de développer une interface de détail de projet conforme à la maquette fournie.

## Exploits Réalisés
- Statut et Modèle de Risque :
  - Implémentation d'un dropdown dynamique pour modifier le statut du projet et le modèle de risque.
  - Mise en place de règles intelligentes : le modèle de risque n'est modifiable que s'il n'y a aucune évaluation créée.
- Évaluations Validées
  - Affichage des évaluations reliées au projet dans un tableau.
  - Création simplifiée d'une nouvelle évaluation avec un bouton dédié, respectant les propriétés spécifiées (date de création, date de -        validation, nom de l'évaluation).
- Endpoints :
  - Utilisation des endpoints et test avec wiremock.


## Pourquoi Remix ?

Remix offre une expérience de développement agréable et très performante avec son architecture basée sur les routes et son système de plugin.

## Pourquoi Wiremock ?

Après plusieurs essai en interne j'ai trouvé l'outil de wiremock très intuitif et très accessible pour mocker une API.

## Comment Exécuter la Mission
### Prérequis

Node.js installé sur votre machine.
Installation

```sh
npm install
```

## Démarrage du Projet

```sh
npm run dev
```

Accès à l'Interface

Visitez http://localhost:3000 dans votre navigateur.

# Prochaines Étapes
- Storybook - Récit d'Exploration : test des composants avec storybook
- Tests - Épreuves de Résistance : ajout de tests pour garantir la stabilité et la qualité du code.
- API Réelle - Passage dans le Monde Réel 💻
  
