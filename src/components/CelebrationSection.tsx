"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import SectionDivider from "./SectionDivider";
import {
  CELEBRATION_TITLE,
  CELEBRATION_LINES,
  CELEBRATION_AR,
  CELEBRATION_UR,
} from "@/config/wedding";

/**
 * Dreamy "love & celebration" emotional interlude before the closing.
 * Rings, floating petals, Arabic blessing and an Urdu dua.
 */
export default function CelebrationSection() {
  const reduce = useReducedMotion();

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-300 via-rose-300 to-blush-300 px-6 py-24 text-center">
      <FloatingPetals />
      <FloatingHearts />
      <Sparkles />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        {/* Interlocking rings */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -10 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 h-20 w-32"
          aria-hidden="true"
        >
          <span className="absolute left-5 top-1 h-14 w-14 rounded-full border-4 border-rosegold bg-white/10" />
          <span className="absolute left-14 top-1 h-14 w-14 rounded-full border-4 border-rosegold-deep bg-white/10" />
          <span className="absolute left-[62px] top-3 h-2 w-2 rotate-45 bg-ivory" />
        </motion.div>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="font-script text-5xl text-burgundy sm:text-7xl"
        >
          {CELEBRATION_TITLE}
        </motion.h2>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          {CELEBRATION_LINES.map((line, i) => (
            <div key={line} className="flex items-center gap-4">
              <span className={`hidden h-px w-10 sm:block ${i === 0 ? "bg-rose-deep/50" : "bg-dusty-rose/60"}`} />
              <p className="font-serif text-xl font-medium uppercase tracking-[0.24em] text-rose-deep sm:text-2xl">
                {line}
              </p>
              <span className={`hidden h-px w-10 sm:block ${i === 0 ? "bg-rose-deep/50" : "bg-dusty-rose/60"}`} />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10"
        >
          <SectionDivider />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.55 }}
          dir="rtl"
          lang="ar"
          className="mt-10 font-serif text-2xl leading-relaxed text-burgundy sm:text-3xl"
        >
          {CELEBRATION_AR}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 space-y-1.5 font-serif text-xl leading-relaxed text-ink/80 sm:text-2xl"
        >
          {CELEBRATION_UR.map((line, i) => (
            <p key={i} dir="rtl" lang="ur">{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}