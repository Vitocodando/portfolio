import React from 'react';

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  stack: string[];
  mockupImg?: string;
  mockupAlt?: string;
  bgColor?: string;
  tagColor?: string;
  badge?: string;
  liveUrl?: string;
  liveLabel?: string;
  liveBtnColor?: string;
  repoUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  title,
  description,
  stack,
  mockupImg,
  mockupAlt,
  bgColor = '#07090B',
  tagColor = 'var(--accent-green)',
  badge,
  liveUrl,
  liveLabel = 'Live Demo ↗',
  liveBtnColor = 'var(--accent-gold)',
  repoUrl,
}) => {
  return (
    <div className="project-card">
      {mockupImg && (
        <div style={{ borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden', background: bgColor }}>
          <img src={mockupImg} alt={mockupAlt || title} className="mockup-img" />
        </div>
      )}

      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: tagColor,
                textTransform: 'uppercase',
              }}
            >
              {type}
            </div>
            {badge && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-faint)' }}>
                {badge}
              </div>
            )}
          </div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</div>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-dim)' }}>{description}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: mockupImg ? '0' : '8px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {stack.map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-main)',
                  border: '1px solid #232D28',
                  borderRadius: '6px',
                  padding: '4px 8px',
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0B0E0D',
                  background: liveBtnColor,
                  borderRadius: '6px',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  transition: 'opacity var(--transition-fast)',
                }}
              >
                {liveLabel}
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast), color var(--transition-fast)',
                }}
              >
                GitHub Repo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
