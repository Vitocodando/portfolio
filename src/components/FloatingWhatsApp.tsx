import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();

  const msg =
    language === 'en'
      ? 'Hello Victor! I found your portfolio and I would like to request a quote for my project.'
      : 'Olá Victor! Vim pelo seu portfólio e gostaria de um orçamento para o meu projeto.';

  const waUrl = `https://wa.me/5562994267179?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="WhatsApp Contact"
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 'bold',
          flexShrink: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: '10px',
            color: 'var(--accent-green)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          ONLINE AGORA
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>
          {language === 'en' ? 'Get a Quote' : 'Solicitar Orçamento'}
        </div>
      </div>
    </a>
  );
};
