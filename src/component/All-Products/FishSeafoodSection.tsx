import React from "react";
import { getProductsByCategory } from "@/lib/api/products";
import ProductSectionWrapper from "./ProductSectionWrapper";
import ProductCard from "./ProductCard";


const FishSeafoodSection = async () => {
  const products = await getProductsByCategory("fish-seafood", 4);

  return (
    <ProductSectionWrapper
      title="Fish & Seafood"
      description="Ocean-fresh fish and shellfish, flash-frozen or chilled."
      categorySlug="fish-seafood"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          category="fish-seafood"
        />
      ))}
    </ProductSectionWrapper>
  );
};

export default FishSeafoodSection;
