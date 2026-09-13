# SERIC — site web

Site vitrine de **SERIC** (Tokyo · Séoul), en **Astro 6** + **Tailwind CSS v4**.
Site entièrement statique, quadrilingue : français (langue par défaut), anglais,
japonais, coréen.

## Prérequis

Node 20 ou plus récent (testé sous Node 22). Aucune variable d'environnement.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build statique → dist/
npm run preview   # sert le build local
```

## Organisation

```
src/
├── pages/        routes (une par page et par langue)
├── components/   composants d'interface
│   └── pages/    corps des pages internes
├── layouts/      gabarit HTML commun (SEO, polices)
├── i18n/         contenu des quatre langues
├── lib/          données des bureaux (coordonnées, liens carte)
├── styles/       styles globaux et tokens de marque
└── scripts/      JS client (navigation, animations, cookies)
public/           images et fichiers servis tels quels
```

Pages : accueil, Solutions, Secteurs, Histoire, Contact et fiche d'accès aux
bureaux — chacune déclinée dans les quatre langues.

## Contenu

**Tout le texte du site vit dans `src/i18n/ui.ts`**, un objet
`{ fr, en, ja, ko }`. Chaque chaîne est une clé, à renseigner dans les quatre
langues ; une clé absente retombe sur le français plutôt que de faire échouer
le build.

Les images sont dans `public/images/` et référencées par leur chemin
(`/images/…`).

## Build et déploiement

`npm run build` produit un dossier `dist/` entièrement statique, déployable sur
n'importe quel hébergement de fichiers. Le sitemap, les `canonical` et les
`hreflang` sont générés automatiquement au build.

À noter : `package.json` force Vite 7 via `overrides`, Astro 6 et le plugin
Tailwind ne s'accordant pas sur la version majeure. Si le build échoue juste
après un `npm install`, relancer `npm install` pour réappliquer l'override.

## Crédits

Photographies et logos : voir [`IMAGES.md`](IMAGES.md). Le logo SERIC est
fourni par le client.
