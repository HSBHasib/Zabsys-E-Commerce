export interface ProductVariant {
  weight: string;
  price: string;
}

export interface ProductData {
  tag: string;
  rating: number;
  stockQuantity: number;
  description: string;
  variants: ProductVariant[];
  highlights: string[];
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  data: ProductData;
  createdAt?: string;
}

export type CollectionCategory =
  | "vegetables"
  | "meat"
  | "fruits"
  | "fish-seafood";
  