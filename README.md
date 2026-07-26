# SERIC — site Astro + Tailwind

Refonte du site SERIC en **Astro 6** + **Tailwind CSS v4**,
construite à partir de la maquette « Industriel Premium » exportée depuis
Claude Design. Voir `../seric/` à la racine pour la maquette originale (HTML/JSX),
le brief client et les uploads (sitemap, textes JP, etc.).

## Installation sur la machine cible

Le dossier `site/` est autonome. Sur le nouvel ordinateur :

```bash
cd site
npm install        # installe Astro, Tailwind v4 et leurs deps
npm run dev        # serveur de dev sur http://localhost:4321
npm run build      # build statique → dist/
npm run preview    # sert le build statique pour vérification
```

Aucune variable d’environnement n’est nécessaire pour le moment.

Prérequis : **Node 18.17+** (ou 20+).

## Structure

```
site/
├── astro.config.mjs        # i18n (fr default, en, ja) + Tailwind v4 + sitemap
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt                 # autorise tout + pointe vers sitemap-index.xml
│   └── images/                    # photos premium (Unsplash) + logo original
│       ├── hero-automobile.jpg    # hero accueil
│       ├── tokyo-night.jpg · tokyo-dusk.jpg · seoul.jpg
│       ├── sector-automobile.jpg · sector-aerospace.jpg
│       ├── sector-energy.jpg · sector-culture.jpg
│       ├── heritage.jpg           # Tokyo N&B (histoire)
│       ├── seric-logo.png         # logo SERIC réel (PNG transparent, utilisé)
│       └── seric-logo-original.jpg  # version fond blanc (référence)
└── src/
    ├── styles/global.css           # @theme Tailwind + reveal utilities
    ├── scripts/site.ts             # nav scroll + reveal + langue + cookie banner
    ├── i18n/
    │   ├── ui.ts                   # contenu FR / EN / JA (accueil + pages internes)
    │   └── utils.ts                # useTranslations, localizedPath, hreflang/OG
    ├── layouts/BaseLayout.astro    # <html> + SEO + fonts + CookieBanner + script
    ├── components/
    │   ├── SericLogo.astro         # boîte Pantone 277 U (recréée en CSS)
    │   ├── LangSwitcher.astro      # pill FR/EN/日本語 (path-aware)
    │   ├── Img.astro               # image cover (remplace Placeholder)
    │   ├── Placeholder.astro       # placeholder rayé (reste pour les logos Trust)
    │   ├── PageHero.astro          # hero compact des pages internes
    │   ├── CookieBanner.astro      # bandeau consentement cookies
    │   ├── Nav.astro · Hero.astro · Strapline.astro · Stats.astro
    │   ├── Solutions.astro · Sectors.astro · Why.astro · Story.astro
    │   ├── Trust.astro · CTA.astro · Footer.astro
    │   ├── PremiumHome.astro       # composition de l'accueil
    │   └── pages/                  # corps des pages internes (1 par page)
    │       ├── SolutionsPage.astro · SecteursPage.astro
    │       └── HistoirePage.astro · ContactPage.astro
    └── pages/                      # routes (×3 locales : /, /en/, /ja/)
        ├── index · solutions · secteurs · histoire · contact
        ├── en/{index,solutions,secteurs,histoire,contact}
        └── ja/{index,solutions,secteurs,histoire,contact}
```

## Décisions de design portées depuis la maquette

- **Palette** : Pantone 277 U (`#A6C4E4`), navy `#0B2240`, ink `#0A1A2E`,
  cream `#F4EFE6`, paper `#FBFAF7`. Tous exposés en tokens Tailwind v4
  (`bg-brand-blue`, etc.) via `@theme` dans `src/styles/global.css`.
- **Nav** : transparente au-dessus du hero, devient blanche solide
  passé 560 px de scroll. Le logo Pantone 277 U porte son propre contraste
  dans les deux états. Géré par `src/scripts/site.ts` qui bascule
  `[data-nav-mode]` sur le `<header>`.
