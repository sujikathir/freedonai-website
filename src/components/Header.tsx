"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-xl text-charcoal group-hover:text-coral transition-colors">
            FreeDon AI
          </span>
          <span className="text-teal-light text-lg" aria-hidden>
            🗣️
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#how-it-works"
            className="text-gray-body hover:text-charcoal font-medium text-sm transition-colors hidden sm:block"
          >
            How it works
          </Link>
          <Link
            href="#why"
            className="text-gray-body hover:text-charcoal font-medium text-sm transition-colors hidden sm:block"
          >
            Why FreeDon
          </Link>
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-coral text-white font-semibold text-sm shadow-soft hover:shadow-lift hover:bg-coral-dark transition-all"
          >
            Join the waitlist
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
