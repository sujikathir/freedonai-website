"use client";

import { motion } from "framer-motion";

type Variant = "hero" | "section" | "dark";

export function FloatingDecorations({ variant = "section" }: { variant?: Variant }) {
  const isDark = variant === "dark";

  type OrbDef = {
    className: string;
    delay: number;
    duration: number;
    y: number[];
    style: React.CSSProperties;
  };

  const orbs: OrbDef[] =
    variant === "hero"
      ? [
          { className: "w-6 h-6 rounded-full bg-coral/40", delay: 0, duration: 4, y: [0, -20, 0], style: { top: "12%", left: "8%" } },
          { className: "w-4 h-4 rounded-full bg-teal-light/50", delay: 0.5, duration: 5, y: [0, 15, 0], style: { top: "25%", right: "12%" } },
          { className: "w-5 h-5 rounded-full bg-coral/30", delay: 1, duration: 4.5, y: [0, -12, 0], style: { bottom: "35%", left: "15%" } },
          { className: "w-3 h-3 rounded-full bg-teal/40", delay: 0.3, duration: 5.5, y: [0, 18, 0], style: { top: "60%", right: "25%" } },
          { className: "w-7 h-7 rounded-full bg-coral/25", delay: 1.2, duration: 4, y: [0, -14, 0], style: { bottom: "20%", right: "10%" } },
          { className: "w-4 h-4 rounded-full bg-teal-light/35", delay: 0.8, duration: 5, y: [0, 10, 0], style: { top: "40%", left: "5%" } },
          { className: "w-5 h-5 rounded-full bg-coral/35", delay: 0.2, duration: 4.2, y: [0, -16, 0], style: { top: "75%", left: "30%" } },
          { className: "w-3 h-3 rounded-full bg-teal/30", delay: 1.5, duration: 5.2, y: [0, 12, 0], style: { top: "18%", right: "30%" } },
        ]
      : variant === "dark"
        ? [
            { className: "w-4 h-4 rounded-full bg-coral/50", delay: 0, duration: 5, y: [0, -15, 0], style: { top: "15%", left: "20%" } },
            { className: "w-5 h-5 rounded-full bg-teal-light/40", delay: 0.7, duration: 4.5, y: [0, 12, 0], style: { top: "30%", right: "15%" } },
            { className: "w-3 h-3 rounded-full bg-white/30", delay: 0.3, duration: 5.5, y: [0, -10, 0], style: { bottom: "25%", left: "10%" } },
            { className: "w-4 h-4 rounded-full bg-coral/40", delay: 1, duration: 4.8, y: [0, 14, 0], style: { bottom: "40%", right: "25%" } },
          ]
        : [
            { className: "w-5 h-5 rounded-full bg-coral/30", delay: 0, duration: 4.2, y: [0, -12, 0], style: { top: "10%", left: "10%" } },
            { className: "w-4 h-4 rounded-full bg-teal-light/35", delay: 0.4, duration: 5, y: [0, 10, 0], style: { top: "20%", right: "8%" } },
            { className: "w-6 h-6 rounded-full bg-teal/20", delay: 0.6, duration: 4.5, y: [0, -14, 0], style: { bottom: "15%", left: "12%" } },
            { className: "w-4 h-4 rounded-full bg-coral/25", delay: 0.2, duration: 5.2, y: [0, 11, 0], style: { bottom: "25%", right: "15%" } },
            { className: "w-3 h-3 rounded-full bg-teal-light/40", delay: 0.8, duration: 4.8, y: [0, -8, 0], style: { top: "50%", left: "5%" } },
            { className: "w-4 h-4 rounded-full bg-coral/30", delay: 0.3, duration: 5.5, y: [0, 9, 0], style: { top: "55%", right: "10%" } },
          ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={orb.className}
          style={{ position: "absolute", ...orb.style }}
          animate={{ y: orb.y, rotate: [0, 8, -8, 0] }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      {/* Small stars / sparkles */}
      {variant === "hero" && (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-2 h-2 bg-amber-300/60 rounded-sm"
              style={{
                top: `${15 + i * 14}%`,
                left: `${20 + (i % 3) * 25}%`,
                transform: "rotate(45deg)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`star-r-${i}`}
              className="absolute w-2 h-2 bg-teal-light/70 rounded-sm"
              style={{
                top: `${25 + i * 20}%`,
                right: `${15 + (i % 2) * 20}%`,
                transform: "rotate(-20deg)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5 + i * 0.2, repeat: Infinity, delay: 0.5 + i * 0.15 }}
            />
          ))}
        </>
      )}
    </div>
  );
}
