'use client'

import HeroSection from '@/components/HeroSection'
import OverviewSection from '@/components/OverviewSection'
import ImmuneAtlas from '@/components/ImmuneAtlas'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <OverviewSection />
      <ImmuneAtlas />
    </div>
  )
}
