import { motion } from 'framer-motion';

export default function Playground() {
  return (
    <section id="playground" className="relative bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-2xl font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Experiments / Playground
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Embed examples */}
          <motion.div
            className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="CodeSandbox Embed"
              src="https://codesandbox.io/embed/new?codemirror=1&view=editor"
              className="h-full w-full"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </motion.div>

          <motion.div
            className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              title="Codepen Embed"
              src="https://codepen.io/team/codepen/embed/preview/PNaGbb?theme-id=dark&default-tab=result"
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
