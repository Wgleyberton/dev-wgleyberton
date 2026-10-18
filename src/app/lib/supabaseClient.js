import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// PKCE: o retorno dos links de e-mail vem em ?code=..., sem conflitar com o HashRouter
export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        flowType: 'pkce',
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

// Remove ?code= / ?next= da URL depois que o SDK já trocou o código pela sessão
export function clearAuthParamsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('code') && !params.has('next')) return;
  params.delete('code');
  params.delete('next');
  const search = params.toString();
  window.history.replaceState(
    window.history.state,
    '',
    `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`,
  );
}
