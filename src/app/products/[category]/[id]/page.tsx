import React from "react";
import { notFound } from "next/navigation";
import { CollectionCategory } from "@/types/product";
import { getSingleProduct } from "@/lib/api/products";
import ProductDetailsContainer from "@/app/product-details/[id]/page";

interface DetailsPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: DetailsPageProps) {
  const resolvedParams = await params;
  const { category, id } = resolvedParams;

  const categoryName = category as CollectionCategory;

  // Single Product Data
  const product = await getSingleProduct(categoryName, id);

  // If product not found, trigger 404
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EEEFE0]">
      <ProductDetailsContainer product={product} category={categoryName} />
    </div>
  );
}
