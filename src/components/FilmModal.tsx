"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Film } from "@/data/films";

export default function FilmModal({ film, onClose }: { film: Film | null; onClose: () => void }) {
  useEffect(() => {
    if (!film) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [film, onClose]);

  return (
    <AnimatePresence>
      {film && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/[0.92] p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${film.title} — video player`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <X size={18} />
          </button>
          <motion.div
            initial={{ scale: 0.94, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&color=white&playsinline=1`}
                title={film.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="font-serif text-xl">{film.title}</p>
                <p className="text-sm text-white/60">
                  {film.couple} · {film.location} · {film.category}
                </p>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                {film.duration}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
