import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function AppLayout() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate('/app/login', { replace: true });
  }

  return (
    <div className="app">
      <div className="app__glow" />
      <header className="app__header">
        <Link to="/app" className="app__brand">wgleyberton<span>/app</span></Link>
        <div className="app__header-user">
          <span className="app__header-email">{profile?.full_name || user?.email}</span>
          <button type="button" className="app__btn app__btn--ghost" onClick={handleSignOut}>
            Sair
          </button>
        </div>
      </header>
      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
}
