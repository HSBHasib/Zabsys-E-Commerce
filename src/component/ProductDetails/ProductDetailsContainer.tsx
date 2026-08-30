import React from "react";
import { Product, CollectionCategory } from "@/types/product";
import ProductGallery from "@/component/ProductDetails/ProductGallery";
import ProductInfo from "@/component/ProductDetails/ProductInfo";

interface ProductDetailsContainerProps {
  product: Product;
  category: CollectionCategory;
}

const ProductDetailsContainer = ({
  product,
  category,
}: ProductDetailsContainerProps) => {
  const images = product.data?.images || [];

  return (
    <div className="w-full bg-[#EEEFE0] px-4 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[380px_1fr] gap-8 md:gap-10 items-start">
          {/* Left Side: Product Gallery */}
          <ProductGallery images={images} productName={product.name} />

          {/* Right Side: Product Details */}
          <ProductInfo product={product} category={category} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;

