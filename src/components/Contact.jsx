import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { href: 'mailto:you@example.com', label: 'Email', Icon: Mail },
  { href: 'https://github.com/your', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/your', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://twitter.com/your', label: 'Twitter', Icon: Twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#000000] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          className="text-2xl font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Get in touch
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m open to freelance, full‑time roles, and creative collaborations.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-200 backdrop-blur hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/10 hover:text-white"
            >
              <Icon className="h-4 w-4 text-gray-300 group-hover:text-[#00D4FF]" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 text-xs text-white/40">© {new Date().getFullYear()} Your Name</p>
      </div>
    </section>
  );
}
