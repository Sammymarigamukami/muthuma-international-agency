import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function groupByCategory(products: Product[]): Record<string, Product[]> {
  const grouped: Record<string, Product[]> = {};
  for (const product of products) {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  }
  return grouped;
}