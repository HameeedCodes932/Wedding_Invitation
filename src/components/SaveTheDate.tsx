"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import Sparkles from "./Sparkles";
import {
  SAVE_DATE_DAY,
  SAVE_DATE_MONTH,
  SAVE_DATE_YEAR,
  SAVE_DATE_WEEKDAY,
  SAVE_DATE_TIME,
  SAVE_DATE_UR,
} from "@/config/wedding";

/**
 * Romantic "Save the Date" section with an oversized "20" framed by a
 * floral arch, sparkles and a gentle Urdu message.
 */
export default function SaveTheDate() {
  const reduce = useReducedMotion();

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-100 via-blush-200 to-blush-300 px-6 py-24 text-center">
      <FloralDecoration opacity={0.7} />
      <Sparkles opacity={0.6} />

      {/* Dreamy center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/30 blur-3xl" />

      <motion.h2
        initial={reduce ? false : { opacity: 0, letterSpacing: "0.2em" }}
        whileInView={reduce ? undefined : { opacity: 1, letterSpacing: "0.5em" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1 }}
        className="font-serif text-sm font-semibold uppercase text-rose-deep sm:text-lg"
      >
        Save The Date
      </motion.h2>

      <div className="relative mt-8 flex flex-col items-center sm:mt-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <svg
            className="absolute inset-0 -m-8 h-[calc(100%+64px)] w-[calc(100%+64px)] text-rose-deep/30"
            viewBox="0 0 200 260"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M10 256 V80 Q10 10 100 10 Q190 10 190 80 V256" stroke="currentColor" strokeWidth="1" />
            <path d="M22 256 V82 Q22 24 100 24 Q178 24 178 82 V256" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
            <circle cx="100" cy="10" r="4" stroke="currentColor" strokeWidth="1" />
          </svg>

          <span className="rosegold-text-gradient font-serif text-[120px] font-bold leading-none sm:text-[185px] md:text-[230px]">
            {SAVE_DATE_DAY}
          </span>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-2 flex flex-col items-center"
        >
          <span className="font-serif text-lg font-semibold uppercase tracking-[0.5em] text-burgundy sm:text-3xl">
            {SAVE_DATE_MONTH}
          </span>
          <span className="mt-1.5 font-serif text-lg font-semibold uppercase tracking-[0.5em] text-burgundy sm:text-3xl">
            {SAVE_DATE_YEAR}
          </span>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.2em" }}
          whileInView={reduce ? undefined : { opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose-deep sm:text-xl"
        >
          <span aria-hidden="true">💕</span> {SAVE_DATE_WEEKDAY} <span aria-hidden="true">💕</span>
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-4 font-serif text-xs font-semibold uppercase tracking-[0.36em] text-ink/70 sm:text-base"
        >
          {SAVE_DATE_TIME}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 text-2xl"
          aria-hidden="true"
        >
          🌸 💍 ✨ 💗 ✨ 💍 🌸
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-8 font-serif text-base leading-relaxed text-rose-deep sm:text-lg"
        >
          {SAVE_DATE_UR.map((line, i) => (
            <p key={i} dir="rtl" lang="ur">{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}