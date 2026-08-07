import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
        },
        champagne: "hsl(var(--champagne))",
        forest: "hsl(var(--forest))",
        charcoal: "hsl(var(--charcoal))",
        beige: "hsl(var(--beige))",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 12px 40px -12px hsl(var(--shadow-color))",
        card: "0 4px 24px -8px hsl(var(--shadow-color))",
        gold: "0 10px 34px -10px hsl(var(--gold) / 0.5)",
        glow: "0 0 0 1px hsl(var(--gold) / 0.35), 0 8px 40px -8px hsl(var(--gold) / 0.45)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      keyframes: {
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.14)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 18s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
