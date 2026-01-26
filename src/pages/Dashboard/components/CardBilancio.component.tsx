import { Scale } from "lucide-react";
import { useBilancio } from "../hook/useBilancio";

export default function CardBilancio() {
  const { balance, loading } = useBilancio();

  const date = new Date();
  const currentDate = `${date.getDate()}-${
    "0" + (date.getMonth() + 1)
  }-${date.getFullYear()}`;

  if (!loading) {
    const details = balance[0].details;
    const balanceValue = balance[0].value;
    return (
      <>
        <div className="card col-5">
          <div className="card-header">
            <h2 className="card-title">Bilancio</h2>
            <a href="#">
              <button type="button" className="btn-icon">
                <Scale />
              </button>
            </a>
          </div>
          <div className="card-body">
            <div className="data-container ">
              <h3 className="card-title">
                In data: <span className="js-date">{currentDate}</span>
              </h3>
              <p className="js-bilancio">{balanceValue}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="data-container js-card-data-container">
              {details.map((detail) => (
                <div className="last-month js-balance-content">
                  <h3 className="card-title js-balance-label">
                    {detail.label}
                  </h3>
                  <p className="js-balance-value">
                    {detail.value} {detail.moneySymbol}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p>CARICAMENTO</p>
    </>
  );
}
