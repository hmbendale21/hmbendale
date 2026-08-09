import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, User, Target, Cpu, FolderGit2, Mail, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'focus', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 968) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: User, num: '01' },
    { name: 'Focus Areas', href: '#focus', id: 'focus', icon: Target, num: '02' },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Cpu, num: '03' },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2, num: '04' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail, num: '05' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(14, 21, 38, 0.75)'
            : 'rgba(255, 255, 255, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled
          ? theme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.08)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? theme === 'dark'
            ? '0 12px 36px rgba(0, 0, 0, 0.45)'
            : '0 12px 36px rgba(0, 0, 0, 0.06)'
          : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          position: 'relative'
        }}
      >
        
        {/* Left: Branding Name */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ textDecoration: 'none' }}>
          <div style={{ fontWeight: '800', fontSize: '1.15rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Himanshu Bendale
          </div>
        </a>

        {/* Center: Desktop Nav Links (Mathematically Centered) */}
        <nav
          className="desktop-nav"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--accent-electric-bright)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Action Controls (Theme Toggle, Resume Button & Mobile Menu) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#facc15' }} /> : <Moon size={18} style={{ color: '#ca8a04' }} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>


      {/* Full-Screen Minimalist Mobile Navigation Overlay (Matching Screenshot Design) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-drawer-only"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              minHeight: '100dvh',
              minWidth: '100dvw',
              background: theme === 'dark' ? '#0e1526' : '#ffffff',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2.5rem 1.5rem 3.5rem 1.5rem',
              overflowY: 'auto'
            }}
          >
            {/* Top Bar: Top-Right Circular Close Button */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                title="Close Menu"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.07)',
                  border: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)'
                }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Main Navigation Links (Clean Standalone Bold Centered Typography) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.85rem',
                margin: 'auto 0',
                width: '100%',
                padding: '2rem 0'
              }}
            >
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.08, duration: 0.28 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontSize: 'clamp(1.75rem, 6.2vw, 2.35rem)',
                      fontWeight: '800',
                      color: isActive ? 'var(--accent-electric-bright)' : 'var(--text-primary)',
                      textDecoration: 'none',
                      letterSpacing: '-0.02em',
                      textAlign: 'center',
                      transition: 'color 0.2s ease, transform 0.2s ease'
                    }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Centered Resume Pill CTA Button */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 2.2rem',
                  borderRadius: '100px',
                  background: theme === 'dark' ? '#f1f5f9' : '#1c1917',
                  color: theme === 'dark' ? '#0f172a' : '#fef08a',
                  fontWeight: '800',
                  fontSize: '1.02rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.2s ease'
                }}
              >
                Resume <span style={{ fontSize: '1.1rem' }}>⤓</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 969px) {
          .mobile-drawer-only { display: none !important; }
        }
        @media (max-width: 968px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
