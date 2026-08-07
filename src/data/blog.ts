export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  author: string;
  keywords: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-wedding-locations-kerala",
    title: "The 10 Best Wedding Locations in Kerala for 2026",
    excerpt:
      "From Munnar's misty tea estates to Malabar heritage homes — the definitive guide to Kerala's most beautiful wedding venues and shoot locations.",
    category: "Locations",
    date: "2026-06-12",
    readTime: "6 min read",
    cover: "1520854221256-17451cc331bf",
    author: "Manu Manayath",
    keywords: ["best wedding locations kerala", "kerala wedding venues", "destination wedding kerala", "munnar wedding"],
    sections: [
      {
        paragraphs: [
          "Kerala is arguably India's most photogenic wedding destination — a thin strip of backwaters, tea estates, beaches and heritage that gives wedding photographers an embarrassment of backdrops. After 850+ weddings across all 14 districts, these are the locations we return to most often.",
        ],
      },
      {
        heading: "1. Munnar — the eternal favourite",
        paragraphs: [
          "Mist rolling through endless tea rows at 1,600 metres. Munnar tops every list for pre-wedding and save-the-date shoots. Book locations like Kolukkumalai (the world's highest tea estate) early, and plan for 6 AM starts — the mist burns off by 9.",
        ],
      },
      {
        heading: "2. Thalassery & Kannur — Malabar heritage",
        paragraphs: [
          "Our home turf. Grand heritage mansions, the historic Thalassery fort, and the famous Theyyam culture make North Malabar a goldmine for couples who want tradition with cinematic drama.",
        ],
      },
      {
        heading: "3–10. The rest of the dream list",
        list: [
          "Alleppey backwaters — houseboat vows at sunset",
          "Wayanad — waterfalls, caves and organic farms",
          "Vagamon — rolling meadows and pine forests",
          "Varkala — cliff-top beach portraits",
          "Fort Kochi — colonial streets and urban concepts",
          "Kumarakom — lake resorts and bird sanctuaries",
          "Thekkady — spice plantations and Periyar",
          "Bekal — the majestic Bekal fort on the shore",
        ],
      },
      {
        heading: "Planning your venue",
        paragraphs: [
          "Match the location to your culture and season. Hindu temple weddings pair beautifully with Thrissur's temples; Christian ceremonies shine in Kochi and Kottayam churches; Muslim weddings in Malabar love luxury resorts with courtyard stages. Whatever you choose, scout with your photographer — we include location scouting in every package.",
        ],
      },
    ],
  },
  {
    slug: "top-save-the-date-ideas",
    title: "Top Save The Date Ideas for Kerala Couples",
    excerpt:
      "Backwater cruises, tea estate walks, theyyam masks — creative save-the-date concepts that feel authentically Kerala.",
    category: "Save The Date",
    date: "2026-05-28",
    readTime: "5 min read",
    cover: "1532712938310-34cb3982ef74",
    author: "Roshni P.",
    keywords: ["save the date kerala", "pre wedding shoot ideas", "kerala couple shoot", "save the date film"],
    sections: [
      {
        paragraphs: [
          "Save-the-date shoots have evolved from a single photo into full cinematic couple films. In Kerala, the best concepts borrow from the landscape itself — here are our most-requested ideas.",
        ],
      },
      {
        heading: "Backwaters at golden hour",
        paragraphs: [
          "A traditional kettuvallam houseboat, a trailing wake, and the sun melting into the water. Shoot at dawn for glassy reflections or dusk for the golden glow. Bring two outfits — one casual, one formal.",
        ],
      },
      {
        heading: "Tea estate walks in Munnar",
        paragraphs: [
          "Pastel sweaters, monsoon umbrellas and endless green. The tea plantation look works year-round and photographs like a film still. Add a vintage umbrella and you have the classic Kerala save-the-date.",
        ],
      },
      {
        heading: "More ideas couples love",
        list: [
          "Theyyam & ritual masks for a bold cultural statement",
          "Kathakali makeup session — bold, artistic, unforgettable",
          "Beach barefoot portraits at Varkala or Bekal",
          "Urban concepts through Fort Kochi's streets",
          "Waterfall frames in Wayanad for the adventurous",
          "Heritage mansion shoot in a vintage Thalassery home",
        ],
      },
      {
        paragraphs: [
          "Whatever you choose, our team scouts the location, plans the golden hour and handles permits. Your only job is to laugh, hold hands and look at each other — the camera does the rest.",
        ],
      },
    ],
  },
  {
    slug: "wedding-photography-tips",
    title: "10 Wedding Photography Tips Every Kerala Couple Should Know",
    excerpt:
      "Pose naturally, plan your light, trust your timeline — practical advice from a photographer who has shot 850+ Kerala weddings.",
    category: "Tips",
    date: "2026-05-10",
    readTime: "7 min read",
    cover: "1519741497674-611481863552",
    author: "Manu Manayath",
    keywords: ["wedding photography tips", "kerala wedding photos", "wedding photo poses", "how to pose for wedding photos"],
    sections: [
      {
        paragraphs: [
          "Great wedding photos are 20% camera and 80% preparation. After more than a decade photographing Kerala weddings, here are the ten things I wish every couple knew before their big day.",
        ],
      },
      {
        heading: "1–5. Before the day",
        list: [
          "Book early — Kerala's season (Nov–Mar) goes 6–12 months out",
          "Share a mood board — your favourite shots tell us your taste",
          "Choose a coordinator — you shouldn't be managing vendors on the day",
          "Plan light, not just logistics — ask your photographer for a timeline",
          "Trust tradition — the most authentic frames come from real rituals",
        ],
      },
      {
        heading: "6–10. On the day",
        list: [
          "Breathe — a nervous smile photographs differently from a real one",
          "Slow down rituals — don't rush the mangalsutra or minnu kettu for guests",
          "Give us 15 quiet minutes alone — the couple portraits are the keepsakes",
          "Let candid happen — some of the best frames are the ones you forget",
          "Eat! Haldi and mehendi mornings run long — energy shows in photos",
        ],
      },
      {
        paragraphs: [
          "The secret of every frame you'll love is the same: real emotion, good light, and a photographer who knows Kerala's rituals well enough to disappear into them.",
        ],
      },
    ],
  },
  {
    slug: "how-to-plan-a-kerala-wedding",
    title: "How to Plan a Kerala Wedding: A Complete Guide",
    excerpt:
      "From muhurtham dates to sadhya catering — a step-by-step planning timeline for Hindu, Christian and Muslim weddings in Kerala.",
    category: "Planning",
    date: "2026-04-22",
    readTime: "9 min read",
    cover: "1515934751635-c81c6bc9a2d8",
    author: "Roshni P.",
    keywords: ["how to plan a kerala wedding", "kerala wedding planning", "kerala wedding checklist", "planning kerala wedding"],
    sections: [
      {
        paragraphs: [
          "Kerala weddings are multi-day productions — rituals, feast, film and fashion all rolled into one. Whether you're planning a Hindu, Christian or Muslim ceremony, a clear timeline keeps the joy in and the stress out.",
        ],
      },
      {
        heading: "12–9 months out",
        paragraphs: [
          "Fix the date (with muhurtham or church availability), book the venue and secure your photographer and caterer. This is also the moment to decide the budget split between decor, food, attire and photography — and to protect it.",
        ],
      },
      {
        heading: "6–3 months out",
        paragraphs: [
          "Book the film & drone team, choose outfits, order jewellery, and plan your save-the-date shoot around Kerala's seasons. Send invitations early — families travel from across the world for Kerala weddings.",
        ],
      },
      {
        heading: "The final month",
        list: [
          "Confirm vendors and share the day-wise ritual timeline",
          "Do a venue walkthrough with your photographer",
          "Arrange guest seating and sadhya seating counts",
          "Pack an emergency kit — safety pins, thread, hydration",
          "Plan the couple's quiet portrait window",
        ],
      },
      {
        paragraphs: [
          "And on the day itself — delegate everything to your coordinator and simply be present. The rituals will carry you; your only job is to feel them. That's when the photographs write themselves.",
        ],
      },
    ],
  },
  {
    slug: "monsoon-wedding-guide",
    title: "The Monsoon Wedding Guide: Shooting in Kerala's Rain",
    excerpt:
      "June to September is wedding season in Kerala for good reason. Here's how we turn rain, mist and cloudy light into the most romantic photographs.",
    category: "Seasons",
    date: "2026-04-05",
    readTime: "5 min read",
    cover: "1537633552985-df8429e8048b",
    author: "Manu Manayath",
    keywords: ["monsoon wedding kerala", "rainy wedding photography", "kerala monsoon wedding", "rain wedding photos"],
    sections: [
      {
        paragraphs: [
          "Every June, we get the same nervous call: 'Our date falls in monsoon — will the photos be ruined?' The answer is almost always the opposite. Cloudy skies are nature's softbox, and rain adds a romance that sunshine simply cannot.",
        ],
      },
      {
        heading: "Why monsoon light is a gift",
        paragraphs: [
          "Overcast light is diffused, even and flattering to every skin tone — no harsh shadows under the eyes, no squinting. Greens become impossibly saturated, mist adds depth, and puddles become mirrors. Half of our studio's most-awarded frames were shot in rain.",
        ],
      },
      {
        heading: "Our monsoon playbook",
        list: [
          "Weather-proof dual camera bodies and sealed lenses",
          "Transparent umbrellas — the signature monsoon portrait",
          "Indoor ritual coverage planned around weather windows",
          "Backup decor and locations for outdoor functions",
          "Embrace it — rain-in-the-frame shots are often the favourites",
        ],
      },
      {
        paragraphs: [
          "Kerala's monsoon weddings come with their own blessing: dates are easier to book, venues more available, and the whole celebration feels cozier. Bring your umbrella, trust the plan, and let the rain make you famous.",
        ],
      },
    ],
  },
  {
    slug: "christian-wedding-traditions",
    title: "Christian Wedding Traditions in Kerala Explained",
    excerpt:
      "Minnu Kettu, choir blessings, the walk down the aisle — the beautiful rituals of a Kerala Christian wedding, explained by photographers who shoot them weekly.",
    category: "Culture",
    date: "2026-03-18",
    readTime: "6 min read",
    cover: "1532712938310-34cb3982ef74",
    author: "Manu Manayath",
    keywords: ["christian wedding kerala", "kerala christian wedding traditions", "minnu kettu", "syrian christian wedding"],
    sections: [
      {
        paragraphs: [
          "Kerala's Christian weddings — especially among the Syrian Christian communities of Kochi, Kottayam and Thrissur — are among the world's oldest continuous wedding traditions. Understanding the rituals is the first step to photographing them well.",
        ],
      },
      {
        heading: "The Minnu Kettu",
        paragraphs: [
          "The thali (minnu) is tied around the bride's neck by the groom, accompanied by the priest's blessings. It is the single most emotional moment of the day — the moment two families become one. We always position two cameras for it: one wide, one close.",
        ],
      },
      {
        heading: "Other beloved rituals",
        list: [
          "The procession — the bride and groom walk down the aisle together",
          "Choir & hymns — music that fills the old churches with light",
          "The veil lifting — the 'first look' of the married couple",
          "Rice & rose petal blessings by both families",
          "The reception entrance — trumpets, cheers and confetti",
          "Departure sparklers — our favourite final frame",
        ],
      },
      {
        paragraphs: [
          "A Kerala Christian wedding is a full sensory day — bells, incense, silk and tears. The best photographs are the ones that let you feel all of it again, years later.",
        ],
      },
    ],
  },
  {
    slug: "hindu-wedding-rituals",
    title: "Hindu Wedding Rituals in Kerala: A Photographer's Guide",
    excerpt:
      "Nalangu, Thalappoli, Kanyadaan, Saptapadi — the sacred sequence of a Kerala Hindu wedding, and how each ritual is best photographed.",
    category: "Culture",
    date: "2026-02-27",
    readTime: "7 min read",
    cover: "1583939003579-730e3918a45a",
    author: "Manu Manayath",
    keywords: ["hindu wedding rituals kerala", "kerala hindu wedding", "thalappoli", "nair wedding rituals"],
    sections: [
      {
        paragraphs: [
          "A Kerala Hindu wedding is a symphony of rituals, each with its own symbolism and photographic moment. Here's the sequence we follow — from the Nair thali to the final saptapadi.",
        ],
      },
      {
        heading: "Before the main ceremony",
        paragraphs: [
          "Nalangu — an intimate oil-and-turmeric ceremony at the bride's home, full of quiet, golden light. Then the Thalappoli, where the bride, holding a brass lamp, leads a procession of women in traditional attire — one of the most visually striking moments in Indian weddings.",
        ],
      },
      {
        heading: "The main ceremony",
        list: [
          "Kanyadaan — the bride's parents give her away, a moment of tears and pride",
          "Mangalsutra tying — the sacred knot, our most-awaited close-up",
          "Saptapadi — seven steps around the sacred fire, each a vow",
          "The veil unveiling — the first look as husband and wife",
          "Blessings from elders — generations in a single frame",
        ],
      },
      {
        heading: "The feast",
        paragraphs: [
          "No Kerala Hindu wedding is complete without the sadhya — a 24-dish vegetarian feast on banana leaf. The serving line, the eager hands, the satisfied smiles — it photographs like an editorial spread, and tastes even better.",
        ],
      },
    ],
  },
  {
    slug: "muslim-wedding-traditions",
    title: "Muslim Wedding Traditions in Malabar: Nikah to Reception",
    excerpt:
      "Mehendi, the solemn Nikah, and the grand Malabar reception — an insider's guide to Muslim wedding traditions in North Kerala.",
    category: "Culture",
    date: "2026-02-08",
    readTime: "6 min read",
    cover: "1591604466107-ec97de577aff",
    author: "Manu Manayath",
    keywords: ["muslim wedding kerala", "malabar wedding traditions", "nikah photography", "kerala muslim wedding"],
    sections: [
      {
        paragraphs: [
          "From Kannur to Kozhikode, Malabar weddings blend deep Islamic tradition with a love for grandeur. The result is a celebration that moves from intimate prayer to dazzling stage light in a single evening.",
        ],
      },
      {
        heading: "Mehendi & the pre-wedding days",
        paragraphs: [
          "The mehendi is where colour takes over — intricate henna, pastel decor and families from both sides mixing for the first time. It's our favourite day for candid, close-up detail work.",
        ],
      },
      {
        heading: "The Nikah",
        paragraphs: [
          "The Nikah is quiet, solemn and sacred — the bride's consent, the duas, the signing witnessed by family. We photograph it with respect and restraint: no flash during prayer, long lenses, and a deep understanding of the moments that matter.",
        ],
      },
      {
        heading: "The Malabar reception",
        list: [
          "Luxury stage designs with chandeliers and floral walls",
          "The grand entrance — confetti, percussion and cheers",
          "Couple portraits against backlit stage decor",
          "Family table visits and elder blessings",
          "The late-night dance — where candid magic happens",
        ],
      },
      {
        paragraphs: [
          "Malabar weddings taught us that grandeur and intimacy are not opposites. The best film we ever delivered was a Nikah at dusk followed by a reception that felt like a festival — and both halves were treated with the same love.",
        ],
      },
    ],
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes: A Day With a Kerala Wedding Photographer",
    excerpt:
      "4:30 AM alarms, 20,000 frames, one perfect moment. What actually happens inside a wedding shoot with Manayath Studios.",
    category: "Studio",
    date: "2026-01-15",
    readTime: "5 min read",
    cover: "1544005313-94ddf0286df2",
    author: "Adithya K.",
    keywords: ["behind the scenes wedding photography", "kerala wedding photographer day", "wedding photography behind the scenes"],
    sections: [
      {
        paragraphs: [
          "People see the final film and assume magic happens automatically. The truth is 4:30 AM alarms, three camera bodies, and a checklist that runs to two pages. Here's a real day in the field.",
        ],
      },
      {
        heading: "Before sunrise",
        paragraphs: [
          "We arrive before the family wakes. The cinematographer maps the venue's light; the lead photographer meets the coordinator to confirm ritual timing; the drone pilot checks the sky. By the time the bride's make-up starts, every frame of the day is already planned.",
        ],
      },
      {
        heading: "The rituals",
        paragraphs: [
          "Our rule: disappear. A great wedding photographer is felt, not seen. Long lenses capture ritual moments without intruding, while the second shooter watches the crowd for the real stories — a grandmother's tears, a cousin's laughter.",
        ],
      },
      {
        heading: "Golden hour to midnight",
        list: [
          "The couple's private portrait window — 20 minutes, golden light",
          "Reception coverage with off-camera lighting setups",
          "The same-day edit is colour-graded on location",
          "Backups uploaded to the cloud before we sleep",
          "Sneak peeks delivered within 72 hours",
        ],
      },
      {
        paragraphs: [
          "Between the alarm and the last sparkler, we shoot around 20,000 frames and record 6 hours of footage — so that you keep maybe 1,200 photos and a 6-minute film. That's the real magic: the ruthless, loving editing that keeps only the moments that matter.",
        ],
      },
    ],
  },
  {
    slug: "wedding-planning-checklist",
    title: "The Ultimate Kerala Wedding Planning Checklist",
    excerpt:
      "Every vendor, ritual and deadline for a stress-free Kerala wedding — a printable checklist built from 850+ real weddings.",
    category: "Planning",
    date: "2025-12-20",
    readTime: "8 min read",
    cover: "1511285560929-80b456fea0bc",
    author: "Roshni P.",
    keywords: ["kerala wedding planning checklist", "wedding checklist kerala", "wedding vendors kerala"],
    sections: [
      {
        paragraphs: [
          "After coordinating hundreds of Kerala weddings, our team condensed everything into one checklist. Copy it, pin it, and tick through it with your family every Sunday.",
        ],
      },
      {
        heading: "12 months: foundations",
        list: [
          "Fix dates with muhurtham / church / masjid availability",
          "Set budget and responsibilities",
          "Book venue, photographer, caterer",
          "Draft the guest list",
        ],
      },
      {
        heading: "6 months: the beautiful details",
        list: [
          "Choose outfits and jewellery",
          "Book film, drone and live-stream teams",
          "Plan save-the-date / pre-wedding shoot",
          "Book decor and lighting vendors",
        ],
      },
      {
        heading: "3 months: lock it down",
        list: [
          "Send invitations (digital + printed)",
          "Confirm sadhya / catering headcounts",
          "Finalise the ritual timeline with all families",
          "Book accommodation for outstation guests",
        ],
      },
      {
        heading: "1 month: the final sprint",
        list: [
          "Venue walkthrough with your photographer",
          "Confirm arrivals and pickup schedules",
          "Pack the emergency kit",
          "Assign a day-of coordinator",
          "Charge everything, print everything, breathe",
        ],
      },
      {
        paragraphs: [
          "And the most important item, hidden at the bottom of every great wedding: enjoy it. The rituals, the chaos, the food, the tears — this is the only day your family will ever be exactly like this. Let us worry about the photographs.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, n = 3) {
  const others = blogPosts.filter((p) => p.slug !== slug);
  return others.slice(0, n);
}
