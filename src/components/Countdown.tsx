"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

export default function Countdown({ label, target }: { label: string; target: string }) {
  const calc = (): TimeLeft => {
    const diff = Math.max(0, new Date(target).getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor(diff / 3600000) % 24,
      m: Math.floor(diff / 60000) % 60,
      s: Math.floor(diff / 1000) % 60,
    };
  };
  // Hydration-safe: start at zero, populate on mount (Date.now() differs between
  // server render and client hydration).
  const [t, setT] = useState<TimeLeft>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const cells = [
    { v: t.d, l: "Days" },
    { v: t.h, l: "Hours" },
    { v: t.m, l: "Minutes" },
    { v: t.s, l: "Seconds" },
  ];

  return (
    <div role="timer" aria-label={`Countdown to ${label}`}>
      <p className="text-xs uppercase tracking-widest2 text-gold">{label}</p>
      <div className="mx-auto mt-5 grid max-w-md grid-cols-4 gap-3">
        {cells.map((c) => (
          <div
            key={c.l}
            className="rounded-2xl border border-foreground/10 bg-card/60 px-1 py-4 shadow-card backdrop-blur-sm"
          >
            <div className="font-serif text-3xl tabular-nums text-foreground sm:text-4xl">
              {String(c.v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {c.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
