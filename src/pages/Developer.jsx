import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import Cursor from '../components/Cursor';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Developer.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Javascript', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['PHP', 'Laravel','Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Java', 'ASP.NET'] },
  { category: 'DevOps & Tools', items: ['Git', 'Docker', 'Linux', 'VS Code', 'CI/CD'] },
];

const certifications = [
  {
    title: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    year: '2026',
    credential: 'GR671880397WN',
  },
  {
    title: 'Scrum Fundamentals Certified',
    issuer: 'Scrum Study',
    year: '2017',
    credential: '587295',
  }
];

const experiences = [
  {
    role: 'Desenvolvedor Back End Pleno - PHP / Laravel',
    company: 'PlayMóvel Tecnologia',
    period: '2023 – 2025',
    highlights: [
      'Desenvolvimento de APIs REST utilizando PHP 8 e Laravel.',
      'Administração de banco de dados PostgreSQL.',
      'Integração de APIs, documentação de sistemas e manutenção de sistemas legados.',
    ],
  },
  {
    role: 'Desenvolvedor - React / Vite',
    company: 'Associação Brasília Wizards',
    period: 'Voluntário',
    highlights: [
      'Desenvolvimento de website institucional utilizando React, Vite e CSS.',
      'Atualização de conteúdo e manutenção do website',
    ],
  },
  {
    role: 'Desenvolvedor Web - ASP.NET MVC / Bootstrap',
    company: 'Conselho Federal de Engenharia e Agronomia',
    period: '2015 – 2016',
    highlights: [
      'Desenvolvimento de website para consultas de registros de direitos autorais.',
      'Criação e aprimoramento de interfaces responsivas com Bootstrap.',
      'Participação em sprints ágeis e revisões de código em equipe.',
    ],
  },
  {
    role: 'Desenvolvedor iOS - SWIFT / Objective C',
    company: 'Wooba Soluções Tecnológicas para Turismo',
    period: '2016',
    highlights: [
      'Desenvolvimento de website para consultas de registros de direitos autorais.',
      'Aplicação de conceitos de arquitetura Clean Swift, com foco em organização, manutenibilidade e qualidade do código.',
      'Participação em sprints ágeis e revisões de código em equipe.',
    ],
  },
];

const projects = [
  {
    title: 'Acervo de Obras Intelectuais',
    desc: 'Sistema de consulta de obras intelectuais. Construído em ASP.NET MVC, C# e JavaScript.',
    tech: ['ASP.NET', 'C#', 'Javascript', 'Bootstrap'],
    status: 'Concluído',
    link: 'https://acervoobrasintelectuais.confea.org.br/',
  },
  {
    title: 'Brasília Wizards Website',
    desc: 'Website institucional desenvolvido em React Vite, Javascript e CSS.',
    tech: ['React', 'Vite', 'Javascript', 'CSS'],
    status: 'Concluído',
    link: 'https://www.brasiliawizards.com.br/home/',
  },
  {
    title: 'Todo List',
    desc: 'Lista de tarefas construído em Html, CSS e JavaScript',
    tech: ['HTML', 'CSS', 'Javascript'],
    status: 'Concluído',
    link: 'https://wgleyberton.github.io/todolist/',
  },
];

export default function Developer() {
  return (
    <div className="dev">
      <Cursor color="#00c8ff" />
      <ParticleField color="#00c8ff" count={40} />
      <BackButton color="#00c8ff" />

      <div className="dev__glow-top" />
      <div className="dev__glow-bottom" />

      <div className="dev__content">

        {/* Hero */}
        <section className="dev__section">
          <motion.p
            className="dev__eyebrow"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            &lt; Developer /&gt;
          </motion.p>

          <motion.h1
            className="dev__title"
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            Construindo<br />experiências digitais.
          </motion.h1>

          <motion.p
            className="dev__subtitle"
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
          >
            Desenvolvedor focado em criar soluções elegantes, performáticas e com ótima experiência de usuário.
          </motion.p>

          <motion.div
            className="dev__stats"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            {[
              { n: '5+', label: 'Anos de experiência' },
              { n: '10+', label: 'Projetos entregues' },
              { n: '3', label: 'Stacks dominadas' },
            ].map((s) => (
              <div key={s.label}>
                <div className="dev__stat-number">{s.n}</div>
                <div className="dev__stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section className="dev__section">
          <SectionTitle label="Skills" />
          <div className="dev__skills-grid">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                className="dev__skill-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="dev__skill-category">{group.category}</div>
                <div className="dev__skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="dev__skill-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="dev__section">
          <SectionTitle label="Certificações" />
          <div className="dev__cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.credential}
                className="dev__cert-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="dev__cert-icon">
                  <BadgeIcon />
                </div>
                <div className="dev__cert-info">
                  <span className="dev__cert-title">{cert.title}</span>
                  <span className="dev__cert-issuer">{cert.issuer}</span>
                  {cert.credential && (
                    <span className="dev__cert-credential">#{cert.credential}</span>
                  )}
                </div>
                <span className="dev__cert-year">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="dev__section">
          <SectionTitle label="Experiência" />
          <div className="dev__exp-list">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="dev__exp-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="dev__exp-header">
                  <div>
                    <h3 className="dev__exp-role">{exp.role}</h3>
                    <span className="dev__exp-company">{exp.company}</span>
                  </div>
                  <span className="dev__exp-period">{exp.period}</span>
                </div>
                <ul className="dev__exp-highlights">
                  {exp.highlights.map((h) => (
                    <li key={h} className="dev__exp-highlight">
                      <span className="dev__exp-bullet">▸</span>
                      <span className="dev__exp-text">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="dev__section dev__section--projects">
          <SectionTitle label="Projetos em Destaque" />
          <div className="dev__projects-list">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className="dev__project-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="dev__project-info">
                  <h3 className="dev__project-title">{p.title}</h3>
                  <p className="dev__project-desc">{p.desc}</p>
                  <div className="dev__project-techs">
                    {p.tech.map((t) => (
                      <span key={t} className="dev__project-tech">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="dev__project-meta">
                  <span className="dev__project-status">{p.status}</span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev__project-link"
                      aria-label={`Ver ${p.title}`}
                    >
                      <LinkIcon />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer accent="#00c8ff" />
    </div>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1L9.545 5.09L14 5.09L10.545 7.727L11.818 12L8 9.636L4.182 12L5.455 7.727L2 5.09L6.455 5.09L8 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function SectionTitle({ label }) {
  return (
    <motion.div
      className="dev__section-title"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="dev__section-title-text">// {label}</span>
      <div className="dev__section-title-line" />
    </motion.div>
  );
}

