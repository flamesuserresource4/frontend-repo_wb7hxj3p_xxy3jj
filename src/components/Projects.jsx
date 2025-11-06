import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Low‑latency collaborative editor with CRDTs and presence.',
    tech: ['TypeScript', 'React', 'WebRTC', 'CRDT'],
    demo: 'https://example.com',
    code: 'https://github.com/example/repo',
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive WebGL configurator with PBR materials.',
    tech: ['Three.js', 'React', 'Vite'],
    demo: 'https://example.com',
    code: 'https://github.com/example/repo',
  },
  {
    title: 'API Performance Dashboard',
    desc: 'Streaming metrics with anomaly detection and alerts.',
    tech: ['Next.js', 'FastAPI', 'Postgres'],
    demo: 'https://example.com',
    code: 'https://github.com/example/repo',
  },
];

function TechTag({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#000000] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-2xl font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white/90">{p.title}</h3>
                <div className="flex gap-2 opacity-80">
                  <a href={p.demo} target="_blank" className="text-sm text-[#00D4FF] hover:underline">Live</a>
                  <a href={p.code} target="_blank" className="text-sm text-gray-300 hover:text-white">Code</a>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,212,255,0.08), transparent 40%)' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
