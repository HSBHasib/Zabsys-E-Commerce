"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiAlertCircle, FiHome } from "react-icons/fi";

const NotFound = () => {
   return (
    <div className="flex min-h-[75vh] w-full flex-col items-center justify-center bg-[#EEEFE0] px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-md flex-col items-center p-8 md:p-10 rounded-3xl border border-[#D5DDD0] bg-[#E3E5D2]/50"
      >
        {/* Visual Icon Badge */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#819A91]/15 text-[#819A91] animate-bounce">
          <FiAlertCircle className="text-2xl" />
        </div>

        {/* 404 Headline */}
        <span className="text-base font-bold uppercase text-[#819A91]">
          404 Error
        </span>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#1D331C] md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#2D3A34]/80">
          Oops! The page or grocery category you are looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#819A91] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#819A91]/85 active:scale-95"
          >
            <FiHome className="text-base" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound
