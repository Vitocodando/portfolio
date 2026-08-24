import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ padding: '36px 32px' }}>
        <div className="stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
          <ScrollReveal variant="fade-up" delay={50}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '34px', fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                &lt;1.2s
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.stats.speed}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '34px', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                100%
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.stats.responsive}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '34px', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                AES-256
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.stats.security}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={350}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '34px', fontWeight: 800, color: 'var(--accent-amber)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                30 Dias
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.stats.support}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
