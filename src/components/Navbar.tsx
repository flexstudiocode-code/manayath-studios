"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, waLink } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-foreground/[0.08] bg-background/75 shadow-soft backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20" aria-label="Main">
        {/* Logo */}
        <Link href="/" className="group relative z-50 flex items-baseline gap-2" aria-label="Manayath Studios — home">
          <span className="font-serif text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
            Manayath
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest2 text-gold">
            Studios
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                  isActive(item.href) ? "text-gold" : "text-foreground/75 hover:text-foreground"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={waLink("Hi Manayath Studios! I'd like to book a wedding date.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full border border-foreground/15 px-4 text-[13px] font-semibold text-foreground/85 transition-all duration-300 hover:border-gold hover:text-gold md:inline-flex"
          >
            <Phone size={13} className="text-gold" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-gradient-to-r from-gold to-champagne px-5 text-[13px] font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_hsl(var(--gold)/0.55)] sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/[0.98] backdrop-blur-2xl lg:hidden"
          >
            <div className="container-px flex flex-1 flex-col justify-center gap-1 pb-16 pt-24">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between border-b border-foreground/[0.08] py-4 font-serif text-3xl transition-colors",
                      isActive(item.href) ? "text-gold" : "text-foreground hover:text-gold"
                    )}
                  >
                    {item.label}
                    <ArrowUpRight
                      size={22}
                      className="text-gold/0 transition-all duration-300 group-hover:text-gold"
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-8 flex flex-col gap-4"
              >
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">
                  WhatsApp · {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground">
                  {site.email}
                </a>
                <p className="text-xs uppercase tracking-widest2 text-gold">{site.tagline}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
