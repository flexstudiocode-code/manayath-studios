import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookCTA from "@/components/MobileBookCTA";
import { site } from "@/data/site";

// Variable fonts: one file per face instead of one per weight.
// Playfair Display + Manrope are variable — omitting `weight` loads the
// single variable file. Cormorant Garamond is static, so keep only the
// weights we actually use (400/500 + italics for quote styling).
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  // Used only for below-the-fold italic quotes
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1600,
        height: 1067,
        alt: "Cinematic Kerala wedding photography by Manayath Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  category: "photography",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0D0A" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        {/* Warm up connections used by direct image requests (lightbox, OG images) */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-xs focus:font-bold focus:text-[#241c10]"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <MobileBookCTA />
        </Providers>
      </body>
    </html>
  );
}
