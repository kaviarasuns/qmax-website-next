"use client";

import { useEffect, useRef } from "react";

export default function InsideOut() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch((err) => console.log("Video replay failed:", err));
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Section is visible — play from current position
          video.play().catch((err) => console.log("Video play failed:", err));
        } else {
          // Section scrolled out — pause to save resources
          video.pause();
        }
      },
      // Trigger when at least 30% of the section is visible
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 bg-white z-[1] min-h-screen max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8">
        <div className="flex flex-col items-end">
          <video
            ref={videoRef}
            className="block max-[900px]:w-[90vw] max-[900px]:h-auto max-[900px]:max-w-full"
            width={765}
            height={876}
            preload="auto"
            muted
            playsInline
          >
            <source src="https://d1yetprhniwywz.cloudfront.net/inside_out_V2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            type="button"
            onClick={handleReplay}
            className="mt-3 rounded-full border border-[#222] px-3 py-1 text-xs font-medium text-[#222] transition hover:bg-[#222] hover:text-white"
          >
            Replay
          </button>
        </div>
        <div className="insideout-text-content p-6 max-w-md">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#222",
            }}
          >
            Why Qmax Systems
          </h2>
          <p
            style={{ fontSize: "1.15rem", color: "#444", lineHeight: 1.6 }}
          >
            Built from the inside out.
            <br />
            <br />
            Every element is considered.
            <br />
            Every connection, deliberate.
            <br />
            <br />
            End-to-end engineering,
            <br />
            from architecture to production.
            <br />
            <br />
            Designed for real-world impact.
            <br />
            Built to scale.
            <br />
            <br />
            <a
              href="/mechanical-industrial-design-services/industrial-design"
              style={{ color: "#222", textDecoration: "underline", fontWeight: 600 }}
            >
              Explore Our Services
            </a>
          </p>
        </div>
      </div>
      {/* Spacer after animation */}
      <div style={{ height: "20vh" }} />
    </div>
  );
}
