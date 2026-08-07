"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  Film,
  Heart,
  Images,
  LayoutDashboard,
  Lock,
  LogOut,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { u, loadFavs } from "@/lib/utils";
import { galleries, type Gallery } from "@/data/portfolio";
import QRCard from "@/components/QRCard";
import GalleryExperience from "@/components/GalleryExperience";
import Lightbox from "@/components/Lightbox";
import KPhoto from "@/components/ui/KPhoto";
import Reveal from "@/components/motion/Reveal";

const DEMO_PASSWORD = "kerala2026";
const AUTH_KEY = "manayath-portal-auth";
const PROOF_KEY = "manayath-proof";

type Tab = "overview" | "albums" | "proof" | "favourites" | "downloads";

const albumSlugs = ["wedding-day", "reception", "haldi"];

const deliverySteps = [
  { label: "Wedding photographed", detail: "12 Dec 2025 · all rituals covered", done: true },
  { label: "Sneak peeks delivered", detail: "15 Dec 2025 · 25 photos in WhatsApp", done: true },
  { label: "Proofing open for selection", detail: "You've selected 96 of 412 photos", done: true },
  { label: "Album design & film grade", detail: "In progress · due 05 Jan 2026", done: false },
  { label: "Final delivery", detail: "Expected 12 Jan 2026", done: false },
];

