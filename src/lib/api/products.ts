import { CollectionCategory, Product } from "@/types/product";
import { serverFetch } from "../core/server";

// 1. Fetch All Products by Category
export async function getProductsByCategory(
  category: CollectionCategory,
  limit?: number
): Promise<Product[]> {
  try {
    const data = await serverFetch<Product[]>(`${category}/objects`);
    return limit ? data.slice(0, limit) : data;
  } catch (error) {
    console.error(`Error fetching category [${category}]:`, error);
    return [];
  }
}


// Single Product Fetcher by Category and ID
export async function getSingleProduct(
  category: CollectionCategory,
  id: string
): Promise<Product | null> {
  try {
    const data = await serverFetch<Product>(`${category}/objects/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching single product [ID: ${id}] in [${category}]:`, error);
    return null; 
  }
}
