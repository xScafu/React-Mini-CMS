interface Card {
  id: string;
  label: string;
  icon: string;
  value: number;
}

export default function Card() {
  return (
    <>
      <div className="card col-3">
        <div className="card-body flex">
          <div className="data-container">
            <h2 className="card-title"></h2>
            <p className="js-card-value"></p>
          </div>
          <a href="#">
            <button type="button" className="btn-icon">
              <i className="js-card-icon icon"></i>
            </button>
          </a>
        </div>
        <div className="card-footer">
          <span className="js-avvisi"></span>
        </div>
      </div>

      <div className="last-month js-balance-content">
        <h3 className="card-title js-balance-label"></h3>
        <p className="js-balance-value"></p>
      </div>
    </>
  );
}
