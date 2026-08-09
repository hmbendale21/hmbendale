import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

// Individual Animated Project Card Component with Distinct Scroll Motion Profiles
function ProjectCard({ project, idx, scrollProgress }) {
  // Distinct Motion Profile 1: Left Card (Slide in from Left + Rotate + Floating Parallax)
  const leftX = useTransform(scrollProgress, [0.05, 0.4], [-80, 0]);
  const leftRotate = useTransform(scrollProgress, [0.05, 0.4], [-6, 0]);
  const leftOpacity = useTransform(scrollProgress, [0.05, 0.3], [0, 1]);
  const leftScale = useTransform(scrollProgress, [0.05, 0.4], [0.88, 1]);
  const leftParallax = useTransform(scrollProgress, [0, 1], [35, -35]);
  const smoothLeftY = useSpring(leftParallax, { stiffness: 85, damping: 22 });

  // Distinct Motion Profile 2: Center Card (Lift from Depth + 3D RotateX + Opposite Parallax)
  const centerY = useTransform(scrollProgress, [0.1, 0.45], [90, 0]);
  const centerRotateX = useTransform(scrollProgress, [0.1, 0.45], [16, 0]);
  const centerOpacity = useTransform(scrollProgress, [0.1, 0.35], [0, 1]);
  const centerScale = useTransform(scrollProgress, [0.1, 0.45], [0.85, 1]);
  const centerParallax = useTransform(scrollProgress, [0, 1], [-30, 30]);
  const smoothCenterY = useSpring(centerParallax, { stiffness: 85, damping: 22 });

  // Distinct Motion Profile 3: Right Card (Slide in from Right + Rotate + Floating Parallax)
  const rightX = useTransform(scrollProgress, [0.15, 0.5], [80, 0]);
  const rightRotate = useTransform(scrollProgress, [0.15, 0.5], [6, 0]);
  const rightOpacity = useTransform(scrollProgress, [0.15, 0.4], [0, 1]);
  const rightScale = useTransform(scrollProgress, [0.15, 0.5], [0.88, 1]);
  const rightParallax = useTransform(scrollProgress, [0, 1], [40, -40]);
  const smoothRightY = useSpring(rightParallax, { stiffness: 85, damping: 22 });

  // Select motion properties based on card index
  let cardMotionStyle = {};
  if (idx === 0) {
    cardMotionStyle = {
      x: leftX,
      rotate: leftRotate,
      opacity: leftOpacity,
      scale: leftScale,
      y: smoothLeftY
    };
  } else if (idx === 1) {
    cardMotionStyle = {
      y: centerY,
      rotateX: centerRotateX,
      opacity: centerOpacity,
      scale: centerScale,
      translateY: smoothCenterY
    };
  } else {
    cardMotionStyle = {
      x: rightX,
      rotate: rightRotate,
      opacity: rightOpacity,
      scale: rightScale,
      y: smoothRightY
    };
  }

  const numFormatted = `0${idx + 1}`;

  return (
    <motion.div
      style={cardMotionStyle}
      className={`glass-card project-card-minimal ${idx % 2 === 1 ? 'project-card-offset' : ''}`}
    >
      <div>
        {/* Top Header: Badge Pill + Index + GitHub */}
        <div className="project-card-header">
          <span className="glass-pill project-badge-pill">
            <ShieldCheck size={13} /> {project.badge}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span className="project-num-indicator">{numFormatted}</span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="project-github-btn"
            >
              <GithubIcon size={18} />
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="project-card-title">
          {project.title}
        </h3>

        {/* Description */}
        <p className="project-card-desc">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Chips */}
      <div className="project-tech-wrapper">
        {project.tech.map((t, tIdx) => (
          <span key={tIdx} className="project-tech-chip">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  // Track scroll position of the Projects section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} id="projects" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
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
        PROJECTS
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Left-Aligned Section Title */}
        <div style={{ textAlign: 'left', maxWidth: '680px', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Featured Software & <span className="gradient-text">AI Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Featured open-source repositories spanning Cybersecurity, Computer Vision, and Web Engineering.
          </p>
        </div>

        {/* Clean Staggered Project Grid with Parallax & Motion Profiles */}
        <div className="projects-staggered-grid">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>

      <style>{`
        .projects-staggered-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: start;
          padding: 1.5rem 0;
        }

        .project-card-minimal {
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 360px;
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--glass-inner-border);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .project-card-offset {
          margin-top: 2rem;
        }

        .project-card-minimal:hover {
          border-color: var(--accent-electric-glow);
          box-shadow: 0 20px 40px -10px rgba(234, 179, 8, 0.18);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .project-badge-pill {
          fontSize: 0.75rem;
          padding: 0.3rem 0.75rem;
        }

        .project-num-indicator {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--accent-electric-bright);
          opacity: 0.75;
        }

        .project-github-btn {
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .project-github-btn:hover {
          color: var(--accent-electric-bright);
          transform: translateY(-2px);
        }

        .project-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
          line-height: 1.35;
          letter-spacing: -0.015em;
        }

        .project-card-desc {
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .project-tech-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .project-tech-chip {
          font-size: 0.73rem;
          font-family: var(--font-mono);
          padding: 0.22rem 0.6rem;
          border-radius: 4px;
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.20);
          color: var(--accent-electric-light);
        }

        @media (max-width: 1024px) {
          .projects-staggered-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
          .project-card-offset {
            margin-top: 0;
          }
        }

        @media (max-width: 680px) {
          .projects-staggered-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-card-minimal {
            min-height: auto;
            padding: 1.35rem 1.15rem !important;
            border-radius: 18px;
          }
          .project-card-title {
            font-size: 1.15rem !important;
            margin-bottom: 0.75rem !important;
          }
          .project-card-desc {
            font-size: 0.88rem !important;
            margin-bottom: 1.35rem !important;
          }
          .project-tech-chip {
            font-size: 0.7rem !important;
            padding: 0.2rem 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
