import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { authErrorMessage } from '../lib/authErrors';
import AuthCard from '../layout/AuthCard';
import Loader from '../layout/Loader';

export default function Login() {
  const { session, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const redirectTo = location.state?.from || '/app';

  if (loading) return <Loader />;
  if (session) return <Navigate to={redirectTo} replace />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: signInError } = await signIn(email.trim(), password);
    setSubmitting(false);
    if (signInError) {
      setError(authErrorMessage(signInError));
      return;
    }
    navigate(redirectTo, { replace: true });
  }

  return (
    <AuthCard title="Entrar">
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
        <label className="app__label">
          Senha
          <input
            className="app__input"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="app__error" role="alert">{error}</p>}
        <button className="app__btn" type="submit" disabled={submitting}>
          {submitting ? 'Entrando…' : 'Entrar'}
        </button>
        <Link to="/app/forgot-password" className="app__link">Esqueci minha senha</Link>
      </form>
    </AuthCard>
  );
}
