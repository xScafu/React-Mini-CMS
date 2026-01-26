import { useEffect, useState } from "react";
import { getCards } from "../../../core/ServerService";
import type { Card } from "../../../core/Types";

export function useCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCards()
      .then((data) => setCards(data as Card[]))
      .finally(() => setLoading(false));
  }, []);
  return { cards, loading };
}
