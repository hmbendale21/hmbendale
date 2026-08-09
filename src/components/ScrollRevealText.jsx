import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['rgba(148, 163, 184, 0.25)', 'var(--text-primary)']);

  return (
    <span style={{ position: 'relative', display: 'inline-block', marginRight: '0.3em', marginBottom: '0.15em' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.18, color: 'var(--text-muted)' }}>
        {children}
      </span>
      <motion.span style={{ opacity, color, display: 'inline-block' }}>
        {children}
      </motion.span>
    </span>
  );
}

export default function ScrollRevealText({
  children,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'start 0.25']
  });

  const textString = typeof children === 'string' ? children : String(children);
  const words = textString.split(' ');

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        lineHeight: 1.65,
        wordWrap: 'break-word',
        ...style
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
}
