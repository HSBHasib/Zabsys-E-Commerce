"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  images?: string[];
  productName: string;
}

const ProductGallery = ({ images = [], productName }: ProductGalleryProps) => {
  const imageList = images.length > 0 ? images : ["/placeholder.jpg"];
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  return (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col gap-4 w-full mx-auto max-w-95"
  >
    {/* Main Image Container */}
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl p-6 bg-[#E3E5D2]/45 border border-[#D5DDD0]">
      <Image
        src={selectedImage}
        alt={productName}
        fill
        priority
        className="object-contain p-5 transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Thumbnails */}
    {imageList.length > 1 && (
      <div className="grid grid-cols-4 gap-3">
        {imageList.map((img, idx) => {
          const isSelected = selectedImage === img;
          return (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-[#EBEFE5] p-2 border-2 transition-all ${
                isSelected
                  ? "border-[#1D331C] ring-2 ring-[#1D331C]/10 scale-95"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          );
        })}
      </div>
    )}
  </motion.div>
);
};

export default ProductGallery;

