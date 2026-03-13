import type { Product } from "../core/Types";

export async function getProducts() {
  try {
    const response = await fetch(`/api/products`);
    const data: Product[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
