"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CoreCapabilityBulletGroup {
  title: string;
  items: string[];
}

export interface CoreCapability {
  id: string;
  tabLabel: string;
  tabIcon?: ReactNode;
  headline: string;
  intro: string;
  bullets: CoreCapabilityBulletGroup[];
  videoSrc?: string;
  videoPoster?: string;
  imageSrc?: string;
  imageAlt?: string;
  learnMoreHref?: string;
}

interface CoreCapabilitiesSectionProps {
  capabilities: CoreCapability[];
  title?: string;
  titleHighlight?: string;
  learnMoreHref?: string;
}

export function CoreCapabilitiesSectionV2({
  capabilities,
  title = "Core",
  titleHighlight = "Capabilities",
  learnMoreHref = "#contact",
}: CoreCapabilitiesSectionProps) {
  const stackWrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Mirror of the on-top card, used only to keep off-screen cards out of the
  // tab order / accessibility tree (the scroll logic itself stays in refs).
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const wrapper = stackWrapperRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null,
    );

    if (!wrapper || cards.length === 0) return;

    const totalCards = cards.length;

    // A single card needs no stacking behaviour.
    if (totalCards === 1) {
      gsap.set(cards[0], { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const STEP_DURATION = prefersReducedMotion ? 0 : 0.8;
    const WHEEL_THRESHOLD = 10;
    const TOUCH_THRESHOLD = 40;
    // A quiet gap longer than this starts a fresh gesture, so the next push is
    // read as new intent rather than the tail of the previous flick.
    const GESTURE_RESET_MS = 200;

    // The card stack is driven by a PAUSED timeline (one whole-number unit of
    // time per card), advanced directly by the gesture handlers. The pin only
    // holds the section in place — scroll position is never animated, so nothing
    // fights ScrollTrigger and there is no scrub flicker. Window scroll stays
    // parked inside the pin while stepping; reaching either end performs a
    // single instant hand-off so the page resumes native scrolling.
    let timeline: gsap.core.Timeline | undefined;
    let trigger: ScrollTrigger | undefined;

    let currentIndex = 0;
    let animating = false;
    // One queued step so a flick that arrives during the current animation isn't
    // dropped (keeps consecutive Magic Mouse / trackpad flicks responsive).
    let pendingDir = 0;
    // Rolling history of recent wheel-delta magnitudes, used to tell a deliberate
    // push apart from inertial momentum (Magic Mouse / trackpad), which decays.
    let wheelDeltas: number[] = [];
    let lastWheelTime = 0;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        const isFirstCard = index === 0;
        gsap.set(card, {
          yPercent: isFirstCard ? 0 : 102,
          scale: isFirstCard ? 1 : 0.98,
          opacity: 1,
          zIndex: index + 1,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      timeline = gsap.timeline({ paused: true });
      for (let i = 1; i < totalCards; i += 1) {
        timeline
          .to(
            cards[i],
            { yPercent: 0, scale: 1, duration: 1, ease: "power1.out" },
            i - 1,
          )
          .to(
            cards[i - 1],
            { scale: 0.93, duration: 1, ease: "power1.out" },
            i - 1,
          );
      }

      trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => "+=" + (totalCards - 1) * window.innerHeight,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (!self.isActive || !timeline) return;
          // Entering from the top → start on card 0; entering from below
          // (scrolling up out of the next section) → start on the last card.
          const entryIndex = self.direction === -1 ? totalCards - 1 : 0;
          currentIndex = entryIndex;
          gsap.killTweensOf(timeline);
          timeline.progress(entryIndex / (totalCards - 1));
          animating = false;
          pendingDir = 0;
          setActiveIndex(entryIndex);
        },
      });
    }, wrapper);

    if (!trigger || !timeline) {
      return () => {
        ctx.revert();
      };
    }

    const st = trigger;
    const tl = timeline;

    const goToCard = (index: number) => {
      currentIndex = index;
      setActiveIndex(index);
      animating = true;
      gsap.to(tl, {
        time: index,
        duration: STEP_DURATION,
        ease: "power2.inOut",
        overwrite: true,
        onComplete: () => {
          animating = false;
          if (pendingDir !== 0) {
            const queued = pendingDir;
            pendingDir = 0;
            step(queued);
          }
        },
      });
    };

    // Hand the page back to native scrolling at the ends of the stack. Scroll is
    // parked inside the pin, so we jump just past the boundary; because the
    // pinned card and the just-unpinned card render identically, this is
    // visually seamless — only the scrollbar position changes. Force an instant
    // jump regardless of the page's (smooth) scroll-behavior, then restore it.
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

    const step = (dir: number) => {
      if (animating) return;
      const next = currentIndex + dir;
      if (next < 0) {
        releaseUp();
        return;
      }
      if (next > totalCards - 1) {
        releaseDown();
        return;
      }
      goToCard(next);
    };

    // Allow a nested scroll region (long card content) to consume the gesture
    // before the section hijacks it — mirrors Lenis' data-lenis-prevent idea.
    const canScrollWithin = (target: EventTarget | null, dir: number) => {
      let node = target instanceof Element ? target : null;
      while (node && node !== wrapper) {
        if (node.hasAttribute("data-card-scroll")) {
          const canScroll = node.scrollHeight > node.clientHeight + 1;
          if (canScroll) {
            if (dir > 0) {
              return node.scrollTop + node.clientHeight < node.scrollHeight - 1;
            }
            return node.scrollTop > 1;
          }
          return false;
        }
        node = node.parentElement;
      }
      return false;
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
      // Let an overflowing card scroll its own content first.
      if (canScrollWithin(event.target, dir)) return;
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
        // queued so it isn't dropped; the current flick's own momentum is not
        // "fresh", so it never queues itself.
        if (fresh) pendingDir = dir;
        return;
      }

      // Inertial momentum decelerates, so its most-recent deltas fall below the
      // earlier ones — ignore that tail. A real push (rising or sustained) fires
      // once here, so a single flick advances exactly one card while separate
      // flicks still advance card-by-card.
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
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const dir = touchStartY - currentY > 0 ? 1 : -1;
      // Block the page scroll while engaged so the swipe drives the stack only.
      if (!canScrollWithin(event.target, dir)) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!st.isActive) return;
      const diff =
        touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY);
      if (Math.abs(diff) < TOUCH_THRESHOLD) return;
      const dir = diff > 0 ? 1 : -1;
      if (canScrollWithin(event.target, dir)) return;
      step(dir);
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

      // Let the focused card region scroll its own overflow first.
      if (canScrollWithin(document.activeElement, dir)) return;
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
      gsap.killTweensOf(tl);
      ctx.revert();
    };
  }, [capabilities.length]);

  if (!capabilities.length) return null;

  return (
    <section
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-2 md:py-4"
      aria-label="Core Capabilities"
    >
      <div ref={stackWrapperRef} className="relative h-screen overflow-hidden">
        {/* Sticky title */}
        <div className="pointer-events-none absolute inset-x-0 top-16 z-20 mx-auto max-w-6xl px-4 text-center sm:px-6 md:top-20 lg:px-8">
          <h2 className="mx-auto max-w-[1200px] text-center text-4xl font-light tracking-wide md:text-5xl">
            {title}
            {titleHighlight ? (
              <>
                {" "}
                <span className="text-red-500">{titleHighlight}</span>
              </>
            ) : null}
          </h2>
        </div>

        {/* Stacked card layers */}
        {capabilities.map((cap, index) => {
          const cardHref = cap.learnMoreHref ?? learnMoreHref;
          return (
            <div
              key={cap.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              inert={index !== activeIndex}
              aria-hidden={index !== activeIndex ? true : undefined}
              className="absolute inset-0 flex items-start justify-center px-4 pt-28 pb-6 will-change-transform sm:px-6 md:items-center md:pt-36 lg:px-8"
            >
              <div className="group block w-full max-w-[1200px]">
                <article className="isolate overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_-22px_rgba(15,23,42,0.35)]">
                  <div className="grid h-[68vh] max-h-[640px] md:grid-cols-2">
                    {/* Left: video (or icon fallback) */}
                    <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
                      {cap.imageSrc ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={cap.imageSrc}
                            alt={cap.imageAlt ?? cap.tabLabel}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </>
                      ) : cap.videoSrc ? (
                        <>
                          <video
                            src={cap.videoSrc}
                            poster={cap.videoPoster}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={cap.tabLabel}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                          {cap.tabIcon ? (
                            <span
                              className="h-24 w-24 text-red-500/90 transition-transform duration-700 group-hover:scale-110"
                              aria-hidden="true"
                            >
                              {cap.tabIcon}
                            </span>
                          ) : null}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      )}
                    </div>

                    {/* Right: content. Focusable so keyboard users can scroll
                        overflowing content before the stack steps to the next
                        card (see canScrollWithin). */}
                    <div
                      data-card-scroll
                      tabIndex={0}
                      role="group"
                      aria-label={`${cap.tabLabel}: ${cap.headline}`}
                      className="flex w-full min-w-0 flex-col justify-start overflow-y-auto px-6 py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-8 md:py-8"
                    >
                      <div className="w-full">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                          {cap.tabLabel}
                        </p>
                        <h3 className="mb-2 mt-2 text-2xl font-light tracking-wide md:text-3xl">
                          {cap.headline}
                        </h3>
                        <p className="mt-3 w-full text-sm leading-relaxed text-foreground md:text-base">
                          {cap.intro}
                        </p>

                        {cap.bullets.length > 0 ? (
                          <div className="mt-4 space-y-3">
                            {cap.bullets.map((group) => (
                              <div key={group.title}>
                                <p className="text-left text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                  {group.title}
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                  {group.items.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2 text-sm font-light tracking-wide text-foreground"
                                    >
                                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                                      <span>
                                        {item.includes(":") ? (
                                          <>
                                            <strong className="font-base">
                                              {item.slice(
                                                0,
                                                item.indexOf(":") + 1,
                                              )}
                                            </strong>
                                            {item.slice(item.indexOf(":") + 1)}
                                          </>
                                        ) : (
                                          item
                                        )}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <Link
                        href={cardHref}
                        className="group/cta mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-red-500 transition-all duration-300 hover:gap-3"
                      >
                        <span>Learn More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
