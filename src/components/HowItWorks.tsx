"use client";

import { motion } from "framer-motion";
import { IconGlobe, IconChat, IconChart, IconClock } from "./AnimatedIcons";
import { FloatingDecorations } from "./FloatingDecorations";

const steps = [
  {
    Icon: IconGlobe,
    title: "Pick your language & level",
    desc: "We adapt to you from day one.",
  },
  {
    Icon: IconChat,
    title: "Start a conversation",
    desc: "Talk with your AI tutor like a real dialogue.",
  },
  {
    Icon: IconChart,
    title: "Get feedback, keep going",
    desc: "Improve pronunciation and phrasing as you practice.",
  },
  {
    Icon: IconClock,
    title: "Practice anytime",
    desc: "No scheduling—fit it into your life.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <FloatingDecorations variant="section" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-charcoal text-center mb-4"
        >
          Speak from day one
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-gray-body text-center text-lg mb-16"
        >
          How it works
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-lift border border-charcoal/5 transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4" aria-hidden>
                <step.Icon />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-gray-body">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
