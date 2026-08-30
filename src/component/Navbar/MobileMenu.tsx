"use client";

import React from "react";
import Link from "next/link";
import { FiLogOut, FiUser, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { useAuth } from "@/hooks/useAuth";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { user, isAuthenticated, logout, loading } = useAuth();

  if (loading) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-[#2D3A34]/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#EEEFE0] border-r border-[#D1D8BE] p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#D1D8BE]">
                  <BrandLogo />
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg bg-[#D1D8BE]/35 hover:bg-[#D1D8BE]/50 text-[#2D3A34] transition-colors cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                {/* Navigation Links */}
                {/* <nav className="flex flex-col gap-4 mt-8 font-medium text-[#2D3A34]">
                  <Link
                    href="/"
                    onClick={onClose}
                    className="py-2 transition-colors bg-[#E3E5D2] hover:bg-[#D5D8C1]/70 active:bg-[#D5D8C1]/70 p-3 rounded-lg"
                  >
                    All Categories
                  </Link>
                </nav> */}
              </div>

              {/* Bottom Section - Authentication Actions for Mobile */}
              <div className="flex flex-col gap-3 border-t border-[#D1D8BE] pt-6">
                {isAuthenticated ? (
                  /* Logged In User View */
                  <div className="flex flex-col gap-3">
                    {/* User Info */}
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-[#D1D8BE] bg-[#2D3A34]/10 px-5 py-3 text-sm font-semibold text-[#2D3A34]">
                      <FiUser className="h-4 w-4 text-[#2D3A34]" />
                      <span>Hi, {user?.name}</span>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={() => {
                        if (onClose) onClose();
                        logout();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600/10 px-5 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-600 hover:text-white active:scale-95 cursor-pointer"
                    >
                      <FiLogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={onClose}
                      className="w-full rounded-xl bg-[#2D3A34]/10 px-5 py-3 text-center text-sm font-semibold text-[#2D3A34] transition-colors hover:bg-[#2D3A34]/15"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={onClose}
                      className="w-full rounded-xl bg-[#2D3A34] px-5 py-3 text-center text-sm font-semibold text-[#EEEFE0] shadow-sm transition-all hover:bg-[#2D3A34]/90 active:scale-95"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

