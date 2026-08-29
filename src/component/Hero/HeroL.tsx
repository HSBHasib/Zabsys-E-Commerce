'use client'

import React from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

const PILL_TAGS = [
  'FREE delivery over $60',
  'Same-day dispatch',
  'Quality checked'
]

// Framer motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', damping: 20, stiffness: 100 } 
  }
}

export const HeroL = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-5 w-full lg:col-span-6"
    >
      
      {/* Top Section Header Text */}
      <motion.span 
        variants={itemVariants} 
        className="text-[11px] tracking-[0.15em] font-bold text-[#2D3A34]/80 uppercase"
      >
        Today's Market - Daily Fresh Deals
      </motion.span>

      {/* Main Impact Heading */}
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl xl:text-[56px] font-bold tracking-tight text-black"
      >
        Fresh from the farm, same-day to your door.
      </motion.h1>

      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="text-sm md:text-base text-[#2D3A34] max-w-lg leading-relaxed"
      >
        Locally sourced produce, pantry staples and pantry — picked in the morning, delivered by evening. Every order is quality-checked before dispatch.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
        <Link 
          href="/all-categories"
          className="px-6 py-3  bg-[#2D3A34] hover:bg-[#2D3A34]/90 text-white font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95"
        >
          Shop Now &rarr;
        </Link>
        <Link 
          href="/offers"
          className="px-6 py-3 hover:bg-[#D1D8BE]/50 border border-[#819A91]/50 text-[#2D3A34] font-semibold text-sm rounded-xl transition-all active:scale-95"
        >
          Today's Deals
        </Link>
      </motion.div>

      {/* Mini Bottom */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 ">
        {PILL_TAGS.map((tag, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-[#EEEFE0]/70 hover:bg-[#D1D8BE]/60 border border-[#819A91]/50 rounded-full text-[10px] font-medium text-[#2D3A34]/80 shadow-xs"
          >
            {tag}
          </span>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default HeroL
