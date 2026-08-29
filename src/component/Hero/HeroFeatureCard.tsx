import React from "react";
import Image from "next/image";

interface HeroCardProps {
  name: string;
  price: string;
  imgUrl: string;
}

export const HeroFeatureCard = ({
  name,
  price,
  imgUrl,
}: HeroCardProps) => {
  return (
    <div className="group flex flex-col gap-3 w-full bg-[#EEEFE0]/70 border border-[#D1D8BE] p-3 hover:bg-[#EEEFE0] hover:border-[#819A91] rounded-2xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative w-full h-45 bg-gray-300/20 rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={imgUrl}
          alt={`${name} visual`}
          fill
          priority
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Bottom item details */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-semibold text-[#2D3A34]">{name}</span>
        <span className="text-sm font-bold text-[#2D3A34]">{price}</span>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
