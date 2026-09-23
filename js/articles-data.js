/**
 * BLOSSO BOTANICAL GAZETTE - COMPLETE EDITORIAL ARTICLES DATABASE
 */

const BLOG_ARTICLES_DATA = {
  "blog-01": {
    id: "blog-01",
    title: "The Art of English Garden Roses: 7 Secrets to Double Their Vase Life",
    headlineEm: "7 Secrets to Double Their Vase Life",
    category: "Flower Care & Masterclass",
    categoryBadge: "badge-rose",
    date: "August 18, 2026",
    readTime: "6 min read",
    guildBadge: "🌿 Guild Verified Protocol",
    author: {
      name: "Camille Laurent",
      role: "Creative Director & Master Florist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
      bio: "Trained in Paris at the École des Fleuristes with 16 years of luxury floral styling. Camille curates Blosso's seasonal varieties and leads our sustainable cold-chain packaging research."
    },
    heroImage: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · English David Austin Garden Roses",
    toc: [
      { id: "anatomy", label: "1. Hydraulic Stem Anatomy" },
      { id: "step-by-step", label: "2. The 4-Step Conditioning Protocol" },
      { id: "styling-tips", label: "3. Placement & Atmosphere" },
      { id: "enemies", label: "4. Hidden Enemies of Vase Life" }
    ],
    introDropCap: "English garden roses are the undisputed royalty of the botanical realm. With their spiraling hundred-petal rosettes, intoxicating damask fragrances, and vintage blush undertones, they transform any room into an idyllic Cotswolds sanctuary. Yet, their voluptuous beauty is famously fleeting without proper floristry conditioning.",
    introSecondPara: "Unlike mass-produced commercial hybrid tea roses bred purely for stiff refrigeration, authentic English heritage roses possess tender vascular structures that require deliberate hydration techniques. When treated with artisanal care, their natural vase life can effortlessly expand from 4 days to over 12 to 14 days of radiant bloom.",
    sections: [
      {
        id: "anatomy",
        heading: "1. The Hydraulic Anatomy of a Garden Rose",
        body: "To keep garden roses vital, one must understand how stems drink. The xylem vessels running up the rose cane are microscopic capillary straws. When cut dry in the open air, an instantaneous micro-bubble of air enters the stem tip (an air embolism), permanently blocking water from ascending to the heavy petal crown and causing premature stem drooping."
      }
    ],
    pullQuote: {
      quote: "Flowers must be given room to breathe; compression and air bubbles are the death of floral vitality. Every cut must invite water in instantly.",
      author: "Camille Laurent, Co-Founder & Creative Director"
    },
    stepsHeading: "2. The 4-Step Boutique Conditioning Protocol",
    steps: [
      {
        num: "01",
        title: "The Underwater 45-Degree Clean Shear",
        desc: "Submerge the bottom 3 inches of stems in tepid water. Using sharp floral shears, trim 1.5 inches at a sharp 45-degree angle to maximize vascular intake."
      },
      {
        num: "02",
        title: "Zero Submerged Foliage (Bacterial Prevention)",
        desc: "Gently strip all leaves from the lower two-thirds of the cane. Foliage submerged beneath the waterline decomposes within 24 hours, releasing bacterial biofilm that clogs stems."
      },
      {
        num: "03",
        title: "The Ice-Water Shock Revival Technique",
        desc: "If stems experience travel fatigue, re-cut underwater and place immediately into deep ice-chilled water in a cool dark room for 3 hours to force rapid upward hydraulic uptake."
      },
      {
        num: "04",
        title: "Nutrient Water Chemistry & 48-Hour Refreshes",
        desc: "Dissolve one packet of Blosso organic flower nourishment into clean filtered water. Change the vase water entirely every 48 hours and re-trim 0.25 inches off each stem."
      }
    ],
    proTip: {
      title: "Master Florist Secret: Night Chilling",
      desc: "During summer heatwaves, move your vase arrangement to the coolest room in your home overnight. Lowering nighttime ambient temperature by 8°F cuts floral respiration rates in half."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Placement & Atmospheric Etiquette",
    extraBody: "Even perfectly conditioned garden roses will wither prematurely if positioned in unfavorable atmospheric micro-climates within your home.",
    enemiesHeading: "The Three Hidden Enemies of Rose Longevity:",
    enemiesList: [
      "Direct Sunlight & Radiant Heat: Keep bouquets out of direct window rays and at least 6 feet away from heating vents.",
      "The Ripening Fruit Bowl Trap (Ethylene Gas): Never place fresh roses adjacent to ripening bananas or apples, which emit petal-shedding ethylene gas.",
      "Ceiling Fan Turbulence: Strong constant airflow evaporates moisture from petals faster than stems can draw water from the vase."
    ],
    tags: ["#GardenRoses", "#VaseLife", "#FlowerCare", "#DavidAustin", "#FloristryMasterclass"],
    featuredProducts: ["fp-01", "fp-04"]
  },

  "blog-02": {
    id: "blog-02",
    title: "How to Pick the Perfect Anniversary Bouquet by Milestone Year",
    headlineEm: "Symbolism, Palettes & Milestone Traditions",
    category: "Gifting Guides & Etiquette",
    categoryBadge: "badge-rose",
    date: "August 10, 2026",
    readTime: "4 min read",
    guildBadge: "💍 Certified Romance Floriography",
    author: {
      name: "Henrietta Moore",
      role: "Lead Botanical Sourcing Specialist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=180&q=80",
      bio: "Henrietta specializes in heirloom floral varieties, Victorian floriography codes, and direct ethical partnerships with organic European and South American flower growers."
    },
    heroImage: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · Heirloom Velvet Twilight Anniversary Bouquet",
    toc: [
      { id: "milestones", label: "1. Key Milestone Symbolism" },
      { id: "color-codes", label: "2. Color Palettes for Romance" },
      { id: "personal-touch", label: "3. Adding Meaning with Fragrance" },
      { id: "message-tips", label: "4. Handwritten Card Etiquette" }
    ],
    introDropCap: "Wedding anniversaries represent chapters in an evolving love story. While diamond rings and paper stationery have their traditional places, flowers speak a timeless emotional dialect that transforms celebration into an unforgettable sensory memory.",
    introSecondPara: "Drawing from 19th-century Victorian floriography and contemporary luxury floristry, every wedding anniversary milestone aligns with specific botanical meanings, fragrances, and architectural silhouettes.",
    sections: [
      {
        id: "milestones",
        heading: "1. The Essential Anniversary Milestone Stems",
        body: "Each landmark year carries rich botanical heritage designed to celebrate the resilience and tenderness of long-term companionship."
      }
    ],
    pullQuote: {
      quote: "A thoughtful anniversary bouquet is never generic. It captures the shared seasons, quiet triumphs, and romantic memories of two people in living color.",
      author: "Henrietta Moore, Botanical Sourcing Lead"
    },
    stepsHeading: "2. Milestone Breakdown: 1st to 25th Years",
    steps: [
      {
        num: "01",
        title: "1st Anniversary: Carnations & Delicate Ranunculus",
        desc: "Symbolizes pure youthful passion, fresh beginnings, and the sweet optimism of the newlywed chapter."
      },
      {
        num: "05",
        title: "5th Anniversary: Freesia & Wild Chamomile",
        desc: "Freesias represent enduring trust and graceful companionship that has weathered early transitions."
      },
      {
        num: "10",
        title: "10th Anniversary: French Daffodils & Velvet Peonies",
        desc: "A full decade celebrated with luxurious, multi-layered petals signaling noble devotion and joyful prosperity."
      },
      {
        num: "25",
        title: "25th Anniversary: Silver Dollar Eucalyptus & Royal Garden Roses",
        desc: "The Silver Jubilee calls for timeless grandeur: deep wine roses paired with frosted botanical eucalyptus."
      }
    ],
    proTip: {
      title: "Anniversary Etiquette Tip: Scent Memory",
      desc: "If you remember the dominant flower in your wedding bouquet or bridal arch (such as sweet peas or gardenias), include even a single stem of that variety in your anniversary arrangement to trigger profound emotional nostalgia."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Writing the Perfect Calligraphy Card",
    extraBody: "Every Blosso anniversary bouquet includes a complimentary 300gsm deckled-edge cotton card sealed with antique gold wax. Keep your message genuine, specific, and focused on gratitude for shared time.",
    enemiesHeading: "Three Words to Elevate Your Anniversary Card:",
    enemiesList: [
      "Reference a Specific Memory: 'Remember our sunrise walk in Provence...' bridges the bouquet with personal history.",
      "Acknowledge Growth: Celebrate how your partnership has deepened over the past 365 days.",
      "Look Forward: End with an intimate promise for the chapters ahead."
    ],
    tags: ["#AnniversaryGifts", "#RomanticFlorals", "#MilestoneFlowers", "#Floriography", "#LuxuryGifting"],
    featuredProducts: ["fp-04", "fp-01"]
  },

  "blog-03": {
    id: "blog-03",
    title: "Drying & Preserving Wedding Peonies: Step-by-Step Boutique Guide",
    headlineEm: "Silica-Gel Crystals & Shadowbox Techniques",
    category: "Floral Styling & Preservation",
    categoryBadge: "badge-sage",
    date: "July 29, 2026",
    readTime: "6 min read",
    guildBadge: "🕊️ Heirloom Bridal Preservation",
    author: {
      name: "Julian Chen",
      role: "Head of Wedding & Event Floristry",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
      bio: "With an architectural design background, Julian creates grand botanical installations, ceremonial bridal arches, and specialized heirloom botanical preservation techniques."
    },
    heroImage: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · Preserved French Coral Peonies in Archival Glass",
    toc: [
      { id: "science", label: "1. The Science of Peony Preservation" },
      { id: "silica-guide", label: "2. The Silica-Gel Burial Protocol" },
      { id: "framing", label: "3. Archival Shadowbox Framing" },
      { id: "care", label: "4. Protecting from Humidity & Light" }
    ],
    introDropCap: "Peonies are among the most celebrated wedding flowers in history, yet their lush petals contain over 90% water content. Traditional upside-down hanging causes peony blooms to shrivel, brown, and lose their majestic architectural volume within days.",
    introSecondPara: "By utilizing micro-crystalline silica gel desiccant, master florists can extract moisture in under 7 days while locking in 100% of the bloom's natural pastel pigmentation and delicate sculptural form for decades to come.",
    sections: [
      {
        id: "science",
        heading: "1. Why Traditional Air-Drying Fails Peonies",
        body: "Peonies possess hundreds of ultra-fine petals layered tightly around a dense moisture core. Air-drying allows gravity and ambient humidity to collapse these layers before water can evaporate, causing petal rotting and discoloration. Silica-gel crystals support every individual petal while gently absorbing moisture from both sides simultaneously."
      }
    ],
    pullQuote: {
      quote: "Preserving a bridal bouquet is not about stopping time; it is about honoring a sacred milestone so its elegance remains a living presence in your home.",
      author: "Julian Chen, Head of Wedding Floristry"
    },
    stepsHeading: "2. Step-by-Step Silica-Gel Preservation",
    steps: [
      {
        num: "01",
        title: "Harvest at Peak Bloom (Not Past Maturity)",
        desc: "Select peony blooms when they are 80% to 90% open, before bottom petals begin browning or falling loose."
      },
      {
        num: "02",
        title: "The Base Crystal Bed (1.5 Inches)",
        desc: "Pour fine-grade silica gel crystals into an airtight container to create a gentle, supportive foundation layer."
      },
      {
        num: "03",
        title: "Gentle Sifting Between Petal Layers",
        desc: "Place the peony face-up and slowly sprinkle silica crystals over the top, allowing crystals to gently separate every layer without crushing."
      },
      {
        num: "04",
        title: "Hermetic Seal for 5 to 7 Days",
        desc: "Seal the lid tightly with masking tape and store in a cool dry closet. Carefully excavate with a soft watercolor brush after one week."
      }
    ],
    proTip: {
      title: "Boutique Framing Tip: UV-Protective Glass",
      desc: "When framing your dried wedding peonies in a shadowbox, always request 99% UV-filtering museum acrylic or glass. Regular glass allows ambient sunlight to bleach pink and coral tones within two years."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Creating an Archival Botanical Shadowbox",
    extraBody: "Mount your preserved peonies alongside wedding stationery, silk ribbon swatches, and handwritten vow cards using acid-free archival florist adhesive.",
    enemiesHeading: "Golden Rules for Long-Term Display:",
    enemiesList: [
      "Avoid Bathroom or Kitchen Humidity: Moisture re-activates mold spores in dried botanical tissue.",
      "Keep Away from Direct Sunbeams: UV rays degrade natural floral pigments.",
      "Dust with Compressed Air or Soft Feather: Never wipe dried petals with a wet cloth."
    ],
    tags: ["#PeonyPreservation", "#BridalBouquet", "#DriedFlowers", "#WeddingMemories", "#FloralDIY"],
    featuredProducts: ["fp-02", "fp-01"]
  },

  "blog-04": {
    id: "blog-04",
    title: "Pet-Safe Blooms: Beautiful Stems That Won't Harm Cats and Dogs",
    headlineEm: "Florist & Veterinary Safety Guide",
    category: "Flower Care & Pet Safety",
    categoryBadge: "badge-sage",
    date: "July 14, 2026",
    readTime: "4 min read",
    guildBadge: "🐾 100% Pet Non-Toxic Verified",
    author: {
      name: "Dr. Elena Rostova & Camille Laurent",
      role: "Veterinary Botanical Consultant & Florist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
      bio: "A collaborative guide between our master floristry team and certified veterinary toxicologists to ensure peaceful, pet-friendly floral living."
    },
    heroImage: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · Pet-Safe Lisianthus, Orchids & Sunflowers",
    toc: [
      { id: "safe-list", label: "1. The 100% Safe Stems List" },
      { id: "toxic-dangers", label: "2. The High-Risk Stems to Avoid" },
      { id: "styling", label: "3. Pet-Safe Vase Placement" },
      { id: "emergency", label: "4. What to Do in Emergencies" }
    ],
    introDropCap: "Bringing fresh, aromatic floral arrangements into your home should never come at the expense of your beloved companion's health. For cat and dog parents, understanding botanical toxicity is essential when selecting living stems.",
    introSecondPara: "While certain flowers like True Lilies pose extreme feline toxicity, nature offers an abundance of spectacular, 100% non-toxic varieties that allow you to enjoy luxurious floral design with complete peace of mind.",
    sections: [
      {
        id: "safe-list",
        heading: "1. Certified 100% Pet-Safe Stems",
        body: "These varieties can be safely enjoyed in homes with curious cats and playful dogs with zero systemic toxicity risks."
      }
    ],
    pullQuote: {
      quote: "You should never have to choose between a home filled with exquisite blooms and the well-being of your beloved pets. Safe floristry is thoughtful floristry.",
      author: "Dr. Elena Rostova, Veterinary Botanical Specialist"
    },
    stepsHeading: "2. The Top 4 Pet-Safe Floral Stars",
    steps: [
      {
        num: "01",
        title: "Lisianthus (Eustoma)",
        desc: "Looks identical to ruffled garden roses with double-petaled elegance, but is completely harmless to both cats and dogs."
      },
      {
        num: "02",
        title: "Phalaenopsis & Cymbidium Orchids",
        desc: "Sculptural, long-lasting luxury blooms that are non-toxic and non-irritating to companion animals."
      },
      {
        num: "03",
        title: "Golden Sunflowers & Chamomile",
        desc: "Bright, cheerful meadow flowers that bring vibrant warmth without any dangerous essential oil residues."
      },
      {
        num: "04",
        title: "Snapdragons, Freesias & Waxflowers",
        desc: "Delightful architectural spikes and sweet aromatic blossoms that are non-hazardous if gently brushed or sniffed."
      }
    ],
    proTip: {
      title: "Critical Warning: The True Lily Danger",
      desc: "All species of true lilies (Asiatic, Stargazer, Casablanca, Easter Lilies) are severely nephrotoxic to cats. Even a few grains of fallen pollen groomed from a cat's paw can cause acute kidney failure. Blosso offers 100% Lily-Free custom filter tags on our Products page."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Safe Floral Living Practices",
    extraBody: "Use heavy-bottom ceramic or stoneware vases that curious paws cannot easily tip over, and avoid toxic flower food additives containing heavy metals.",
    enemiesHeading: "Toxic Plants to Strictly Avoid Around Pets:",
    enemiesList: [
      "True Lilies & Daylilies (Fatal to felines)",
      "Autumn Crocus & Lily of the Valley",
      "Foxgloves & Oleander (Cardiac glycosides)",
      "Tulip & Hyacinth Bulbs (Gastrointestinal irritants if chewed)"
    ],
    tags: ["#PetSafeFlowers", "#CatSafeBlooms", "#DogFriendlyPlants", "#VeterinaryGuide", "#SafeFloristry"],
    featuredProducts: ["fp-03", "fp-05"]
  },

  "blog-05": {
    id: "blog-05",
    title: "Arranging Wildflowers with the Effortless French Countryside Look",
    headlineEm: "Organic Asymmetry & Meadow Architecture",
    category: "Floral Styling & Design",
    categoryBadge: "badge-rose",
    date: "June 30, 2026",
    readTime: "5 min read",
    guildBadge: "🎨 Provençal Boutique Styling",
    author: {
      name: "Camille Laurent",
      role: "Creative Director & Master Florist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
      bio: "Trained in Paris at the École des Fleuristes with 16 years of luxury floral styling. Camille champions effortless French naturalism and loose, breathing floral structures."
    },
    heroImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · Sun-Drenched Tuscan Meadow Arrangement",
    toc: [
      { id: "philosophy", label: "1. The Naturalist Philosophy" },
      { id: "layering", label: "2. The 3-Tier Layering System" },
      { id: "vessel", label: "3. Vessel Selection: Stoneware vs Glass" },
      { id: "movement", label: "4. Creating Organic Botanical Movement" }
    ],
    introDropCap: "The French countryside aesthetic has captivated designers for centuries because it rejects rigid geometric symmetry in favor of spontaneous, organic storytelling. It evokes the feeling of strolling through a sun-drenched Provence pasture at dawn, gathering stems in an apron basket.",
    introSecondPara: "Creating that 'effortlessly gathered' look actually relies on precise floristry mechanics: varied stem heights, negative breathing room, and intentional structural foliage scaffolding that lets delicate flower heads nod naturally in the breeze.",
    sections: [
      {
        id: "philosophy",
        heading: "1. The 'Jardin Naturel' Arrangement Philosophy",
        body: "Rather than forcing stems into a tight, dense sphere, French naturalist floristry honors each stem's innate curvature. A bent stem is not a flaw—it is a sculptural design opportunity that creates dynamic visual tension."
      }
    ],
    pullQuote: {
      quote: "Do not fight the curve of a stem. Let it bend, let it reach for the light as it did in the meadow. Perfection in floristry is found in natural irregularity.",
      author: "Camille Laurent, Creative Director"
    },
    stepsHeading: "2. The 3-Tier Layering Method",
    steps: [
      {
        num: "01",
        title: "The Foliage Scaffold (Foundation)",
        desc: "Begin with airy eucalyptus, wild olive branches, or raspberry foliage. Interlock stems to create a natural green grid inside the vase mouth."
      },
      {
        num: "02",
        title: "Secondary Textural 'Filler' Blooms",
        desc: "Weave in chamomile, astrantia, spray roses, and solidago at staggered heights to establish depth and multi-dimensional shadows."
      },
      {
        num: "03",
        title: "Hero Focal Stems",
        desc: "Place 3 to 5 larger focal blooms (such as French peonies or David Austin roses) off-center at varying depths."
      },
      {
        num: "04",
        title: "Floating 'Dancers' (High Accent Stems)",
        desc: "Elevate 2 to 3 delicate stems (cosmos, butterfly ranunculus, or scabiosa) 3 inches above the main canopy to create whimsical vertical movement."
      }
    ],
    proTip: {
      title: "Styling Tip: Antique Glazed Stoneware",
      desc: "French meadow flowers look infinitely more authentic when styled in rustic, matte terracotta, ribbed cream ceramics, or vintage glass carafes rather than polished modern chrome or mirrored vessels."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Maintaining Airy Negative Space",
    extraBody: "Always leave visible gaps between petal groupings. If your arrangement looks like a dense carpet of flowers, remove 20% of the stems to allow light to filter through the vase.",
    enemiesHeading: "Common Wildflower Mistakes to Avoid:",
    enemiesList: [
      "Cutting all stems to uniform length (Destroys organic depth)",
      "Crowding the vase neck (Blocks oxygen and crushes delicate stems)",
      "Overly formal floral foam (Limits water uptake and looks rigid)"
    ],
    tags: ["#FrenchFloristry", "#Wildflowers", "#TabletopDecor", "#EffortlessStyle", "#ProvencalLiving"],
    featuredProducts: ["fp-03", "fp-01"]
  },

  "blog-06": {
    id: "blog-06",
    title: "The Secret Language of Flowers: Clandestine Victorian Floriography",
    headlineEm: "Victorian Floriography & Historical Petal Codes",
    category: "Behind The Stems & History",
    categoryBadge: "badge-gold",
    date: "June 18, 2026",
    readTime: "7 min read",
    guildBadge: "📖 Historical Floristry Archives",
    author: {
      name: "Henrietta Moore",
      role: "Lead Botanical Sourcing Specialist & Historian",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=180&q=80",
      bio: "Henrietta curates Blosso's archival botanical heritage, studying 19th-century European floriography manuscripts and antique botanical illustration collections."
    },
    heroImage: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80",
    heroCaption: "Photography © Blosso Boutique · Archival Victorian Floriography Stems",
    toc: [
      { id: "origins", label: "1. The Origins of Floriography" },
      { id: "dictionary", label: "2. The Secret Petal Dictionary" },
      { id: "tussie-mussie", label: "3. The Art of the 'Tussie-Mussie'" },
      { id: "modern-revival", label: "4. Contemporary Symbolic Floristry" }
    ],
    introDropCap: "In 19th-century Victorian society, strict social etiquette and rigid decorum made spoken declarations of romantic passion, jealousy, or clandestine loyalty nearly impossible. In response, lovers turned to floriography—a complex, silent cryptographic code transmitted entirely through floral bouquets.",
    introSecondPara: "Every flower variety, leaf orientation, ribbon tying method, and color nuance communicated an exact psychological message. Receiving a bouquet in the right hand meant 'Yes', while accepting with the left hand communicated polite rejection.",
    sections: [
      {
        id: "origins",
        heading: "1. The Ottoman Origins of the Flower Code",
        body: "Floriography was first documented in Europe by Lady Mary Wortley Montagu in 1718, who observed Turkish 'selam' rhyme games in Istanbul. By the Victorian era, illustrated floral dictionaries became the definitive bedside guide for courtiers across London and Paris."
      }
    ],
    pullQuote: {
      quote: "In a world of guarded words and social decorum, flowers became the ultimate unwritten love letters—carrying promises that could never be spoken aloud.",
      author: "Henrietta Moore, Botanical Historian"
    },
    stepsHeading: "2. Key Victorian Flower Meanings",
    steps: [
      {
        num: "01",
        title: "Burgundy Rose: Unconscious, Irrevocable Passion",
        desc: "Signaled deeper, more mysterious devotion than standard red roses, often sent in secret evening deliveries."
      },
      {
        num: "02",
        title: "White Lilies: Majesty & Purity of Intent",
        desc: "Communicated honorable, unblemished admiration and high courtly esteem."
      },
      {
        num: "03",
        title: "French Coral Peonies: Compassion & Protective Devotion",
        desc: "Represented prosperity, deep emotional sanctuary, and a promise to guard a lover's happiness."
      },
      {
        num: "04",
        title: "Myrtle & Ivy: True Conjugal Fidelity",
        desc: "Woven into royal bridal bouquets to signify unbreakable marital bonds."
      }
    ],
    proTip: {
      title: "Historical Fact: The Tussie-Mussie Nosegay",
      desc: "Victorian ladies carried miniature, tightly bound fragrant bouquets called 'Tussie-Mussies' held in silver filigree cones. The specific combination of rosemary (remembrance), lavender (devotion), and roses (love) was customized for every ball and salon."
    },
    splitImages: [
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80"
    ],
    extraHeading: "3. Bringing Floriography into Modern Gifting",
    extraBody: "At Blosso, we continue this noble heritage by including Victorian floriography notes on our bespoke calligraphy cards, allowing every bouquet recipient to decode the secret symbolism behind their flowers.",
    enemiesHeading: "Subtle Historical Floriography Nuances:",
    enemiesList: [
      "Flowers presented upside-down meant the exact opposite of their standard meaning.",
      "A ribbon tied to the left side pertained to the sender; tied to the right, to the recipient.",
      "A withered stem sent alone communicated broken promises."
    ],
    tags: ["#Floriography", "#FlowerHistory", "#VictorianTradition", "#SecretMeanings", "#BotanicalStories"],
    featuredProducts: ["fp-04", "fp-02"]
  }
};
