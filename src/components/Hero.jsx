import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import SpecularButton from './SpecularButton';
import { PERSONAL_INFO } from '../data/portfolioData';

// 3D Orbit & Pointer Tracking Depth Engine for Hero Cutout Image
function HeroCutoutImage({
  src = '/himanshu_hero_cutout.png',
  alt = 'Himanshu Bendale',
  tilt = 7.5,
  pointerTracking = true,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = true,
  orbitSpeed = 0.35
}) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const getTransform = (rotateX, rotateY) => `rotateX(${rotateX.toFixed(3)}deg) rotateY(${rotateY.toFixed(3)}deg)`;

  const baseRotation = useMemo(() => ({ x: -tilt * 0.32, y: tilt * 0.42 }), [tilt]);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage || typeof window === 'undefined') return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const canTrackPointer = pointerTracking && finePointer && !reducedMotion;

    let frameId = 0;
    let activePointer = false;
    let startTime = performance.now();
    const current = { ...baseRotation };
    const target = { ...baseRotation };

    const applyTransform = () => {
      stage.style.transform = getTransform(current.x, current.y);
    };

    if (reducedMotion) {
      stage.style.transform = getTransform(baseRotation.x, baseRotation.y);
      return undefined;
    }

    const handlePointerMove = event => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      activePointer = true;
      const x = clamp((event.clientX - (rect.left + rect.width / 2)) / (rect.width * 0.8), -1, 1);
      const y = clamp((event.clientY - (rect.top + rect.height / 2)) / (rect.height * 0.8), -1, 1);

      target.x = baseRotation.x - y * tilt;
      target.y = baseRotation.y + x * tilt;
    };

    const handlePointerLeave = () => {
      activePointer = false;
      target.x = baseRotation.x;
      target.y = baseRotation.y;
    };

    if (canTrackPointer) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerleave', handlePointerLeave);
      window.addEventListener('blur', handlePointerLeave);
    }

    const tick = now => {
      if ((!canTrackPointer || !activePointer) && autoOrbit) {
        const elapsed = (now - startTime) / 1000;
        const orbit = elapsed * orbitSpeed * Math.PI * 2;
        const fallbackAmount = canTrackPointer ? 0.18 : 0.55;
        target.x = baseRotation.x + Math.sin(orbit) * tilt * fallbackAmount;
        target.y = baseRotation.y + Math.cos(orbit * 0.85) * tilt * fallbackAmount;
      }

      current.x += (target.x - current.x) * smoothing;
      current.y += (target.y - current.y) * smoothing;
      applyTransform();
      frameId = requestAnimationFrame(tick);
    };

    applyTransform();
    frameId = requestAnimationFrame(tick);

    return () => {
      if (canTrackPointer) {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
        window.removeEventListener('blur', handlePointerLeave);
      }
      cancelAnimationFrame(frameId);
      startTime = 0;
    };
  }, [autoOrbit, baseRotation, pointerTracking, orbitSpeed, smoothing, tilt]);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'absolute',
        bottom: '32px',
        right: '-7%',
        height: 'clamp(470px, 81vh, 690px)',
        maxHeight: '85vh',
        perspective: `${perspective}px`,
        perspectiveOrigin: '50% 50%',
        zIndex: 2,
        isolation: 'isolate'
      }}
      className="hero-cutout-container"
    >
      <div
        ref={stageRef}
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 100%',
          willChange: 'transform',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: '85vh',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            display: 'block',
            filter: 'drop-shadow(-20px 26px 24px rgba(0, 0, 0, 0.48)) drop-shadow(-8px 14px 16px rgba(0, 0, 0, 0.28))',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 95%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 95%, transparent 100%)'
          }}
          className="hero-cutout-img"
        />
      </div>
    </div>
  );
}

function TypewriterTagline({ taglines }) {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = taglines[taglineIdx] || '';
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIdx, taglines]);

  return (
    <div
      style={{
        fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
        fontWeight: '700',
        color: 'var(--accent-electric-bright)',
        fontFamily: 'var(--font-heading)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        height: '38px',
        minHeight: '38px',
        maxHeight: '38px',
        overflow: 'hidden'
      }}
    >
      <Terminal size={22} style={{ flexShrink: 0 }} />
      <span style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.65, ease: 'easeInOut' }}
          style={{
            display: 'inline-block',
            width: '3px',
            height: '1.2em',
            backgroundColor: 'var(--accent-electric-bright)',
            boxShadow: '0 0 10px var(--accent-electric-bright)',
            marginLeft: '5px',
            verticalAlign: 'middle',
            borderRadius: '1px',
            flexShrink: 0
          }}
        />
      </span>
    </div>
  );
}

