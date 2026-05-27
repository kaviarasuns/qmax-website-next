import { useCallback, useEffect, useRef, useState } from "react";

export default function InsideOutOptimized() {
  const ref = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Optimized frame count for better performance
  const frameCount = 60; // Significantly reduced from 672 to 60
  const animationSpeed = 100; // ms between frames
  const frameStep = Math.floor(672 / frameCount); // Use every nth frame from original

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for visibility detection
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        if (isIntersecting && !isPlaying && images.length > 0) {
          // Start animation when component comes into view
          setTimeout(() => setIsPlaying(true), 500);
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [images.length, isPlaying]);

  // Optimized image loading - load fewer frames
  useEffect(() => {
    const imagePromises: Promise<HTMLImageElement>[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const actualFrameNumber = Math.min(i * frameStep, 672);
      const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = `https://d1yetprhniwywz.cloudfront.net/v2/inside_out/${actualFrameNumber}.webp`;
      });
      imagePromises.push(promise);
    }

    Promise.all(imagePromises)
      .then((loadedImages) => {
        setImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setLoading(false);
      });
  }, [frameCount, frameStep]);

  // Optimized render function
  const render = useCallback(
    (index: number) => {
      const canvas = ref.current;
      if (canvas && images[index - 1]) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const leftPadding = isMobile ? 110 : 0;
          ctx.drawImage(images[index - 1], leftPadding, 0);
        }
      }
    },
    [images, isMobile]
  );

  // Animation loop with RAF optimization
  useEffect(() => {
    if (!isPlaying || loading || images.length === 0) return;

    let animationId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= animationSpeed) {
        setCurrentFrame((prev) => {
          const nextFrame = prev >= frameCount ? 1 : prev + 1;
          render(nextFrame);
          return nextFrame;
        });
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, loading, images.length, animationSpeed, frameCount, render]);

  // Initial render
  useEffect(() => {
    if (!loading && images.length > 0) {
      render(1);
    }
  }, [loading, images, render]);

  // Manual controls
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleRestart = () => {
    setCurrentFrame(1);
    setIsPlaying(true);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading animation...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-white flex items-center justify-center py-16"
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8 px-4">
        <div className="relative">
          <canvas
            className="border border-gray-200 rounded-lg shadow-lg max-[900px]:w-[90vw] max-[900px]:h-auto max-[900px]:max-w-full"
            width={700}
            height={800}
            ref={ref}
          />

          {/* Animation controls */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
            >
              Play
            </button>
            <button
              onClick={handlePause}
              disabled={!isPlaying}
              className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
            >
              Pause
            </button>
            <button
              onClick={handleRestart}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              Restart
            </button>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            {currentFrame} / {frameCount}
          </div>
        </div>

        <div className="max-w-md p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Built from the inside out.
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
            Every element is considered.
            <br />
            Every connection, deliberate.
            <br />
            This is design at its most honest—where the inside is as beautiful
            as the outside.
          </p>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div
              className={`w-2 h-2 rounded-full ${
                isVisible ? "bg-green-500 animate-pulse" : "bg-gray-400"
              }`}
            />
            {isVisible ? "Animation ready" : "Scroll to activate"}
          </div>
        </div>
      </div>
    </div>
  );
}
