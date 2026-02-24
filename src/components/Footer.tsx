"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">FreeDon AI</span>
            <span aria-hidden>🗣️</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How it works
            </Link>
            <Link href="/#why" className="text-white/80 hover:text-white transition-colors">
              Why FreeDon
            </Link>
            <a href="#waitlist" className="text-white/80 hover:text-white transition-colors">
              Waitlist
            </a>
            <a href="mailto:hello@freedonai.tech" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center sm:text-left text-sm text-white/60">
          <p>© {new Date().getFullYear()} FreeDon AI. freedonai.tech</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy</Link>
            {" · "}
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
