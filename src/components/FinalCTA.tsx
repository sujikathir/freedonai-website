"use client";

import { motion } from "framer-motion";
import { FloatingDecorations } from "./FloatingDecorations";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCTA() {
  return (
    <section id="waitlist" className="py-20 sm:py-28 bg-teal-dark relative overflow-hidden">
      <FloatingDecorations variant="dark" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-4"
        >
          Ready to speak?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-teal-light/90 text-lg mb-8"
        >
          Get early access. We&apos;ll notify you when we launch—no credit card, no spam.
        </motion.p>
        <WaitlistForm />
        <p className="text-teal-light/70 text-sm mt-6">
          No credit card. We&apos;ll notify you when we launch.
        </p>
      </div>
    </section>
  );
}
