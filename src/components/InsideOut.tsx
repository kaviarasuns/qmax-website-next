import { useCallback, useEffect, useRef, useState } from "react";

export default function InsideOut() {
  const ref = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  // Use dynamic section height so all frames render smoothly across scroll
  const [sectionHeight, setSectionHeight] = useState<number>(9000);
  const frameCount = 672;

  // Animation is driven by manual scroll handler tied to the pinned interval

  useEffect(() => {
    const imagePromises: Promise<HTMLImageElement>[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        // img.src = `/inside_out/${i}.webp`;
        img.src = `https://d1yetprhniwywz.cloudfront.net/v2/inside_out/${i}.webp`;
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
        // Handle error, maybe set an error state
      });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define render before using it in effects
  const render = useCallback(
    (index: number) => {
      const canvas = ref.current;
      if (canvas && images[index - 1]) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const leftPadding = isMobile ? 110 : 0; // 40px padding on mobile, 0 otherwise
          ctx.drawImage(images[index - 1], leftPadding, 0);
        }
      }
    },
    [images, isMobile]
  );

  // Track pin state and drive frame rendering during the pinned interval
  const lastFrameRef = useRef<number>(-1);
  useEffect(() => {
    const onScroll = () => {
      const el = stickyRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pinnedNow = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (loading || images.length === 0) return;

      // Before pinned: hold first frame
      if (rect.top > 0) {
        if (lastFrameRef.current !== 1) {
          render(1);
          lastFrameRef.current = 1;
        }
        return;
      }

      // Pinned: map scroll within pinned distance to frames 1..672
      if (pinnedNow) {
        const pinnedDistance = rect.height - window.innerHeight; // total scroll while sticky is pinned
        const scrolledWhilePinned = Math.min(
          pinnedDistance,
          Math.max(0, -rect.top)
        );
        const progress =
          pinnedDistance > 0 ? scrolledWhilePinned / pinnedDistance : 0;
        const frame = 1 + Math.round(progress * (frameCount - 1));
        if (frame !== lastFrameRef.current) {
          render(frame);
          lastFrameRef.current = frame;
        }
        return;
      }

      // After unpinned: lock on last frame
      if (lastFrameRef.current !== frameCount) {
        render(frameCount);
        lastFrameRef.current = frameCount;
      }
    };

    // Initialize and listen
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [images, loading, frameCount, render]);

  // Compute a generous section height based on device to ensure smooth progression through all frames
  useEffect(() => {
    const computeHeight = () => {
      const perFrame = isMobile ? 5 : 8; // px per frame - reduced for faster rendering
      const buffer = Math.round(window.innerHeight * 0.3); // reduced buffer
      setSectionHeight(frameCount * perFrame + buffer);
    };
    computeHeight();
    window.addEventListener("resize", computeHeight);
    return () => window.removeEventListener("resize", computeHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // Initial draw of first frame occurs when images finish loading

  // Render the first frame when images are loaded
  useEffect(() => {
    if (!loading && images.length > 0) {
      render(1);
    }
  }, [loading, images, render]);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
      {/* Spacer before animation */}
      {/* <div style={{ height: "50vh" }} /> */}
      {/* Sticky animation section */}
      {!loading && (
        <div
          ref={stickyRef}
          style={{
            position: "relative",
            height: sectionHeight,
            width: "100%",
            background: "white",
          }}
        >
          <div className="flex flex-row flex-wrap justify-center items-center gap-12 bg-white z-[1] sticky top-0 h-screen max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8">
            <canvas
              className="border border-white max-[900px]:w-[90vw] max-[900px]:h-auto max-[900px]:max-w-full"
              width={700}
              height={800}
              ref={ref}
            ></canvas>
            <div className="insideout-text-content p-6 max-w-md">
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: "#222",
                }}
              >
                Built from the inside out.
              </h2>
              <p
                style={{ fontSize: "1.15rem", color: "#444", lineHeight: 1.6 }}
              >
                Every element is considered.
                <br />
                Every connection, deliberate.
                <br />
                This is design at its most honest—where the inside is as
                beautiful as the outside.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Spacer after animation */}
      <div style={{ height: "20vh" }} />
    </div>
  );
}
