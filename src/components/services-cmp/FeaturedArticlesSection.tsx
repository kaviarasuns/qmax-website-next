export function FeaturedArticlesSection() {
  return (
    <section className="feat">
      <div className="feat-inner">
        <div className="feat-head">
          <div className="feat-title-block">
            {/* <div className="feat-eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Featured Articles
              </div> */}
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">
              Insights From Our{" "}
              <span className="text-brand-500">Engineers</span>
            </h2>
            {/* <div className="feat-divider" /> */}
          </div>
        </div>
        <div className="feat-grid">
          {/* Card 1: PCB Design */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg
                viewBox="0 0 400 280"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <linearGradient id="pcbBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0E2336" />
                    <stop offset="1" stopColor="#0B5FA5" />
                  </linearGradient>
                </defs>
                <rect width="400" height="280" fill="url(#pcbBg)" />
                <g
                  stroke="#39C2A4"
                  strokeWidth="1.6"
                  fill="none"
                  opacity="0.85"
                >
                  <path d="M60 90 L180 90 L210 120 L360 120 L390 90" />
                  <path d="M60 150 L120 150 L150 180 L300 180 L330 150 L450 150" />
                  <path d="M60 240 L150 240 L180 270 L270 270 L300 240 L420 240" />
                </g>
                <g fill="#FFC857">
                  <circle cx="180" cy="90" r="5" />
                  <circle cx="360" cy="120" r="5" />
                  <circle cx="150" cy="180" r="5" />
                  <circle cx="330" cy="150" r="5" />
                </g>
                <rect
                  x="230"
                  y="165"
                  width="140"
                  height="120"
                  rx="4"
                  fill="#1C2A3A"
                  stroke="#39C2A4"
                  strokeWidth="1.5"
                />
                <text
                  x="300"
                  y="232"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="14"
                  fill="#39C2A4"
                  letterSpacing="2"
                >
                  QMAX-SOC
                </text>
                <g fill="#E63329">
                  <rect x="100" y="135" width="22" height="10" rx="1" />
                  <rect x="480" y="255" width="22" height="10" rx="1" />
                </g>
              </svg>
            </div>
            <div className="feat-meta">Article · PCB Design</div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">
              High-Speed PCB Layout: Controlling Impedance &amp; Crosstalk in
              Mixed-Signal Boards
            </h3>
            <p className="feat-excerpt">
              Stack-up planning, return-path discipline, and EMC pre-compliance
              practices that get a board through certification on the first
              spin.
            </p>
            <a className="feat-readmore" href="#">
              Read article
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
          {/* Card 2: Embedded */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg
                viewBox="0 0 400 280"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: "100%", height: "100%" }}
              >
                <rect width="400" height="280" fill="#1C2A3A" />
                <g>
                  <rect
                    x="20"
                    y="20"
                    width="40"
                    height="6"
                    rx="1"
                    fill="#5A6B7B"
                  />
                  <rect
                    x="64"
                    y="20"
                    width="120"
                    height="6"
                    rx="1"
                    fill="#39C2A4"
                  />
                  <rect
                    x="20"
                    y="34"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#5A6B7B"
                  />
                  <rect
                    x="44"
                    y="34"
                    width="80"
                    height="6"
                    rx="1"
                    fill="#FFC857"
                  />
                  <rect
                    x="36"
                    y="48"
                    width="60"
                    height="6"
                    rx="1"
                    fill="#0B5FA5"
                  />
                  <rect
                    x="100"
                    y="48"
                    width="40"
                    height="6"
                    rx="1"
                    fill="#E63329"
                  />
                  <rect
                    x="36"
                    y="62"
                    width="100"
                    height="6"
                    rx="1"
                    fill="#39C2A4"
                  />
                  <rect
                    x="20"
                    y="82"
                    width="30"
                    height="6"
                    rx="1"
                    fill="#5A6B7B"
                  />
                  <rect
                    x="54"
                    y="82"
                    width="140"
                    height="6"
                    rx="1"
                    fill="#E5E7EB"
                    opacity="0.4"
                  />
                  <rect
                    x="36"
                    y="96"
                    width="80"
                    height="6"
                    rx="1"
                    fill="#0B5FA5"
                  />
                  <rect
                    x="120"
                    y="96"
                    width="50"
                    height="6"
                    rx="1"
                    fill="#39C2A4"
                  />
                </g>
                <text
                  x="295"
                  y="32"
                  fontFamily="monospace"
                  fontSize="10"
                  fill="#39C2A4"
                >
                  {"// RTOS task"}
                </text>
                <text
                  x="295"
                  y="50"
                  fontFamily="monospace"
                  fontSize="10"
                  fill="#E5E7EB"
                >
                  priority: 3
                </text>
                <text
                  x="295"
                  y="68"
                  fontFamily="monospace"
                  fontSize="10"
                  fill="#FFC857"
                >
                  RUNNING
                </text>
              </svg>
            </div>
            <div className="feat-meta">Article · Embedded Systems</div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">
              Hardening Firmware for Functional Safety: From RTOS Choice to
              Field Updates
            </h3>
            <p className="feat-excerpt">
              A practical look at memory protection, watchdog strategy, and OTA
              architectures that hold up under ISO 26262 and IEC 62304 audits.
            </p>
            <a className="feat-readmore" href="#">
              Read article
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
          {/* Card 3: Mechanical */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg
                viewBox="0 0 400 280"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <linearGradient id="mechBg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#F5F0E8" />
                    <stop offset="1" stopColor="#E5DDD0" />
                  </linearGradient>
                </defs>
                <rect width="400" height="280" fill="url(#mechBg2)" />
                <g stroke="#C8B79C" strokeWidth="0.5" opacity="0.5">
                  <line x1="0" y1="40" x2="400" y2="40" />
                  <line x1="0" y1="80" x2="400" y2="80" />
                  <line x1="0" y1="120" x2="400" y2="120" />
                  <line x1="0" y1="160" x2="400" y2="160" />
                  <line x1="40" y1="0" x2="40" y2="280" />
                  <line x1="80" y1="0" x2="80" y2="280" />
                  <line x1="120" y1="0" x2="120" y2="280" />
                  <line x1="160" y1="0" x2="160" y2="280" />
                  <line x1="200" y1="0" x2="200" y2="280" />
                  <line x1="240" y1="0" x2="240" y2="280" />
                </g>
                <g transform="translate(120 80)">
                  <polygon
                    points="0,40 80,0 200,0 200,100 120,140 0,140"
                    fill="#3A4A5A"
                  />
                  <polygon
                    points="0,40 80,0 200,0 120,40 0,40"
                    fill="#5A6B7B"
                    opacity="0.9"
                  />
                  <polygon
                    points="200,0 200,100 120,140 120,40"
                    fill="#0E1822"
                    opacity="0.85"
                  />
                  <g stroke="#39C2A4" strokeWidth="1" opacity="0.6">
                    <line x1="20" y1="60" x2="100" y2="60" />
                    <line x1="20" y1="74" x2="100" y2="74" />
                    <line x1="20" y1="88" x2="100" y2="88" />
                  </g>
                  <circle cx="60" cy="125" r="3" fill="#E63329" />
                  <circle cx="60" cy="125" r="6" fill="#E63329" opacity="0.3" />
                </g>
                <text
                  x="220"
                  y="258"
                  fontFamily="monospace"
                  fontSize="10"
                  fill="#1C2A3A"
                >
                  180 mm
                </text>
              </svg>
            </div>
            <div className="feat-meta">
              Article · Mechanical &amp; Industrial
            </div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">
              Designing Enclosures That Survive: DFM, Thermal Paths &amp;
              IP-Rated Sealing
            </h3>
            <p className="feat-excerpt">
              How early CAD-to-CAE collaboration on the mechanical envelope
              avoids the late-stage rework that derails most hardware programs.
            </p>
            <a className="feat-readmore" href="#">
              Read article
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
