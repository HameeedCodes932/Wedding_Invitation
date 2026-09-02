"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import SectionDivider from "./SectionDivider";
import {
  GROOM_NAME_LINES,
  FATHER_NAME,
  REVEAL_PREFIX,
  REVEAL_TITLE,
  REVEAL_SUBTITLE,
  REVEAL_UR,
  REVEAL_AR,
} from "@/config/wedding";

const parent: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.28 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const name: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const softIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.7 } },
};

/**
 * Romantic wedding reveal shown right after the envelope opens.
 * A gentle staggered sequence ending on the groom's name.
 */
export default function HeroReveal() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="grain safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-50 via-ivory to-blush-100 px-6 py-24 text-center"
      variants={parent}
      initial={reduce ? "show" : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <FloralDecoration opacity={0.6} />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <motion.p variants={fadeUp} className="font-script text-3xl text-dusty-rose sm:text-4xl">
          {REVEAL_PREFIX}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-8 font-serif text-sm font-semibold uppercase tracking-[0.42em] text-rose-deep sm:text-lg">
          {REVEAL_TITLE}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.34em] text-ink/60 sm:text-sm">
          <span aria-hidden="true">💍</span> {REVEAL_SUBTITLE} <span aria-hidden="true">💍</span>
        </motion.p>

        <motion.h1
          variants={name}
          className="mt-8 font-serif text-6xl font-semibold leading-[1.04] sm:text-8xl md:text-[7rem]"
        >
          {GROOM_NAME_LINES.map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <span className="rosegold-text-gradient drop-shadow-[0_6px_20px_rgba(169,96,108,0.18)]">{line}</span>
              ) : (
                <span className="text-burgundy">{line}</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p variants={softIn} className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-ink/60 sm:text-sm">
          {FATHER_NAME}
        </motion.p>

        <motion.p variants={softIn} className="mt-8 text-xl" aria-hidden="true">
          🌸 💍 🌸
        </motion.p>

        <motion.div variants={softIn} className="mt-8 w-full max-w-xs">
          <SectionDivider />
        </motion.div>

        <motion.p
          variants={softIn}
          dir="rtl"
          lang="ur"
          className="mt-8 font-serif text-xl leading-relaxed text-rose-deep sm:text-2xl"
        >
          {REVEAL_UR}
        </motion.p>

        <motion.p
          variants={softIn}
          dir="rtl"
          lang="ar"
          className="mt-5 text-[13px] leading-relaxed text-dusty-rose sm:text-sm"
        >
          {REVEAL_AR}
        </motion.p>
      </div>
    </motion.section>
  );
}