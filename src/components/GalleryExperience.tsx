"use client";

import { useMemo, useState } from "react";
import { Search, ZoomIn } from "lucide-react";
import { cn, u } from "@/lib/utils";
import type { Gallery } from "@/data/portfolio";
import KPhoto from "@/components/ui/KPhoto";
import Lightbox from "@/components/Lightbox";

export default function GalleryExperience({
  gallery,
  initialCount = 12,
  loadStep = 12,
}: {
  gallery: Gallery;
  initialCount?: number;
  loadStep?: number;
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [count, setCount] = useState(initialCount);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(gallery.images.flatMap((im) => im.tags)))],
    [gallery.images]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return gallery.images.filter((im) => {
      const matchQ =
        !q ||
        im.caption.toLowerCase().includes(q) ||
        im.alt.toLowerCase().includes(q) ||
        im.tags.some((t) => t.toLowerCase().includes(q));
      const matchT = tag === "All" || im.tags.includes(tag);
      return matchQ && matchT;
    });
  }, [gallery.images, query, tag]);

  const visible = filtered.slice(0, count);

  const reset = () => setCount(initialCount);

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder={`Search ${gallery.count} photos…`}
            aria-label="Search gallery photos"
            className="h-11 w-full rounded-full border border-foreground/15 bg-card/50 pl-11 pr-4 text-sm text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTag(t);
                reset();
              }}
              aria-pressed={tag === t}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                tag === t
                  ? "bg-gradient-to-r from-gold to-champagne text-[#241c10] shadow-gold"
                  : "border border-foreground/15 text-muted-foreground hover:border-gold hover:text-gold"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      {visible.length > 0 ? (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((im, idx) => (
            <button
              key={`${im.id}-${idx}`}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left shadow-card"
              style={{ aspectRatio: im.aspect }}
              aria-label={`Open ${im.caption} in fullscreen`}
            >
              <KPhoto
                src={u(im.id)}
                alt={im.alt}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="absolute inset-0"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="text-left">
                  <span className="block font-serif text-sm text-white">{im.caption}</span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-white/60">
                    {im.tags.slice(0, 2).join(" · ")}
                  </span>
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                  <ZoomIn size={13} />
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-foreground/15 py-20 text-center">
          <p className="font-serif text-2xl text-foreground/80">No photos match your search</p>
          <p className="mt-2 text-sm text-muted-foreground">Try a different word or clear the filters.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setTag("All");
              reset();
            }}
            className="mt-6 rounded-full border border-foreground/15 px-6 py-2.5 text-xs font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Load more */}
      {filtered.length > count && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + loadStep)}
            className="rounded-full border border-foreground/15 px-8 py-3 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          >
            Load more · {filtered.length - count} remaining
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground" aria-live="polite">
        Showing {visible.length} of {filtered.length} photos
        {filtered.length < gallery.images.length && ` (filtered from ${gallery.images.length})`}
      </p>

      <Lightbox images={filtered} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
    </div>
  );
}
