export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Manu Manayath",
    role: "Founder & Lead Photographer",
    bio: "12 years behind the lens, 850+ weddings across Kerala and beyond. Manu trained under award-winning wedding photographers in Kochi before founding the studio in his hometown of Thalassery.",
    image: "1506794778202-cad84cf45f1d",
  },
  {
    name: "Adithya K.",
    role: "Lead Cinematographer",
    bio: "The eye behind our cinematic films. Adithya brings a documentary sensibility to every edit — real moments, natural sound, and colour grading tuned to Kerala's light.",
    image: "1507003211169-0a1dd7228f2d",
  },
  {
    name: "Roshni P.",
    role: "Creative Director & Editor",
    bio: "From album design to film narrative, Roshni shapes how each story is told. She personally reviews every frame that leaves the studio.",
    image: "1494790108377-be9c29b29330",
  },
  {
    name: "Jeevan T.",
    role: "Production & Drone Pilot",
    bio: "A certified drone pilot, Jeevan handles logistics, timelines and aerial coverage — making sure the team is always where the moment happens.",
    image: "1500648767791-00dcc994a43e",
  },
];

export interface Award {
  title: string;
  org: string;
  year: string;
}

export const awards: Award[] = [
  { title: "Best Wedding Film — Kerala", org: "Wedding Film Awards India", year: "2025" },
  { title: "Top 10 Wedding Photographers in Kerala", org: "WedSites", year: "2025" },
  { title: "Best Cinematic Wedding Video", org: "Kerala Wedding Expo", year: "2024" },
  { title: "Photographer of the Year — North Malabar", org: "Craft Guild of Photographers", year: "2023" },
  { title: "Best Destination Wedding Film", org: "South Indian Wedding Awards", year: "2023" },
  { title: "Editor's Choice — Luxury Wedding Albums", org: "AlbumMasters International", year: "2022" },
];

export const equipment = [
  "Canon EOS R5 / R6 Mark II full-frame bodies",
  "Canon RF L-series prime & zoom glass",
  "DJI Mavic 3 Pro — 4K drone coverage",
  "Sony FX3 cinema cameras for films",
  "Godox professional lighting & modifiers",
  "Dual card redundancy & cloud backups",
  "Calibrated 4K editing & colour suites",
];
