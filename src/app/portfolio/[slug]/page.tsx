import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import GalleryExperience from "@/components/GalleryExperience";
import BookingCTA from "@/components/BookingCTA";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, gallerySchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { galleries, getGallery } from "@/data/portfolio";

export async function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGallery(slug);
  if (!g) return { title: "Gallery not found" };
  return {
    title: `${g.title} — Kerala Wedding Photography`,
    description: g.description,
    alternates: { canonical: `/portfolio/${g.slug}` },
    openGraph: {
      title: `${g.title} — ${g.subtitle}`,
      description: g.description,
      images: [{ url: u(g.cover, 1600), width: 1600, height: 1067, alt: g.title }],
    },
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gallery = getGallery(slug);
  if (!gallery) notFound();

  const related = galleries
    .filter((g) => g.kind === gallery.kind && g.slug !== gallery.slug)
    .slice(0, 3);

  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema(`${gallery.title} — Kerala Wedding Photography`, gallery.description, `/portfolio/${gallery.slug}`),
          breadcrumbSchema([
            { name: "Portfolio", path: "/portfolio" },
            { name: gallery.title, path: `/portfolio/${gallery.slug}` },
          ]),
          gallerySchema(gallery),
        ]}
      />

      <PageHero
        eyebrow={gallery.subtitle}
        title={gallery.title}
        sub={gallery.description}
        image={gallery.cover}
        crumbs={[{ name: "Portfolio", path: "/portfolio" }, { name: gallery.title, path: `/portfolio/${gallery.slug}` }]}
      >
        {gallery.locations && (
          <div className="mt-6 flex flex-wrap gap-2">
            {gallery.locations.map((l) => (
              <span key={l} className="inline-flex items-center gap-1.5 rounded-full border border-foreground/[0.12] px-3.5 py-1.5 text-[11px] font-medium text-foreground/75">
                <MapPin size={11} className="text-gold" />
                {l}
              </span>
            ))}
          </div>
        )}
      </PageHero>

      <Section ariaLabel={`${gallery.title} gallery`} className="pt-4">
        <GalleryExperience gallery={gallery} />
      </Section>

      {/* Related galleries */}
      {related.length > 0 && (
        <Section ariaLabel="Related galleries" className="bg-charcoal/[0.02]">
          <h2 className="mb-10 text-center font-serif text-3xl">Explore more galleries</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((g, i) => (
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
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="block font-serif text-xl text-white">{g.title}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-widest text-champagne">{g.subtitle}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <BookingCTA />
    </>
  );
}
