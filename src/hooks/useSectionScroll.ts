import { useEffect, useRef } from 'react';
import { useLenis } from '@/utils/lenis';

interface SectionRef {
  current: HTMLElement | null;
}

export const useSectionScroll = (
  sectionRefs: SectionRef[], 
  currentSection: number,
  setCurrentSection: (index: number) => void,
  setIsProgrammaticScroll: (isProgrammatic: boolean) => void
) => {
  const lenis = useLenis();
  const lastScrollYRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // Skip if this is a programmatic scroll
      if (isProgrammaticScrollRef.current) return;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section that is currently in the middle of the viewport
      let closestSectionIndex = 0;
      let closestDistance = Infinity;

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          const sectionMiddle = sectionTop + sectionHeight / 2;
          const distance = Math.abs(scrollPosition - sectionMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSectionIndex = index;
          }
        }
      });

      // Check if we should auto-scroll to the next section based on 20% threshold
      if (closestSectionIndex !== currentSection) {
        const currentRef = sectionRefs[currentSection];
        if (currentRef.current) {
          const currentSectionTop = currentRef.current.offsetTop;
          const currentSectionHeight = currentRef.current.offsetHeight;

          // Calculate thresholds (20% from top when scrolling down, 20% from bottom when scrolling up)
          const thresholdPosition = isScrollingDown 
            ? currentSectionTop + (currentSectionHeight * 0.2)
            : currentSectionTop + (currentSectionHeight * 0.8);

          // Check if we've passed the threshold
          if ((isScrollingDown && currentScrollY > thresholdPosition) || 
              (!isScrollingDown && currentScrollY < thresholdPosition)) {
            // Auto-scroll to the section we're moving toward
            const targetRef = sectionRefs[closestSectionIndex];
            if (targetRef.current && lenis) {
              console.log("Auto-scrolling to section:", closestSectionIndex);
              isProgrammaticScrollRef.current = true;
              setIsProgrammaticScroll(true);
              setCurrentSection(closestSectionIndex);

              lenis.scrollTo(targetRef.current, {
                offset: -window.innerHeight / 2 + targetRef.current.offsetHeight / 2,
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
                onComplete: () => {
                  setTimeout(() => {
                    isProgrammaticScrollRef.current = false;
                    setIsProgrammaticScroll(false);
                  }, 100);
                }
              });
            }
          }
        }
      }
    };

    // Throttle the scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionRefs, currentSection, setCurrentSection, setIsProgrammaticScroll, lenis]);

  return { lenis };
};