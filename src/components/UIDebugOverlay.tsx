"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useVelocity } from 'framer-motion';

interface UIDebugOverlayProps {
  isVisible?: boolean;
  onToggle?: () => void;
}

interface MousePosition {
  x: number;
  y: number;
}

interface ViewportInfo {
  width: number;
  height: number;
  scrollX: number;
  scrollY: number;
  scrollWidth: number;
  scrollHeight: number;
}

interface DeviceInfo {
  userAgent: string;
  devicePixelRatio: number;
  orientation?: string;
  touchSupport: boolean;
}

// Memory info interface for performance.memory
interface MemoryInfo {
  usedJSHeapSize?: number;
  totalJSHeapSize?: number;
  jsHeapSizeLimit?: number;
}

// Extend window.performance with memory property
interface PerformanceWithMemory extends Performance {
  memory?: MemoryInfo;
}

const UIDebugOverlay: React.FC<UIDebugOverlayProps> = ({ 
  isVisible = true, 
  onToggle 
}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo>({
    width: 0,
    height: 0,
    scrollX: 0,
    scrollY: 0,
    scrollWidth: 0,
    scrollHeight: 0,
  });
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    userAgent: '',
    devicePixelRatio: 1,
    orientation: '',
    touchSupport: false,
  });
  const [frameRate, setFrameRate] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [performanceData, setPerformanceData] = useState({
    memory: 0,
    timing: 0,
  });

  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number>(0);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Viewport and scroll tracking
  useEffect(() => {
    const updateViewportInfo = () => {
      setViewportInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
      });
    };

    const handleScroll = () => updateViewportInfo();
    const handleResize = () => updateViewportInfo();

    updateViewportInfo();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Device info
  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo({
        userAgent: navigator.userAgent,
        devicePixelRatio: window.devicePixelRatio,
        orientation: screen.orientation?.type || 'unknown',
        touchSupport: 'ontouchstart' in window,
      });
    };

    updateDeviceInfo();
    window.addEventListener('orientationchange', updateDeviceInfo);
    return () => window.removeEventListener('orientationchange', updateDeviceInfo);
  }, []);

  // Frame rate calculation
  useEffect(() => {
    const calculateFrameRate = (currentTime: number) => {
      frameCountRef.current++;
      
      if (currentTime - lastTimeRef.current >= 1000) {
        setFrameRate(Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current)));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      
      animationFrameRef.current = requestAnimationFrame(calculateFrameRate);
    };

    animationFrameRef.current = requestAnimationFrame(calculateFrameRate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Current time and performance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      
      // Performance metrics (if available)
      if ('memory' in window.performance) {
        const performanceWithMemory = window.performance as PerformanceWithMemory;
        setPerformanceData(prev => ({
          ...prev,
          memory: Math.round((performanceWithMemory.memory?.usedJSHeapSize || 0) / 1024 / 1024),
        }));
      }
      
      if (window.performance.now) {
        setPerformanceData(prev => ({
          ...prev,
          timing: Math.round(window.performance.now()),
        }));
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 right-4 z-[9999] font-mono text-xs"
      style={{ maxWidth: '350px' }}
    >
      <div className="bg-black/90 backdrop-blur-sm text-green-400 p-4 rounded-lg border border-green-400/30 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-green-300">UI Debug Panel</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-6 h-6 bg-yellow-500/20 hover:bg-yellow-500/30 rounded text-yellow-400 flex items-center justify-center transition-colors"
            >
              {isMinimized ? '+' : '−'}
            </button>
            {onToggle && (
              <button
                onClick={onToggle}
                className="w-6 h-6 bg-red-500/20 hover:bg-red-500/30 rounded text-red-400 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {!isMinimized && (
          <div className="space-y-3">
            {/* Time */}
            <div className="text-cyan-400">
              <strong>Time:</strong> {currentTime}
            </div>

            {/* Mouse Position */}
            <div>
              <strong>Mouse:</strong> ({mousePosition.x}, {mousePosition.y})
            </div>

            {/* Viewport Info */}
            <div>
              <strong>Viewport:</strong> {viewportInfo.width}×{viewportInfo.height}
            </div>

            {/* Scroll Info */}
            <div className="space-y-1">
              <div>
                <strong>Scroll Y:</strong> {Math.round(viewportInfo.scrollY)}px
              </div>
              <div>
                <strong>Progress:</strong> {Math.round(scrollYProgress.get() * 100)}%
              </div>
              <div>
                <strong>Velocity:</strong> {Math.round(scrollVelocity.get())}px/s
              </div>
              <div>
                <strong>Max Scroll:</strong> {viewportInfo.scrollHeight - viewportInfo.height}px
              </div>
            </div>

            {/* Performance */}
            <div className="space-y-1">
              <div>
                <strong>FPS:</strong> {frameRate}
              </div>
              {performanceData.memory > 0 && (
                <div>
                  <strong>Memory:</strong> {performanceData.memory}MB
                </div>
              )}
              <div>
                <strong>Runtime:</strong> {Math.round(performanceData.timing / 1000)}s
              </div>
            </div>

            {/* Device Info */}
            <div className="space-y-1">
              <div>
                <strong>DPR:</strong> {deviceInfo.devicePixelRatio}
              </div>
              <div>
                <strong>Touch:</strong> {deviceInfo.touchSupport ? 'Yes' : 'No'}
              </div>
              {deviceInfo.orientation && (
                <div>
                  <strong>Orient:</strong> {deviceInfo.orientation}
                </div>
              )}
            </div>

            {/* Browser Info */}
            <div className="text-xs text-gray-400 border-t border-gray-600 pt-2">
              <div className="truncate">
                <strong>UA:</strong> {deviceInfo.userAgent.slice(0, 40)}...
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 pt-2 border-t border-gray-600">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-2 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-blue-400 transition-colors"
              >
                Top
              </button>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-2 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-blue-400 transition-colors"
              >
                Bottom
              </button>
              <button
                onClick={() => console.log('UI Debug Data:', { mousePosition, viewportInfo, deviceInfo, performance: performanceData })}
                className="px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-purple-400 transition-colors"
              >
                Log
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UIDebugOverlay;