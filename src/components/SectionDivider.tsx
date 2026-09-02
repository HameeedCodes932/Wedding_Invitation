"use client";

import { Heart } from "lucide-react";

interface SectionDividerProps {
  /** Base color of the divider */
  color?: string;
  /** Heart or flower ornament at the center */
  variant?: "heart" | "flower";
  className?: string;
}

/**
 * Elegant thin rose-gold divider with a romantic center ornament.
 */
export default function SectionDivider({
  color = "#C48B92",
  variant = "heart",
  className = "",
}: SectionDividerProps) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-current sm:w-24" style={{ color }} />
      {variant === "heart" ? (
        <Heart className="h-4 w-4" style={{ color }} fill="currentColor" strokeWidth={0} />
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color }}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="12"
              cy="6"
              rx="2.4"
              ry="3.6"
              fill="currentColor"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="2" fill="#FFFDFB" />
        </svg>
      )}
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-current sm:w-24" style={{ color }} />
    </div>
  );
}