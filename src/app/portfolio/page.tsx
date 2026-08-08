import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { cultureGalleries, eventGalleries } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Kerala Weddings by Culture & Event",
  description:
    "Explore Kerala Hindu, Christian and Muslim wedding galleries, plus save-the-date, pre-wedding, haldi, mehendi, sangeet, wedding day, reception and post-wedding shoots by Manayath Studios, Thalassery.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Wedding Portfolio — Manayath Studios, Kerala", description: "Galleries organised by culture and event — Kerala's cinematic wedding photography." },
};

export default function PortfolioPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Wedding Portfolio — Kerala Wedding Photography by Culture & Event", "Kerala Hindu, Christian and Muslim wedding galleries plus event-specific shoots by Manayath Studios.", "/portfolio"),
          breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
        ]}
      />

      <PageHero
        eyebrow="The Portfolio"
        title={
          <>
            Every culture. Every ritual.
            <span className="block italic text-gold">Every unforgettable moment.</span>
          </>
        }
        sub="Instead of one endless gallery, we've organised our work the way weddings actually happen — by culture and by event. Find your tradition, find your moments."
        image="1511285560929-80b456fea0bc"
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
      />

      {/* Culture galleries */}
      <Section ariaLabel="Wedding galleries by culture">
        <SectionHeading
          eyebrow="By Culture"
          title="Three traditions, one standard of storytelling"
          sub="Galleries dedicated to the rituals, colours and emotions of Kerala's wedding cultures."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cultureGalleries.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <Link
                href={`/portfolio/${g.slug}`}
                className="group relative block overflow-hidden rounded-3xl shadow-card"
                aria-label={`View the ${g.title} gallery`}
              >
                <KPhoto
                  src={u(g.cover)}
                  alt={g.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="aspect-[3/4]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" aria-hidden />
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-champagne">{g.subtitle}</span>
                  <span className="mt-1.5 block font-serif text-2xl text-white">{g.title}</span>
                  <span className="mt-2 block text-xs text-white/70">{g.count} photos</span>
                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {g.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                        {h}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Event galleries */}
      <Section ariaLabel="Event galleries" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="By Event"
          title="From save-the-date to the final farewell"
          sub="Every stage of the wedding journey, beautifully covered — browse by event type."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eventGalleries.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/portfolio/${g.slug}`}
                className="group relative block overflow-hidden rounded-3xl shadow-card"
                aria-label={`View the ${g.title} gallery`}
              >
                <KPhoto
                  src={u(g.cover)}
                  alt={`${g.title} photography — ${g.subtitle}`}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="aspect-[4/5]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-serif text-xl text-white">{g.title}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-widest text-champagne">
                    {g.count} photos
                  </span>
                </span>
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 rounded-3xl border border-border/70 bg-card/40 px-6 py-5 text-center">
            <MapPin size={15} className="shrink-0 text-gold" />
            <p className="text-sm text-muted-foreground">
              Shoots available across <span className="font-semibold text-foreground">Kerala</span> — Kannur,
              Thalassery, Kozhikode, Kochi, Munnar, Wayanad, Vagamon, Varkala and beyond.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
