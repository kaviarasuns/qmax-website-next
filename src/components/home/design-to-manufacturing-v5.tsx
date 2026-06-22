"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ComponentType,
  type MouseEvent as ReactMouseEvent,
} from "react";
import CheckbulbIcon from "./icons/CheckbulbIcon";
import CircuitIcon from "./icons/CircuitIcon";
import PCBIcon from "./icons/PCBIcon";
import CodeIcon from "./icons/CodeIcon";
import DesignIcon from "./icons/DesignIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import QualityIcon from "./icons/QualityIcon";
import { cn } from "@/lib/utils";

/* CONFIG */
const CFG = {
  autoAdvance: true,
  intervalMs: 5000,
  entranceMs: 600,
  ease: "700ms cubic-bezier(0.2,0,0,1)",

  red: "#FF0000",
  redGradEnd: "rgb(207,207,207)",
  white: "#ffffff",

  /* carousel */
  cardRatioDesktop: 0.52,
  cardRatioTablet: 0.65,
  cardRatioPhone: 0.82,
  gapRatioDesktop: 0.022,
  gapRatioTablet: 0.024,
  gapRatioPhone: 0.04,
  inactiveOpacity: 0.42,
  farOpacity: 0.14,
  inactiveScale: 0.965,

  /* rake light */
  rakeOpacity: 0.12,
  rakeRadius: 180,

  /*  TRAIL  */
  trailVBW: 1259 /* SVG viewBox width  */,
  trailVBH: 22 /* SVG viewBox height — FIXED rendered px height */,
  trailLineY: 16 /* y where flat line starts in viewBox */,
  trailArrowBase: 1213.85 /* x where arrow base starts */,
  trailArrowTip: 1216.77 /* x of arrow spike top */,

  trailFeatherPct: 0.6 /* fraction of one dot-gap for the feather gradient */,

  /* background texture */
  bgDotOpacity: 0.032,
  bgDotSpacing: 28,
  bgDotSize: 1,
} as const;

/* Arrow fraction — the % of total SVG width occupied by the arrowhead */
const ARROW_FRAC =
  (CFG.trailVBW - CFG.trailArrowBase) / CFG.trailVBW; /* 0.035862 */
const ARROW_PCT = `${(ARROW_FRAC * 100).toFixed(4)}%`; /* "3.5862%" */

/* Full trail path — used for both grey base and red fill (clipped) */
const TRAIL_PATH = `M${CFG.trailArrowTip} 0 L${CFG.trailVBW} ${CFG.trailVBH} H0 V${CFG.trailLineY} H${CFG.trailArrowBase} L${CFG.trailArrowTip} 0 Z`;

/* BREAKPOINTS */
type BP = "desktop" | "tablet" | "phone";
const getBP = (w: number): BP =>
  w >= 1280 ? "desktop" : w >= 810 ? "tablet" : "phone";

const KF = `
@keyframes ctm-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes ctm-in{from{opacity:0}to{opacity:1}}
@media(prefers-reduced-motion:reduce){.ctm-c,.ctm-s{animation:none!important;opacity:1!important}}
`;

