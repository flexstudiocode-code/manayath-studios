"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { u } from "@/lib/utils";
import KPhoto from "@/components/ui/KPhoto";

export default function BeforeAfter({
  beforeId,
  afterId,
  labels = ["RAW", "FINAL EDIT"],
}: {
  beforeId: string;
  afterId: string;
  labels?: [string, string];
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl shadow-card"
      onPointerDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      {/* Final edit (base) */}
      <KPhoto
        src={u(afterId, 1400)}
        alt="Photograph after professional editing"
        className="absolute inset-0"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      {/* Raw (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden>
        <KPhoto
          src={u(beforeId, 1400)}
          alt="Photograph before editing"
          className="absolute inset-0"
        />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
        {labels[0]}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#241c10]">
        {labels[1]}
      </span>

      {/* Divider */}
      <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden>
        <div className="h-full w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_16px_rgba(0,0,0,0.6)]" />
        <div className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-charcoal shadow-lg">
          <ChevronsLeftRight size={16} />
        </div>
      </div>

      {/* Accessible range control */}
      <input
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after editing — drag the slider"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
