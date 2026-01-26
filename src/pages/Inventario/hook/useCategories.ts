import { useEffect, useState } from "react";
import { getCategories } from "../../../core/ServerService";

export function useCategories() {
  const [categories, setCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((data) => setCategory(data as string[]))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
