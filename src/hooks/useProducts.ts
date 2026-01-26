import { useEffect, useState } from "react";
import { getProducts } from "../core/ServerService";

import type { Product } from "../core/Types";
import { useSelector } from "react-redux";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const filters: [] = useSelector((state) => state.filter.filterArray);
  const { sortingAscendance, sortingDescendance } = useSelector(
    (state) => state.sorting
  );

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data as Product[]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts =
    filters.length === 0
      ? products
      : products.filter((product) =>
          filters.includes(product.tipo.toLowerCase())
        );

  if (sortingAscendance) {
    filteredProducts.sort((o1, o2) => o2.nome.localeCompare(o1.nome));
  } else if (sortingDescendance) {
    filteredProducts.sort((o1, o2) => o1.nome.localeCompare(o2.nome));
  } else {
    filteredProducts.sort((o1, o2) => o1.id.localeCompare(o2.id));
  }

  return { filteredProducts, loading };
}
