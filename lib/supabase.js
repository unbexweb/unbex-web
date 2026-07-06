import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Cliente con service role: solo se usa en API routes / Server Components.
// Ignora RLS, por eso "server-only" evita que se pueda importar desde el cliente.
// Inicialización lazy: si faltan las credenciales no rompe al importar el módulo,
// devuelve null para que el caller decida el fallback (lista vacía, 503, etc).
let supabaseAdmin = null;

export function getSupabaseAdmin() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  if (!supabaseAdmin) {
    supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );
  }
  return supabaseAdmin;
}
