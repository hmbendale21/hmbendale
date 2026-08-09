import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FOCUS_AREAS, STATS } from '../data/portfolioData';
import {
  PythonLogo,
  PandasLogo,
  NetworkSecurityLogo,
  ReactLogo,
  GitLogo,
  OpenCVLogo,
  SecurityResearchLogo
} from './TechLogos';
import ScrollRevealText from './ScrollRevealText';

const logoMap = {
  Python: PythonLogo,
  Pandas: PandasLogo,
  NetworkSecurity: NetworkSecurityLogo,
  React: ReactLogo,
  Git: GitLogo,
  OpenCV: OpenCVLogo,
  SecurityResearch: SecurityResearchLogo
};

// Animated Stat Card with Distinct Scroll Reveal Profiles (No Hover Jumps, Locks to 100% Solid Opacity & Grid Alignment)
function StatCard({ stat, idx }) {
  const LogoComponent = logoMap[stat.icon] || PythonLogo;
  const isOffset = idx % 2 === 1;

  // 4 Distinct Entrance Motion Profiles on Scroll
  let motionProps = {};
  if (idx === 0) {
    // Card 01: Slide in from Left
    motionProps = {
      initial: { opacity: 0, x: -65, rotate: -2, scale: 0.9 },
      whileInView: { opacity: 1, x: 0, rotate: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }
    };
  } else if (idx === 1) {
    // Card 02: Drop in from Top
    motionProps = {
      initial: { opacity: 0, y: -50, scale: 0.9 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
    };
  } else if (idx === 2) {
    // Card 03: Slide from Bottom Left
    motionProps = {
      initial: { opacity: 0, x: -50, y: 50, rotate: -2, scale: 0.9 },
      whileInView: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }
    };
  } else {
    // Card 04: Lift from Bottom Right with scale
    motionProps = {
      initial: { opacity: 0, x: 50, y: 50, scale: 0.88 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }
    };
  }

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: false, amount: 0.1 }}
      style={{
        padding: '1.6rem 1.4rem',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '150px',
        border: '1px solid var(--glass-inner-border)',
        boxShadow: 'var(--glass-shadow)',
        position: 'relative',
        overflow: 'hidden',
        perspective: 800
      }}
      className={`glass-card about-stat-card${isOffset ? ' about-stat-card--offset' : ''}`}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoComponent size={28} />
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', opacity: 0.6, fontWeight: '700' }}>
          0{idx + 1}
        </span>
      </div>

      <div>
        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.1', marginBottom: '0.25rem' }}>
          {stat.value}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', lineHeight: '1.3' }}>
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

