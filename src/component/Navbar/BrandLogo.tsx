import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BrandLogo = () => {
  return (
    <>
     <Link href="/" className="inline-flex items-center gap-3 select-none group">
      <div className="w-10 h-10 rounded-xl bg-[#2D3A34] flex items-center justify-center overflow-hidden">
        <Image 
          src="/assets/logo.png" 
          alt="Verda Logo" 
          width={26} 
          height={26}
          className="object-contain"
        />
      </div>
      <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl tracking-tight text-[#2D3A34]">
        Verda
      </span>
    </Link>
    </>
  )
}

export default BrandLogo

