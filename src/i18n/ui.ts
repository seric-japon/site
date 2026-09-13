// Quadrilingual content for the SERIC site — FR / EN / JA / KO

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

    // Hero
    hero_eyebrow: "Tokyo · Séoul · depuis 1981",
    hero_title:
      "Le partenaire de l’industrie européenne au Japon et en Corée.",
    hero_sub:
      "45 ans d’expertise terrain pour bâtir des partenariats industriels durables entre l’Europe, le Japon et la Corée.",
    hero_cta_primary: "Échanger avec nous",
    hero_cta_secondary: "Nos solutions",

    // Stats
    stat_45y_label: "années au Japon",
    stat_26y_label: "années en Corée",
    stat_offices: "bureaux : Tokyo · Séoul",
    stat_clients: "clients industriels accompagnés",

    // Strapline
    flagships:
      "Nous accompagnons les fleurons industriels européens, japonais et coréens.",

    // Solutions
    sol_title: "Six savoir-faire au service de votre développement",
    sol_lede:
      "De la stratégie d’entrée au support quotidien, nous couvrons l’intégralité du cycle de votre implantation industrielle.",
    sol_1_t: "Conseil stratégique",
    sol_1_d:
      "Plans d’entrée sur mesure, fondés sur 45 ans d’expérience et une connaissance fine du tissu industriel local.",
    sol_2_t: "Représentation commerciale",
    sol_2_d:
      "Représentation locale pour les groupes européens : prospection, négociation, gestion de comptes clés.",
    sol_3_t: "Négociation de partenariats",
    sol_3_d:
      "JV, licences, M&A, accords technologiques : identification, due diligence et négociation jusqu’au closing.",
    sol_4_t: "Développement & opérations",
    sol_4_d:
      "Mise en place et pilotage de filiales, conformité, finance, recrutement, fiscalité.",
    sol_5_t: "Missions",
    sol_5_d:
      "Missions terrain pour valider une opportunité avant l’engagement.",
    sol_6_t: "Pont culturel",
    sol_6_d:
      "Médiation interculturelle pour des négociations efficaces, du premier contact au long terme.",

    // Sectors
    sec_title: "Quatre secteurs, une exigence d’excellence",
    sec_auto_t: "Automobile",
    sec_auto_d:
      "Intérieurs, extérieurs, motorisations, électronique. Un client par typologie produit : discrétion garantie.",
    sec_auto_tag: "Priorité",
    sec_def_t: "Défense & Aérospatial",
    sec_def_d:
      "Aéronefs, hélicoptères, navires de défense, cybersécurité. Relations gouvernementales établies.",
    sec_def_tag: "Priorité",
    sec_ene_t: "Énergie & Environnement",
    sec_ene_d:
      "Énergies renouvelables, traitement de l’eau, infrastructures publiques et aide au développement.",
    sec_cul_t: "Activités culturelles",
    sec_cul_d:
      "Édition, prêts d’œuvres, conseil historique. Le pendant culturel d’une histoire industrielle.",

    // Why
    why_title: "Pourquoi SERIC",
    why_headline_a: "45 ans de présence.",
    why_headline_b: "Construite sur le terrain.",
    why_1_t: "Savoir-faire",
    why_1_d:
      "45 ans passés à comprendre l’économie, la communauté d’affaires et la culture locale.",
    why_2_t: "Équipe permanente",
    why_2_d:
      "Consultants multilingues, généralistes et spécialistes, résidents au Japon et en Corée.",
    why_3_t: "Réseau de premier rang",
    why_3_d:
      "Liens étroits avec dirigeants d’entreprises, administrations et représentations européennes.",

    // Story
    story_eyebrow: "Notre histoire",
    story_title: "Une vision portée depuis 1981.",
    story_body:
      "SERIC a été fondée en 1981 par Christian Polak, alors installé à Tokyo depuis dix ans, pour prolonger les ponts industriels et diplomatiques tissés entre la France et le Japon depuis plus d’un siècle. Une histoire reconnue par les deux gouvernements : Légion d’honneur et Ordre du Soleil Levant.",
    story_cta: "Lire l’histoire complète",
    story_caption_role: "Fondateur",

    // Trust
    trust_title: "Nous avons leur confiance",

    // CTA
    cta_title: "Prêt à développer votre activité au Japon ou en Corée ?",
    cta_sub:
      "Un échange confidentiel avec nos équipes Tokyo et Séoul, sans engagement.",

    // Footer
    foot_tokyo: "SERIC Tokyo",
    foot_seoul: "SERIC Seoul",
    foot_legal: "© SERIC 2026 · Tous droits réservés",
    foot_about_blurb:
      "Le partenaire de l’industrie européenne au Japon et en Corée depuis 1981.",

    // Meta (pages internes)
    solutions_meta_title: "Solutions · SERIC",
    solutions_meta_desc:
      "Conseil stratégique, représentation, partenariats, opérations et missions : tout le cycle de votre développement industriel au Japon et en Corée.",
    secteurs_meta_title: "Secteurs · SERIC",
    secteurs_meta_desc:
      "Automobile, défense & aérospatial, énergie & environnement, activités culturelles : nos secteurs d’excellence au Japon et en Corée.",
    histoire_meta_title: "Notre histoire · SERIC",
    histoire_meta_desc:
      "Depuis 1981, SERIC bâtit des ponts industriels entre l’Europe, le Japon et la Corée. Une maison fondée par Christian Polak.",
    contact_meta_title: "Contact · SERIC",
    contact_meta_desc:
      "Bureaux de Tokyo et de Séoul. Échangeons sur votre projet de développement au Japon ou en Corée.",

    // Solutions (page)
    sol_hero_title: "Tout le cycle de votre implantation, sous un même toit.",
    sol_hero_sub:
      "De la première étude de marché au pilotage quotidien de votre filiale, nous couvrons chaque étape de votre développement industriel au Japon et en Corée.",
    sol_approach_eyebrow: "Notre approche",
    sol_approach_title: "Comprendre, connecter, accompagner.",
    sol_step_1_t: "Comprendre",
    sol_step_1_d:
      "Nous lisons le terrain (réglementation, acteurs, codes culturels) avant de recommander la moindre action.",
    sol_step_2_t: "Connecter",
    sol_step_2_d:
      "Nous ouvrons un réseau de dirigeants, d’administrations et de partenaires industriels bâti en quarante-cinq ans.",
    sol_step_3_t: "Accompagner",
    sol_step_3_d:
      "Nous restons à vos côtés après l’entrée : opérations, conformité, négociations, croissance.",

    // Secteurs (page)
    sec_hero_title: "Quatre secteurs, une même exigence.",
    sec_hero_sub:
      "Nous concentrons notre expertise là où les enjeux industriels sont les plus élevés, et où la confidentialité fait la différence.",
    sec_intro:
      "Une règle simple : un seul client par typologie de produit. Votre stratégie reste la vôtre.",
    sec_auto_long:
      "Intérieurs, extérieurs, motorisations, électronique embarquée. Nous accompagnons équipementiers et constructeurs européens dans leurs partenariats avec les groupes japonais et coréens : un client par typologie produit, pour une discrétion absolue.",
    sec_def_long:
      "Aéronefs, hélicoptères, navires de défense, cybersécurité. Des relations gouvernementales établies de longue date et une compréhension fine des cycles d’achat publics au Japon et en Corée.",
    sec_ene_long:
      "Énergies renouvelables, traitement de l’eau, infrastructures publiques et projets d’aide au développement. Un domaine où les calendriers longs récompensent une présence durable.",
    sec_cul_long:
      "Édition, prêts d’œuvres, conseil historique. Le pendant culturel d’une histoire industrielle de plus de quarante ans entre l’Europe et l’Asie.",

    // Histoire (page)
    hist_hero_title: "Une présence bâtie depuis 1981.",
    hist_hero_sub:
      "Quarante-cinq ans de ponts industriels et diplomatiques entre l’Europe, le Japon et la Corée.",
    hist_intro_title: "L’histoire d’un homme, devenue celle d’une maison.",
    hist_intro_body:
      "L’histoire de SERIC est intrinsèquement liée à celle de Christian Polak, arrivé au Japon en 1971. En 1981, il fonde SERIC à Tokyo pour prolonger les liens industriels et diplomatiques tissés entre la France et le Japon depuis plus d’un siècle, et permettre des partenariats stratégiques durables.",
    hist_founder_honors:
      "Christian Polak est Chevalier de la Légion d’honneur et décoré de l’Ordre du Soleil Levant, rayons d’or en rosette.",
    hist_timeline_title: "Quarante-cinq ans d’expansion.",
    tl_1981: "Établissement de la SERIC à Tokyo.",
    tl_1988: "Début d’activités en Corée du Sud : aide apportée à Bolloré pour ouvrir la SCAC.",
    tl_1998: "Établissement de la SERIC à Séoul.",
    tl_2007: "Premières activités en Mongolie.",
    tl_2010: "Bureau de Pékin.",
    tl_2021: "40ᵉ anniversaire.",
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
    con_hero_title: "Parlons de votre projet.",
    con_hero_sub:
      "Vous êtes déjà présent à l’international et souhaitez vous développer en Asie ? Nos équipes de Tokyo et de Séoul sont à votre écoute.",
    con_offices_title: "Nos bureaux",
    con_tokyo: "SERIC Tokyo",
    con_tokyo_addr:
      "Nihonbashi 1-chome, Mitsui Building 7F\n1-4-1 Nihonbashi, Chuo-ku\nTokyo 103-0027, Japon",
    con_tokyo_access:
      "Sortie C1 de la station Nihonbashi (lignes Ginza, Tozai et Asakusa). À 3 min à pied de Mitsukoshimae, 6 min à pied de la gare de Tokyo.",
    con_seoul: "SERIC Seoul",
    con_seoul_addr:
      "602 Yongseong Biztel, 109 Hangang-daero\nYongsan-gu, Séoul 04376\nCorée du Sud",
    con_seoul_access:
      "Station Sinyongsan (ligne 4), sorties 5 et 6 — l’immeuble est à 80 m. À 5 min à pied de la gare de Yongsan (ligne 1, KTX).",
    con_phone_label: "Téléphone",
    con_email_label: "Email",
    con_form_title: "Écrivez-nous",
    con_form_intro: "Un échange confidentiel, sans engagement.",
    form_first: "Prénom",
    form_last: "Nom",
    form_email: "Email",
    form_company: "Société",
    form_message: "Message",
    form_send: "Envoyer",
    form_note:
      "En soumettant ce formulaire, vous acceptez d’être recontacté par SERIC.",
    form_success:
      "Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.",
    form_error:
      "L’envoi a échoué. Réessayez, ou écrivez-nous directement à information@seric-japon.com.",

    // Fiche d'accès (page /contact/acces)
    acces_meta_title: "Fiches d’accès · SERIC",
    acces_meta_desc:
      "Comment rejoindre les bureaux SERIC de Tokyo et de Séoul : adresse en langue locale, station, sortie, et fiche à imprimer.",
    acces_title: "Venir nous voir",
    acces_intro:
      "Adresse en langue locale, station et sortie de métro, position à scanner. Imprimez la fiche ou enregistrez-la en PDF avant de partir.",
    acces_sheet: "Fiche d’accès",
    acces_addr_label: "Adresse",
    acces_taxi_ja: "En japonais — à montrer au chauffeur de taxi",
    acces_taxi_ko: "En coréen — à montrer au chauffeur de taxi",
    acces_access_label: "Accès",
    acces_qr_caption: "Scannez pour ouvrir la position dans Google Maps",
    acces_print: "Imprimer / Enregistrer en PDF",
    acces_directions: "Itinéraire",
    acces_naver: "Ouvrir dans Naver Map",
    con_sheet_link: "Fiche d’accès imprimable",

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

    hero_eyebrow: "Tokyo · Seoul · since 1981",
    hero_title:
      "The trusted partner of European industry in Japan and Korea.",
    hero_sub:
      "45 years of on-the-ground expertise building lasting industrial partnerships between Europe, Japan and Korea.",
    hero_cta_primary: "Get in touch",
    hero_cta_secondary: "Our solutions",

    stat_45y_label: "years in Japan",
    stat_26y_label: "years in Korea",
    stat_offices: "offices: Tokyo · Seoul",
    stat_clients: "industrial clients served",

    flagships:
      "We partner with the industrial flagships of Europe, Japan and Korea.",

    sol_title: "Six areas of expertise serving your growth",
    sol_lede:
      "From entry strategy to day-to-day operations, we cover the full lifecycle of your industrial presence.",
    sol_1_t: "Strategic consulting",
    sol_1_d:
      "Tailored market-entry plans, grounded in 45 years of experience and an intimate knowledge of local industry.",
    sol_2_t: "Commercial representation",
    sol_2_d:
      "Local representation for European groups: prospecting, negotiating and managing key accounts.",
    sol_3_t: "Partnership deal-making",
    sol_3_d:
      "JVs, licensing, M&A, technology agreements — from sourcing through due diligence to closing.",
    sol_4_t: "Business development & operations",
    sol_4_d:
      "Setting up and running subsidiaries: compliance, finance, recruitment, tax.",
    sol_5_t: "Missions",
    sol_5_d:
      "On-the-ground missions to validate an opportunity before you commit.",
    sol_6_t: "Cultural bridge",
    sol_6_d:
      "Cross-cultural mediation for negotiations that succeed — from first contact to long-term trust.",

    sec_title: "Four sectors, one standard of excellence",
    sec_auto_t: "Automotive",
    sec_auto_d:
      "Interiors, exteriors, powertrain, electronics. One client per product type — confidentiality by design.",
    sec_auto_tag: "Priority",
    sec_def_t: "Defense & Aerospace",
    sec_def_d:
      "Aircraft, helicopters, naval defense, cybersecurity. Established government relations.",
    sec_def_tag: "Priority",
    sec_ene_t: "Energy & Environment",
    sec_ene_d: "Renewables, water, public infrastructure and development assistance.",
    sec_cul_t: "Cultural activities",
    sec_cul_d:
      "Publishing, art loans, historical advisory. The cultural counterpart to an industrial story.",

    why_title: "Why SERIC",
    why_headline_a: "45 years of presence.",
    why_headline_b: "Built on the ground.",
    why_1_t: "Know-how",
    why_1_d:
      "45 years spent understanding the economy, the business community and the local culture.",
    why_2_t: "Resident team",
    why_2_d:
      "Multilingual generalist and specialist consultants, resident in Japan and Korea.",
    why_3_t: "Top-tier network",
    why_3_d:
      "Close ties with corporate leadership, public administration and European missions.",

    story_eyebrow: "Our story",
    story_title: "A vision carried since 1981.",
    story_body:
      "SERIC was founded in 1981 by Christian Polak, who had already spent a decade in Tokyo, to extend the industrial and diplomatic ties woven between France and Japan over more than a century. A trajectory recognised by both governments: Legion of Honour and Order of the Rising Sun.",
    story_cta: "Read the full story",
    story_caption_role: "Founder",

    trust_title: "Trusted by",

    cta_title: "Ready to develop your business in Japan or Korea?",
    cta_sub:
      "A confidential conversation with our Tokyo and Seoul teams. No commitment.",

    foot_tokyo: "SERIC Tokyo",
    foot_seoul: "SERIC Seoul",
    foot_legal: "© SERIC 2026 — All rights reserved",
    foot_about_blurb:
      "The trusted partner of European industry in Japan and Korea since 1981.",

    // Meta (inner pages)
    solutions_meta_title: "Solutions — SERIC",
    solutions_meta_desc:
      "Strategy, representation, partnerships, operations and missions: the full lifecycle of your industrial growth in Japan and Korea.",
    secteurs_meta_title: "Sectors — SERIC",
    secteurs_meta_desc:
      "Automotive, defense & aerospace, energy & environment, cultural activities: our sectors of excellence in Japan and Korea.",
    histoire_meta_title: "Our story — SERIC",
    histoire_meta_desc:
      "Since 1981, SERIC has built industrial bridges between Europe, Japan and Korea — a firm founded by Christian Polak.",
    contact_meta_title: "Contact — SERIC",
    contact_meta_desc:
      "Tokyo and Seoul offices. Let’s talk about your growth project in Japan or Korea.",

    // Solutions (page)
    sol_hero_title: "Your entire market presence, under one roof.",
    sol_hero_sub:
      "From the first market study to the day-to-day running of your subsidiary, we cover every stage of your industrial growth in Japan and Korea.",
    sol_approach_eyebrow: "Our approach",
    sol_approach_title: "Understand, connect, accompany.",
    sol_step_1_t: "Understand",
    sol_step_1_d:
      "We read the ground — regulation, players, cultural codes — before recommending a single move.",
    sol_step_2_t: "Connect",
    sol_step_2_d:
      "We open a network of executives, public administrations and industrial partners built over forty-five years.",
    sol_step_3_t: "Accompany",
    sol_step_3_d:
      "We stay alongside you after entry: operations, compliance, negotiations, growth.",

    // Sectors (page)
    sec_hero_title: "Four sectors, one standard.",
    sec_hero_sub:
      "We focus our expertise where industrial stakes run highest — and where confidentiality makes the difference.",
    sec_intro:
      "One simple rule: a single client per product type. Your strategy stays yours.",
    sec_auto_long:
      "Interiors, exteriors, powertrain, embedded electronics. We support European suppliers and OEMs in their partnerships with Japanese and Korean groups — one client per product type, for absolute discretion.",
    sec_def_long:
      "Aircraft, helicopters, naval defense, cybersecurity. Long-established government relations and a fine grasp of public procurement cycles in Japan and Korea.",
    sec_ene_long:
      "Renewables, water treatment, public infrastructure and official development assistance. A field where long timelines reward a lasting presence.",
    sec_cul_long:
      "Publishing, art loans, historical advisory. The cultural counterpart to an industrial story spanning more than forty years between Europe and Asia.",

    // Story (page)
    hist_hero_title: "A presence built since 1981.",
    hist_hero_sub:
      "Forty-five years of industrial and diplomatic bridges between Europe, Japan and Korea.",
    hist_intro_title: "One man’s story, now a firm’s.",
    hist_intro_body:
      "SERIC's story is inseparable from that of Christian Polak, who arrived in Japan in 1971. In 1981 he founded SERIC in Tokyo to extend the industrial and diplomatic ties woven between France and Japan over more than a century, and to enable lasting strategic partnerships.",
    hist_founder_honors:
      "Christian Polak is a Knight of the Legion of Honour and a recipient of the Order of the Rising Sun, Gold Rays with Rosette.",
    hist_timeline_title: "Forty-five years of expansion.",
    tl_1981: "SERIC established in Tokyo.",
    tl_1988: "First activities in South Korea, assisting Bolloré with the opening of SCAC.",
    tl_1998: "SERIC established in Seoul.",
    tl_2007: "First activities in Mongolia.",
    tl_2010: "Beijing office.",
    tl_2021: "40th anniversary.",
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
    con_hero_title: "Let’s talk about your project.",
    con_hero_sub:
      "Already operating internationally and looking to grow in Asia? Our Tokyo and Seoul teams are here to help.",
    con_offices_title: "Our offices",
    con_tokyo: "SERIC Tokyo",
    con_tokyo_addr:
      "Nihonbashi 1-chome, Mitsui Building 7F\n1-4-1 Nihonbashi, Chuo-ku\nTokyo 103-0027, Japan",
    con_tokyo_access:
      "Exit C1 of Nihonbashi Station (Ginza, Tozai and Asakusa lines). A 3-minute walk from Mitsukoshimae, 6 minutes on foot from Tokyo Station.",
    con_seoul: "SERIC Seoul",
    con_seoul_addr:
      "602 Yongseong Biztel, 109 Hangang-daero\nYongsan-gu, Seoul 04376\nSouth Korea",
    con_seoul_access:
      "Sinyongsan Station (Line 4), exits 5 and 6 — the building is 80 m away. A 5-minute walk from Yongsan Station (Line 1, KTX).",
    con_phone_label: "Phone",
    con_email_label: "Email",
    con_form_title: "Write to us",
    con_form_intro: "A confidential conversation, no commitment.",
    form_first: "First name",
    form_last: "Last name",
    form_email: "Email",
    form_company: "Company",
    form_message: "Message",
    form_send: "Send",
    form_note:
      "By submitting this form, you agree to be contacted by SERIC.",
    form_success:
      "Thank you, your message has been sent. We will get back to you shortly.",
    form_error:
      "Something went wrong. Please try again, or email us directly at information@seric-japon.com.",

    // Access sheet (page /contact/acces)
    acces_meta_title: "Getting here — SERIC",
    acces_meta_desc:
      "How to reach SERIC’s Tokyo and Seoul offices: address in the local language, station, exit, and a printable sheet.",
    acces_title: "Getting here",
    acces_intro:
      "Address in the local language, station and exit, a scannable location. Print the sheet or save it as a PDF before you travel.",
    acces_sheet: "Access sheet",
    acces_addr_label: "Address",
    acces_taxi_ja: "In Japanese — show this to your taxi driver",
    acces_taxi_ko: "In Korean — show this to your taxi driver",
    acces_access_label: "Getting there",
    acces_qr_caption: "Scan to open the location in Google Maps",
    acces_print: "Print / Save as PDF",
    acces_directions: "Directions",
    acces_naver: "Open in Naver Map",
    con_sheet_link: "Printable access sheet",

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

    hero_eyebrow: "東京・ソウル — 1981年創業",
    hero_title: "欧州産業の、日本と韓国における戦略パートナー。",
    hero_sub:
      "45年にわたる現場での経験を礎に、欧州・日本・韓国を結ぶ持続的な産業パートナーシップを築いてきました。",
    hero_cta_primary: "お問い合わせ",
    hero_cta_secondary: "サービスを見る",

    stat_45y_label: "日本での実績",
    stat_26y_label: "韓国での実績",
    stat_offices: "拠点：東京・ソウル",
    stat_clients: "産業界のお客様",

    flagships:
      "私たちは、ヨーロッパ・日本・韓国の産業のフラッグシップと協働しています。",

    sol_title: "貴社の成長を支える6つの専門領域",
    sol_lede:
      "市場参入の戦略から日々のオペレーションまで、産業進出のすべての段階を支援します。",
    sol_1_t: "戦略コンサルティング",
    sol_1_d:
      "45年の経験と現地産業への深い理解に基づく、オーダーメイドの市場参入戦略。",
    sol_2_t: "代理業務",
    sol_2_d:
      "欧州企業の現地代理として、開拓・交渉・主要顧客管理を担います。",
    sol_3_t: "提携交渉",
    sol_3_d:
      "JV・ライセンス・M&A・技術契約 — 候補発掘からデューデリジェンス、クロージングまで。",
    sol_4_t: "事業開発・運営支援",
    sol_4_d:
      "子会社の設立・運営、コンプライアンス、財務、採用、税務までサポート。",
    sol_5_t: "ビジネスミッション",
    sol_5_d: "本格進出前に商機を検証する現地ミッション。",
    sol_6_t: "異文化の架け橋",
    sol_6_d:
      "初回接触から長期的信頼まで、効果的な交渉のための異文化メディエーション。",

    sec_title: "事業分野は4つ、卓越という基準は一つ",
    sec_auto_t: "自動車、各種車両",
    sec_auto_d:
      "内装・外装・パワートレイン・電子部品。同一カテゴリーは一社のみという原則で完全な機密性を保証。",
    sec_auto_tag: "主力分野",
    sec_def_t: "防衛・航空宇宙",
    sec_def_d:
      "航空機・ヘリコプター・防衛艦艇・サイバーセキュリティ。政府機関との確立された関係。",
    sec_def_tag: "主力分野",
    sec_ene_t: "エネルギー・環境",
    sec_ene_d: "再生可能エネルギー、水処理、公共インフラ、開発援助案件。",
    sec_cul_t: "文化活動",
    sec_cul_d: "出版、美術品貸与、歴史考証。産業の歩みに連なる文化的活動。",

    why_title: "私たちの強み",
    why_headline_a: "45年の現地プレゼンス。",
    why_headline_b: "現場で築いてきました。",
    why_1_t: "ノウハウ",
    why_1_d:
      "45年にわたる、経済・ビジネスコミュニティ・地域文化への深い理解。",
    why_2_t: "常駐チーム",
    why_2_d:
      "日本と韓国に常駐する、ジェネラリストとスペシャリストからなるマルチリンガルのコンサルタント。",
    why_3_t: "一流のネットワーク",
    why_3_d: "企業経営層・政府機関・欧州政府代表との緊密な関係。",

    story_eyebrow: "ストーリー",
    story_title: "1981年から受け継がれるビジョン。",
    story_body:
      "SERICは1981年、東京に10年間暮らしてきたクリスチャン・ポラックにより、1世紀以上にわたる日仏の産業と外交の絆を引き継ぐべく設立されました。両国政府より叙勲（レジオン・ドヌール勲章、旭日小綬章）。",
    story_cta: "社史の詳細を見る",
    story_caption_role: "創業者",

    trust_title: "主なお取引先",

    cta_title: "日本・韓国での事業展開をお考えですか？",
    cta_sub: "東京・ソウルのチームが秘密厳守でご相談を承ります。お気軽にお問い合わせください。",

    foot_tokyo: "株式会社セリク（東京）",
    foot_seoul: "セリク・ソウル",
    foot_legal: "© SERIC 2026 — All rights reserved",
    foot_about_blurb: "1981年より、欧州産業の日本・韓国における戦略パートナー。",

    // メタ（内部ページ）
    solutions_meta_title: "ソリューション — SERIC",
    solutions_meta_desc:
      "戦略・代理・提携・運営・ミッション — 日本と韓国における産業展開の全段階を支援します。",
    secteurs_meta_title: "事業分野 — SERIC",
    secteurs_meta_desc:
      "自動車、防衛・航空宇宙、エネルギー・環境、文化活動 — 日本と韓国における専門分野。",
    histoire_meta_title: "私たちのストーリー — SERIC",
    histoire_meta_desc:
      "1981年以来、SERICは欧州・日本・韓国の産業の架け橋を築いてきました。創業者クリスチャン・ポラック。",
    contact_meta_title: "お問い合わせ — SERIC",
    contact_meta_desc:
      "東京・ソウルオフィス。日本・韓国での事業展開についてご相談ください。",

    // ソリューション（ページ）
    sol_hero_title: "進出のすべての段階を、ひとつの窓口で。",
    sol_hero_sub:
      "最初の市場調査から子会社の日常運営まで、日本と韓国における産業進出のあらゆる段階を支援します。",
    sol_approach_eyebrow: "私たちのアプローチ",
    sol_approach_title: "理解し、つなぎ、伴走する。",
    sol_step_1_t: "理解する",
    sol_step_1_d:
      "規制・関係者・文化的な作法など、現地の状況を読み解いたうえで、最適な一手をご提案します。",
    sol_step_2_t: "つなぐ",
    sol_step_2_d:
      "45年かけて築いた経営層・行政・産業パートナーのネットワークを開きます。",
    sol_step_3_t: "伴走する",
    sol_step_3_d:
      "進出後も、運営・コンプライアンス・交渉・成長まで、お客様とともに歩みます。",

    // 事業分野（ページ）
    sec_hero_title: "4つの事業分野、ひとつの基準。",
    sec_hero_sub:
      "産業的な重要性が最も高く、機密性が成果を分ける領域に、専門性を集中させています。",
    sec_intro:
      "原則はシンプルです。同一の製品カテゴリーにつき一社のみ。お客様の戦略は、お客様だけのものです。",
    sec_auto_long:
      "内装・外装・パワートレイン・車載電子機器。欧州のサプライヤーやメーカーが日本・韓国の企業と提携するのを支援します。同一カテゴリーは一社のみという原則で、完全な機密性を保証します。",
    sec_def_long:
      "航空機・ヘリコプター・防衛艦艇・サイバーセキュリティ。長年にわたり築いた政府機関との関係と、日本・韓国の公共調達サイクルへの深い理解。",
    sec_ene_long:
      "再生可能エネルギー、水処理、公共インフラ、開発援助案件。長い時間軸が、持続的なプレゼンスに報いる領域です。",
    sec_cul_long:
      "出版、美術品の貸与、歴史考証。40年以上にわたる欧州とアジアの産業の歩みに連なる、文化的な活動です。",

    // ストーリー（ページ）
    hist_hero_title: "1981年から築いてきたプレゼンス。",
    hist_hero_sub:
      "欧州・日本・韓国を結ぶ、45年にわたる産業と外交の架け橋。",
    hist_intro_title: "一人の歩みが、一社の歴史になった。",
    hist_intro_body:
      "SERICの歴史は、1971年に来日したクリスチャン・ポラックの歩みと分かちがたく結びついています。1981年、彼は1世紀以上にわたり築かれてきた日仏の産業・外交の絆を受け継ぎ、持続的な戦略的提携を実現するため、東京にSERICを設立しました。",
    hist_founder_honors:
      "クリスチャン・ポラックは、レジオン・ドヌール勲章シュヴァリエ、ならびに旭日小綬章を受章しています。",
    hist_timeline_title: "45年にわたる展開。",
    tl_1981: "東京にSERIC設立。",
    tl_1988: "韓国での活動開始。ボロレ（Bolloré）によるSCAC設立を支援。",
    tl_1998: "ソウルにSERIC設立。",
    tl_2007: "モンゴルでの活動開始。",
    tl_2010: "北京オフィス開設。",
    tl_2021: "創業40周年。",
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
    con_hero_title: "プロジェクトについてお聞かせください。",
    con_hero_sub:
      "すでに海外展開されていて、アジアでの成長をお考えですか？東京・ソウルのチームがお手伝いします。",
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
    con_form_intro: "守秘義務のもと、いつでもお気軽にご相談ください。",
    form_first: "名",
    form_last: "姓",
    form_email: "メールアドレス",
    form_company: "会社名",
    form_message: "メッセージ",
    form_send: "送信",
    form_note: "本フォームの送信をもって、SERICからのご連絡に同意いただいたものとします。",
    form_success: "メッセージを送信しました。担当者より折り返しご連絡いたします。",
    form_error:
      "送信に失敗しました。時間をおいて再度お試しいただくか、information@seric-japon.com まで直接ご連絡ください。",

    // アクセスシート（/contact/acces）
    acces_meta_title: "アクセス — SERIC",
    acces_meta_desc:
      "セリク東京・ソウルオフィスへのアクセス。現地語の住所、最寄駅と出口、印刷用アクセスシート。",
    acces_title: "アクセス",
    acces_intro:
      "現地語の住所、最寄駅と出口、地図を開くQRコード。ご出発前に印刷、またはPDFとして保存いただけます。",
    acces_sheet: "アクセスシート",
    acces_addr_label: "住所",
    acces_taxi_ja: "日本語表記 — タクシーの運転手にお見せください",
    acces_taxi_ko: "韓国語表記 — タクシーの運転手にお見せください",
    acces_access_label: "最寄駅",
    acces_qr_caption: "スキャンするとGoogleマップで開きます",
    acces_print: "印刷 / PDFとして保存",
    acces_directions: "ルート案内",
    acces_naver: "NAVERマップで開く",
    con_sheet_link: "印刷用アクセスシート",

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

    hero_eyebrow: "도쿄 · 서울 — 1981년 설립",
    hero_title: "일본과 한국에서 유럽 산업계와 함께하는 전략 파트너.",
    hero_sub:
      "45년간 현장에서 쌓아온 전문성으로, 유럽·일본·한국을 잇는 지속적인 산업 파트너십을 만들어 왔습니다.",
    hero_cta_primary: "문의하기",
    hero_cta_secondary: "솔루션 보기",

    stat_45y_label: "일본에서의 경험",
    stat_26y_label: "한국에서의 경험",
    stat_offices: "거점: 도쿄 · 서울",
    stat_clients: "함께해 온 고객사",

    flagships:
      "유럽·일본·한국을 대표하는 기업들과 함께 일합니다.",

    sol_title: "귀사의 성장을 뒷받침하는 6가지 전문 분야",
    sol_lede:
      "시장 진입 전략부터 일상적인 운영까지, 산업 진출의 전 과정을 지원합니다.",
    sol_1_t: "전략 컨설팅",
    sol_1_d:
      "45년의 경험과 현지 산업에 대한 깊은 이해를 바탕으로 한 맞춤형 시장 진입 전략.",
    sol_2_t: "영업 대행",
    sol_2_d:
      "유럽 기업의 현지 대리인으로서 시장 개척, 협상, 핵심 고객 관리를 담당합니다.",
    sol_3_t: "파트너십 협상",
    sol_3_d:
      "합작투자(JV)·라이선스·M&A·기술 계약 — 후보 발굴부터 실사, 클로징까지.",
    sol_4_t: "사업 개발·운영 지원",
    sol_4_d:
      "현지 법인의 설립과 운영, 컴플라이언스, 재무, 채용, 세무까지 지원합니다.",
    sol_5_t: "비즈니스 미션",
    sol_5_d:
      "본격 진출에 앞서 기회를 검증하는 현지 미션.",
    sol_6_t: "문화의 가교",
    sol_6_d:
      "첫 만남부터 장기적인 신뢰까지, 효과적인 협상을 위한 문화 간 중재.",

    sec_title: "4개 사업 분야, 탁월함이라는 하나의 기준",
    sec_auto_t: "자동차",
    sec_auto_d:
      "내장·외장·파워트레인·전장 부품. 동일 제품군당 한 고객사 원칙으로 완전한 기밀을 보장합니다.",
    sec_auto_tag: "주력 분야",
    sec_def_t: "방위·항공우주",
    sec_def_d:
      "항공기·헬리콥터·함정·사이버 보안. 정부 기관과의 탄탄한 관계.",
    sec_def_tag: "주력 분야",
    sec_ene_t: "에너지·환경",
    sec_ene_d: "재생에너지, 수처리, 공공 인프라, 개발원조 사업.",
    sec_cul_t: "문화 활동",
    sec_cul_d: "출판, 미술품 대여, 역사 자문. 산업의 역사와 함께하는 문화 활동.",

    why_title: "SERIC의 강점",
    why_headline_a: "45년의 현지 기반.",
    why_headline_b: "현장에서 쌓아 왔습니다.",
    why_1_t: "노하우",
    why_1_d:
      "45년에 걸쳐 쌓아온 경제·비즈니스 커뮤니티·현지 문화에 대한 깊은 이해.",
    why_2_t: "상주 팀",
    why_2_d:
      "일본과 한국에 상주하는 다국어 제너럴리스트·스페셜리스트 컨설턴트.",
    why_3_t: "최고 수준의 네트워크",
    why_3_d: "기업 경영진, 행정 기관, 유럽 대표부와의 긴밀한 관계.",

    story_eyebrow: "회사 연혁",
    story_title: "1981년부터 이어온 비전.",
    story_body:
      "SERIC은 1981년, 도쿄에서 이미 10년을 보낸 크리스티앙 폴락이 한 세기 넘게 이어져 온 프랑스와 일본의 산업·외교적 유대를 잇기 위해 설립했습니다. 양국 정부가 인정한 발자취 — 레지옹 도뇌르 훈장과 욱일장 수훈.",
    story_cta: "전체 이야기 보기",
    story_caption_role: "창업자",

    trust_title: "주요 고객",

    cta_title: "일본 또는 한국에서의 사업 확장을 준비하고 계신가요?",
    cta_sub:
      "도쿄·서울 팀과의 상담은 철저한 비밀 유지 하에, 안전하게 진행됩니다.",

    foot_tokyo: "SERIC 도쿄",
    foot_seoul: "SERIC 서울",
    foot_legal: "© SERIC 2026 — All rights reserved",
    foot_about_blurb:
      "1981년부터 일본과 한국에서 유럽 산업계와 함께해 온 전략 파트너.",

    // 메타 (내부 페이지)
    solutions_meta_title: "솔루션 — SERIC",
    solutions_meta_desc:
      "전략, 대리, 파트너십, 운영, 미션 — 일본과 한국에서의 산업 진출 전 과정을 지원합니다.",
    secteurs_meta_title: "사업 분야 — SERIC",
    secteurs_meta_desc:
      "자동차, 방위·항공우주, 에너지·환경, 문화 활동 — 일본과 한국에서의 전문 분야.",
    histoire_meta_title: "회사 연혁 — SERIC",
    histoire_meta_desc:
      "1981년부터 SERIC은 유럽·일본·한국을 잇는 산업의 가교를 놓아 왔습니다. 창업자 크리스티앙 폴락.",
    contact_meta_title: "문의 — SERIC",
    contact_meta_desc:
      "도쿄·서울 오피스. 일본과 한국에서의 사업 확장에 대해 상담해 보세요.",

    // 솔루션 (페이지)
    sol_hero_title: "진출의 모든 단계를 하나의 창구에서.",
    sol_hero_sub:
      "첫 시장 조사부터 현지 법인의 일상 운영까지, 일본과 한국에서의 산업 진출 전 단계를 지원합니다.",
    sol_approach_eyebrow: "우리의 접근 방식",
    sol_approach_title: "이해하고, 연결하고, 동행합니다.",
    sol_step_1_t: "이해",
    sol_step_1_d:
      "규제, 이해관계자, 문화적 관행 등 현지를 정확히 읽은 뒤에야 다음 행보를 제안합니다.",
    sol_step_2_t: "연결",
    sol_step_2_d:
      "45년에 걸쳐 구축한 경영진·행정 기관·산업 파트너 네트워크를 엽니다.",
    sol_step_3_t: "동행",
    sol_step_3_d:
      "진출 이후에도 운영, 컴플라이언스, 협상, 성장까지 고객과 함께합니다.",

    // 사업 분야 (페이지)
    sec_hero_title: "4개 사업 분야, 하나의 기준.",
    sec_hero_sub:
      "산업적 이해관계가 가장 크고, 기밀 유지가 성패를 가르는 영역에 전문성을 집중합니다.",
    sec_intro:
      "원칙은 단순합니다. 동일 제품군당 단 한 고객사. 귀사의 전략은 귀사만의 것입니다.",
    sec_auto_long:
      "내장·외장·파워트레인·차량용 전자 장비. 유럽 부품사와 완성차 업체가 일본·한국 기업과 파트너십을 맺도록 지원합니다. 동일 제품군당 한 고객사 원칙으로 완전한 기밀을 보장합니다.",
    sec_def_long:
      "항공기·헬리콥터·함정·사이버 보안. 오랜 기간 쌓아온 정부 기관과의 관계, 그리고 일본·한국의 공공 조달 사이클에 대한 깊은 이해.",
    sec_ene_long:
      "재생에너지, 수처리, 공공 인프라, 개발원조 사업. 긴 호흡이 지속적인 현지 기반에 보답하는 영역입니다.",
    sec_cul_long:
      "출판, 미술품 대여, 역사 자문. 유럽과 아시아를 잇는 40년 넘는 산업 역사와 함께하는 문화 활동입니다.",

    // 연혁 (페이지)
    hist_hero_title: "1981년부터 쌓아온 현지 기반.",
    hist_hero_sub:
      "유럽·일본·한국을 잇는 45년의 산업·외교적 가교.",
    hist_intro_title: "한 사람의 여정이 한 회사의 역사가 되었습니다.",
    hist_intro_body:
      "SERIC의 역사는 1971년 일본에 도착한 크리스티앙 폴락의 여정과 떼어놓을 수 없습니다. 1981년, 그는 한 세기 넘게 이어져 온 프랑스와 일본의 산업·외교적 유대를 잇고 지속적인 전략적 파트너십을 실현하기 위해 도쿄에 SERIC을 설립했습니다.",
    hist_founder_honors:
      "크리스티앙 폴락은 레지옹 도뇌르 슈발리에 훈장과 욱일소수장을 수훈했습니다.",
    hist_timeline_title: "45년의 성장.",
    tl_1981: "도쿄에 SERIC 설립.",
    tl_1988: "한국에서 활동 시작. 볼로레(Bolloré)의 SCAC 설립을 지원.",
    tl_1998: "서울에 SERIC 설립.",
    tl_2007: "몽골에서 활동 시작.",
    tl_2010: "베이징 사무소 개설.",
    tl_2021: "창립 40주년.",
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
    con_hero_title: "프로젝트에 대해 이야기해 주세요.",
    con_hero_sub:
      "이미 해외에서 활동 중이며 아시아에서의 성장을 준비하고 계신가요? 도쿄와 서울의 팀이 함께하겠습니다.",
    con_offices_title: "오피스",
    con_tokyo: "SERIC 도쿄",
    con_tokyo_addr:
      "니혼바시 1초메 미쓰이 빌딩 7층\n도쿄도 주오구 니혼바시 1-4-1\n103-0027 일본",
    con_tokyo_access:
      "니혼바시역(긴자선·도자이선·아사쿠사선) C1 출구. 미쓰코시마에역에서 도보 3분, 도쿄역에서 도보 6분.",
    con_seoul: "SERIC 서울",
    con_seoul_addr:
      "서울특별시 용산구 한강대로 109\n용성비즈텔 602호\n(우) 04376",
    con_seoul_access:
      "지하철 4호선 신용산역 5·6번 출구에서 80m. 용산역(1호선·KTX)에서 도보 5분.",
    con_phone_label: "전화",
    con_email_label: "이메일",
    con_form_title: "문의하기",
    con_form_intro: "철저한 비밀 유지 하에, 부담 없이 상담하실 수 있습니다.",
    form_first: "이름",
    form_last: "성",
    form_email: "이메일",
    form_company: "회사명",
    form_message: "메시지",
    form_send: "보내기",
    form_note:
      "본 양식을 제출하시면 SERIC의 연락을 받는 데 동의하시는 것으로 간주됩니다.",
    form_success: "메시지가 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.",
    form_error:
      "전송에 실패했습니다. 다시 시도하시거나 information@seric-japon.com 으로 직접 연락해 주세요.",

    // 오시는 길 안내서 (/contact/acces)
    acces_meta_title: "오시는 길 — SERIC",
    acces_meta_desc:
      "SERIC 도쿄·서울 오피스 오시는 길: 현지어 주소, 가까운 역과 출구, 인쇄용 안내서.",
    acces_title: "오시는 길",
    acces_intro:
      "현지어 주소, 가까운 역과 출구, 지도를 여는 QR 코드. 출발 전에 인쇄하거나 PDF로 저장하세요.",
    acces_sheet: "오시는 길 안내서",
    acces_addr_label: "주소",
    acces_taxi_ja: "일본어 주소 — 택시 기사에게 보여주세요",
    acces_taxi_ko: "한국어 주소 — 택시 기사에게 보여주세요",
    acces_access_label: "교통편",
    acces_qr_caption: "스캔하면 Google 지도에서 열립니다",
    acces_print: "인쇄 / PDF로 저장",
    acces_directions: "길찾기",
    acces_naver: "네이버 지도에서 열기",
    con_sheet_link: "인쇄용 안내서",

    // 쿠키 배너
    cookie_text:
      "사이트 이용 현황 측정과 경험 개선을 위해 쿠키를 사용합니다. 설정은 언제든지 변경할 수 있습니다.",
    cookie_accept: "동의",
    cookie_refuse: "거부",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
