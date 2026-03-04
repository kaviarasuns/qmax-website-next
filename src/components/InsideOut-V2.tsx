import { useEffect, useRef } from "react";

export default function InsideOut() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch((err) => console.log("Video replay failed:", err));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasPlayed.current) {
          video.play().catch((err) => console.log("Video autoplay failed:", err));
          hasPlayed.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
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
            muted
            playsInline
          >
            <source src="http://d1yetprhniwywz.cloudfront.net/inside_out_V2.mp4" type="video/mp4" />
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
      {/* Spacer after animation */}
      <div style={{ height: "20vh" }} />
    </div>
  );
}
