import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="app app--center">
      <div className="app__glow" />
      <motion.div
        className="app__card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="app__eyebrow">Área restrita</p>
        <h1 className="app__title">{title}</h1>
        {subtitle && <p className="app__subtitle">{subtitle}</p>}
        {children}
      </motion.div>
      <Link to="/" className="app__home-link">← Voltar ao site</Link>
    </div>
  );
}
