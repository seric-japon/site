// Source de vérité des deux bureaux : coordonnées, téléphone, clés i18n et
// liens cartographiques. Utilisée par `AccesPage` (cartes, fiches) et par
// `ContactPage` (téléphone et adresse, sans carte).
//
// Les adresses ne sont PAS dupliquées ici : elles vivent dans `ui.ts`, une par
// locale. L'adresse « locale » — celle qu'on montre au chauffeur de taxi — est
// simplement la version japonaise (Tokyo) ou coréenne (Séoul) de cette même
// clé, lue via `useTranslations(localLang)`.

import type { Lang, UIKey } from "../i18n/ui";

export type OfficeId = "tokyo" | "seoul";

export interface Office {
  id: OfficeId;
  /** Locale dont l'adresse fait foi sur place (taxi, réception, livraison). */
  localLang: Lang;
  /** Clé i18n de l'intitulé du bloc « adresse locale » sur la fiche. */
  localLabelKey: UIKey;
  nameKey: UIKey;
  addrKey: UIKey;
  accessKey: UIKey;
  /**
   * Coordonnées du bâtiment lui-même (et non de l'adresse postale), pour que
   * le marqueur tombe pile sur l'immeuble.
   * Tokyo = 日本橋一丁目三井ビルディング, Séoul = 용성비즈텔.
   */
  lat: number;
  lng: number;
  phone: string;
  /**
   * Lien vers la carte dominante du pays quand Google n'y suffit pas.
   * En Corée, Google Maps n'a pas le droit d'exporter les données routières :
   * l'itinéraire en voiture y est inutilisable, d'où le renvoi vers Naver.
   */
  altMap?: { labelKey: UIKey; url: string };
}

export const offices: Office[] = [
  {
    id: "tokyo",
    localLang: "ja",
    localLabelKey: "acces_taxi_ja",
    nameKey: "con_tokyo",
    addrKey: "con_tokyo_addr",
    accessKey: "con_tokyo_access",
    lat: 35.6825593,
    lng: 139.7746312,
    phone: "+81 3-5542-1856",
  },
  {
    id: "seoul",
    localLang: "ko",
    localLabelKey: "acces_taxi_ko",
    nameKey: "con_seoul",
    addrKey: "con_seoul_addr",
    accessKey: "con_seoul_access",
    // ⚠️ À FAIRE CONFIRMER PAR LE BUREAU DE SÉOUL : la station (Sinyongsan,
    // ligne 4) et la distance (~80 m) sont fiables, les numéros de sortie
    // « 5 et 6 » viennent d'une source secondaire. Un mauvais numéro de sortie
    // est pire que pas de numéro du tout — clé `con_seoul_access` × 4 locales.
    lat: 37.5299841,
    lng: 126.9681752,
    phone: "+82 2-730-2740",
    altMap: {
      labelKey: "acces_naver",
      url: `https://map.naver.com/p/search/${encodeURIComponent(
        "서울특별시 용산구 한강대로 109 용성비즈텔",
      )}`,
    },
  },
];

/** Carte intégrée (embed sans clé API) affichée sur la page Accès. */
export const embedUrl = (o: Office, lang: Lang): string =>
  `https://maps.google.com/maps?q=${o.lat},${o.lng}&z=17&hl=${lang}&output=embed`;

/** « Itinéraire » : ouvre l'app Maps native sur mobile. */
export const directionsUrl = (o: Office, lang: Lang): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${o.lat},${o.lng}&hl=${lang}`;

/** Cible du QR code : la position, pas un itinéraire depuis nulle part. */
export const placeUrl = (o: Office): string =>
  `https://www.google.com/maps/search/?api=1&query=${o.lat},${o.lng}`;

/** `tel:` — Android et iOS veulent un numéro sans espace ni tiret. */
export const telHref = (o: Office): string => `tel:${o.phone.replace(/[^+\d]/g, "")}`;
