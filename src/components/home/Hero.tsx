"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Play } from "lucide-react";
import KPhoto from "@/components/ui/KPhoto";
import Marquee from "@/components/ui/Marquee";
import { u } from "@/lib/utils";
import { weddings } from "@/data/weddings";

const items = ["Kerala Hindu Weddings", "Kerala Christian Weddings", "Kerala Muslim Weddings", "Destination Weddings", "Save The Date Films", "Same Day Edits", "Drone Coverage", "Luxury Albums"];

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (i: number) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.35 + i * 0.16, ease: [0.22, 1, 0.36, 1] as const },
    },
  });

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden" aria-label="Introduction">
      <KPhoto
        src={u(weddings[0].image, 2000)}
        alt="Bride and groom in warm golden light — cinematic Kerala wedding photography"
        priority
        sizes="100vw"
        className="absolute inset-0"
        imgClassName="animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-background" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5))]" aria-hidden />

      <div className="container-px relative z-10 flex flex-1 flex-col items-center justify-center pb-20 pt-28 text-center">
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" aria-hidden />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" aria-hidden />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/90">
            Now booking weddings for 2026–27
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp(1)}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-4xl font-serif text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Where love becomes
          <span className="block italic text-champagne">a cinematic memory</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(2)}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base"
        >
          Kerala's most awarded wedding photography & films studio. Hindu, Christian and Muslim
          weddings — captured with soul across all 14 districts, from Thalassery to
          Thiruvananthapuram.
        </motion.p>

        <motion.div variants={fadeUp(3)} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-8 text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_hsl(var(--gold)/0.6)]"
          >
            Explore the Portfolio
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/films"
            className="glass inline-flex h-12 items-center gap-2 rounded-full px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/25 text-gold">
              <Play size={11} className="ml-0.5 fill-current" />
            </span>
            Watch Films
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp(4)}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"
        >
          <MapPin size={12} className="text-gold" />
          Thalassery · Kannur · Kerala
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} className="text-white/70" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 border-t border-white/10 bg-black/25 py-4 backdrop-blur-sm">
        <Marquee items={items} className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" itemClassName="text-white/55" />
      </div>
    </section>
  );
}
