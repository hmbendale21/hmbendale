import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';
import {
  HTML5Logo,
  CSS3Logo,
  SassLogo,
  JavaScriptLogo,
  ReactLogo,
  GitHubLogo,
  NodeJSLogo,
  FirebaseLogo,
  MongoDBLogo,
  DockerLogo,
  PythonLogo,
  OpenCVLogo
} from './TechLogos';

const logoMap = {
  HTML5: HTML5Logo,
  CSS3: CSS3Logo,
  Sass: SassLogo,
  JavaScript: JavaScriptLogo,
  React: ReactLogo,
  GitHub: GitHubLogo,
  NodeJS: NodeJSLogo,
  Firebase: FirebaseLogo,
  MongoDB: MongoDBLogo,
  Docker: DockerLogo,
  Python: PythonLogo,
  OpenCV: OpenCVLogo
};

// Individual 3D Skill Tile with Bidirectional Reverse Scroll Parallax & Staggered Wave Entry
function SkillTile({ skill, idx, scrollProgress }) {
  const LogoComponent = logoMap[skill.logo] || HTML5Logo;

  // Alternate vertical parallax motion
  const isReverse = idx % 2 === 1;
  const yStart = isReverse ? -35 : 35;
  const yEnd = isReverse ? 35 : -35;

  const rawY = useTransform(scrollProgress, [0, 1], [yStart, yEnd]);
  const smoothY = useSpring(rawY, { stiffness: 85, damping: 22, mass: 0.5 });

  // Staggered 3D Wave entrance reveal on scroll
  const startPoint = 0.05 + (idx % 6) * 0.04;
  const tileScale = useTransform(scrollProgress, [startPoint, startPoint + 0.25], [0.8, 1]);
  const tileRotateY = useTransform(scrollProgress, [startPoint, startPoint + 0.25], [isReverse ? -18 : 18, 0]);
  const tileOpacity = useTransform(scrollProgress, [startPoint, startPoint + 0.18], [0, 1]);

  return (
    <motion.div
      style={{
        y: smoothY,
        scale: tileScale,
        rotateY: tileRotateY,
        opacity: tileOpacity,
        perspective: 800
      }}
      whileHover={{ scale: 1.12, rotateY: 0, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className="skill-tile-3d"
    >
      {/* 3D Inner Logo Wrapper */}
      <div className="skill-logo-box-3d">
        <LogoComponent size={38} />
      </div>

      {/* Uppercase Skill Name */}
      <span className="skill-tile-name-3d">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  // Track scroll progress of the Skills section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
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
        SKILLS
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Left-Aligned Section Header */}
        <div style={{ textAlign: 'left', maxWidth: '680px', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Core Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Technical toolkit spanning Web Development, Cloud Services, Cybersecurity, and AI Machine Learning.
          </p>
        </div>

        {/* Compact 3D Icon Grid Layout with Parallax Reverse Motion */}
        <div className="skills-grid-3d">
          {SKILLS.map((skill, idx) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              idx={idx}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>

      <style>{`
        .skills-grid-3d {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.2rem;
          perspective: 1000px;
          padding: 1rem 0;
        }

        .skill-tile-3d {
          padding: 1.25rem 0.8rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 125px;
          gap: 0.85rem;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid var(--glass-inner-border);
          box-shadow: 
            0 10px 24px -6px rgba(0, 0, 0, 0.35),
            inset 0 1px 1px rgba(255, 255, 255, 0.18),
            inset 0 -2px 4px rgba(0, 0, 0, 0.25);
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          user-select: none;
        }

        [data-theme='light'] .skill-tile-3d {
          background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
          box-shadow: 
            0 10px 20px -6px rgba(0, 0, 0, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.9),
            inset 0 -2px 4px rgba(0, 0, 0, 0.04);
        }

        .skill-tile-3d:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: linear-gradient(145deg, rgba(234, 179, 8, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
          box-shadow: 
            0 18px 36px -8px rgba(234, 179, 8, 0.28),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
        }

        [data-theme='light'] .skill-tile-3d:hover {
          border-color: rgba(0, 0, 0, 0.06);
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 
            0 18px 36px -8px rgba(0, 0, 0, 0.12),
            inset 0 1px 2px #ffffff;
        }

        .skill-logo-box-3d {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          width: 48px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: transform 0.25s ease;
        }

        .skill-tile-3d:hover .skill-logo-box-3d {
          transform: scale(1.1);
        }

        .skill-tile-name-3d {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          font-family: var(--font-heading);
          color: var(--text-primary);
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .skills-grid-3d {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .skills-grid-3d {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.85rem;
          }
          .skill-tile-3d {
            padding: 1rem 0.6rem;
            min-height: 115px;
          }
        }

        @media (max-width: 480px) {
          .skills-grid-3d {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
