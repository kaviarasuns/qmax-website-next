import { useCallback, useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface TabCapability {
  id: string;
  tabLabel: string;
  tabIcon?: ReactNode;
}

interface CapabilitiesTabsProps {
  capabilities: TabCapability[];
  activeIdx: number;
  onTabClick: (index: number) => void;
}

export function CapabilitiesTabs({
  capabilities,
  activeIdx,
  onTabClick,
}: CapabilitiesTabsProps) {
  const shouldCenterTabs = capabilities.length === 2;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tabBarRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const tabButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIdxRef = useRef(activeIdx);
  activeIdxRef.current = activeIdx;
  const dimsRef = useRef({
    width: 0,
    height: 0,
    baseY: 0,
  });
  const animRef = useRef({
    curL: 0,
    curR: 0,
    fromL: 0,
    fromR: 0,
    tgtL: 0,
    tgtR: 0,
    rafId: 0 as number | 0,
    startTs: 0 as number | 0,
    hasInit: false,
  });

  const STROKE_WIDTH = 2;
  const TOP_RADIUS = 6;
  const NOTCH_RADIUS = 10;
  const DURATION = 420;
  const GAP = 40;

  const easeOutCubic = useCallback((t: number) => {
    return 1 - (1 - t) ** 3;
  }, []);

  const buildPath = useCallback(
    (
      width: number,
      baseY: number,
      x1: number,
      x2: number,
      tabHeight: number,
    ) => {
      const topY = baseY - tabHeight;
      const leftBound = Math.max(x1, NOTCH_RADIUS);
      const rightBound = Math.min(x2, width - NOTCH_RADIUS);
      const startX = Math.min(-GAP, leftBound - NOTCH_RADIUS);
      const endX = Math.max(width + GAP, rightBound + NOTCH_RADIUS);

      return [
        `M ${startX} ${baseY}`,
        `L ${leftBound - NOTCH_RADIUS} ${baseY}`,
        `C ${leftBound} ${baseY} ${leftBound} ${baseY} ${leftBound} ${
          baseY - NOTCH_RADIUS
        }`,
        `L ${leftBound} ${topY + TOP_RADIUS}`,
        `Q ${leftBound} ${topY} ${leftBound + TOP_RADIUS} ${topY}`,
        `L ${rightBound - TOP_RADIUS} ${topY}`,
        `Q ${rightBound} ${topY} ${rightBound} ${topY + TOP_RADIUS}`,
        `L ${rightBound} ${baseY - NOTCH_RADIUS}`,
        `C ${rightBound} ${baseY} ${rightBound} ${baseY} ${
          rightBound + NOTCH_RADIUS
        } ${baseY}`,
        `L ${endX} ${baseY}`,
      ].join(" ");
    },
    [],
  );

  const redrawPath = useCallback(
    (x1: number, x2: number, shouldMeasure = false) => {
      const wrapperEl = wrapperRef.current;
      const tabBarEl = tabBarRef.current;
      const svgEl = svgRef.current;
      const pathEl = pathRef.current;
      if (!wrapperEl || !tabBarEl || !svgEl || !pathEl) return;

      let wrapperWidth = dimsRef.current.width;
      let tabHeight = dimsRef.current.height;

      if (shouldMeasure || !wrapperWidth) {
        wrapperWidth = wrapperEl.getBoundingClientRect().width;
        tabHeight = tabBarEl.getBoundingClientRect().height;
        if (!wrapperWidth || !tabHeight) return;

        dimsRef.current.width = wrapperWidth;
        dimsRef.current.height = tabHeight;
        dimsRef.current.baseY = tabHeight - STROKE_WIDTH / 2;

        svgEl.setAttribute("width", `${wrapperWidth}`);
        svgEl.setAttribute("height", `${tabHeight}`);
        svgEl.setAttribute("viewBox", `0 0 ${wrapperWidth} ${tabHeight}`);
      }

      const baseY = dimsRef.current.baseY;
      pathEl.setAttribute(
        "d",
        buildPath(wrapperWidth, baseY, x1, x2, tabHeight - STROKE_WIDTH),
      );
    },
    [buildPath],
  );

  const getTabBounds = useCallback((index: number) => {
    const wrapperEl = wrapperRef.current;
    const btn = tabButtonRefs.current[index];
    if (!wrapperEl || !btn) return null;

    const wrapperRect = wrapperEl.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    return {
      left: btnRect.left - wrapperRect.left,
      right: btnRect.right - wrapperRect.left,
    };
  }, []);

  const startAnimation = useCallback(
    (newLeft: number, newRight: number) => {
      const state = animRef.current;
      if (state.rafId) cancelAnimationFrame(state.rafId);

      state.fromL = state.curL;
      state.fromR = state.curR;
      state.tgtL = newLeft;
      state.tgtR = newRight;
      state.startTs = 0;

      const animate = (ts: number) => {
        const s = animRef.current;
        if (!s.startTs) s.startTs = ts;
        const elapsed = ts - s.startTs;
        const raw = elapsed >= DURATION ? 1 : elapsed / DURATION;
        const eased = easeOutCubic(raw);

        const x1 = s.fromL + (s.tgtL - s.fromL) * eased;
        const x2 = s.fromR + (s.tgtR - s.fromR) * eased;
        s.curL = x1;
        s.curR = x2;
        redrawPath(x1, x2);

        if (raw < 1) {
          s.rafId = requestAnimationFrame(animate);
        } else {
          s.rafId = 0;
        }
      };

      state.rafId = requestAnimationFrame(animate);
    },
    [easeOutCubic, redrawPath],
  );

  useEffect(() => {
    if (!capabilities.length) return;
    const bounds = getTabBounds(activeIdx);
    if (!bounds) return;

    const state = animRef.current;
    if (!state.hasInit) {
      state.curL = bounds.left;
      state.curR = bounds.right;
      state.fromL = bounds.left;
      state.fromR = bounds.right;
      state.tgtL = bounds.left;
      state.tgtR = bounds.right;
      state.hasInit = true;
      redrawPath(bounds.left, bounds.right, true);
      return;
    }
    startAnimation(bounds.left, bounds.right);
  }, [
    activeIdx,
    capabilities.length,
    getTabBounds,
    redrawPath,
    startAnimation,
  ]);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;

    let pending = 0;
    const resyncToActive = () => {
      pending = 0;
      const bounds = getTabBounds(activeIdxRef.current);
      if (!bounds) return;
      const state = animRef.current;
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = 0;
      }
      state.curL = bounds.left;
      state.curR = bounds.right;
      state.fromL = bounds.left;
      state.fromR = bounds.right;
      state.tgtL = bounds.left;
      state.tgtR = bounds.right;
      redrawPath(bounds.left, bounds.right, true);
    };

    const schedule = () => {
      if (pending) cancelAnimationFrame(pending);
      pending = requestAnimationFrame(resyncToActive);
    };

    const observer = new ResizeObserver(schedule);
    observer.observe(wrapperEl);

    return () => {
      if (pending) cancelAnimationFrame(pending);
      observer.disconnect();
    };
  }, [getTabBounds, redrawPath]);

  useEffect(() => {
    return () => {
      if (animRef.current.rafId) cancelAnimationFrame(animRef.current.rafId);
    };
  }, []);

  return (
    <div className="my-14 mb-16 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="relative w-full px-6 max-[900px]:px-3" ref={wrapperRef}>
        <div
          className={`relative z-[1] flex w-max min-w-full ${
            shouldCenterTabs ? "justify-center gap-8" : "justify-between"
          }`}
          role="tablist"
          ref={tabBarRef}
        >
          {capabilities.map((cap, i) => (
            <button
              key={cap.id}
              ref={(el) => {
                tabButtonRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`group relative flex cursor-pointer items-center gap-[10px] whitespace-nowrap bg-transparent px-4 pb-[17px] pt-[15px] text-[14px] font-medium leading-[1.35] text-black transition-colors duration-200 hover:text-[#F33117] ${
                activeIdx === i ? "font-bold" : ""
              }`}
              onClick={() => onTabClick(i)}
            >
              {cap.tabIcon ? (
                <span
                  className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 ${
                    activeIdx === i
                      ? "text-[#F33117]"
                      : "text-black group-hover:text-[#F33117]"
                  }`}
                >
                  {cap.tabIcon}
                </span>
              ) : null}
              <span>{cap.tabLabel}</span>
            </button>
          ))}
        </div>
        <svg
          ref={svgRef}
          className="pointer-events-none absolute bottom-0 left-0 block w-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            fill="none"
            stroke="#F33117"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
