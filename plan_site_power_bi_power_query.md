# Plan de site — Apprendre Power BI et Power Query (Excel) de zéro à avancé

## 1. Vision du projet

Créer un site interactif qui permet à un débutant total de devenir vraiment solide sur :

- **Power Query dans Excel**
- **Power Query dans Power BI**
- **modélisation des données**
- **DAX**
- **création de dashboards Power BI**
- **bonnes pratiques professionnelles**

### Promesse du site

> Tu pars de zéro, tu manipules tout, et à la fin tu sais nettoyer des données, construire un modèle propre, écrire du DAX utile et livrer un vrai dashboard.

---

## 2. Objectif pédagogique

Le site doit permettre d'apprendre dans cet ordre :

1. **Excel et logique des données**
2. **Power Query**
3. **modélisation**
4. **DAX**
5. **visualisation / reporting**
6. **cas métiers complets**

### Principes pédagogiques

- apprendre par cas concrets
- montrer avant d'expliquer
- aller du simple au niveau pro
- répéter les concepts dans plusieurs contextes
- s'appuyer fortement sur le visuel
- faire pratiquer en permanence

---

## 3. Positionnement du site

Le site ne doit pas ressembler à une simple suite de vidéos.  
Il doit ressembler à une **école interactive** orientée pratique.

### Ce qui doit le différencier

- explications très simples
- exemples visuels partout
- interactions fréquentes
- progression claire
- exercices corrigés
- mini projets
- cas métiers réels
- fiches mémo et anti-sèches

---

## 4. Structure globale du site

## 4.1 Page d'accueil

### Objectifs
- donner envie
- rassurer les débutants
- montrer le résultat final
- donner accès au parcours principal

### Contenu
- promesse du site
- bouton **Commencer de zéro**
- test de niveau
- aperçu des modules
- démo d'un mini dashboard interactif
- bloc **Ce que tu sauras faire à la fin**
- mise en avant de la progression étape par étape

---

## 4.2 Parcours d'apprentissage

### Deux entrées principales

- **Parcours complet débutant → avancé**
- **Parcours par thème**
  - Power Query Excel
  - Power Query Power BI
  - Modélisation
  - DAX
  - Visualisation
  - Projets

---

## 4.3 Pages de leçons

Chaque leçon doit contenir :

1. un objectif clair
2. un exemple concret
3. une démo visuelle
4. une explication simple
5. un exercice interactif
6. une correction détaillée
7. les erreurs fréquentes
8. un résumé
9. un mini quiz

---

## 4.4 Zone d'entraînement (Lab)

### Contenu
- datasets à télécharger
- défis guidés
- défis libres
- correction pas à pas
- niveaux facile / moyen / difficile

---

## 4.5 Bibliothèque visuelle

### Contenu
- schémas
- infographies
- captures annotées
- comparatifs avant / après
- cartes mentales
- exemples de dashboards
- animations explicatives

---

## 4.6 Cheatsheets / fiches mémo

### Exemples
- 20 transformations Power Query à connaître
- 25 fonctions DAX indispensables
- checklist d'un bon modèle Power BI
- erreurs classiques à éviter
- guide : mesure vs colonne calculée vs table

---

## 4.7 Projets finaux

### Exemples de projets
- dashboard ventes
- dashboard RH
- dashboard budget
- dashboard stock
- dashboard marketing

Chaque projet doit couvrir :
- les données brutes
- le nettoyage dans Power Query
- la modélisation
- les mesures DAX
- la construction des visuels
- l'interprétation métier

---

## 5. Parcours pédagogique détaillé

## Bloc 0 — Mise en route

### Objectif
Rassurer un débutant total et lui faire comprendre l'écosystème.

### Modules
- c'est quoi Excel, Power Query, Power BI
- différence entre nettoyer, modéliser, analyser, visualiser
- à quoi sert chaque outil
- repérage dans l'interface
- premier import de données

### Résultat attendu
L'élève comprend le flux complet : donnée brute → transformation → modèle → calcul → dashboard.

---

## Bloc 1 — Les bases de Power Query

