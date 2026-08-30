import React from "react";
import Link from "next/link";
import { CollectionCategory, Product } from "@/types/product";
import { FiArrowLeft as BackIcon } from "react-icons/fi";
import { getProductsByCategory } from "@/lib/api/products";
import ProductCard from "@/component/All-Products/ProductCard";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}
    
const CategoryPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category as CollectionCategory;

  const products: Product[] = await getProductsByCategory(categoryName);

  return (
    <div className="min-h-screen bg-[#EEEFE0] px-4 py-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Navigation Header */}
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B5E49] transition-colors hover:text-[#1D331C]"
            >
              <BackIcon className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="font-serif text-2xl font-bold capitalize text-[#1D331C] md:text-5xl">
              {categoryName} Collection
            </h1>
          </div>

          <div className="rounded-full bg-[#D4DDD0] px-4 py-2 text-xs font-semibold text-[#1D331C]">
            Total Items: {products.length}
          </div>
        </div>

        {/* Existing ProductCard */}
        {products.length === 0 ? (
          <div className="rounded-3xl border border-[#D5DDD0] bg-[#D4DDD0]/50 p-12 text-center font-medium text-[#4B5E49]">
            No items available in this category right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id || product.name}
                product={product}
                category={categoryName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
