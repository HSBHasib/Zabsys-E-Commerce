"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMinus, FiPlus, FiTruck, FiShield, FiClock } from "react-icons/fi";
import { CollectionCategory, Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
  category: CollectionCategory;
}

const ProductInfo = ({ product, category }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const defaultPrice = product.data?.variants?.[0]?.price || "0.00 Tk";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="flex flex-col gap-6 w-full"
    >
      {/* Category Tag */}
      <div>
        <span className="rounded-full bg-[#DADDCE] px-3.5 py-1 text-sm font-bold uppercase tracking-wider text-[#1D331C]">
          {category.replace("-", " ")}
        </span>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-[#1D331C] md:text-4xl">
          {product.name}
        </h1>
      </div>

      {/* Price & Stock status */}
      <div className="flex flex-col gap-2">
        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl tracking-tighter font-bold text-[#1D331C]">
            {defaultPrice}
          </span>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
          <span className="text-sm font-medium text-[#2E7D32]">
            {product.data?.stockQuantity > 0
              ? `In stock — ${product.data.stockQuantity} Available`
              : "Out of stock"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#3E4F3C]">
        {product.data?.description ||
          "Freshly sourced premium item. Hand-selected for top quality, flash-chilled on delivery to preserve peak freshness, taste, and nutrition."}
      </p>

      {/* Quantity Increment/Decrement Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-xl bg-[#D4DDD0] p-1 border border-[#C5CEBA]">
          <button
            onClick={handleDecrease}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#1D331C] transition-colors hover:bg-[#C5CEBA] active:scale-95"
            aria-label="Decrease quantity"
          >
            <FiMinus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm font-bold text-[#1D331C]">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#1D331C] transition-colors hover:bg-[#C5CEBA] active:scale-95"
            aria-label="Increase quantity"
          >
            <FiPlus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons (Buy & Add to Cart) */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          disabled
          className="flex-1 rounded-xl bg-[#1D331C] py-3.5 text-center text-sm font-semibold text-white opacity-90 transition-all hover:bg-[#152614] cursor-not-allowed"
        >
          Buy Now →
        </button>
        <button
          disabled
          className="flex-1 rounded-xl border border-[#1D331C] bg-transparent py-3.5 text-center text-sm font-semibold text-[#1D331C] transition-all hover:bg-[#1D331C]/5 cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>

      {/* Bottom Feature Cards */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="flex flex-col gap-1 rounded-2xl bg-[#D4DDD0]/70 p-3 text-[#1D331C]">
          <div className="flex items-center gap-2">
            <FiTruck className="h-4 w-4 text-[#1D331C]" />
            <span className="text-xs font-bold">Same-day</span>
          </div>
          <span className="text-[10px] text-[#4B5E49]">Order before 4 PM</span>
        </div>

        <div className="flex flex-col gap-1 rounded-2xl bg-[#D4DDD0]/70 p-3 text-[#1D331C]">
          <div className="flex items-center gap-2">
            <FiClock className="h-4 w-4 text-[#1D331C]" />
            <span className="text-xs font-bold">Chilled</span>
          </div>
          <span className="text-[10px] text-[#4B5E49]">Cold-chain packed</span>
        </div>

        <div className="flex flex-col gap-1 rounded-2xl bg-[#D4DDD0]/70 p-3 text-[#1D331C]">
          <div className="flex items-center gap-2">
            <FiShield className="h-4 w-4 text-[#1D331C]" />
            <span className="text-xs font-bold">Fresh</span>
          </div>
          <span className="text-[10px] text-[#4B5E49]">
            Sourced this morning
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductInfo;

