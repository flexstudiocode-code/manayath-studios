import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { site, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Booking — Check Availability",
  description:
    "Enquire about Kerala wedding photography & films. Check availability, request a quotation, book a consultation or schedule a video call with Manayath Studios, Thalassery, Kannur.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact & Booking — Manayath Studios", description: "Check availability and book your Kerala wedding photography date." },
};

const info = [
  { icon: MapPin, label: "Studio", value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postal}` },
  { icon: Phone, label: "Phone / WhatsApp", value: site.phone, href: waLink() },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Contact & Booking — Kerala Wedding Photography", "Enquire, check availability and book your wedding photography and films with Manayath Studios.", "/contact"),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />

      <PageHero
        eyebrow="Contact & Booking"
        title={
          <>
            Let's plan your
            <span className="block italic text-gold"> perfect wedding story</span>
          </>
        }
        sub="Check availability, request a quotation, book a consultation or schedule a video call. Tell us about your wedding — we'll take care of the rest."
        image="1519225421980-715cb0215aed"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <Section ariaLabel="Enquiry form and contact details" className="pt-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <Reveal className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/70 bg-card/50 p-7 shadow-card backdrop-blur-sm">
                <h2 className="font-serif text-xl">Studio details</h2>
                <ul className="mt-5 space-y-4">
                  {info.map((it) => (
                    <li key={it.label} className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                        <it.icon size={15} />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{it.label}</p>
                        {it.href ? (
                          <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
                            {it.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{it.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 p-7">
                <h2 className="font-serif text-xl">Prefer instant replies?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Message us on WhatsApp — we respond within minutes during studio hours, and
                  share availability in real time.
                </p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="overflow-hidden rounded-3xl border border-border/70 shadow-card">
                <iframe
                  src={site.mapEmbed}
                  title="Map to Manayath Studios, Thalassery, Kannur"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-64 w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
