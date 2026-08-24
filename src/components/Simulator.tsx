import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getSimulatorScope } from '../data/solutionsData';

export const Simulator: React.FC = () => {
  const { language, t } = useLanguage();
  const [projectType, setProjectType] = useState<'landing' | 'system' | 'mobile' | 'ai'>('landing');
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const scope = getSimulatorScope(projectType, language);

  const prazoLabel = isUrgent
    ? language === 'en'
      ? 'Express (5 to 10 days)'
      : 'Urgente (5 a 10 dias)'
    : language === 'en'
    ? 'Standard (15 to 30 days)'
    : 'Padrão (15 a 30 dias)';

  const waMsg =
    language === 'en'
      ? `Hello Victor! I configured my project on your Landing Page:\n- Type: ${scope.waType}\n- Delivery expectation: ${prazoLabel}\nI'd like to receive a detailed quote!`
      : `Olá Victor! Simulei meu projeto na sua Landing Page:\n- Tipo: ${scope.waType}\n- Prazo desejado: ${prazoLabel}\nGostaria de receber uma proposta comercial detalhada!`;

  const waLink = `https://wa.me/5562994267179?text=${encodeURIComponent(waMsg)}`;

  const getOptionStyle = (active: boolean) => ({
    padding: '13px 15px',
    borderRadius: '8px',
    border: `1px solid ${active ? 'var(--accent-green)' : 'var(--border-subtle)'}`,
    background: active ? 'var(--bg-card-elevated)' : 'var(--bg-card)',
    color: active ? 'var(--accent-green)' : 'var(--text-secondary)',
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'left' as const,
    fontSize: '14px',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: active ? 'scale(1.02)' : 'scale(1)',
    boxShadow: active ? '0 0 16px rgba(124, 242, 156, 0.16)' : 'none',
  });

  return (
    <section id="simulador" style={{ background: 'var(--bg-card)', padding: '88px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', marginBottom: '36px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)', fontWeight: 600 }}>
            // SIMULADOR INTERATIVO
          </div>
          <h2 style={{ margin: 0, fontSize: '38px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t.calc.title}
          </h2>
          <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', maxWidth: '560px' }}>
            {t.calc.sub}
          </p>
        </div>

        <div
          className="calc-grid clean-card"
          style={{
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '36px',
            alignItems: 'start',
            background: 'var(--bg-main)',
          }}
        >
          {/* Options side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Step 1: Project Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', fontWeight: 600 }}>
                {t.calc.step1}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setProjectType('landing')}
                  style={getOptionStyle(projectType === 'landing')}
                >
                  🚀 Landing Page
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType('system')}
                  style={getOptionStyle(projectType === 'system')}
                >
                  💻 Sistema / SaaS
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType('mobile')}
                  style={getOptionStyle(projectType === 'mobile')}
                >
                  📱 App Mobile
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType('ai')}
                  style={getOptionStyle(projectType === 'ai')}
                >
                  ⚡ Automação / IA
                </button>
              </div>
            </div>

            {/* Step 2: Deadline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', fontWeight: 600 }}>
                {t.calc.step2}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsUrgent(true)}
                  style={getOptionStyle(isUrgent)}
                >
                  ⚡ Expresso (5 a 10 dias)
                </button>
                <button
                  type="button"
                  onClick={() => setIsUrgent(false)}
                  style={getOptionStyle(!isUrgent)}
                >
                  🗓️ Padrão (15 a 30 dias)
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Summary Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'border-color var(--transition-normal)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '12px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', fontWeight: 600 }}>
                {t.calc.summaryTitle}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                {t.calc.summaryBadge}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{t.calc.selectedLabel}</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', transition: 'color 0.2s ease' }}>
                {scope.title}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--accent-green)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                {scope.scope}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>
                {t.calc.includedLabel}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.calc.inc1}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.calc.inc2}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.calc.inc3}</div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '8px', width: '100%' }}
            >
              <span>{t.calc.ctaBtn}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
