"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  Children,
} from "react";

interface FullPageScrollProps {
  children: React.ReactNode;
}

/**
 * Opt-out wrapper for sections that should bleed behind the fixed
 * Navigation (e.g. a dark footer, or a full-bleed image hero). Negates
 * the safe-area padding that FullPageScroll2 applies by default.
 *
 * Usage:
 *   <FullPageScroll2>
 *     <ContactHero />     // respects nav by default
 *     <FullBleed><FooterV2 /></FullBleed>   // extends behind nav
 *   </FullPageScroll2>
 */
export const FullBleed = ({ children }: { children: React.ReactNode }) => (
  <div className="-mt-[var(--nav-h)] h-[calc(100%+var(--nav-h))]">
    {children}
  </div>
);

/**
 * FullPageScroll2
 *
 * Sibling of FullPageScroll. Same wheel/touch/keyboard snap behavior, with
 * one architectural change: each section reserves space at the top equal
 * to `var(--nav-h)` (defined in globals.css) so content never sits under
 * the fixed Navigation.
 *
 * Children get a usable content area of `calc(100vh - var(--nav-h))`. Use
 * `h-full` inside a section to fill that area; do NOT use `h-screen` on a
 * child, or it will overflow under/below the nav.
 *
 * Original FullPageScroll is intentionally left untouched so the home page
 * keeps its current full-bleed behavior.
 */
export default function FullPageScroll2({ children }: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);
  const sections = Children.toArray(children);
  const totalSections = sections.length;

  const ANIMATION_DURATION = 800;

  const goToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSections || isAnimating) return;
      setIsAnimating(true);
      setCurrentSection(index);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    },
    [totalSections, isAnimating],
  );

  // Wheel event handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      // Use a threshold to avoid triggering on tiny trackpad movements
      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0) {
        goToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        goToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [currentSection, isAnimating, goToSection]);

  // Touch event handlers for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;
      const diff = touchStartRef.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return; // Minimum swipe distance

      if (diff > 0) {
        goToSection(currentSection + 1);
      } else {
        goToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container?.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection, isAnimating, goToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSection(currentSection - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSection(totalSections - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isAnimating, goToSection, totalSections]);

  // Lock body scroll while component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 overflow-hidden">
      {/* Sliding track */}
      <div
        className="h-full will-change-transform"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      >
        {sections.map((child, index) => (
          // h-screen keeps the per-section snap math (1 section = 100vh).
          // pt-[var(--nav-h)] + box-border carves out the nav area from
          // the top, so the child's content area is calc(100vh - nav-h).
          <div
            key={index}
            className="h-screen w-full overflow-hidden box-border pt-[var(--nav-h)]"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
