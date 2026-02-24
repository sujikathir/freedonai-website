"use client";

import { motion } from "framer-motion";

interface SpeechBubbleIllustrationProps {
  className?: string;
  size?: number;
  variant?: "left" | "right" | "center";
  animate?: boolean;
}

export function SpeechBubbleIllustration({
  className = "",
  size = 100,
  variant = "center",
  animate = true,
}: SpeechBubbleIllustrationProps) {
  const tailX = variant === "left" ? 28 : variant === "right" ? size - 28 : size / 2;

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={
        animate
          ? {
              y: [0, -8, 0],
              rotate: [0, 1, -1, 0],
            }
          : undefined
      }
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} fill="none" className="w-full h-full drop-shadow-md">
        <path
          d={`M12 8 L${size - 12} 8 Q${size} 8 ${size} 20 L${size} ${size - 28} Q${size} ${size - 12} ${size - 20} ${size - 12} L${tailX + 12} ${size - 12} L${tailX} ${size} L${tailX - 12} ${size - 12} L12 ${size - 12} Q0 ${size - 12} 0 ${size - 28} L0 20 Q0 8 12 8 Z`}
          fill="white"
          stroke="#E07A5F"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
        <motion.circle
          cx={size * 0.35}
          cy={size * 0.4}
          r="5"
          fill="#81B29A"
          animate={animate ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx={size * 0.65}
          cy={size * 0.45}
          r="5"
          fill="#3D5A80"
          animate={animate ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx={size * 0.5}
          cy={size * 0.65}
          r="4"
          fill="#E07A5F"
          fillOpacity="0.7"
          animate={animate ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  );
}
