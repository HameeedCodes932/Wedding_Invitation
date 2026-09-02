"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import SectionDivider from "./SectionDivider";
import {
  BARAAT_DAY,
  BARAAT_DATE,
  BARAAT_TIME,
  BARAAT_TITLE_UR,
  NIKAH_DAY,
  NIKAH_DATE,
  NIKAH_TIME,
  NIKAH_TITLE_UR,
  WALIMA_DAY,
  WALIMA_DATE,
  WALIMA_TIME,
  WALIMA_TITLE_UR,
  VENUE_NAME,
  VENUE_ADDRESS,
} from "@/config/wedding";

interface EventItem {
  no: string;
  title: string;
  titleUr: string;
  day: string;
  date: string;
  time: string;
}

const EVENTS: EventItem[] = [
  { no: "01", title: "Baraat", titleUr: BARAAT_TITLE_UR, day: BARAAT_DAY, date: BARAAT_DATE, time: BARAAT_TIME },
  { no: "02", title: "Nikah", titleUr: NIKAH_TITLE_UR, day: NIKAH_DAY, date: NIKAH_DATE, time: NIKAH_TIME },
  { no: "03", title: "Walima", titleUr: WALIMA_TITLE_UR, day: WALIMA_DAY, date: WALIMA_DATE, time: WALIMA_TIME },
];

function FlowerNode() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className="text-rose-deep">
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse key={angle} cx="13" cy="6.5" rx="2.6" ry="4.4" fill="currentColor" transform={`rotate(${angle} 13 13)`} />
      ))}
      <circle cx="13" cy="13" r="2.2" fill="#FFFDFB" />
    </svg>
  );
}

/**
 * Romantic vertical wedding journey with alternating cards, a rose-gold
 * thread, and flower nodes connecting Baraat, Nikah and Walima.
 */
export default function EventTimeline() {
  const reduce = useReducedMotion();
  const isLeft = (i: number) => i % 2 === 0;

  return (
    <section className="safe-pad grain relative w-full overflow-hidden bg-gradient-to-b from-cream via-blush-100 to-blush-200 px-6 py-24 sm:py-32">
      <FloatingHearts />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="text-center font-serif text-sm font-semibold uppercase tracking-[0.42em] text-rose-deep sm:text-lg"
        >
          The Celebration Events
        </motion.h2>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 flex justify-center"
        >
          <SectionDivider />
        </motion.div>

        {/* Timeline thread */}
        <div className="absolute left-[22px] top-24 bottom-8 w-px bg-gradient-to-b from-rosegold/0 via-rosegold/70 to-rosegold/0 md:left-1/2 md:-translate-x-1/2" />

        <div className="relative mt-10 flex flex-col md:grid md:grid-cols-2 md:gap-x-14">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pb-14 pl-16 md:pb-20 md:pl-0 ${
                isLeft(i)
                  ? "md:pr-12 md:text-right"
                  : "md:col-start-2 md:pl-12 md:text-left"
              }`}
            >
              {/* Node on the thread */}
              <div
                className={`absolute top-1 flex h-11 w-11 items-center justify-center rounded-full border border-rosegold bg-ivory shadow-[0_8px_20px_-10px_rgba(169,96,108,0.5)] ${
                  isLeft(i)
                    ? "left-0 md:left-auto md:-right-[22px] md:translate-x-0"
                    : "left-0 md:right-auto md:-left-[22px]"
                }`}
              >
                <FlowerNode />
              </div>

              <div className="glass rounded-2xl border-rosegold/40 p-6 shadow-[0_18px_40px_-22px_rgba(122,46,62,0.45)] sm:p-7">
                <div className={`flex items-center gap-2 ${isLeft(i) ? "md:justify-end" : ""}`}>
                  <span className="text-[10px] font-bold tracking-[0.22em] text-rosegold-deep">EVENT {event.no}</span>
                  <span className="h-px w-6 bg-rosegold/50" aria-hidden="true" />
                  <span dir="rtl" lang="ur" className="text-xs font-semibold text-rose-deep">{event.titleUr}</span>
                </div>

                <h3 className="mt-2 font-serif text-3xl font-semibold text-burgundy sm:text-4xl">{event.title}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep sm:text-sm">{event.day}</p>
                <p className="mt-1 text-sm font-medium text-ink/80 sm:text-base">{event.date}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink/70 sm:text-base">
                  <span aria-hidden="true">🕒</span> {event.time}
                </p>

                <div className={`mt-5 flex items-start gap-2 border-t border-rosegold/30 pt-4 ${isLeft(i) ? "md:justify-end" : ""}`}>
                  <span aria-hidden="true" className="mt-0.5">📍</span>
                  <div>
                    <p className="text-sm font-semibold text-burgundy">{VENUE_NAME}</p>
                    <p className="mt-0.5 text-xs text-ink/60 sm:text-sm">{VENUE_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}