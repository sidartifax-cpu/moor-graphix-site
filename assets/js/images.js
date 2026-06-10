// ─────────────────────────────────────────────────────────────────────────────
// MOOR GRAPHIX — Image Registry
// All four site sections are controlled from this single file.
//
// ── TO CHANGE THE HOMEPAGE HERO SLIDESHOW ──────────────────────────────────
//   1. Drop your image into  assets/images/hero-slideshow/
//   2. Add (or remove) an entry in the HERO SLIDESHOW section below
//      with  category: "hero_slideshow"
//
// ── TO CHANGE THE SHOWCASE STRIP (below hero) ──────────────────────────────
//   1. Drop your image into  assets/images/showcase-strip/
//   2. Add (or remove) an entry in the SHOWCASE STRIP section below
//      with  category: "showcase_strip"
//
// ── TO ADD PORTFOLIO WORK ──────────────────────────────────────────────────
//   1. Drop the file into the correct  assets/images/portfolio/<subcategory>/
//      subfolder (logos / brand-identity / web-design / event-print / campaign)
//   2. Add an entry in the PORTFOLIO section below with the matching category
//
// ── TO CHANGE SERVICES PAGE HERO SLIDES ───────────────────────────────────
//   1. Drop files into  assets/images/services-hero/
//   2. Add/remove entries in the SERVICES HERO section below
//      with  category: "portfolio_slides"
//
// Required fields per entry:
//   src      — path from site root
//   name     — display name (cards, modal title, alt text)
//   cat      — display label shown on gallery cards (free text)
//   category — section key; must be one of:
//                hero_slideshow | showcase_strip |
//                logos | brand_identity | web_design | event_print | campaign |
//                portfolio_slides
//   desc     — 1–3 sentences for the modal detail view
//   link     — (optional) URL to a case study page; if set, clicking the card
//              navigates to the case study instead of opening the modal
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [

  // ══════════════════════════════════════════════════════════════════════════
  // HERO SLIDESHOW — loads in the right panel of the homepage hero
  // Folder: assets/images/hero-slideshow/
  // ══════════════════════════════════════════════════════════════════════════

  {
    src:      "assets/images/hero-slideshow/amerukhan-basics-coin.jpg",
    name:     "Amerukhan Basics Coin",
    cat:      "Brand Identity",
    category: "hero_slideshow",
    desc:     "A commemorative copper coin for Amerukhan Basics Clothing — a cultural apparel brand rooted in Indigenous Moorish heritage. Features a profile of a Black man in a war bonnet headdress, forged in 3D relief."
  },
  {
    src:      "assets/images/hero-slideshow/scrolls-of-maat-logo.jpg",
    name:     "Scrolls of MAAT",
    cat:      "Logo Design",
    category: "hero_slideshow",
    desc:     "The official seal for Scrolls of MAAT — an AI incubator and legacy brand education platform. Features classical columns, a sunburst, and interlocking SM monogram in gold."
  },
  {
    src:      "assets/images/hero-slideshow/wsl4-commemorative-coin.jpg",
    name:     "WSL4 Commemorative Coin",
    cat:      "Brand Identity",
    category: "hero_slideshow",
    desc:     "A commemorative coin for Widow's Son Lodge #4 in Douglasville, GA. Navy and gold embossed design with compass and square centermark, raised lettering, and beveled edge."
  },
  {
    src:      "assets/images/hero-slideshow/hss-website.jpg",
    name:     "Hinson Security Service",
    cat:      "Web Design",
    category: "hero_slideshow",
    desc:     "High-impact security firm website for Hinson Security. Cream and gold palette with dramatic full-bleed photography."
  },
  {
    src:      "assets/images/hero-slideshow/african-dance-class-flyer.jpg",
    name:     "African Dance Class — El Barrio",
    cat:      "Event Flyer",
    category: "hero_slideshow",
    desc:     "Vibrant event flyer for Rev. Nafisa Sharriff's Summer African Dance Class Series in El Barrio. Kente-inspired border patterns, bold typography hierarchy, and a full-bleed action photo."
  },
  {
    src:      "assets/images/hero-slideshow/nama-new-amsterdam-musical.jpg",
    name:     "NAMA — New Amsterdam Musical",
    cat:      "Brand Identity",
    category: "hero_slideshow",
    desc:     "Heraldic brand identity for the New Amsterdam Musical Association. A full crest featuring a lyre, classical architecture, treble clef, and laurel wreath in navy and gold. Est. 1904."
  },
  {
    src:      "assets/images/hero-slideshow/roberts-law-group-website.jpg",
    name:     "The Roberts Law Group",
    cat:      "Web Design",
    category: "hero_slideshow",
    desc:     "Professional legal website for The Roberts Law Group, Atlanta. Navy and gold palette communicating trust and authority. Split-hero layout with Atlanta skyline photography and strong practice area navigation."
  },


  // ══════════════════════════════════════════════════════════════════════════
  // SHOWCASE STRIP — thumbnail strip directly below the homepage hero
  // Folder: assets/images/showcase-strip/
  // ══════════════════════════════════════════════════════════════════════════

  {
    src:      "assets/images/showcase-strip/scrolls-of-maat-logo.jpg",
    name:     "Scrolls of MAAT",
    cat:      "Logo Design",
    category: "showcase_strip",
    desc:     "The official seal for Scrolls of MAAT — an AI incubator and legacy brand education platform. Features classical columns, a sunburst, and interlocking SM monogram in gold. Tagline: Truth · Record · Trust. Wisdom · Order · Legacy."
  },
  {
    src:      "assets/images/showcase-strip/own-the-song-logo.jpg",
    name:     "Own the Song",
    cat:      "Logo Design",
    category: "showcase_strip",
    desc:     "Bold, distressed identity for Own the Song — a music ownership and rights education platform. Fuses a headphone silhouette with gritty custom lettering. Communicates independence, culture, and sonic ownership."
  },
  {
    src:      "assets/images/showcase-strip/2-sports-moms-logo.jpg",
    name:     "2 Sports Moms",
    cat:      "Logo Design",
    category: "showcase_strip",
    desc:     "Logo for 2 Sports Moms — a student-athlete family support brand. Two silhouetted profiles inside a heart shape overlaid with sports balls in purple and orange."
  },
  {
    src:      "assets/images/showcase-strip/amerukhan-basics-coin.jpg",
    name:     "Amerukhan Basics Coin",
    cat:      "Brand Identity",
    category: "showcase_strip",
    desc:     "A commemorative copper coin for Amerukhan Basics Clothing — a cultural apparel brand rooted in Indigenous Moorish heritage. Features a profile of a Black man in a war bonnet headdress, forged in 3D relief."
  },
  {
    src:      "assets/images/showcase-strip/nama-new-amsterdam-musical.jpg",
    name:     "NAMA — New Amsterdam Musical",
    cat:      "Brand Identity",
    category: "showcase_strip",
    desc:     "Heraldic brand identity for the New Amsterdam Musical Association. A full crest featuring a lyre, classical architecture, treble clef, and laurel wreath in navy and gold. Est. 1904."
  },
  {
    src:      "assets/images/showcase-strip/wsl4-commemorative-coin.jpg",
    name:     "WSL4 Commemorative Coin",
    cat:      "Brand Identity",
    category: "showcase_strip",
    desc:     "A commemorative coin for Widow's Son Lodge #4 in Douglasville, GA. Navy and gold embossed design with compass and square centermark, raised lettering, and beveled edge."
  },
  {
    src:      "assets/images/showcase-strip/widows-son-lodge-4-website.jpg",
    name:     "Widow's Son Lodge #4 Website",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Full website for Widow's Son Lodge #4. Dark, dignified aesthetic with gold accents. Bold headline hierarchy: Brotherhood. Legacy. Community."
  },
  {
    src:      "assets/images/showcase-strip/roberts-law-group-website.jpg",
    name:     "The Roberts Law Group",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Professional legal website for The Roberts Law Group, Atlanta. Navy and gold palette communicating trust and authority."
  },
  {
    src:      "assets/images/showcase-strip/joyous-ocean-website.jpg",
    name:     "Joyous Ocean — Dionne Monsanto",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Warm, vibrant website for Joyous Ocean — life transformation coach, author, and performer Dionne C. Monsanto. Full-bleed photography hero, playful serif typography.",
    link:     "cases/joyousocean.html"
  },
  {
    src:      "assets/images/showcase-strip/evans-guild-website.jpg",
    name:     "The Evans Guild",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Premium brand aesthetics website for The Evans Guild. Deep purple palette with gold heraldic crest. Fashion-forward editorial grid.",
    link:     "cases/evansguild.html"
  },
  {
    src:      "assets/images/showcase-strip/hinson-security-website.jpg",
    name:     "Hinson Security Services",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "High-impact security firm website for Hinson Security. Cream and gold palette with dramatic full-bleed photography."
  },
  {
    src:      "assets/images/showcase-strip/black-mans-roundtable-website.jpg",
    name:     "Black Man's Roundtable",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Editorial podcast network site for Black Man's Roundtable — Atlanta's premier Black media network."
  },
  {
    src:      "assets/images/showcase-strip/montague-studios-website.jpg",
    name:     "Montague Studios",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Cinematic photography portfolio for Montague Studios — film and photography based in Atlanta, available worldwide."
  },
  {
    src:      "assets/images/showcase-strip/isisara-bey-website.jpg",
    name:     "Isisara Bey",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Personal brand website for writer, journey agent, and curator Isisara Bey. Rich terracotta header, full-bleed portrait photography."
  },
  {
    src:      "assets/images/showcase-strip/2-sports-moms-full-site.jpg",
    name:     "2 Sports Moms — Full Site",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Full organizational website for 2 Sports Moms — a 501(c)(3) non-profit connecting opportunities to student-athletes and resources to families.",
    link:     "cases/2sportsmoms.html"
  },
  {
    src:      "assets/images/showcase-strip/nama-harlem-website.jpg",
    name:     "NAMA Harlem Website",
    cat:      "Web Design",
    category: "showcase_strip",
    desc:     "Heritage website for NAMA Harlem — the New Amsterdam Musical Association, Est. 1904. Oldest African-American musical org in the U.S."
  },
  {
    src:      "assets/images/showcase-strip/african-dance-class-flyer.jpg",
    name:     "African Dance Class — El Barrio",
    cat:      "Event Flyer",
    category: "showcase_strip",
    desc:     "Vibrant event flyer for Rev. Nafisa Sharriff's Summer African Dance Class Series in El Barrio. Kente-inspired border patterns and bold typography."
  },
  {
    src:      "assets/images/showcase-strip/parent-playbook-series.jpg",
    name:     "Parent Playbook Series",
    cat:      "Campaign Design",
    category: "showcase_strip",
    desc:     "Full campaign design for the 2 Sports Moms Parent Playbook Series virtual event. Event banner, promotional graphics, and branded book mockup."
  },
  {
    src:      "assets/images/showcase-strip/harlem-directory.jpg",
    name:     "Harlem Business Directory",
    cat:      "Publication Design",
    category: "showcase_strip",
    desc:     "10,000-copy shopping guide for UMEZ, BRISC, and the Harlem Business Alliance — featuring 68 Black-owned Harlem businesses. Complete publication design, art direction, and 90% original photography by Moor Graphix. Distributed throughout Harlem and Manhattan's hotel and theater districts in 2001.",
    link:     "cases/harlem-directory.html"
  },


  // ══════════════════════════════════════════════════════════════════════════
  // PORTFOLIO GRID — filtered by category in the #portfolio section
  // Folders: assets/images/portfolio/<subcategory>/
  // ══════════════════════════════════════════════════════════════════════════

  // ── Logo Design ───────────────────────────────────────────────────────────
  {
    src:      "assets/images/portfolio/logos/scrolls-of-maat-logo.jpg",
    name:     "Scrolls of MAAT",
    cat:      "Logo Design",
    category: "logos",
    desc:     "The official seal for Scrolls of MAAT — an AI incubator and legacy brand education platform. Features classical columns, a sunburst, and interlocking SM monogram in gold. Tagline: Truth · Record · Trust. Wisdom · Order · Legacy."
  },
  {
    src:      "assets/images/portfolio/logos/own-the-song-logo.jpg",
    name:     "Own the Song",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Bold, distressed identity for Own the Song — a music ownership and rights education platform. Fuses a headphone silhouette with gritty custom lettering. Communicates independence, culture, and sonic ownership."
  },
  {
    src:      "assets/images/portfolio/logos/2-sports-moms-logo.jpg",
    name:     "2 Sports Moms",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo for 2 Sports Moms — a student-athlete family support brand. Two silhouetted profiles inside a heart shape overlaid with sports balls in purple and orange. Communicates love, hustle, and the spirit of the sports family."
  },
  {
    src:      "assets/images/portfolio/logos/ADC-logo.jpg",
    name:     "ADC",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for ADC. A clean, purposeful mark designed for immediate recognition and brand authority."
  },
  {
    src:      "assets/images/portfolio/logos/Amerukhan-Basics-Clothing-crest-google.jpg",
    name:     "Amerukhan Basics Clothing Crest",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Heraldic crest mark for Amerukhan Basics Clothing — a cultural apparel brand rooted in Indigenous Moorish heritage. Heritage-forward symbolism forged into a signature brand mark."
  },
  {
    src:      "assets/images/portfolio/logos/audio_wolf4.jpg",
    name:     "Audio Wolf",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Audio Wolf. Bold typographic identity combining sonic culture with an aggressive, forward-leaning visual presence."
  },
  {
    src:      "assets/images/portfolio/logos/BE-logo-square-blue.jpg",
    name:     "BE Logo",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Clean monogram logo in a bold blue square format. Designed for clarity and versatility across digital and print applications."
  },
  {
    src:      "assets/images/portfolio/logos/black-mans-roundtable-logo-1.jpg",
    name:     "Black Man's Roundtable Logo",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo mark for Black Man's Roundtable — Atlanta's premier Black media and podcast network. Strong typographic identity built for broadcast and digital use."
  },
  {
    src:      "assets/images/portfolio/logos/Collective-NaySayers-logo.jpg",
    name:     "Collective NaySayers",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo for Collective NaySayers. Distinctive mark that channels contrarian creative energy into a bold, unified visual identity."
  },
  {
    src:      "assets/images/portfolio/logos/CRATES-ATL-logo-1.jpg",
    name:     "CRATES ATL",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for CRATES ATL — an Atlanta-rooted brand in music and culture. Wordmark built with raw typographic energy and cultural grounding."
  },
  {
    src:      "assets/images/portfolio/logos/creators_of_light-logo-6-2.jpg",
    name:     "Creators of Light",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Creators of Light. A spiritually and creatively resonant mark — luminous, purposeful, and built for lasting recognition."
  },
  {
    src:      "assets/images/portfolio/logos/DTS-logo.jpg",
    name:     "DTS",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Monogram logo design for DTS. Clean letterform treatment designed for professional authority across all brand touchpoints."
  },
  {
    src:      "assets/images/portfolio/logos/EA-logo-color.jpg",
    name:     "EA Logo",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Color logo design for EA. Bold, confident identity built for versatility across digital, print, and branded apparel."
  },
  {
    src:      "assets/images/portfolio/logos/earlybird-logo.jpg",
    name:     "Earlybird",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Earlybird. Energetic, forward-moving mark designed to communicate first-mover energy and hustle culture."
  },
  {
    src:      "assets/images/portfolio/logos/Etuology-bw.jpg",
    name:     "Etuology",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Black and white logo design for Etuology. High-contrast typographic mark built for premium brand positioning and timeless impact."
  },
  {
    src:      "assets/images/portfolio/logos/FlightsnFeelings-logo.jpg",
    name:     "Flights & Feelings",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Flights & Feelings — a lifestyle and travel brand. Mark designed to evoke elevation, emotion, and cultural wanderlust."
  },
  {
    src:      "assets/images/portfolio/logos/FLOSS-logo-final.jpg",
    name:     "FLOSS",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Final logo design for FLOSS. Bold brand identity with cultural attitude — designed for recognition and staying power."
  },
  {
    src:      "assets/images/portfolio/logos/hdc-logo-and-logotype.jpg",
    name:     "HDC",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo and logotype design for HDC. Paired mark system — icon and wordmark working together for flexible brand use."
  },
  {
    src:      "assets/images/portfolio/logos/Hinson-2.jpg",
    name:     "Hinson Security — Logo",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Alternate logo mark for Hinson Security Services. Authority-driven design combining strength and hospitality in a single, commanding mark."
  },
  {
    src:      "assets/images/portfolio/logos/Honee-Gurl-logo-2.jpg",
    name:     "Honee Gurl",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Honee Gurl. Warm, feminine brand mark with personality — designed for lifestyle brands with cultural edge."
  },
  {
    src:      "assets/images/portfolio/logos/iso005.jpg",
    name:     "Isometric Brand Render I",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Isometric 3D brand render — logo design visualized in dimensional form. Demonstrates brand mark depth, materiality, and environmental presence."
  },
  {
    src:      "assets/images/portfolio/logos/iso01.jpg",
    name:     "Isometric Brand Render II",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Isometric 3D brand render — logo design visualized in dimensional form. Demonstrates brand mark depth, materiality, and environmental presence."
  },
  {
    src:      "assets/images/portfolio/logos/iso2.jpg",
    name:     "Isometric Brand Render III",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Isometric 3D brand render — logo design visualized in dimensional form. Demonstrates brand mark depth, materiality, and environmental presence."
  },
  {
    src:      "assets/images/portfolio/logos/iso3.jpg",
    name:     "Isometric Brand Render IV",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Isometric 3D brand render — logo design visualized in dimensional form. Demonstrates brand mark depth, materiality, and environmental presence."
  },
  {
    src:      "assets/images/portfolio/logos/Jersey-SilverBacks.jpg",
    name:     "Jersey SilverBacks",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Jersey SilverBacks — a sports and athletics brand. Power-forward identity built for team culture and competitive presence."
  },
  {
    src:      "assets/images/portfolio/logos/JP-Speaks-logo.jpg",
    name:     "JP Speaks",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for JP Speaks — a personal brand identity for a speaker, thought leader, or content creator. Clean, authoritative, and camera-ready."
  },
  {
    src:      "assets/images/portfolio/logos/morrison-creat-logo.jpg",
    name:     "Morrison Creative",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Morrison Creative. A heritage-rooted mark with forward creative energy — designed for a studio or agency brand with depth."
  },
  {
    src:      "assets/images/portfolio/logos/PTM-logo.jpg",
    name:     "PTM",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Monogram logo design for PTM. Bold letterform identity designed for professional brand authority across all applications."
  },
  {
    src:      "assets/images/portfolio/logos/pure-water-logo-final.jpg",
    name:     "Pure Water",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Final logo design for Pure Water. Clean, flowing identity communicating purity, health, and elemental clarity. Built for product and lifestyle branding."
  },
  {
    src:      "assets/images/portfolio/logos/PWC-logo.jpg",
    name:     "PWC",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for PWC. Professional monogram mark designed for institutional presence and cross-platform brand consistency."
  },
  {
    src:      "assets/images/portfolio/logos/solesville-icon-circle-white.jpg",
    name:     "Solesville",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Circular icon mark for Solesville. Soulful brand identity built for music, community, or cultural lifestyle — designed to live on apparel and digital platforms."
  },
  {
    src:      "assets/images/portfolio/logos/soul-symphony-logo-2022-840.jpg",
    name:     "Soul Symphony",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Soul Symphony — a music and cultural brand. Mark combines classical resonance with soulful cultural identity in a unified visual system."
  },
  {
    src:      "assets/images/portfolio/logos/triyoga-logo.jpg",
    name:     "Tri Yoga",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Tri Yoga. Balanced, centered mark communicating mind-body-spirit harmony through clean geometric form and deliberate negative space."
  },
  {
    src:      "assets/images/portfolio/logos/Wasp-logo.jpg",
    name:     "Wasp",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Wasp. Sharp, aggressive mark built for brands that move fast and hit hard — precision design with cultural edge."
  },
  {
    src:      "assets/images/portfolio/logos/YoniHouse-logo.jpg",
    name:     "Yoni House",
    cat:      "Logo Design",
    category: "logos",
    desc:     "Logo design for Yoni House — a wellness, feminine health, or cultural brand. Sacred, grounded mark designed for community trust and authentic representation."
  },

  // ── Brand Identity ────────────────────────────────────────────────────────
  {
    src:      "assets/images/portfolio/brand-identity/amerukhan-basics-coin.jpg",
    name:     "Amerukhan Basics Coin",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "A commemorative copper coin for Amerukhan Basics Clothing — a cultural apparel brand rooted in Indigenous Moorish heritage. Features a profile of a Black man in a war bonnet headdress, forged in 3D relief. Bridges history, identity, and brand currency."
  },
  {
    src:      "assets/images/portfolio/brand-identity/nama-new-amsterdam-musical.jpg",
    name:     "NAMA — New Amsterdam Musical",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Heraldic brand identity for the New Amsterdam Musical Association. A full crest featuring a lyre, classical architecture, treble clef, and laurel wreath in navy and gold. Est. 1904 banner anchors the prestige and history."
  },
  {
    src:      "assets/images/portfolio/brand-identity/wsl4-commemorative-coin.jpg",
    name:     "WSL4 Commemorative Coin",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "A commemorative coin for Widow's Son Lodge #4 in Douglasville, GA. Navy and gold embossed design with compass and square centermark, raised lettering, and beveled edge. Masonic tradition rendered in premium visual form."
  },
  {
    src:      "assets/images/portfolio/brand-identity/bizcard.jpg",
    name:     "Business Card Design",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Custom business card design — the first physical handshake between a brand and the world. Visual hierarchy, weight, and finish designed to say something before a word is spoken."
  },
  {
    src:      "assets/images/portfolio/brand-identity/evanspointe_2017-spread_Page_11.jpg",
    name:     "Evans Pointe Brand Guide — pg. 11",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Page 11 of the Evans Pointe 2017 brand guide spread — comprehensive visual identity documentation for Evans Pointe. Full brand system delivered as a living reference document."
  },
  {
    src:      "assets/images/portfolio/brand-identity/evanspointe_2017-spread_Page_13.jpg",
    name:     "Evans Pointe Brand Guide — pg. 13",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Page 13 of the Evans Pointe 2017 brand guide spread. Typography system, color applications, and usage standards for a complete visual identity."
  },
  {
    src:      "assets/images/portfolio/brand-identity/evanspointe_2017-spread_Page_22.jpg",
    name:     "Evans Pointe Brand Guide — pg. 22",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Page 22 of the Evans Pointe 2017 brand guide spread. Brand applications and environmental design standards — the system at work across real-world touchpoints."
  },
  {
    src:      "assets/images/portfolio/brand-identity/mockup-of-a-snapback-hat-on-a-solid-surface-1489-el.jpg",
    name:     "Snapback Hat Mockup",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Branded snapback hat mockup — logo design rendered on apparel to demonstrate how the mark translates to wearable merchandise. Culture carried into the physical world."
  },
  {
    src:      "assets/images/portfolio/brand-identity/mockup-of-a-two-toned-11-oz-coffee-mug-mockup-on-a-table-27837.jpg",
    name:     "Coffee Mug Mockup",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Branded coffee mug mockup — brand mark applied to merchandise to show real-world presence and product design potential."
  },
  {
    src:      "assets/images/portfolio/brand-identity/Puur Water Brand_manual.jpg",
    name:     "Puur Water Brand Manual",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Brand manual for Puur Water — a complete visual identity document covering logo usage, color system, typography, and product application standards. Clean, pure, and precisely documented."
  },
  {
    src:      "assets/images/portfolio/brand-identity/Sir-Evans-Cognac-2025.jpg",
    name:     "Sir Evans Cognac (2025)",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "2025 updated brand identity for Sir Evans Cognac — a premium spirits brand. Refined label design and visual system communicating luxury, heritage, and cultural distinction."
  },
  {
    src:      "assets/images/portfolio/brand-identity/Sir-Evans-Cognac.jpg",
    name:     "Sir Evans Cognac",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Original brand identity for Sir Evans Cognac. Premium spirits label design built on cultural heritage and visual prestige — distinguished, bold, and made to be remembered."
  },
  {
    src:      "assets/images/portfolio/brand-identity/Sir-Evans-Tequila.jpg",
    name:     "Sir Evans Tequila",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "Brand identity for Sir Evans Tequila — a premium spirits extension. Consistent visual system applied to a new expression, maintaining the Sir Evans legacy of cultural luxury."
  },
  {
    src:      "assets/images/portfolio/brand-identity/Sir-Evans-Vodka-2025.jpg",
    name:     "Sir Evans Vodka (2025)",
    cat:      "Brand Identity",
    category: "brand_identity",
    desc:     "2025 brand identity for Sir Evans Vodka. Clean, authoritative label design extending the Sir Evans spirits family with a premium, market-ready visual presence."
  },

  // ── Web Design ────────────────────────────────────────────────────────────
  {
    src:      "assets/images/portfolio/web-design/widows-son-lodge-4-website.jpg",
    name:     "Widow's Son Lodge #4 Website",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Full website for Widow's Son Lodge #4. Dark, dignified aesthetic with gold accents. Bold headline hierarchy: Brotherhood. Legacy. Community. Custom nav, stats section, and dual CTAs. A complete digital presence for a historic lodge."
  },
  {
    src:      "assets/images/portfolio/web-design/roberts-law-group-website.jpg",
    name:     "The Roberts Law Group",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Professional legal website for The Roberts Law Group, Atlanta. Navy and gold palette communicating trust and authority. Split-hero layout with Atlanta skyline photography, clear CTAs, and strong practice area navigation."
  },
  {
    src:      "assets/images/portfolio/web-design/joyous-ocean-website.jpg",
    name:     "Joyous Ocean — Dionne Monsanto",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Warm, vibrant website for Joyous Ocean — life transformation coach, author, and performer Dionne C. Monsanto. Full-bleed photography hero, playful serif typography, and side-panel quick links. Live Life JOYously!",
    link:     "cases/joyousocean.html"
  },
  {
    src:      "assets/images/portfolio/web-design/evans-guild-website.jpg",
    name:     "The Evans Guild",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Premium brand aesthetics website for The Evans Guild. Deep purple palette with gold heraldic crest. Fashion-forward editorial grid with mood imagery and Create · Produce · Brand positioning.",
    link:     "cases/evansguild.html"
  },
  {
    src:      "assets/images/portfolio/web-design/hinson-security-website.jpg",
    name:     "Hinson Security Services",
    cat:      "Web Design",
    category: "web_design",
    desc:     "High-impact security firm website for Hinson Security. Cream and gold palette with dramatic full-bleed photography. Stark headline typography. Where Hospitality and Security Are One In The Same."
  },
  {
    src:      "assets/images/portfolio/web-design/black-mans-roundtable-website.jpg",
    name:     "Black Man's Roundtable",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Editorial podcast network site for Black Man's Roundtable — Atlanta's premier Black media network. Features latest episode player, Spotify integration, bold typographic hero, and season/guest statistics."
  },
  {
    src:      "assets/images/portfolio/web-design/montague-studios-website.jpg",
    name:     "Montague Studios",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Cinematic photography portfolio for Montague Studios — film and photography based in Atlanta, available worldwide. Full-bleed red-lit portrait hero, floating island nav, slide counter. Frames that transcend the moment."
  },
  {
    src:      "assets/images/portfolio/web-design/isisara-bey-website.jpg",
    name:     "Isisara Bey",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Personal brand website for writer, journey agent, and curator Isisara Bey. Rich terracotta header, full-bleed portrait photography. 'In order to harvest, you have to plant. What seeds are you planting in your own life?'"
  },
  {
    src:      "assets/images/portfolio/web-design/2-sports-moms-full-site.jpg",
    name:     "2 Sports Moms — Full Site",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Full organizational website for 2 Sports Moms — a 501(c)(3) non-profit connecting opportunities to student-athletes and resources to families. Full-bleed team photography, impact stats, and donation CTAs.",
    link:     "cases/2sportsmoms.html"
  },
  {
    src:      "assets/images/portfolio/web-design/nama-harlem-website.jpg",
    name:     "NAMA Harlem Website",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Heritage website for NAMA Harlem — the New Amsterdam Musical Association, Est. 1904. Announcement bar, brownstone photography, gold serif typography, triple CTA. Oldest African-American musical org in the U.S."
  },
  {
    src:      "assets/images/portfolio/web-design/dahill.jpg",
    name:     "Dahill",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design for Dahill. Clean, professional digital presence built for a modern brand — custom layout, strong visual hierarchy, and clear conversion paths."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.18.49 PM.jpg",
    name:     "Web Project — Screenshot 1",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Full-page capture documenting a custom web build — layout, typography, and visual design working together."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.19.15 PM.jpg",
    name:     "Web Project — Screenshot 2",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Interior section of a custom web build — showcasing design detail, section hierarchy, and visual continuity."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.19.34 PM.jpg",
    name:     "Web Project — Screenshot 3",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Section-level capture showing custom layout design, content structure, and brand application."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.20.08 PM.jpg",
    name:     "Web Project — Screenshot 4",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Custom section design with intentional visual hierarchy and brand-consistent typography and color."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.20.21 PM.jpg",
    name:     "Web Project — Screenshot 5",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Mid-page section capturing the full-width layout, imagery, and CTA structure of a custom web build."
  },
  {
    src:      "assets/images/portfolio/web-design/Screenshot 2023-07-21 at 6.20.39 PM.jpg",
    name:     "Web Project — Screenshot 6",
    cat:      "Web Design",
    category: "web_design",
    desc:     "Website design screenshot. Footer and closing section of a custom site — navigation, contact structure, and brand mark placement."
  },

  // ── Event + Print ─────────────────────────────────────────────────────────
  {
    src:      "assets/images/portfolio/event-print/african-dance-class-flyer.jpg",
    name:     "African Dance Class — El Barrio",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Vibrant event flyer for Rev. Nafisa Sharriff's Summer African Dance Class Series in El Barrio. Kente-inspired border patterns, bold typography hierarchy, and a full-bleed action photo. Celebrate Culture. Move Your Body. Connect with Community."
  },
  {
    src:      "assets/images/portfolio/event-print/1st-responders2021-8.jpg",
    name:     "1st Responders — 2021",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer for a 1st Responders appreciation event in 2021. Design honors community service with bold, respectful typography and a clear visual hierarchy."
  },
  {
    src:      "assets/images/portfolio/event-print/2019MagBenefitConcert-2.jpg",
    name:     "MAG Benefit Concert — 2019",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Concert benefit flyer for MAG in 2019. Dynamic event design communicating community, culture, and live music with bold visual energy."
  },
  {
    src:      "assets/images/portfolio/event-print/A-day-of-service-2020-6.jpg",
    name:     "Day of Service — 2020",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer for a 2020 Day of Service initiative. Community-forward design with clear information hierarchy and a warm, inviting visual presence."
  },
  {
    src:      "assets/images/portfolio/event-print/Alfredo-Sauce-Card-front.jpg",
    name:     "Alfredo Sauce Recipe Card",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Branded recipe card for Alfredo Sauce. Custom print design that extends a culinary brand's identity into physical product packaging and collateral."
  },
  {
    src:      "assets/images/portfolio/event-print/Apple-Butter-Card-front.jpg",
    name:     "Apple Butter Recipe Card",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Branded recipe card for Apple Butter. Warm, inviting print design that translates a food brand's visual identity into a tactile, shareable format."
  },
  {
    src:      "assets/images/portfolio/event-print/Audiowolf-May19-2018-4.jpg",
    name:     "Audio Wolf — May 2018",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer for Audio Wolf in May 2018. High-energy design built for a music brand — bold type, dark palette, and a commanding visual presence."
  },
  {
    src:      "assets/images/portfolio/event-print/Beef-Tacos-Card-front.jpg",
    name:     "Beef Tacos Recipe Card",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Branded recipe card for Beef Tacos. Vibrant print design that brings food culture and brand identity together in a physical, shareable format."
  },
  {
    src:      "assets/images/portfolio/event-print/BlackHistory-2022-qr.jpg",
    name:     "Black History Month — 2022",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Black History Month promotional piece for 2022. Culturally grounded design with QR code integration — bridging print and digital engagement for community programming."
  },
  {
    src:      "assets/images/portfolio/event-print/Breathe-Fire.jpg",
    name:     "Breathe Fire",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer design for Breathe Fire. Intense, elemental visual energy — designed to stop the scroll and drive event attendance."
  },
  {
    src:      "assets/images/portfolio/event-print/Comedian-Pierre-Flyer-4x6-2021.jpg",
    name:     "Comedian Pierre — 2021",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "4×6 event flyer for Comedian Pierre in 2021. Bold personality-forward design built around the performer's brand — entertaining before the show even starts."
  },
  {
    src:      "assets/images/portfolio/event-print/Flik 2019 calendar_Page_01.jpg",
    name:     "Flik 2019 Calendar",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Custom branded calendar design for Flik, 2019. A year of consistent brand presence — designed for wall and desk placement with clean typographic structure."
  },
  {
    src:      "assets/images/portfolio/event-print/Kent-email-signature.jpg",
    name:     "Kent Email Signature",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Branded email signature design for Kent. Professional digital stationery that extends brand identity into every business communication."
  },
  {
    src:      "assets/images/portfolio/event-print/LDG_2012_7.jpg",
    name:     "LDG — 2012",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer design for LDG in 2012. Part of the early Moor Graphix catalog — demonstrating a consistent commitment to culture-forward print design."
  },
  {
    src:      "assets/images/portfolio/event-print/Listen_Rhonda_Page_1.jpg",
    name:     "Listen Rhonda — pg. 1",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Page 1 of the Listen Rhonda print design — a multi-page publication, program, or promotional piece with strong editorial layout and brand voice."
  },
  {
    src:      "assets/images/portfolio/event-print/Listen_Rhonda_Page_2.jpg",
    name:     "Listen Rhonda — pg. 2",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Page 2 of the Listen Rhonda print design. Continuation of a cohesive editorial layout — consistent typography, color, and visual storytelling across pages."
  },
  {
    src:      "assets/images/portfolio/event-print/Mag-House-Concert-Flyer-2019.jpg",
    name:     "MAG House Concert — 2019",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Event flyer for a MAG House Concert in 2019. Intimate, music-forward design that captures the warmth and energy of live performance culture."
  },
  {
    src:      "assets/images/portfolio/event-print/Peabo-Rhonda-Concert-Flyer-no-soro2.jpg",
    name:     "Peabo & Rhonda Concert",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Concert flyer for Peabo Bryson and Rhonda. Star-power design built for a legacy R&B event — bold, elegant, and built for buzz."
  },
  {
    src:      "assets/images/portfolio/event-print/received_1091859654986085.jpeg",
    name:     "Print Design — 01",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Custom print design piece from the Moor Graphix portfolio. Culture-rooted visual design built for real-world impact."
  },
  {
    src:      "assets/images/portfolio/event-print/received_1623964191287536.jpeg",
    name:     "Print Design — 02",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Custom print design piece from the Moor Graphix portfolio. Culture-rooted visual design built for real-world impact."
  },
  {
    src:      "assets/images/portfolio/event-print/TJFACT Marketing Flyer - Dec 2021-3_Page_1.jpg",
    name:     "TJFACT Marketing Flyer — Dec 2021",
    cat:      "Event Flyer",
    category: "event_print",
    desc:     "Marketing flyer for TJFACT, December 2021. Professional promotional design with strong information hierarchy — built to communicate, convert, and represent the brand with authority."
  },
  {
    src:      "assets/images/portfolio/event-print/TJFACT_Trifold Brochure - Nov 2021-2_Page_1.jpg",
    name:     "TJFACT Trifold Brochure — Nov 2021",
    cat:      "Print Design",
    category: "event_print",
    desc:     "Trifold brochure design for TJFACT, November 2021. Multi-panel print collateral with structured layout, brand-consistent typography, and clear sectioned content flow."
  },

  // ── Campaign ──────────────────────────────────────────────────────────────
  {
    src:      "assets/images/portfolio/campaign/parent-playbook-series.jpg",
    name:     "Parent Playbook Series",
    cat:      "Campaign Design",
    category: "campaign",
    desc:     "Full campaign design for the 2 Sports Moms Parent Playbook Series virtual event. Event banner, promotional graphics, and branded book mockup. Football field hero image with clean information hierarchy."
  },
  {
    src:      "assets/images/portfolio/campaign/harlem-directory.jpg",
    name:     "Harlem Business Directory",
    cat:      "Publication Design",
    category: "campaign",
    desc:     "10,000-copy shopping guide for UMEZ, BRISC, and the Harlem Business Alliance — featuring 68 Black-owned businesses across Harlem. Complete publication design, art direction, and 90% original photography by Moor Graphix. Distributed throughout Harlem and Manhattan's hotel and theater districts in 2001, before Google, Yelp, or social media existed.",
    link:     "cases/harlem-directory.html"
  },


  // ══════════════════════════════════════════════════════════════════════════
  // SERVICES HERO — slideshow in the services.html page hero
  // Folder: assets/images/services-hero/
  // ══════════════════════════════════════════════════════════════════════════

  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_01.jpg",
    name:     "NAMA Brand Blueprint — Cover",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Cover page of the NAMA Strategic Brand Blueprint — a complete visual identity document for the New Amsterdam Musical Association, Est. 1904, the oldest African-American musical organization in the United States."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_02.jpg",
    name:     "NAMA Brand Blueprint — Page 2",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 2 of the NAMA Strategic Brand Blueprint. Mission, vision, and brand positioning for the New Amsterdam Musical Association."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_03.jpg",
    name:     "NAMA Brand Blueprint — Page 3",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 3 of the NAMA Strategic Brand Blueprint. Heritage narrative and organizational identity documentation."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_04.jpg",
    name:     "NAMA Brand Blueprint — Page 4",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 4 of the NAMA Strategic Brand Blueprint. Logo system specifications — primary mark, alternates, clear space, and usage rules."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_05.jpg",
    name:     "NAMA Brand Blueprint — Page 5",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 5 of the NAMA Strategic Brand Blueprint. Logo do's and don'ts — protecting the visual integrity of the mark across all applications."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_06.jpg",
    name:     "NAMA Brand Blueprint — Page 6",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 6 of the NAMA Strategic Brand Blueprint. Brand color palette — primary and secondary colors with Hex, RGB, and CMYK values plus psychology notes."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_07.jpg",
    name:     "NAMA Brand Blueprint — Page 7",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 7 of the NAMA Strategic Brand Blueprint. Typography system — heading and body typeface pairings with usage hierarchy and rationale."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_08.jpg",
    name:     "NAMA Brand Blueprint — Page 8",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 8 of the NAMA Strategic Brand Blueprint. Brand voice and tone guidelines — key messaging pillars, approved language, and words to avoid."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_09.jpg",
    name:     "NAMA Brand Blueprint — Page 9",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 9 of the NAMA Strategic Brand Blueprint. Photography and visual style guide — mood, composition direction, and image selection criteria."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_10.jpg",
    name:     "NAMA Brand Blueprint — Page 10",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 10 of the NAMA Strategic Brand Blueprint. Brand applications — stationery system, event collateral, and print material standards."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_11.jpg",
    name:     "NAMA Brand Blueprint — Page 11",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 11 of the NAMA Strategic Brand Blueprint. Digital presence standards — website design language and social media profile specifications."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_12.jpg",
    name:     "NAMA Brand Blueprint — Page 12",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 12 of the NAMA Strategic Brand Blueprint. Social media content direction — platform-specific visual guidelines and content pillars."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_13.jpg",
    name:     "NAMA Brand Blueprint — Page 13",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 13 of the NAMA Strategic Brand Blueprint. Event and signage applications — banner, program, and environmental design standards."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_14.jpg",
    name:     "NAMA Brand Blueprint — Page 14",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Page 14 of the NAMA Strategic Brand Blueprint. Brand ecosystem roadmap — recommended next-phase activations and digital growth priorities."
  },
  {
    src:      "assets/images/services-hero/NAMA_Strategic_Brand_Blueprint_Page_15.jpg",
    name:     "NAMA Brand Blueprint — Page 15",
    cat:      "Brand Blueprint",
    category: "portfolio_slides",
    desc:     "Final page of the NAMA Strategic Brand Blueprint. Summary, deliverables checklist, and contact information for ongoing brand stewardship."
  }

];
