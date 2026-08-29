import React from "react";
import { getProductsByCategory } from "@/lib/api/products";
import ProductSectionWrapper from "./ProductSectionWrapper";
import ProductCard from "./ProductCard";


const FruitsSection = async () => {
  const products = await getProductsByCategory("fruits", 4);

  return (
    <ProductSectionWrapper
      title="Fresh Fruits"
      description="Naturally sweet and fresh organic fruits."
      categorySlug="fruits"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category="fruits" />
      ))}
    </ProductSectionWrapper>
  );
};

export default FruitsSection;
