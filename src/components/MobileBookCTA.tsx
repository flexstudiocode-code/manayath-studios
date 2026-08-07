"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";

export default function MobileBookCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 z-40 md:hidden"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-5 py-3 text-xs font-bold text-[#241c10] shadow-gold"
          >
            <CalendarHeart size={14} />
            Book Now
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
