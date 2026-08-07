import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Kerala Wedding Guide & Photography Tips",
  description:
    "Kerala wedding planning guides, photography tips, save-the-date ideas, and guides to Hindu, Christian and Muslim wedding traditions — from the Manayath Studios blog.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "The Manayath Blog — Kerala Wedding Guide", description: "Planning guides, photography tips and tradition guides for Kerala weddings." },
};

const fmtDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Blog — Kerala Wedding Planning & Photography Guide", "Kerala wedding planning guides, photography tips and tradition guides from Manayath Studios.", "/blog"),
          breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
        ]}
      />

      <PageHero
        eyebrow="The Journal"
        title={
          <>
            Kerala weddings,
            <span className="block italic text-gold"> beautifully explained</span>
          </>
        }
        sub="Planning guides, photography tips and the traditions behind the rituals — written by the team that shoots them every week."
        image="1511285560929-80b456fea0bc"
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <Section ariaLabel="Blog articles" className="pt-4">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-border/70 bg-card/40 shadow-card lg:grid-cols-2"
            aria-label={`Read: ${featured.title}`}
          >
            <div className="relative">
              <KPhoto
                src={u(featured.cover)}
                alt={featured.title}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="aspect-[16/10] lg:aspect-auto lg:h-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-gold to-champagne px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#241c10]">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-widest text-gold">
                {featured.category}
                <span className="flex items-center gap-1.5 normal-case tracking-normal text-muted-foreground">
                  <CalendarDays size={12} /> {fmtDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5 normal-case tracking-normal text-muted-foreground">
                  <Clock size={12} /> {featured.readTime}
                </span>
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Read the guide
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.07}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-3xl border border-border/70 bg-card/40 shadow-card transition-shadow duration-500 hover:shadow-soft"
                aria-label={`Read: ${p.title}`}
              >
                <div className="relative">
                  <KPhoto
                    src={u(p.cover)}
                    alt={p.title}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="aspect-[16/10]"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={11} /> {fmtDate(p.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} /> {p.readTime}
                    </span>
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
