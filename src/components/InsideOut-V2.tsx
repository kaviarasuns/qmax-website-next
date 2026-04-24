"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TrendingUp, Users, CheckSquare } from "lucide-react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const start = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, hasStarted]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  return { count, ref };
}

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
  {
    title: "Fast Turnaround",
    description:
      "Skilled in-house teams and streamlined workflows deliver high-quality designs quickly, keeping your product roadmap on track without compromising reliability.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We support your product's full lifecycle — ongoing engineering support, iterative improvements, and a team invested in your success well beyond the initial delivery.",
  },
];

export default function InsideOut() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const years = useCountUp(25);
  const engineers = useCountUp(45);
  const projects = useCountUp(1000, 2500);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 bg-white"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-0 z-[1]">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-12 py-12">
          <div
            className="relative overflow-hidden rounded-xl border border-[#d9d9d9] bg-[#1a1a1a] shadow-lg w-full max-w-[500px]"
            style={{ maxWidth: "100%" }}
          >
            <video
              ref={videoRef}
              className="block h-auto w-full"
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
          <button
            type="button"
            onClick={handleReplay}
            className="mt-3 rounded-full border border-[#222] px-3 py-1 text-xs font-medium text-[#222] transition hover:bg-[#222] hover:text-white"
          >
            Replay
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col px-6 lg:px-12 py-12 lg:py-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-16">
            Why Qmax <span className="text-red-500">Systems</span>
          </h2>

          <div className="grid gap-0 flex-1">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="border-t border-zinc-200 py-3 transition-all"
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
                      stroke="#F33117"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="mt-4 max-w-4xl">
                    <p className="text-base leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/mechanical-industrial-design-services/industrial-design"
              className="text-gray-900 font-semibold underline hover:text-red-500 transition-colors inline-flex items-center gap-2"
            >
              Explore Our Services
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Row - Full Width */}
      <div className="w-full max-w-6xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <TrendingUp size={28} className="text-red-500 mb-2" />
            <p
              ref={years.ref}
              className="text-4xl md:text-5xl font-bold text-zinc-900"
            >
              {years.count}+
            </p>
            <p className="text-gray-500 text-sm md:text-base font-normal mt-1">
              Years of Industry Experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users size={28} className="text-red-500 mb-2" />
            <p
              ref={engineers.ref}
              className="text-4xl md:text-5xl font-bold text-zinc-900"
            >
              {engineers.count}+
            </p>
            <p className="text-gray-500 text-sm md:text-base font-normal mt-1">
              Professional Engineers
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <CheckSquare size={28} className="text-red-500 mb-2" />
            <p
              ref={projects.ref}
              className="text-4xl md:text-5xl font-bold text-zinc-900"
            >
              {projects.count}+
            </p>
            <p className="text-gray-500 text-sm md:text-base font-normal mt-1">
              Successful Projects Delivered
            </p>
          </div>
        </div>
      </div>

      {/* Spacer after animation */}
      <div style={{ height: "8vh" }} />
    </div>
  );
}
