export interface WeddingPackage {
  id: string;
  name: string;
  tagline: string;
  priceFrom: string;
  popular?: boolean;
  features: string[];
  image: string;
}

export const packages: WeddingPackage[] = [
  {
    id: "essence",
    name: "Essence",
    tagline: "Photography only",
    priceFrom: "₹45,000",
    features: [
      "Full-day photography coverage",
      "1 lead photographer",
      "600+ professionally edited photos",
      "Private online gallery in 3 weeks",
      "10 fine-art prints",
      "Free consultation & planning call",
    ],
    image: "1519741497674-611481863552",
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "Photography + Cinematic Film",
    priceFrom: "₹85,000",
    popular: true,
    features: [
      "Everything in Essence",
      "2 photographers + cinematographer",
      "1,200+ edited photos",
      "5–7 min cinematic highlight film",
      "Same-day edit add-on available",
      "40-page luxury lay-flat album",
      "Drone coverage add-on available",
      "Client portal with delivery tracking",
    ],
    image: "1511285560929-80b456fea0bc",
  },
  {
    id: "royal",
    name: "Royal",
    tagline: "The complete cinematic experience",
    priceFrom: "₹1,50,000",
    features: [
      "Everything in Signature",
      "3 photographers + 2 cinematographers",
      "Teaser + highlight + documentary film",
      "Full drone & aerial coverage",
      "Same-day edit screened at reception",
      "Save-the-date shoot included",
      "2 luxury albums (bride & family)",
      "Family portrait session included",
    ],
    image: "1522673607200-164d1b6ce486",
  },
  {
    id: "destination",
    name: "Destination",
    tagline: "Anywhere in India & abroad",
    priceFrom: "Custom quote",
    features: [
      "Tailored photography + films package",
      "Travel & stay handled by us",
      "Location scouting & permits",
      "Multiple-day coverage",
      "Drone & aerial included",
      "Luxury albums delivered worldwide",
    ],
    image: "1520854221256-17451cc331bf",
  },
];

export interface ALaCarteService {
  title: string;
  desc: string;
  icon: string;
}

export const aLaCarte: ALaCarteService[] = [
  { title: "Wedding Photography", desc: "Full-day coverage with our lead photographers and hand-edited galleries.", icon: "Camera" },
  { title: "Wedding Films", desc: "Cinematic teasers, highlight films and documentaries in 4K.", icon: "Clapperboard" },
  { title: "Drone Coverage", desc: "Certified aerial cinematography for venues, processions and landscapes.", icon: "Plane" },
  { title: "Save The Date", desc: "Creative cinematic couple shoots across Kerala's finest locations.", icon: "CalendarHeart" },
  { title: "Destination Weddings", desc: "Full-service destination coverage anywhere in India and abroad.", icon: "MapPin" },
  { title: "Luxury Albums", desc: "Lay-flat fine-art albums, acrylic frames and premium prints.", icon: "BookOpen" },
  { title: "Live Streaming", desc: "Private live broadcast of ceremonies for family across the world.", icon: "Radio" },
  { title: "Pre Wedding", desc: "Romantic portraits and adventure sessions before the big day.", icon: "HeartHandshake" },
  { title: "Post Wedding", desc: "Beach, hill station and travel shoots after the celebration.", icon: "Palmtree" },
  { title: "Family Portraits", desc: "Timeless multi-generational portraits at home or outdoors.", icon: "Users" },
  { title: "Corporate Events", desc: "Conferences, launches and celebrations photographed with editorial polish.", icon: "Briefcase" },
];

export interface Expertise {
  id: string;
  title: string;
  tagline: string;
  image: string;
  points: string[];
}

export const expertise: Expertise[] = [
  {
    id: "low-light",
    title: "Low Light Photography",
    tagline: "Where Kerala weddings shine",
    image: "1594736797933-d0501ba2fe65",
    points: [
      "Clean, noise-free images with fast L-series lenses",
      "Nilavilakku & oil lamp portraits, kept natural",
      "Traditional mandap & indoor church coverage",
      "Night receptions with professional off-camera light",
      "Natural colours — no harsh flash, no green skin",
    ],
  },
  {
    id: "monsoon",
    title: "Monsoon Weddings",
    tagline: "Rain is our favourite filter",
    image: "1520854221256-17451cc331bf",
    points: [
      "Atmospheric rain photography with soft mist",
      "Cloudy-sky lighting that flatters every skin tone",
      "Umbrella portraits couples adore",
      "Weather-proof gear & backup plans for every ritual",
      "We embrace Kerala's weather — never fight it",
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor Expertise",
    tagline: "From beaches to tea estates",
    image: "1532712938310-34cb3982ef74",
    points: [
      "Beaches, tea estates, mountains & forests",
      "Heritage homes and vintage Malabar architecture",
      "Resort & destination venue experience",
      "Golden-hour planning down to the minute",
      "Location scouting included in every package",
    ],
  },
];

export const expertiseImages: Record<string, string[]> = {
  "low-light": [
    "1594736797933-d0501ba2fe65",
    "1526045478516-99145907023c",
    "1510076857177-7470076d4098",
  ],
  monsoon: ["1520854221256-17451cc331bf", "1469371670807-013ccf25f16a", "1537633552985-df8429e8048b"],
  outdoor: ["1532712938310-34cb3982ef74", "1519690889869-e705e59f72e1", "1529543544282-ea669407fca3"],
};