- **Reveals** : `IntersectionObserver` (`src/scripts/site.ts`) qui ajoute
  `.is-visible` sur les éléments marqués `data-reveal`, `data-reveal-stagger`,
  `data-reveal-left`, `data-reveal-right`. Les styles sont dans `global.css`.
- **Typographie** : Inter pour FR / EN, Inter + Noto Sans JP pour JA.
  Tailles ajustées par locale (le japonais est ramené à ~85 % du titre FR).
- **Placeholders** : pattern de rayures diagonales monospace.
  À remplacer par les vraies photos (voir « Prochaines étapes »).

## i18n

Routing Astro natif :

- `/` → français (locale par défaut, pas de préfixe)
- `/en/` → anglais
- `/ja/` → japonais

Le contenu vit dans `src/i18n/ui.ts` (un objet `{ fr, en, ja }` par clé).
Le helper `useTranslations(lang)` retourne une fonction `t("key")` à utiliser
dans n’importe quel composant Astro.

## Modifier le contenu

**Tout le texte est dans un seul fichier : `src/i18n/ui.ts`** — un gros objet
`{ fr: {...}, en: {...}, ja: {...} }`. Chaque texte = une clé, présente dans
les **trois langues** (les clés sont regroupées par section avec des
commentaires `// Hero`, `// Solutions`…).

**Changer un texte ou un titre :**

