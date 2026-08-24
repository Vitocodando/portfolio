import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesList } from '../data/solutionsData';
import { ServiceCard } from '../components/ServiceCard';
import { StatsBar } from '../components/StatsBar';
import { Simulator } from '../components/Simulator';
import { FaqAccordion } from '../components/FaqAccordion';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const SolutionsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-primary)', position: 'relative' }}>
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div
          className="container hero-section animate-fade-up"
          style={{
            padding: '80px 32px 64px',
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Hero content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#121815',
                border: '1px solid #23302A',
                borderRadius: '6px',
                padding: '6px 14px',
                width: 'fit-content',
              }}
            >
              <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-green)' }}>
                {t.hero.lpBadge}
              </span>
            </div>

            <h1
              className="hero-title"
              style={{
                margin: 0,
                fontSize: '52px',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {t.hero.lpH1Part1} <span style={{ color: 'var(--accent-green)' }}>{t.hero.lpH1Highlight}</span> {t.hero.lpH1Part2}
            </h1>

            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.65, color: 'var(--text-muted)', fontFamily: 'var(--font-body)', maxWidth: '560px' }}>
              {t.hero.lpDesc}
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              <a
                href="https://wa.me/5562994267179?text=Ol%C3%A1%20Victor!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20meu%20projeto."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <span>{t.hero.lpPrimaryCta}</span>
                <span>→</span>
              </a>
              <a href="#simulador" className="btn-secondary">
                <span>{t.hero.lpSecondaryCta}</span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginTop: '8px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-dim)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span> {t.hero.lpProof1}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span> {t.hero.lpProof2}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span> {t.hero.lpProof3}
              </div>
            </div>
          </div>

          {/* Hero Featured Mockup Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', fontWeight: 600 }}>
                  // CASE EM DESTAQUE
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-faint)' }}>
                  PRODUÇÃO REAL
                </span>
              </div>

              <div className="mockup-frame">
                <img src="/uploads/mockup-razorfy-real.png" alt="Razorfy Real SaaS Mockup" className="mockup-img" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Razorfy — SaaS Multi-tenant & Mobile
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>
                  {t.hero.lpMockupNote}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://razorfy.online"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--accent-green)',
                    textDecoration: 'none',
                    border: '1px solid #23302A',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    background: 'var(--bg-main)',
                  }}
                >
                  Ver razorfy.online ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <StatsBar />

      {/* SERVIÇOS QUE DESENVOLVO */}
      <section id="servicos" style={{ padding: '88px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '680px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // SERVIÇOS & SOLUÇÕES
            </div>
            <h2 style={{ margin: 0, fontSize: '38px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {t.services.title}
            </h2>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.services.sub}
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {servicesList.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE SUCESSO & MOCKUPS REAIS */}
      <section id="cases" style={{ background: 'var(--bg-card)', padding: '88px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '640px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)', fontWeight: 600 }}>
                // CASOS REAIS DE PRODUÇÃO
              </div>
              <h2 style={{ margin: 0, fontSize: '38px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {t.cases.title}
              </h2>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.cases.sub}
              </p>
            </div>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {/* Case 1: DeLukaz */}
            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="mockup-frame">
                <img src="/uploads/mockup-delukaz-real.png" alt="DeLukaz Real Case Mockup" className="mockup-img" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Música, Eventos & Vitrine Digital
                </div>
                <div style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  DeLukaz (DLUKZ) — Showroom & Agenda
                </div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  Site interativo de alta performance com player de áudio, agenda de gigs e formulário direto para contratação em eventos.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                <a
                  href="https://delukaz-portfolio.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 600 }}
                >
                  Ver Projeto Online ↗
                </a>
              </div>
            </div>

            {/* Case 2: NLW Gemini */}
            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="mockup-frame">
                <img src="/uploads/mockup-nlw-real.png" alt="NLW Gemini AI Real Mockup" className="mockup-img" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                  Inteligência Artificial Generativa
                </div>
                <div style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Meta Game AI Agent — Google Gemini 2.5
                </div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  Assistente inteligente que processa dúvidas sobre estratégias competitivas em tempo real conectado aos modelos mais recentes de LLM.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                <a
                  href="https://github.com/Vitocodando/projeto-nlw"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-purple)', textDecoration: 'none', fontWeight: 600 }}
                >
                  Ver Repositório ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO (4 PASSOS) */}
      <section id="processo" style={{ padding: '88px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '640px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)', fontWeight: 600 }}>
              // METODOLOGIA & ETAPAS
            </div>
            <h2 style={{ margin: 0, fontSize: '38px', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {t.process.title}
            </h2>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.process.sub}
            </p>
          </div>

          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="step-badge">01</div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{t.process.p1Title}</div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{t.process.p1Desc}</p>
            </div>

            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="step-badge" style={{ color: 'var(--accent-blue)' }}>02</div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{t.process.p2Title}</div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{t.process.p2Desc}</p>
            </div>

            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="step-badge" style={{ color: 'var(--accent-purple)' }}>03</div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{t.process.p3Title}</div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{t.process.p3Desc}</p>
            </div>

            <div className="clean-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="step-badge" style={{ color: 'var(--accent-amber)' }}>04</div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{t.process.p4Title}</div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{t.process.p4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULADOR INTERATIVO */}
      <Simulator />

      {/* PERGUNTAS FREQUENTES */}
      <FaqAccordion />

      {/* FINAL CALL TO ACTION */}
      <section style={{ borderTop: '1px solid var(--border-subtle)', background: '#070908', padding: '90px 0 100px' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-green)',
              fontWeight: 600,
              background: '#121815',
              border: '1px solid #23302A',
              borderRadius: '6px',
              padding: '6px 16px',
            }}
          >
            {t.ctaFinal.badge}
          </div>

          <h2 style={{ margin: 0, fontSize: '44px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t.ctaFinal.title}
          </h2>

          <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.65, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            {t.ctaFinal.desc}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
            <a
              href="https://wa.me/5562994267179?text=Ol%C3%A1%20Victor!%20Gostaria%20de%20iniciar%20meu%20projeto."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '16px', padding: '16px 32px' }}
            >
              <span>{t.ctaFinal.btn}</span>
              <span>→</span>
            </a>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dim)' }}>
            <a href="mailto:arthurvictor552@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
              arthurvictor552@gmail.com ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
