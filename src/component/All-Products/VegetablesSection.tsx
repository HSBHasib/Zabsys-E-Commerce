import { getProductsByCategory } from "@/lib/api/products";
import ProductSectionWrapper from "./ProductSectionWrapper";
import ProductCard from "./ProductCard";

const VegetablesSection = async () => {
  const products = await getProductsByCategory("vegetables", 4);

  return (
    <ProductSectionWrapper
      title="Organic Vegetables"
      description="Farm-fresh green vegetables high in nutrients."
      categorySlug="vegetables"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category="vegetables" />
      ))}
    </ProductSectionWrapper>
  );
}

export default VegetablesSection
