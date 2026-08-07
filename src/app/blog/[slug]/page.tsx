import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Facebook, Share2, Twitter, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { u } from "@/lib/utils";
import { blogPosts, getPost, relatedPosts } from "@/data/blog";
import { team } from "@/data/team";
import { site } from "@/data/site";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: u(post.cover, 1600), width: 1600, height: 1067, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

const fmtDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = relatedPosts(slug, 3);
  const author = team[0];
  const shareUrl = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema(post.title, post.excerpt, `/blog/${post.slug}`),
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
        ]}
      />

      <article className="container-px pt-32 sm:pt-40">
        <Reveal y={16}>
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />
        </Reveal>

        {/* Header */}
        <header className="mx-auto mt-8 max-w-3xl">
          <Reveal>
            <span className="rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold">
              {post.category}
            </span>
            <h1 className="mt-5 font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold">
                  <User size={14} />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{post.author}</span>
                  <span className="block text-[11px]">Lead Photographer</span>
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} className="text-gold" /> {fmtDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-gold" /> {post.readTime}
              </span>
            </div>
          </Reveal>
        </header>

        {/* Cover */}
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <KPhoto
            src={u(post.cover, 1800)}
            alt={post.title}
            priority
            sizes="(max-width:896px) 100vw, 896px"
            className="aspect-[21/10] rounded-3xl shadow-card"
          />
        </Reveal>

        {/* Body */}
        <div className="mx-auto mt-12 max-w-3xl">
          {post.sections.map((s, i) => (
            <Reveal key={i} delay={0.05}>
              {s.heading && (
                <h2 className="mt-12 font-serif text-2xl leading-snug sm:text-3xl">{s.heading}</h2>
              )}
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mt-5 text-[15px] leading-[1.85] text-foreground/85 sm:text-base">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-5 space-y-3">
                  {s.list.map((li, k) => (
                    <li key={k} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {/* Share */}
          <Reveal className="mt-14 flex flex-wrap items-center gap-4 border-t border-border/70 pt-8">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Share2 size={15} className="text-gold" /> Share this guide
            </p>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/75 transition-colors hover:border-gold hover:text-gold"
              >
                <Share2 size={14} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/75 transition-colors hover:border-gold hover:text-gold"
              >
                <Twitter size={14} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/75 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook size={14} />
              </a>
            </div>
          </Reveal>

          {/* Author card */}
          <Reveal className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-border/70 bg-card/50 p-7 sm:flex-row sm:items-center">
            <KPhoto
              src={u(author.image, 300)}
              alt={`${author.name} — ${author.role}`}
              className="h-20 w-20 shrink-0 rounded-full"
              sizes="80px"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">Written by</p>
              <p className="font-serif text-xl">{author.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {author.bio} Follow along at{" "}
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-gold hover:underline">
                  @manayath.studios
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Related */}
          <div className="mt-14">
            <h2 className="font-serif text-2xl">Continue reading</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-shadow duration-500 hover:shadow-soft"
                  aria-label={`Read: ${r.title}`}
                >
                  <KPhoto
                    src={u(r.cover, 600)}
                    alt={r.title}
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="aspect-[16/10]"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">{r.category}</p>
                    <h3 className="mt-2 font-serif text-base leading-snug transition-colors group-hover:text-gold">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="mt-14 flex justify-center">
            <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-gold">
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
              Back to the journal
            </Link>
          </div>
        </div>
      </article>

      <Section ariaLabel="Book your wedding" className="mt-8 text-center">
        <Reveal>
          <p className="mx-auto max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
            Planning a wedding in Kerala?{" "}
            <Link href="/contact" className="italic text-gold hover:underline">
              Let's talk about your dates
            </Link>
            <ArrowRight size={18} className="ml-2 inline text-gold" />
          </p>
        </Reveal>
      </Section>
    </>
  );
}
