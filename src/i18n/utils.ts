import { ui, languages, defaultLang, type Lang, type UIKey } from "./ui";

/** BCP-47 / Open Graph locale codes per UI language. */
export const ogLocale: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR",
};

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang === "en" || maybeLang === "ja" || maybeLang === "ko")
    return maybeLang;
  return defaultLang;
}

/** CJK locales use slightly smaller display sizes (denser glyphs). */
export function isCJK(lang: Lang): boolean {
  return lang === "ja" || lang === "ko";
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix paths with the current locale (no prefix for the default). */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/**
 * Build absolute hreflang alternates for a locale-agnostic path.
 * `site` is Astro.site (the configured production origin).
 */
export function localeAlternates(
  site: URL | undefined,
  path = "/",
): { lang: Lang; href: string }[] {
  const origin = site?.origin ?? "";
  return (Object.keys(languages) as Lang[]).map((lang) => {
    const p = localizedPath(lang, path);
    // Match Astro's directory-style output (trailing slash) so each
    // alternate equals the target page's own canonical URL.
    const withSlash = p === "/" || p.endsWith("/") ? p : `${p}/`;
    return { lang, href: origin + withSlash };
  });
}
