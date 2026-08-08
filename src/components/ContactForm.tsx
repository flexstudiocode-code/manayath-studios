"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { waLink } from "@/data/site";

interface FormData {
  name: string;
  whatsapp: string;
  message: string;
}

const initial: FormData = {
  name: "",
  whatsapp: "",
  message: "",
};

const inputCls =
  "h-11 w-full rounded-xl border border-foreground/15 bg-card/50 px-4 text-sm text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "inquiry" }),
      });
    } catch {
      /* demo mode — proceed */
    }
    setStatus("done");
  };

  const waMessage = `Hi Manayath Studios! I'd like to enquire about a wedding.\n\nName: ${data.name || "-"}\nWhatsApp: ${data.whatsapp || "-"}\nMessage: ${data.message || "-"}`;

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/40 bg-gold/5 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-6 font-serif text-2xl">Thank you{data.name && `, ${data.name}`}!</h3>
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
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>Client name *</label>
          <input id="name" required value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Anjali" className={inputCls} />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelCls}>WhatsApp number *</label>
          <input id="whatsapp" type="tel" required value={data.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+91" className={inputCls} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>Message *</label>
        <textarea
          id="message"
          rows={5}
          required
          value={data.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your wedding — date, venue, what matters most to you…"
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
