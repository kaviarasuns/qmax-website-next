const TILE_CLASS =
  "flex aspect-[16/7] items-center justify-content-center rounded-md border border-gray-200 bg-white px-1 py-1 transition-all duration-300 [&>svg]:block [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full [&>svg]:object-contain hover:-translate-y-[3px] hover:border-[rgba(230,51,41,0.35)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]";

export function PartnershipsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-8 pb-[72px] pt-16 text-[#1C2A3A] max-[900px]:px-6 max-[900px]:py-12"
      id="partnerships-section"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-light tracking-wide">
            Partnerships
          </h2>
          <p className="mx-auto max-w-[820px] text-[#5A6778]">
            With a strong focus on new product development, Qmax maintains
            strategic partnerships with leading platform providers including
            Qualcomm, NXP, Nvidia, Analog Devices, onsemi, Infineon, Ambarella,
            Texas Instruments, Microchip, and Wolfspeed. Our teams gain early
            access to upcoming silicon, roadmap visibility, and training on the
            latest technologies — with reference modules and evaluation kits
            ready to kick-start your product development.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-2 max-[900px]:gap-3">
          {/* Qualcomm */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Qualcomm"
            >
              <text
                x="110"
                y="40"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="26"
                fontWeight="700"
                fill="#3253DC"
                letterSpacing="-0.5"
              >
                Qualcomm
              </text>
              <path
                d="M148 44 q4 5 9 0"
                stroke="#3253DC"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* NXP */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NXP"
            >
              <g transform="translate(56 12)">
                <rect x="0" y="0" width="36" height="40" fill="#E8B22B" />
                <rect x="36" y="0" width="36" height="40" fill="#79A341" />
                <rect x="72" y="0" width="36" height="40" fill="#E8B22B" />
                <text
                  x="18"
                  y="28"
                  textAnchor="middle"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="22"
                  fontWeight="900"
                  fill="#1F1F1F"
                >
                  N
                </text>
                <text
                  x="54"
                  y="28"
                  textAnchor="middle"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="22"
                  fontWeight="900"
                  fill="#FFFFFF"
                >
                  X
                </text>
                <text
                  x="90"
                  y="28"
                  textAnchor="middle"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="22"
                  fontWeight="900"
                  fill="#1F1F1F"
                >
                  P
                </text>
              </g>
            </svg>
          </div>
          {/* NVIDIA */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NVIDIA"
            >
              <g transform="translate(20 18)">
                <path
                  d="M14 0 C6 0 0 6 0 14 C0 22 6 28 14 28 C20 28 24 25 26 21 C22 23 18 23 15 21 C11 19 9 16 9 13 C9 9 13 6 17 7 C20 7.5 23 9 26 12 C24 5 19 0 14 0 Z"
                  fill="#76B900"
                />
              </g>
              <text
                x="135"
                y="40"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="26"
                fontWeight="800"
                fill="#1F1F1F"
                letterSpacing="0.5"
              >
                NVIDIA
              </text>
            </svg>
          </div>
          {/* Analog Devices */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Analog Devices"
            >
              <polygon points="22,18 22,46 50,32" fill="#1F1F1F" />
              <text
                x="58"
                y="30"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="14"
                fontWeight="800"
                fill="#1F1F1F"
                letterSpacing="1"
              >
                ANALOG
              </text>
              <text
                x="58"
                y="48"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="14"
                fontWeight="800"
                fill="#1F1F1F"
                letterSpacing="1"
              >
                DEVICES
              </text>
            </svg>
          </div>
          {/* onsemi */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="onsemi"
            >
              <text
                x="100"
                y="42"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="400"
                fill="#3F4A52"
                letterSpacing="-1"
              >
                onsemi
              </text>
              <line
                x1="156"
                y1="44"
                x2="166"
                y2="22"
                stroke="#E63329"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Infineon */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Infineon"
            >
              <text
                x="110"
                y="36"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="26"
                fontWeight="500"
                fill="#0B3D6F"
                letterSpacing="-0.3"
              >
                Infineon
              </text>
              <path
                d="M50 50 q60 -22 120 0"
                stroke="#E63329"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Ambarella */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Ambarella"
            >
              <g transform="translate(76 4)">
                <polygon points="0,24 10,10 20,24" fill="#7BB661" />
                <polygon points="14,24 26,2 38,24" fill="#3FA9DB" />
                <polygon points="32,24 42,12 52,24" fill="#7BB661" />
                <polygon points="46,24 54,16 62,24" fill="#3FA9DB" />
              </g>
              <text
                x="110"
                y="52"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="17"
                fontWeight="600"
                fill="#3253DC"
                letterSpacing="0.3"
              >
                Ambarella
              </text>
            </svg>
          </div>
          {/* Texas Instruments */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Texas Instruments"
            >
              <g transform="translate(20 16)">
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  rx="3"
                  fill="#CC0000"
                />
                <text
                  x="18"
                  y="26"
                  textAnchor="middle"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="22"
                  fontWeight="700"
                  fill="#FFFFFF"
                  fontStyle="italic"
                >
                  TI
                </text>
              </g>
              <text
                x="64"
                y="30"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="13"
                fontWeight="700"
                fill="#1F1F1F"
                letterSpacing="0.5"
              >
                TEXAS
              </text>
              <text
                x="64"
                y="46"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="13"
                fontWeight="700"
                fill="#1F1F1F"
                letterSpacing="0.5"
              >
                INSTRUMENTS
              </text>
            </svg>
          </div>
          {/* Microchip */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Microchip"
            >
              <g transform="translate(28 14)">
                <path
                  d="M18 0 L0 18 L6 18 L6 36 L30 36 L30 18 L36 18 Z"
                  fill="#E63329"
                />
                <path
                  d="M9 22 L13 28 L18 22 L23 28 L27 22 L27 33 L9 33 Z"
                  fill="#FFFFFF"
                />
              </g>
              <text
                x="138"
                y="40"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="16"
                fontWeight="800"
                fill="#1F1F1F"
                letterSpacing="1.5"
              >
                MICROCHIP
              </text>
            </svg>
          </div>
          {/* Wolfspeed */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg
              viewBox="0 0 220 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Wolfspeed"
            >
              <path
                d="M28 26 q12 -14 26 -6 q8 5 16 -2 q10 -8 22 -2 q12 6 24 -4"
                stroke="#5C2D91"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="148" cy="14" r="3" fill="#5C2D91" />
              <text
                x="110"
                y="50"
                textAnchor="middle"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="22"
                fontWeight="700"
                fontStyle="italic"
                fill="#5C2D91"
                letterSpacing="-0.5"
              >
                Wolfspeed
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
