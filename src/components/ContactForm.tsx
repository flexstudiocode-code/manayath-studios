"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { districts, weddingTypes, waLink } from "@/data/site";
import { packages } from "@/data/services";

const budgets = ["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹2,00,000", "₹2,00,000+", "Not decided yet"];
const guestOptions = ["Under 100", "100 – 300", "300 – 600", "600 – 1,000", "1,000+"];
const eventOptions = ["Photography", "Wedding Film", "Drone Coverage", "Save The Date", "Pre Wedding", "Live Streaming", "Luxury Album"];

interface FormData {
  brideName: string;
  groomName: string;
  email: string;
  phone: string;
  whatsapp: string;
  date: string;
  venue: string;
  district: string;
  type: string;
  events: string[];
  budget: string;
  guests: string;
  pkg: string;
  message: string;
}

const initial: FormData = {
  brideName: "",
  groomName: "",
  email: "",
  phone: "",
  whatsapp: "",
  date: "",
  venue: "",
  district: "",
  type: "",
  events: [],
  budget: "",
  guests: "",
  pkg: "",
  message: "",
};

const inputCls =
  "h-11 w-full rounded-xl border border-foreground/15 bg-card/50 px-4 text-sm text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));
  const toggleEvent = (e: string) =>
    setData((d) => ({
      ...d,
      events: d.events.includes(e) ? d.events.filter((x) => x !== e) : [...d.events, e],
    }));

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, enquiryType: data.type, type: "inquiry" }),
      });
    } catch {
      /* demo mode — proceed */
    }
    setStatus("done");
  };

  const waMessage = `Hi Manayath Studios! I'd like to enquire about a wedding.\n\nBride: ${data.brideName || "-"}\nGroom: ${data.groomName || "-"}\nDate: ${data.date || "TBD"}\nVenue: ${data.venue || "TBD"}\nWedding Type: ${data.type || "TBD"}\nPackage: ${data.pkg || "Not sure yet"}`;

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/40 bg-gold/5 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-6 font-serif text-2xl">Thank you{data.brideName && `, ${data.brideName}`}!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been received. Our team responds within 24 hours — usually much
          faster. For an instant reply, send us your details on WhatsApp.
        </p>
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={16} />
          Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-border/70 bg-card/40 p-6 shadow-card backdrop-blur-sm sm:p-8" aria-label="Wedding enquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bride" className={labelCls}>Bride name *</label>
          <input id="bride" required value={data.brideName} onChange={(e) => set("brideName", e.target.value)} placeholder="e.g. Anjali" className={inputCls} />
        </div>
        <div>
          <label htmlFor="groom" className={labelCls}>Groom name *</label>
          <input id="groom" required value={data.groomName} onChange={(e) => set("groomName", e.target.value)} placeholder="e.g. Joel" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email *</label>
          <input id="email" type="email" required value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone *</label>
          <input id="phone" type="tel" required value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91" className={inputCls} />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelCls}>WhatsApp number</label>
          <input id="whatsapp" type="tel" value={data.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="Same or different" className={inputCls} />
        </div>
        <div>
          <label htmlFor="date" className={labelCls}>Wedding date</label>
          <input id="date" type="date" value={data.date} onChange={(e) => set("date", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="venue" className={labelCls}>Wedding venue</label>
          <input id="venue" value={data.venue} onChange={(e) => set("venue", e.target.value)} placeholder="Venue name or city" className={inputCls} />
        </div>
        <div>
          <label htmlFor="district" className={labelCls}>District</label>
          <select id="district" value={data.district} onChange={(e) => set("district", e.target.value)} className={inputCls}>
            <option value="">Select district</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="type" className={labelCls}>Wedding type</label>
          <select id="type" value={data.type} onChange={(e) => set("type", e.target.value)} className={inputCls}>
            <option value="">Select wedding type</option>
            {weddingTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pkg" className={labelCls}>Preferred package</label>
          <select id="pkg" value={data.pkg} onChange={(e) => set("pkg", e.target.value)} className={inputCls}>
            <option value="">Select package</option>
            {packages.map((p) => (
              <option key={p.id} value={`${p.name} (${p.priceFrom})`}>{p.name} — {p.priceFrom}</option>
            ))}
            <option value="Not sure yet">Not sure yet — need advice</option>
          </select>
        </div>
      </div>

      {/* Events */}
      <fieldset className="mt-6">
        <legend className={labelCls}>Events required</legend>
        <div className="flex flex-wrap gap-2">
          {eventOptions.map((ev) => (
            <button
              key={ev}
              type="button"
              onClick={() => toggleEvent(ev)}
              aria-pressed={data.events.includes(ev)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                data.events.includes(ev)
                  ? "bg-gradient-to-r from-gold to-champagne text-[#241c10] shadow-gold"
                  : "border border-foreground/15 text-muted-foreground hover:border-gold hover:text-gold"
              )}
            >
              {ev}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelCls}>Estimated budget</label>
          <select id="budget" value={data.budget} onChange={(e) => set("budget", e.target.value)} className={inputCls}>
            <option value="">Select budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests" className={labelCls}>Number of guests</label>
          <select id="guests" value={data.guests} onChange={(e) => set("guests", e.target.value)} className={inputCls}>
            <option value="">Select guest count</option>
            {guestOptions.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message"
          rows={4}
          value={data.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your wedding — rituals, venues, what matters most to you…"
          className="w-full rounded-xl border border-foreground/15 bg-card/50 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne text-sm font-bold text-[#241c10] shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_hsl(var(--gold)/0.55)] disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
        <Send size={15} />
      </button>
      <p className="mt-3 text-[11px] text-muted-foreground">
        We reply within 24 hours. Your details are never shared.
      </p>
    </form>
  );
}
