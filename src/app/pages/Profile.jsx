import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../auth/AuthContext';

const roleLabels = { admin: 'Administrador', user: 'Usuário' };

export default function Profile() {
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

  return (
    <section className="card card--narrow">
      <div className="card__header">
        <h2 className="card__title">Meu perfil</h2>
      </div>
      <dl className="details">
        <dt>E-mail</dt>
        <dd>{user?.email}</dd>
        <dt>Nome</dt>
        <dd>
          {editing ? (
            <form className="inline-form" onSubmit={handleSave}>
              <input
                className="form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                autoFocus
              />
              <button className="btn btn--sm" type="submit" disabled={saving}>Salvar</button>
              <button className="btn btn--ghost btn--sm" type="button" onClick={() => setEditing(false)}>
                Cancelar
              </button>
            </form>
          ) : (
            <>
              {profile?.full_name || <span className="muted">Não informado</span>}
              <button type="button" className="link link--inline" onClick={startEditing}>editar</button>
            </>
          )}
          {error && <p className="form__error" role="alert">{error}</p>}
        </dd>
        <dt>Perfil</dt>
        <dd>{profile ? roleLabels[profile.role] ?? profile.role : '—'}</dd>
        <dt>Membro desde</dt>
        <dd>{profile ? new Date(profile.created_at).toLocaleDateString('pt-BR') : '—'}</dd>
      </dl>
    </section>
  );
}
