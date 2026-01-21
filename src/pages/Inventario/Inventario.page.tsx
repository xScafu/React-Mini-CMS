import Sidebar from "../../components/Sidebar.component";

export default function Inventario() {
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
                    <a href="#">Inventario</a>
                  </p>
                </div>
              </nav>
              <div className="search col-6">
                <input
                  type="search"
                  name="search"
                  className="js-search search-input"
                  placeholder="Cerca nel CMS"
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
              <section className="inventario">
                <div className="container-header">
                  <h1 className="section-title">Inventario</h1>
                  <div className="filters-wrapper">
                    <dialog
                      popover="auto"
                      id="openFilters"
                      className="filters-popover "
                    >
                      <ul className="js-filters-dialog-wrapper genere-filter">
                        <h2>Genere</h2>
                      </ul>
                      <ul className="name-filter">
                        <h2>Nome</h2>
                        <li className="filter">
                          <input
                            className="js-alphabetical-desc"
                            type="checkbox"
                            name="a-z"
                            id="a-z"
                          ></input>
                          <label for="a-z">
                            A-Z
                            <i
                              className="icon"
                              data-lucide="arrow-down-a-z"
                            ></i>
                          </label>
                        </li>
                        <li className="filter">
                          <input
                            className="js-alphabetical-asc"
                            type="checkbox"
                            name="z-a"
                            id="z-a"
                          ></input>
                          <label for="z-a">
                            Z-A
                            <i className="icon" data-lucide="arrow-up-z-a"></i>
                          </label>
                        </li>
                      </ul>
                      <div className="search">
                        <input
                          type="search"
                          name="search"
                          className="js-search-filter search-input"
                          placeholder="Cerca per nome"
                        ></input>
                        <i data-lucide="search"></i>
                      </div>
                    </dialog>
                    <div className="table-ctas">
                      <button
                        type="button"
                        popovertarget="openAddProduct"
                        className="cta js-add-product"
                      >
                        <p>Aggiungi</p>
                        <i data-lucide="circle-plus" className="icon small"></i>
                      </button>
                      <button
                        type="button"
                        popovertarget="openFilters"
                        className="cta"
                      >
                        <p>Filtri</p>
                        <i data-lucide="list-filter" className="icon small"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="table grid">
                    <div className="row head">
                      <h3 className="col-5">Nome</h3>
                      <h3 className="col-4">Genere</h3>
                      <h3 className="col-3 product-detail-label">
                        Gestisci prodotto
                      </h3>
                    </div>
                    <div className="grid body js-table-body"></div>
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
