"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import CaseStudyCard from "@/components/CaseStudyCard"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: 1,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png",
    title: "Industrial Controller",
    summary: "Production-grade industrial control PCB developed for reliable operation in demanding field environments.",
    link: "/case-studies/Industrial-Controller",
  },
  {
    id: 2,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Aerospace-PCB.png",
    title: "Aerospace PCB",
    summary: "High-reliability aerospace board program engineered around strict performance and validation constraints.",
    link: "/case-studies/Aerospace-PCB",
  },
  {
    id: 3,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-OBD.png",
    title: "Automotive OBD",
    summary: "Compact automotive diagnostics platform designed for durability, compliance, and fast integration.",
    link: "/case-studies/Automotive-OBD",
  },
  {
    id: 4,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Security-Controller.png",
    title: "Security Controller",
    summary: "Embedded security controller PCB balancing stable power delivery with dependable system monitoring.",
    link: "/case-studies/Security-System-Controller",
  },
  {
    id: 5,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-HID-PCB.png",
    title: "Automotive HID PCB",
    summary: "Automotive lighting control board optimized for robust switching behavior and manufacturable layout.",
    link: "/case-studies/Automotive-HID-PCB",
  },
  {
    id: 6,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device-2.png",
    title: "Networking Device",
    summary: "High-density networking hardware PCB built to support signal integrity across connected subsystems.",
    link: "/case-studies/Networking-Device",
  },
]

export function CaseStudiesSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  const checkScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  React.useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)

    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <div className="w-full px-8 md:px-12">
        <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Our Work - <span className="text-red-500">Case Studies</span>
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Explore production-ready PCB programs delivered across industrial, automotive,
              aerospace, and networking applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-red-500"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="h-12 w-12 rounded-full border-zinc-200 bg-white transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="h-12 w-12 rounded-full border-zinc-200 bg-white transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5"
        >
          {caseStudies.map((study) => (
            <div key={study.id} className="w-64 shrink-0 snap-start sm:w-72 md:w-80">
              <CaseStudyCard
                title={study.title}
                image={study.image}
                link={study.link}
                summary={study.summary}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
