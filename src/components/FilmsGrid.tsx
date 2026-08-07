"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { featuredFilm, filmCategories, films, type Film } from "@/data/films";
import VideoCard from "@/components/VideoCard";
import FilmModal from "@/components/FilmModal";

const singular: Record<string, string> = {
  Teasers: "Teaser",
  Highlights: "Highlight",
  "Same Day Edit": "Same Day Edit",
  Documentary: "Documentary",
  Drone: "Drone",
  Reels: "Reel",
};

export function FeaturedFilmPlayer() {
  const [active, setActive] = useState<Film | null>(null);
  return (
    <>
      <VideoCard film={featuredFilm} onPlay={setActive} large />
      <FilmModal film={active} onClose={() => setActive(null)} />
    </>
  );
}

export default function FilmsGrid() {
  const [cat, setCat] = useState<(typeof filmCategories)[number]>("All");
  const [active, setActive] = useState<Film | null>(null);

  const list = useMemo(
    () =>
      cat === "All"
        ? films.filter((f) => f.category !== "Featured")
        : films.filter((f) => f.category === singular[cat]),
    [cat]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter films by category">
        {filmCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={cn(
              "rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300",
              cat === c
                ? "bg-gradient-to-r from-gold to-champagne text-[#241c10] shadow-gold"
                : "border border-foreground/15 text-muted-foreground hover:border-gold hover:text-gold"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f, i) => (
          <div key={f.id} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade-up">
            <VideoCard film={f} onPlay={setActive} />
          </div>
        ))}
      </div>

      <FilmModal film={active} onClose={() => setActive(null)} />
    </>
  );
}
