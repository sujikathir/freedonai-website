"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : "";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          _subject: "FreeDon AI — New waitlist signup",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-teal-light/20 border border-teal-light/40 px-6 py-8 text-center"
      >
        <p className="text-white text-lg font-semibold mb-1">You&apos;re on the list.</p>
        <p className="text-teal-light/90 text-sm">We&apos;ll notify you when we launch.</p>
      </motion.div>
    );
  }

  if (!FORMSPREE_ENDPOINT) {
    return (
      <div className="rounded-2xl bg-white/10 border border-white/20 px-6 py-6 text-center max-w-md mx-auto">
        <p className="text-teal-light/90 text-sm mb-4">
          Add your Formspree form ID to enable the waitlist.
        </p>
        <p className="text-white/70 text-xs">
          Create a form at formspree.io, then set <code className="bg-white/10 px-1 rounded">NEXT_PUBLIC_FORMSPREE_ID</code> in Vercel (or .env.local).
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 px-4 py-3 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/30 transition-all"
        disabled={status === "submitting"}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/30 transition-all"
        disabled={status === "submitting"}
      />
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
        whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
        className="px-6 py-3 rounded-full bg-coral text-white font-semibold shadow-soft hover:shadow-lift disabled:opacity-70 disabled:cursor-not-allowed transition-all whitespace-nowrap"
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </motion.button>
      {status === "error" && (
        <p className="text-red-300 text-sm col-span-full text-center">
          Something went wrong. Try again or email us at hello@freedonai.tech
        </p>
      )}
    </motion.form>
  );
}
