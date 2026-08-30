import { CollectionCategory, Product } from "@/types/product";
import { protectedFetch } from "../core/server";

// Fetch All Products by Category
export const getProductsByCategory = async (category: CollectionCategory, limit?: number): Promise<Product[]> => {
  try {
    const data = await protectedFetch<Product[]>(`/collections/${category}/objects`);
    return limit ? data.slice(0, limit) : data; 
  } catch {
    return [];
  }
}

// Single Product Fetcher by Category and ID
export const getSingleProduct = async (category: CollectionCategory, id: string): Promise<Product | null> => {
  try {
    return await protectedFetch<Product>(`/collections/${category}/objects/${id}`) || null;
  } catch {
    return null;
  }
}
