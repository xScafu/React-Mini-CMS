export default function AddProductModal() {
  return (
    <>
      <dialog class="modal js-add-modal" popover="auto" id="openAddProduct">
        <div class="modal-header">
          <h1 class="js-modal-add-header-title title">Title</h1>
        </div>
        <div class="modal-body">
          <div class="container js-modal-add-content">
            <form className="grid js-form">
              <p className="js-form-description form-description">
                Descrizione del form dinamica
              </p>
              <div className="row">
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-nomeProdotto-label"
                    htmlFor="nomeProdotto"
                  >
                    Nome
                  </label>
                  <input
                    className="js-input js-nomeProdotto"
                    type="text"
                    name="nome"
                    id="nomeProdotto"
                  ></input>
                </div>
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-tipoProdotto-label"
                    htmlFor="tipoProdotto"
                  >
                    Categoria
                  </label>
                  <input
                    className="js-input js-tipoProdotto"
                    type="text"
                    name="tipo"
                    id="tipoProdotto"
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-costoProdotto-label"
                    htmlFor="costoProdotto"
                  >
                    Costo
                  </label>
                  <input
                    className="js-input js-costoProdotto"
                    type="number"
                    name="costo"
                    id="costoProdotto"
                  ></input>
                </div>
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-prezzoProdotto-label"
                    htmlFor="prezzoProdotto"
                  >
                    Prezzo
                  </label>
                  <input
                    className="js-input js-prezzoProdotto"
                    type="number"
                    name="prezzo"
                    id="prezzoProdotto"
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-quantitaProdotto-label"
                    htmlFor="quantitaProdotto"
                  >
                    Quantità
                  </label>
                  <input
                    className="js-input js-quantitaProdotto"
                    type="number"
                    name="quantita"
                    id="quantitaProdotto"
                  ></input>
                </div>
                <div className="input-wrapper col-6">
                  <label
                    className="js-labels js-dataAcquistoProdotto-label"
                    htmlFor="dataAcquistoProdotto"
                  >
                    Data di acquisto
                  </label>
                  <input
                    className="js-input js-dataAcquistoProdotto"
                    type="date"
                    name="dataAcquisto"
                    id="dataAcquistoProdotto"
                  ></input>
                </div>
                <div className="js-dataSpeciale input-wrapper col-6">
                  <label
                    className="js-labels js-dataSpecialeProdotto-label"
                    htmlFor="dataSpecialeProdotto"
                  >
                    Data speciale
                  </label>
                  <input
                    className="js-input js-dataSpecialeProdotto"
                    type="date"
                    name="dataSpeciale"
                    id="dataSpecialeProdotto"
                  ></input>
                </div>
              </div>
              <div className="row btns-container js-btns-container">
                <button type="submit" className="btn js-btn-accept">
                  Accetta
                </button>
                <button type="button" className="btn js-btn-return">
                  Annulla
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
