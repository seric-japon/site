// Quadrilingual content for the SÉRIC site — FR / EN / JA / KO

export const languages = {
  fr: "FR",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
} as const;

export const defaultLang = "fr" as const;

export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    // Nav
    nav_solutions: "Solutions",
    nav_sectors: "Secteurs",
    nav_about: "À propos",
    nav_story: "Histoire",
    nav_contact: "Contact",
    nav_access: "Accès",

    // Hero
    hero_eyebrow: "Tokyo · Séoul · depuis 1981",
    hero_title:
      "Le partenaire de l’industrie européenne au Japon et en Corée.",
    hero_sub:
      "45 ans d’expertise terrain. Des partenariats industriels durables noués entre l’Europe, le Japon et la Corée.",
    hero_cta_primary: "Échanger avec la SÉRIC",
    hero_cta_secondary: "Nos solutions",

    // Stats
    stat_45y_label: "années au Japon",
    stat_26y_label: "années en Corée",
    stat_offices: "bureaux : Tokyo · Séoul",
    stat_clients: "clients industriels accompagnés",

    // Strapline
    flagships:
      "SÉRIC accompagne les fleurons industriels européens, japonais et coréens.",

    // Solutions
    sol_title: "Six savoir-faire au service de votre développement",
    sol_lede:
      "De la stratégie d’entrée au support quotidien, la SÉRIC couvre l’intégralité du cycle de votre implantation.",
    sol_1_t: "Conseil stratégique",
    sol_1_d:
      "Plans d’entrée sur mesure, fondés sur 45 ans d’expérience et une connaissance fine du tissu industriel local.",
    sol_2_t: "Acquisition de commandes",
    sol_2_d:
      "Représentation locale : prospection, négociation, acquisition de commandes, gestion de comptes clés.",
    sol_3_t: "Négociation de partenariats",
    sol_3_d:
      "JV, licences, M&A, accords technologiques : identification, due diligence et négociation jusqu’au closing.",
    sol_4_t: "Installation de filiales",
    sol_4_d:
      "Mise en place de filiales : pilotage, conformité, finance, recrutement, fiscalité.",
    sol_5_t: "Missions",
    sol_5_d:
      "Missions de terrain pour valider une opportunité (commerciale, partenariat, ou rachat) avant l’engagement.",
    sol_6_t: "Pont culturel",
    sol_6_d:
      "Médiation interculturelle pour des négociations efficaces.",

    // Sectors
    sec_title: "Six secteurs, une exigence d’excellence",
    sec_auto_t: "Automobile",
    sec_auto_d:
      "Intérieurs, extérieurs, motorisations, électronique.",
    sec_auto_tag: "Priorité",
    sec_def_t: "Défense",
    sec_def_d:
      "Équipements de défense pour toutes les armes (Terre, Air, Marine, Espace). Relations gouvernementales établies.",
    sec_def_tag: "Priorité",
    sec_aer_t: "Aérospatial",
    sec_aer_d:
      "Aéronefs, hélicoptères, motorisation et équipements de bord. Cycles longs, exigences de certification.",
    sec_ene_t: "Énergie & Environnement",
    sec_ene_d:
      "Exploration pétrolière, énergies renouvelables, traitement de l’eau, infrastructures publiques et aide au développement.",
    sec_mar_t: "Transport maritime",
    sec_mar_d:
      "Armateurs, chantiers navals, équipements de bord et services portuaires.",
    sec_met_t: "Métallurgie & Alliages spéciaux",
    sec_met_d:
      "Aciers spéciaux, alliages haute performance, traitements et pièces critiques.",
    sec_patronage: "Mécénat",
    sec_cul_t: "Activités culturelles",
    sec_cul_d:
      "Édition, organisation d’expositions (France, Japon, Corée du Sud), prêts d’œuvres, conseil historique et mécénat.",

    // Why
    why_title: "Pourquoi SÉRIC",
    why_headline_a: "45 ans d’expérience",
    why_headline_b: "sur le terrain.",
    // Légendes des trois compteurs (45 · 02 · ∞) — voir Why.astro.
    why_1_unit: "ANS",
    why_2_unit: "BUREAUX",
    why_3_unit: "RÉSEAU",
    why_1_t: "Savoir-faire",
    why_1_d:
      "Quarante-cinq ans à décoder l’économie, les cercles de décision et les codes culturels du Japon et de la Corée. Ce qu’aucune étude de marché ne donne.",
    why_2_t: "Équipe permanente",
    why_2_d:
      "Équipe multilingue, composée de généralistes et spécialistes, résidant au Japon et en Corée.",
    why_3_t: "Réseau de haut niveau",
    why_3_d:
      "Liens étroits avec les dirigeants d’entreprises, les administrations et les représentations européennes.",

    // Story
    story_eyebrow: "Notre histoire",
    story_title: "Une vision portée depuis 1981.",
    story_body:
      "La SÉRIC a été fondée en 1981 par Christian Polak, alors installé à Tokyo depuis dix ans, pour prolonger les ponts industriels et diplomatiques tissés entre la France et le Japon depuis plus d’un siècle. Une histoire reconnue par les deux gouvernements : Légion d’honneur et Ordre du Soleil Levant.",
    story_cta: "Lire l’histoire complète",
    story_caption_role: "Fondateur",

    // Trust
    trust_title: "Nous avons leur confiance",

    // CTA
    cta_title: "Au service de votre réussite au Japon et en Corée.",
    cta_sub:
      "Les équipes de la SÉRIC à Tokyo et à Séoul sont à votre écoute pour échanger.",

    // Footer
    foot_tokyo: "SÉRIC Tokyo",
    foot_seoul: "SÉRIC Seoul",
    foot_legal: "© SÉRIC 2026 · Tous droits réservés",
    foot_about_blurb:
      "Le partenaire de l’industrie européenne au Japon et en Corée depuis 1981.",

    // Meta (pages internes)
    solutions_meta_title: "Solutions · SÉRIC",
    solutions_meta_desc:
      "Conseil stratégique, acquisition de commandes, partenariats, opérations et missions : tout le cycle de votre développement industriel au Japon et en Corée.",
    secteurs_meta_title: "Secteurs · SÉRIC",
    secteurs_meta_desc:
      "Automobile, défense, aérospatial, énergie, transport maritime, métallurgie et alliages spéciaux : nos secteurs d’excellence au Japon et en Corée.",
    histoire_meta_title: "Notre histoire · SÉRIC",
    histoire_meta_desc:
      "Depuis 1981, SÉRIC bâtit des ponts industriels entre l’Europe, le Japon et la Corée. Une maison fondée par Christian Polak.",
    contact_meta_title: "Contact · SÉRIC",
    contact_meta_desc:
      "Bureaux de Tokyo et de Séoul. Échangeons sur votre projet de développement au Japon ou en Corée.",

    // Solutions (page)
    sol_hero_title: "Tout le cycle de votre implantation, sous un même toit.",
    sol_hero_sub:
      "De la première étude de marché au pilotage quotidien de votre filiale, la SÉRIC couvre chaque étape de votre développement industriel au Japon et en Corée.",
    sol_approach_eyebrow: "Notre approche",
    sol_approach_title: "Comprendre, connecter, convaincre.",
    sol_step_1_t: "Comprendre",
    sol_step_1_d:
      "Nous lisons le terrain (réglementation, acteurs, codes culturels) avant de recommander la moindre action.",
    sol_step_2_t: "Connecter",
    sol_step_2_d:
      "Être présenté par SÉRIC, c’est arriver avec un gage de crédibilité : quarante-cinq ans de relations de confiance, suivies avec les dirigeants, les administrations et les donneurs d’ordre japonais et coréens.",
    sol_step_3_t: "Convaincre",
    sol_step_3_d:
      "La SÉRIC porte votre offre jusqu’à la décision : premières commandes, montée en cadence, parts de marché gagnées puis défendues.",

    // Secteurs (page)
    sec_hero_title: "Six secteurs, une même exigence.",
    sec_hero_sub:
      "La SÉRIC concentre son expertise là où les enjeux industriels sont les plus élevés, et où les informations stratégiques sont vitales et doivent rester protégées.",
    sec_intro:
      "Une éthique simple : un seul client par typologie de produit. Votre stratégie reste la vôtre.",
    sec_auto_long:
      "Intérieurs, extérieurs, motorisations, électronique embarquée. La SÉRIC accompagne les équipementiers et constructeurs européens dans leurs partenariats avec les groupes japonais et coréens : un client par typologie de produit.",
    sec_def_long:
      "Équipements et matériels de défense pour toutes les armes (Terre, Air, Marine, Espace). Des relations gouvernementales établies de longue date et une compréhension fine des cycles d’achat publics au Japon et en Corée.",
    sec_aer_long:
      "Aéronefs, hélicoptères, motorisation, équipements de bord. Un secteur où la certification et les cycles longs imposent des partenaires locaux solides, et où la SÉRIC accompagne les constructeurs et équipementiers européens de longue date.",
    sec_ene_long:
      "Exploration pétrolière, énergies renouvelables, traitement de l’eau, infrastructures publiques et projets d’aide au développement. Un domaine où les calendriers longs récompensent une présence durable.",
    sec_mar_long:
      "Armateurs, chantiers navals, équipements de bord et services portuaires. Le Japon et la Corée concentrent une part majeure de la construction navale mondiale : la SÉRIC ouvre l’accès aux chantiers et aux donneurs d’ordre.",
    sec_met_long:
      "Aciers spéciaux, alliages haute performance, traitements de surface et pièces critiques. Des matériaux à forte valeur ajoutée recherchés par les plus grands groupes.",
    sec_cul_long:
      "Édition, organisation d’expositions, prêts d’œuvres, conseil historique et mécénat. La SÉRIC a notamment contribué à organiser de grandes expositions au musée du quai Branly — Jacques Chirac, au musée Guimet, et bien d’autres encore, aussi bien en France qu’au Japon et en Corée du Sud.",

    // Histoire (page)
    hist_hero_title: "Une présence bâtie depuis 1981.",
    hist_hero_sub:
      "Quarante-cinq ans de ponts industriels et diplomatiques entre l’Europe, le Japon et la Corée.",
    hist_intro_title: "L’histoire d’un homme, devenue celle d’une maison.",
    hist_intro_body:
      "L’histoire de SÉRIC est intrinsèquement liée à celle de Christian Polak, arrivé au Japon en 1971. En 1981, il fonde la SÉRIC (Société d’Études et de Recherches Industrielles et Commerciales) à Tokyo pour prolonger les liens industriels et diplomatiques tissés entre la France et le Japon depuis plus d’un siècle, et permettre des partenariats stratégiques durables.",
    hist_founder_honors:
      "Christian Polak est Chevalier de la Légion d’honneur et décoré de l’Ordre du Soleil Levant, rayons d’or avec rosette.",
    hist_timeline_title: "Quarante-cinq ans d’expansion.",
    tl_1981: "Établissement de la SÉRIC à Tokyo.",
    tl_1988: "Début d’activités en Corée du Sud : aide apportée à Bolloré pour ouvrir la SCAC.",
    tl_1998: "Établissement de la SÉRIC à Séoul.",
    tl_2007: "Premières activités en Mongolie.",
    tl_2010: "Bureau de Pékin.",
    tl_2026: "45ᵉ anniversaire.",
    hist_mission_title: "Notre mission",
    hist_mission_body:
      "Catalyser les énergies d’innovation des entreprises françaises et européennes et des sociétés japonaises et coréennes, pour établir des partenariats à long terme.",
    hist_values_title: "Six valeurs",
    hist_values_intro: "Ce qui guide chacune de nos missions.",
    val_1: "Modestie",
    val_2: "Persévérance",
    val_3: "Effort",
    val_4: "Sincérité",
    val_5: "Passion",
    val_6: "Imagination",

    // Contact (page)
    con_offices_title: "Nos bureaux",
    con_tokyo: "SÉRIC Tokyo",
    con_tokyo_addr:
      "Nihonbashi 1-chome, Mitsui Building 7F\n1-4-1 Nihonbashi, Chuo-ku\nTokyo 103-0027, Japon",
    con_tokyo_access:
      "Sortie C1 de la station Nihonbashi (lignes Ginza, Tozai et Asakusa). À 3 min à pied de Mitsukoshimae, 6 min à pied de la gare de Tokyo.",
    con_seoul: "SÉRIC Seoul",
    con_seoul_addr:
      "602 Yongseong Biztel, 109 Hangang-daero\nYongsan-gu, Séoul 04376\nCorée du Sud",
    con_seoul_access:
      "Station Sinyongsan (ligne 4), sorties 5 et 6 — l’immeuble est à 80 m. À 5 min à pied de la gare de Yongsan (ligne 1, KTX).",
    con_phone_label: "Téléphone",
    con_email_label: "Email",
    con_form_title: "Écrivez-nous",
    con_form_intro: "Les équipes SÉRIC de Tokyo et de Séoul sont à votre écoute.",
    form_first: "Prénom",
    form_last: "Nom",
    form_email: "Email",
    form_company: "Société",
    form_message: "Message",
    form_send: "Envoyer",
    form_note:
      "En soumettant ce formulaire, vous acceptez d’être recontacté par SÉRIC.",
    form_success:
      "Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.",
    form_error:
      "L’envoi a échoué. Réessayez, ou écrivez-nous directement à information@seric-japon.com.",

    // Page Accès (/acces)
    acces_meta_title: "Fiches d’accès · SÉRIC",
    acces_meta_desc:
      "Comment rejoindre les bureaux SÉRIC de Tokyo et de Séoul : adresse en langue locale, station, sortie, et fiche à imprimer.",
    acces_title: "Se rendre à la SÉRIC",
    acces_sheet: "Fiche d’accès",
    acces_addr_label: "Adresse",
    acces_taxi_ja: "En japonais — à montrer au chauffeur de taxi",
    acces_taxi_ko: "En coréen — à montrer au chauffeur de taxi",
    acces_access_label: "Accès",
    acces_qr_caption: "Scannez pour ouvrir la position dans Google Maps",
    acces_print: "Imprimer / Enregistrer en PDF",
    acces_directions: "Itinéraire",
    acces_naver: "Ouvrir dans Naver Map",
    acces_form_link: "Écrivez-nous",

    // Cookie banner
    cookie_text:
      "Nous utilisons des cookies pour mesurer l’audience et améliorer votre expérience. Vous gardez le contrôle.",
    cookie_accept: "Accepter",
    cookie_refuse: "Refuser",
  },

  en: {
    nav_solutions: "Solutions",
    nav_sectors: "Sectors",
    nav_about: "About",
    nav_story: "Story",
    nav_contact: "Contact",
    nav_access: "Getting here",

    hero_eyebrow: "Tokyo · Seoul · since 1981",
    hero_title:
      "The trusted partner of European industry in Japan and Korea.",
    hero_sub:
      "45 years of on-the-ground expertise. Lasting industrial partnerships forged between Europe, Japan and Korea.",
    hero_cta_primary: "Talk to SÉRIC",
    hero_cta_secondary: "Our solutions",

    stat_45y_label: "years in Japan",
    stat_26y_label: "years in Korea",
    stat_offices: "offices: Tokyo · Seoul",
    stat_clients: "industrial clients served",

    flagships:
      "SÉRIC partners with the industrial flagships of Europe, Japan and Korea.",

    sol_title: "Six areas of expertise serving your growth",
    sol_lede:
      "From entry strategy to day-to-day support, SÉRIC covers the full cycle of your market presence.",
    sol_1_t: "Strategic consulting",
    sol_1_d:
      "Tailored market-entry plans, grounded in 45 years of experience and an intimate knowledge of local industry.",
    sol_2_t: "Order acquisition",
    sol_2_d:
      "Local representation: prospecting, negotiation, order acquisition, key account management.",
    sol_3_t: "Partnership deal-making",
    sol_3_d:
      "JVs, licensing, M&A, technology agreements — from sourcing through due diligence to closing.",
    sol_4_t: "Subsidiary set-up",
    sol_4_d:
      "Setting up subsidiaries: management, compliance, finance, recruitment, tax.",
    sol_5_t: "Missions",
    sol_5_d:
      "On-the-ground missions to validate an opportunity — commercial, partnership or acquisition — before you commit.",
    sol_6_t: "Cultural bridge",
    sol_6_d:
      "Cross-cultural mediation for negotiations that succeed.",

    sec_title: "Six sectors, one standard of excellence",
    sec_auto_t: "Automotive",
    sec_auto_d:
      "Interiors, exteriors, powertrain, electronics.",
    sec_auto_tag: "Priority",
    sec_def_t: "Defense",
    sec_def_d:
      "Defense equipment across every service — land, air, naval, space. Established government relations.",
    sec_def_tag: "Priority",
    sec_aer_t: "Aerospace",
    sec_aer_d:
      "Aircraft, helicopters, propulsion and onboard equipment. Long cycles, certification demands.",
    sec_ene_t: "Energy & environment",
    sec_ene_d:
      "Oil exploration, renewables, water treatment, public infrastructure and development assistance.",
    sec_mar_t: "Maritime transport",
    sec_mar_d: "Shipowners, shipyards, onboard equipment and port services.",
    sec_met_t: "Metals & special alloys",
    sec_met_d:
      "Special steels, high-performance alloys, treatments and critical parts.",
    sec_patronage: "Patronage",
    sec_cul_t: "Cultural activities",
    sec_cul_d:
      "Publishing, exhibition organisation (France, Japan, South Korea), art loans, historical advisory and patronage.",

    why_title: "Why SÉRIC",
    why_headline_a: "45 years of experience,",
    why_headline_b: "built on the ground.",
    why_1_unit: "YEARS",
    why_2_unit: "OFFICES",
    why_3_unit: "NETWORK",
    why_1_t: "Know-how",
    why_1_d:
      "Forty-five years spent decoding the economy, the decision-making circles and the cultural codes of Japan and Korea. What no market study will give you.",
    why_2_t: "Resident team",
    why_2_d:
      "A multilingual team of generalists and specialists, resident in Japan and Korea.",
    why_3_t: "Top-level network",
    why_3_d:
      "Close ties with company leadership, public administrations and European missions.",

    story_eyebrow: "Our story",
    story_title: "A vision carried since 1981.",
    story_body:
      "SÉRIC was founded in 1981 by Christian Polak, who had already spent a decade in Tokyo, to extend the industrial and diplomatic ties woven between France and Japan over more than a century. A trajectory recognised by both governments: Legion of Honour and Order of the Rising Sun.",
    story_cta: "Read the full story",
    story_caption_role: "Founder",

    trust_title: "Trusted by",

    cta_title: "At the service of your success in Japan and Korea.",
    cta_sub:
      "SÉRIC’s Tokyo and Seoul teams are here to talk.",

    foot_tokyo: "SÉRIC Tokyo",
    foot_seoul: "SÉRIC Seoul",
    foot_legal: "© SÉRIC 2026 — All rights reserved",
    foot_about_blurb:
      "The trusted partner of European industry in Japan and Korea since 1981.",

    // Meta (inner pages)
    solutions_meta_title: "Solutions — SÉRIC",
    solutions_meta_desc:
      "Strategy, order acquisition, partnerships, operations and missions: the full lifecycle of your industrial growth in Japan and Korea.",
    secteurs_meta_title: "Sectors — SÉRIC",
    secteurs_meta_desc:
      "Automotive, defense, aerospace, energy, maritime transport, metals and special alloys: our sectors of excellence in Japan and Korea.",
    histoire_meta_title: "Our story — SÉRIC",
    histoire_meta_desc:
      "Since 1981, SÉRIC has built industrial bridges between Europe, Japan and Korea — a firm founded by Christian Polak.",
    contact_meta_title: "Contact — SÉRIC",
    contact_meta_desc:
      "Tokyo and Seoul offices. Let’s talk about your growth project in Japan or Korea.",

    // Solutions (page)
    sol_hero_title: "Your entire market presence, under one roof.",
    sol_hero_sub:
      "From the first market study to the day-to-day running of your subsidiary, SÉRIC covers every stage of your industrial growth in Japan and Korea.",
    sol_approach_eyebrow: "Our approach",
    sol_approach_title: "Understand, connect, convince.",
    sol_step_1_t: "Understand",
    sol_step_1_d:
      "We read the ground — regulation, players, cultural codes — before recommending a single move.",
    sol_step_2_t: "Connect",
    sol_step_2_d:
      "An introduction from SÉRIC is a credential in itself: forty-five years of trusted, continuous relationships with executives, public administrations and the groups that place the orders.",
    sol_step_3_t: "Convince",
    sol_step_3_d:
      "SÉRIC carries your case through to the decision: first orders won, volumes ramped up, market share taken and held.",

    // Sectors (page)
    sec_hero_title: "Six sectors, one standard.",
    sec_hero_sub:
      "SÉRIC concentrates its expertise where industrial stakes run highest — and where strategic information is vital and has to stay protected.",
    sec_intro:
      "One simple ethic: a single client per product type. Your strategy stays yours.",
    sec_auto_long:
      "Interiors, exteriors, powertrain, embedded electronics. SÉRIC supports European suppliers and OEMs in their partnerships with Japanese and Korean groups: one client per product type.",
    sec_def_long:
      "Defense equipment and systems across every service — land, air, naval, space. Long-established government relations and a fine grasp of public procurement cycles in Japan and Korea.",
    sec_aer_long:
      "Aircraft, helicopters, propulsion, onboard equipment. A sector where certification and long programme cycles demand solid local partners — and where SÉRIC has supported European manufacturers and suppliers for decades.",
    sec_ene_long:
      "Oil exploration, renewables, water treatment, public infrastructure and official development assistance. A field where long timelines reward a lasting presence.",
    sec_mar_long:
      "Shipowners, shipyards, onboard equipment and port services. Japan and Korea account for a major share of world shipbuilding: SÉRIC opens access to the yards and to the decision-makers who buy.",
    sec_met_long:
      "Special steels, high-performance alloys, surface treatments and critical parts. High-value materials sought after by the largest industrial groups.",
    sec_cul_long:
      "Publishing, exhibition organisation, art loans, historical advisory and patronage. SÉRIC has notably helped stage major exhibitions at the musée du quai Branly — Jacques Chirac, at the musée Guimet and many more, in France as well as in Japan and South Korea.",

    // Story (page)
    hist_hero_title: "A presence built since 1981.",
    hist_hero_sub:
      "Forty-five years of industrial and diplomatic bridges between Europe, Japan and Korea.",
    hist_intro_title: "One man’s story, now a firm’s.",
    hist_intro_body:
      "SÉRIC’s story is inseparable from that of Christian Polak, who arrived in Japan in 1971. In 1981 he founded SÉRIC — Société d’Études et de Recherches Industrielles et Commerciales — in Tokyo to extend the industrial and diplomatic ties woven between France and Japan over more than a century, and to enable lasting strategic partnerships.",
    hist_founder_honors:
      "Christian Polak is a Knight of the Legion of Honour and a recipient of the Order of the Rising Sun, Gold Rays with Rosette.",
    hist_timeline_title: "Forty-five years of expansion.",
    tl_1981: "SÉRIC established in Tokyo.",
    tl_1988: "First activities in South Korea, assisting Bolloré with the opening of SCAC.",
    tl_1998: "SÉRIC established in Seoul.",
    tl_2007: "First activities in Mongolia.",
    tl_2010: "Beijing office.",
    tl_2026: "45th anniversary.",
    hist_mission_title: "Our mission",
    hist_mission_body:
      "To catalyse the innovative energies of French and European companies and their Japanese and Korean counterparts, building partnerships that last.",
    hist_values_title: "Six values",
    hist_values_intro: "What guides every assignment we take on.",
    val_1: "Modesty",
    val_2: "Perseverance",
    val_3: "Effort",
    val_4: "Sincerity",
    val_5: "Passion",
    val_6: "Imagination",

    // Contact (page)
    con_offices_title: "Our offices",
    con_tokyo: "SÉRIC Tokyo",
    con_tokyo_addr:
      "Nihonbashi 1-chome, Mitsui Building 7F\n1-4-1 Nihonbashi, Chuo-ku\nTokyo 103-0027, Japan",
    con_tokyo_access:
      "Exit C1 of Nihonbashi Station (Ginza, Tozai and Asakusa lines). A 3-minute walk from Mitsukoshimae, 6 minutes on foot from Tokyo Station.",
    con_seoul: "SÉRIC Seoul",
    con_seoul_addr:
      "602 Yongseong Biztel, 109 Hangang-daero\nYongsan-gu, Seoul 04376\nSouth Korea",
    con_seoul_access:
      "Sinyongsan Station (Line 4), exits 5 and 6 — the building is 80 m away. A 5-minute walk from Yongsan Station (Line 1, KTX).",
    con_phone_label: "Phone",
    con_email_label: "Email",
    con_form_title: "Write to us",
    con_form_intro: "SÉRIC’s Tokyo and Seoul teams are here to help.",
    form_first: "First name",
    form_last: "Last name",
    form_email: "Email",
    form_company: "Company",
    form_message: "Message",
    form_send: "Send",
    form_note:
      "By submitting this form, you agree to be contacted by SÉRIC.",
    form_success:
      "Thank you, your message has been sent. We will get back to you shortly.",
    form_error:
      "Something went wrong. Please try again, or email us directly at information@seric-japon.com.",

    // Access page (/acces)
    acces_meta_title: "Getting here — SÉRIC",
    acces_meta_desc:
      "How to reach SÉRIC’s Tokyo and Seoul offices: address in the local language, station, exit, and a printable sheet.",
    acces_title: "Getting to SÉRIC",
    acces_sheet: "Access sheet",
    acces_addr_label: "Address",
    acces_taxi_ja: "In Japanese — show this to your taxi driver",
    acces_taxi_ko: "In Korean — show this to your taxi driver",
    acces_access_label: "Getting there",
    acces_qr_caption: "Scan to open the location in Google Maps",
    acces_print: "Print / Save as PDF",
    acces_directions: "Directions",
    acces_naver: "Open in Naver Map",
    acces_form_link: "Write to us",

    // Cookie banner
    cookie_text:
      "We use cookies to measure traffic and improve your experience. You stay in control.",
    cookie_accept: "Accept",
    cookie_refuse: "Decline",
  },

  ja: {
    nav_solutions: "ソリューション",
    nav_sectors: "事業分野",
    nav_about: "会社案内",
    nav_story: "ストーリー",
    nav_contact: "お問い合わせ",
    nav_access: "アクセス",

    hero_eyebrow: "東京・ソウル — 1981年創業",
    hero_title: "欧州産業の、日本と韓国における戦略パートナー。",
    hero_sub:
      "45年の現場経験。欧州と日本・韓国のあいだに築いてきた、長く続く産業パートナーシップ。",
    hero_cta_primary: "SÉRICに相談する",
    hero_cta_secondary: "サービスを見る",

    stat_45y_label: "日本での実績",
    stat_26y_label: "韓国での実績",
    stat_offices: "拠点：東京・ソウル",
    stat_clients: "産業界のお客様",

    flagships:
      "SÉRICは、ヨーロッパ・日本・韓国の産業のフラッグシップと協働しています。",

    sol_title: "貴社の成長を支える6つの専門領域",
    sol_lede:
      "市場参入の戦略から日々のサポートまで、SÉRICが進出のすべての段階をカバーします。",
    sol_1_t: "戦略コンサルティング",
    sol_1_d:
      "45年の経験と現地産業への深い理解に基づく、オーダーメイドの市場参入戦略。",
    sol_2_t: "受注獲得",
    sol_2_d:
      "現地代理として、開拓・交渉・受注獲得・主要顧客管理を担います。",
    sol_3_t: "提携交渉",
    sol_3_d:
      "JV・ライセンス・M&A・技術契約 — 候補発掘からデューデリジェンス、クロージングまで。",
    sol_4_t: "子会社の設立",
    sol_4_d:
      "子会社の設立：運営、コンプライアンス、財務、採用、税務。",
    sol_5_t: "ビジネスミッション",
    sol_5_d:
      "商機・提携・買収の可能性を、本格的な関与の前に現地で検証するミッション。",
    sol_6_t: "異文化の架け橋",
    sol_6_d:
      "効果的な交渉のための異文化メディエーション。",

    sec_title: "事業分野は6つ、卓越という基準は一つ",
    sec_auto_t: "自動車、各種車両",
    sec_auto_d:
      "内装・外装・パワートレイン・電子部品。",
    sec_auto_tag: "主力分野",
    sec_def_t: "防衛",
    sec_def_d:
      "陸・海・空・宇宙、すべての領域にわたる防衛装備。政府機関との確立された関係。",
    sec_def_tag: "主力分野",
    sec_aer_t: "航空宇宙",
    sec_aer_d:
      "航空機・ヘリコプター・推進系・機載機器。長い開発サイクルと厳格な認証要件。",
    sec_ene_t: "エネルギー・環境",
    sec_ene_d:
      "石油探査、再生可能エネルギー、水処理、公共インフラ、開発援助案件。",
    sec_mar_t: "海運",
    sec_mar_d: "船主、造船所、船舶用機器、港湾サービス。",
    sec_met_t: "金属・特殊合金",
    sec_met_d: "特殊鋼、高性能合金、表面処理、重要部品。",
    sec_patronage: "メセナ",
    sec_cul_t: "文化活動",
    sec_cul_d:
      "出版、展覧会の企画（フランス・日本・韓国）、美術品貸与、歴史考証、そしてメセナ活動。",

    why_title: "私たちの強み",
    why_headline_a: "45年の経験は",
    why_headline_b: "すべて現場から。",
    why_1_unit: "年",
    why_2_unit: "拠点",
    why_3_unit: "ネットワーク",
    why_1_t: "ノウハウ",
    why_1_d:
      "日本と韓国の経済、意思決定層、そして文化的な作法を読み解いてきた45年。市場調査では決して得られないものです。",
    why_2_t: "常駐チーム",
    why_2_d:
      "日本と韓国に常駐する、ジェネラリストとスペシャリストからなる多言語チーム。",
    why_3_t: "ハイレベルなネットワーク",
    why_3_d: "企業経営層・政府機関・欧州政府代表との緊密な関係。",

    story_eyebrow: "ストーリー",
    story_title: "1981年から受け継がれるビジョン。",
    story_body:
      "SÉRICは1981年、東京に10年間暮らしてきたクリスチャン・ポラックにより、1世紀以上にわたる日仏の産業と外交の絆を引き継ぐべく設立されました。両国政府より叙勲（レジオン・ドヌール勲章、旭日小綬章）。",
    story_cta: "社史の詳細を見る",
    story_caption_role: "創業者",

    trust_title: "主なお取引先",

    cta_title: "日本と韓国での成功のために。",
    cta_sub: "SÉRICの東京・ソウルのチームが、いつでもご相談を承ります。",

    foot_tokyo: "株式会社セリク（東京）",
    foot_seoul: "セリク・ソウル",
    foot_legal: "© SÉRIC 2026 — All rights reserved",
    foot_about_blurb: "1981年より、欧州産業の日本・韓国における戦略パートナー。",

    // メタ（内部ページ）
    solutions_meta_title: "ソリューション — SÉRIC",
    solutions_meta_desc:
      "戦略・受注獲得・提携・運営・ミッション — 日本と韓国における産業展開の全段階を支援します。",
    secteurs_meta_title: "事業分野 — SÉRIC",
    secteurs_meta_desc:
      "自動車、防衛、航空宇宙、エネルギー、海運、金属・特殊合金 — 日本と韓国における専門分野。",
    histoire_meta_title: "私たちのストーリー — SÉRIC",
    histoire_meta_desc:
      "1981年以来、SÉRICは欧州・日本・韓国の産業の架け橋を築いてきました。創業者クリスチャン・ポラック。",
    contact_meta_title: "お問い合わせ — SÉRIC",
    contact_meta_desc:
      "東京・ソウルオフィス。日本・韓国での事業展開についてご相談ください。",

    // ソリューション（ページ）
    sol_hero_title: "進出のすべての段階を、ひとつの窓口で。",
    sol_hero_sub:
      "最初の市場調査から子会社の日常運営まで、SÉRICが日本と韓国における産業進出のあらゆる段階を支援します。",
    sol_approach_eyebrow: "私たちのアプローチ",
    sol_approach_title: "理解し、つなぎ、納得を導く。",
    sol_step_1_t: "理解する",
    sol_step_1_d:
      "規制・関係者・文化的な作法など、現地の状況を読み解いたうえで、最適な一手をご提案します。",
    sol_step_2_t: "つなぐ",
    sol_step_2_d:
      "SÉRICの紹介は、それ自体が信用の証です。45年にわたり築いてきた経営層・行政・発注元との信頼関係が、そのまま後ろ盾になります。",
    sol_step_3_t: "納得を導く",
    sol_step_3_d:
      "SÉRICは決断に至るまで、お客様の提案を支えます。初回受注、量産への移行、そして市場シェアの獲得と維持まで。",

    // 事業分野（ページ）
    sec_hero_title: "6つの事業分野、ひとつの基準。",
    sec_hero_sub:
      "SÉRICは、産業上の重要性が最も高く、戦略情報を確実に守る必要がある領域に専門性を集中させています。",
    sec_intro:
      "私たちの倫理はシンプルです。同一の製品カテゴリーにつき一社のみ。お客様の戦略は、お客様だけのものです。",
    sec_auto_long:
      "内装・外装・パワートレイン・車載電子機器。SÉRICは、欧州のサプライヤーやメーカーが日本・韓国の企業と提携するのを支援します。同一の製品カテゴリーにつき一社のみが原則です。",
    sec_def_long:
      "陸・海・空・宇宙、すべての領域にわたる防衛装備・資機材。長年にわたり築いた政府機関との関係と、日本・韓国の公共調達サイクルへの深い理解。",
    sec_aer_long:
      "航空機・ヘリコプター・推進系・機載機器。認証と長い開発サイクルゆえに、確かな現地パートナーが欠かせない分野です。SÉRICは欧州のメーカーとサプライヤーを長年にわたり支援してきました。",
    sec_ene_long:
      "石油探査、再生可能エネルギー、水処理、公共インフラ、開発援助案件。長い時間軸が、持続的なプレゼンスに報いる領域です。",
    sec_mar_long:
      "船主、造船所、船舶用機器、港湾サービス。日本と韓国は世界の造船の主要な一角を占めます。SÉRICが造船所と発注者への道を開きます。",
    sec_met_long:
      "特殊鋼、高性能合金、表面処理、重要部品。世界の大手グループが求める、高付加価値の素材です。",
    sec_cul_long:
      "出版、展覧会の企画、美術品の貸与、歴史考証、そしてメセナ活動。SÉRICは、ケ・ブランリ美術館やギメ美術館をはじめ、フランス・日本・韓国で数多くの大規模な展覧会の開催に携わってきました。",

    // ストーリー（ページ）
    hist_hero_title: "1981年から築いてきたプレゼンス。",
    hist_hero_sub:
      "欧州・日本・韓国を結ぶ、45年にわたる産業と外交の架け橋。",
    hist_intro_title: "一人の歩みが、一社の歴史になった。",
    hist_intro_body:
      "SÉRICの歴史は、1971年に来日したクリスチャン・ポラックの歩みと分かちがたく結びついています。1981年、彼は1世紀以上にわたり築かれてきた日仏の産業・外交の絆を受け継ぎ、持続的な戦略的提携を実現するため、東京にSÉRIC（Société d’Études et de Recherches Industrielles et Commerciales）を設立しました。",
    hist_founder_honors:
      "クリスチャン・ポラックは、レジオン・ドヌール勲章シュヴァリエ、ならびに旭日小綬章を受章しています。",
    hist_timeline_title: "45年にわたる展開。",
    tl_1981: "東京にSÉRIC設立。",
    tl_1988: "韓国での活動開始。ボロレ（Bolloré）によるSCAC設立を支援。",
    tl_1998: "ソウルにSÉRIC設立。",
    tl_2007: "モンゴルでの活動開始。",
    tl_2010: "北京オフィス開設。",
    tl_2026: "創業45周年。",
    hist_mission_title: "私たちのミッション",
    hist_mission_body:
      "フランス・欧州企業と日本・韓国企業のイノベーションの力を結びつけ、長期的なパートナーシップを築くこと。",
    hist_values_title: "6つの価値観",
    hist_values_intro: "すべての業務の指針となるもの。",
    val_1: "謙虚",
    val_2: "忍耐",
    val_3: "努力",
    val_4: "誠実",
    val_5: "情熱",
    val_6: "想像力",

    // お問い合わせ（ページ）
    con_offices_title: "オフィス",
    con_tokyo: "株式会社セリク（東京）",
    con_tokyo_addr:
      "〒103-0027\n東京都中央区日本橋1-4-1\n日本橋一丁目三井ビルディング7F",
    con_tokyo_access:
      "日本橋駅（銀座線・東西線・都営浅草線）C1出口直結。三越前駅から徒歩3分、東京駅から徒歩6分。",
    con_seoul: "セリク・ソウル",
    con_seoul_addr:
      "602 Yongseong Biztel, 109 Hangang-daero\nYongsan-gu, Seoul 04376\n韓国",
    con_seoul_access:
      "地下鉄4号線・新龍山（シンヨンサン）駅5・6番出口より約80m。龍山（ヨンサン）駅（1号線・KTX）から徒歩5分。",
    con_phone_label: "電話",
    con_email_label: "メール",
    con_form_title: "お問い合わせ",
    con_form_intro: "SÉRICの東京・ソウルのチームがご相談を承ります。",
    form_first: "名",
    form_last: "姓",
    form_email: "メールアドレス",
    form_company: "会社名",
    form_message: "メッセージ",
    form_send: "送信",
    form_note: "本フォームの送信をもって、SÉRICからのご連絡に同意いただいたものとします。",
    form_success: "メッセージを送信しました。担当者より折り返しご連絡いたします。",
    form_error:
      "送信に失敗しました。時間をおいて再度お試しいただくか、information@seric-japon.com まで直接ご連絡ください。",

    // アクセス（/acces）
    acces_meta_title: "アクセス — SÉRIC",
    acces_meta_desc:
      "セリク東京・ソウルオフィスへのアクセス。現地語の住所、最寄駅と出口、印刷用アクセスシート。",
    acces_title: "SÉRICへのアクセス",
    acces_sheet: "アクセスシート",
    acces_addr_label: "住所",
    acces_taxi_ja: "日本語表記 — タクシーの運転手にお見せください",
    acces_taxi_ko: "韓国語表記 — タクシーの運転手にお見せください",
    acces_access_label: "最寄駅",
    acces_qr_caption: "スキャンするとGoogleマップで開きます",
    acces_print: "印刷 / PDFとして保存",
    acces_directions: "ルート案内",
    acces_naver: "NAVERマップで開く",
    acces_form_link: "お問い合わせフォーム",

    // Cookie バナー
    cookie_text:
      "サイトの利用状況の測定と体験向上のためCookieを使用します。設定はいつでも変更できます。",
    cookie_accept: "同意する",
    cookie_refuse: "拒否する",
  },

  ko: {
    nav_solutions: "솔루션",
    nav_sectors: "사업 분야",
    nav_about: "회사 소개",
    nav_story: "연혁",
    nav_contact: "문의",
    nav_access: "오시는 길",

    hero_eyebrow: "도쿄 · 서울 — 1981년 설립",
    hero_title: "일본과 한국에서 유럽 산업계와 함께하는 전략 파트너.",
    hero_sub:
      "45년의 현장 경험. 유럽과 일본·한국 사이에 맺어온 지속적인 산업 파트너십.",
    hero_cta_primary: "SÉRIC에 문의하기",
    hero_cta_secondary: "솔루션 보기",

    stat_45y_label: "일본에서의 경험",
    stat_26y_label: "한국에서의 경험",
    stat_offices: "거점: 도쿄 · 서울",
    stat_clients: "함께해 온 고객사",

    flagships:
      "SÉRIC은 유럽·일본·한국을 대표하는 기업들과 함께 일합니다.",

    sol_title: "귀사의 성장을 뒷받침하는 6가지 전문 분야",
    sol_lede:
      "시장 진입 전략부터 일상적인 지원까지, SÉRIC이 진출의 전 과정을 담당합니다.",
    sol_1_t: "전략 컨설팅",
    sol_1_d:
      "45년의 경험과 현지 산업에 대한 깊은 이해를 바탕으로 한 맞춤형 시장 진입 전략.",
    sol_2_t: "수주 확보",
    sol_2_d:
      "현지 대리인으로서 시장 개척, 협상, 수주 확보, 핵심 고객 관리를 담당합니다.",
    sol_3_t: "파트너십 협상",
    sol_3_d:
      "합작투자(JV)·라이선스·M&A·기술 계약 — 후보 발굴부터 실사, 클로징까지.",
    sol_4_t: "현지 법인 설립",
    sol_4_d:
      "현지 법인 설립: 운영, 컴플라이언스, 재무, 채용, 세무.",
    sol_5_t: "비즈니스 미션",
    sol_5_d:
      "영업·제휴·인수 기회를 본격적인 투자에 앞서 현지에서 검증하는 미션.",
    sol_6_t: "문화의 가교",
    sol_6_d:
      "효과적인 협상을 위한 문화 간 중재.",

    sec_title: "6개 사업 분야, 탁월함이라는 하나의 기준",
    sec_auto_t: "자동차",
    sec_auto_d:
      "내장·외장·파워트레인·전장 부품.",
    sec_auto_tag: "주력 분야",
    sec_def_t: "방위",
    sec_def_d:
      "육·해·공·우주 전 영역의 방위 장비. 정부 기관과의 탄탄한 관계.",
    sec_def_tag: "주력 분야",
    sec_aer_t: "항공우주",
    sec_aer_d:
      "항공기·헬리콥터·추진 계통·기내 장비. 긴 개발 주기와 엄격한 인증 요건.",
    sec_ene_t: "에너지·환경",
    sec_ene_d:
      "석유 탐사, 재생에너지, 수처리, 공공 인프라, 개발원조 사업.",
    sec_mar_t: "해운",
    sec_mar_d: "선주, 조선소, 선박 기자재, 항만 서비스.",
    sec_met_t: "금속·특수 합금",
    sec_met_d: "특수강, 고성능 합금, 표면 처리, 핵심 부품.",
    sec_patronage: "메세나",
    sec_cul_t: "문화 활동",
    sec_cul_d:
      "출판, 전시 기획(프랑스·일본·한국), 미술품 대여, 역사 자문, 그리고 메세나 활동.",

    why_title: "SÉRIC의 강점",
    why_headline_a: "45년의 경험은",
    why_headline_b: "모두 현장에서.",
    why_1_unit: "년",
    why_2_unit: "거점",
    why_3_unit: "네트워크",
    why_1_t: "노하우",
    why_1_d:
      "일본과 한국의 경제, 의사결정 그룹, 문화적 관행을 읽어온 45년. 어떤 시장 조사로도 얻을 수 없는 것입니다.",
    why_2_t: "상주 팀",
    why_2_d:
      "일본과 한국에 상주하는, 제너럴리스트와 스페셜리스트로 구성된 다국어 팀.",
    why_3_t: "최고 수준의 네트워크",
    why_3_d: "기업 경영진, 행정 기관, 유럽 대표부와의 긴밀한 관계.",

    story_eyebrow: "회사 연혁",
    story_title: "1981년부터 이어온 비전.",
    story_body:
      "SÉRIC은 1981년, 도쿄에서 이미 10년을 보낸 크리스티앙 폴락이 한 세기 넘게 이어져 온 프랑스와 일본의 산업·외교적 유대를 잇기 위해 설립했습니다. 양국 정부가 인정한 발자취 — 레지옹 도뇌르 훈장과 욱일장 수훈.",
    story_cta: "전체 이야기 보기",
    story_caption_role: "창업자",

    trust_title: "주요 고객",

    cta_title: "일본과 한국에서의 성공을 위해.",
    cta_sub:
      "SÉRIC의 도쿄·서울 팀이 언제든 상담해 드립니다.",

    foot_tokyo: "SÉRIC 도쿄",
    foot_seoul: "SÉRIC 서울",
    foot_legal: "© SÉRIC 2026 — All rights reserved",
    foot_about_blurb:
      "1981년부터 일본과 한국에서 유럽 산업계와 함께해 온 전략 파트너.",

    // 메타 (내부 페이지)
    solutions_meta_title: "솔루션 — SÉRIC",
    solutions_meta_desc:
      "전략, 수주 확보, 파트너십, 운영, 미션 — 일본과 한국에서의 산업 진출 전 과정을 지원합니다.",
    secteurs_meta_title: "사업 분야 — SÉRIC",
    secteurs_meta_desc:
      "자동차, 방위, 항공우주, 에너지, 해운, 금속·특수 합금 — 일본과 한국에서의 전문 분야.",
    histoire_meta_title: "회사 연혁 — SÉRIC",
    histoire_meta_desc:
      "1981년부터 SÉRIC은 유럽·일본·한국을 잇는 산업의 가교를 놓아 왔습니다. 창업자 크리스티앙 폴락.",
    contact_meta_title: "문의 — SÉRIC",
    contact_meta_desc:
      "도쿄·서울 오피스. 일본과 한국에서의 사업 확장에 대해 상담해 보세요.",

    // 솔루션 (페이지)
    sol_hero_title: "진출의 모든 단계를 하나의 창구에서.",
    sol_hero_sub:
      "첫 시장 조사부터 현지 법인의 일상 운영까지, SÉRIC이 일본과 한국에서의 산업 진출 전 단계를 지원합니다.",
    sol_approach_eyebrow: "우리의 접근 방식",
    sol_approach_title: "이해하고, 연결하고, 설득합니다.",
    sol_step_1_t: "이해",
    sol_step_1_d:
      "규제, 이해관계자, 문화적 관행 등 현지를 정확히 읽은 뒤에야 다음 행보를 제안합니다.",
    sol_step_2_t: "연결",
    sol_step_2_d:
      "SÉRIC의 소개는 그 자체가 신뢰의 증표입니다. 45년간 이어온 경영진·행정 기관·발주처와의 신뢰 관계가 그대로 뒷받침이 됩니다.",
    sol_step_3_t: "설득",
    sol_step_3_d:
      "SÉRIC은 결정에 이를 때까지 귀사의 제안을 뒷받침합니다. 첫 수주, 양산 전환, 그리고 시장 점유율 확보와 방어까지.",

    // 사업 분야 (페이지)
    sec_hero_title: "6개 사업 분야, 하나의 기준.",
    sec_hero_sub:
      "SÉRIC은 산업적 이해관계가 가장 크고, 전략 정보를 확실히 보호해야 하는 영역에 전문성을 집중합니다.",
    sec_intro:
      "윤리는 단순합니다. 동일 제품군당 단 한 고객사. 귀사의 전략은 귀사만의 것입니다.",
    sec_auto_long:
      "내장·외장·파워트레인·차량용 전자 장비. SÉRIC은 유럽 부품사와 완성차 업체가 일본·한국 기업과 파트너십을 맺도록 지원합니다. 동일 제품군당 한 고객사를 원칙으로 합니다.",
    sec_def_long:
      "육·해·공·우주 전 영역의 방위 장비와 물자. 오랜 기간 쌓아온 정부 기관과의 관계, 그리고 일본·한국의 공공 조달 사이클에 대한 깊은 이해.",
    sec_aer_long:
      "항공기·헬리콥터·추진 계통·기내 장비. 인증과 긴 사업 주기 탓에 탄탄한 현지 파트너가 필요한 분야로, SÉRIC은 유럽의 제조사와 부품사를 오랜 기간 지원해 왔습니다.",
    sec_ene_long:
      "석유 탐사, 재생에너지, 수처리, 공공 인프라, 개발원조 사업. 긴 호흡이 지속적인 현지 기반에 보답하는 영역입니다.",
    sec_mar_long:
      "선주, 조선소, 선박 기자재, 항만 서비스. 일본과 한국은 세계 조선의 큰 축을 이룹니다. SÉRIC이 조선소와 발주처로 향하는 길을 열어 드립니다.",
    sec_met_long:
      "특수강, 고성능 합금, 표면 처리, 핵심 부품. 세계적인 대기업들이 찾는 고부가가치 소재입니다.",
    sec_cul_long:
      "출판, 전시 기획, 미술품 대여, 역사 자문, 그리고 메세나 활동. SÉRIC은 케 브랑리 미술관과 기메 미술관을 비롯해 프랑스는 물론 일본과 한국에서도 다수의 대규모 전시 개최에 참여해 왔습니다.",

    // 연혁 (페이지)
    hist_hero_title: "1981년부터 쌓아온 현지 기반.",
    hist_hero_sub:
      "유럽·일본·한국을 잇는 45년의 산업·외교적 가교.",
    hist_intro_title: "한 사람의 여정이 한 회사의 역사가 되었습니다.",
    hist_intro_body:
      "SÉRIC의 역사는 1971년 일본에 도착한 크리스티앙 폴락의 여정과 떼어놓을 수 없습니다. 1981년, 그는 한 세기 넘게 이어져 온 프랑스와 일본의 산업·외교적 유대를 잇고 지속적인 전략적 파트너십을 실현하기 위해 도쿄에 SÉRIC(Société d’Études et de Recherches Industrielles et Commerciales)을 설립했습니다.",
    hist_founder_honors:
      "크리스티앙 폴락은 레지옹 도뇌르 슈발리에 훈장과 욱일소수장을 수훈했습니다.",
    hist_timeline_title: "45년의 성장.",
    tl_1981: "도쿄에 SÉRIC 설립.",
    tl_1988: "한국에서 활동 시작. 볼로레(Bolloré)의 SCAC 설립을 지원.",
    tl_1998: "서울에 SÉRIC 설립.",
    tl_2007: "몽골에서 활동 시작.",
    tl_2010: "베이징 사무소 개설.",
    tl_2026: "창립 45주년.",
    hist_mission_title: "우리의 미션",
    hist_mission_body:
      "프랑스·유럽 기업과 일본·한국 기업의 혁신 역량을 연결하여 장기적인 파트너십을 구축하는 것.",
    hist_values_title: "6가지 가치",
    hist_values_intro: "모든 프로젝트를 이끄는 원칙.",
    val_1: "겸손",
    val_2: "인내",
    val_3: "노력",
    val_4: "성실",
    val_5: "열정",
    val_6: "상상력",

    // 문의 (페이지)
    con_offices_title: "오피스",
    con_tokyo: "SÉRIC 도쿄",
    con_tokyo_addr:
      "니혼바시 1초메 미쓰이 빌딩 7층\n도쿄도 주오구 니혼바시 1-4-1\n103-0027 일본",
    con_tokyo_access:
      "니혼바시역(긴자선·도자이선·아사쿠사선) C1 출구. 미쓰코시마에역에서 도보 3분, 도쿄역에서 도보 6분.",
    con_seoul: "SÉRIC 서울",
    con_seoul_addr:
      "서울특별시 용산구 한강대로 109\n용성비즈텔 602호\n(우) 04376",
    con_seoul_access:
      "지하철 4호선 신용산역 5·6번 출구에서 80m. 용산역(1호선·KTX)에서 도보 5분.",
    con_phone_label: "전화",
    con_email_label: "이메일",
    con_form_title: "문의하기",
    con_form_intro: "SÉRIC의 도쿄·서울 팀이 상담해 드립니다.",
    form_first: "이름",
    form_last: "성",
    form_email: "이메일",
    form_company: "회사명",
    form_message: "메시지",
    form_send: "보내기",
    form_note:
      "본 양식을 제출하시면 SÉRIC의 연락을 받는 데 동의하시는 것으로 간주됩니다.",
    form_success: "메시지가 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.",
    form_error:
      "전송에 실패했습니다. 다시 시도하시거나 information@seric-japon.com 으로 직접 연락해 주세요.",

    // 오시는 길 (/acces)
    acces_meta_title: "오시는 길 — SÉRIC",
    acces_meta_desc:
      "SÉRIC 도쿄·서울 오피스 오시는 길: 현지어 주소, 가까운 역과 출구, 인쇄용 안내서.",
    acces_title: "SÉRIC 오시는 길",
    acces_sheet: "오시는 길 안내서",
    acces_addr_label: "주소",
    acces_taxi_ja: "일본어 주소 — 택시 기사에게 보여주세요",
    acces_taxi_ko: "한국어 주소 — 택시 기사에게 보여주세요",
    acces_access_label: "교통편",
    acces_qr_caption: "스캔하면 Google 지도에서 열립니다",
    acces_print: "인쇄 / PDF로 저장",
    acces_directions: "길찾기",
    acces_naver: "네이버 지도에서 열기",
    acces_form_link: "문의하기",

    // 쿠키 배너
    cookie_text:
      "사이트 이용 현황 측정과 경험 개선을 위해 쿠키를 사용합니다. 설정은 언제든지 변경할 수 있습니다.",
    cookie_accept: "동의",
    cookie_refuse: "거부",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
