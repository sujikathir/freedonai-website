"use client";

import { motion } from "framer-motion";
import { IconSpeech, IconBrain, IconCalm, IconPhone } from "./AnimatedIcons";
import { FloatingDecorations } from "./FloatingDecorations";

const benefits = [
  {
    Icon: IconSpeech,
    title: "Conversation-first",
    desc: "Real back-and-forth with your AI tutor, not just multiple choice.",
  },
  {
    Icon: IconBrain,
    title: "AI that adapts",
    desc: "Level and topics match your goals so you're never bored or lost.",
  },
  {
    Icon: IconCalm,
    title: "Speak more, stress less",
    desc: "A safe space to make mistakes and improve without judgment.",
  },
  {
    Icon: IconPhone,
    title: "Flexible practice",
    desc: "Short sessions that fit your routine—morning, lunch, or late night.",
  },
];

export function Benefits() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <FloatingDecorations variant="section" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-charcoal text-center mb-4"
        >
          Built for speaking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-gray-body text-center text-lg mb-16"
        >
          Why FreeDon
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-cream rounded-2xl p-6 sm:p-8 border border-charcoal/5 hover:border-teal-light/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="mb-4" aria-hidden>
                <item.Icon />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-gray-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
