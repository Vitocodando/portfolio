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
        transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-hover)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-green)' }}>
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
