"use client";

interface FloralDecorationProps {
  /** Base color of the floral line work */
  color?: string;
  opacity?: number;
  /** Which corners to render (default: all four) */
  corners?: ("top-left" | "top-right" | "bottom-right" | "bottom-left")[];
  className?: string;
}

function BloomSVG({ color = "#D9A7A1" }: { color?: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 160 160" fill="none" aria-hidden="true">
      {/* Branch */}
      <path d="M6 154 C 34 126 40 92 68 58 C 84 40 100 34 120 32" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M72 74 C 56 66 44 62 34 62" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 56 C 74 44 84 36 96 34" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M52 104 C 40 112 28 114 22 120" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Small leaves */}
      <path d="M74 72 C 68 70 62 70 56 72" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Bloom */}
      <g>
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="122"
            cy="25"
            rx="6.5"
            ry="10"
            fill="#F5B9B6"
            stroke={color}
            strokeWidth="0.8"
            transform={`rotate(${angle} 122 32)`}
          />
        ))}
        <circle cx="122" cy="32" r="4.5" fill={color} />
      </g>
      {/* Bud */}
      <circle cx="34" cy="62" r="3.5" fill="#F5B9B6" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

/**
 * Soft floral corner decorations used to frame romantic sections.
 * Positions are deterministic for stable server/client rendering.
 */
export default function FloralDecoration({
  color = "#D9A7A1",
  opacity = 0.75,
  corners = ["top-left", "top-right", "bottom-right", "bottom-left"],
  className = "",
}: FloralDecorationProps) {
  const style = { color, opacity };
  const transforms: Record<(typeof corners)[number], string> = {
    "top-left": "",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(-90deg)",
  };

  const placements: Record<(typeof corners)[number], string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {corners.map((corner) => (
        <div key={corner} className={`absolute w-28 sm:w-36 ${placements[corner]}`} style={{ ...style, transform: transforms[corner] }}>
          <BloomSVG color={color} />
        </div>
      ))}
    </div>
  );
}