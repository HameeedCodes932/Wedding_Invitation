"use client";

import { motion } from "framer-motion";

interface Petal {
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  color: string;
  opacity: number;
}

const PETALS: Petal[] = [
  { left: "4%", size: 16, duration: 20, delay: 0, drift: 40, rotate: 160, color: "#E8AFA9", opacity: 0.75 },
  { left: "12%", size: 11, duration: 24, delay: 4, drift: -34, rotate: -140, color: "#DEA19B", opacity: 0.55 },
  { left: "22%", size: 14, duration: 22, delay: 8, drift: 26, rotate: 200, color: "#F3C6BD", opacity: 0.65 },
  { left: "34%", size: 10, duration: 26, delay: 2, drift: -46, rotate: 120, color: "#E8AFA9", opacity: 0.5 },
  { left: "48%", size: 17, duration: 21, delay: 6, drift: 36, rotate: -160, color: "#DEA19B", opacity: 0.7 },
  { left: "60%", size: 12, duration: 23, delay: 1, drift: -26, rotate: 90, color: "#F3C6BD", opacity: 0.55 },
  { left: "72%", size: 15, duration: 19, delay: 9, drift: 30, rotate: -100, color: "#E8AFA9", opacity: 0.65 },
  { left: "82%", size: 11, duration: 25, delay: 5, drift: -36, rotate: 180, color: "#DEA19B", opacity: 0.55 },
  { left: "92%", size: 13, duration: 22, delay: 3, drift: 22, rotate: -120, color: "#F3C6BD", opacity: 0.6 },
];

function PetalSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 16 20" fill="none" aria-hidden="true">
      <path d="M8 0 C13 6 15 12 8 20 C1 12 3 6 8 0 Z" fill={color} opacity={0.9} />
      <path d="M8 2 C11 7 12.5 11 8 17 C3.5 11 5 7 8 2 Z" fill="#FFFDFB" opacity={0.25} />
    </svg>
  );
}

/**
 * Slowly floating flower petals. Purely decorative; deterministic
 * positions keep rendering consistent between server and client.
 */
export default function FloatingPetals({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: p.left }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity, 0],
            y: [0, "105vh"],
            x: [0, p.drift, -p.drift, 0],
            rotate: [0, p.rotate, p.rotate + 60, p.rotate],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        >
          <PetalSvg size={p.size} color={p.color} />
        </motion.div>
      ))}
    </div>
  );
}