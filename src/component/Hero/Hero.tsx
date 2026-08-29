import React from 'react'
import { HeroL } from './HeroL'
import { HeroR } from './HeroR'

export const Hero = () => {
  return (
    <div className="w-full bg-[#EEEFE0] px-4 md:px-8 lg:px-12 pt-8">
      <div className="w-full max-w-7xl mx-auto bg-linear-to-r from-[#d2dfcd]/70 to-[#b9cca8]/70 rounded-[2.5rem] border border-[#D1D8BE] p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center overflow-hidden">
        
        {/* Left Segment */}
        <HeroL />

        {/* Right Segment */}
        <HeroR />

      </div>
    </div>
  )
}

export default Hero
