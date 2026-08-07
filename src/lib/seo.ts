import type { BlogPost } from "@/data/blog";
import type { Gallery } from "@/data/portfolio";
import { site } from "@/data/site";
import { u } from "./utils";

const url = site.url;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Organization / LocalBusiness JSON-LD */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name: site.name,
    legalName: site.name,
    alternateName: "Manayath Studios Wedding Photography & Films",
    description: site.description,
    url: url,
    logo: `${url}/icon.svg`,
    image: [site.ogImage],
    telephone: site.phoneIntl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postal,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 11.7485, longitude: 75.4896 },
    priceRange: "₹₹₹₹",
    openingHours: "Mo-Su 09:00-20:00",
    areaServed: ["Kerala", "Kannur", "Thalassery", "Kochi", "Kozhikode", "Munnar", "Wayanad", "Vagamon"],
    sameAs: [site.social.instagram, site.social.youtube, site.social.facebook],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography Kerala" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Films Kerala" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hindu Wedding Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Christian Wedding Photography Kerala" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Muslim Wedding Photography Kerala" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Destination Wedding Kerala" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone Wedding Coverage" } },
    ],
  };
}

/** BreadcrumbList JSON-LD */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${url}${it.path}`,
    })),
  };
}

/** WebPage schema */
export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${url}${path}`,
    isPartOf: { "@id": `${url}/#organization` },
  };
}

/** FAQPage schema */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article schema for blog posts */
export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [u(post.cover, 1600)],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: "Lead Photographer" },
    publisher: { "@id": `${url}/#organization` },
    mainEntityOfPage: `${url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };
}

/** Image gallery schema for portfolio pages */
export function gallerySchema(g: Gallery) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${g.title} — Kerala Wedding Photography`,
    description: g.description,
    url: `${url}/portfolio/${g.slug}`,
    image: g.images.slice(0, 10).map((i) => u(i.id, 1200)),
  };
}

export { u };
