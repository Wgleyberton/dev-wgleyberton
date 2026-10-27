import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import FinanceProvider from '../finance/FinanceProvider';
import {
  CloseIcon, DashboardIcon, ExpenseIcon, HomeIcon, IncomeIcon, InvestmentIcon, LogoMark, LogoutIcon, MenuIcon, UserIcon,
} from './icons';

const navItems = [
  { to: '/app', label: 'Visão geral', icon: <DashboardIcon />, end: true },
  { to: '/app/receitas', label: 'Receitas', icon: <IncomeIcon /> },
  { to: '/app/despesas', label: 'Despesas', icon: <ExpenseIcon /> },
  { to: '/app/investimentos', label: 'Investimentos', icon: <InvestmentIcon /> },
  { to: '/app/perfil', label: 'Meu perfil', icon: <UserIcon /> },
];

function pageTitle(pathname) {
  const match = [...navItems].reverse().find((item) => pathname.startsWith(item.to));
  return match?.label ?? 'Visão geral';
}

function initials(name, email) {
  const source = name?.trim() || email || '?';
  return source
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

export default function AppLayout() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    navigate('/app/login', { replace: true });
  }

  const displayName = profile?.full_name || user?.email;

  return (
    <div className="shell">
      <aside className={`shell__sidebar ${menuOpen ? 'shell__sidebar--open' : ''}`}>
        <div className="shell__brand">
          <span className="shell__logo"><LogoMark /></span>
          <span>Finanças</span>
          <button
            type="button"
            className="shell__icon-btn shell__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="shell__nav">
          {navItems.map(({ to, label, icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `shell__nav-item ${isActive ? 'shell__nav-item--active' : ''}`}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="shell__nav shell__nav--bottom">
          <Link to="/" className="shell__nav-item">
            <HomeIcon />
            Voltar ao site
          </Link>
          <button type="button" className="shell__nav-item" onClick={handleSignOut}>
            <LogoutIcon />
            Sair
          </button>
        </div>
      </aside>

      {menuOpen && <div className="shell__backdrop" onClick={() => setMenuOpen(false)} />}

      <div className="shell__body">
        <header className="shell__topbar">
          <button
            type="button"
            className="shell__icon-btn shell__menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <MenuIcon />
          </button>
          <h1 className="shell__title">{pageTitle(location.pathname)}</h1>
          <div className="shell__user">
            <span className="shell__user-name">{displayName}</span>
            <span className="shell__avatar" aria-hidden="true">{initials(profile?.full_name, user?.email)}</span>
          </div>
        </header>

        <main className="shell__main">
          <FinanceProvider>
            <Outlet />
          </FinanceProvider>
        </main>
      </div>
    </div>
  );
}
