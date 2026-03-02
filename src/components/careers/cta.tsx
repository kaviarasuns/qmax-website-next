import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Mail } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="relative overflow-hidden p-12 md:p-20">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
              Ready to Make an Impact?
            </h2>

            <p className="mb-8 text-lg text-foreground/70">
              Whether you're an experienced engineer or just starting your career, we have opportunities for you. Let's build the future of technology together.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a href="mailto:careers@qmaxsys.com">
                <Button size="lg" variant="outline" className="border-primary/30">
                  <Mail className="mr-2 h-4 w-4" />
                  Apply Us
                </Button>
              </a>
            </div>

            <p className="mt-6 text-sm text-foreground/60">
              Questions? Reach out to our recruitment team at{' '}
              <a href="mailto:careers@qmaxsys.com" className="underline underline-offset-2 hover:text-foreground/80 transition-colors">careers@qmaxsys.com</a>
              {' '}or call us at{' '}
              <a href="tel:+917305450580" className="underline underline-offset-2 hover:text-foreground/80 transition-colors">+91 73054 50580</a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
