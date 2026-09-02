"use client";

import { motion } from "framer-motion";

interface Heart {
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

const HEARTS: Heart[] = [
  { left: "8%", size: 14, duration: 18, delay: 1, drift: 18, opacity: 0.35 },
  { left: "26%", size: 10, duration: 22, delay: 6, drift: -14, opacity: 0.28 },
  { left: "43%", size: 16, duration: 20, delay: 3, drift: 22, opacity: 0.3 },
  { left: "60%", size: 11, duration: 24, delay: 8, drift: -18, opacity: 0.26 },
  { left: "76%", size: 13, duration: 19, delay: 5, drift: 16, opacity: 0.32 },
  { left: "91%", size: 10, duration: 21, delay: 2, drift: -12, opacity: 0.25 },
];

/**
 * Very subtle floating hearts. Designed to whisper romance, never shout.
 */
export default function FloatingHearts({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {HEARTS.map((h, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: h.left }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, h.opacity, h.opacity, 0],
            y: [0, "102vh"],
            x: [0, h.drift, -h.drift, 0],
          }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="#D98A97" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}