"use client";

import { motion } from "framer-motion";
import { FloatingDecorations } from "./FloatingDecorations";
import { CuteMascot } from "./CuteMascot";
import { SpeechBubbleIllustration } from "./SpeechBubbleIllustration";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <FloatingDecorations variant="hero" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-coral font-semibold text-sm uppercase tracking-wider mb-4"
            >
              AI tutor for speaking
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6"
            >
              Learn by speaking,
              <br />
              <span className="text-coral">not just by tapping.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-body text-lg sm:text-xl max-w-lg mb-8"
            >
              Real conversations with an AI tutor. Practice when you want, at your level—so you can actually open your mouth and speak.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(224, 122, 95, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white font-semibold text-base shadow-soft"
              >
                Get early access
                <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-charcoal/15 text-charcoal font-semibold text-base hover:border-teal-light hover:bg-teal-light/10 transition-colors"
              >
                See how it works
              </motion.a>
            </motion.div>
          </div>

          {/* Hero visual: mascot + floating speech bubbles + jumping elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end min-h-[320px] sm:min-h-[380px]"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Central mascot */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
              >
                <CuteMascot size="lg" />
              </motion.div>

              {/* Floating speech bubble - top right */}
              <motion.div
                className="absolute top-0 right-0 sm:right-4 z-20"
                animate={{ y: [0, -14, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <SpeechBubbleIllustration size={100} variant="right" />
              </motion.div>

              {/* Floating speech bubble - bottom left */}
              <motion.div
                className="absolute bottom-4 left-0 sm:left-2 z-20"
                animate={{ y: [0, 10, 0], rotate: [0, -1.5, 1.5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <SpeechBubbleIllustration size={88} variant="left" />
              </motion.div>

              {/* Microphone icon - bouncy */}
              <motion.div
                className="absolute bottom-12 right-8 sm:right-16 w-16 h-16 rounded-2xl bg-white shadow-lift flex items-center justify-center border-2 border-teal-light/40 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                  <path
                    d="M24 8 L24 28 M18 28 C18 32 21 36 24 36 C27 36 30 32 30 28 M24 36 L24 40 M20 40 L28 40"
                    stroke="#3D5A80"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <ellipse cx="24" cy="22" rx="6" ry="10" fill="#81B29A" fillOpacity="0.6" stroke="#3D5A80" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Sparkle / star shapes - jumping */}
              {[
                { top: "18%", left: "20%", delay: 0 },
                { top: "25%", right: "18%", delay: 0.4 },
                { bottom: "30%", left: "25%", delay: 0.2 },
                { bottom: "22%", right: "8%", delay: 0.6 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4"
                  style={pos}
                  animate={{ scale: [1, 1.4, 1], rotate: [0, 180], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: pos.delay }}
                >
                  <svg viewBox="0 0 16 16" fill="#F4A261" className="w-full h-full">
                    <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
