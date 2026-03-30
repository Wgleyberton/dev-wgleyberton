import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const education = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Centro Universitário UniProjeção',
    period: '2013 – 2017',
    type: 'Graduação',
    icon: <GradIcon />,
  },
  {
    degree: 'MBA em Gestão de Tecnologia da Informação',
    institution: 'Anhanguera Educacional',
    period: '2025 – 2025',
    type: 'Pós-Graduação',
    icon: <PosGradIcon />,
  },
  {
    degree: 'Engenharia de Software com Ênfase em Qualidade e Testes',
    institution: 'Anhanguera Educacional',
    period: '2023 – 2024',
    type: 'Pós-Graduação',
    icon: <PosGradIcon />,
  },
  {
    degree: 'Desenvolvimento Back End',
    institution: 'Anhanguera Educacional',
    period: '2024 – 2024',
    type: 'Pós-Graduação',
    icon: <PosGradIcon />,
  },
  {
    degree: 'Devops',
    institution: 'Anhanguera Educacional',
    period: 'Cursando',
    type: 'Pós-Graduação',
    icon: <PosGradIcon />,
  },
];

export default function Home() {
  return (
    <div className="home">
      <Cursor color="#c9a84c" />
      <ParticleField color="#c9a84c" count={50} />
      <div className="home__glow" />

      {/* ── HERO ── */}
      <section className="home__hero">
        <motion.p
          className="home__eyebrow"
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
        >
          Portfólio
        </motion.p>

        <motion.h1
          className="home__title"
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
        >
          Wgleyberton
        </motion.h1>

        <motion.p
          className="home__subtitle"
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
        >
          Desenvolvedor apaixonado por tecnologia e analista dedicado a soluções de suporte.
        </motion.p>

        <motion.div
          className="home__divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Scroll cue */}
        <motion.div
          className="home__scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="home__scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── SOBRE + FORMAÇÃO ── */}
      <section className="home__about-section">
        <div className="home__about-inner">

          {/* Apresentação profissional */}
          <motion.div
            className="home__about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="home__about-label">Sobre mim</p>
            <h2 className="home__about-title">
              Tecnologia que<br />resolve problemas.
            </h2>
            <p className="home__about-text">
              Profissional com atuação nas áreas de desenvolvimento de software e suporte técnico,
              comprometido em entregar soluções de qualidade com foco na experiência do usuário.
            </p>
            <p className="home__about-text">
              Combino habilidades técnicas de programação com visão analítica de suporte para
              entender cenários complexos, propor melhorias e garantir a continuidade dos serviços.
            </p>
            <div className="home__about-traits">
              {['Resolução de problemas', 'Comunicação clara', 'Aprendizado contínuo', 'Foco no usuário'].map((trait) => (
                <span key={trait} className="home__trait">{trait}</span>
              ))}
            </div>
          </motion.div>

          {/* Formação */}
          <motion.div
            className="home__education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="home__about-label">Formação</p>
            <div className="home__edu-list">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  className="home__edu-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="home__edu-icon">{item.icon}</div>
                  <div className="home__edu-info">
                    <span className="home__edu-degree">{item.degree}</span>
                    <span className="home__edu-institution">{item.institution}</span>
                    <span className={`home__edu-badge home__edu-badge--${item.type === 'Graduação' ? 'grad' : 'posgrad'}`}>
                      {item.type}
                    </span>
                  </div>
                  <span className="home__edu-period">{item.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CARDS DE ÁREA ── */}
      <section className="home__cards-section">
        <motion.p
          className="home__cards-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Escolha uma área
        </motion.p>
        <motion.div
          className="home__cards"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <RoleCard
            to="/developer"
            label="Desenvolvedor"
            description="Código, arquitetura e soluções criativas"
            accent="#00c8ff"
            accentSecondary="#7b4fff"
            icon={<CodeIcon />}
          />
          <RoleCard
            to="/support-analyst"
            label="Analista de Suporte e Segurança"
            description="Diagnóstico, suporte e experiência do cliente"
            accent="#ff6b35"
            accentSecondary="#c44dff"
            icon={<SupportIcon />}
          />
        </motion.div>
      </section>

      <div className="home__bottom-fade" />
      <Footer accent="#c9a84c" />
    </div>
  );
}

function RoleCard({ to, label, description, accent, accentSecondary, icon }) {
  return (
    <Link to={to}>
      <motion.div
        className="role-card"
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          '--card-accent': accent,
          '--card-accent-glow': `${accent}18`,
          '--card-icon-bg': `linear-gradient(135deg, ${accent}20, ${accentSecondary}20)`,
          '--card-icon-border': `${accent}30`,
          '--card-title-gradient': `linear-gradient(135deg, #fff 0%, ${accent} 100%)`,
        }}
      >
        <div className="role-card__corner" />
        <div className="role-card__icon">{icon}</div>
        <h2 className="role-card__title">{label}</h2>
        <p className="role-card__desc">{description}</p>
        <div className="role-card__cta">
          EXPLORAR
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M6 8L2 11L6 14M16 8L20 11L16 14M13 4L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 2V7M11 15V20M2 11H7M15 11H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GradIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L17 6L9 10L1 6L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 8.5V13C4 13 6 15 9 15C12 15 14 13 14 13V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 6V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PosGradIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L17 6L9 10L1 6L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 8.5V13C4 13 6 15 9 15C12 15 14 13 14 13V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 6V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 5.5L9 4.5L11 5.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="3.5" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 16H12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 13V16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 7L7.5 9L12.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13.5 12H14C15.657 12 17 10.657 17 9C17 7.343 15.657 6 14 6C13.874 6 13.75 6.009 13.628 6.026C13.188 4.276 11.608 3 9.75 3C7.679 3 6 4.679 6 6.75C6 6.834 6.004 6.917 6.01 7H6C4.343 7 3 8.343 3 10C3 11.657 4.343 13 6 13H13.5V12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
