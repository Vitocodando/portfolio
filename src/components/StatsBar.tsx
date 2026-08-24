import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
      <div className="container" style={{ padding: '32px' }}>
        <div className="stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'var(--font-display)' }}>
              &lt;1.2s
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.stats.speed}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-blue)', fontFamily: 'var(--font-display)' }}>
              100%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.stats.responsive}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-display)' }}>
              AES-256
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.stats.security}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-amber)', fontFamily: 'var(--font-display)' }}>
              30 Dias
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {t.stats.support}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
