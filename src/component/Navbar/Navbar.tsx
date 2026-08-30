"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import { NavSearchBar } from "./NavSearchBar";
import Link from "next/link";
import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, loading } = useAuth();

  if (loading) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full max-w-7xl mx-auto lg:h-20 bg-[#EEEFE0] border-b border-[#D1D8BE] sticky top-0 z-40 px-4 md:px-8 lg:px-12 py-4 lg:py-0 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
      {/* Container for Top Row on Mobile */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        {/* LeftSide - Brand Logo */}
        <BrandLogo />

        {/* RightSide - Menu Button on Mobile */}
        <button
          onClick={toggleMenu}
          className="p-2 -ml-2 rounded-lg bg-[#D1D8BE]/35 hover:bg-[#D1D8BE]/50 text-[#2D3A34] lg:hidden transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Middle - Search Bar */}
      <div className="w-full lg:flex-1 lg:max-w-2xl">
        <NavSearchBar />
      </div>

      {/* RightSide - Desktop Authentication Actions */}
      {/* <div className="hidden lg:flex items-center gap-2.5">
        <Link 
          href="/auth/login" 
          className="px-5 py-2.5 text-sm font-semibold text-[#2D3A34] bg-[#2D3A34]/10 hover:bg-[#2D3A34]/15 rounded-xl transition-colors"
        >
          Login
        </Link>
        <Link 
          href="/auth/signup" 
          className="px-5 py-2.5 bg-[#2D3A34] hover:bg-[#2D3A34]/90 text-sm font-semibold text-[#EEEFE0] rounded-xl transition-all shadow-sm active:scale-95"
        >
          Register
        </Link>
      </div> */}

      <div className="hidden lg:flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#C5CEBA] bg-[#EBEFE5] px-4 py-2">
              <FiUser className="text-[#1D331C]" />
              <span className="text-xs font-bold text-[#1D331C]">
                Hi, {user?.name}
              </span>
            </div>

            <button
              onClick={() => logout()}
              className="flex items-center gap-1.5 rounded-2xl bg-red-600/10 px-3.5 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-600 hover:text-white cursor-pointer"
            >
              <FiLogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-xs font-bold text-[#1D331C] hover:underline"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded-2xl bg-[#1D331C] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#152614]"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Drawer Slide-out Component */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Navbar;
