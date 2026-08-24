import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#070908',
        padding: '28px 0',
      }}
    >
      <div
        className="container footer-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-faint)',
        }}
      >
        <div>© 2026 Victor Arthur · github.com/Vitocodando</div>
        <div>{t.footer}</div>
      </div>
    </footer>
  );
};
