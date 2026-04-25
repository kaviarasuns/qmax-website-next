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

export default function FullPageScroll({ children }: FullPageScrollProps) {
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
          <div
            key={index}
            className="h-screen w-full overflow-hidden"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Section indicator dots */}
      <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "scale-125 bg-red-500"
                : "bg-gray-400/50 hover:bg-gray-400"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