export default function PortalClient() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("anjali@example.com");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("overview");
  const [activeAlbum, setActiveAlbum] = useState<Gallery | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [favs, setFavs] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<{ images: { id: string; caption: string; alt: string; tags: string[]; aspect: string }[]; index: number | null } | null>(null);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
  }, []);

  useEffect(() => {
    if (authed) {
      setFavs(loadFavs());
      try {
        setSelected(JSON.parse(localStorage.getItem(PROOF_KEY) ?? "[]"));
      } catch {
        setSelected([]);
      }
    }
  }, [authed]);

  const albums = useMemo(
    () =>
      albumSlugs
        .map((s) => galleries.find((g) => g.slug === s))
        .filter((g): g is Gallery => Boolean(g)),
    []
  );

  const proofImages = useMemo(() => albums[0]?.images.slice(0, 18) ?? [], [albums]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      setError("");
    } else {
      setError("That password doesn't match. Hint: the demo password is kerala2026");
    }
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setTab("overview");
    setActiveAlbum(null);
  };

  const toggleSelect = (id: string) => {
    const next = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id];
    setSelected(next);
    try {
      localStorage.setItem(PROOF_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const openFavLightbox = (index: number) => {
    const images = albums
      .flatMap((a) => a.images)
      .filter((im) => favs.includes(im.id));
    setLightbox({ images, index });
  };

  /* ------------------------------ login screen ------------------------------ */
  if (!authed) {
    return (
      <section className="flex min-h-[100svh] items-center justify-center px-5 py-24">
        <div className="w-full max-w-md">
          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card/50 p-8 shadow-card backdrop-blur-sm sm:p-10">
              <div className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold">
                  <Lock size={22} />
                </span>
                <h1 className="mt-5 font-serif text-2xl sm:text-3xl">Client Portal</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Password-protected access to your wedding galleries, films and albums.
                </p>
              </div>

              <form onSubmit={login} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="portal-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="portal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-xl border border-foreground/15 bg-card/50 px-4 text-sm text-foreground transition-colors focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="portal-password" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="portal-password"
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your wedding access code"
                      className="h-11 w-full rounded-xl border border-foreground/15 bg-card/50 px-4 pr-12 text-sm text-foreground transition-colors focus:border-gold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold"
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {error && (
                    <p role="alert" className="mt-2 text-xs text-red-400">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne text-sm font-bold text-[#241c10] shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <ShieldCheck size={16} />
                  Access My Wedding
                </button>
                <p className="rounded-xl border border-dashed border-gold/30 bg-gold/5 px-4 py-3 text-center text-xs text-muted-foreground">
                  Demo mode — use password <span className="font-mono font-bold text-gold">kerala2026</span>.
                  In production this connects to Supabase Auth &amp; Storage.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ------------------------------ dashboard ------------------------------ */
  const tabs: { id: Tab; label: string; icon: typeof Images }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "albums", label: "Albums", icon: Images },
    { id: "proof", label: "Proof Selection", icon: Camera },
    { id: "favourites", label: "Favourites", icon: Heart },
    { id: "downloads", label: "Downloads", icon: Download },
  ];

  return (
    <section className="container-px min-h-[100svh] pb-24 pt-28 sm:pt-32">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Client Dashboard</p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl">
            Welcome back, <span className="italic text-gold">Anjali &amp; Joel</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Wedding · 12 Dec 2025 · St. Michael&apos;s Church, Kochi
          </p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-foreground/15 px-5 text-xs font-semibold text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Dashboard sections">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => {
              setTab(t.id);
              setActiveAlbum(null);
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300",
              tab === t.id
                ? "bg-gradient-to-r from-gold to-champagne text-[#241c10] shadow-gold"
                : "border border-foreground/15 text-muted-foreground hover:border-gold hover:text-gold"
            )}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {/* ------------------------------ OVERVIEW ------------------------------ */}
      {tab === "overview" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="rounded-3xl border border-border/70 bg-card/50 p-7 shadow-card backdrop-blur-sm">
                <h2 className="flex items-center gap-2 font-serif text-xl">
                  <CalendarCheck size={18} className="text-gold" />
                  Delivery tracking
                </h2>
                <ol className="mt-6 space-y-0">
                  {deliverySteps.map((s, i) => (
                    <li key={s.label} className="relative flex gap-4 pb-7 last:pb-0">
                      {i < deliverySteps.length - 1 && (
                        <span
                          className={cn(
                            "absolute left-[15px] top-8 h-full w-px",
                            s.done ? "bg-gold/40" : "bg-foreground/10"
                          )}
                          aria-hidden
                        />
                      )}
                      <span
                        className={cn(
                          "z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border",
                          s.done
                            ? "border-gold/50 bg-gold/10 text-gold"
                            : "border-foreground/15 text-muted-foreground"
                        )}
                        aria-hidden
                      >
                        {s.done ? <CheckCircle2 size={14} /> : <span className="h-2 w-2 rounded-full bg-current" />}
                      </span>
                      <div>
                        <p className={cn("text-sm font-semibold", s.done ? "text-foreground" : "text-muted-foreground")}>
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/70 bg-card/50 p-7 shadow-card backdrop-blur-sm">
                <h2 className="flex items-center gap-2 font-serif text-xl">
                  <Camera size={18} className="text-gold" />
                  Quick stats
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { v: "412", l: "Photos delivered" },
                    { v: String(selected.length), l: "Selected for album" },
                    { v: "3", l: "Films ready" },
                    { v: String(favs.length), l: "Favourites" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-border/60 bg-background/40 p-4 text-center">
                      <p className="font-serif text-2xl text-gold">{s.v}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <QRCard
              value={`${typeof window !== "undefined" ? window.location.origin : ""}/portal?gallery=demo`}
              title="Share Your Gallery"
              label="Scan to open your wedding gallery, films & albums on any phone"
            />
          </Reveal>
        </div>
      )}

      {/* ------------------------------ ALBUMS ------------------------------ */}
      {tab === "albums" && !activeAlbum && (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {albums.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActiveAlbum(a)}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-card"
                aria-label={`Open album: ${a.title}`}
              >
                <KPhoto
                  src={u(a.cover)}
                  alt={a.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="aspect-[3/4]"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-serif text-xl text-white">{a.title}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-widest text-champagne">
                    {a.count} photos · 12 Dec 2025
                  </span>
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {i === 0 ? "Proofing open" : "Approved"}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      )}

      {tab === "albums" && activeAlbum && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setActiveAlbum(null)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={14} />
            Back to albums
          </button>
          <GalleryExperience gallery={activeAlbum} />
        </div>
      )}

      {/* ------------------------------ PROOF SELECTION ------------------------------ */}
      {tab === "proof" && (
        <div className="mt-10">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 p-5">
              <div>
                <h2 className="font-serif text-lg">Select your favourite frames</h2>
                <p className="text-xs text-muted-foreground">
                  Tap photos to choose them for your album &amp; prints. Your selections are saved automatically.
                </p>
              </div>
              <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-bold text-gold">
                {selected.length} selected
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {proofImages.map((im, i) => {
              const isSel = selected.includes(im.id);
              return (
                <Reveal key={`${im.id}-${i}`} delay={(i % 6) * 0.04} y={16}>
                  <button
                    type="button"
                    onClick={() => toggleSelect(im.id)}
                    aria-pressed={isSel}
                    aria-label={`${isSel ? "Remove" : "Add"} ${im.caption} ${isSel ? "from" : "to"} album selection`}
                    className="group relative block w-full overflow-hidden rounded-2xl"
                    style={{ aspectRatio: im.aspect }}
                  >
                    <KPhoto
                      src={u(im.id, 600)}
                      alt={im.alt}
                      sizes="(max-width:640px) 50vw, 16vw"
                      className="absolute inset-0"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={cn(
                        "absolute inset-0 transition-all duration-300",
                        isSel ? "bg-gold/20 ring-2 ring-inset ring-gold" : "bg-black/0 group-hover:bg-black/20"
                      )}
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold transition-all duration-300",
                        isSel ? "bg-gold text-[#241c10]" : "border border-white/40 bg-black/40 text-white"
                      )}
                      aria-hidden
                    >
                      {isSel ? "✓" : "+"}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setSaved(true)}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-8 text-sm font-bold text-[#241c10] shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
            >
              <CheckCircle2 size={15} />
              Save {selected.length} selections
            </button>
            {saved && (
              <p className="mt-3 text-xs font-medium text-gold" role="status">
                Selections saved! Our album designer will start on your lay-flat album.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------ FAVOURITES ------------------------------ */}
      {tab === "favourites" && (
        <div className="mt-10">
          <p className="mb-6 max-w-xl text-sm text-muted-foreground">
            Photos you hearted from any gallery — press the ♥ in a fullscreen view to add more.
          </p>
          {favs.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {favs.map((id, i) => {
                const im = albums.flatMap((a) => a.images).find((x) => x.id === id);
                if (!im) return null;
                return (
                  <Reveal key={id} delay={(i % 6) * 0.04} y={16}>
                    <button
                      type="button"
                      onClick={() => openFavLightbox(i)}
                      className="group relative block w-full overflow-hidden rounded-2xl"
                      style={{ aspectRatio: im.aspect }}
                      aria-label={`Open favourite: ${im.caption}`}
                    >
                      <KPhoto
                        src={u(id, 600)}
                        alt={im.alt}
                        sizes="(max-width:640px) 50vw, 16vw"
                        className="absolute inset-0"
                        imgClassName="transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-gold/90 text-[#241c10]" aria-hidden>
                        <Heart size={11} className="fill-current" />
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-foreground/15 py-16 text-center">
              <Heart size={28} className="mx-auto text-gold/50" />
              <p className="mt-4 font-serif text-xl">No favourites yet</p>
              <p className="mt-1 text-sm text-muted-foreground">Open any album and tap the ♥ in fullscreen.</p>
            </div>
          )}
          <Lightbox
            images={albums.flatMap((a) => a.images).filter((im) => favs.includes(im.id))}
            startIndex={lightbox?.index ?? null}
            onClose={() => setLightbox(null)}
          />
        </div>
      )}

      {/* ------------------------------ DOWNLOADS ------------------------------ */}
      {tab === "downloads" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: Images, title: "High-resolution photos", detail: "412 photos · ZIP · 4.2 GB", note: "Original quality, watermark-free" },
              { icon: Film, title: "Wedding films", detail: "Teaser · Highlight · Same Day Edit · Drone", note: "4K · MP4 · streaming links" },
              { icon: Camera, title: "Luxury album (PDF proof)", detail: "Layout preview for approval", note: "Approve online in 3 clicks" },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-card/50 p-6 shadow-card backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold">
                      <d.icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg">{d.title}</h3>
                      <p className="text-xs text-muted-foreground">{d.detail}</p>
                      <p className="mt-0.5 text-[11px] text-gold">{d.note}</p>
                    </div>
                  </div>
                  <a
                    href={u("1519741497674-611481863552", 1200)}
                    download
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-5 text-xs font-bold text-[#241c10] shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Download size={13} />
                    {i === 2 ? "Review Album" : "Download"}
                  </a>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <p className="flex items-start gap-2.5 rounded-2xl border border-border/60 bg-card/30 p-5 text-xs leading-relaxed text-muted-foreground">
                <QrCode size={15} className="mt-0.5 shrink-0 text-gold" />
                In production, downloads stream from Cloudinary/Supabase Storage with signed,
                expiring URLs — and you'll get a download link on WhatsApp the moment your
                gallery is ready.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <QRCard value={`${typeof window !== "undefined" ? window.location.origin : ""}/portal`} title="Wedding QR" />
          </Reveal>
        </div>
      )}
    </section>
  );
}
