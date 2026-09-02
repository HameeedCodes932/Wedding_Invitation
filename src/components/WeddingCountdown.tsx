"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Sparkles from "./Sparkles";
import SectionDivider from "./SectionDivider";
import {
  COUNTDOWN_DATE,
  BARAAT_DATE,
  BARAAT_TIME,
  COUNTDOWN_HEADING,
  COUNTDOWN_SUBTITLE,
  COUNTDOWN_END,
  COUNTDOWN_END_UR,
} from "@/config/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ended: boolean;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  };
}

/**
 * Dreamy glass-style countdown counting down to the Baraat. Turns into a
 * warm "the celebration has begun" message once the day arrives.
 */
export default function WeddingCountdown() {
  const reduce = useReducedMotion();
  const target = COUNTDOWN_DATE.getTime();
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <section className="safe-pad relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush-300 to-cream px-6 py-24 text-center">
      <Sparkles opacity={0.7} />
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-rose-300/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-3xl font-semibold text-burgundy sm:text-5xl"
        >
          <span className="mr-2" aria-hidden="true">💗</span>
          {COUNTDOWN_HEADING}
          <span className="ml-2" aria-hidden="true">💗</span>
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 font-serif text-base italic text-ink/60 sm:text-lg"
        >
          {COUNTDOWN_SUBTITLE}
        </motion.p>

        {time.ended ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="font-serif text-4xl font-semibold text-rose-deep sm:text-6xl">{COUNTDOWN_END}</p>
            <p dir="rtl" lang="ur" className="mt-6 font-serif text-lg text-ink/70 sm:text-xl">
              {COUNTDOWN_END_UR}
            </p>
          </motion.div>
        ) : (
          <div className="mt-14 grid w-full grid-cols-4 gap-2.5 sm:gap-6">
            {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.14 }}
                className="flex flex-col items-center"
              >
                <div className="glass flex h-20 w-full flex-col items-center justify-center rounded-2xl shadow-[0_18px_40px_-20px_rgba(122,46,62,0.4)] sm:h-28">
                  <span className="rosegold-text-gradient font-serif text-3xl font-bold leading-none sm:text-5xl">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-[8px] font-semibold tracking-[0.25em] text-rose-deep/80 sm:text-[10px]">
                    {unit.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14"
        >
          <SectionDivider />
        </motion.div>

        <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
          {BARAAT_DATE} · {BARAAT_TIME}
        </p>
      </div>
    </section>
  );
}