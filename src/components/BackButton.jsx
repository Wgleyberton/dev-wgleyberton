import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BackButton({ color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      style={{ position: 'fixed', top: 32, left: 36, zIndex: 100 }}
    >
      <Link to="/">
        <motion.div
          whileHover={{ x: -4, opacity: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color,
            opacity: 0.6,
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          HOME
        </motion.div>
      </Link>
    </motion.div>
  );
}
