import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Docker', 'AWS'
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-2xl font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-gray-200 backdrop-blur hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/10 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
