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
      {/* Hero Image with Overlaid Content */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full overflow-hidden">
        <img
          src="/careers/image1.jpg"
          alt="Design and Engineering Team at Work"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-5 md:p-8 lg:p-10">
          {/* Description - top */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="border border-white/40 bg-black/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 max-w-3xl">
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed text-justify">
                We are looking for engineering enthusiasts ready to dive into
                cutting-edge technology. From Hardware and AI to Industrial Design,
                you will gain hands-on experience in full-cycle product development.
                Enjoy a friendly culture that prioritizes your career growth, giving
                you the opportunity to work with experienced engineers and solve
                complex challenges every day.
              </p>
            </div>
          </div>

          {/* Title + Nav Buttons - bottom */}
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 md:gap-6">
            {/* Title Box */}
            <div className="border border-zinc-800 bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-7 lg:p-8 max-w-[300px] sm:max-w-md lg:max-w-xl">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold tracking-tight text-zinc-900 leading-tight">
                Design, Develop, and Deploy Cutting-Edge Products
              </h1>
            </div>

            {/* Category Navigation Buttons */}
            <div className="flex flex-row sm:flex-col gap-1.5 sm:gap-2 md:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`border border-zinc-800 backdrop-blur-sm px-3 sm:px-5 md:px-8 py-1.5 sm:py-2 md:py-3 text-[11px] sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-zinc-900 text-white'
                      : 'bg-white/95 text-zinc-900 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
