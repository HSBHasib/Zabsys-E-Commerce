import React from "react";
import FishSeafoodSection from "./FishSeafoodSection";
import FruitsSection from "./FruitsSection";
import MeatSection from "./MeatSection";
import VegetablesSection from "./VegetablesSection";

const Products = () => {
  return (
    <div className="h-full px-4 py-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <VegetablesSection />
        <FishSeafoodSection />
        <MeatSection />
        <FruitsSection />
      </div>
    </div>
  );
};

export default Products;

