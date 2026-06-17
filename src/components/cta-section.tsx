import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f6f9fc' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Start with <span className="text-red-500">Engineering</span> - Not Guesswork
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert guidance before you commit. Our complimentary consultations help identify risks and opportunities early.
            </p>
          </div>

          {/* Consultation Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* 1-Hour Consultation */}
            <Card className="bg-card border-border/50 border-t-2 border-t-red-500/50 shadow-lg shadow-foreground/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-red-500 uppercase tracking-wider">Free Consultation</span>
                    <h3 className="text-2xl font-bold">1-Hour Engineering Review</h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      "Architecture review and recommendations",
                      "SI/PI risk identification",
                      "Compliance roadmap discussion",
                      "Timeline and budget estimation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schematic Review */}
            <Card className="bg-card border-border/50 border-t-2 border-t-red-500/50 shadow-lg shadow-foreground/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-red-500 uppercase tracking-wider">Complimentary</span>
                    <h3 className="text-2xl font-bold">Schematic Review</h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      "Pin mapping error detection",
                      "Power delivery assessment",
                      "Signal integrity concerns",
                      "Compliance readiness check"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="text-base px-10 py-7 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
