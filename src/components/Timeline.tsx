import Reveal from "@/components/motion/Reveal";

export interface TimelineItem {
  title: string;
  sub: string;
  text: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-2 space-y-10 border-l border-gold/25 pl-8 sm:ml-4 sm:pl-12">
      {items.map((it, i) => (
        <li key={it.title} className="relative">
          <span
            className="absolute -left-8 top-1 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-gold/50 bg-background sm:-left-12"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
          <Reveal delay={i * 0.05} y={20}>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">{it.sub}</p>
            <h3 className="mt-1 font-serif text-2xl">{it.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {it.text}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
