"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollDebugInfo {
  scrollY: number;
  scrollProgress: number;
  direction: 'up' | 'down' | 'idle';
  velocity: number;
  sectionInView: string;
  elementsInView: string[];
  sectionScrollProgress: number;
  sectionPosition: 'above' | 'in-view' | 'below';
}

interface ScrollDebugPanelProps {
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
  sectionNames: string[];
  currentSection: number;
}

const ScrollDebugPanel: React.FC<ScrollDebugPanelProps> = ({
  sectionRefs,
  sectionNames,
  currentSection
}) => {
  const [scrollDebugInfo, setScrollDebugInfo] = useState<ScrollDebugInfo>({
    scrollY: 0,
    scrollProgress: 0,
    direction: 'idle',
    velocity: 0,
    sectionInView: '',
    elementsInView: [],
    sectionScrollProgress: 0,
    sectionPosition: 'in-view'
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY, scrollYProgress } = useScroll();
  
  // Smooth velocity calculation
  const smoothVelocity = useSpring(0, { damping: 50, stiffness: 400 });
  
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      const velocity = latest - lastScrollY.current;
      smoothVelocity.set(velocity);
      
      // Calculate section-specific scroll progress
      let sectionScrollProgress = 0;
      let sectionPosition: 'above' | 'in-view' | 'below' = 'in-view';
      
      const currentSectionRef = sectionRefs[currentSection];
      if (currentSectionRef?.current) {
        const rect = currentSectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        if (rect.top < 0 && rect.bottom > 0) {
          // Section is partially above viewport
          sectionScrollProgress = Math.abs(rect.top) / sectionHeight;
          sectionPosition = rect.bottom > viewportHeight ? 'in-view' : 'above';
        } else if (rect.top >= 0) {
          // Section is below viewport
          sectionPosition = 'below';
          sectionScrollProgress = 0;
        } else {
          // Section is above viewport
          sectionPosition = 'above';
          sectionScrollProgress = 1;
        }
      }
      
      setScrollDebugInfo(prev => ({
        ...prev,
        scrollY: Math.round(latest),
        scrollProgress: Math.round(scrollYProgress.get() * 100),
        direction: velocity > 0 ? 'down' : velocity < 0 ? 'up' : 'idle',
        velocity: Math.round(Math.abs(velocity)),
        sectionInView: sectionNames[currentSection] || 'Unknown',
        sectionScrollProgress: Math.round(sectionScrollProgress * 100),
        sectionPosition
      }));
      
      lastScrollY.current = latest;
    });

    return unsubscribe;
  }, [scrollY, scrollYProgress, currentSection, sectionNames, smoothVelocity, sectionRefs]);

  // Track elements in viewport
  useEffect(() => {
    const updateElementsInView = () => {
      const elementsInView: string[] = [];
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Check sections
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const elementTop = scrollTop + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Element is in viewport if it overlaps with the viewport
          if (elementTop < scrollTop + viewportHeight && elementBottom > scrollTop) {
            elementsInView.push(`${sectionNames[index]} (${Math.round((rect.top / viewportHeight) * 100)}%)`);
          }
        }
      });
      
      setScrollDebugInfo(prev => ({
        ...prev,
        elementsInView
      }));
    };

    const throttledUpdate = throttle(updateElementsInView, 100);
    window.addEventListener('scroll', throttledUpdate);
    window.addEventListener('resize', throttledUpdate);
    updateElementsInView(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', throttledUpdate);
    };
  }, [sectionRefs, sectionNames]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50 font-mono text-xs"
    >
      <div className="bg-blue-900/90 backdrop-blur-sm text-blue-100 p-3 rounded-lg border border-blue-400/30 shadow-2xl max-w-xs">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-bold text-blue-200">Scroll Debug</h4>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-6 h-6 bg-blue-500/20 hover:bg-blue-500/30 rounded text-blue-300 flex items-center justify-center transition-colors"
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>

        {/* Always visible info */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Scroll Y:</span>
            <span className="text-blue-300">{scrollDebugInfo.scrollY}px</span>
          </div>
          <div className="flex justify-between">
            <span>Progress:</span>
            <span className="text-blue-300">{scrollDebugInfo.scrollProgress}%</span>
          </div>
          <div className="flex justify-between">
            <span>Section:</span>
            <span className={`font-bold ${
              scrollDebugInfo.sectionScrollProgress > 20 ? 'text-red-400' :
              scrollDebugInfo.sectionScrollProgress > 10 ? 'text-yellow-400' :
              'text-green-400'
            }`}>
              {scrollDebugInfo.sectionScrollProgress}%
            </span>
          </div>
          <div className="flex justify-between">
            <span>Direction:</span>
            <span className={`font-bold ${
              scrollDebugInfo.direction === 'down' ? 'text-red-400' :
              scrollDebugInfo.direction === 'up' ? 'text-green-400' :
              'text-gray-400'
            }`}>
              {scrollDebugInfo.direction.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Expandable info */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-blue-600/50 space-y-2"
          >
            <div className="flex justify-between">
              <span>Velocity:</span>
              <span className="text-blue-300">{scrollDebugInfo.velocity}px/frame</span>
            </div>
            
            <div>
              <span className="block mb-1">Current Section:</span>
              <span className="text-yellow-300 font-bold">{scrollDebugInfo.sectionInView}</span>
              <div className="text-xs mt-1">
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  scrollDebugInfo.sectionPosition === 'in-view' ? 'bg-green-500/20 text-green-300' :
                  scrollDebugInfo.sectionPosition === 'above' ? 'bg-red-500/20 text-red-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {scrollDebugInfo.sectionPosition.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Section Progress Indicator */}
            <div>
              <span className="block mb-1">Section Progress:</span>
              <div className="w-full bg-blue-800/50 rounded-full h-3 mb-1">
                <motion.div
                  className={`h-3 rounded-full transition-colors ${
                    scrollDebugInfo.sectionScrollProgress > 20 ? 'bg-red-400' :
                    scrollDebugInfo.sectionScrollProgress > 10 ? 'bg-yellow-400' :
                    'bg-green-400'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(scrollDebugInfo.sectionScrollProgress, 100)}%` }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              </div>
              <div className="text-xs text-center">
                {scrollDebugInfo.sectionScrollProgress}% 
                {scrollDebugInfo.sectionScrollProgress > 20 && (
                  <span className="text-red-400 font-bold ml-1">TRIGGER!</span>
                )}
              </div>
            </div>

            <div>
              <span className="block mb-1">Elements in View:</span>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {scrollDebugInfo.elementsInView.map((element, index) => (
                  <div key={index} className="text-xs text-blue-200 pl-2">
                    • {element} {index}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual scroll progress bar */}
            <div className="mt-3">
              <span className="block mb-1">Visual Progress:</span>
              <div className="w-full bg-blue-800/50 rounded-full h-2">
                <motion.div
                  className="bg-blue-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${scrollDebugInfo.scrollProgress}%` }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-1 pt-2">
              <button
                onClick={() => {
                  console.log('Scroll Debug Info:', scrollDebugInfo);
                  console.log('Section Positions:', sectionRefs.map((ref, i) => ({
                    name: sectionNames[i],
                    top: ref.current?.offsetTop,
                    height: ref.current?.offsetHeight
                  })));
                }}
                className="px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-purple-300 transition-colors text-xs"
              >
                Log Data
              </button>
              <button
                onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: 'smooth' })}
                className="px-2 py-1 bg-green-500/20 hover:bg-green-500/30 rounded text-green-300 transition-colors text-xs"
              >
                +100vh
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Throttle utility function
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}

export default ScrollDebugPanel;