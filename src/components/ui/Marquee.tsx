import { cn } from "@/lib/utils";

export default function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10">
        {row.map((item, i) => (
          <span
            key={i}
            className={cn(
              "flex items-center gap-10 text-[11px] font-semibold uppercase tracking-widest2 text-foreground/45",
              itemClassName
            )}
          >
            {item}
            <span className="text-gold/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
