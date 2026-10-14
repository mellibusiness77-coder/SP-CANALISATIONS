import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 52, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem mirroring the uploaded logo with luxury touches */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Logo SP Canalisations"
      >
        {/* Subtle background glow */}
        <circle cx="100" cy="100" r="96" fill="#FFFFFF" />
        
        {/* Outer Ring - Azure blue matching the uploaded logo with delicate gold inner rim */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="#48B2E8"
          strokeWidth="7"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Top Water Droplet */}
        <path
          d="M100 62C100 62 89 77 89 84.5C89 90.575 93.925 95.5 100 95.5C106.075 95.5 111 90.575 111 84.5C111 77 100 62 100 62Z"
          fill="#48B2E8"
        />
        {/* Water droplet shine reflection */}
        <path
          d="M96 82C96 79 99 72 99 72"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Crossed Wrenches */}
        <g stroke="#1A1816" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left Wrench (Top-left to Bottom-right) */}
          <path d="M72 65 C68 62 60 66 60 72 C60 78 68 82 72 79 L126 137 C128 141 126 148 132 150 C138 152 144 148 145 142 L138 126" />
          <path d="M68 68 L77 77 L132 135 C136 139 133 145 138 147" />

          {/* Right Adjustable Wrench (Top-right to Bottom-left) */}
          <path d="M128 62 C134 60 142 63 145 70 C147 76 143 83 137 84 L80 142 C76 146 68 146 64 141 C60 136 62 128 67 124 L121 68" />
          {/* Adjustable jaw details */}
          <path d="M125 72 L131 77" strokeWidth="3.5" />
          <path d="M121 76 L127 81" strokeWidth="3.5" />
          <path d="M117 80 L123 85" strokeWidth="3.5" />
        </g>

        {/* Letters "S" and "P" on sides */}
        <text
          x="75"
          y="114"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="bold"
          fill="#1A1816"
        >
          S
        </text>
        <text
          x="125"
          y="114"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="bold"
          fill="#1A1816"
        >
          P
        </text>

        {/* Text "CANALISATIONS" at bottom */}
        <text
          x="100"
          y="162"
          textAnchor="middle"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontSize="14.5"
          fontWeight="700"
          letterSpacing="2.8"
          fill="#1A1816"
        >
          CANALISATIONS
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-brand font-bold text-lg md:text-xl tracking-wider text-[#1C1917]">
              SP
            </span>
            <span className="font-brand font-semibold text-lg md:text-xl tracking-widest text-[#B38728]">
              CANALISATIONS
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#78716C] font-medium">
            Assainissement & Plomberie
          </span>
        </div>
      )}
    </div>
  );
};
