'use client'

import React from 'react'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import BrandLogo from './BrandLogo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
     <AnimatePresence>
      {isOpen && (
        <>
          {/* Smooth Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#2D3A34]/40 backdrop-blur-sm lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#EEEFE0] border-r border-[#D1D8BE] p-6 flex flex-col justify-between lg:hidden shadow-2xl"
          >
            {/* Top Bar inside Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D1D8BE]">
                <BrandLogo />
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#D1D8BE]/40 text-[#2D3A34] transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 mt-8 font-medium text-[#2D3A34]">
                <Link href="/categories" onClick={onClose} className="py-2 transition-colors bg-[#E3E5D2] hover:bg-[#D5D8C1]/70 active:bg-[#D5D8C1]/70 p-3 rounded-lg">
                 All Categories
                </Link>
              </nav>
            </div>

            {/* Bottom Section - Authentication Actions for Mobile */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[#D1D8BE]">
              <Link
                href="/auth/login"
                onClick={onClose}
                className="w-full text-center px-5 py-3 text-sm font-semibold text-[#2D3A34] bg-[#2D3A34]/10 hover:bg-[#2D3A34]/15 rounded-xl transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                onClick={onClose}
                className="w-full text-center px-5 py-3 bg-[#2D3A34] hover:bg-[#2D3A34]/90 text-sm font-semibold text-[#EEEFE0] rounded-xl transition-all shadow-sm active:scale-95"
              >
                Sign Up
              </Link>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence> 
    </>
  )
}

export default MobileMenu

