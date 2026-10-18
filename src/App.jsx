import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import Home from './pages/Home';
import Developer from './pages/Developer';
import SupportAnalyst from './pages/SupportAnalyst';
import './styles/globals.css';

// Área logada carregada sob demanda: o portfólio não baixa o SDK do Supabase
const AppRoutes = lazy(() => import('./app/AppRoutes'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname.startsWith('/app') ? '/app' : location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/support-analyst" element={<SupportAnalyst />} />
          <Route
            path="/app/*"
            element={
              <Suspense fallback={null}>
                <AppRoutes />
              </Suspense>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}
