import Link from "next/link";
import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

interface ProductSectionWrapperProps {
  title: string;
  description: string;
  categorySlug: string;
  icon?: ReactNode;
  children: ReactNode;
}

const ProductSectionWrapper = ({
  title,
  description,
  categorySlug,
  icon,
  children,
}: ProductSectionWrapperProps) => {
  return (
    <div className="my-10 w-full">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4DDD0] text-[#1D331C]">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-[#1D331C]">{title}</h2>
            <p className="text-xs text-[#556953]">{description}</p>
          </div>
        </div>

        <Link
          href={`/products/${categorySlug}`}
          className="flex items-center gap-1.5 rounded-full border border-[#1D331C] px-4 py-1.5 text-xs font-semibold text-[#1D331C] transition-colors hover:bg-[#1D331C] hover:text-white"
        >
          See All <BsArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Products in Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export default ProductSectionWrapper;
