import { useCards } from "./hook/useCards.ts";
import Card from "./components/Card.component.tsx";

import CardBilancio from "./components/CardBilancio.component";

export default function Dashboard() {
  const { cards } = useCards();

  return (
    <>
      <section className="dashboard">
        <h1 className="section-title">Dashboard</h1>
        <div className="card-container grid">
          <div className="row cards-riassunto">
            {cards.map((card) => (
              <Card
                key={card.key}
                cardID={card.id}
                cardLabel={card.label}
                cardValue={card.value}
                cardIcon={card.icon}
              />
            ))}
          </div>
          <div className="row">
            <CardBilancio />
          </div>
        </div>
      </section>
    </>
  );
}
