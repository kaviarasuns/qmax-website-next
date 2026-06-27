"use client";

import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { CTM_ICONS } from "./design-to-manufacturing-icons";

gsap.registerPlugin(ScrollTrigger);

/* CONFIG */
const CFG = {
  autoAdvance: false,
  intervalMs: 5000,
  scrollQuietMs: 200,
  entranceMs: 600,
  ease: "700ms cubic-bezier(0.2,0,0,1)",

  red: "#FF0000",
  redGradEnd: "rgb(207,207,207)",
  white: "#ffffff",

  /* carousel */
  cardRatioDesktop: 0.88,
  cardRatioTablet: 0.9,
  cardRatioPhone: 1.0,
  gapRatioDesktop: 0.12,
  gapRatioTablet: 0.1,
  gapRatioPhone: 0.04,
  inactiveOpacity: 0,
  farOpacity: 0,
  inactiveScale: 0.965,

  cardBorderRadius: 10.8,
  cardPlaceholder: "#E3E8EE",
  cardShadowActive:
    "0 8px 32px 0 rgba(0,0,0,0.28), inset 0 1px 0 0 rgba(255,255,255,0.08)",
  cardShadowIdle: "0 4px 16px 0 rgba(0,0,0,0.18)",

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
.ctm-icon{width:100%;height:100%;display:block}
`;

function useCtmStyles() {
  useEffect(() => {
    if (!document.getElementById("ctm-kf")) {
      const el = document.createElement("style");
      el.id = "ctm-kf";
      el.textContent = KF;
      document.head.appendChild(el);
    }
  }, []);
}

/*  DATA */
type Phase = "CVD" | "EVT" | "DVT" | "PVT";

type Stage = {
  id: string;
  pill: string;
  heading: string;
  body: string;
  bullets: string[];
  media?: string;
  phase: Phase;
};

const PHASES: { key: Phase; span: number }[] = [
  { key: "CVD", span: 1 },
  { key: "EVT", span: 4 },
  { key: "DVT", span: 1 },
  { key: "PVT", span: 1 },
];

const STAGES: Stage[] = [
  {
    id: "cv",
    pill: "Concept Validation",
    heading: "Concept Validation",
    body: "From idea to defendable spec: feasibility studies, system architecture, product specification.",
    bullets: [
      "System architecture & requirements definition",
      "Feasibility studies and risk identification",
      "Product specification & IP landscape review",
    ],
    media:
      "https://framerusercontent.com/assets/zBNuelZ9lG5wvy9U9Kowavh6XE.mp4",
    phase: "CVD",
  },
  {
    id: "hd",
    pill: "Hardware Development",
    heading: "Hardware Development",
    body: "High-level and low-level design, component engineering, board bring-up & testing.",
    bullets: [
      "Schematic design & component selection",
      "Board bring-up, debugging & validation",
      "BOM optimisation & component lifecycle management",
    ],
    media:
      "https://framerusercontent.com/assets/zQiDSY49IC5ohPtYlQt207jEpA0.mp4",
    phase: "EVT",
  },
  {
    id: "pcb",
    pill: "PCB Design",
    heading: "PCB Design",
    body: "Multi-layer layouts, signal & power integrity, design-for-manufacturability.",
    bullets: [
      "Multi-layer stack-up & impedance control",
      "Signal integrity & power delivery analysis",
      "DFM review for high-volume manufacturing",
    ],
    media: "https://d1yetprhniwywz.cloudfront.net/v2/PCB_Design_Hero.mp4",
    phase: "EVT",
  },
  {
    id: "sw",
    pill: "Firmware & SW Development",
    heading: "Firmware & SW Development",
    body: "Firmware, drivers / BSP and cross-platform application software development.",
    bullets: [
      "RTOS / bare-metal firmware & device drivers",
      "BSP development & hardware abstraction layer",
      "Cross-platform application & cloud integration",
    ],
    media:
      "https://framerusercontent.com/assets/RiWC6WgWkL4TValzF65b7GAiUQ.mp4",
    phase: "EVT",
  },
  {
    id: "mid",
    pill: "Mechanical and ID",
    heading: "Mechanical and ID",
    body: "Enclosure design, CMF and UI/UX — translating engineering specs into a product users actually hold.",
    bullets: [
      "Industrial design & CMF definition",
      "Enclosure engineering & DFM analysis",
      "UI/UX prototyping & human factors review",
    ],
    media:
      "https://framerusercontent.com/assets/9VGVcUM5Fh744FvRT7ToAK6kWrk.mp4",
    phase: "EVT",
  },
  {
    id: "cmp",
    pill: "Validation & Compliance",
    heading: "Validation & Compliance",
    body: "Compliance certification (FCC / UL / CE), vendor audits and test-jig development.",
    bullets: [
      "Pre-compliance testing: FCC, CE, UL certifications",
      "Automated test jig design & framework development",
      "Supplier qualification & supply chain audit",
    ],
    media:
      "https://framerusercontent.com/assets/d5TbJNs9wSu60hFl9QDQv7eXgr0.mp4",
    phase: "DVT",
  },
  {
    id: "val",
    pill: "Production Validation",
    heading: "Production Validation",
    body: "Manufacturing coordination and production testing, built at scale, shipped with confidence.",
    bullets: [
      "Manufacturing transfer & process validation",
      "Production test coverage & yield optimisation",
      "Regulatory approval & mass production launch",
    ],
    media: "https://framerusercontent.com/assets/cbkLdwMNDkZbOITohrNNS8Ess.mp4",
    phase: "PVT",
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
export default function DesignToManufacturingV6() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [secW, setSecW] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  useCtmStyles();

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

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

  /* Write through to the ref synchronously so gesture stepping (which reads
     activeRef) and pill/dot clicks share a single source of truth. */
  const commit = useCallback((i: number) => {
    activeRef.current = i;
    setActive(i);
  }, []);
  const goTo = useCallback((i: number) => commit(i), [commit]);

  /* PIN + SCROLL-DRIVEN STEPPING
     The section is pinned at the centre of the viewport via ScrollTrigger.
     Window scroll is parked inside the pin while gestures advance the active
     stage; reaching either end performs one instant scroll hand-off so the
     page resumes native scrolling. Mirrors CoreCapabilitiesSectionV2. */
  useLayoutEffect(() => {
    const wrapper = pinRef.current;
    if (!wrapper) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const STEP_MS = prefersReducedMotion ? 0 : 700;
    const WHEEL_THRESHOLD = 10;
    const TOUCH_THRESHOLD = 40;
    // A quiet gap longer than this starts a fresh gesture, so the next push is
    // read as new intent rather than the tail of the previous flick.
    const GESTURE_RESET_MS = 200;

    let animating = false;
    // One queued step so a flick arriving mid-animation isn't dropped.
    let pendingDir = 0;
    // Rolling history of recent wheel-delta magnitudes, used to tell a
    // deliberate push apart from inertial momentum (trackpad / Magic Mouse).
    let wheelDeltas: number[] = [];
    let lastWheelTime = 0;
    let stepTimer: ReturnType<typeof setTimeout> | null = null;

    let trigger: ScrollTrigger | undefined;
    const ctx = gsap.context(() => {
      trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => "+=" + (N - 1) * window.innerHeight,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (!self.isActive) return;
          // Entering from the top → stage 0; entering from below (scrolling up
          // out of the next section) → last stage.
          const entryIndex = self.direction === -1 ? N - 1 : 0;
          animating = false;
          pendingDir = 0;
          commit(entryIndex);
        },
      });
    }, wrapper);

    if (!trigger) return () => ctx.revert();
    const st = trigger;

    // Hand the page back to native scrolling at the ends of the stepper. Scroll
    // is parked inside the pin, so we jump just past the boundary; the pinned
    // and just-unpinned frames render identically, so only the scrollbar moves.
    const jumpTo = (y: number) => {
      const htmlEl = document.documentElement;
      const previous = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      requestAnimationFrame(() => {
        htmlEl.style.scrollBehavior = previous;
      });
    };
    const releaseDown = () => jumpTo(Math.ceil(st.end) + 1);
    const releaseUp = () => jumpTo(Math.max(0, Math.floor(st.start) - 1));

    const goToIndex = (index: number) => {
      commit(index);
      animating = true;
      if (stepTimer) clearTimeout(stepTimer);
      stepTimer = setTimeout(() => {
        animating = false;
        if (pendingDir !== 0) {
          const queued = pendingDir;
          pendingDir = 0;
          step(queued);
        }
      }, STEP_MS);
    };

    const step = (dir: number) => {
      if (animating) return;
      const next = activeRef.current + dir;
      if (next < 0) {
        releaseUp();
        return;
      }
      if (next > N - 1) {
        releaseDown();
        return;
      }
      goToIndex(next);
    };

    // Normalise wheel deltas to pixels so the threshold is meaningful for
    // line-mode (Firefox classic mouse) and page-mode wheels too.
    const normalizeDeltaY = (event: WheelEvent) => {
      if (event.deltaMode === 1) return event.deltaY * 16;
      if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
      return event.deltaY;
    };

    const averageOfLast = (values: number[], count: number) => {
      const from = Math.max(0, values.length - count);
      let sum = 0;
      for (let i = from; i < values.length; i += 1) sum += values[i];
      const len = values.length - from;
      return len ? sum / len : 0;
    };

    const onWheel = (event: WheelEvent) => {
      if (!st.isActive) return;
      const delta = normalizeDeltaY(event);
      const dir = delta > 0 ? 1 : -1;
      event.preventDefault();

      // Track delta magnitudes so we can tell a deliberate flick apart from the
      // long inertial-momentum tail a Magic Mouse / trackpad emits after a swipe.
      const fresh = event.timeStamp - lastWheelTime > GESTURE_RESET_MS;
      if (fresh) wheelDeltas = [];
      lastWheelTime = event.timeStamp;
      wheelDeltas.push(Math.abs(delta));
      if (wheelDeltas.length > 100) wheelDeltas.shift();

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (animating) {
        // A brand-new flick (after a quiet gap) during the current animation is
        // queued; the current flick's own momentum is not "fresh", so it never
        // queues itself.
        if (fresh) pendingDir = dir;
        return;
      }

      // Inertial momentum decelerates, so its most-recent deltas fall below the
      // earlier ones — ignore that tail. A real push fires once here, so a
      // single flick advances exactly one stage.
      if (averageOfLast(wheelDeltas, 10) < averageOfLast(wheelDeltas, 70))
        return;

      step(dir);
    };

    let touchStartY = 0;

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!st.isActive) return;
      // Block the page scroll while engaged so the swipe drives the stepper only.
      if (event.cancelable) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!st.isActive) return;
      const diff =
        touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY);
      if (Math.abs(diff) < TOUCH_THRESHOLD) return;
      step(diff > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!st.isActive) return;
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      let dir = 0;
      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        dir = 1;
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        dir = -1;
      } else {
        return;
      }

      event.preventDefault();
      step(dir);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      if (stepTimer) clearTimeout(stepTimer);
      ctx.revert();
    };
  }, [commit]);

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
  // Match the reference: the card is sized within a 1100px column while the
  // stepper keeps the full section width below it. Capping here (rather than the
  // full 1280) keeps the card from growing too large, which is what gives it the
  // roomy side gaps and — paired with the taller content box — the vertical gaps
  // above/below it. The card still centres in the section via (secW - cardW)/2.
  const colW = Math.min(secW, 1100);
  const cardW = colW * cR;
  const gap = colW * gR;
  const tx = (secW - cardW) / 2 - active * (cardW + gap);

  /* trail */
  const activePhase = STAGES[active].phase;
  const solidX = ((active + 0.5) / N) * CFG.trailArrowBase;
  const featherW = (CFG.trailArrowBase / N) * CFG.trailFeatherPct;

  const pillPhaseRight = ARROW_PCT;

  const D = CFG.entranceMs;
  const aC = { animation: `ctm-in ${D * 0.6}ms ${D * 0.2}ms ease both` };
  const aS = { animation: `ctm-up ${D * 0.5}ms ${D * 0.4}ms ease both` };

  return (
    <section
      ref={pinRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Design to Manufacturing stages"
      className="relative flex items-start justify-center w-full h-screen overflow-hidden box-border pt-[var(--nav-h)] select-none px-[clamp(20px,5.7vw,74px)]"
      style={{
        background: `${CFG.white} ${DOT_BG}`,
        backgroundSize: `${CFG.bgDotSpacing}px ${CFG.bgDotSpacing}px`,
      }}
    >
      <div
        ref={sectionRef}
        className="flex flex-col w-full max-w-[1280px] h-[clamp(480px,calc(100vh-150px),860px)] max-h-full min-h-0 mx-auto pt-[clamp(20px,3vh,40px)]"
      >
        {/* TITLE — matches Our Services heading pattern */}
        <div className="text-center flex-shrink-0 pt-[clamp(8px,1.5vh,20px)] mb-6 md:mb-7">
          <h2>
            Design to <span className="text-red-500">Manufacturing</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          className="ctm-c relative flex-[1_1_0] min-h-0 overflow-x-hidden"
          style={{ ...aC, overflowY: "clip" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(90deg,rgba(243,244,246,0)_0%,rgba(225,230,236,0.70)_47.73%,rgba(243,244,246,0)_100%)]"
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
        <div className="ctm-s shrink-0 pb-[clamp(20px,3vh,40px)]" style={aS}>
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
                          ? "h-[clamp(48px,5.2vw,66px)] bg-[linear-gradient(111deg,rgb(0,0,0)_0%,rgb(0,0,0)_50%,rgb(0,0,0)_100%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] text-white text-base"
                          : "h-[clamp(40px,4.4vw,58px)] bg-[linear-gradient(111deg,rgba(217,217,217,0.22)_0%,rgba(217,217,217,0.55)_48.8%,rgba(217,217,217,0.22)_100%)] text-sm",
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

              {/* phase labels */}
              <div
                className="grid grid-cols-7 gap-x-[clamp(1px,0.2vw,3px)] bg-[#EBEBEB] mt-[clamp(10px,1.2vw,16px)]"
                style={{ paddingRight: pillPhaseRight }}
              >
                {PHASES.map((p) => {
                  const isAct = p.key === activePhase;
                  return (
                    <div
                      key={`ph-${p.key}`}
                      className={cn(
                        "flex items-center justify-center h-7 text-xs font-inherit transition-colors duration-[280ms] ease-[ease]",
                        isAct
                          ? "font-semibold"
                          : "font-normal text-muted-foreground",
                      )}
                      style={{ gridColumn: `span ${p.span}` }}
                    >
                      {p.key}
                    </div>
                  );
                })}
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

              {/* phase labels */}
              <div
                className="grid grid-cols-7 bg-[#EBEBEB] mt-[clamp(10px,1.2vw,16px)]"
                style={{ paddingRight: ARROW_PCT }}
              >
                {PHASES.map((p) => {
                  const isAct = p.key === activePhase;
                  return (
                    <div
                      key={p.key}
                      className={cn(
                        "flex items-center justify-center h-7 text-xs font-inherit transition-colors duration-[280ms] ease-[ease]",
                        isAct
                          ? "font-semibold"
                          : "font-normal text-muted-foreground",
                      )}
                      style={{ gridColumn: `span ${p.span}` }}
                    >
                      {p.key}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
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
  const radius = CFG.cardBorderRadius;

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
            : "flex-row items-start gap-[clamp(16px,3.5%,48px)]",
        )}
      >
        {/* VIDEO */}
        <div className={cn("shrink-0", isPhone ? "w-full" : "w-[52%]")}>
          <div
            ref={ref}
            onMouseMove={mv}
            onMouseLeave={ml}
            className="relative aspect-[4/3] overflow-hidden transition-[box-shadow] duration-[400ms] ease-[ease] border-[2.7px] border-solid border-white/20"
            style={{
              borderRadius: radius,
              background: CFG.cardPlaceholder,
              boxShadow: isActive ? CFG.cardShadowActive : CFG.cardShadowIdle,
            }}
          >
            {s.media && (
              <video
                ref={videoRef}
                src={s.media}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: radius - 1 }}
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_50%_50%,transparent_45%,rgba(0,0,0,0.18)_100%)]"
              style={{ borderRadius: radius - 1 }}
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none z-[2] transition-opacity duration-300 ease-[ease]"
              style={{
                borderRadius: radius - 1,
                opacity: lt.on ? 1 : 0,
                background: lt.on
                  ? `radial-gradient(circle ${CFG.rakeRadius}px at ${lt.x}px ${lt.y}px,rgba(255,255,255,${CFG.rakeOpacity}) 0%,rgba(255,255,255,0) 70%)`
                  : "none",
              }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 min-w-0 self-center">
          <div className="flex items-end gap-[14px]">
            <div
              aria-hidden
              className="shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#FF0000]"
              dangerouslySetInnerHTML={{ __html: CTM_ICONS[s.id] ?? "" }}
            />
            <div className="flex-1 h-0.5 bg-[linear-gradient(90deg,#CED6E0_0%,rgba(206,214,224,0)_100%)]" />
          </div>

          <h3 className="mt-3 md:mt-4 text-2xl lg:text-3xl font-base leading-tight tracking-tight text-left">
            {s.heading}
          </h3>
          <p className="mt-2 md:mt-3 text-base md:text-lg leading-relaxed text-left">
            {s.body}
          </p>

          {s.bullets.length > 0 && (
            <div className="mt-3 flex flex-col gap-1.5 md:gap-2">
              {s.bullets.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="block shrink-0 w-[5px] h-[5px] rounded-full bg-[#FF0000] mt-[7px]"
                  />
                  <span className="text-base md:text-lg leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