// Animated Focus Card with 4 Distinct Entrance Motion Profiles
function FocusCard({ area, idx }) {
  const isOffset = idx % 2 === 1;

  let motionProps = {};
  if (idx === 0) {
    // Card 01: Slide in from Left
    motionProps = {
      initial: { opacity: 0, x: -70, rotate: -3, scale: 0.9 },
      whileInView: { opacity: 1, x: 0, rotate: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }
    };
  } else if (idx === 1) {
    // Card 02: Drop in from Top Right
    motionProps = {
      initial: { opacity: 0, x: 60, y: -50, rotate: 3, scale: 0.9 },
      whileInView: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
    };
  } else if (idx === 2) {
    // Card 03: Rise from Bottom Left
    motionProps = {
      initial: { opacity: 0, x: -60, y: 60, rotate: -2, scale: 0.9 },
      whileInView: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }
    };
  } else {
    // Card 04: Lift from Bottom Right with scale bounce
    motionProps = {
      initial: { opacity: 0, x: 60, y: 60, scale: 0.86 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      transition: { duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }
    };
  }

  return (
    <motion.div
      key={area.id}
      {...motionProps}
      viewport={{ once: false, amount: 0.1 }}
      style={{ perspective: 800 }}
      className={`glass-card focus-card${isOffset ? ' focus-card--offset' : ''}`}
    >
      {/* Number + Title */}
      <div style={{
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--accent-electric-bright)',
        fontWeight: '700',
        marginBottom: '0.35rem',
        opacity: 0.8
      }}>
        {area.num}
      </div>
      <h4 style={{
        fontSize: '1.05rem',
        fontWeight: '800',
        color: 'var(--text-primary)',
        marginBottom: '0.6rem',
        lineHeight: '1.3'
      }}>
        {area.title}
      </h4>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
        lineHeight: '1.65'
      }}>
        {area.description}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>

      {/* Huge Bold Background Watermark Text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20px',
          left: '-20px',
          fontSize: 'clamp(6rem, 18vw, 12rem)',
          fontWeight: '900',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          opacity: 0.035,
          letterSpacing: '0.05em',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}
      >
        ABOUT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Unique Split Layout: Left 2x2 Staggered Stats Grid + Right Animated Narrative Text */}
        <div className="about-split-wrapper" style={{ marginBottom: '5.5rem' }}>

          {/* Left Column: Unique 2x2 Staggered Grid of Stat Cards */}
          <div className="about-stats-unique-grid">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                stat={stat}
                idx={idx}
              />
            ))}
          </div>

          {/* Right Column: Title & Narrative Paragraphs (Static, No Scroll Animation) */}
          <div className="about-text-right">
            <h2
              style={{ fontSize: 'clamp(2rem, 3.8vw, 2.75rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', fontWeight: '800', lineHeight: '1.2' }}
            >
              Engineering Intelligent AI & <br />
              <span className="gradient-text">Robust Software</span>
            </h2>

            <div
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.32rem)', lineHeight: '1.7', fontWeight: '600' }}
            >
              <ScrollRevealText>
                I am a Cybersecurity Researcher and Software Engineer focused on constructing secure systems, automated threat detection suites, and high-performance AI computer vision models combining Python data pipelines with robust infrastructure hardening.
              </ScrollRevealText>
            </div>
          </div>

        </div>

        {/* Redesigned Split: Left Text + Right 2×2 Focus Grid */}
        <div id="focus" style={{ paddingTop: '2rem' }}>
          <div className="focus-split-layout">

            {/* Left: Title + Description */}
            <div className="focus-split-left">
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-electric-bright)',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  4 CORE DOMAINS
                </p>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem'
                }}>
                  Primary<br />
                  <span className="gradient-text">Technical Focus</span>
                </h3>
                <div style={{
                  fontSize: 'clamp(1.12rem, 2.1vw, 1.28rem)',
                  fontWeight: '600',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  maxWidth: '460px'
                }}>
                  <ScrollRevealText>
                    Deep-diving into the fields that matter most from real-time threat detection and system hardening to AI-powered computer vision and modern web interfaces.
                  </ScrollRevealText>
                </div>
                <div style={{
                  fontSize: 'clamp(1.12rem, 2.1vw, 1.28rem)',
                  fontWeight: '600',
                  lineHeight: '1.68',
                  maxWidth: '460px'
                }}>
                  <ScrollRevealText>
                    Each domain is backed by hands-on projects, open-source contributions, and continuous learning.
                  </ScrollRevealText>
                </div>
              </div>
            </div>

            {/* Right: 2×2 Clean Card Grid */}
            <div className="focus-split-grid">
              {FOCUS_AREAS.map((area, idx) => (
                <FocusCard key={area.id} area={area} idx={idx} />
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .about-split-wrapper {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-stats-unique-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.4rem;
          align-items: start;
        }
        .about-stat-card--offset {
          margin-top: 2.2rem;
        }
        @media (max-width: 968px) {
          .about-split-wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .about-text-right {
            order: -1;
          }
          .about-stat-card--offset {
            margin-top: 0;
          }
        }
        @media (max-width: 520px) {
          .about-stats-unique-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .focus-split-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 4rem;
          align-items: start;
        }
        .focus-split-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.4rem;
          align-items: start;
        }
        .focus-card {
          padding: 1.75rem;
          border-radius: var(--radius-md);
        }
        .focus-card--offset {
          margin-top: 2.5rem;
        }
        @media (max-width: 900px) {
          .focus-split-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .focus-split-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .focus-card--offset {
            margin-top: 0;
          }
        }
        @media (max-width: 540px) {
          .focus-split-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
