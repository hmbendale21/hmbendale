import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: '#0a0f1d',
        paddingTop: '130px',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Footer Main Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingTop: '1.5rem',
            fontSize: '0.9rem'
          }}
          className="footer-content-row"
        >
          
          {/* Left: Cyber Shield Monogram + Gradient Wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-electric-bright)',
                opacity: 0.9
              }}
            >
              <ShieldCheck size={30} strokeWidth={1.75} />
            </div>

            <span
              style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #f1f5f9 30%, #facc15 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Himanshu Bendale
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.75rem' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-electric-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Copyright © {new Date().getFullYear()} Himanshu Bendale.
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .footer-content-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
