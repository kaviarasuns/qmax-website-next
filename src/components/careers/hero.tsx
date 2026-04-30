'use client'

type TabId = 'full-time' | 'part-time' | 'internships'

const navItems: { label: string; id: TabId }[] = [
  { label: 'Full Time Roles', id: 'full-time' },
  { label: 'Part Time Roles', id: 'part-time' },
  { label: 'Internships', id: 'internships' },
]

interface HeroProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function Hero({ activeTab, onTabChange }: HeroProps) {
  return (
    <section className="bg-white pt-16">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full overflow-hidden">
        <img
          src="/careers/image1.jpg"
          alt="Design and Engineering Team at Work"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content Below Image */}
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-5 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 flex flex-col gap-6 md:gap-8">
        {/* Title */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 md:gap-6">
          {/* Title */}
          <div className="max-w-[300px] sm:max-w-md lg:max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold tracking-tight text-zinc-900 leading-tight">
              Design, Develop, and Deploy Cutting-Edge Products
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed text-justify">
            We are looking for engineering enthusiasts ready to dive into
            cutting-edge technology. From Hardware and AI to Industrial Design,
            you will gain hands-on experience in full-cycle product development.
            Enjoy a friendly culture that prioritizes your career growth, giving
            you the opportunity to work with experienced engineers and solve
            complex challenges every day.
          </p>
        </div>
      </div>
    </section>
  )
}
