import { DynamicIcon } from "lucide-react/dynamic";
import type { Card } from "../../../core/Types";

export default function Card({ cardID, cardLabel, cardValue, cardIcon }) {
  if (cardID) {
    return (
      <>
        <div className="card col-3">
          <div className="card-body flex">
            <div className="data-container">
              <h2 className="card-title">{cardLabel}</h2>
              <p className="js-card-value">{cardValue}</p>
            </div>
            <a href="#">
              <button type="button" className="btn-icon">
                <DynamicIcon name={cardIcon} />
              </button>
            </a>
          </div>
          <div className="card-footer">
            <span className="js-avvisi"></span>
          </div>
        </div>
      </>
    );
  }
}
