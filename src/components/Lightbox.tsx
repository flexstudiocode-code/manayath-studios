"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Heart, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import { u } from "@/lib/utils";
import type { GalleryImage } from "@/data/portfolio";

const FAV_KEY = "manayath-favs";

function loadFavs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export default function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number | null;
  onClose: () => void;
}) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [copied, setCopied] = useState(false);
  const [favs, setFavs] = useState<string[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = startIndex !== null && images.length > 0;

  useEffect(() => setFavs(loadFavs()), []);

  // Keep index in bounds if the list shrinks while open
  useEffect(() => {
    setI((v) => Math.min(v, Math.max(0, images.length - 1)));
  }, [images.length]);
  useEffect(() => {
    if (open) {
      setI(startIndex ?? 0);
      setZoom(false);
      closeRef.current?.focus();
    }
  }, [startIndex, open]);

  const go = useCallback(
    (d: number) => {
      setZoom(false);
      setI((v) => (v + d + images.length) % images.length);
    },
    [images.length]
  );

  const toggleFav = useCallback((id: string) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      try {
        localStorage.setItem(FAV_KEY, JSON.stringify(next));
      } catch {
        /* private mode */
      }
      return next;
    });
  }, []);

  const share = useCallback(async (img: GalleryImage) => {
    const src = u(img.id, 1600);
    try {
      if (navigator.share) {
        await navigator.share({ title: img.caption, text: img.alt, url: src });
        return;
      }
    } catch {
      return;
    }
    try {
      await navigator.clipboard.writeText(src);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* no clipboard */
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key.toLowerCase() === "z") setZoom((z) => !z);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  const img = images[i];

  return (
    <AnimatePresence>
      {open && img && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[75] flex flex-col bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${img.caption} — fullscreen preview`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-4 sm:p-6">
            <p className="max-w-[60%] truncate text-sm text-white/75">{img.caption}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleFav(img.id)}
                aria-pressed={favs.includes(img.id)}
                aria-label={favs.includes(img.id) ? "Remove from favourites" : "Add to favourites"}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-gold hover:text-gold"
              >
                <Heart size={17} className={favs.includes(img.id) ? "fill-gold text-gold" : ""} />
              </button>
              <button
                type="button"
                onClick={() => share(img)}
                aria-label="Share photo"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-gold hover:text-gold"
              >
                {copied ? <Check size={17} className="text-gold" /> : <Share2 size={17} />}
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => !z)}
                aria-pressed={zoom}
                aria-label={zoom ? "Zoom out" : "Zoom in"}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-gold hover:text-gold"
              >
                {zoom ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
              </button>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-[#241c10]"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-2 sm:px-12">
            <motion.img
              key={i}
              src={u(img.id, 2000)}
              alt={img.alt}
              onClick={() => setZoom((z) => !z)}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: zoom ? 1.6 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[72vh] w-auto max-w-full cursor-zoom-in rounded-xl object-contain"
              style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
              draggable={false}
            />
            {zoom && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs text-white/80">
                Scroll with drag — press Z or click to zoom out
              </p>
            )}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <p className="text-xs tracking-widest text-white/60">
              {i + 1} / {images.length} · {img.tags.join(" · ")}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
