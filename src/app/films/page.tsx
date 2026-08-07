import type { Metadata } from "next";
import { Clapperboard, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import FilmsGrid, { FeaturedFilmPlayer } from "@/components/FilmsGrid";
import BookingCTA from "@/components/BookingCTA";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wedding Films — Cinematic Wedding Videos Kerala",
  description:
    "Cinematic wedding teasers, highlight films, same-day edits, documentary and drone wedding films in 4K — by Manayath Studios, Kerala's wedding film specialists.",
  alternates: { canonical: "/films" },
  openGraph: { title: "Wedding Films Kerala — Manayath Studios", description: "Teasers, highlights, same-day edits, documentaries and drone wedding films in 4K." },
};

const servicePills = [
  "Wedding Teasers",
  "Highlight Films",
  "Same Day Edit",
  "Documentary Films",
  "Drone Films",
  "Instagram Reels",
];

export default function FilmsPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Wedding Films — Cinematic Wedding Videos in Kerala", "Cinematic teasers, highlights, same-day edits, documentaries and drone wedding films in 4K.", "/films"),
          breadcrumbSchema([{ name: "Wedding Films", path: "/films" }]),
        ]}
      />

      <PageHero
        eyebrow="Wedding Films"
        title={
          <>
            Your wedding, scored like
            <span className="block italic text-gold"> a cinema premiere</span>
          </>
        }
        sub="From 90-second teasers that break the internet to full documentary films your grandchildren will watch — every edit is crafted by our in-house colourists and editors."
        image="1522673607200-164d1b6ce486"
        crumbs={[{ name: "Wedding Films", path: "/films" }]}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          {servicePills.map((p) => (
            <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-foreground/[0.12] px-3.5 py-1.5 text-[11px] font-medium text-foreground/75">
              <Clapperboard size={11} className="text-gold" />
              {p}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Featured film */}
      <Section ariaLabel="Featured wedding film" className="pt-4">
        <SectionHeading
          eyebrow="Featured Film"
          title="The one we keep going back to"
          sub="A cinematic masterpiece that shows exactly how far we'll go for your story."
        />
        <Reveal className="mx-auto max-w-5xl">
          <FeaturedFilmPlayer />
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles size={13} className="text-gold" aria-hidden />
            Videos are hosted on YouTube — nothing autoplays. Press play whenever you're ready.
          </p>
        </Reveal>
      </Section>

      {/* All films */}
      <Section ariaLabel="All wedding films" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="The Library"
          title="Explore every kind of film we make"
          sub="Filter by category — teasers, highlights, same-day edits, documentaries, drone and reels."
        />
        <FilmsGrid />
      </Section>

      {/* How we film */}
      <Section ariaLabel="How we make wedding films">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            { step: "01", title: "We listen", text: "Every film starts with your story — how you met, what you love, who will cry. We build the narrative around you." },
            { step: "02", title: "We disappear", text: "Two cinematographers, long lenses, zero direction. Real rituals and real reactions are always better than staged ones." },
            { step: "03", title: "We craft", text: "Sound design, colour grade, and a music score licensed to your film. Delivered in cinematic 4K within 6–8 weeks." },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border/70 bg-card/50 p-7">
                <p className="font-serif text-4xl text-gold/50">{s.step}</p>
                <h3 className="mt-3 font-serif text-xl">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