function useCtmStyles() {
  useEffect(() => {
    if (!document.getElementById("ctm-kf")) {
      const el = document.createElement("style");
      el.id = "ctm-kf";
      el.textContent = KF;
      document.head.appendChild(el);
    }
    if (document.getElementById("ctm-oxanium")) return;
    const link = document.createElement("link");
    link.id = "ctm-oxanium";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

/*  DATA */
type Stage = {
  id: string;
  pill: string;
  heading: string;
  body: string;
  Icon: ComponentType<{ className?: string }>;
  media?: string;
};

const STAGES: Stage[] = [
  {
    id: "cv",
    pill: "CONCEPT VALIDATION",
    heading: "CONCEPT VALIDATION",
    body: "From idea to defendable spec: feasibility studies, system architecture, product specification.",
    Icon: CheckbulbIcon,
    media:
      "https://framerusercontent.com/assets/zBNuelZ9lG5wvy9U9Kowavh6XE.mp4",
  },
  {
    id: "id",
    pill: "Industrial Design",
    heading: "Industrial Design",
    body: "Enclosure design, UI/UX and CMF — the experience the user actually holds.",
    Icon: DesignIcon,
    media:
      "https://framerusercontent.com/assets/9VGVcUM5Fh744FvRT7ToAK6kWrk.mp4",
  },
  {
    id: "hd",
    pill: "Hardware Design",
    heading: "Hardware Design",
    body: "High-level and low-level design, component engineering, board bring-up & testing.",
    Icon: CircuitIcon,
    media:
      "https://framerusercontent.com/assets/zQiDSY49IC5ohPtYlQt207jEpA0.mp4",
  },
  {
    id: "pcb",
    pill: "PCB Design",
    heading: "PCB Design",
    body: "Multi-layer layouts, signal & power integrity, design-for-manufacturability.",
    Icon: PCBIcon,
    media:
      "https://framerusercontent.com/assets/T37zx5wYoF864LLeah9hwj2lUNk.mp4",
  },
  {
    id: "sw",
    pill: "Software Development",
    heading: "Software Development",
    body: "Firmware, drivers / BSP and cross-platform application development.",
    Icon: CodeIcon,
    media:
      "https://framerusercontent.com/assets/RiWC6WgWkL4TValzF65b7GAiUQ.mp4",
  },
  {
    id: "npi",
    pill: "NPI & Compliance",
    heading: "NPI & Compliance",
    body: "Compliance certification (FCC / UL / CE), vendor audits and test-jig development.",
    Icon: ClipboardIcon,
    media:
      "https://framerusercontent.com/assets/d5TbJNs9wSu60hFl9QDQv7eXgr0.mp4",
  },
  {
    id: "mfg",
    pill: "Manufacturing",
    heading: "Manufacturing",
    body: "Manufacturing coordination and production testing, built at scale, shipped with confidence.",
    Icon: QualityIcon,
    media: "https://framerusercontent.com/assets/cbkLdwMNDkZbOITohrNNS8Ess.mp4",
  },
];

const N = STAGES.length;
const VBW = CFG.trailVBW;
const VBH = CFG.trailVBH;

const DOT_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${CFG.bgDotSpacing}' height='${CFG.bgDotSpacing}'%3E%3Ccircle cx='${CFG.bgDotSize}' cy='${CFG.bgDotSize}' r='${CFG.bgDotSize}' fill='rgba(0,0,0,${CFG.bgDotOpacity})'/%3E%3C/svg%3E")`;

/* HOOKS */
function useRakeLight(enabled: boolean) {
  const [lt, setLt] = useState({ x: 0, y: 0, on: false });
  const ref = useRef<HTMLDivElement>(null);
  const mv = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (!enabled || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setLt({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
    },
    [enabled],
  );
  const ml = useCallback(() => setLt((s) => ({ ...s, on: false })), []);
  return { ref, lt, mv, ml };
}

/*  COMPONENT */
export default function ConceptToManufacturing() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [secW, setSecW] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useCtmStyles();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSecW(el.offsetWidth));
    ro.observe(el);
    setSecW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!CFG.autoAdvance || paused) return;
    const t = setTimeout(() => setActive((p) => (p + 1) % N), CFG.intervalMs);
    return () => clearTimeout(t);
  }, [paused, active]);

  const goTo = useCallback((i: number) => setActive(i), []);
  const bp = getBP(secW);

  /* carousel */
  const cR =
    bp === "phone"
      ? CFG.cardRatioPhone
      : bp === "tablet"
        ? CFG.cardRatioTablet
        : CFG.cardRatioDesktop;
  const gR =
    bp === "phone"
      ? CFG.gapRatioPhone
      : bp === "tablet"
        ? CFG.gapRatioTablet
        : CFG.gapRatioDesktop;
  const cardW = secW * cR;
  const gap = secW * gR;
  const tx = (secW - cardW) / 2 - active * (cardW + gap);

  /* trail */
  const solidX = ((active + 0.5) / N) * CFG.trailArrowBase;
  const featherW = (CFG.trailArrowBase / N) * CFG.trailFeatherPct;

  const pillPhaseRight = ARROW_PCT;

  const D = CFG.entranceMs;
  const aC = { animation: `ctm-in ${D * 0.6}ms ${D * 0.2}ms ease both` };
  const aS = { animation: `ctm-up ${D * 0.5}ms ${D * 0.4}ms ease both` };

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Design to Manufacturing stages"
      className="relative flex flex-col w-full h-[clamp(480px,56.25vw,720px)] min-h-[480px] overflow-hidden select-none px-[clamp(20px,5.7vw,74px)] font-[family-name:var(--font-oxanium,'Oxanium',sans-serif)] text-[#191919]"
      style={{
        background: `${CFG.white} ${DOT_BG}`,
        backgroundSize: `${CFG.bgDotSpacing}px ${CFG.bgDotSpacing}px`,
      }}
    >
      <div
        ref={sectionRef}
        className="flex flex-col w-full max-w-[1280px] h-full min-h-0 flex-1 mx-auto"
      >
      {/* TITLE — matches Our Services heading pattern */}
      <div className="text-center flex-shrink-0 pt-[clamp(12px,2vh,24px)] mb-6 md:mb-7">
        <h2>
          Design to <span className="text-red-500">Manufacturing</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div
        className="ctm-c relative flex-[1_1_0] min-h-0 overflow-x-hidden overflow-y-visible"
        style={aC}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(237,237,237,0.70)_47.73%,rgba(255,255,255,0)_100%)]"
        />
        <div
          className="absolute top-0 bottom-0 left-0 flex items-center will-change-transform z-[1]"
          style={{
            gap,
            transform: secW ? `translateX(${tx}px)` : undefined,
            transition: secW ? `transform ${CFG.ease}` : "none",
          }}
        >
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const dist = Math.abs(i - active);
            const opacity = isActive
              ? 1
              : dist === 1
                ? CFG.inactiveOpacity
                : CFG.farOpacity;
            const scale = isActive ? 1 : CFG.inactiveScale;
            return (
              <CardSlide
                key={s.id}
                stage={s}
                isActive={isActive}
                opacity={opacity}
                scale={scale}
                cardW={cardW}
                bp={bp}
                onClick={() => !isActive && goTo(i)}
              />
            );
          })}
        </div>
      </div>

      {/* STEPPER */}
      <div className="ctm-s shrink-0" style={aS}>
        {bp !== "phone" ? (
          <div className="w-full mx-auto">
            {/* ── PILLS ────────────────────────────────────────────────
                paddingRight = ARROW_PCT so pill columns stop at line end.
                Same 1fr as dots below = perfect centre alignment.       */}
            <div
              className="grid grid-cols-7 gap-x-[clamp(1px,0.2vw,3px)] items-end h-[clamp(48px,5.2vw,66px)]"
              style={{ paddingRight: pillPhaseRight }}
            >
              {STAGES.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={`pill-${s.id}`}
                    onClick={() => goTo(i)}
                    onMouseEnter={() => goTo(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "self-end flex items-center font-semibold font-inherit leading-[1.25] uppercase text-left border-none cursor-pointer min-w-0 overflow-hidden box-border",
                      "py-[clamp(5px,0.55vw,8px)] px-[clamp(6px,0.8vw,10px)] rounded-[clamp(1px,0.2vw,2px)]",
                      "transition-[background,color,height,box-shadow] duration-[280ms] ease-[ease]",
                      isActive
                        ? "h-[clamp(48px,5.2vw,66px)] bg-[linear-gradient(111deg,rgb(0,0,0)_0%,rgb(0,0,0)_50%,rgb(0,0,0)_100%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] text-white text-[clamp(14px,1.328vw,17px)]"
                        : "h-[clamp(40px,4.4vw,58px)] bg-[linear-gradient(111deg,rgba(217,217,217,0.22)_0%,rgba(217,217,217,0.55)_48.8%,rgba(217,217,217,0.22)_100%)] text-[#191919] text-[clamp(11px,1.094vw,14px)]",
                    )}
                  >
                    {s.pill}
                  </button>
                );
              })}
            </div>

            <div className="relative mt-[3px]">
              <svg
                aria-hidden
                viewBox={`0 0 ${VBW} ${VBH}`}
                preserveAspectRatio="none"
                className="block w-full"
                style={{ height: VBH }}
              >
                <defs>
                  {/* Clip everything to the exact trail shape */}
                  <clipPath id="ctm-clip">
                    <path d={TRAIL_PATH} />
                  </clipPath>
                  {/* Feather gradient: red → grey (applied to feather rect) */}
                  <linearGradient
                    id="ctm-feather-g"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor={CFG.red} />
                    <stop offset="100%" stopColor={CFG.redGradEnd} />
                  </linearGradient>
                </defs>

                {/* 1. Grey base — full shape */}
                <path d={TRAIL_PATH} fill={CFG.redGradEnd} />

                {/* 2. Solid red fill — width in viewBox coords, CSS-transitions */}
                <rect
                  x={0}
                  y={0}
                  width={solidX}
                  height={VBH}
                  fill={CFG.red}
                  clipPath="url(#ctm-clip)"
                  style={{ transition: `width ${CFG.ease}` }}
                />

                {/* 3. Feather — x in viewBox coords, CSS transition on x property */}
                <rect
                  x={solidX}
                  y={0}
                  width={featherW}
                  height={VBH}
                  fill="url(#ctm-feather-g)"
                  clipPath="url(#ctm-clip)"
                  style={{ transition: `x ${CFG.ease}` }}
                />
              </svg>

              {/* DOTS — HTML grid, right=ARROW_PCT stops them at line end */}
              <div
                className="absolute top-0 left-0 grid grid-cols-7 gap-x-[clamp(1px,0.2vw,3px)]"
                style={{ right: ARROW_PCT, height: VBH }}
              >
                {STAGES.map((s, i) => {
                  const done = i <= active,
                    current = i === active;
                  return (
                    <button
                      key={`dot-${s.id}`}
                      onClick={() => goTo(i)}
                      onMouseEnter={() => goTo(i)}
                      aria-label={`Go to ${s.pill}`}
                      className="flex items-start justify-center bg-transparent border-none cursor-pointer p-0 pt-[13.5px] box-border"
                      style={{ height: VBH }}
                    >
                      <span
                        className={cn(
                          "block shrink-0 rounded-full transition-[background,border-color,box-shadow] duration-[450ms] ease-[ease]",
                          "w-[clamp(10px,1vw,24px)] h-[clamp(10px,1vw,24px)] border-solid border-[clamp(1px,0.15vw,4px)]",
                          done
                            ? "bg-[#FF0000] border-[#910000]"
                            : "bg-[#D0D0D0] border-[#B8B8B8]",
                          current && "shadow-[0_0_0_3px_rgba(255,0,0,0.18)]",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ── PHONE ─────────────────────────────────────────────── */
          <div className="relative">
            {/* floating pill */}
            <div className="relative h-[clamp(40px,4.4vw,58px)] mb-[2px]">
              <button
                className="absolute bottom-0 py-2 px-3 bg-[linear-gradient(111deg,rgb(0,0,0)_0%,rgb(0,0,0)_50%,rgb(0,0,0)_100%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] text-white text-[clamp(14px,1.328vw,17px)] font-semibold font-inherit leading-[1.25] uppercase rounded-[clamp(1px,0.2vw,2px)] border-none cursor-default whitespace-nowrap min-w-[80px] max-w-[160px] text-center overflow-hidden text-ellipsis"
                style={{
                  left: `clamp(0px,calc(${(active + 0.5) / N}*(100% - ${ARROW_PCT}) - 60px),calc(100% - 165px))`,
                  transition: `left ${CFG.ease}`,
                }}
              >
                {STAGES[active].pill}
              </button>
            </div>
            {/* trail + dots */}
            <div className="relative mt-[3px]">
              <svg
                aria-hidden
                viewBox={`0 0 ${VBW} ${VBH}`}
                preserveAspectRatio="none"
                className="block w-full"
                style={{ height: VBH }}
              >
                <defs>
                  <clipPath id="ctm-clip-ph">
                    <path d={TRAIL_PATH} />
                  </clipPath>
                  <linearGradient
                    id="ctm-feather-ph"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor={CFG.red} />
                    <stop offset="100%" stopColor={CFG.redGradEnd} />
                  </linearGradient>
                </defs>
                <path d={TRAIL_PATH} fill={CFG.redGradEnd} />
                <rect
                  x={0}
                  y={0}
                  width={solidX}
                  height={VBH}
                  fill={CFG.red}
                  clipPath="url(#ctm-clip-ph)"
                  style={{ transition: `width ${CFG.ease}` }}
                />
                <rect
                  x={solidX}
                  y={0}
                  width={featherW}
                  height={VBH}
                  fill="url(#ctm-feather-ph)"
                  clipPath="url(#ctm-clip-ph)"
                  style={{ transition: `x ${CFG.ease}` }}
                />
              </svg>
              <div
                className="absolute top-0 left-0 grid grid-cols-7"
                style={{ right: ARROW_PCT, height: VBH }}
              >
                {STAGES.map((s, i) => {
                  const done = i <= active,
                    cur = i === active;
                  return (
                    <button
                      key={s.id}
                      onClick={() => goTo(i)}
                      onMouseEnter={() => goTo(i)}
                      aria-label={`Go to ${s.pill}`}
                      className="flex items-start justify-center bg-transparent border-none cursor-pointer p-0 pt-[13.5px] box-border"
                      style={{ height: VBH }}
                    >
                      <span
                        className={cn(
                          "block shrink-0 rounded-full transition-[background,border-color,box-shadow] duration-[450ms] ease-[ease]",
                          "w-[clamp(10px,1vw,24px)] h-[clamp(10px,1vw,24px)] border-solid border-[clamp(1px,0.15vw,4px)]",
                          done
                            ? "bg-[#FF0000] border-[#910000]"
                            : "bg-[#D0D0D0] border-[#B8B8B8]",
                          cur && "shadow-[0_0_0_3px_rgba(255,0,0,0.18)]",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="h-[clamp(8px,1.2vh,16px)]" />
      </div>
      </div>
    </section>
  );
}

/*  CARD SLIDE*/
type CardSlideProps = {
  stage: Stage;
  isActive: boolean;
  opacity: number;
  scale: number;
  cardW: number;
  bp: BP;
  onClick: () => void;
};

function CardSlide({
  stage: s,
  isActive,
  opacity,
  scale,
  cardW,
  bp,
  onClick,
}: CardSlideProps) {
  const { ref, lt, mv, ml } = useRakeLight(isActive);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isActive]);

  const isPhone = bp === "phone";

  return (
    <div
      aria-hidden={!isActive}
      onClick={onClick}
      className={cn(
        "shrink-0 transition-[opacity,transform] duration-[550ms] ease-[ease]",
        isActive ? "cursor-default" : "cursor-pointer",
      )}
      style={{
        width: cardW || "58vw",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        className={cn(
          "flex h-full",
          isPhone
            ? "flex-col items-stretch gap-[clamp(12px,2vh,20px)] pb-2"
            : "flex-row items-center gap-[clamp(16px,3.5%,48px)]",
        )}
      >
        {/* VIDEO */}
        <div className={cn("shrink-0", isPhone ? "w-full" : "w-[52%]")}>
          <div
            ref={ref}
            onMouseMove={mv}
            onMouseLeave={ml}
            className={cn(
              "relative aspect-[4/3] overflow-hidden transition-[box-shadow] duration-[400ms] ease-[ease]",
              "rounded-[10.8px] border-[2.7px] border-solid border-white/20 bg-[#DCDCDC]",
              isActive
                ? "shadow-[3.6px_3.6px_18px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                : "shadow-[3.6px_3.6px_18px_0_rgba(0,0,0,0.18)]",
            )}
          >
            {s.media && (
              <video
                ref={videoRef}
                src={s.media}
                muted
                loop
                playsInline
                preload={isActive ? "auto" : "metadata"}
                className="absolute inset-0 w-full h-full object-cover rounded-[9.8px]"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[9.8px] z-[1] bg-[radial-gradient(ellipse_at_50%_50%,transparent_45%,rgba(0,0,0,0.18)_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[9.8px] z-[2] transition-opacity duration-300 ease-[ease]"
              style={{
                opacity: lt.on ? 1 : 0,
                background: lt.on
                  ? `radial-gradient(circle ${CFG.rakeRadius}px at ${lt.x}px ${lt.y}px,rgba(255,255,255,${CFG.rakeOpacity}) 0%,rgba(255,255,255,0) 70%)`
                  : "none",
              }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 min-w-0">
          <div className="flex items-end gap-[14px]">
            <div className="shrink-0 w-[clamp(48px,3.75vw,64px)] h-[clamp(48px,3.75vw,64px)]">
              <s.Icon className="w-full h-full text-[#FF0000]" />
            </div>
            <div className="flex-1 h-[3px] bg-[linear-gradient(90deg,rgb(214,214,214)_0%,rgba(171,171,171,0)_100%)]" />
          </div>
          <h3 className="mt-[clamp(8px,1vw,16px)] text-[clamp(18px,1.875vw,24px)] font-semibold leading-[1.4] text-[#191919] text-left uppercase">
            {s.heading}
          </h3>
          <p className="mt-[clamp(4px,0.7vw,10px)] text-[clamp(16px,1.797vw,23px)] leading-[1.3] text-[#191919] text-left">
            {s.body}
          </p>
        </div>
      </div>
    </div>
  );
}
