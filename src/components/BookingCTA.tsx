import Link from "next/link";
import { ArrowRight, CalendarHeart } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Countdown from "@/components/Countdown";
import { weddings } from "@/data/weddings";

/** Shared booking CTA with countdown widget */
export default function BookingCTA() {
  const target = weddings[1];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" aria-label="Book your wedding">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.14),transparent_55%),radial-gradient(ellipse_at_bottom,hsl(var(--forest)/0.35),transparent_60%)]"
        aria-hidden
      />
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Bookings for {new Date().getFullYear() + 1} · Season now open</span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Your wedding deserves
              <span className="block text-shimmer">a cinematic memory</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Check availability, request a quotation or book a free consultation call.
              Most Kerala wedding dates book out 6–12 months ahead — secure yours today.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Countdown
              label={`${target.couple} · ${target.location}`}
              target="2026-12-12T09:30:00+05:30"
            />
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-8 text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_hsl(var(--gold)/0.55)]"
            >
              <CalendarHeart size={16} />
              Check Availability
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/25 px-8 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              View Packages
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
