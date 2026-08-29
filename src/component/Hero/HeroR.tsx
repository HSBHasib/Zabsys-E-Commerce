'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import HeroFeatureCard from './HeroFeatureCard'
import productsData from './HeroR_Items.json' 

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', damping: 18, stiffness: 110 }
  }
}

export const HeroR = () => {
  return (
    <motion.div 
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:grid grid-cols-2 gap-x-5 gap-y-6 lg:col-span-6 w-[90%] mx-auto"
    >
      {productsData.map((product) => (
        <motion.div 
          key={product.id} 
          variants={cardVariants}
        >
          <HeroFeatureCard
            name={product.name}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default HeroR
