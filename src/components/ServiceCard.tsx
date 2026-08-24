import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../data/solutionsData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { language, t } = useLanguage();

  const title = t.services[service.titleKey];
  const desc = t.services[service.descKey];
  const points = service.pointsKeys.map((k) => t.services[k]);
  const ctaText = language === 'en' ? service.ctaTextEn : service.ctaTextPt;
  const waMsg = language === 'en' ? service.waMessageEn : service.waMessagePt;
  const waUrl = `https://wa.me/5562994267179?text=${encodeURIComponent(waMsg)}`;

  return (
    <div
      className="service-card"
      style={{
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            background: service.badgeBg,
            border: `1px solid ${service.badgeBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            transition: 'transform var(--transition-fast)',
          }}
        >
          {service.icon}
        </div>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: service.accentColor, fontWeight: 'bold' }}>✓</span> {p}
            </div>
          ))}
        </div>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: '22px',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: service.accentColor,
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'transform var(--transition-fast), opacity var(--transition-fast)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(4px)';
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.opacity = '1';
        }}
      >
        {ctaText}
      </a>
    </div>
  );
};
