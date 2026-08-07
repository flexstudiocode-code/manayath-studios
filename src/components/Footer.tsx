import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { site, waLink } from "@/data/site";
import NewsletterForm from "@/components/NewsletterForm";

const serviceLinks = [
  { label: "Wedding Photography", href: "/services" },
  { label: "Wedding Films", href: "/films" },
  { label: "Save The Date", href: "/portfolio/save-the-date" },
  { label: "Destination Weddings", href: "/services" },
  { label: "Luxury Albums", href: "/services" },
  { label: "Client Portal", href: "/portal" },
];

const studioLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kerala Hindu Weddings", href: "/portfolio/kerala-hindu-weddings" },
  { label: "Kerala Christian Weddings", href: "/portfolio/kerala-christian-weddings" },
  { label: "Kerala Muslim Weddings", href: "/portfolio/kerala-muslim-weddings" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-charcoal/[0.02]">
      <div className="container-px grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-semibold text-foreground">Manayath</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest2 text-gold">Studios</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Kerala's cinematic wedding storytellers. Photographing Hindu, Christian & Muslim
            weddings across all 14 districts — from Thalassery to Thiruvananthapuram.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Instagram, label: "Instagram", href: site.social.instagram },
              { icon: Youtube, label: "YouTube", href: site.social.youtube },
              { icon: Facebook, label: "Facebook", href: site.social.facebook },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <nav className="lg:col-span-2" aria-label="Services">
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold">Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Studio">
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold">Studio</h3>
          <ul className="mt-5 space-y-3">
            {studioLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + newsletter */}
        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold">Get in touch</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.postal}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0 text-gold" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={15} className="shrink-0 text-gold" />
              {site.hours}
            </li>
          </ul>
          <div className="mt-7">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-gold">♥</span> in Thalassery, Kerala
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:text-gold"
          >
            Book your date <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
