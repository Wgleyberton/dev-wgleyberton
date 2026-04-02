import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import Cursor from '../components/Cursor';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './SupportAnalyst.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const competencies = [
  { area: 'Suporte Técnico', items: ['Triagem de Incidentes', 'Solução de Problemas', 'SLA', 'FCR'] },
  { area: 'Ferramentas', items: ['Jira', 'Hyper-V', 'Zendesk', 'Active Directory', 'Cloudflare', 'VPS'] },
  { area: 'Metodologias', items: ['ITIL', 'Agile', 'KPI Analysis', 'Root Cause'] },
];

const courses = [
  {
    title: 'Docker Completo do Zero ao Avançado',
    issuer: 'Udemy',
    year: '2026',
  },
  {
    title: 'Introdução as Normas ISO 9001:2015 - Sistema de Gestão da Qualidade',
    issuer: 'ecursosonline',
    year: '2019',
  },
  {
    title: 'Analista SOC',
    issuer: 'Hackone',
    year: 'Cursando',
  },
  {
    title: 'Formação Windows Server 2025',
    issuer: 'Udemy',
    year: 'Cursando',
  },
  {
    title: 'Hacker Ético com Kali Linux',
    issuer: 'Udemy',
    year: 'Cursando',
  },

];

const experiences = [
  {
    role: 'Analista de Suporte',
    company: 'Connectcom',
    period: '2018 – 2022',
    highlights: [
      'Redução de 35% no tempo médio de resolução de chamados.',
      'Cumprimento de SLA acima de 95%.',
      'Suporte a mais de 200 usuários em ambiente corporativo.',
      'Índice de resolução no primeiro contato superior a 75%',
    ],
  },
  {
    role: 'Suporte Técnico N1 e N2',
    company: 'Edocx',
    period: '2016 – 2017',
    highlights: [
      'Atendimento de primeiro nível com 92% de satisfação CSAT.',
      'Gerenciamento de fila de chamados.',
      'Documentação de infraestrutura de serviços.',
    ],
  },
];

const metrics = [
  { n: '92%', label: 'CSAT médio' },
  { n: '200+', label: 'Usuários atendidos' },
  { n: '35%', label: 'Redução de MTTR' },
  { n: '50+', label: 'Docs criados' },
];

export default function SupportAnalyst() {
  return (
    <div className="sa">
      <Cursor color="#ff6b35" />
      <ParticleField color="#ff6b35" count={40} />
      <BackButton color="#ff6b35" />

      <div className="sa__glow-top" />
      <div className="sa__glow-bottom" />

      <div className="sa__content">

        {/* Hero */}
        <section className="sa__section">
          <motion.p
            className="sa__eyebrow"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            Support Analyst
          </motion.p>

          <motion.h1
            className="sa__title"
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            Resolvendo<br />problemas reais.
          </motion.h1>

          <motion.p
            className="sa__subtitle"
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
          >
            Analista focado em diagnóstico preciso, resolução eficiente e experiência do usuário como prioridade.
          </motion.p>

          <motion.div
            className="sa__metrics"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="sa__metric-number">{m.n}</div>
                <div className="sa__metric-label">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Competencies */}
        <section className="sa__section">
          <SectionTitle label="Competências" />
          <div className="sa__comp-grid">
            {competencies.map((group, i) => (
              <motion.div
                key={group.area}
                className="sa__comp-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="sa__comp-area">{group.area}</div>
                <div className="sa__comp-tags">
                  {group.items.map((item) => (
                    <span key={item} className="sa__comp-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {/*<section className="sa__section">
          <SectionTitle label="Certificações" />
          <div className="sa__cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.credential}
                className="sa__cert-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="sa__cert-icon">
                  <BadgeIcon />
                </div>
                <div className="sa__cert-info">
                  <span className="sa__cert-title">{cert.title}</span>
                  <span className="sa__cert-issuer">{cert.issuer}</span>
                </div>
                <span className="sa__cert-year">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </section>*/}

        {/* Courses */}
        <section className="sa__section">
          <SectionTitle label="Cursos" />
          <div className="sa__cert-grid">
            {courses.map((course, i) => (
              <motion.div
                key={course.credential}
                className="sa__cert-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="sa__cert-icon">
                  <BookIcon />
                </div>
                <div className="sa__cert-info">
                  <span className="sa__cert-title">{course.title}</span>
                  <span className="sa__cert-issuer">{course.issuer}</span>
                </div>
                <span className="sa__cert-year">{course.year}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="sa__section sa__section--exp">
          <SectionTitle label="Experiência" />
          <div className="sa__exp-list">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="sa__exp-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="sa__exp-header">
                  <div>
                    <h3 className="sa__exp-role">{exp.role}</h3>
                    <span className="sa__exp-company">{exp.company}</span>
                  </div>
                  <span className="sa__exp-period">{exp.period}</span>
                </div>
                <ul className="sa__exp-highlights">
                  {exp.highlights.map((h) => (
                    <li key={h} className="sa__exp-highlight">
                      <span className="sa__exp-bullet">▸</span>
                      <span className="sa__exp-text">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer accent="#ff6b35" />
    </div>
  );
}

function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1L9.545 5.09L14 5.09L10.545 7.727L11.818 12L8 9.636L4.182 12L5.455 7.727L2 5.09L6.455 5.09L8 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 2.5A1.5 1.5 0 013.5 1H13v11H3.5A1.5 1.5 0 012 10.5v-8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13 12v2H3.5A1.5 1.5 0 012 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SectionTitle({ label }) {
  return (
    <motion.div
      className="sa__section-title"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="sa__section-title-text">— {label}</span>
      <div className="sa__section-title-line" />
    </motion.div>
  );
}

