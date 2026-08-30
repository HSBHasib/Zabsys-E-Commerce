"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Dropdown, Button, Label } from "@heroui/react";
import { CATEGORIES } from "@/lib/Data/Categories";

export const NavSearchBar = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLabel, setSelectedLabel] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  // Category change & routing handle
  const handleCategorySelect = (key: React.Key) => {
    const categoryKey = String(key);
    setSelectedCategory(categoryKey);

    const found = CATEGORIES.find((item) => item.id === categoryKey);
    if (found) {
      setSelectedLabel(found.label);
    }

    // Specific route redirect
    if (categoryKey === "all") {
      router.push("/");
    } else {
      router.push(`/products/${categoryKey}`);
    }
  };

  // Search Submit Handler
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    router.push(`/products/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex h-12 w-full items-center overflow-hidden rounded-full border border-[#D1D8BE] bg-[#D1D8BE]/40 transition-all duration-200 focus-within:border-[#819A91] focus-within:ring-1 focus-within:ring-[#819A91]/50 lg:max-w-2xl"
    >
      {/* Dropdown */}
      <Dropdown>
        <Dropdown.Trigger>
          <Button
            aria-label="Select Category"
            variant="secondary"
            className="flex h-10.5 w-[96%] mx-auto rounded-tl-full rounded-bl-full rounded-tr-sm rounded-br-sm shrink-0 items-center gap-2 border-none bg-transparent px-4 text-sm font-medium text-[#2D3A34] shadow-none hover:bg-[#2D3A34]/8 md:px-5"
          >
            <span className="truncate max-w-30 md:max-w-none">
              {selectedLabel}
            </span>
            <FiChevronDown className="shrink-0 text-xs text-[#2D3A34]/70" />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Menu
            onAction={handleCategorySelect}
            className="min-w-45 rounded-2xl bg-[#EBEFE5] p-1.5 shadow-md border border-[#D1D8BE]"
          >
            {CATEGORIES.map((cat) => (
              <Dropdown.Item
                key={cat.id}
                id={cat.id}
                textValue={cat.label}
                className="rounded-xl px-3 py-2 text-sm text-[#2D3A34] hover:bg-[#D1D8BE]/60 cursor-pointer transition-colors"
              >
                <Label className="cursor-pointer">{cat.label}</Label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>

      {/* Full Height Vertical Divider */}
      <div className="h-1/2 w-[1px] shrink-0 bg-[#2D3A34]/20" />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search grocery, produce, pantry..."
        className="h-full w-full bg-transparent px-4 text-sm text-[#2D3A34] placeholder-[#2D3A34]/50 outline-none border-none"
        disabled
      />

      {/* Search Button Container */}
      <div className="flex h-full shrink-0 items-center py-1.5 pr-1.5">
        <button
          type="submit"
          className="flex h-full cursor-pointer items-center gap-2 rounded-full bg-[#819A91] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#819A91]/80 active:scale-95 sm:px-5"
        >
          <FiSearch className="text-base" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
};

export default NavSearchBar;