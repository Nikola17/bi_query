# Power BI Academy (Phase 1 terminée)

Site statique d'apprentissage Power Query + Power BI basé sur le plan pédagogique fourni.

## Contenu livré

- Landing page orientée débutant → avancé.
- Parcours en 9 blocs + tags par thème.
- 12 leçons enrichies (objectif, exemple, démo visuelle avant/après, étapes, exercice, correction, version simple, pièges, résumé, mini quiz interactif QCM).
- Filtre de leçons par thème + recherche textuelle + ouvrir/fermer toutes les leçons.
- Boutons d'aide dans chaque leçon : **Explique-moi simplement** et **Montre-moi la solution**.
- Bibliothèque visuelle de base (avant/après, schéma relationnel, carte mentale DAX).
- Section **Où on en est dans le plan** pour suivre les phases 1/2/3.
- Zone Lab avec filtre de données.
- Suivi de progression en `localStorage`.
- Thème clair/sombre.
- Mini-projet final.

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
