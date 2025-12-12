// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04050b] border-t border-white/10">
      {/* Same ambient background vibes as hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent_50%)]" />
      </div>

      {/* Subtle circuit grid */}
      <div className="pointer-events-none absolute inset-0 absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Logo + Tagline */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="relative h-12 w-12">
                <Image
                  src="/sparkz.svg"
                  alt="Sparkz Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300">
                Sparkz '25
              </span>
            </motion.div>

            <p className="max-w-xs text-sm text-white/60">
              Two days of robots, AI, circuits, late-night builds, and pure
              engineering chaos.
            </p>

            <p className="text-xs text-cyan-300 animate-pulse">
              March 15–16 • Campus Arena
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "Tracks",
                "Schedule",
                "Sponsors",
                "Team",
                "Contact",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="text-white/50 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Join the Circuit
            </h3>
            <div className="flex gap-5">
              {["Instagram", "LinkedIn", "Discord", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/40 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {social === "Instagram" && (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                  {social === "LinkedIn" && (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <circle cx="7" cy="7" r="2" fill="white" />
                      <rect x="10" y="10" width="10" height="10" fill="white" />
                    </svg>
                  )}
                  {social === "Discord" && "Discord"}
                  {social === "Twitter" && "Twitter"}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="md:col-span-1">
            <p className="mb-4 text-sm text-white/60">
              Ready to build something that sparks?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-6 py-3 font-bold text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all hover:shadow-[0_0_60px_rgba(236,72,153,0.7)]"
            >
              Register Now →
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs text-white/40">
            © 2025 Sparkz. Built loud by the engineering tribe.
          </p>
          <p className="mt-4 text-xs text-white/30 md:mt-0">
            Made with <span className="text-red-500">♥</span> and way too much
            coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
