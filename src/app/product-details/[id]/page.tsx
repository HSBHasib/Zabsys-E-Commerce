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
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
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
