# Plan de refonte — Power BI Academy

## Problèmes identifiés

1. **Encodage cassé** dans `site.js` : caractères accentués en mojibake (`Ã©` au lieu de `é`).
2. **Leçons trop textuelles** : pas de repères visuels, pas de captures, blocs Avant/Apres sous-exploités.
3. **Datasets inutilisables** : trop petits (6-11 lignes), incohérents avec les exercices (ex: merge/append avec 1 seul fichier), pas de fil rouge.
4. **Pas de pas à pas actionnable** : l'élève télécharge un CSV et ne sait pas quoi en faire.

## Actions d'implémentation

### 1. Correction encodage
- Script Python `encode('latin1').decode('utf-8')` sur `site.js` pour rétablir les accents.

### 2. Refonte visuelle CSS
- Étapes numérotées avec timeline verticale.
- Blocs de code DAX / M avec fond sombre et syntax highlighting basique.
- Cartes Avant / Après côte à côte avec icônes et bordures colorées.
- Badges de difficulté colorés.
- Amélioration des blocs astuce (`tip`) et piège (`pitfall`).

### 3. Fil rouge NovaRetail — datasets maîtres
Création de 6 fichiers CSV réalistes (200-1000 lignes) cohérents entre eux :
- `nova_retail_clients.csv` (ID, Nom, Région, Pays, Segment, Date inscription)
- `nova_retail_produits.csv` (ProductID, Nom, Catégorie, Sous-catégorie, Prix unitaire, Coût)
- `nova_retail_ventes_2024.csv` + `nova_retail_ventes_2025.csv` (OrderID, Date, ProductID, CustomerID, Qty, Revenue, Cost, Channel)
- `nova_retail_budget.csv` (Centre, Mois, Budget, Réalisé)
- `nova_retail_calendrier.csv` (Date, Année, Mois, Trimestre, Jour semaine)

Les datasets des leçons seront soit des extraits de ces maîtres, soit des fichiers dérivés spécifiques à l'exercice (ex: fichier avec types erronés pour L1).

### 4. Mise à jour des leçons (site.js)
- Corriger les liens `downloadFile` et `exercise.dataset`.
- Ajouter un bloc `walkthrough` dans chaque leçon : instructions pas à pas concrètes (dans quel menu cliquer, quelle colonne sélectionner).
- Améliorer `renderLesson` pour afficher les étapes sous forme de timeline, les blocs code, et les datasets avec contexte.

### 5. Déploiement
- Branche `feature/refonte-visuelle-datasets`.
- Commit atomique par étape.
- Push sur GitHub `origin`.
- PR ou merge direct selon workflow.

## Critères de succès
- L'encodage est propre (vérification visuelle rapide sur 3 leçons).
- Au moins 12 leçons ont des datasets réalistes et un guide pas à pas.
- Le rendu des leçons contient des blocs visuels (timeline, code, astuces colorées).
