import { Card } from '@/components/ui/card'
import { 
  Rocket, 
  Users, 
  Lightbulb, 
  Zap,
  Target,
  BookOpen 
} from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Accelerated Growth',
    description: 'Fast-track your career with rapid learning opportunities in cutting-edge technology.'
  },
  {
    icon: Users,
    title: 'End-to-End Exposure',
    description: 'Work on the complete product lifecycle, from concept to production, not just isolated tasks.'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Collaborate side-by-side with experienced industry veterans and learn from their expertise.'
  },
  {
    icon: Lightbulb,
    title: 'Cutting-Edge Tech',
    description: 'Get hands-on with the latest innovations in AI, Hardware Design, and Industrial Design.'
  },
  {
    icon: Target,
    title: 'Flexible Culture',
    description: 'Thrive in a friendly environment that respects your work-style and encourages innovation.'
  },
  {
    icon: BookOpen,
    title: 'Professional Development',
    description: 'Access continuous learning opportunities and develop skills that matter in the industry.'
  }
]

export function WhyJoinQmax() {
  return (
    <section id="why-join" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Join Qmax?</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            We're building a culture of innovation where your contribution matters and your growth is our priority.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow group">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
