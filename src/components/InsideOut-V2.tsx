"use client";

import { useEffect, useRef } from "react";

type InsideOutProps = {
  isActive?: boolean;
};

export default function InsideOut({ isActive = false }: InsideOutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);
  const isVideoVisible = useRef(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video || hasPlayed.current || !isVideoVisible.current) return;

    video
      .play()
      .then(() => {
        hasPlayed.current = true;
      })
      .catch((err) => {
        console.log("Video autoplay failed:", err);
      });
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch((err) => console.log("Video replay failed:", err));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // If the section is marked active by page navigation, allow autoplay attempt.
      isVideoVisible.current = true;
      playVideo();
    }

    const retryPlay = () => {
      playVideo();
    };

    video.addEventListener("loadedmetadata", retryPlay);
    video.addEventListener("canplay", retryPlay);
    video.addEventListener("loadeddata", retryPlay);
    video.addEventListener("canplaythrough", retryPlay);

    return () => {
      video.removeEventListener("loadedmetadata", retryPlay);
      video.removeEventListener("canplay", retryPlay);
      video.removeEventListener("loadeddata", retryPlay);
      video.removeEventListener("canplaythrough", retryPlay);
    };
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVideoVisible.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          playVideo();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
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
