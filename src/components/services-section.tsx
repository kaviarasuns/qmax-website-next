"use client"

import { cn } from "@/lib/utils"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServicesCard } from "./services-card"


const carouselItems = [
  {
    id: 1,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Security_System_Controller.jpg",
    title: "Case Studies",
    description: "Security System Controller",
    url: "/case-studies/Security-System-Controller",
  },
  {
    id: 2,
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png",
    title: "Case Studies",
    description: "Industrial Controller",
    url: "/case-studies/Industrial-Controller",
  },
  {
    id: 3,
    image: "/services/embedded-systems.png",
    title: "Embedded Systems",
    description: "Embedded Systems Design & Development",
    url: "/embedded-design-services",
  },
  {
    id: 4,
    image: "/services/pcb-design.png",
    title: "PCB Design",
    description: "PCB Design Services",
    url: "/pcb-design",
  },
  {
    id: 5,
    image: "/services/industrial-design.png",
    title: "Industrial Design",
    description: "Industrial Design & Mechanical Engineering",
    url: "/case-studies/BLE-tag-with-Wireless-Charging",
  },
]

export function ServicesSection() {
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
    <section className="bg-background min-h-screen flex flex-col justify-center py-16 lg:py-24">
      <div className="w-full px-8 md:px-12">
        <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h2 style={{ fontFamily: "'Supermolot', sans-serif" }} className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Case Studies</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Explore our comprehensive solutions and successful project implementations.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="h-12 w-12 rounded-full border-zinc-200 transition-all hover:bg-zinc-100 disabled:opacity-30"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="h-12 w-12 rounded-full border-zinc-200 transition-all hover:bg-zinc-100 disabled:opacity-30"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5"
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-64 shrink-0 snap-start sm:w-72 md:w-80">
              <ServicesCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                i === 0 ? "bg-foreground scale-110" : "bg-zinc-200",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
