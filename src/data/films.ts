export interface Film {
  id: string;
  title: string;
  couple: string;
  location: string;
  category: "Featured" | "Teaser" | "Highlight" | "Same Day Edit" | "Documentary" | "Drone" | "Reel";
  duration: string;
  youtubeId: string;
}

export const filmCategories = [
  "All",
  "Teasers",
  "Highlights",
  "Same Day Edit",
  "Documentary",
  "Drone",
  "Reels",
] as const;

export const films: Film[] = [
  {
    id: "kiara-sidharth",
    title: "Ranjha — The Cinematic Wedding Film",
    couple: "Kiara & Sidharth",
    location: "Rajasthan",
    category: "Featured",
    duration: "5:12",
    youtubeId: "tyBJioe8gOs",
  },
  {
    id: "sreejai-reshma",
    title: "A Traditional Kerala Hindu Wedding",
    couple: "Sreejai & Reshma",
    location: "Kannur, Kerala",
    category: "Highlight",
    duration: "6:48",
    youtubeId: "4f-3k33jJwg",
  },
  {
    id: "justine-irene",
    title: "Cinematic Christian Wedding Film",
    couple: "Justine & Irene",
    location: "Kochi, Kerala",
    category: "Highlight",
    duration: "4:21",
    youtubeId: "a18UEFhWXWs",
  },
  {
    id: "nevin-athira",
    title: "Christian Wedding Highlights",
    couple: "Nevin & Athira",
    location: "Kottayam, Kerala",
    category: "Highlight",
    duration: "5:03",
    youtubeId: "WO2qQJvDqds",
  },
  {
    id: "priya-akshay",
    title: "Butta Bomma — Wedding Teaser",
    couple: "Priya & Akshay",
    location: "Hyderabad",
    category: "Teaser",
    duration: "1:24",
    youtubeId: "4-pYqQPNv0s",
  },
  {
    id: "let-us-get-lost",
    title: "Let's Get Lost — Bali Teaser",
    couple: "Ananya & Karthik",
    location: "Bali",
    category: "Teaser",
    duration: "2:47",
    youtubeId: "Y-7xjOQoHe0",
  },
  {
    id: "from-this-day-on",
    title: "From This Day On — Same Day Edit",
    couple: "Meera & Arjun",
    location: "Kochi, Kerala",
    category: "Same Day Edit",
    duration: "3:15",
    youtubeId: "TdF1McneH1g",
  },
  {
    id: "gaya",
    title: "Gaya — A Heart Touching Wedding Film",
    couple: "Gaya & Family",
    location: "Kerala",
    category: "Documentary",
    duration: "8:12",
    youtubeId: "bKRlt1MyH_4",
  },
  {
    id: "testimonial-edit",
    title: "Latest Wedding Testimonial Edit",
    couple: "Featured couples",
    location: "Kerala",
    category: "Documentary",
    duration: "3:48",
    youtubeId: "JSlVRKOuYfI",
  },
  {
    id: "mykonos",
    title: "A Whirlwind Indian Wedding in Mykonos",
    couple: "Nikita & Rishi",
    location: "Mykonos, Greece",
    category: "Drone",
    duration: "2:31",
    youtubeId: "IjcDMePldoQ",
  },
  {
    id: "white-wedding",
    title: "White Wedding — Nikki & Vishal",
    couple: "Nikki & Vishal",
    location: "Kochi, Kerala",
    category: "Reel",
    duration: "1:58",
    youtubeId: "kzmNBRR-gtQ",
  },
];

export const featuredFilm = films[0];

/** YouTube thumbnail (hqdefault is always available) */
export function filmPoster(film: Film) {
  return `https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`;
}
