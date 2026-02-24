"use client";

import { motion } from "framer-motion";

interface CuteMascotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CuteMascot({ className = "", size = "lg" }: CuteMascotProps) {
  const sizes = { sm: 80, md: 120, lg: 160 };
  const w = sizes[size];

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: w, height: w }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Blob body - friendly round shape */}
        <path
          d="M80 20c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60z"
          fill="#F4A261"
        />
        <path
          d="M80 20c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60z"
          fill="#E07A5F"
          fillOpacity="0.85"
        />
        {/* Left eye */}
        <motion.ellipse
          cx="62"
          cy="70"
          rx="12"
          ry="14"
          fill="#2D3142"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="65"
          cy="68"
          rx="4"
          ry="5"
          fill="white"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Right eye */}
        <motion.ellipse
          cx="98"
          cy="70"
          rx="12"
          ry="14"
          fill="#2D3142"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.ellipse
          cx="95"
          cy="68"
          rx="4"
          ry="5"
          fill="white"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
        />
        {/* Smile */}
        <motion.path
          d="M55 95 Q80 118 105 95"
          stroke="#2D3142"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M55 95 Q80 118 105 95", "M55 97 Q80 120 105 97", "M55 95 Q80 118 105 95"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blush */}
        <ellipse cx="48" cy="88" rx="8" ry="5" fill="#E07A5F" fillOpacity="0.25" />
        <ellipse cx="112" cy="88" rx="8" ry="5" fill="#E07A5F" fillOpacity="0.25" />
      </svg>
    </motion.div>
  );
}
