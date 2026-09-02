"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import FloatingPetals from "./FloatingPetals";
import FloatingHearts from "./FloatingHearts";
import SectionDivider from "./SectionDivider";
import { GROOM_NAME, PRAYERS_MESSAGE, RSVP_MESSAGE, WHATSAPP_NUMBER } from "@/config/wedding";

/**
 * Interactive RSVP on a blush background. "Yes, InshaAllah" shows a soft
 * confirmation (and opens WhatsApp when configured); "Sending Love &
 * Prayers" opens WhatsApp with a warm message.
 */
export default function RSVPSection() {
  const reduce = useReducedMotion();
  const [confirmed, setConfirmed] = useState(false);

  const waUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(RSVP_MESSAGE)}`
    : null;
  const prayersUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRAYERS_MESSAGE)}`
    : null;

  const confirmYes = () => {
    if (confirmed) return;
    setConfirmed(true);
    if (waUrl) {
      setTimeout(() => window.open(waUrl, "_blank", "noopener,noreferrer"), 1200);
    }
  };

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-200 via-blush-100 to-blush-300 px-6 py-24 text-center">
      <FloatingHearts />
      {confirmed && <FloatingPetals />}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-3xl font-semibold text-burgundy sm:text-5xl"
        >
          Will You Celebrate With Us? <span aria-hidden="true" className="text-rose-deep">💕</span>
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 font-serif text-base italic text-ink/70 sm:text-lg"
        >
          Your presence will make our happiness even more beautiful.
        </motion.p>

        <AnimatePresence mode="wait">
          {confirmed ? (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-rosegold/60 bg-ivory shadow-[0_14px_30px_-12px_rgba(122,46,62,0.5)]">
                <Heart className="h-7 w-7 text-rose-deep" strokeWidth={1.4} />
              </div>
              <p className="mt-7 font-script text-5xl text-rose-deep sm:text-6xl">JazakAllah Khair</p>
              <p className="mt-4 max-w-sm font-serif text-lg text-ink/75 sm:text-xl">
                We cannot wait to celebrate this beautiful day with you!
              </p>
              <p className="mt-6 text-xl" aria-hidden="true">🌸 💍 💕 ✨</p>
            </motion.div>
          ) : (
            <motion.div
              key="actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="mt-14 flex w-full max-w-sm flex-col gap-5"
            >
              <motion.button
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onClick={confirmYes}
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-rose-deep to-burgundy px-10 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_18px_40px_-14px_rgba(122,46,62,0.6)] transition-transform hover:-translate-y-0.5"
              >
                <span aria-hidden="true" className="mr-2">💗</span> Yes, InshaAllah!
              </motion.button>

              <motion.a
                href={prayersUrl ?? "#"}
                target={prayersUrl ? "_blank" : undefined}
                rel={prayersUrl ? "noopener noreferrer" : undefined}
                onClick={prayersUrl ? undefined : (e) => e.preventDefault()}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-rose-deep/50 bg-ivory/80 px-10 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-rose-deep backdrop-blur-sm transition-colors hover:bg-ivory"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                <span aria-hidden="true">🤍</span> Sending Love &amp; Prayers
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <SectionDivider />
        </motion.div>

        <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-ink/50 sm:text-xs">
          Wedding of {GROOM_NAME}
        </p>
      </div>
    </section>
  );
}