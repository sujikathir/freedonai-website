"use client";

import { motion } from "framer-motion";
import { FloatingDecorations } from "./FloatingDecorations";

export function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <FloatingDecorations variant="section" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-6"
        >
          Understanding isn&apos;t enough.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-body text-lg sm:text-xl leading-relaxed"
        >
          Lots of learners get good at reading and listening—then freeze when it&apos;s time to actually speak. FreeDon is built for that gap: practice speaking with an AI tutor, get gentle feedback, and build the confidence to use the language in real life.
        </motion.p>
      </div>
    </section>
  );
}
