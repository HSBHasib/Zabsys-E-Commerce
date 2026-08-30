import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  category: string;
}

const ProductCard = ({ product, category }: ProductCardProps) => {
  const { name, data, id } = product;
  const productImg = data?.images?.[0] || "/placeholder.jpg";
  const firstVariant = data?.variants?.[0];
  const price = firstVariant?.price || "0.00 Tk";
  const weight = firstVariant?.weight || "";

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#C3CDBA]/50 p-3 transition-shadow hover:shadow-md">
      
      {/* Top Container */}
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#BAC4B1] flex flex-col justify-between">

        {/* Tag & Wishlist */}
        <div className="flex items-center justify-between z-10">
          {data?.tag && (
            <span className="absolute left-2 top-2 rounded-md bg-[#A5B39A]/75 px-2.5 py-1 text-xs font-bold capitalize tracking-wide text-[#233522]">
              {data.tag}
            </span>
          )}
          <button
            type="button"
            aria-label="Add to wishlist"
            className="absolute right-2 top-2 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white cursor-pointer"
          >
            <BiHeart className="h-3.5 w-3.5 text-[#233522]" />
          </button>
        </div>

        {/* Product Image */}
        <Link
          href={`/products/${category}/${id}`}
          className="relative h-40 w-full"
        >
          <Image
            src={productImg}
            alt={name}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Bottom Product Details */}
      <div className="my-3 flex flex-col gap-1 px-1">
        <Link href={`/products/${category}/${id}`}>
          <h3 className="font-semibold text-lg text-[#1A2E19] line-clamp-1 hover:underline">
            {name}
          </h3>
        </Link>
        <p className="text-xs font-medium text-[#4A5D48]">
          Weight: {weight}
        </p>

        {/* Action Row */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-[#1A2E19] tracking-tighter">
            {price}
          </span>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg bg-[#1D331C] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#152614] cursor-pointer"
          >
            Add to Cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
