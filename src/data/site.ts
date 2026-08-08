export const site = {
  name: "Manayath Studios",
  tagline: "Kerala's Cinematic Wedding Storytellers",
  description:
    "Manayath Studios is a premium wedding photography & films studio based in Thalassery, Kannur, Kerala. We craft cinematic Hindu, Christian & Muslim wedding films, destination weddings, save-the-date shoots and luxury albums across Kerala.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://manayathstudios.com",
  phone: "+91 98470 12345",
  phoneIntl: "+919847012345",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "919847012345",
  email: "hello@manayathstudios.com",
  address: {
    street: "2nd Floor, Court Road",
    city: "Thalassery",
    state: "Kerala",
    postal: "670101",
    country: "India",
  },
  hours: "Open daily · 9:00 AM – 8:00 PM",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/manayath.studios",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "https://youtube.com/@manayathstudios",
    facebook: "https://facebook.com/manayathstudios",
    pinterest: "https://pinterest.com/manayathstudios",
  },
  mapEmbed:
    process.env.NEXT_PUBLIC_MAP_EMBEP ??
    "https://maps.google.com/maps?q=Thalassery%2C%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed",
  ogImage: `https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80`,
  keywords: [
    "Kerala Wedding Photographer",
    "Best Wedding Photographer Kerala",
    "Wedding Photography Kannur",
    "Wedding Photographer Thalassery",
    "Wedding Films Kerala",
    "Muslim Wedding Photography Kerala",
    "Christian Wedding Photographer Kerala",
    "Hindu Wedding Photography Kerala",
    "Destination Wedding Kerala",
    "Cinematic Wedding Films",
    "Pre Wedding Shoot Kerala",
    "Save the Date Kerala",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Films", href: "/films" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export const waDefault =
  "Hi Manayath Studios! I'm planning a wedding in Kerala and would love to know more about your photography & films packages.";

/** Build a WhatsApp deep link with prefilled message */
export function waLink(message: string = waDefault) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const districts = [
  "Kannur",
  "Kasaragod",
  "Kozhikode",
  "Wayanad",
  "Malappuram",
  "Palakkad",
  "Thrissur",
  "Ernakulam",
  "Kottayam",
  "Idukki",
  "Alappuzha",
  "Pathanamthitta",
  "Kollam",
  "Thiruvananthapuram",
] as const;

export const weddingTypes = [
  "Kerala Hindu Wedding",
  "Kerala Christian Wedding",
  "Kerala Muslim Wedding",
  "Interfaith Wedding",
  "Destination Wedding",
  "Couple / Elopement",
  "Other",
] as const;
