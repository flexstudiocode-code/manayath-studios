/**
 * Supabase client — activates only when environment variables are configured.
 * The site runs in demo mode (local data) without credentials and gracefully
 * upgrades to a real backend once NEXT_PUBLIC_SUPABASE_URL / ANON_KEY are set.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnon) return null;
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnon, {
      auth: { persistSession: true, autoRefreshToken: true },
    });
  }
  return client;
}

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnon);
}

/** Cloudinary image URL helper (falls back to Unsplash demo images) */
export function cldUrl(publicId: string, w = 1200) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloud) return null;
  return `https://res.cloudinary.com/${cloud}/image/upload/q_auto,f_auto,w_${w}/v1/${publicId}`;
}
