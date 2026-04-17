# Power BI Academy (Phase 1 terminée, Phase 2 approfondie)

Site statique d'apprentissage Power Query + Power BI basé sur le plan pédagogique fourni.

## Contenu livré

- Landing page orientée débutant → avancé.
- Parcours en 9 blocs + tags par thème.
- 12 leçons enrichies (objectif, exemple, démo visuelle avant/après, étapes, exercice, correction, version simple, pièges, résumé, mini quiz interactif QCM).
- Extension Phase 2 : leçons enrichies à 26 avec indication de niveau (Débutant/Intermédiaire/Avancé).
- Filtre de leçons par thème + recherche textuelle + ouvrir/fermer toutes les leçons.
- Filtre de leçons par niveau.
- Boutons d'aide dans chaque leçon : **Explique-moi simplement** et **Montre-moi la solution**.
- Bibliothèque visuelle de base (avant/après, schéma relationnel, carte mentale DAX).
- Section **Où on en est dans le plan** pour suivre les phases 1/2/3.
- Progression par thème avec mini barres visuelles.
- Bouton **Reprendre où j'en étais** pour rouvrir la prochaine leçon à faire.
- Zone Lab avec filtre de données + datasets CSV téléchargeables.
- Simulateur de relations et simulateur de contexte DAX.
- Défi chronométré (60s) avec meilleur temps sauvegardé en local.
- Système de badges (starter, Power Query, modélisation, DAX, projets).
- Score quiz global (bonnes réponses cumulées) avec persistance locale.
- Mode révision rapide (ouverture aléatoire d'une leçon).
- Fiches mémo téléchargeables (Power Query, DAX, modélisation).
- Bascule **Version simple** / **Version technique** dans les leçons.
- Suivi de progression en `localStorage`.
- Thème clair/sombre.
- Plusieurs projets métiers traçables.

## Lancer en local

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement sur Vercel

1. Push ce dossier sur GitHub.
2. Sur Vercel, `Add New Project` puis importer le repo.
3. Framework preset: `Other` (site statique).
4. Build command: *(vide)*.
5. Output directory: `.`.
6. Deploy.

## Déploiement sur GitHub Pages

1. Push sur GitHub.
2. Dans **Settings → Pages**.
3. Source: `Deploy from a branch`.
4. Branch: `main` (ou la branche voulue), dossier `/ (root)`.
5. Save.

Le site sera servi en statique.
