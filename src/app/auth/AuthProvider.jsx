import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase, clearAuthParamsFromUrl } from '../lib/supabaseClient';
import { AuthContext } from './AuthContext';

async function fetchProfile(id) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, role, created_at')
    .eq('id', id)
    .single();
  if (error) console.error('Erro ao carregar perfil:', error.message);
  return data ?? null;
}

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileState, setProfileState] = useState(null);

  useEffect(() => {
    // getSession aguarda a troca do ?code= (PKCE) caso a página tenha vindo de um link de e-mail
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
      clearAuthParamsFromUrl();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const userId = session?.user?.id;

  const loadProfile = useCallback(
    (id) => fetchProfile(id).then((data) => setProfileState({ userId: id, data })),
    [],
  );

  useEffect(() => {
    if (!userId) return;
    let active = true;
    fetchProfile(userId).then((data) => {
      if (active) setProfileState({ userId, data });
    });
    return () => { active = false; };
  }, [userId]);

  const value = useMemo(() => ({
    session,
    user: session?.user ?? null,
    profile: userId && profileState?.userId === userId ? profileState.data : null,
    loading,
    signIn: (email, password) => supabase.auth.signInWithPassword({ email, password }),
    signOut: () => supabase.auth.signOut(),
    refreshProfile: () => userId && loadProfile(userId),
  }), [session, profileState, userId, loading, loadProfile]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
