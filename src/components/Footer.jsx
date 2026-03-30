import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/developer', label: 'Developer' },
  { to: '/support-analyst', label: 'Support Analyst' },
];

export default function Footer({ accent = '#c9a84c' }) {
  const location = useLocation();

  return (
    <motion.footer
      className="footer"
      style={{ '--footer-accent': accent }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__name">Wgleyberton</span>
          <span className="footer__tagline">Developer · Support Analyst</span>
        </div>

        {/* Nav */}
        <nav className="footer__nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`footer__link ${location.pathname === to ? 'footer__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/wgleyberton/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Wgleyberton"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Wgleyberton. Todos os direitos reservados.</span>
      </div>
    </motion.footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5 7.5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="5" cy="5.5" r="0.8" fill="currentColor"/>
      <path d="M8.5 13V10C8.5 8.619 9.619 7.5 11 7.5C12.381 7.5 13.5 8.619 13.5 10V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8.5 9.5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5C4.858 1.5 1.5 4.858 1.5 9C1.5 12.314 3.647 15.12 6.638 16.12C7.013 16.188 7.15 15.963 7.15 15.769C7.15 15.594 7.144 15.131 7.141 14.519C5.09 14.97 4.651 13.54 4.651 13.54C4.309 12.666 3.814 12.441 3.814 12.441C3.132 11.979 3.864 11.988 3.864 11.988C4.617 12.041 5.013 12.762 5.013 12.762C5.682 13.913 6.742 13.578 7.163 13.389C7.231 12.909 7.428 12.575 7.644 12.386C6.013 12.194 4.298 11.552 4.298 8.775C4.298 7.947 4.591 7.272 5.028 6.743C4.951 6.551 4.695 5.785 5.101 4.746C5.101 4.746 5.731 4.541 7.131 5.521C7.713 5.351 8.356 5.267 9 5.264C9.644 5.267 10.287 5.351 10.869 5.521C12.269 4.541 12.897 4.746 12.897 4.746C13.305 5.785 13.049 6.551 12.972 6.743C13.41 7.272 13.701 7.947 13.701 8.775C13.701 11.559 11.983 12.192 10.347 12.379C10.617 12.613 10.856 13.075 10.856 13.783C10.856 14.8 10.847 15.619 10.847 15.869C10.847 16.065 10.982 16.292 11.362 16.219C14.354 15.218 16.5 12.313 16.5 9C16.5 4.858 13.142 1.5 9 1.5Z" fill="currentColor"/>
    </svg>
  );
}
