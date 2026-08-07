"use client";

import { RefreshCw } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-3xl sm:text-4xl">Something slipped through the frames</h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        An unexpected error occurred. Try again — or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-7 text-sm font-bold text-[#241c10] shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
        >
          <RefreshCw size={15} />
          Try again
        </button>
      </div>
    </div>
  );
}
