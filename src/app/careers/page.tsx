import { Hero } from '@/components/careers/hero'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { OpeningsList } from '@/components/careers/openings-list'
import { CTA } from '@/components/careers/cta'

export default function Careers() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <OpeningsList />
      <CurrentOpenings hideHeader={true} />
      <CTA />
    </main>
  )
}
