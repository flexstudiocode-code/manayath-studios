"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/80 transition-all duration-300 hover:border-gold hover:text-gold",
        className
      )}
    >
      {!mounted ? (
        <span className="h-4 w-4" aria-hidden />
      ) : isDark ? (
        <Sun size={15} strokeWidth={2.2} />
      ) : (
        <Moon size={15} strokeWidth={2.2} />
      )}
    </button>
  );
}
