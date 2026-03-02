'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Briefcase, ChevronRight, Code2, Cpu } from 'lucide-react'

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

function scrollToOpening(title: string) {
  const id = slugify(title)
  const el = document.getElementById(id)
  if (!el) return

  const stickyHeader = document.querySelector('header')
  const headerHeight = stickyHeader ? stickyHeader.getBoundingClientRect().height : 0
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 100

  window.scrollTo({ top, behavior: 'smooth' })

  // Brief highlight flash
  el.classList.add('ring-2', 'ring-zinc-400', 'ring-offset-2')
  setTimeout(() => el.classList.remove('ring-2', 'ring-zinc-400', 'ring-offset-2'), 1500)
}

export function OpeningsList() {
  const categories = [
    {
      title: 'Engineering Roles',
      roles: [
        'Hardware Design Engineer',
        'Firmware Development Engineer',
        'Embedded Systems Test Engineer',
        'RF Design Engineer',
        'Signal Integrity (SI) Engineer',
        'PCB Designer',
        'PCB Librarian',
        'Mechanical Design Engineer',
        'Industrial Designer',
      ],
      icon: Cpu,
    },
    {
      title: 'Software & Web',
      roles: ['Full-Stack Web Developer'],
      icon: Code2,
    },
    {
      title: 'Business',
      roles: ['Business Development Executive'],
      icon: Briefcase,
    },
  ]

  const totalRoles = categories.reduce((sum, category) => sum + category.roles.length, 0)

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(161,98,7,0.06),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(24,24,27,0.06),_transparent_36%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          {/* <Badge className="mb-4 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-zinc-700 hover:bg-zinc-100">
            {totalRoles} Open Roles
          </Badge> */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Current Openings
          </h2>
          <p className="text-base text-zinc-600 md:text-lg">
            Explore full-time opportunities across engineering, software, and business teams.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <Card
                key={category.title}
                className="group relative overflow-hidden rounded-2xl border-zinc-200/90 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-100/40 via-white to-zinc-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex items-start justify-between gap-3 border-b border-zinc-200 pb-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/5 text-zinc-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900">{category.title}</h3>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {category.roles.length}
                  </Badge>
                </div>

                <ul className="space-y-3">
                  {category.roles.map((role) => (
                    <li key={role}>
                      <button
                        onClick={() => scrollToOpening(role)}
                        className="group/item flex w-full items-start gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm text-zinc-700 transition-all duration-150 hover:bg-zinc-100 hover:text-zinc-900 md:text-base"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-400 transition-transform duration-150 group-hover/item:translate-x-0.5 group-hover/item:text-zinc-700" />
                        <span className="font-medium leading-relaxed">{role}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
