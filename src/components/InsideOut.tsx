import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

export default function InsideOut() {
  const ref = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // The scroll section height determines how much scroll is needed for the animation
  const sectionHeight = 6000; // px (double the original)
  const frameCount = 336;

  // Use framer-motion's useScroll to get scroll progress within the sticky section
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    // Progress 0 when section top hits viewport top, 1 when section bottom hits viewport bottom (covers full pin duration)
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index with start/end holds
  // Start hold avoids loading at a late frame; end hold ensures we reach 1 before unpin
  const currentIndex = useTransform(scrollYProgress, (progress) => {
    const START_HOLD_END = 0.04; // 0% -> 4%: hold at frame 1
    const FORWARD_END = 0.48; // end forward a bit earlier
    const END_HOLD_START = 0.96; // hold last 4%

    if (progress <= START_HOLD_END) {
      return 1;
    }

    if (progress <= FORWARD_END) {
      const tF = (progress - START_HOLD_END) / (FORWARD_END - START_HOLD_END); // 0..1
      return 1 + tF * (frameCount - 1);
    }

    if (progress >= END_HOLD_START) {
      return 1;
    }

    // Reverse between FORWARD_END and END_HOLD_START
    const tR = (progress - FORWARD_END) / (END_HOLD_START - FORWARD_END); // 0..1
    return frameCount - tR * (frameCount - 1);
  });

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

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Math.round(latest));
  });

  // Render the first frame when images are loaded
  useEffect(() => {
    if (!loading && images.length > 0) {
      render(1);
    }
  }, [loading, images, render]);

  return (
    <div>
      {/* Spacer before animation */}
      {/* <div style={{ height: "0px" }} /> */}
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
