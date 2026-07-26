// Client-side behaviour:
//   1. Nav: transparent over hero, becomes solid white past 560px (when navStyle="transparent_to_white")
//   2. Reveal sections on scroll (.is-visible toggle)
//   3. Language switcher persistence (writes preference to localStorage)

const NAV_SCROLL_THRESHOLD = 560;

function setupNavScroll(): void {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;
  const style = nav.dataset.navStyle ?? "transparent_to_white";
  if (style !== "transparent_to_white") return;

  const apply = () => {
    if (window.scrollY > NAV_SCROLL_THRESHOLD) {
      nav.dataset.navMode = "white";
    } else {
      nav.dataset.navMode = "transparent";
    }
  };
  apply();
  window.addEventListener("scroll", apply, { passive: true });
}

function setupReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(
    "[data-reveal], [data-reveal-stagger], [data-reveal-left], [data-reveal-right]",
  );
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  targets.forEach((el) => io.observe(el));
}

function setupLangPersistence(): void {
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((a) => {
    a.addEventListener("click", () => {
      const lang = a.dataset.langLink;
      if (lang) {
        try {
          localStorage.setItem("seric.lang", lang);
        } catch {
          /* ignore storage errors */
        }
      }
    });
  });
}

function setupCookieBanner(): void {
  const banner = document.querySelector<HTMLElement>("[data-cookie-banner]");
  if (!banner) return;

  const KEY = "seric.cookie-consent";
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch {
    /* storage blocked — show the banner anyway */
  }
  if (stored === "accepted" || stored === "refused") return;

  banner.hidden = false;

  const decide = (value: "accepted" | "refused") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore storage errors */
    }
    banner.hidden = true;
  };

  banner
    .querySelector("[data-cookie-accept]")
    ?.addEventListener("click", () => decide("accepted"));
  banner
    .querySelector("[data-cookie-refuse]")
    ?.addEventListener("click", () => decide("refused"));
}

function init(): void {
  setupNavScroll();
  setupReveal();
  setupLangPersistence();
  setupCookieBanner();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
