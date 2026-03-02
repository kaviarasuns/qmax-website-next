'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary"></div>
          <span className="text-xl font-bold text-foreground">Qmax Systems</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 md:flex">
          <Link href="#openings" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Current Openings
          </Link>
          <Link href="#internships" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Internships
          </Link>
        </div>

        <div className="hidden md:block">
          <a href="https://careers.qmaxsys.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Apply Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="#openings" className="text-sm font-medium text-foreground/70">
              Current Openings
            </Link>
            <Link href="#internships" className="text-sm font-medium text-foreground/70">
              Internships
            </Link>
            <a href="https://careers.qmaxsys.com/" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
