import { useEffect, useState } from "react";

import type { CardBilancio } from "../../../core/Types";
import { getBilancio } from "../../../core/ServerService";

export function useBilancio() {
  const [balance, setBalance] = useState<CardBilancio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBilancio()
      .then((data) => setBalance(data as CardBilancio[]))
      .finally(() => setLoading(false));
  }, []);
  return { balance, loading };
}
