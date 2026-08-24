import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TerminalCard: React.FC = () => {
  const { t } = useLanguage();
  const [linesVisible, setLinesVisible] = useState<number>(0);

  useEffect(() => {
    // Reveal lines one by one on mount for realistic terminal boot
    const timer1 = setTimeout(() => setLinesVisible(1), 200);
    const timer2 = setTimeout(() => setLinesVisible(2), 450);
    const timer3 = setTimeout(() => setLinesVisible(3), 700);
    const timer4 = setTimeout(() => setLinesVisible(4), 950);
    const timer5 = setTimeout(() => setLinesVisible(5), 1200);
    const timer6 = setTimeout(() => setLinesVisible(6), 1450);
    const timer7 = setTimeout(() => setLinesVisible(7), 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
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
              boxShadow: '0 0 8px var(--accent-green)',
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
            minHeight: '160px',
          }}
        >
          <div style={{ color: 'var(--text-faint)', opacity: linesVisible >= 1 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            // fullstack engineer
          </div>
          <div style={{ opacity: linesVisible >= 2 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <span style={{ color: 'var(--accent-green)' }}>const</span> engineer = {'{'}
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 3 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            role: <span style={{ color: 'var(--accent-blue)' }}>'Fullstack'</span>,
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 4 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            stack: [<span style={{ color: 'var(--accent-blue)' }}>'React 19'</span>, <span style={{ color: 'var(--accent-blue)' }}>'Node 22'</span>],
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 5 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            database: [<span style={{ color: 'var(--accent-blue)' }}>'PostgreSQL'</span>, <span style={{ color: 'var(--accent-blue)' }}>'Prisma'</span>],
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 6 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            mobile: <span style={{ color: 'var(--accent-blue)' }}>'Expo / RN'</span>,
          </div>
          <div style={{ paddingLeft: '12px', opacity: linesVisible >= 7 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            saas: <span style={{ color: 'var(--accent-green)' }}>'Razorfy (Live)'</span>
          </div>
          <div style={{ opacity: linesVisible >= 7 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
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
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-faint)' }}>SaaS EM PRODUÇÃO</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-green)', marginTop: '2px' }}>Razorfy</div>
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
