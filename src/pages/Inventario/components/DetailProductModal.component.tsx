import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { useRef, useEffect } from "react";
import { setDetailIsOpen } from "../../../features/toggleDialogSlice";

export default function DetailProductModal() {
  const detailIsOpen = useSelector(
    (state: boolean) => state.dialog.detailIsOpen,
  );

  const product = useSelector((state) => state.product.product);

  const dialogRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const dialogState = dialogRef.current;
    if (detailIsOpen) {
      dialogState.showModal();
    }
  });

  if (detailIsOpen)
    return (
      <>
        <Modal
          modalId={"detailDialog"}
          modalRef={dialogRef}
          modalHeader={
            <h1 className="js-modal-remove-header-title title">Dettaglio</h1>
          }
          modalBody={
            <div className="container js-modal-remove-content">
              <form className="grid js-form">
                <p className="js-form-description form-description">
                  Clicca su "Modifica" per modificare il prodotto.
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
                      value={product.nome}
                      readOnly
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
                      value={product.categoria}
                      readOnly
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
                      value={product.costo}
                      readOnly
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
                      value={product.prezzo}
                      readOnly
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
                      value={product.quantita}
                      readOnly
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
                      value={product.dataAcquisto}
                      readOnly
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
                      value={product.dataSpeciale}
                      readOnly
                    ></input>
                  </div>
                </div>
                <div className="row btns-container js-btns-container">
                  <button
                    type="submit"
                    className="btn "
                    onClick={() => {
                      modifyProduct(product);
                    }}
                  >
                    Modifica
                  </button>
                  <button
                    type="button"
                    className="btn js-btn-return"
                    onClick={() => dispatch(setDetailIsOpen(false))}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          }
        ></Modal>
      </>
    );
}
