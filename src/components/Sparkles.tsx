"use client";

import { motion } from "framer-motion";

interface Sparkle {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const SPARKLES: Sparkle[] = [
  { left: "10%", top: "18%", size: 12, duration: 3.4, delay: 0, opacity: 0.5 },
  { left: "22%", top: "62%", size: 9, duration: 4.1, delay: 0.9, opacity: 0.4 },
  { left: "38%", top: "28%", size: 8, duration: 3.8, delay: 0.4, opacity: 0.45 },
  { left: "55%", top: "70%", size: 11, duration: 4.4, delay: 1.3, opacity: 0.4 },
  { left: "68%", top: "20%", size: 9, duration: 3.6, delay: 0.6, opacity: 0.5 },
  { left: "82%", top: "55%", size: 12, duration: 4.2, delay: 1.1, opacity: 0.45 },
  { left: "90%", top: "26%", size: 8, duration: 3.9, delay: 0.2, opacity: 0.4 },
  { left: "15%", top: "85%", size: 10, duration: 3.7, delay: 1.6, opacity: 0.35 },
  { left: "75%", top: "82%", size: 9, duration: 4.0, delay: 0.8, opacity: 0.35 },
];

/**
 * Gently twinkling sparkles scattered across a section.
 */
export default function Sparkles({
  className = "",
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.left, top: s.top, opacity: s.opacity * 0.6 * opacity }}
          animate={{ scale: [0.4, 1, 0.4], opacity: [s.opacity * 0.4, s.opacity, s.opacity * 0.4], rotate: [0, 45, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="#DD9AA2" aria-hidden="true">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}