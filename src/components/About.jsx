import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-[#000000] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-2xl font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I craft reliable software and thoughtful interfaces. I enjoy turning complex ideas into
          elegant, performant products — from concept and architecture to polished, production‑ready
          experiences.
        </motion.p>
      </div>
    </section>
  );
}
