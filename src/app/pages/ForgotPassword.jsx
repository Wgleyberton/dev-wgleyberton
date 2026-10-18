import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { authErrorMessage } from '../lib/authErrors';
import AuthCard from '../layout/AuthCard';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    // O link do e-mail volta para a raiz com ?next=; main.jsx converte para a rota com hash
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/?next=/app/reset-password`,
    });
    setSubmitting(false);
    if (resetError) {
      setError(authErrorMessage(resetError));
      return;
    }
    setSent(true);
  }

  return (
    <AuthCard
      title="Recuperar senha"
      subtitle={sent ? null : 'Informe seu e-mail para receber o link de redefinição.'}
    >
      {sent ? (
        <div className="app__form">
          <p className="app__success">
            Se o e-mail estiver cadastrado, você receberá um link em instantes.
            Abra o link neste mesmo navegador.
          </p>
          <Link to="/app/login" className="app__link">Voltar ao login</Link>
        </div>
      ) : (
        <form className="app__form" onSubmit={handleSubmit}>
          <label className="app__label">
            E-mail
            <input
              className="app__input"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {error && <p className="app__error" role="alert">{error}</p>}
          <button className="app__btn" type="submit" disabled={submitting}>
            {submitting ? 'Enviando…' : 'Enviar link'}
          </button>
          <Link to="/app/login" className="app__link">Voltar ao login</Link>
        </form>
      )}
    </AuthCard>
  );
}
