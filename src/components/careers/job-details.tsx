import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2 } from 'lucide-react'

export function JobDetails() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Role: Firmware Development Engineer</h2>
          <p className="text-lg text-foreground/70">
            Learn more about one of our key engineering positions
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Role Summary</h3>
              <p className="text-foreground/70 leading-relaxed">
                Develop reliable, maintainable firmware for MCU/MPU-based embedded systems. Work on full-cycle product development from concept to deployment, collaborating with hardware engineers and gaining hands-on experience with cutting-edge technology.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="responsibilities" className="space-y-4">
            <Card className="p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Key Responsibilities</h3>
              <ul className="space-y-3">
                {[
                  'Firmware architecture and module-level design',
                  'Bare-metal or RTOS-based firmware development',
                  'Peripheral driver development',
                  'Hardware bring-up and board-level debugging',
                  'Code optimization, testing, and documentation',
                  'Version control and release management'
                ].map((responsibility, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <Card className="p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Required Skills</h3>
              <div className="grid gap-4">
                {[
                  { skill: 'Strong C programming', importance: 'Mandatory' },
                  { skill: 'MCU architecture understanding', importance: 'Essential' },
                  { skill: 'RTOS concepts', importance: 'Essential' },
                  { skill: 'Peripheral drivers', importance: 'Essential' },
                  { skill: 'JTAG/SWD debugging', importance: 'Essential' },
                  { skill: 'Git-based workflow', importance: 'Important' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-b-0">
                    <span className="text-foreground/70">{item.skill}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">{item.importance}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="qualifications" className="space-y-4">
            <Card className="p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Educational Qualifications</h3>
              <ul className="space-y-3">
                {[
                  'BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering',
                  'Diploma holders with strong embedded C experience may be considered',
                  'Interns: Final-year students with hands-on embedded projects'
                ].map((qualification, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
