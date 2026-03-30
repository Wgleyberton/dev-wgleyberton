import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor({ color }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTrail(pos), 80);
    return () => clearTimeout(timer);
  }, [pos]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: pos.y - 6,
          left: pos.x - 6,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: color,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        animate={{ top: pos.y - 6, left: pos.x - 6 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: trail.y - 18,
          left: trail.x - 18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `1.5px solid ${color}`,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.4,
        }}
        animate={{ top: trail.y - 18, left: trail.x - 18 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      />
    </>
  );
}