1. Ouvrir `src/i18n/ui.ts`, trouver la clé.
2. Modifier la valeur dans `fr:`, puis la même clé dans `en:` et `ja:`.
   (Une langue oubliée retombe sur le français au lieu de planter — mais
   l'idéal est de remplir les trois.)

Repères : titre du hero d'accueil = `hero_title` / `hero_sub` ; titre d'onglet
+ description SEO d'une page = `*_meta_title` / `*_meta_desc` ; description d'un
secteur = `sec_auto_long`… ; frise = `tl_1981`, `tl_1998`…

> Les **coordonnées** (téléphones, email, adresses) sont dans
> `src/components/pages/ContactPage.astro` et `src/components/Footer.astro`,
> pas dans `ui.ts`.

**Changer une image :** déposer le fichier dans `public/images/` et le
référencer par `/images/mon-fichier.jpg` dans le composant concerné.

**Logos clients (section `Trust`) :** les 8 logos (Dassault Aviation, Veolia,
Forvia, Airbus, Elf, Colas, Gefco, Bleistahl) sont dans `public/images/logos/`
et référencés dans le tableau `logos` de `src/components/Trust.astro`
(affichage N&B atténué, couleur au survol ; `tall: true` pour les logos carrés
comme GEFCO). Pour en ajouter/retirer, éditer ce tableau — une entrée sans
`src` retombe sur un placeholder texte. Sources et licences : `IMAGES.md`.
Note : faute de wordmark FORVIA seul en source propre, c'est le lockup
officiel « FORVIA · faurecia » qui est utilisé.

**Ajouter une page** (ex. « Actualités ») — 4 étapes :

1. Ajouter les clés dans `src/i18n/ui.ts` (×3 langues) : titre, sous-titre, méta.
2. Créer le corps de page dans `src/components/pages/` (copier
   `SecteursPage.astro` comme modèle).
3. Créer **3 routes** (copier une route existante, changer `lang`, le composant
   et `path`) : `src/pages/actualites.astro`, `src/pages/en/actualites.astro`,
   `src/pages/ja/actualites.astro`.
4. Ajouter le lien dans le tableau `navLinks` de `Nav.astro` (et `Footer.astro`).

Le sitemap et les `hreflang`/canonical se régénèrent au build. Vérifier avec
`npm run dev`, figer avec `npm run build`.

## Fait récemment

- **Build réparé** : conflit de versions Vite (Astro 6 ⇒ Vite 7, mais
  `@tailwindcss/vite` tirait Vite 8 + rolldown → erreur de binding
  « Missing field `tsconfigPaths` »). L'override `vite: "^7"` du `package.json`
  est désormais réellement appliqué (tout l'arbre est dédupliqué sur Vite 7.3.5).
  Si le build casse après un `npm install`, relancer `npm install` pour
  réappliquer l'override.
- **SEO** : terminé. `@astrojs/sitemap` génère `sitemap-index.xml` /
  `sitemap-0.xml` (les 15 pages, avec alternates par locale) ; `BaseLayout`
  émet `canonical`, `hreflang` (fr/en/ja + `x-default`), Open Graph et
  Twitter Card ; `public/robots.txt` ajouté.
- **Pages internes** : Solutions, Secteurs, Histoire, Contact — déclinées
  dans les 3 locales (slugs FR partagés : `/solutions`, `/secteurs`,
  `/histoire`, `/contact`). Contenu réécrit à partir du site Wix de référence
  (mission, six valeurs, frise 1981→2021, secteurs détaillés, coordonnées
  réelles des bureaux Tokyo / Séoul). `Nav`, `Footer` et `LangSwitcher`
  pointent désormais vers ces pages ; le sélecteur de langue conserve la page
  courante (`path`).
- **Photos** : placeholders rayés remplacés par des photos premium libres de
  droits (Unsplash) sur l'accueil et toutes les pages internes, via le
  composant `Img`.
- **Logo réel** : `public/images/seric-logo.png` (PNG transparent, lettrage
  Pantone 277 U ajouré, fourni par le client). `SericLogo.astro` l'affiche
  désormais en `<img>` — il reste lisible **sur fond blanc comme sur fond
  foncé** (les lettres sont des découpes, le bleu porte le contraste).
  L'ancien rendu CSS et `seric-logo-original.jpg` (version fond blanc) ne sont
  plus utilisés.
- **Cartes cliquables honnêtes** : les cartes Solutions / Secteurs de
  l'**accueil** mènent désormais aux pages de détail (`/solutions`,
  `/secteurs`) — curseur « main » justifié. Sur les pages de détail
  elles-mêmes, les cartes ne sont plus cliquables (pas de curseur main, pas de
  flèche) pour ne pas suggérer un contenu inexistant.
- **Google Maps** : la page Contact intègre une carte Google (embed sans clé
  API) pour chaque bureau, Tokyo et Séoul.
- **Bandeau cookies** : `CookieBanner` + logique dans `site.ts` (choix
  mémorisé dans `localStorage` sous `seric.cookie-consent`).

## Prochaines étapes

1. **Visuels propriétaires** : remplacer le portrait de Christian Polak
   (actuellement une photo d'ambiance Tokyo N&B) et fournir une image sociale
   1200×630 — la passer en prop `ogImage` à `BaseLayout` (`og:image` /
   `twitter:image` déjà câblés). Vérifier la licence des photos Unsplash avant
   mise en prod. Logos clients : liste validée par le client (tous d'anciens
   clients — les clients actuels sont confidentiels et n'apparaissent pas).
2. **Formulaire de contact** : branché sur **Netlify Forms** (soumission AJAX,
   messages de confirmation localisés, honeypot anti-spam). Après le premier
   déploiement : vérifier que le formulaire « contact » apparaît dans le
   dashboard Netlify (Forms), et configurer la **notification email** vers
   `information@seric-japon.com` (Site settings → Forms → Form notifications).
   Gratuit jusqu'à 100 soumissions/mois. En local, l'envoi ne fait rien
   (il n'y a pas de backend) — le vrai test se fait sur le site déployé.

## Mise en ligne (go-live)

Site **statique** : `npm run build` → `dist/`. Hébergeable sur n'importe quel
hébergeur statique. Étapes recommandées, dans l'ordre :

### 1. Licences des images (Unsplash)

Voir **[`IMAGES.md`](IMAGES.md)** : toutes les photos sont sous Unsplash License
(usage commercial OK, sans permission). À faire avant prod : ouvrir chaque URL
source pour confirmer l'origine, écarter toute personne/logo/marque
identifiable, et (recommandé) créditer les photographes. Le logo SERIC est
fourni par le client.

### 2. Dépôt Git — privé ou public ?

- **Privé recommandé** (code d'un site client, aucune raison de l'exposer ;
  Netlify gère parfaitement les repos privés).
- `git init` puis commit. Le `.gitignore` exclut déjà `node_modules/`, `dist/`,
  `.astro/`. ⚠️ Il exclut aussi **`CLAUDE.md`** — si tu veux le versionner,
  retire cette ligne du `.gitignore`.

### 3. Netlify

- `netlify.toml` est déjà fourni (build `npm run build`, publish `dist`,
  `NODE_VERSION=22`, cache long sur `/images` et `/_astro`).
- Connecter le repo GitHub → Netlify déploie à chaque push.
- Brancher le domaine **`www.seric-japon.com`** (DNS chez le registrar →
  Netlify) ; HTTPS automatique (Let's Encrypt).
- ⚠️ `astro.config.mjs` fixe `site: "https://www.seric-japon.com"` :
  `canonical`, `hreflang` et le sitemap pointent vers ce domaine. Sur une
  preview `*.netlify.app`, les canonicals pointeront déjà vers le domaine
  final — normal ; ne pas indexer les previews.

### 4. Google Search Console

- Ajouter la propriété (idéalement **domaine**, vérification par TXT DNS).
- Soumettre le sitemap : `https://www.seric-japon.com/sitemap-index.xml`.
- Contrôler couverture + `hreflang` (déjà en place) une fois indexé.

### 5. Analytics + consentement (RGPD)

- Le bandeau cookies enregistre le choix dans `localStorage`
  (`seric.cookie-consent`) mais **aucun analytics n'est chargé** aujourd'hui —
  il est donc surtout informatif.
- Pour rester conforme : ne charger l'analytics **qu'après consentement**.

**Quel outil ? (Umami / Plausible vs GA4)**

| | Umami / Plausible | Google Analytics 4 |
|---|---|---|
| Mise en place | 1 balise `<script>`, dashboard simple | Plus lourd (Consent Mode v2) |
| Cookies | **Sans cookies** | Avec cookies |
| Bandeau de consentement | Pas strictement requis (cookieless) | **Obligatoire**, GA4 chargé après « Accepter » |
| RGPD | Simple, données souvent en UE | Plus délicat (transferts, config) |
| Coût | Umami auto-hébergé = gratuit ; Umami Cloud / Plausible = abonnement | Gratuit |
| Données | L'essentiel (visites, pages, sources) | Très complet (surdimensionné ici) |

**Recommandation : Umami (ou Plausible).** Plus simple, cookieless donc beaucoup
moins de friction RGPD, dashboard lisible — adapté à un site vitrine premium.
GA4 ne se justifie que si SERIC est déjà dans l'écosystème Google (Google Ads…)
ou veut une analyse très fine.

- **Umami** : créer un site (Umami Cloud ou auto-hébergé), récupérer la balise
  script + le `website-id`, l'injecter dans `BaseLayout.astro`. Cookieless → on
  peut garder le bandeau en simple info, voire le retirer.
- **GA4** : charger le script **uniquement** au clic « Accepter » (et/ou Consent
  Mode v2). Le hook se branche dans `src/scripts/site.ts`
  (fonction `setupCookieBanner`).

### 6. Checklist finale

- [ ] `npm run build` sans erreur
- [ ] Domaine + HTTPS actifs
- [ ] Sitemap soumis à Search Console
- [ ] Image sociale `ogImage` fournie
- [ ] Licences images validées (`IMAGES.md`)
- [ ] Analytics conditionné au consentement
- [x] Formulaire de contact branché à un vrai backend (Netlify Forms) —
      reste à activer la notification email dans le dashboard Netlify

## Référence : la maquette originale

- Brief client et historique : `../seric/chats/chat1.md`
- HTML/JSX original (React via Babel) : `../seric/project/`
- Textes JP corrigés : `../seric/project/uploads/HP修正文章.docx`,
  `hp_text.docx`
- Sitemap : `../seric/project/uploads/sitemap.pptx`,
  `Seric-HP2026 Site Map修正案202603.pptx`
