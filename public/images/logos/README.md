# Logos clients (section « Ils nous font confiance »)

Déposer ici les logos clients, puis renseigner leur `src` dans
`src/components/Trust.astro` (tableau `logos`).

Recommandations :
- Format **SVG** de préférence (net à toute taille), sinon **PNG transparent**.
- Logo **monochrome / sur fond transparent** : le composant l'affiche en
  niveaux de gris atténués, et en couleur au survol.
- Hauteur utile ~56 px ; cadrer serré (peu de marge dans le fichier).
- Exemple : déposer `toyota.svg` ici, puis dans `Trust.astro` :
  `{ name: "Toyota", src: "/images/logos/toyota.svg" }`

⚠️ Vérifier le droit d'utiliser chaque logo client (autorisation de la marque).