export default function Hero() {

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: 'calc(100vh - 76px)',
        minHeight: '680px',
        maxHeight: '1050px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '76px',
        paddingBottom: 0,
        overflow: 'hidden'
      }}
    >
      {/* Seamless Organic Curved Background Shape */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '54%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
        className="hero-curve-bg"
      >
        <svg
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          <path
            d="M 500,0 L 340,0 C 180,0 260,480 0,800 L 500,800 Z"
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            height: '100%'
          }}
          className="hero-grid"
        >
          {/* Left Column: Fluid Responsive Text Content (Arrangement matching reference layout) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: '4.8rem', paddingBottom: '1rem' }}
            className="hero-text-col"
          >
            {/* Stacked Display Title with White Text Stroke */}
            <h1 style={{
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.1rem)',
              lineHeight: '1.15',
              fontWeight: '800',
              textTransform: 'uppercase',
              WebkitTextStroke: '1.5px #ffffff',
              paintOrder: 'stroke fill'
            }}>
              CYBERSECURITY & <br />
              <span className="gradient-text">AI ENGINEER</span>
            </h1>

            {/* Rotating Animated Subtitle Typewriter Tagline (Fixed 38px Height Container) */}
            <div style={{ height: '38px', minHeight: '38px', marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }}>
              <TypewriterTagline taglines={PERSONAL_INFO.taglines} />
            </div>

            {/* Clean Subtitle Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '2.5rem',
                maxWidth: '540px',
                fontWeight: '500'
              }}
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Call To Action Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
              <SpecularButton
                size="md"
                radius={18}
                followMouse={true}
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Work <ArrowRight size={18} />
              </SpecularButton>

              <SpecularButton
                size="md"
                radius={18}
                followMouse={true}
                onClick={() => window.open('https://github.com/hmbendale21', '_blank')}
              >
                <GithubIcon size={18} /> GitHub
              </SpecularButton>
            </div>

          </motion.div>

          {/* Right Column: Cutout Portrait with 3D Depth Pointer Tracking & Auto Orbit */}
          <HeroCutoutImage
            src="/himanshu_hero_cutout.png"
            alt="Himanshu Bendale"
            tilt={7.5}
            pointerTracking={true}
            smoothing={0.14}
            perspective={900}
            autoOrbit={true}
            orbitSpeed={0.35}
          />

        </div>
      </div>

      {/* Soft Gradient Overlay into Next Section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '110px',
          background: 'linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%)',
          pointerEvents: 'none',
          zIndex: 5
        }}
      />

      <style>{`
        @media (max-width: 1200px) and (min-width: 969px) {
          .hero-cutout-img {
            right: -2% !important;
            height: clamp(420px, 75vh, 620px) !important;
          }
        }
        @media (max-width: 968px) {
          #hero {
            height: auto !important;
            min-height: calc(100vh - 76px) !important;
            padding-top: 90px !important;
            padding-bottom: 2rem !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            text-align: center !important;
            justify-items: center !important;
          }
          .hero-text-col {
            padding-top: 0.5rem !important;
            padding-bottom: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
          }
          .hero-text-col h1 {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-text-col p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-cta-group {
            justify-content: center !important;
            width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 1rem !important;
          }
          .hero-curve-bg {
            display: none !important;
          }
          .hero-cutout-container {
            position: relative !important;
            right: auto !important;
            bottom: auto !important;
            height: auto !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 1rem auto 0 auto !important;
          }
          .hero-cutout-img {
            position: relative !important;
            height: auto !important;
            min-height: 360px !important;
            max-height: 460px !important;
            width: 95% !important;
            max-width: 440px !important;
            margin: 0 auto !important;
            right: auto !important;
            bottom: auto !important;
            object-fit: contain !important;
            object-position: center center !important;
            transform: scale(1.15) !important;
            transform-origin: center center !important;
          }
        }
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            gap: 0.75rem !important;
            margin-bottom: 1.25rem !important;
          }
          .hero-cta-group > * {
            flex: 1 1 auto !important;
            display: flex !important;
            justify-content: center !important;
            white-space: nowrap !important;
            padding-left: 0.85rem !important;
            padding-right: 0.85rem !important;
            font-size: 0.88rem !important;
          }
          .hero-cutout-container {
            margin-top: 1rem !important;
          }
          .hero-cutout-img {
            min-height: 350px !important;
            max-height: 440px !important;
            width: 96% !important;
            max-width: 420px !important;
            transform: scale(1.2) !important;
            transform-origin: center center !important;
          }
        }
      `}</style>
    </section>
  );
}
