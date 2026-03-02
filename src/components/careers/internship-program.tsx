import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Award, TrendingUp } from 'lucide-react'

const internshipDomains = [
  { name: 'Hardware Design', slots: 1 },
  { name: 'Firmware / Embedded', slots: 3 },
  { name: 'RF / Antenna', slots: 3 },
  { name: 'PCB Design', slots: 2 },
  { name: 'Mechanical / Industrial Design', slots: 2 },
  { name: 'Software / Web', slots: 1 },
  { name: 'Testing & Validation', slots: 1 },
  { name: 'Business Development', slots: 1 }
]

const internshipBenefits = [
  {
    icon: Clock,
    title: 'Structured Duration',
    description: '5-6 months for project-linked internships or 6-12 months for deep R&D tracks'
  },
  {
    icon: TrendingUp,
    title: 'Career Pathway',
    description: 'High-performing interns are considered for pre-placement offers (PPO)'
  },
  {
    icon: Award,
    title: 'Stipend & Recognition',
    description: 'Performance-based stipend, completion bonuses, and excellence recognition'
  },
  {
    icon: CheckCircle2,
    title: 'Mentored Learning',
    description: 'Work with senior engineers through weekly/monthly reviews and real deliverables'
  }
]

export function InternshipProgram() {
  return (
    <section id="internships" className="py-14 md:py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Internship Program</h2>
          <p className="text-lg text-foreground/70">
            Bridge the gap between academic theory and industrial application. Join our rigorous, technical internship program designed for engineering enthusiasts.
          </p>
        </div>

        {/* Available Domains */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Available Internship Domains</h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {internshipDomains.map((domain, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{domain.name}</h4>
                  <Badge className="bg-primary text-primary-foreground">{domain.slots} slot{domain.slots > 1 ? 's' : ''}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Benefits */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Why Intern at Qmax?</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {internshipBenefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card key={i} className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Eligibility & Process */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">Eligibility Criteria</h3>
            <ul className="space-y-3">
              {[
                'BE / BTech / ME / MTech in ECE, EEE, CSE, IT, Mechanical, or Instrumentation',
                'Preference for final-year students or recent graduates',
                'Strong discipline and methodical troubleshooting mindset',
                'Proficiency in C programming or core electronics fundamentals',
                'Ability to read datasheets and use lab equipment'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">Selection Process</h3>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Application', desc: 'Submit resume and portfolio' },
                { step: '2', title: 'Screening', desc: 'Academic credentials review' },
                { step: '3', title: 'Technical Assessment', desc: 'Core knowledge evaluation' },
                { step: '4', title: 'Interview', desc: 'Discussion with technical leads' },
                { step: '5', title: 'Offer', desc: 'Receive internship offer letter' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">Internship Terms</h3>
            <ul className="space-y-3">
              {[
                'Strict adherence to office hours and professional conduct is expected',
                'NDA signing is mandatory before project allocation',
                'Intellectual property created during internship belongs to Qmax Systems',
                'Internship may be terminated for confidentiality breaches or repeated underperformance'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Location and CTA */}
        <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="mb-4 text-lg font-semibold text-foreground">Primary Location: Chennai</p>
          <p className="mb-6 text-foreground/70">
            Join our R&D center to work on cutting-edge technology and gain hands-on experience in full-cycle product development.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Apply for Internship
          </Button>
        </div>
      </div>
    </section>
  )
}
