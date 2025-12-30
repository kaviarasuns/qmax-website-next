import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServicesCardProps {
  title: string
  description: string
  image: string
  url: string
  className?: string
}

export function ServicesCard({ title, description, image, url, className }: ServicesCardProps) {
  return (
    <Link
      href={url}
      className={cn(
        "group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-xl bg-muted transition-all hover:ring-2 hover:ring-primary/20",
        className,
      )}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative z-10 p-5 text-white lg:p-6">
        <h3 className="mb-2 text-lg font-bold leading-tight md:text-xl drop-shadow-md">{title}</h3>
        <p className="mb-4 line-clamp-2 text-xs text-zinc-200 md:text-sm drop-shadow-sm">{description}</p>
        <div className="flex items-center gap-2 text-xs font-medium transition-colors hover:text-white/80">
          Read more
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
