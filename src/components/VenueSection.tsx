"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import SectionDivider from "./SectionDivider";
import { VENUE_NAME, VENUE_ADDRESS, GOOGLE_MAPS_URL } from "@/config/wedding";

/**
 * Romantic venue section: a beautifully illustrated location emblem over
 * an abstract rose-gold map path, with a configurable GET DIRECTIONS button.
 */
export default function VenueSection() {
  const reduce = useReducedMotion();

  return (
    <section className="safe-pad relative w-full overflow-hidden bg-gradient-to-b from-blush-200 via-blush-100 to-blush-200 px-6 py-24 text-center sm:py-32">
      <FloralDecoration opacity={0.6} />

      {/* Abstract romantic map path */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50" aria-hidden="true">
        <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#C48B92" strokeWidth="0.9" fill="none" strokeDasharray="5 7" opacity="0.7">
            <path d="M-20 100 C 60 70 120 130 200 105 S 340 80 420 110" />
            <path d="M80 -20 C 70 90 120 180 90 300 S 70 360 100 420" />
            <path d="M-20 300 C 90 270 160 330 250 300 S 360 270 420 300" />
          </g>
          <g fill="#D9A7A1" opacity="0.8">
            <circle cx="200" cy="105" r="3.5" />
            <circle cx="96" cy="130" r="2.5" />
            <circle cx="300" cy="86" r="2.5" />
            <circle cx="250" cy="302" r="2.5" />
          </g>
          <g stroke="#DEA19B" strokeWidth="0.7" fill="none" opacity="0.8">
            <path d="M120 200 q 14 -12 28 0 q 14 12 28 0" />
            <path d="M240 160 q 14 -12 28 0 q 14 12 28 0" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-rose-deep sm:text-lg"
        >
          <span aria-hidden="true">🌸</span> Where The Celebration Begins <span aria-hidden="true">🌸</span>
        </motion.h2>

        {/* Illustrated location emblem */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.7 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 flex h-36 w-36 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full border border-rosegold/40 animate-pulse-soft" />
          <span className="absolute inset-3 rounded-full border border-rosegold/25" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rosegold to-rose-deep shadow-[0_18px_44px_-14px_rgba(122,46,62,0.6)]">
            <MapPin className="h-8 w-8 text-ivory" strokeWidth={1.4} />
          </div>
          <svg className="absolute inset-0 text-rose-deep/60" viewBox="0 0 144 144" fill="none" aria-hidden="true">
            <path d="M72 6 A66 66 0 1 1 71.99 6" stroke="currentColor" strokeWidth="1" strokeDasharray="4 7" opacity="0.7" />
          </svg>
        </motion.div>

        <motion.h3
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 font-serif text-4xl font-semibold text-burgundy sm:text-5xl"
        >
          {VENUE_NAME}
        </motion.h3>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-ink/70 sm:text-base"
        >
          {VENUE_ADDRESS}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10"
        >
          <SectionDivider />
        </motion.div>

        <motion.a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-rose-deep to-burgundy px-10 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ivory shadow-[0_18px_40px_-14px_rgba(122,46,62,0.65)] transition-transform hover:-translate-y-0.5"
        >
          <Navigation className="h-4 w-4 transition-transform group-hover:rotate-12" strokeWidth={1.6} />
          Get Directions
        </motion.a>
      </div>
    </section>
  );
}