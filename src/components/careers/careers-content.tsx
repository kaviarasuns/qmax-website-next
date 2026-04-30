'use client'

import { useState, useCallback } from 'react'
import { Hero } from './hero'
import { CurrentOpenings } from './current-openings'
import { CTA } from './cta'

export type TabId = 'full-time' | 'part-time' | 'internships'

export function CareersContent() {
  const [activeTab, setActiveTab] = useState<TabId>('full-time')

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab)
    // If user is scrolled past the tab bar, scroll back up to it
    requestAnimationFrame(() => {
      const tabBar = document.getElementById('careers-tab-bar')
      const nav = document.querySelector('nav')
      if (!tabBar) return
      const navHeight = nav ? nav.getBoundingClientRect().height : 0
      const tabBarTop = tabBar.offsetTop - navHeight
      if (window.scrollY > tabBarTop) {
        window.scrollTo({ top: tabBarTop, behavior: 'smooth' })
      }
    })
  }, [])

  return (
    <>
      <Hero />
      <CurrentOpenings activeTab={activeTab} onTabChange={handleTabChange} />
      <CTA />
    </>
  )
}
