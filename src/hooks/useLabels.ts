import { useEffect, useState } from "react";
import { getLabels } from "../core/ServerService";

export function useLabels() {
  const [loading, setLoading] = useState(true);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    getLabels()
      .then((data) => {
        setLabels(data as string[]);
      })
      .finally(() => setLoading(false));
  }, [loading]);

  return { loading, labels };
}
