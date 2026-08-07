export interface Testimonial {
  couple: string;
  location: string;
  review: string;
  rating: number;
  image: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    couple: "Akhil & Nandana",
    location: "Thalassery, Kannur",
    review:
      "We watched our wedding film three times the first night — our whole family was crying, laughing, reliving every second. Manayath Studios didn't just photograph our wedding; they preserved the feeling of being there. Worth every rupee.",
    rating: 5,
    image: "1519741497674-611481863552",
    service: "Photography + Film + Album",
  },
  {
    couple: "Fathima & Rohit",
    location: "Kannur",
    review:
      "The Mehendi close-ups and the Nikah coverage were beyond what we imagined. The team blended into our functions like guests — our relatives asked who their 'friends with cameras' were. The luxury stage shots are pure art.",
    rating: 5,
    image: "1591604466107-ec97de577aff",
    service: "Muslim Wedding Coverage",
  },
  {
    couple: "Anjali & Joel",
    location: "Kochi",
    review:
      "Our same-day edit played at the reception and the hall went silent. People still talk about it. Professional, punctual, and they made our nervous families laugh through the entire day.",
    rating: 5,
    image: "1532712938310-34cb3982ef74",
    service: "Same Day Edit",
  },
  {
    couple: "Devika & Vishnu",
    location: "Munnar",
    review:
      "The save-the-date shoot in the tea plantations was a dream. They scouted locations at 5 AM so we had the mist exactly right. The album is a coffee-table masterpiece our guests always pick up.",
    rating: 5,
    image: "1520854221256-17451cc331bf",
    service: "Destination + Save The Date",
  },
  {
    couple: "Meera & Arjun",
    location: "Kozhikode",
    review:
      "As a photographer myself, I am extremely picky about light and colour. Their low-light work with the Nilavilakku lamps was clean, noise-free, and beautifully natural. Genuinely world-class editing.",
    rating: 5,
    image: "1583939003579-730e3918a45a",
    service: "Low Light Photography",
  },
  {
    couple: "Sara & Kevin",
    location: "Kottayam",
    review:
      "It rained the entire morning of our wedding. The team had umbrellas, reflectors and zero panic — they turned the monsoon into the most romantic backdrop. Our rainy-day portraits are our favourites.",
    rating: 5,
    image: "1519225421980-715cb0215aed",
    service: "Monsoon Wedding",
  },
];
