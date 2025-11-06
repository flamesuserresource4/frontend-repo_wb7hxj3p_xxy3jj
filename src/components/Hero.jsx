import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const roles = [
  'Software Engineer',
  'Full‑Stack Developer',
  'Problem Solver',
];

function useSmoothScrolling() {
  useEffect(() => {
    const html = document.documentElement;
    const original = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = original;
    };
  }, []);
}

export default function Hero() {
  useSmoothScrolling();

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient and vignette overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000000aa] via-transparent to-[#000000dd]" />
        <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Your Name
        </motion.h1>

        {/* Auto-typing roles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
          className="mt-4 h-10 text-lg sm:text-xl md:text-2xl text-gray-300"
          aria-live="polite"
        >
          <Typewriter items={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
          className="mt-8 max-w-2xl text-balance text-gray-400"
        >
          Building elegant, high‑performance products with a focus on craft, clarity, and immersive user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm backdrop-blur hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/40 transition-colors"
          >
            <span className="text-white/90 group-hover:text-white">View Projects</span>
          </a>
          <a
            href="#contact"
            className="group rounded-full border border-white/10 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/10 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Typewriter({ items }) {
  // Simple CSS-based typewriter using framer-motion key sequencing
  // Rotates through roles with a typing cursor effect
  return (
    <span className="inline-flex items-center">
      {items.map((item, idx) => (
        <motion.span
          key={item}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: idx * 3.2, duration: 0.5 }}
        >
          <TypingText text={item} startDelay={idx * 3.2} />
        </motion.span>
      ))}
      {/* Invisible spacer to keep layout height */}
      <span className="opacity-0">{items[0]}</span>
    </span>
  );
}

function TypingText({ text, startDelay = 0 }) {
  // Reveal text one character at a time
  const chars = Array.from(text);
  return (
    <span className="relative">
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: startDelay + 0.05 * i, duration: 0.02 }}
        >
          {ch}
        </motion.span>
      ))}
      <motion.span
        className="ml-1 inline-block h-6 w-[2px] bg-white/80 align-middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: startDelay + 0.25 }}
      />
    </span>
  );
}
