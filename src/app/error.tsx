"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { FiHome, FiRefreshCw, FiAlertTriangle as IconTriangle } from "react-icons/fi";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Runtime Exception:", error);
  }, [error]);

  return (
    <div className="flex min-h-[75vh] w-full flex-col items-center justify-center bg-[#EEEFE0] px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-md flex-col items-center rounded-3xl border border-[#D5DDD0] bg-[#E3E5D2]/50 p-8 md:p-10"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#B2904B]/15 text-[#8C6B28]">
          <IconTriangle className="text-4xl" />
        </div>

        {/* Error Headline */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#8C6B28]">
          System Notice
        </span>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#1D331C] md:text-3xl">
          Something Went Wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#2D3A34]/80">
          We encountered a temporary issue while loading this page. Please try refreshing or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#819A91] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#819A91]/85 active:scale-95 cursor-pointer"
          >
            <FiRefreshCw className="text-base" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#D1D8BE] bg-[#E3E5D2] hover:bg-[#C9D1B9]/60 px-6 text-sm font-semibold text-[#2D3A34] transition-all duration-200 active:scale-95"
          >
            <FiHome className="text-base" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Error
