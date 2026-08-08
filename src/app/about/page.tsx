import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Camera, Clapperboard, Gem, Plane } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import Timeline from "@/components/Timeline";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { team, awards, equipment } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "Meet Manayath Studios, Thalassery's premier wedding photography & films studio. 12 years, 850+ weddings, 25 awards — and one promise: to preserve the feeling of being there.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Manayath Studios — Kerala Wedding Photographers", description: "The story behind Kerala's most awarded wedding photography studio, based in Thalassery, Kannur." },
};

const journey = [
  {
    sub: "2014",
    title: "A borrowed camera",
    text: "Manu Manayath photographed his first Thalassery wedding with a borrowed DSLR. The couple cried at the album — and he never looked back.",
  },
  {
    sub: "2017",
    title: "The studio opens",
    text: "Manayath Studios opens on Court Road, Thalassery — a two-room studio with one photographer and a promise: treat every wedding like a film.",
  },
  {
    sub: "2019",
    title: "Cinema comes to weddings",
    text: "We add cinematic films, drone coverage and same-day edits — becoming one of North Malabar's first full wedding film studios.",
  },
  {
    sub: "2021",
    title: "The 500th wedding",
    text: "Our 500th couple, a Nair ceremony in Kannur, becomes our most-loved film. The team grows to four photographers and two editors.",
  },
  {
    sub: "2023",
    title: "National recognition",
    text: "Back-to-back awards for Best Cinematic Wedding Video and Best Destination Film. Couples now travel from Kochi and beyond to book us.",
  },
  {
    sub: "2025",
    title: "850+ stories and counting",
    text: "From temple mandapams to Malabar stages, from Munnar mist to Mykonos sunsets — the studio has filmed love in all its Kerala forms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("About Manayath Studios — Our Story", "The story, team and awards behind Thalassery's premier wedding photography & films studio.", "/about"),
          breadcrumbSchema([{ name: "About", path: "/about" }]),
        ]}
      />

      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Twelve years. 850+ weddings.
            <span className="block italic text-gold">One obsession: the feeling of being there.</span>
          </>
        }
        sub="Manayath Studios was born in Thalassery and grew up across Kerala — photographing Hindu, Christian and Muslim weddings with the patience of documentarians and the eye of filmmakers."
        image="1519741497674-611481863552"
        crumbs={[{ name: "About", path: "/about" }]}
      />

      {/* Story */}
      <Section ariaLabel="Studio story">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <KPhoto
              src={u("1523438885200-e635ba2c371e")}
              alt="Bride preparing on the morning of her Kerala wedding"
              sizes="(max-width:1024px) 100vw, 50vw"
              className="aspect-[4/5] rounded-3xl shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">From the beginning</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              A studio built on
              <span className="italic text-gold"> quiet trust</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Our story began in 2014 with a borrowed camera and a wedding in our hometown.
              What we learned that day still guides us: the best photographs are not taken,
              they are received — from couples who feel safe, families who forget the cameras
              are there, and rituals that are allowed to unfold at their own sacred pace.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Today our team of photographers, cinematographers and editors travels all 14
              districts of Kerala — and beyond — but we still photograph weddings the way we did
              our first: with one photographer for every emotion and one standard for every frame.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Camera, label: "Photography" },
                { icon: Clapperboard, label: "Films" },
                { icon: Plane, label: "Destination" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border/70 bg-card/50 p-4 text-center">
                  <s.icon size={18} className="mx-auto text-gold" />
                  <p className="mt-2 text-xs font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Journey timeline */}
      <Section ariaLabel="Studio journey" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="The Journey"
          title="From borrowed camera to Kerala's most awarded studio"
        />
        <div className="mx-auto max-w-3xl">
          <Timeline items={journey} />
        </div>
      </Section>

      {/* Photographer profile */}
      <Section ariaLabel="Lead photographer">
        <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative">
              <KPhoto
                src={u("1506794778202-cad84cf45f1d")}
                alt="Manu Manayath, founder and lead photographer"
                sizes="(max-width:1024px) 100vw, 40vw"
                className="aspect-[4/5] rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-4 left-6 rounded-full border border-foreground/10 bg-background/90 px-5 py-2 text-xs font-semibold shadow-soft backdrop-blur-md">
                Manu Manayath · Lead Photographer
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">The Photographer</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              "Every frame should feel
              <span className="italic text-gold"> like the memory</span>"
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Manu Manayath is an award-winning wedding photographer and the founder of Manayath
              Studios. A certified drone pilot, retoucher and film colourist, he personally shoots
              every Signature and Royal wedding — and reviews every frame the studio delivers.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              His work has been recognised by the Wedding Film Awards India, the South Indian
              Wedding Awards and international album houses — but his favourite award remains the
              first teary hug from a Thalassery bride in 2014.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-6 text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                Work with Manu <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-foreground/15 px-6 text-sm font-semibold text-foreground/85 transition-colors hover:border-gold hover:text-gold"
              >
                See his work
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Equipment */}
      <Section ariaLabel="Gear and equipment" className="bg-charcoal/[0.02]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Professional Gear</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              The tools behind the tenderness
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Quiet cameras, luminous lenses, redundant storage. We invest in gear so that on
              your wedding day we never think about gear — only about the moment.
            </p>
            <ul className="mt-7 space-y-3.5">
              {equipment.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Gem size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <KPhoto
                src={u("1510076857177-7470076d4098")}
                alt="Wedding décor details photographed with professional gear"
                className="aspect-[3/4] rounded-3xl shadow-card"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
              <KPhoto
                src={u("1522093007474-d86e9bf7ba6f")}
                alt="Candid celebration moments at a wedding reception"
                className="mt-8 aspect-[3/4] rounded-3xl shadow-card"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Awards */}
      <Section ariaLabel="Awards">
        <SectionHeading eyebrow="Awards" title="Recognition we're proud of" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="card-lift flex items-start gap-4 rounded-2xl border border-border/70 bg-card/50 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                  <Award size={18} />
                </span>
                <div>
                  <p className="font-serif text-lg leading-snug">{a.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.org}</p>
                  <p className="mt-2 inline-flex rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold">
                    {a.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section ariaLabel="Our team" className="bg-charcoal/[0.02]">
        <SectionHeading
          eyebrow="The Team"
          title="The people behind the lens"
          sub="Four specialists, one standard — photographers, cinematographers and editors who treat your wedding like their own."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.07}>
              <div className="group">
                <KPhoto
                  src={u(m.image)}
                  alt={`${m.name} — ${m.role} at Manayath Studios`}
                  sizes="(max-width:640px) 100vw, 25vw"
                  className="aspect-[4/5] rounded-3xl shadow-card"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <h3 className="mt-4 font-serif text-xl">{m.name}</h3>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gold">{m.role}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want the team behind your wedding?{" "}
            <Link href="/contact" className="font-semibold text-gold hover:underline">
              Check availability
            </Link>{" "}
            for {new Date().getFullYear() + 1}.
          </p>
        </Reveal>
      </Section>

      <p className="sr-only">{site.name} — based in {site.address.city}, {site.address.state}</p>
    </>
  );
}
