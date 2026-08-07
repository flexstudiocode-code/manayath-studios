export default function Loading() {
  return (
    <div className="grid min-h-[100svh] place-items-center" role="status" aria-label="Loading">
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-gold/30 bg-gold/5">
          <span className="font-serif text-3xl italic text-gold">M</span>
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest2 text-muted-foreground">
          Manayath Studios
        </p>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
