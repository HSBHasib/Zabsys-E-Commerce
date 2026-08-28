import React from 'react'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

export const NavSearchBar = () => {
  return (
    <div className="relative w-full lg:max-w-2xl h-12 bg-[#D1D8BE]/40 rounded-full border border-[#D1D8BE] flex items-center overflow-hidden transition-all duration-200 focus-within:border-[#819A91] focus-within:ring-1 focus-within:ring-[#819A91]/50">
      
      {/* Category Dropdown Selection */}
      <button 
        type="button"
        className="h-full px-4 md:px-5 flex items-center gap-2 text-sm font-medium text-[#2D3A34] hover:bg-[#2D3A34]/15 transition-colors shrink-0"
      >
        <span className="truncate max-w-90px sm:max-w-640 md:max-w-none">All Categories</span>
        <FiChevronDown className="text-xs shrink-0 text-[#2D3A34]/70" />
      </button>

      {/* Full Height Vertical Divider */}
      <div className="w-[1px] h-1/2 bg-[#2D3A34]/20 shrink-0" />

      {/* Search Input*/}
      <input 
        type="text" 
        placeholder="Search grocery, produce, pantry..."
        className="w-full h-full px-4 bg-transparent border-none outline-none text-sm text-[#2D3A34] placeholder-[#2D3A34]/50"
      />

      {/* Search Button Container */}
      <div className="h-full py-1.5 pr-1.5 shrink-0 flex items-center">
        <button 
          type="button"
          className="h-full px-4 sm:px-5 bg-[#819A91] hover:bg-[#819A91]/80 active:scale-98 text-white font-semibold text-sm rounded-full flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
        >
          <FiSearch className="text-base" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>

    </div>
  )
}

export default NavSearchBar

