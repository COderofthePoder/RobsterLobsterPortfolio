// Dieser Client wird von der Lovable-Supabase-Integration verwaltet.
// Nach dem Verbinden der Integration ersetzt Lovable URL und Key automatisch.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "";

export const isSupabaseConfigured =
  SUPABASE_URL.length > 0 && SUPABASE_PUBLISHABLE_KEY.length > 0;

export const supabase = createClient<Database>(
  SUPABASE_URL || "https://placeholder.supabase.co",
  SUPABASE_PUBLISHABLE_KEY || "placeholder-key",
);
