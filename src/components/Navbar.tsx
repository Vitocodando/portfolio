import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isSolutionsPage = location.pathname === '/solucoes' || location.pathname === '/lp';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '64px',
        background: 'rgba(11, 14, 13, 0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
      }}
    >
      {/* Brand */}
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--accent-green)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          letterSpacing: '0.02em',
        }}
      >
        <span>victor.arthur</span>
        <span style={{ color: 'var(--text-faint)' }}>/</span>
        {isSolutionsPage ? (
          <span
            style={{
              color: 'var(--text-primary)',
              background: '#16201B',
              padding: '3px 8px',
              borderRadius: '4px',
              border: '1px solid #27362E',
              fontSize: '11px',
              letterSpacing: '0.05em',
            }}
          >
            SOLUÇÕES
          </span>
        ) : (
          <span style={{ color: 'var(--text-faint)' }}>()</span>
        )}
      </Link>

      {/* Desktop Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div
          className="nav-links"
          style={{ display: 'flex', gap: '22px', fontSize: '14px', alignItems: 'center' }}
        >
          {isSolutionsPage ? (
            <>
              <a href="#servicos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.services}
              </a>
              <a href="#cases" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.cases}
              </a>
              <a href="#processo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.process}
              </a>
              <a href="#simulador" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.calc}
              </a>
              <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.faq}
              </a>
              <Link
                to="/"
                style={{
                  color: 'var(--accent-blue)',
                  textDecoration: 'none',
                  border: '1px solid rgba(110, 168, 254, 0.3)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  background: 'rgba(110, 168, 254, 0.05)',
                }}
              >
                {t.nav.portfolio} ↗
              </Link>
            </>
          ) : (
            <>
              <a href="#sobre" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.about}
              </a>
              <a href="#projetos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.project}
              </a>
              <a href="#stack" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.stack}
              </a>
              <a href="#experiencia" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.exp}
              </a>
              <a href="#contato" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {t.nav.contact}
              </a>
              <Link
                to="/solucoes"
                style={{
                  color: 'var(--accent-green)',
                  textDecoration: 'none',
                  border: '1px solid rgba(124, 242, 156, 0.3)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  background: 'rgba(124, 242, 156, 0.05)',
                }}
              >
                {t.nav.servicesLp} ↗
              </Link>
            </>
          )}
        </div>

        {/* Action controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              background: 'transparent',
              border: '1px solid var(--border-muted)',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          {isSolutionsPage ? (
            <a
              href="https://wa.me/5562994267179?text=Ol%C3%A1%20Victor!%20Gostaria%20de%20fazer%20um%20projeto%20com%20voc%C3%AA."
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0B0E0D',
                background: 'var(--accent-green)',
                borderRadius: '6px',
                padding: '7px 14px',
                textDecoration: 'none',
              }}
            >
              {t.nav.cta}
            </a>
          ) : (
            <a
              href="/uploads/Curriculo-Victor-Arthur.pdf"
              download
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0B0E0D',
                background: 'var(--accent-green)',
                borderRadius: '6px',
                padding: '7px 14px',
                textDecoration: 'none',
              }}
            >
              {t.nav.cv}
            </a>
          )}

          {/* Mobile hamburger button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--border-muted)',
              borderRadius: '6px',
              padding: '6px 10px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 14, 13, 0.98)',
            backdropFilter: 'blur(16px)',
            zIndex: 49,
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          {isSolutionsPage ? (
            <>
              <a href="#servicos" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.services}
              </a>
              <a href="#cases" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.cases}
              </a>
              <a href="#processo" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.process}
              </a>
              <a href="#simulador" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.calc}
              </a>
              <a href="#faq" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.faq}
              </a>
              <Link to="/" onClick={closeMenu} style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                {t.nav.portfolio} ↗
              </Link>
            </>
          ) : (
            <>
              <a href="#sobre" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.about}
              </a>
              <a href="#projetos" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.project}
              </a>
              <a href="#stack" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.stack}
              </a>
              <a href="#experiencia" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.exp}
              </a>
              <a href="#contato" onClick={closeMenu} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                {t.nav.contact}
              </a>
              <Link to="/solucoes" onClick={closeMenu} style={{ color: 'var(--accent-green)', textDecoration: 'none' }}>
                {t.nav.servicesLp} ↗
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
