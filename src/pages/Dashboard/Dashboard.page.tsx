import Sidebar from "../../components/Sidebar.component";
import Card from "./components/Card.component";

export function Cards() {
  return (
    <>
      <Card />
    </>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-container">
          <div className="grid">
            <header className="main-header row">
              <nav className="col-5">
                <div className="routes js-routes">
                  <p>
                    <a href="#">Dashboard</a>
                  </p>
                </div>
              </nav>
              <div className="search col-6">
                <input
                  type="search"
                  name="search"
                  className="js-search search-input"
                  placeholder="Cerca"
                ></input>
                <button className="js-search-btn btn">
                  <i data-lucide="search"></i>
                </button>
              </div>
              <div className="header-btns col-1">
                <button type="button" className="btn">
                  <i data-lucide="circle-question-mark"></i>
                </button>
              </div>
            </header>
          </div>
          <main className="core">
            <div className="main-container">
              <section className="dashboard">
                <h1 className="section-title">Dashboard</h1>
                <div className="card-container grid">
                  <div className="row cards-riassunto">
                    <Cards />
                  </div>
                  <div className="row">
                    <div className="card col-5">
                      <div className="card-header">
                        <h2 className="card-title">Bilancio</h2>
                        <a href="#">
                          <button type="button" className="btn-icon">
                            <i className="icon" data-lucide="scale"></i>
                          </button>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="data-container ">
                          <h3 className="card-title">
                            In data: <span className="js-date"></span>
                          </h3>
                          <p className="js-bilancio"></p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="data-container js-card-data-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
