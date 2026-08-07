import { NextResponse } from "next/server";

/**
 * Contact & booking submission endpoint.
 *
 * In production, connect this to Supabase (insert into `enquiries` table),
 * an email provider (Resend/SMTP via CONTACT_EMAIL) and a WhatsApp Business
 * API webhook. In demo mode it simply acknowledges the request so the
 * front-end flow can be demonstrated end-to-end.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const type = body?.type ?? "inquiry";

    if (!body?.email && type === "newsletter") {
      return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    }

    // TODO: persist to Supabase when NEXT_PUBLIC_SUPABASE_URL is configured
    // const supabase = getSupabase();
    // await supabase.from("enquiries").insert({ type, payload: body });

    return NextResponse.json(
      {
        ok: true,
        message: type === "newsletter" ? "Subscribed" : "Enquiry received — we'll respond within 24 hours.",
        ref: `DEMO-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
