import React from 'react';
import { ArchitectureFeature } from '../data/portfolioData';

interface ArchitectureCardProps {
  feature: ArchitectureFeature;
}

export const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ feature }) => {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        borderRadius: '10px',
        padding: '22px',
        background: 'var(--bg-main)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-hover)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 26px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)', fontWeight: 600 }}>
        {feature.num}
      </div>
      <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
        {feature.title}
      </div>
      <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-dim)' }}>
        {feature.desc}
      </div>
    </div>
  );
};
