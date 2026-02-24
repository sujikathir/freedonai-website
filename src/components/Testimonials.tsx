"use client";

import { motion } from "framer-motion";
import { FloatingDecorations } from "./FloatingDecorations";

const quotes = [
  {
    text: "Finally something that lets me actually talk. Game changer for my confidence.",
    label: "Beta learner",
  },
  {
    text: "I can practice at 11pm without bothering anyone. The AI doesn't judge.",
    label: "Night owl learner",
  },
  {
    text: "Feels like a real conversation. I'm actually using the language now.",
    label: "Coming soon",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <FloatingDecorations variant="section" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-charcoal text-center mb-4"
        >
          Learners like you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-gray-body text-center text-lg mb-16"
        >
          Join thousands learning to speak
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-charcoal/5"
            >
              <p className="text-charcoal text-lg font-medium mb-4">&ldquo;{q.text}&rdquo;</p>
              <footer className="text-gray-body text-sm">{q.label}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
