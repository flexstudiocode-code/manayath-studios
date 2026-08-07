import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

export function Section({
  id,
  className,
  children,
  container = true,
  ariaLabel,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  container?: boolean;
  ariaLabel?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("relative py-20 sm:py-28", className)}>
      {container ? <div className="container-px">{children}</div> : children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const Heading = as;
  return (
    <Reveal
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</span>
      )}
      <Heading className="mt-4 font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {sub && <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{sub}</p>}
    </Reveal>
  );
}
