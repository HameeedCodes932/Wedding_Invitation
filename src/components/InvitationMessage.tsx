"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import SectionDivider from "./SectionDivider";
import {
  FAMILY_NAME,
  FAMILY_NAME_UR,
  GROOM_NAME,
  INVITATION_HEADING,
  INVITATION_SALAM,
  INVITATION_INTRO,
  INVITATION_UR,
  INVITATION_UR_GUEST,
} from "@/config/wedding";

interface InvitationMessageProps {
  guestName?: string;
}

/**
 * Emotional romantic invitation on a soft cream background with floral
 * corners. When a guest name is provided (via URL) it becomes a personal
 * letter to that guest.
 */
export default function InvitationMessage({ guestName }: InvitationMessageProps) {
  const reduce = useReducedMotion();

  return (
    <section className="safe-pad relative w-full overflow-hidden bg-cream px-6 py-24 text-center sm:py-32">
      <FloralDecoration opacity={0.8} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <SectionDivider color="#BD8B85" />
        </motion.div>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.95 }}
          className="mt-10 font-script text-4xl text-rose-deep sm:text-5xl"
        >
          <span aria-hidden="true">💌</span> {INVITATION_HEADING} <span aria-hidden="true">💌</span>
        </motion.h2>

        {/* Personal or generic greeting */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-10 flex flex-col items-center"
        >
          {guestName ? (
            <>
              <p className="font-serif text-4xl font-semibold text-burgundy sm:text-5xl">
                Dear <span className="rosegold-text-gradient">{guestName}</span>
              </p>
              <p dir="rtl" lang="ar" className="mt-5 font-serif text-2xl text-rose-deep">
                {INVITATION_SALAM}
              </p>
              <div className="mt-6 space-y-1.5 font-serif text-lg leading-relaxed text-ink/80 sm:text-xl">
                {INVITATION_UR_GUEST.map((line, i) => (
                  <p key={i} dir="rtl" lang="ur">{line}</p>
                ))}
              </div>
            </>
          ) : (
            <>
              <p dir="rtl" lang="ar" className="font-serif text-4xl font-semibold text-burgundy sm:text-5xl">
                {INVITATION_SALAM}
              </p>
              <p className="mt-4 font-serif text-lg italic text-ink/70 sm:text-xl">{INVITATION_INTRO}</p>
            </>
          )}
        </motion.div>

        {/* Core Urdu message */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 space-y-1.5 font-serif text-lg leading-loose text-ink/85 sm:text-xl"
        >
          {INVITATION_UR.map((line, i) => (
            <p key={i} dir="rtl" lang="ur">{line}</p>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.95, delay: 0.5 }}
          className="mt-14 flex flex-col items-center"
        >
          <p dir="rtl" lang="ur" className="font-serif text-3xl font-semibold text-burgundy sm:text-4xl">
            {FAMILY_NAME_UR}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-rosegold-deep sm:text-sm">
            {FAMILY_NAME}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.26em] text-ink/50 sm:text-xs">
            Wedding of {GROOM_NAME}
          </p>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 text-xl"
          aria-hidden="true"
        >
          🌸 💕 💍 ✨
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10"
        >
          <SectionDivider color="#BD8B85" />
        </motion.div>
      </div>
    </section>
  );
}