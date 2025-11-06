import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

export default function App() {
  // Page load fade-in
  useEffect(() => {
    const body = document.body;
    body.classList.add('opacity-0');
    requestAnimationFrame(() => {
      body.classList.add('transition-opacity', 'duration-700');
      body.classList.remove('opacity-0');
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Cursor />
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-medium text-white/80 hover:text-white">Your Name</a>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#playground" className="hover:text-white">Playground</a>
            <a href="#contact" className="cursor-accent rounded-full border border-white/10 px-3 py-1.5 hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/10">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Playground />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-6 text-center text-xs text-white/40">
        Built with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  );
}
