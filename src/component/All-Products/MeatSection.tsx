import React from 'react'
import { getProductsByCategory } from "@/lib/api/products";
import ProductSectionWrapper from "./ProductSectionWrapper";
import ProductCard from "./ProductCard";


const MeatSection = async () => {
  const products = await getProductsByCategory("meat", 4);

  return (
    <ProductSectionWrapper
      title="Meat & Poultry"
      description="Chilled fresh cuts, trimmed and vacuum-packed."
      categorySlug="meat"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category="meat" />
      ))}
    </ProductSectionWrapper>
  );
}

export default MeatSection
