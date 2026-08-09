import React from 'react';
import ScrollExpand from './ScrollExpand';
import SpecularButton from './SpecularButton';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function VisionShowcase() {
  return (
    <section id="vision-showcase" style={{ position: 'relative', width: '100%' }}>
      <ScrollExpand
        src="/minimal_blue_abstract.png"
        alt="SecureSphere Cybersecurity Architecture"
        title="SecureSphere Cyber Security Suite"
        scrollHint="Scroll to Expand Architecture"
        useWindowScroll={true}
        startWidth={46}
        startHeight={54}
        startRadius={20}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.2}
        holdDistance={0.35}
        overlayScrim={0.5}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          {/* Clean Inline Label (No Container Box) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)',
              color: '#facc15',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}
          >
            <ShieldCheck size={16} /> CYBERSECURITY & THREAT HARDENING
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}
          >
            Automated Threat Detection & <br />
            <span style={{ color: '#facc15' }}>Systems Hardening Suite</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.75',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              maxWidth: '640px',
              margin: '0 auto 2rem auto'
            }}
          >
            Real-time endpoint log analysis, security anomaly detection, system audit routines, and network hardening suites in an open-source architecture.
          </p>

          <SpecularButton
            size="lg"
            radius={18}
            followMouse={true}
            onClick={() => window.open('https://github.com/hmbendale21/SecureSphere', '_blank')}
            style={{
              fontSize: '0.98rem',
              padding: '0.85rem 1.8rem',
              boxShadow: '0 8px 30px rgba(234, 179, 8, 0.45)'
            }}
          >
            Explore SecureSphere Repository <ArrowRight size={18} />
          </SpecularButton>
        </div>
      </ScrollExpand>

    </section>
  );
}
