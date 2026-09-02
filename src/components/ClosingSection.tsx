"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import SectionDivider from "./SectionDivider";
import {
  GROOM_NAME,
  FATHER_NAME,
  CLOSING_TITLE,
  CLOSING_SEE,
  CLOSING_UR,
  CLOSING_DATE,
  FOOTER_NOTE,
} from "@/config/wedding";

/**
 * Finale on a blush-to-rose gradient: stepping petals, the family's name,
 * an Urdu goodbye and the date. The end of a beautiful little movie.
 */
export default function ClosingSection() {
  const reduce = useReducedMotion();

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-300 via-dusty-rose to-rose-deep px-6 py-24 text-center">
      <FloatingPetals className="opacity-80" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-ivory">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <SectionDivider color="#F3C6BD" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 font-script text-6xl text-blush-100 sm:text-8xl"
        >
          {CLOSING_TITLE} <span aria-hidden="true">💗</span>
        </motion.p>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="mt-10 font-serif text-5xl font-semibold leading-tight sm:text-7xl"
        >
          {GROOM_NAME}
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-xs font-medium uppercase tracking-[0.32em] text-blush-100/90 sm:text-sm"
        >
          {FATHER_NAME}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.1em" }}
          whileInView={reduce ? undefined : { opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, delay: 0.8 }}
          className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blush-200 sm:text-base"
        >
          And Family
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-2xl"
          aria-hidden="true"
        >
          🌸 💍 💕 ✨ 🌸
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 w-full max-w-xs"
        >
          <SectionDivider color="#F3C6BD" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 text-sm font-semibold uppercase tracking-[0.4em] sm:text-lg"
        >
          {CLOSING_SEE}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.35 }}
          dir="rtl"
          lang="ur"
          className="mt-5 font-serif text-2xl text-blush-100 sm:text-3xl"
        >
          {CLOSING_UR} <span aria-hidden="true">🌸</span>
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 font-serif text-3xl font-bold tracking-[0.14em] sm:text-5xl"
        >
          {CLOSING_DATE}
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.6 }}
        className="absolute bottom-8 left-0 right-0 z-10 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-blush-100/60 sm:text-xs"
      >
        {FOOTER_NOTE} <span aria-hidden="true">💗</span>
      </motion.p>
    </section>
  );
}