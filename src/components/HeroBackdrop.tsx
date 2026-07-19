/**
 * Animated abstract SVG backdrop for the hero — monochrome + purple brand accent.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 luxury-gradient opacity-80" />

      <svg
        className="absolute inset-0 h-full w-full hero-svg-drift"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#863bff" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#6b5a8a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3a3939" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#863bff" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="hero-orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#863bff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#863bff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft orbs */}
        <circle
          className="hero-orb-a"
          cx="220"
          cy="180"
          r="180"
          fill="url(#hero-orb)"
        />
        <circle
          className="hero-orb-b"
          cx="1180"
          cy="620"
          r="220"
          fill="url(#hero-orb)"
        />
        <circle
          className="hero-orb-c"
          cx="980"
          cy="160"
          r="120"
          fill="url(#hero-orb)"
          opacity="0.6"
        />

        {/* Diagonal IF-inspired strokes */}
        <g opacity="0.45" stroke="url(#hero-grad)" strokeWidth="28" strokeLinecap="round">
          <path className="hero-stroke-a" d="M180 720 L520 120" />
          <path className="hero-stroke-b" d="M300 740 L640 140" />
          <path
            className="hero-stroke-c"
            d="M640 140 L860 140 M640 300 L780 300"
            strokeWidth="22"
          />
        </g>

        {/* Fine geometric mesh */}
        <g stroke="url(#hero-line)" strokeWidth="1">
          <path d="M0 200 H1440" opacity="0.4" />
          <path d="M0 450 H1440" opacity="0.25" />
          <path d="M0 700 H1440" opacity="0.35" />
          <path d="M360 0 V900" opacity="0.2" />
          <path d="M720 0 V900" opacity="0.15" />
          <path d="M1080 0 V900" opacity="0.2" />
          <path d="M-40 900 L480 -40" opacity="0.3" />
          <path d="M400 980 L980 40" opacity="0.2" />
          <path d="M900 980 L1480 40" opacity="0.25" />
        </g>

        {/* Floating nodes */}
        <g fill="#ffffff" opacity="0.35">
          <circle className="hero-node-a" cx="420" cy="280" r="3" />
          <circle className="hero-node-b" cx="760" cy="520" r="2.5" />
          <circle className="hero-node-c" cx="1100" cy="340" r="3" />
          <circle className="hero-node-a" cx="180" cy="560" r="2" />
          <circle className="hero-node-b" cx="1280" cy="200" r="2.5" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
    </div>
  )
}
