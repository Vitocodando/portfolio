import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';
import { TerminalCard } from '../components/TerminalCard';
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
          'SaaS Systems Architect',
          'TypeScript, Cloud & REST APIs',
        ]
      : [
          'Fullstack · React & Node.js',
          'Engenheiro de Software · UNIALFA',
          'Arquiteto de Sistemas SaaS',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-green)', fontWeight: 600 }}>
                // 02 — {t.project.label}
              </div>
              <div style={{ fontSize: '15px', color: 'var(--text-dim)' }}>{t.project.desc}</div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="other-projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {/* Razorfy */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.razorfy.type}
                  title={t.razorfy.title}
                  description={t.razorfy.desc}
                  stack={data.razorfyStack}
                  mockupImg="/uploads/mockup-razorfy-real.webp"
                  mockupAlt="Razorfy Real Mockup"
                  tagColor="var(--accent-green)"
                  liveUrl="https://razorfy.online"
                  liveLabel="razorfy.online ↗"
                  liveBtnColor="var(--accent-green)"
                  repoUrl="https://github.com/Vitocodando/Razorfy"
                />
              </ScrollReveal>

              {/* DeLukaz */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.delukaz.type}
                  title={t.delukaz.title}
                  description={t.delukaz.desc}
                  stack={data.delukazStack}
                  mockupImg="/uploads/mockup-delukaz-real.webp"
                  mockupAlt="DeLukaz Real Mockup"
                  tagColor="var(--accent-gold)"
                  liveUrl="https://delukaz.vercel.app"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-gold)"
                  repoUrl="https://github.com/Vitocodando/delukaz-portfolio"
                />
              </ScrollReveal>

              {/* Milis GR Fotografia */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.milis.type}
                  title={t.milis.title}
                  description={t.milis.desc}
                  stack={data.milisStack}
                  mockupImg="/uploads/mockup-milis-real.webp"
                  mockupAlt="Milis GR Fotografia Mockup"
                  bgColor="#0A0A0A"
                  tagColor="var(--accent-gold)"
                  liveUrl="https://milisgr.vercel.app"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-gold)"
                />
              </ScrollReveal>

              {/* OBR - Os Brabo da Rua */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.obr.type}
                  title={t.obr.title}
                  description={t.obr.desc}
                  stack={data.obrStack}
                  mockupImg="/uploads/mockup-obr-real.webp"
                  mockupAlt="OBR Os Brabo da Rua Mockup"
                  bgColor="#141414"
                  tagColor="var(--accent-purple)"
                  liveUrl="https://obr-psi.vercel.app"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-purple)"
                />
              </ScrollReveal>

              {/* JVfit */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.jvfit.type}
                  title={t.jvfit.title}
                  description={t.jvfit.desc}
                  stack={data.jvfitStack}
                  mockupImg="/uploads/mockup-jvfit-real.webp"
                  mockupAlt="JVfit Mockup"
                  bgColor="#10151A"
                  tagColor="var(--accent-blue)"
                  liveUrl="https://jvfit.lestary.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-blue)"
                />
              </ScrollReveal>

              {/* Lestary */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.lestary.type}
                  title={t.lestary.title}
                  description={t.lestary.desc}
                  stack={data.lestaryStack}
                  mockupImg="/uploads/mockup-lestary-real.webp"
                  mockupAlt="Lestary Mockup"
                  bgColor="#0B0D12"
                  tagColor="var(--accent-amber)"
                  liveUrl="https://lestary.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-amber)"
                />
              </ScrollReveal>

              {/* Bentivi Shopping */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.bentivi.type}
                  title={t.bentivi.title}
                  description={t.bentivi.desc}
                  stack={data.bentiviStack}
                  mockupImg="/uploads/mockup-bentivishopping-real.webp"
                  mockupAlt="Bentivi Shopping Mockup"
                  bgColor="#F5EFD8"
                  tagColor="var(--accent-gold)"
                  liveUrl="https://bentivishopping.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-gold)"
                />
              </ScrollReveal>

              {/* Desdobra Engenharia */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.desdobra.type}
                  title={t.desdobra.title}
                  description={t.desdobra.desc}
                  stack={data.desdobraStack}
                  mockupImg="/uploads/mockup-desdobra-real.webp"
                  mockupAlt="Desdobra Engenharia Mockup"
                  bgColor="#14161A"
                  tagColor="var(--accent-blue)"
                  liveUrl="https://desdobra.m2tech.cloud"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-blue)"
                />
              </ScrollReveal>

              {/* Pet Seguro */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.petseguro.type}
                  title={t.petseguro.title}
                  description={t.petseguro.desc}
                  stack={data.petseguroStack}
                  mockupImg="/uploads/mockup-petseguro-real.webp"
                  mockupAlt="Pet Seguro Mockup"
                  bgColor="#E8F2ED"
                  tagColor="var(--accent-purple)"
                  liveUrl="https://petseguro.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-purple)"
                />
              </ScrollReveal>

              {/* Empilhadeira Santana */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.empilhadeira.type}
                  title={t.empilhadeira.title}
                  description={t.empilhadeira.desc}
                  stack={data.empilhadeiraStack}
                  mockupImg="/uploads/mockup-empilhadeirasantana-real.webp"
                  mockupAlt="Empilhadeira Santana Mockup"
                  bgColor="#101820"
                  tagColor="var(--accent-red)"
                  liveUrl="https://empilhadeirasantana.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-red)"
                />
              </ScrollReveal>

              {/* Dra. Fernanda Guidolin */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.fernanda.type}
                  title={t.fernanda.title}
                  description={t.fernanda.desc}
                  stack={data.fernandaStack}
                  mockupImg="/uploads/mockup-fernandaguidolin-real.webp"
                  mockupAlt="Dra. Fernanda Guidolin Mockup"
                  bgColor="#FAFAFA"
                  tagColor="var(--accent-amber)"
                  liveUrl="https://fernandaguidolin.com.br"
                  liveLabel="Live Demo ↗"
                  liveBtnColor="var(--accent-amber)"
                />
              </ScrollReveal>

              {/* NLW Game AI Agent */}
              <ScrollReveal variant="fade-up" delay={100}>
                <ProjectCard
                  type={t.nlw.type}
                  title={t.nlw.title}
                  description={t.nlw.desc}
                  stack={data.nlwStack}
                  mockupImg="/uploads/mockup-nlw-real.webp"
                  mockupAlt="NLW Game Meta AI Agent Mockup"
                  bgColor="#07060D"
                  tagColor="var(--accent-purple)"
                  liveUrl="https://github.com/Vitocodando/projeto-nlw"
                  liveLabel="GitHub Repo ↗"
                  liveBtnColor="var(--accent-purple)"
                />
              </ScrollReveal>

              {/* WP Admin Shield */}
              <ScrollReveal variant="fade-up" delay={200}>
                <ProjectCard
                  type={t.wpShield.type}
                  title={t.wpShield.title}
                  description={t.wpShield.desc}
                  stack={data.wpShieldStack}
                  mockupImg="/uploads/mockup-wpshield.svg"
                  mockupAlt="WordPress Admin Security Shield Mockup"
                  bgColor="#0B0F0D"
                  badge="Security Hardening"
                  tagColor="var(--accent-green)"
                  repoUrl="https://github.com/Vitocodando/wordpress-admin-block"
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
