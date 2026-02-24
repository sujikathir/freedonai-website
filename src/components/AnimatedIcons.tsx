"use client";

import { motion } from "framer-motion";

const bounce = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
};

export function IconGlobe() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <circle cx="28" cy="28" r="24" stroke="#3D5A80" strokeWidth="3" fill="#81B29A" fillOpacity="0.4" />
        <ellipse cx="28" cy="28" rx="24" ry="8" stroke="#3D5A80" strokeWidth="2" fill="none" />
        <path d="M4 28 h48 M28 4 v48" stroke="#3D5A80" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export function IconChat() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <path
          d="M12 8 L44 8 Q52 8 52 18 L52 32 Q52 42 44 42 L28 42 L18 52 L20 42 L12 42 Q4 42 4 32 L4 18 Q4 8 12 8 Z"
          fill="#E07A5F"
          fillOpacity="0.9"
          stroke="#C66B52"
          strokeWidth="2"
        />
        <circle cx="18" cy="24" r="3" fill="white" />
        <circle cx="28" cy="24" r="3" fill="white" />
        <circle cx="38" cy="24" r="3" fill="white" />
      </svg>
    </motion.div>
  );
}

export function IconChart() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <path d="M12 40 L12 28 L20 28 L20 24 L28 24 L28 16 L36 16 L36 12 L44 12 L44 40 Z" fill="#81B29A" stroke="#3D5A80" strokeWidth="2" />
        <motion.circle
          cx="28"
          cy="20"
          r="4"
          fill="#E07A5F"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}

export function IconClock() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <circle cx="28" cy="28" r="22" stroke="#3D5A80" strokeWidth="3" fill="#FFF8F0" />
        <motion.path
          d="M28 14 L28 28 L38 34"
          stroke="#E07A5F"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}

export function IconSpeech() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <path
          d="M28 8 C18 8 10 16 10 28 C10 38 16 46 28 46 L28 52 L34 46 C42 44 48 36 48 28 C48 16 38 8 28 8 Z"
          fill="#E07A5F"
          fillOpacity="0.9"
          stroke="#C66B52"
          strokeWidth="2"
        />
        <motion.ellipse
          cx="22"
          cy="26"
          rx="4"
          ry="5"
          fill="white"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.ellipse
          cx="34"
          cy="26"
          rx="4"
          ry="5"
          fill="white"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
      </svg>
    </motion.div>
  );
}

export function IconBrain() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <path
          d="M28 10 C20 10 14 18 14 28 C14 36 18 42 28 44 C38 42 42 36 42 28 C42 18 36 10 28 10 Z"
          fill="#81B29A"
          stroke="#3D5A80"
          strokeWidth="2"
        />
        <path d="M28 20 Q20 24 20 30 Q20 36 28 38 Q36 36 36 30 Q36 24 28 20 Z" fill="#3D5A80" fillOpacity="0.6" />
        <motion.circle cx="24" cy="28" r="2" fill="white" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="32" cy="28" r="2" fill="white" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
      </svg>
    </motion.div>
  );
}

export function IconCalm() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <circle cx="28" cy="28" r="22" fill="#81B29A" fillOpacity="0.5" stroke="#3D5A80" strokeWidth="2" />
        {/* Closed happy eyes */}
        <path d="M18 24 Q22 28 26 24" stroke="#2D3142" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M30 24 Q34 28 38 24" stroke="#2D3142" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M20 36 Q28 42 36 36" stroke="#2D3142" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  );
}

export function IconPhone() {
  return (
    <motion.div className="w-14 h-14 flex items-center justify-center" {...bounce}>
      <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
        <rect x="14" y="6" width="28" height="44" rx="6" fill="#E07A5F" fillOpacity="0.9" stroke="#C66B52" strokeWidth="2" />
        <circle cx="28" cy="44" r="3" fill="#2D3142" />
        <motion.rect
          x="20"
          y="14"
          width="16"
          height="22"
          rx="2"
          fill="#FFF8F0"
          animate={{ opacity: [1, 0.9, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}
