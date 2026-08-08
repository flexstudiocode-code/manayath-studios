import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import FilmsPreview from "@/components/home/FilmsPreview";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import KPhoto from "@/components/ui/KPhoto";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InstagramFeed from "@/components/InstagramFeed";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { weddings } from "@/data/weddings";
import { cultureGalleries } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd data={webPageSchema("Manayath Studios — Kerala Wedding Photography & Films", "Kerala's most awarded wedding photography and cinematic wedding films studio, based in Thalassery, Kannur.", "/")} />

      <Hero />

      {/* Manifesto */}
      <Section ariaLabel="Our studio philosophy">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">The Studio</span>
            <h2 className="mt-5 font-serif text-3xl leading-[1.25] text-foreground sm:text-4xl lg:text-[2.6rem]">
              We don't photograph weddings.
              <span className="block italic text-gold">We preserve the feeling of being there.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              For twelve years, our team has travelled the length of Kerala — from temple
              mandapams to heritage churches, from Malabar stages to Munnar's mist — quietly
              capturing the laughter, the tears and the light that made your day unforgettable.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Featured weddings */}
      <Section ariaLabel="Featured weddings" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="Featured Weddings"
          title="Stories we've been honoured to tell"
          sub="Real couples, real rituals, real emotion — a glimpse of the weddings we've filmed across Kerala."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {weddings.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.08}>
              <Link
                href="/portfolio"
                className="group relative block overflow-hidden rounded-3xl shadow-card"
                aria-label={`View ${w.couple}'s wedding story`}
              >
                <KPhoto
                  src={u(w.image)}
                  alt={`${w.couple} — ${w.culture} wedding photography in ${w.location}`}
                  sizes="(max-width:640px) 100vw, 50vw"
                  className="aspect-[4/3] sm:aspect-[16/10]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  {w.culture}
                </span>
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block font-serif text-2xl text-white sm:text-3xl">{w.couple}</span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs text-white/70">
                    {w.location} · {w.district} · {w.date}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-champagne opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View story <ArrowRight size={12} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          >
            Explore the full portfolio
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* Wedding stories */}
      <Section ariaLabel="Wedding stories" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="Wedding Stories"
          title="Every wedding has a story. Ours begin like this."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {[weddings[2], weddings[3]].map((w, i) => (
            <Reveal key={w.id} delay={i * 0.1}>
              <article className="group">
                <KPhoto
                  src={u(w.image)}
                  alt={`${w.couple} — ${w.culture} in ${w.location}`}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="aspect-[4/3] rounded-3xl shadow-card"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <h3 className="mt-6 font-serif text-2xl sm:text-3xl">{w.couple}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gold">
                  {w.culture} · {w.location}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{w.story}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {w.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-foreground/[0.12] px-3.5 py-1.5 text-[11px] font-medium text-foreground/75">
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cinematic films */}
      <Section ariaLabel="Cinematic wedding films">
        <SectionHeading
          eyebrow="Cinematic Films"
          title="Watch. Feel. Relive."
          sub="From 90-second teasers to full documentary films — every edit is scored, graded and crafted to make you cry happy tears."
        />
        <FilmsPreview />
      </Section>

      {/* Cultural specialties */}
      <Section ariaLabel="Cultural specialties" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="Cultural Specialties"
          title="Three traditions. One standard of storytelling."
          sub="Organised by culture so you can see exactly the rituals, colours and moments we specialise in."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cultureGalleries.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <Link
                href={`/portfolio/${g.slug}`}
                className="group relative block overflow-hidden rounded-3xl shadow-card"
                aria-label={`View ${g.title} gallery`}
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
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-champagne">
                    {g.subtitle}
                  </span>
                  <span className="mt-1.5 block font-serif text-2xl text-white">{g.title}</span>
                  <span className="mt-2 block text-xs text-white/70">{g.count} photos · {g.locations?.[0]}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section ariaLabel="Studio statistics">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {[
            { to: 850, suffix: "+", label: "Weddings filmed" },
            { to: 12, suffix: "", label: "Years of stories" },
            { to: 25, suffix: "+", label: "Awards & honours" },
            { to: 14, suffix: "", label: "Districts served" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-3xl border border-border/70 bg-card/50 px-4 py-8 text-center shadow-card backdrop-blur-sm">
                <p className="font-serif text-4xl text-gold sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section ariaLabel="Client testimonials" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="Kind Words"
          title="Couples who trusted us with their day"
        />
        <TestimonialCarousel />
      </Section>

      {/* Instagram */}
      <Section ariaLabel="Instagram feed">
        <SectionHeading
          eyebrow="Instagram"
          title="Fresh frames, every week"
          sub="Follow our daily life between weddings — behind-the-scenes, sneak peeks and Kerala's prettiest corners."
        />
        <InstagramFeed />
      </Section>
    </>
  );
}
