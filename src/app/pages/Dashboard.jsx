import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../auth/AuthContext';

const roleLabels = { admin: 'Administrador', user: 'Usuário' };

export default function Dashboard() {
  const { user, profile, refreshProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  function startEditing() {
    setName(profile?.full_name ?? '');
    setError(null);
    setEditing(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ full_name: name.trim() || null })
      .eq('id', user.id);
    setSaving(false);
    if (updateError) {
      setError('Não foi possível salvar o nome.');
      return;
    }
    await refreshProfile();
    setEditing(false);
  }

  const firstName = profile?.full_name?.split(' ')[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="app__eyebrow">Dashboard</p>
      <h1 className="app__title">Olá{firstName ? `, ${firstName}` : ''}.</h1>

      <div className="app__card app__card--wide">
        <h2 className="app__card-title">Meu perfil</h2>
        <dl className="app__details">
          <dt>E-mail</dt>
          <dd>{user?.email}</dd>
          <dt>Nome</dt>
          <dd>
            {editing ? (
              <form className="app__inline-form" onSubmit={handleSave}>
                <input
                  className="app__input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={120}
                  autoFocus
                />
                <button className="app__btn" type="submit" disabled={saving}>Salvar</button>
                <button className="app__btn app__btn--ghost" type="button" onClick={() => setEditing(false)}>
                  Cancelar
                </button>
              </form>
            ) : (
              <>
                {profile?.full_name || <span className="app__muted">Não informado</span>}
                <button type="button" className="app__link app__link--inline" onClick={startEditing}>
                  editar
                </button>
              </>
            )}
            {error && <p className="app__error" role="alert">{error}</p>}
          </dd>
          <dt>Perfil</dt>
          <dd>{profile ? roleLabels[profile.role] ?? profile.role : '—'}</dd>
          <dt>Membro desde</dt>
          <dd>{profile ? new Date(profile.created_at).toLocaleDateString('pt-BR') : '—'}</dd>
        </dl>
      </div>
    </motion.section>
  );
}
