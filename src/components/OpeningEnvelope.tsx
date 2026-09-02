"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import FloatingPetals from "./FloatingPetals";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import { GROOM_INITIALS, GROOM_NAME } from "@/config/wedding";

interface OpeningEnvelopeProps {
  onComplete: () => void;
}

/**
 * Cinematic opening scene: floating petals, hearts and sparkles around a
 * luxury envelope with a wax "MN" seal. Tapping the envelope opens the flap,
 * lifts the invitation card, and hands over to the main experience.
 */
export default function OpeningEnvelope({ onComplete }: OpeningEnvelopeProps) {
  const [opened, setOpened] = useState(false);
  const reduce = useReducedMotion();
  const flapEase = [0.22, 1, 0.36, 1] as const;

  const open = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(onComplete, reduce ? 1400 : 4200);
  };

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-50 via-blush-100 to-rose-300 px-6">
      {/* Soft dreamy glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blush-300/50 blur-3xl" />

      <FloatingPetals />
      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-rose-deep sm:text-sm"
        >
          <span aria-hidden="true">💌</span> You Have A Special Invitation
        </motion.p>

        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Open the wedding invitation"
          onClick={open}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              open();
            }
          }}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="mt-12 cursor-pointer select-none rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-rose-deep/40"
        >
          <div style={{ perspective: 1100 }}>
            <div className="relative h-[210px] w-[310px] sm:h-[230px] sm:w-[350px]">
              {/* Rising invitation card */}
              <motion.div
                className="absolute inset-x-3 top-3 z-[2] flex h-[150px] flex-col items-center justify-center rounded-lg border border-rosegold/50 bg-ivory px-4 shadow-[0_18px_45px_-18px_rgba(122,46,62,0.45)] sm:h-[170px]"
                initial={{ opacity: 0, y: 12 }}
                animate={opened ? { opacity: 1, y: -90, scale: 1.03 } : {}}
                transition={{ duration: 1, delay: 0.7, ease: flapEase }}
              >
                <span className="font-serif text-[10px] uppercase tracking-[0.35em] text-dusty-rose">
                  A Special Invitation
                </span>
                <span className="rosegold-text-gradient mt-2 font-script text-3xl sm:text-4xl">
                  {GROOM_NAME}
                </span>
                <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-rosegold/60 text-[11px] font-bold tracking-widest text-rose-deep">
                  {GROOM_INITIALS}
                </span>
              </motion.div>

              {/* Back panel */}
              <div className="absolute inset-0 z-[1] rounded-xl bg-gradient-to-br from-rose-300 via-dusty-rose to-rose-deep" />

              {/* Envelope pocket (side + bottom flaps) */}
              <div className="absolute inset-0 z-[3] overflow-hidden rounded-xl">
                <div
                  className="absolute inset-x-0 bottom-0 h-[110px]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    background: "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
                  }}
                />
                <div
                  className="absolute inset-y-0 left-0 w-[150px]"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)", background: "rgba(255,255,255,0.5)" }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-[150px]"
                  style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)", background: "rgba(255,255,255,0.5)" }}
                />
              </div>

              {/* Top flap */}
              <motion.div
                className="absolute inset-x-0 top-0 z-[4] h-[115px]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transformOrigin: "top center",
                  backfaceVisibility: "hidden",
                  transformPerspective: 1100,
                  background: "linear-gradient(180deg, #EBB7A8, #D48F97)",
                }}
                animate={opened ? { rotateX: -175 } : { rotateX: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: flapEase }}
              />

              {/* Wax seal */}
              <motion.div
                className="absolute left-1/2 top-[104px] z-[5] flex h-14 w-14 items-center justify-center rounded-full border-2 border-rosegold/70 bg-gradient-to-br from-rosegold to-rose-deep shadow-[0_10px_24px_-8px_rgba(122,46,62,0.55)]"
                style={{ marginLeft: -28 }}
                initial={{ scale: 1, opacity: 1 }}
                animate={opened ? { scale: 0, opacity: 0, y: -10 } : {}}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <span className="text-[13px] font-bold tracking-widest text-ivory">{GROOM_INITIALS}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="animate-pulse-soft mt-10 flex items-center gap-2 text-sm font-medium tracking-wide text-rose-deep"
        >
          Tap to Open <span aria-hidden="true" className="animate-bounce-soft inline-block">✨</span>
        </motion.p>
      </div>
    </section>
  );
}