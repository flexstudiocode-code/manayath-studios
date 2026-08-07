import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
      <p className="font-serif text-[7rem] leading-none text-gold/25 sm:text-[10rem]">404</p>
      <h1 className="mt-4 font-serif text-3xl sm:text-4xl">This page wandered off</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Like a stolen moment at a reception, this page seems to have vanished. Let's get you
        back to the memories.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-8 text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </section>
  );
}
