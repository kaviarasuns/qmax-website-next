"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "End-to-End Engineering",
    description:
      "From concept to production — schematic, PCB layout, embedded firmware, mechanical design, prototyping, and DFM optimization. Every stage under one roof for faster time-to-market.",
  },
  {
    title: "Professional Engineering Team",
    description:
      "Deep expertise in hardware, firmware, and system architecture across medical, industrial, consumer electronics, and IoT — with hundreds of successful projects delivered.",
  },
  {
    title: "Built for Real-World Impact",
    description:
      "Every element is considered. Every connection, deliberate. Designed for the conditions your product will actually face — built to scale from first prototype to full production.",
  },
  // {
  //   title: "Fast Turnaround",
  //   description:
  //     "Skilled in-house teams and streamlined workflows deliver high-quality designs quickly, keeping your product roadmap on track without compromising reliability.",
  // },
  {
    title: "Long-Term Partnership",
    description:
      "We support your product's full lifecycle — ongoing engineering support, iterative improvements, and a team invested in your success well beyond the initial delivery.",
  },
];

export default function InsideOutV2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showReplay, setShowReplay] = useState(false);
  const playCountRef = useRef(0);
  const hasCompletedRef = useRef(false);
  const isReplayModeRef = useRef(false);
  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (expandedIndex === null) return;
    const timer = setTimeout(() => {
      setExpandedIndex(null);
    }, 10000);
    return () => clearTimeout(timer);
  }, [expandedIndex]);

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowReplay(false);
    isReplayModeRef.current = true;
    video.currentTime = 0;
    video.play().catch((err) => console.log("Video replay failed:", err));
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleEnded = () => {
      if (isReplayModeRef.current) {
        isReplayModeRef.current = false;
        setShowReplay(true);
        return;
      }
      playCountRef.current += 1;
      if (playCountRef.current < 3) {
        video.currentTime = 0;
        video.play().catch((err) => console.log("Video loop failed:", err));
      } else {
        hasCompletedRef.current = true;
        setShowReplay(true);
      }
    };

    video.addEventListener("ended", handleEnded);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!hasCompletedRef.current) {
            video.play().catch((err) => console.log("Video play failed:", err));
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      video.removeEventListener("ended", handleEnded);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        ref={sectionRef}
        className="bg-white w-full max-w-7xl rounded-2xl overflow-hidden"
      >
      <h2 className="text-center text-3xl font-light tracking-wide px-6 pt-8 pb-4 md:text-5xl lg:pt-10 lg:pb-6">
        Why Qmax <span className="text-red-500">Systems</span>
      </h2>
      {/*Main Section*/}
      <div className="flex flex-col lg:flex-row lg:items-center items-stretch gap-0 z-[1]">
        <div className="w-full lg:w-[60%] flex flex-col items-center justify-center px-6 lg:pl-12 lg:pr-2 py-8 lg:py-10">
          <div
            className="relative w-full lg:-translate-x-12 xl:-translate-x-20"
            style={{ maxWidth: "100%" }}
          >
            <video
              ref={videoRef}
              className="block h-auto w-full lg:scale-110 xl:scale-[1.15] origin-center"
              width={765}
              height={876}
              preload="auto"
              muted
              playsInline
            >
              <source
                src="https://d1yetprhniwywz.cloudfront.net/inside_out_V2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {showReplay && (
            <button
              type="button"
              onClick={handleReplay}
              className="relative z-10 mt-3 lg:mt-12 xl:mt-16 rounded-full border border-[#222] bg-white px-3 py-1 text-xs font-medium text-[#222] transition hover:bg-[#222] hover:text-white"
            >
              Replay
            </button>
          )}
        </div>
        <div className="relative z-10 w-full lg:w-[40%] flex flex-col justify-center px-6 lg:pl-2 lg:pr-12 py-6 lg:py-8 lg:-ml-16 xl:-ml-24 bg-white lg:bg-transparent">
          <div className="grid w-full max-w-lg mx-auto gap-0">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="border-t border-zinc-200 first:border-t-0 py-1 transition-all"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex cursor-pointer items-center justify-between gap-4 text-left"
                >
                  <span className="flex-1 text-lg font-light leading-relaxed text-zinc-900 md:text-2xl tracking-tight">
                    {reason.title}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-red-500 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="mt-2 max-w-4xl">
                    <p className="text-base leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="mt-8">
            <a
              href="/mechanical-industrial-design-services/industrial-design"
              className="text-gray-900 font-semibold underline hover:text-red-500 transition-colors inline-flex items-center gap-2"
            >
              Explore Our Services
              <span>→</span>
            </a>
          </div> */}
        </div>
      </div>

      {/* Stats Row - Full Width */}
      {/* <div
        className="w-full max-w-6xl mx-auto mt-10 px-6"
        style={{ marginTop: "40px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <TrendingUp size={28} className="text-red-500 mb-2" />
            <p
              ref={years.ref}
              className="text-4xl md:text-5xl font-bold"
            >
              {years.count}+
            </p>
            <p className="text-sm md:text-base font-normal mt-1 text-muted-foreground">
              Years of Industry Experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users size={28} className="text-red-500 mb-2" />
            <p
              ref={engineers.ref}
              className="text-4xl md:text-5xl font-bold"
            >
              {engineers.count}+
            </p>
            <p className="text-sm md:text-base font-normal mt-1 text-muted-foreground">
              Professional Engineers
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <CheckSquare size={28} className="text-red-500 mb-2" />
            <p
              ref={projects.ref}
              className="text-4xl md:text-5xl font-bold"
            >
              {projects.count}+
            </p>
            <p className="text-sm md:text-base font-normal mt-1 text-muted-foreground">
              Successful Projects Delivered
            </p>
          </div>
        </div>
      </div> */}

      {/* Spacer after animation */}
      {/* <div data-budge-target style={{ height: "6vh" }} /> */}
      </div>
    </div>
  );
}
