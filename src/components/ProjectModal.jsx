import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          background: 'rgba(0, 0, 0, 0.82)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(234, 179, 8, 0.30)',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'var(--glass-border)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>

          {/* Badge & Title */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'rgba(234, 179, 8, 0.12)', border: '1px solid rgba(234, 179, 8, 0.30)', color: 'var(--accent-electric-bright)', fontSize: '0.78rem', fontWeight: '600', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            {project.badge}
          </div>

          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {project.title}
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Highlights List */}
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-electric-light)', marginBottom: '0.75rem' }}>
              KEY ARCHITECTURE & HIGHLIGHTS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-electric-bright)', marginTop: '2px', flexShrink: 0 }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              TECH STACK USED:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    background: 'rgba(234, 179, 8, 0.10)',
                    border: '1px solid rgba(234, 179, 8, 0.25)',
                    color: 'var(--accent-electric-light)',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <GithubIcon size={18} /> View Repository
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
