"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
    } catch {
      /* demo mode — still confirm */
    }
    setState("done");
  };

  if (state === "done") {
    return (
      <p className="flex items-start gap-2 text-sm text-foreground">
        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold" />
        Thank you! Wedding inspiration is on its way to your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex max-w-sm overflow-hidden rounded-full border border-foreground/15 bg-card/50 backdrop-blur-sm transition-colors focus-within:border-gold">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email for wedding inspiration"
          className="w-full bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          aria-label="Subscribe to newsletter"
          className="m-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-r from-gold to-champagne text-[#241c10] transition-transform duration-300 hover:scale-105 disabled:opacity-60"
        >
          <Send size={14} />
        </button>
      </div>
      <p className="mt-2.5 text-[11px] text-muted-foreground">
        Monthly inspiration, real weddings & offers. No spam, ever.
      </p>
    </form>
  );
}
