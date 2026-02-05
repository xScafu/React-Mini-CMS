import { useEffect, useState } from "react";
import { getCategories } from "../../../core/ServerService";
import type { Category } from "../../../core/Types";

export function useCategories() {
  const [categories, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((data) => setCategory(data as Category[]))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