### Objectif
Savoir importer et nettoyer des données.

### Modules
- importer un fichier Excel
- importer un CSV
- comprendre les types de données
- renommer des colonnes
- supprimer des colonnes
- filtrer des lignes
- trier des données
- supprimer les doublons
- remplacer des valeurs
- gérer les valeurs nulles
- gérer les erreurs
- fractionner / fusionner des colonnes
- nettoyer texte, nombres, dates

### Résultat attendu
L'élève sait rendre une table propre et exploitable.

---

## Bloc 2 — Power Query intermédiaire

### Objectif
Savoir restructurer les données.

### Modules
- merge
- append
- group by
- pivot
- unpivot
- colonnes conditionnelles
- requêtes de référence
- paramètres simples
- organisation des étapes
- logique de rafraîchissement

### Résultat attendu
L'élève sait construire un vrai flux de transformation.

---

## Bloc 3 — Power Query avancé

### Objectif
Comprendre plus finement le fonctionnement de Power Query.

### Modules
- lecture des étapes appliquées
- introduction au langage M
- lecture simple d'une formule M
- modifier une étape manuellement
- fonctions utiles
- paramètres avancés
- réutilisation de logique
- bonnes pratiques
- bases de performance

### Résultat attendu
L'élève n'a plus peur du code M ni des transformations avancées.

---

## Bloc 4 — Modélisation des données dans Power BI

### Objectif
Construire des modèles propres et robustes.

### Modules
- table de faits
- tables de dimensions
- relations
- cardinalités
- sens de filtre
- table calendrier
- schéma en étoile
- erreurs de modélisation
- relation active / inactive
- many-to-many expliqué simplement

### Résultat attendu
L'élève comprend pourquoi le modèle est la base d'un bon rapport Power BI.

---

## Bloc 5 — DAX débutant à intermédiaire

### Objectif
Créer de vrais calculs utiles.

### Modules
- mesure vs colonne calculée
- SUM
- COUNT
- DISTINCTCOUNT
- DIVIDE
- IF
- SWITCH
- CALCULATE
- FILTER
- premiers KPI
- ratios
- logique de contexte de filtre
- premières fonctions de dates

### Résultat attendu
L'élève sait écrire des mesures utiles et comprend globalement ce qu'il fait.

---

## Bloc 6 — DAX avancé

### Objectif
Atteindre un niveau solide.

### Modules
- variables
- SUMX et autres itérateurs
- ALL
- ALLEXCEPT
- REMOVEFILTERS
- time intelligence
- cumul
- comparaison N vs N-1
- ranking
- top N
- segmentation
- mesures lisibles et robustes

### Résultat attendu
L'élève sait construire des analyses avancées.

---

## Bloc 7 — Visualisation et storytelling Power BI

### Objectif
Construire des rapports clairs, utiles et professionnels.

### Modules
- choisir le bon visuel
- filtres / slicers
- drill-down
- tooltips
- navigation entre pages
- KPI cards
- organisation de page
- hiérarchie visuelle
- choix des titres
- erreurs de dashboarding
- storytelling métier

### Résultat attendu
L'élève sait faire un dashboard agréable à lire et utile à la décision.

---

## Bloc 8 — Cas métiers complets

### Objectif
Assembler toutes les compétences dans des projets complets.

### Projets
- analyse des ventes
- suivi de budget
- analyse RH
- suivi du stock
- analyse marketing

### Résultat attendu
L'élève sait gérer un projet complet de bout en bout.

---

## 6. Format type d'une leçon

Chaque leçon doit suivre le même modèle :

1. **Titre clair**
2. **Ce que tu vas savoir faire**
3. **Exemple métier très simple**
4. **Démo visuelle**
5. **Explication pas à pas**
6. **Exercice interactif**
7. **Correction commentée**
8. **Pièges fréquents**
9. **Résumé en 5 points**
10. **Quiz rapide**
11. **Validation / progression**

---

## 7. Éléments interactifs à intégrer

