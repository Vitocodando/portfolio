import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TerminalCard: React.FC = () => {
  const { t } = useLanguage();
  const [linesVisible, setLinesVisible] = useState<number>(0);

  useEffect(() => {
    // Reveal lines one by one on mount for realistic terminal boot
    const delays = [200, 450, 700, 950, 1200, 1450];
    const timers = delays.map((delay, idx) => setTimeout(() => setLinesVisible(idx + 1), delay));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="hero-photo" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        className="clean-card"
        style={{
          position: 'relative',
          border: '1px solid #2A3230',
          borderRadius: '12px',
          padding: '18px',
          background: 'var(--bg-card)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', opacity: 0.85 }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', opacity: 0.85 }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', opacity: 0.85 }}></div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-faint)' }}>
            victor@developer:~
          </div>
        </div>

        {/* Status Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(124, 242, 156, 0.06)',
            border: '1px solid rgba(124, 242, 156, 0.22)',
            borderRadius: '6px',
            padding: '7px 12px',
            marginBottom: '12px',
          }}
        >
          <div
            className="pulse-dot"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-green)',
            }}
          ></div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-green)' }}>
            {t.hero.statusBadge}
          </div>
        </div>

        {/* Code / Telemetry Content */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
            background: 'var(--bg-terminal)',
            borderRadius: '8px',
            padding: '14px',
            border: '1px solid #19201D',
            minHeight: '190px',
          }}
        >
          <div style={{ color: 'var(--text-faint)', opacity: linesVisible >= 1 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            // fullstack engineer
          </div>
          <div style={{ opacity: linesVisible >= 2 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <span style={{ color: 'var(--accent-green)' }}>const</span> engineer = {'{'}
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 3 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            name: <span style={{ color: 'var(--accent-blue)' }}>'Victor Arthur'</span>,
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 4 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            age: <span style={{ color: 'var(--accent-blue)' }}>19</span>,
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 5 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            education: <span style={{ color: 'var(--accent-blue)' }}>'Eng. de Software · UNIALFA'</span>,
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 6 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            focus: <span style={{ color: 'var(--accent-green)' }}>'SaaS · Web · Mobile'</span>
          </div>
          <div style={{ opacity: linesVisible >= 6 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            {'}'};
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '13px',
                backgroundColor: 'var(--accent-green)',
                marginLeft: '6px',
                verticalAlign: 'text-bottom',
                animation: 'cursorBlink 1s infinite',
              }}
            />
          </div>
        </div>

        {/* Quick Metrics Footer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
          <div style={{ border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '8px 10px', background: 'var(--bg-card-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-faint)' }}>PROJETOS EM PRODUÇÃO</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-green)', marginTop: '2px' }}>6+ Live</div>
          </div>
          <div style={{ border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '8px 10px', background: 'var(--bg-card-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-faint)' }}>REPOSITÓRIOS</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>GitHub /Vitocodando</div>
          </div>
        </div>

        {/* Cyber Corners */}
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '18px', height: '18px', borderTop: '2px solid var(--accent-green)', borderLeft: '2px solid var(--accent-green)', borderRadius: '4px 0 0 0' }}></div>
        <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '18px', height: '18px', borderBottom: '2px solid var(--accent-green)', borderRight: '2px solid var(--accent-green)', borderRadius: '0 0 4px 0' }}></div>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)', textAlign: 'center' }}>
        {t.hero.loc}
      </div>
    </div>
  );
};
