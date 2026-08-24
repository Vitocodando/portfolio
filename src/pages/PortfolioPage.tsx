import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';
import { TerminalCard } from '../components/TerminalCard';
import { ArchitectureCard } from '../components/ArchitectureCard';
import { ProjectCard } from '../components/ProjectCard';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { TypewriterText } from '../components/TypewriterText';
import { ScrollReveal } from '../components/ScrollReveal';

export const PortfolioPage: React.FC = () => {
  const { language, t } = useLanguage();
  const data = getPortfolioData(language);

  const typewriterPhrases =
    language === 'en'
      ? [
          'Fullstack · React & Node.js',
          'Software Engineer · UNIALFA',
          'SaaS Architect · Razorfy (Live)',
          'TypeScript, Cloud & REST APIs',
        ]
      : [
          'Fullstack · React & Node.js',
          'Engenheiro de Software · UNIALFA',
          'Arquiteto SaaS · Razorfy (Online)',
          'TypeScript, Cloud & APIs REST',
        ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-primary)', position: 'relative', overflowX: 'hidden' }}>
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <header
        id="top"
        className="grid-background"
        style={{ borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}
      >
        <div
          className="container hero-grid animate-fade-up"
          style={{
            padding: '96px 32px 88px',
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              {t.hero.kicker}
            </div>
            <h1
              className="hero-title"
              style={{
                margin: 0,
                fontSize: '64px',
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Victor Arthur
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)' }}>
                <TypewriterText phrases={typewriterPhrases} />
              </div>
              <div style={{ fontSize: '16px', color: 'var(--text-dim)' }}>
                {t.hero.sub}
              </div>
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: '480px',
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
            >
              {t.hero.desc}
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '14px', marginTop: '8px', flexWrap: 'wrap' }}>
              <a href="#projetos" className="btn-primary">
                {t.hero.ctaProject}
              </a>
              <a href="/uploads/Curriculo-Victor-Arthur.pdf" download className="btn-secondary">
                {t.hero.ctaCv}
              </a>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
              <a href="https://github.com/Vitocodando" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                github ↗
              </a>
              <a href="https://www.linkedin.com/in/victor-arthur-079905333" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                linkedin ↗
              </a>
              <a href="mailto:arthurvictor552@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                email ↗
              </a>
            </div>
          </div>

          {/* Terminal status card */}
          <ScrollReveal variant="zoom-in" delay={150}>
            <TerminalCard />
          </ScrollReveal>
        </div>
      </header>

      {/* SOBRE */}
      <section id="sobre" style={{ borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
        <div
          className="container section-split"
          style={{
            padding: '80px 32px',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
          }}
        >
          <ScrollReveal variant="fade-right">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 01 — {t.about.label}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '640px' }}>
              <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {t.about.p1}
              </p>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {t.about.p2}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-card)', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ padding: '80px 32px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <ScrollReveal variant="fade-up">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 02 — {t.project.label}
            </div>
          </ScrollReveal>

          {/* PROJETO PRINCIPAL (RAZORFY) */}
          <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            <ScrollReveal variant="fade-right" delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h2 className="project-title" style={{ margin: 0, fontSize: '44px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Razorfy
                </h2>
                <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--accent-green)' }}>
                  {t.project.tagline}
                </div>
                <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {t.project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                  {data.razorfyStack.map((chip, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-muted)',
                        background: 'var(--bg-main)',
                        borderRadius: '999px',
                        padding: '5px 12px',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', marginTop: '8px', flexWrap: 'wrap' }}>
                  <a
                    href="https://razorfy.online"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ padding: '11px 20px', fontSize: '14px' }}
                  >
                    razorfy.online ↗
                  </a>
                  <a
                    href="https://github.com/Vitocodando/Razorfy"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '11px 18px', fontSize: '13px' }}
                  >
                    {t.project.code} ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* MOCKUP REAL RAZORFY */}
            <ScrollReveal variant="fade-left" delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  style={{
                    position: 'relative',
                    border: '1px solid #25332C',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#080B0A',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.6)',
                  }}
                >
                  <img src="/uploads/mockup-razorfy-real.png" alt="Razorfy Real Mockup" className="mockup-img" />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)' }}>
                  {t.project.shotCaption}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ARQUITETURA RAZORFY CARDS */}
          <div className="feats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {data.feats.map((feature, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 75}>
                <ArchitectureCard feature={feature} />
              </ScrollReveal>
            ))}
          </div>

          {/* OUTROS PROJETOS DO GITHUB */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
            <ScrollReveal variant="fade-up">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)' }}>
                  // {t.project.otherLabel}
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-dim)' }}>{t.project.otherDesc}</div>
              </div>
            </ScrollReveal>

            <div className="other-projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {/* DeLukaz */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.delukaz.type}
                  title={t.delukaz.title}
                  description={t.delukaz.desc}
                  stack={data.delukazStack}
                  mockupImg="/uploads/mockup-delukaz-real.png"
                  mockupAlt="DeLukaz Real Mockup"
                  tagColor="var(--accent-gold)"
                  liveUrl="https://delukaz-portfolio.vercel.app"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-gold)"
                  repoUrl="https://github.com/Vitocodando/delukaz-portfolio"
                />
              </ScrollReveal>

              {/* NLW Game AI Agent */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.nlw.type}
                  title={t.nlw.title}
                  description={t.nlw.desc}
                  stack={data.nlwStack}
                  mockupImg="/uploads/mockup-nlw-real.png"
                  mockupAlt="NLW Game Meta AI Agent Mockup"
                  bgColor="#07060D"
                  tagColor="var(--accent-purple)"
                  liveUrl="https://github.com/Vitocodando/projeto-nlw"
                  liveLabel="GitHub Repo ↗"
                  liveBtnColor="var(--accent-purple)"
                />
              </ScrollReveal>

              {/* WP Admin Shield */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.wpShield.type}
                  title={t.wpShield.title}
                  description={t.wpShield.desc}
                  stack={data.wpShieldStack}
                  badge="Security Hardening"
                  tagColor="var(--accent-green)"
                  repoUrl="https://github.com/Vitocodando/wordpress-admin-block"
                />
              </ScrollReveal>

              {/* UNIALFA B.Sc. Foundations */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.academic.type}
                  title={t.academic.title}
                  description={t.academic.desc}
                  stack={data.academicStack}
                  badge="B.Sc. Foundations"
                  tagColor="var(--accent-blue)"
                  repoUrl="https://github.com/Vitocodando/portifolioFaculdade"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* GITHUB CALLOUT BANNER */}
          <ScrollReveal variant="zoom-in" delay={150}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                border: '1px dashed var(--border-muted)',
                borderRadius: '10px',
                padding: '22px 26px',
                flexWrap: 'wrap',
                background: 'rgba(124, 242, 156, 0.02)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '16px', fontWeight: 600 }}>{t.project.moreLabel}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}>{t.project.moreDesc}</div>
              </div>
              <a
                href="https://github.com/Vitocodando"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--accent-green)',
                  textDecoration: 'none',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                  e.currentTarget.style.background = 'rgba(124, 242, 156, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-muted)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                github.com/Vitocodando ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ padding: '80px 32px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <ScrollReveal variant="fade-up">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 03 — {t.stack.label}
            </div>
          </ScrollReveal>

          <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {data.skills.map((category, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                <div
                  className="clean-card"
                  style={{
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--accent-green)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {category.label}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                          ›
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-card)', position: 'relative', zIndex: 1 }}>
        <div
          className="container section-split"
          style={{
            padding: '80px 32px',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
          }}
        >
          <ScrollReveal variant="fade-right">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 04 — {t.exp.label}
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.jobs.map((job, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 120}>
                <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '22px', paddingBottom: '40px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-green)', marginTop: '6px', flex: 'none' }} />
                    <div style={{ width: '1px', flex: 1, background: 'var(--border-muted)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)' }}>
                      {job.period}
                    </div>
                    <div style={{ fontSize: '19px', fontWeight: 600 }}>{job.role}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}>{job.org}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                      {job.points.map((p, pIdx) => (
                        <div key={pIdx} style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', gap: '10px' }}>
                          <span style={{ color: 'var(--accent-green)' }}>—</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" style={{ borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
        <div
          className="container section-split"
          style={{
            padding: '80px 32px',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
          }}
        >
          <ScrollReveal variant="fade-right">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 05 — {t.edu.label}
            </div>
          </ScrollReveal>

          <div className="edu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <ScrollReveal variant="fade-up" delay={50} style={{ gridColumn: '1 / -1' }}>
              <div className="clean-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)' }}>
                  {t.edu.period}
                </div>
                <div style={{ fontSize: '19px', fontWeight: 600 }}>{t.edu.degree}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                  UNIALFA – Centro Universitário Alves Faria · Goiânia, GO
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <div className="clean-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '6px', height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {t.edu.certLabel}
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                  NLW Agents — Rocketseat
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <div className="clean-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '6px', height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {t.edu.langLabel}
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                  {t.edu.langs}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ padding: '96px 32px 80px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <ScrollReveal variant="fade-up">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // 06 — {t.contact.label}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="contact-title" style={{ margin: 0, fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {t.contact.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <p style={{ margin: 0, maxWidth: '520px', fontSize: '16px', lineHeight: 1.7, color: 'var(--text-dim)' }}>
              {t.contact.desc}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <a
              href="mailto:arthurvictor552@gmail.com"
              className="contact-email"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '22px',
                color: 'var(--accent-green)',
                textDecoration: 'none',
                width: 'fit-content',
                display: 'inline-block',
                transition: 'transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              arthurvictor552@gmail.com
            </a>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a
                href="https://wa.me/5562994267179"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                  e.currentTarget.style.color = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-muted)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                whatsapp ↗
              </a>
              <a
                href="https://github.com/Vitocodando"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                  e.currentTarget.style.color = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-muted)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                github ↗
              </a>
              <a
                href="https://www.linkedin.com/in/victor-arthur-079905333"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                  e.currentTarget.style.color = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-muted)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                linkedin ↗
              </a>
              <a
                href="/uploads/Curriculo-Victor-Arthur.pdf"
                download
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                  e.currentTarget.style.color = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-muted)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {t.contact.cvNote} ↓
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
