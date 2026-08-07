export interface Wedding {
  id: string;
  couple: string;
  culture: string;
  location: string;
  district: string;
  date: string;
  story: string;
  image: string;
  images: string[];
  highlights: string[];
  film?: { title: string; youtubeId: string };
}

export const weddings: Wedding[] = [
  {
    id: "akhil-nandana",
    couple: "Akhil & Nandana",
    culture: "Kerala Hindu Wedding",
    location: "Thalassery Heritage Mansion",
    district: "Kannur",
    date: "Dec 2025",
    story:
      "A three-day celebration that began with Nalangu at home and ended under a hand-woven pandal. Nandana's Thalappoli led the way to the mandapam where Akhil waited with a trembling smile — moments we captured exactly as they felt.",
    image: "1519741497674-611481863552",
    images: [
      "1519741497674-611481863552",
      "1511285560929-80b456fea0bc",
      "1520854221256-17451cc331bf",
      "1522673607200-164d1b6ce486",
      "1515934751635-c81c6bc9a2d8",
      "1583939003579-730e3918a45a",
      "1510076857177-7470076d4098",
      "1522093007474-d86e9bf7ba6f",
      "1526045478516-99145907023c",
      "1523438885200-e635ba2c371e",
    ],
    highlights: ["Thalappoli", "Mangalsutra", "Sadhya", "Reception"],
    film: { title: "Akhil & Nandana — The Wedding Film", youtubeId: "4f-3k33jJwg" },
  },
  {
    id: "rohan-fathima",
    couple: "Rohit & Fathima",
    culture: "Kerala Muslim Wedding",
    location: "Arabian Courtyard, Kannur",
    district: "Kannur",
    date: "Feb 2026",
    story:
      "Mehendi at noon, Nikah at Maghrib — the evening light fell gold across the courtyard as Fathima walked in wearing her mother's vintage silk. Malabar tradition, luxury staging and every tear in between.",
    image: "1591604466107-ec97de577aff",
    images: [
      "1591604466107-ec97de577aff",
      "1606800052052-a08af7148866",
      "1465495976277-4387d4b0b4c6",
      "1515934751635-c81c6bc9a2d8",
      "1594736797933-d0501ba2fe65",
      "1522093007474-d86e9bf7ba6f",
      "1587271407850-8d438ca9fdf2",
      "1523438885200-e635ba2c371e",
      "1526045478516-99145907023c",
      "1519225421980-715cb0215aed",
    ],
    highlights: ["Mehendi", "Nikah", "Luxury Stage", "Reception"],
  },
  {
    id: "joel-anjali",
    couple: "Joel & Anjali",
    culture: "Kerala Christian Wedding",
    location: "St. Michael's Church, Kochi",
    district: "Ernakulam",
    date: "Aug 2025",
    story:
      "Choir voices, a white gown, and the Minnu Kettu tying two families together. Anjali's father walked her through the aisle we had swept with flowers — the photograph is framed in our studio lobby.",
    image: "1532712938310-34cb3982ef74",
    images: [
      "1532712938310-34cb3982ef74",
      "1519225421980-715cb0215aed",
      "1522708323590-d24dbb6b0267",
      "1511285560929-80b456fea0bc",
      "1465495976277-4387d4b0b4c6",
      "1523438885200-e635ba2c371e",
      "1544005313-94ddf0286df2",
      "1515934751635-c81c6bc9a2d8",
      "1510076857177-7470076d4098",
      "1520854221256-17451cc331bf",
    ],
    highlights: ["Minnu Kettu", "Church Ceremony", "Reception", "Couple Portraits"],
    film: { title: "Joel & Anjali — Same Day Edit", youtubeId: "TdF1McneH1g" },
  },
  {
    id: "vishnu-devika",
    couple: "Vishnu & Devika",
    culture: "Destination Wedding",
    location: "Munnar Tea Estates",
    district: "Idukki",
    date: "Nov 2025",
    story:
      "Cold mist, endless tea rows and a vow at 1,600 metres. We travelled with the couple through Munnar's plantations for their save-the-date, then stayed for the full celebration.",
    image: "1520854221256-17451cc331bf",
    images: [
      "1520854221256-17451cc331bf",
      "1519741497674-611481863552",
      "1532712938310-34cb3982ef74",
      "1519690889869-e705e59f72e1",
      "1522673607200-164d1b6ce486",
      "1515934751635-c81c6bc9a2d8",
      "1522093007474-d86e9bf7ba6f",
      "1511285560929-80b456fea0bc",
      "1583939003579-730e3918a45a",
      "1523438885200-e635ba2c371e",
    ],
    highlights: ["Tea Plantations", "Backwaters", "Drone Coverage"],
  },
];
