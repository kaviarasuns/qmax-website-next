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
    <section className="py-20 lg:py-28">
      <div className="w-full px-8 md:px-12">
        <div className="mx-auto w-fit">
          <div className="mb-10 flex items-center justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-red-500">Case Studies</span>
            </h2>

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
            className="scrollbar-hide [&::-webkit-scrollbar]:hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >
            {caseStudies.map((study) => (
              <div key={study.id} className="w-72 shrink-0 snap-start sm:w-80 md:w-96">
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
      </div>
    </section>
  )
}
