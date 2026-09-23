/**
 * BLOSSO FLOWER SHOP - CENTRALIZED STORE DATA & CONTENT
 */

const FLORAL_DATA = {
  products: [
    {
      id: "fp-01",
      name: "Elysian Rose & Peony Symphony",
      category: "Anniversary",
      price: 115.00,
      oldPrice: 135.00,
      rating: 4.9,
      reviewsCount: 142,
      badge: "Bestseller",
      badgeType: "gold",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Coral Charm Peonies, O'Hara Garden Roses, Ranunculus & Silver Dollar Eucalyptus",
      colorPalette: "blush",
      flowerType: "peonies",
      description: "An opulent expression of enduring affection. Handcrafted with prized French garden peonies, velvety Juliet roses, and aromatic eucalyptus, finished with our signature raw silk trailing ribbon."
    },
    {
      id: "fp-02",
      name: "White Eden Garden Cascades",
      category: "Wedding",
      price: 145.00,
      oldPrice: null,
      rating: 5.0,
      reviewsCount: 98,
      badge: "Signature",
      badgeType: "sage",
      image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Avalanche White Roses, Calla Lilies, Lisianthus, White Veronica & Italian Ruscus",
      colorPalette: "white",
      flowerType: "roses",
      description: "Pure botanical serenity. Featuring immaculate snow-white roses and sculptural calla lilies nestled against soft textures of white lisianthus and trailing greenery."
    },
    {
      id: "fp-03",
      name: "Sun-Drenched Tuscan Meadow",
      category: "Birthday",
      price: 88.00,
      oldPrice: 98.00,
      rating: 4.8,
      reviewsCount: 84,
      badge: "Seasonal",
      badgeType: "rose",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Golden Sunflowers, Chamomile, Apricot Spray Roses, Solidago & Craspedia",
      colorPalette: "coral",
      flowerType: "wildflowers",
      description: "Radiant, joyful blooms that bring instant sunshine into any room. A spirited mix of seasonal wildflowers inspired by Tuscan countryside mornings."
    },
    {
      id: "fp-04",
      name: "Velvet Twilight Burgundy Luxe",
      category: "Anniversary",
      price: 130.00,
      oldPrice: 150.00,
      rating: 4.9,
      reviewsCount: 112,
      badge: "Limited",
      badgeType: "dark",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Black Baccara Roses, Deep Wine Ranunculus, Dark Astrantia & Plum Foliage",
      colorPalette: "burgundy",
      flowerType: "roses",
      description: "Dramatic, intoxicating, and effortlessly luxurious. Deep wine and crimson stems artfully arranged for grand declarations and romantic evenings."
    },
    {
      id: "fp-05",
      name: "Pastel Dawn Hydrangea Cloud",
      category: "Congratulations",
      price: 95.00,
      oldPrice: null,
      rating: 4.8,
      reviewsCount: 76,
      badge: "Popular",
      badgeType: "sage",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Blue Cloud Hydrangeas, Sweet Pink Tulips, White Scabiosa & Dusty Miller",
      colorPalette: "blush",
      flowerType: "tulips",
      description: "A dreamy confection of pastel hues celebrating fresh milestones, promotions, and new beginnings with unmatched elegance."
    },
    {
      id: "fp-06",
      name: "Serenity White Lily & Orchid Sanctuary",
      category: "Sympathy",
      price: 120.00,
      oldPrice: null,
      rating: 5.0,
      reviewsCount: 65,
      badge: "Handcrafted",
      badgeType: "sage",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Casablanca Oriental Lilies, Phalaenopsis Orchids, White Freesia & Myrtle Leaves",
      colorPalette: "white",
      flowerType: "orchids",
      description: "A tender, respectful tribute crafted with fragrant white oriental lilies, delicate cascading orchids, and evergreen symbols of eternal remembrance."
    },
    {
      id: "fp-07",
      name: "Provence Lavender & Wild Thyme Gathering",
      category: "Birthday",
      price: 78.00,
      oldPrice: 88.00,
      rating: 4.7,
      reviewsCount: 53,
      badge: "Aromatic",
      badgeType: "rose",
      image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "French Dried Lavender, Ocean Song Lilac Roses, Eryngium Thistle & Olive Branch",
      colorPalette: "sage",
      flowerType: "wildflowers",
      description: "An invigorating sensory escape to the hills of Southern France, combining soothing lilac tones with calming herbal aromatics."
    },
    {
      id: "fp-08",
      name: "Royal Dutch Tulip Festival",
      category: "Congratulations",
      price: 85.00,
      oldPrice: 95.00,
      rating: 4.9,
      reviewsCount: 92,
      badge: "Seasonal",
      badgeType: "gold",
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Double Petal Parrot Tulips, Soft Apricot Tulips, Waxflower & Salal Stems",
      colorPalette: "coral",
      flowerType: "tulips",
      description: "Rare, textured Dutch parrot tulips that unfold gracefully day by day, creating a living work of botanical art in your home."
    },
    {
      id: "fp-09",
      name: "Grand Botanical Orchid Sovereign",
      category: "Wedding",
      price: 185.00,
      oldPrice: 210.00,
      rating: 5.0,
      reviewsCount: 41,
      badge: "Luxury",
      badgeType: "dark",
      image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Cascading White Cymbidium Orchids, Gardenia Blooms, Monstera Leaf & Glass Vase",
      colorPalette: "white",
      flowerType: "orchids",
      description: "A breathtaking architectural masterpiece designed for centerpiece focal points, gala dinners, and milestone wedding banquets."
    },
    {
      id: "fp-10",
      name: "Blushing Parisian Romance",
      category: "Anniversary",
      price: 105.00,
      oldPrice: 120.00,
      rating: 4.9,
      reviewsCount: 168,
      badge: "Bestseller",
      badgeType: "rose",
      image: "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Pink Mondial Roses, Sweet Alyssum, Astilbe & Seeded Eucalyptus",
      colorPalette: "blush",
      flowerType: "roses",
      description: "Inspired by Saint-Germain flower kiosks in springtime. Subtle dusty rose notes embraced by wispy feathery astilbe and lush greens."
    },
    {
      id: "fp-11",
      name: "Golden Hour Dahlia & Amber Glow",
      category: "Birthday",
      price: 92.00,
      oldPrice: null,
      rating: 4.8,
      reviewsCount: 61,
      badge: "Autumn",
      badgeType: "gold",
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "Café au Lait Dahlias, Butterscotch Carnations, Dried Wheat & Cotinus Leaves",
      colorPalette: "coral",
      flowerType: "peonies",
      description: "Rich honeyed tones and fluffy giant dahlias that capture the magical warmth of late afternoon golden hour."
    },
    {
      id: "fp-12",
      name: "Graceful Magnolia & White Peony Tribute",
      category: "Sympathy",
      price: 110.00,
      oldPrice: null,
      rating: 4.9,
      reviewsCount: 39,
      badge: "Gentle",
      badgeType: "sage",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80"
      ],
      stems: "White Garden Peonies, Magnolia Leaves, Snowberry Stems & Green Bell Thlaspi",
      colorPalette: "white",
      flowerType: "peonies",
      description: "Understated elegance and peaceful reflection. Created with delicate white petals and rich evergreen foliage to send comforting thoughts."
    }
  ],

  occasions: [
    {
      title: "Birthday Blooms",
      subtitle: "Joyful, vibrant celebratory stems",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      category: "Birthday"
    },
    {
      title: "Anniversary & Romance",
      subtitle: "Luxurious garden roses & peonies",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      category: "Anniversary"
    },
    {
      title: "Wedding & Celebrations",
      subtitle: "Bespoke bridal & reception florals",
      image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=600&q=80",
      category: "Wedding"
    },
    {
      title: "Sympathy & Comfort",
      subtitle: "Serene white & calming arrangements",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      category: "Sympathy"
    },
    {
      title: "Congratulations",
      subtitle: "Showstoppers for big milestones",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=80",
      category: "Congratulations"
    }
  ],

  testimonials: [
    {
      quote: "Blosso delivered the most breathtaking peony bouquet for our 10th anniversary. The presentation, the handwritten wax-sealed card, and the freshness that lasted over 10 days made it unforgettable.",
      name: "Eleanor & Marc Vance",
      occasion: "10th Anniversary Delivery",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "As an event planner, finding a florist with both impeccable artistry and reliable same-day logistics was a game changer. Blosso is our exclusive botanical partner.",
      name: "Sophia Kensington",
      occasion: "Luxury Event Director",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The White Eden Garden bouquet arrived looking even more majestic than the studio photographs. Chilled delivery and moisture wrap kept every single petal in flawless condition.",
      name: "Julian Delacroix",
      occasion: "Mother's Birthday Gift",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ],

  blogPosts: [
    {
      id: "blog-01",
      title: "The Art of English Garden Roses: 7 Secrets to Double Their Vase Life",
      category: "Flower Care",
      date: "August 18, 2026",
      readTime: "5 min read",
      author: "Camille Laurent, Master Florist",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      excerpt: "From the precise 45-degree underwater stem cut to optimal room humidity, discover our studio's professional protocols for keeping delicate garden roses pristine for up to two weeks."
    },
    {
      id: "blog-02",
      title: "How to Pick the Perfect Anniversary Bouquet by Milestone Year",
      category: "Gifting Guides",
      date: "August 10, 2026",
      readTime: "4 min read",
      author: "Henrietta Moore",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
      excerpt: "Victorian floriography and modern botanical styling meet: explore which signature blooms, colors, and textures best symbolize 1st, 5th, 10th, and 25th wedding anniversaries."
    },
    {
      id: "blog-03",
      title: "Drying & Preserving Wedding Peonies: A Step-by-Step Boutique Guide",
      category: "Floral Styling",
      date: "July 29, 2026",
      readTime: "6 min read",
      author: "Julian Chen, Senior Stylist",
      image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80",
      excerpt: "Preserve your cherished bridal memories forever with our silica-gel drying techniques and botanical shadowbox framing methods."
    },
    {
      id: "blog-04",
      title: "Pet-Safe Blooms: Beautiful Stems That Won't Harm Cats and Dogs",
      category: "Flower Care",
      date: "July 14, 2026",
      readTime: "4 min read",
      author: "Dr. Elena Rostova",
      image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80",
      excerpt: "A comprehensive veterinary and florist guide to safe flowers like Lisianthus, Roses, Sunflowers, and Orchids, and dangerous varieties to avoid."
    },
    {
      id: "blog-05",
      title: "Arranging Wildflowers with the Effortless French Countryside Look",
      category: "Floral Styling",
      date: "June 30, 2026",
      readTime: "5 min read",
      author: "Camille Laurent",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
      excerpt: "Embrace organic asymmetry, varied stem heights, and airy foliage pairings to create spontaneous, charming tabletop centerpieces."
    },
    {
      id: "blog-06",
      title: "The Victorian Meaning of Flowers: Secret Messages in Every Petal",
      category: "Behind The Stems",
      date: "June 18, 2026",
      readTime: "7 min read",
      author: "Henrietta Moore",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
      excerpt: "Uncover the rich historical language of floriography and learn how 19th-century lovers sent clandestine messages through careful petal selections."
    }
  ],

  team: [
    {
      name: "Camille Laurent",
      role: "Creative Director & Master Florist",
      bio: "Trained in Paris at the École des Fleuristes, Camille brings 16 years of luxury floral styling and organic botanical craftsmanship to Blosso.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      favFlower: "French Coral Peonies"
    },
    {
      name: "Julian Chen",
      role: "Head of Wedding & Event Floristry",
      bio: "With an architectural background, Julian specializes in grand floral installations, sculptural floral arches, and runway floral designs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      favFlower: "White Phalaenopsis Orchids"
    },
    {
      name: "Henrietta Moore",
      role: "Lead Botanical Sourcing Specialist",
      bio: "Henrietta works directly with certified eco-growers in Ecuador, Holland, and local organic farms to secure the world's freshest, fair-trade stems.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      favFlower: "Café au Lait Dahlias"
    }
  ]
};
