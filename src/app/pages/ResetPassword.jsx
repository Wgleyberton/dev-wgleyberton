import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../auth/AuthContext';
import { authErrorMessage } from '../lib/authErrors';
import AuthCard from '../layout/AuthCard';
import Loader from '../layout/Loader';

const MIN_LENGTH = 8;

export default function ResetPassword() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (loading) return <Loader />;

  if (!session) {
    return (
      <AuthCard title="Link inválido" subtitle="O link de redefinição expirou ou já foi utilizado.">
        <div className="app__form">
          <Link to="/app/forgot-password" className="app__link">Solicitar novo link</Link>
        </div>
      </AuthCard>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (password.length < MIN_LENGTH) {
      setError(`A senha deve ter ao menos ${MIN_LENGTH} caracteres.`);
      return;
    }
    if (password !== confirm) {
      setError('As senhas não conferem.');
      return;
    }
    setSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSubmitting(false);
    if (updateError) {
      setError(authErrorMessage(updateError));
      return;
    }
    navigate('/app', { replace: true });
  }

  return (
    <AuthCard title="Nova senha">
      <form className="app__form" onSubmit={handleSubmit}>
        <label className="app__label">
          Nova senha
          <input
            className="app__input"
            type="password"
            autoComplete="new-password"
            required
            minLength={MIN_LENGTH}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="app__label">
          Confirmar senha
          <input
            className="app__input"
            type="password"
            autoComplete="new-password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </label>
        {error && <p className="app__error" role="alert">{error}</p>}
        <button className="app__btn" type="submit" disabled={submitting}>
          {submitting ? 'Salvando…' : 'Salvar senha'}
        </button>
      </form>
    </AuthCard>
  );
}