### À prévoir absolument
- quiz à choix multiples
- glisser-déposer
- avant / après transformation
- mini simulateur de relations entre tables
- mini simulateur du contexte DAX
- exercice de correction de formule
- progression par niveau
- badges / points
- bouton **Montre-moi la solution**
- bouton **Explique-moi simplement**

### Très bonne idée
- barre de progression
- niveau par thème
- système de révision
- défis chronométrés
- mode révision rapide

---

## 8. Contenus visuels à produire

### Types de visuels
- captures d'écran annotées
- schémas de relations
- diagrammes de flux
- comparatifs avant / après
- infographies
- GIFs explicatifs
- cartes mentales
- exemples de dashboards
- erreurs fréquentes illustrées

### Style visuel conseillé
- simple
- moderne
- lisible
- pédagogique
- cohérent
- beaucoup d'espace
- couleurs sobres

---

## 9. Priorités pédagogiques

## 9.1 En Power Query
Priorité à :
- imports
- types de données
- filtres
- nettoyage
- merge
- append
- pivot / unpivot
- group by
- colonnes conditionnelles
- erreurs
- paramètres
- bases du M

## 9.2 En Power BI
Priorité à :
- modèle
- relations
- table calendrier
- star schema
- mesures
- contexte de filtre
- time intelligence
- slicers
- KPI
- mise en page
- storytelling

## 9.3 En DAX
Ne pas viser tout DAX au début.  
Viser d'abord les fonctions et patterns les plus utiles.

---

## 10. Fil rouge pédagogique recommandé

Créer un univers cohérent avec une entreprise fictive qui revient tout au long du parcours.

### Exemple de données
- ventes
- produits
- clients
- calendrier
- commerciaux
- objectifs

### Avantages
- meilleure mémorisation
- moins de charge mentale
- progression plus naturelle
- continuité pédagogique forte

---

## 11. Plan de construction du site

## Phase 1 — MVP

### Objectif
Créer une première version déjà utile.

### Contenu
- page d'accueil
- parcours débutant
- 10 à 15 leçons
- quiz simples
- 1 mini projet final
- système de progression
- bibliothèque de visuels de base

---

## Phase 2 — Version solide

### Contenu
- 30 à 40 leçons
- zone Lab
- plusieurs datasets
- simulateurs interactifs
- badges
- filtres par niveau / thème
- plusieurs projets métiers

---

## Phase 3 — Version avancée / premium

### Contenu
- cas métiers complets
- évaluations
- fiches mémo téléchargeables
- révisions intelligentes
- parcours experts
- suivi de performance utilisateur
- section nouveautés Power BI

---

## 12. Recommandations produit pour la suite sur Codex

Quand nous passerons sur Codex, il faudra demander :

### Frontend / UX
- site moderne et très visuel
- navigation simple
- responsive
- thème clair / sombre
- reprise automatique de progression
- bouton **reprendre où j'en étais**
- bouton **je suis perdu**
- bouton **version simple**
- bouton **version technique**

### Fonctionnalités
- routing par modules
- lecteur de leçons
- moteur de quiz
- système de progression
- composants interactifs
- espace projets
- bibliothèque de datasets
- bibliothèque de visuels
- fiches mémo

---

## 13. Nom de projet possibles

- **Power BI Academy**
- **Query & BI Lab**
- **BI Starter to Pro**
- **Power Query + BI School**
- **Data Learning Lab**

---

## 14. Résumé stratégique

Le site doit être :

- **visuel**
- **simple**
- **interactif**
- **très progressif**
- **centré sur la pratique**
- **orienté cas concrets**
- **utile du niveau débutant au niveau avancé**

### Résultat final attendu pour l'utilisateur

À la fin, l'utilisateur doit être capable de :

- nettoyer des données
- structurer un modèle
- écrire des mesures DAX utiles
- comprendre les relations et les filtres
- créer un dashboard lisible
- expliquer ce qu'il a fait
- travailler de manière professionnelle sur Power Query et Power BI

---

## 15. Prochaine étape

Transformer ce document en **cahier des charges pour Codex**, avec :

- arborescence précise du site
- pages exactes
- composants interactifs
- design system
- backlog MVP
- structure technique de l'application
