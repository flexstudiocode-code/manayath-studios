# Manayath Studios — Kerala Wedding Photography & Films

A premium, cinematic wedding photography website for a Kerala-based studio — built with
**Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.**

![Stack](https://img.shields.io/badge/Next.js-15-black) ![TS](https://img.shields.io/badge/TypeScript-strict-blue) ![Perf](https://img.shields.io/badge/First%20Load%20JS-~103KB-green)

## ✨ Highlights

- **Cinematic design system** — dark/light mode, glassmorphism, slow-zoom hero, scroll reveals,
  gold-on-charcoal palette, Playfair Display / Cormorant Garamond / Manrope (variable fonts).
- **8 pages** — Home, About, Portfolio, Wedding Films, Services, Client Portal, Blog, Contact.
- **Portfolio by culture & event** — Hindu / Christian / Muslim galleries plus Save The Date,
  Pre Wedding, Haldi, Mehendi, Sangeet, Wedding Day, Reception and Post Wedding — each with
  masonry layout, search, tag filters, load-more and a fullscreen lightbox (zoom, favourites, share).
- **Wedding films** — YouTube-embedded teasers, highlights, same-day edits, documentaries and
  drone films (lazy, never autoplay).
- **Client Portal** — demo dashboard with password-protected galleries, proof selection,
  favourites, downloads, delivery tracking and a scannable QR (demo password: `kerala2026`).
- **SEO-ready** — metadata, Open Graph / Twitter cards, JSON-LD (LocalBusiness, Breadcrumb,
  Article, FAQ, ImageGallery), sitemap.xml, robots.txt, canonical URLs, semantic HTML, WCAG AA
  touches (skip links, ARIA, focus states, reduced-motion support).

## 🚀 Getting started

```bash
npm install
npm run dev        # → http://localhost:3000
```

Production:

```bash
npm run build && npm run start
```

## 🔧 Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. The site works fully in
**demo mode** without any of these:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, OG tags |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp business number (digits only) |
| `NEXT_PUBLIC_SUPABASE_URL` / `ANON_KEY` | Auth, storage & enquiries (optional) |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Image CDN (optional) |
| `RESEND_API_KEY` / `CONTACT_EMAIL` | Email notifications (optional) |

## 🗂 Project structure

```
src/
  app/          # App Router pages, API route, sitemap, robots, manifest
  components/   # UI kit, motion helpers, section & feature components
  data/         # Content layer: weddings, galleries, films, services, blog…
  lib/          # utils, SEO schema builders, Supabase client
```

## ☁️ Deploy

```bash
# GitHub
gh repo create manayath-studios --public --source . --push

# Vercel
vercel --prod --yes
```

Set `NEXT_PUBLIC_SITE_URL` to your production domain before the production build so
canonical URLs and Open Graph tags point at the right place.
