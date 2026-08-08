import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { packages, expertise } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Packages — Wedding Photography & Films Kerala",
  description:
    "Wedding photography and cinematic film packages from ₹45,000, plus drone coverage, save-the-date, destination weddings, luxury albums and live streaming — Manayath Studios, Kerala.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Wedding Packages & Services — Manayath Studios", description: "Photography, films, drone, destination weddings and luxury albums across Kerala." },
};

export default function ServicesPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Services & Packages — Kerala Wedding Photography and Films", "Wedding packages and technical expertise from Manayath Studios, Kerala.", "/services"),
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
        ]}
      />

      <PageHero
        eyebrow="Services & Packages"
        title={
          <>
            Photography that feels like film.
            <span className="block italic text-gold"> Packages that feel like yours.</span>
          </>
        }
        sub="Transparent packages, no hidden charges, and every add-on you could dream of — from drone coverage to live streaming for family abroad."
        image="1515934751635-c81c6bc9a2d8"
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      {/* Packages */}
      <Section ariaLabel="Wedding packages">
        <SectionHeading
          eyebrow="Packages"
          title="Choose how your story should be told"
          sub="Every package includes a free consultation, 72-hour sneak peeks and a private online gallery. Add-ons available for every tier."
        />
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div
                className={
                  p.popular
                    ? "relative flex h-full flex-col rounded-3xl border border-gold/50 bg-card/60 p-7 shadow-gold backdrop-blur-sm"
                    : "relative flex h-full flex-col rounded-3xl border border-border/70 bg-card/50 p-7 shadow-card backdrop-blur-sm"
                }
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-champagne px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#241c10] shadow-gold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold">{p.tagline}</p>
                <p className="mt-5 font-serif text-3xl">
                  {p.priceFrom}
                  <span className="text-xs text-muted-foreground">{p.id === "destination" ? "" : " onwards"}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/80">
                      <Check size={15} className="mt-0.5 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    p.popular
                      ? "mt-7 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-gold to-champagne text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5"
                      : "mt-7 inline-flex h-11 items-center justify-center rounded-full border border-foreground/20 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  }
                >
                  Request Quotation
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technical expertise */}
      <Section ariaLabel="Technical expertise">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Masters of light, weather and place"
          sub="Kerala's low light, monsoon skies and dramatic landscapes are not obstacles — they're our favourite ingredients."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/50 shadow-card">
                <KPhoto
                  src={u(e.image)}
                  alt={e.title}
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl">{e.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">{e.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/80">
                        <Check size={14} className="mt-0.5 shrink-0 text-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
