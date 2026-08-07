"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { u } from "@/lib/utils";
import KPhoto from "@/components/ui/KPhoto";

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % len), 6500);
    return () => clearInterval(id);
  }, [paused, len]);

  const t = testimonials[i];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto max-w-3xl"
    >
      <Quote size={60} className="absolute -top-5 left-1/2 -translate-x-1/2 text-gold/25" aria-hidden />
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        className="rounded-3xl border border-border/70 bg-card/50 p-8 text-center shadow-card backdrop-blur-sm sm:p-12"
      >
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
          >
            <div className="flex justify-center gap-1" aria-label={`Rated ${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  size={15}
                  className={s < t.rating ? "fill-gold text-gold" : "text-foreground/20"}
                  aria-hidden
                />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
              “{t.review}”
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <KPhoto
                src={u(t.image, 200)}
                alt={`Portrait of ${t.couple}`}
                className="h-14 w-14 rounded-full"
                sizes="56px"
              />
              <div className="text-left">
                <p className="font-serif text-lg">{t.couple}</p>
                <p className="text-xs text-muted-foreground">
                  {t.location} · {t.service}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => setI((i - 1 + len) % len)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/75 transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, d) => (
            <button
              key={d}
              type="button"
              onClick={() => setI(d)}
              aria-label={`Go to testimonial ${d + 1}`}
              aria-current={d === i}
              className={
                d === i
                  ? "h-1.5 w-7 rounded-full bg-gold transition-all duration-300"
                  : "h-1.5 w-2.5 rounded-full bg-foreground/20 transition-all duration-300 hover:bg-foreground/40"
              }
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setI((i + 1) % len)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/75 transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
