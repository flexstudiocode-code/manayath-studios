import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import KPhoto from "@/components/ui/KPhoto";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  crumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  image?: string;
  crumbs?: { name: string; path: string }[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24", className)}>
      {image && (
        <>
          <KPhoto
            src={`https://images.unsplash.com/photo-${image}?auto=format&fit=crop&w=2000&q=80`}
            alt=""
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10"
            imgClassName="scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" aria-hidden />
        </>
      )}
      <div className="container-px">
        {crumbs && (
          <Reveal y={16}>
            <Breadcrumbs items={crumbs} />
          </Reveal>
        )}
        <Reveal delay={0.08}>
          {eyebrow && (
            <span className="eyebrow mt-6">{eyebrow}</span>
          )}
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">{sub}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
