"use client";

import { Clock, MapPin, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Film } from "@/data/films";
import { filmPoster } from "@/data/films";
import KPhoto from "@/components/ui/KPhoto";

export default function VideoCard({
  film,
  onPlay,
  large = false,
}: {
  film: Film;
  onPlay: (film: Film) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(film)}
      aria-label={`Watch ${film.title}`}
      className={cn(
        "group relative block aspect-video w-full overflow-hidden rounded-3xl text-left shadow-card transition-shadow duration-500 hover:shadow-glow",
        large && "aspect-video"
      )}
    >
      <KPhoto
        src={filmPoster(film)}
        alt={`${film.title} — ${film.couple}`}
        sizes={large ? "100vw" : "(max-width:768px) 100vw, 50vw"}
        className="absolute inset-0"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" aria-hidden />

      {/* Play button */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 rounded-full bg-gold/40 animate-pulse-ring" aria-hidden />
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[#241c10] shadow-glow transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
          <Play size={22} className="ml-1 fill-current" />
        </span>
      </span>

      {/* Category badge */}
      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
        {film.category === "Featured" ? "Featured Film" : `${film.category} Film`}
      </span>

      {/* Duration */}
      <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
        <Clock size={11} aria-hidden />
        {film.duration}
      </span>

      {/* Info */}
      <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="block font-serif text-lg leading-snug text-white sm:text-xl lg:text-2xl">
          {film.title}
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-xs text-white/70">
          <MapPin size={12} className="text-gold" aria-hidden />
          {film.couple} · {film.location}
        </span>
      </span>
    </button>
  );
}
