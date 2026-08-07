"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredFilm, films, type Film } from "@/data/films";
import VideoCard from "@/components/VideoCard";
import FilmModal from "@/components/FilmModal";

export default function FilmsPreview() {
  const [active, setActive] = useState<Film | null>(null);
  const rest = films.filter((f) => f.id !== featuredFilm.id).slice(0, 2);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        <VideoCard film={featuredFilm} onPlay={setActive} large />
        <div className="grid gap-6">
          {rest.map((f) => (
            <VideoCard key={f.id} film={f} onPlay={setActive} />
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/films"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
        >
          View all wedding films
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <FilmModal film={active} onClose={() => setActive(null)} />
    </>
  );
}
