import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

export default function InsideOut() {
  const ref = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // The scroll section height determines how much scroll is needed for the animation
  const sectionHeight = 3000; // px
  const frameCount = 336;

  // Use framer-motion's useScroll to get scroll progress within the sticky section
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0-1) to frame index (1-336)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      // img.src = `/inside_out/${i}.webp`;
      img.src = `https://d1yetprhniwywz.cloudfront.net/v2/inside_out/${i}.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const render = useCallback(
    (index: number) => {
      const canvas = ref.current;
      if (canvas && images[index - 1]) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[index - 1], 0, 0);
        }
      }
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Math.round(latest));
  });

  // Render the first frame when images are loaded
  useEffect(() => {
    if (images.length > 0) {
      render(1);
    }
  }, [images, render]);

  return (
    <div>
      {/* Spacer before animation */}
      {/* <div style={{ height: "0px" }} /> */}
      {/* Sticky animation section */}
      <div
        ref={stickyRef}
        style={{
          position: "relative",
          height: sectionHeight,
          width: "100%",
          background: "white",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            background: "white",
            zIndex: 1,
          }}
        >
          <canvas
            style={{ border: "1px solid white" }}
            width={700}
            height={800}
            ref={ref}
          ></canvas>
          <div style={{ maxWidth: 400, marginLeft: "2rem" }}>
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
            <p style={{ fontSize: "1.15rem", color: "#444", lineHeight: 1.6 }}>
              Every element is considered.
              <br />
              Every connection, deliberate.
              <br />
              This is design at its most honest—where the inside is as beautiful
              as the outside.
            </p>
          </div>
        </div>
      </div>
      {/* Spacer after animation */}
      <div style={{ height: "20vh" }} />
    </div>
  );
}
