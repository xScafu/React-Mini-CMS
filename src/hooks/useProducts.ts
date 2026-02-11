import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../core/ServerService";

import type { Product } from "../core/Types";
import { useSelector } from "react-redux";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const filters = useSelector((state) => state.filter.filterArray as string[]);
  const { sortingAscendance, sortingDescendance } = useSelector(
    (state) => state.sorting,
  );
  const search = useSelector((state) => state.search.searchName);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data as Product[]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Per evitare ricalcoli inutili su grandi array
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // FILTER
    if (filters.length > 0) {
      result = result.filter((product) =>
        filters.includes(product.categoria.nomeCategoria.toLowerCase()),
      );
    }

    // SORT
    if (sortingAscendance) {
      result.sort((a, b) => b.nome.localeCompare(a.nome));
    } else if (sortingDescendance) {
      result.sort((a, b) => a.nome.localeCompare(b.nome));
    } else {
      result.sort((a, b) => a.id.localeCompare(b.id));
    }

    // SEARCH
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter((product) =>
        product.nome?.toLowerCase().includes(searchLower),
      );
    }

    return result;
  }, [products, filters, sortingAscendance, sortingDescendance, search]);

  return { filteredProducts, loading };
}
