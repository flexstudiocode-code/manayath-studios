import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Unsplash image URL builder with responsive params */
export function u(id: string, w = 1200, q = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Indian number formatting */
export function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

/** Format seconds as m:ss */
export function fmtDuration(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

const FAV_KEY = "manayath-favs";

/** Load favourited photo ids from localStorage */
export function loadFavs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]");
  } catch {
    return [];
  }
}

/** Persist favourited photo ids */
export function saveFavs(ids: string[]) {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(ids));
  } catch {
    /* private mode */
  }
}

/** Stable hash of a string (for deterministic image pools) */
export function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
