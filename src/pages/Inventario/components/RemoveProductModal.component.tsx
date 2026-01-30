import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { removeProduct } from "../../../core/ServerService";
import { useRef, useEffect } from "react";
import { setRemoveIsOpen } from "../../../features/toggleDialogSlice";
import InputForm from "./InputForm.component";
import { useForm } from "react-hook-form";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";

export default function RemoveProductModal() {
  const removeIsOpen = useSelector(
    (state: boolean) => state.dialog.removeIsOpen,
  );

  const product = useSelector((state) => state.product.product);

  const dialogRef = useRef(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    removeProduct(data);
    dispatch(setRemoveIsOpen(false));
    dispatch(setRefreshComponent(true));
  };

  useEffect(() => {
    const dialogState = dialogRef.current;
    if (removeIsOpen) {
      dialogState.showModal();
    }
  });

  if (removeIsOpen)
    return (
      <>
        <Modal
          modalId={"removeDialog"}
          modalRef={dialogRef}
          modalHeader={
            <h1 className="js-modal-remove-header-title title">Rimuovi</h1>
          }
          modalBody={
            <div className="container js-modal-remove-content">
              <form className="grid js-form" onSubmit={handleSubmit(onSubmit)}>
                <p className="js-form-description form-description">
                  Sei sicuro di voler rimuovere il seguente prodotto?
                </p>
                <div className="row">
                  <InputForm
                    registerProp={{
                      ...register("nome", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "error" : ""}
                    inputId="nomeProdotto"
                    labelContent={`Nome${errors.nome ? "*" : ""}`}
                    inputType="text"
                    inputName="nome"
                    setValue={product.nome}
                    setReadOnly={true}
                  />

                  <InputForm
                    registerProp={{
                      ...register("categoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.categoria ? "error" : ""}
                    inputId="categoriaProdotto"
                    labelContent={`Categoria${errors.categoria ? "*" : ""}`}
                    inputType="text"
                    inputName="categoria"
                    setValue={product.categoria}
                    setReadOnly={true}
                  />
                </div>

                <div className="row">
                  <InputForm
                    registerProp={{ ...register("costo", { required: true }) }}
                    gridClass="col-6"
                    errorClass={errors.costo ? "error" : ""}
                    inputId="costoProdotto"
                    labelContent={`Costo${errors.costo ? "*" : ""}`}
                    inputType="text"
                    inputName="costo"
                    setValue={product.costo}
                    setReadOnly={true}
                  />
                  <InputForm
                    registerProp={{ ...register("prezzo", { required: true }) }}
                    gridClass="col-6"
                    errorClass={errors.prezzo ? "error" : ""}
                    inputId="prezzoProdotto"
                    labelContent={`Prezzo${errors.prezzo ? "*" : ""}`}
                    inputType="text"
                    inputName="prezzo"
                    setValue={product.prezzo}
                    setReadOnly={true}
                  />
                </div>

                <div className="row">
                  <InputForm
                    registerProp={{
                      ...register("quantita", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.quantita ? "error" : ""}
                    inputId="quantitaProdotto"
                    labelContent={`Quantità${errors.quantita ? "*" : ""}`}
                    inputType="number"
                    inputName="quantita"
                    setValue={product.quantita}
                    setReadOnly={true}
                  />
                  <InputForm
                    registerProp={{
                      ...register("dataAcquisto", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataAcquisto ? "error" : ""}
                    inputId="dataAcquistoProdotto"
                    labelContent={`Data d'acquisto${errors.dataAcquisto ? "*" : ""}`}
                    inputType="date"
                    inputName="dataAcquisto"
                    setValue={product.dataAcquisto}
                    setReadOnly={true}
                  />
                  <InputForm
                    registerProp={{
                      ...register("dataSpeciale", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataSpeciale ? "error" : ""}
                    inputId="dataSpecialeProdotto"
                    labelContent={`Data speciale${errors.dataSpeciale ? "*" : ""}`}
                    inputType="date"
                    inputName="dataSpeciale"
                    setValue={product.dataSpeciale}
                    setReadOnly={true}
                  />
                  <InputForm
                    registerProp={{
                      ...register("id", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataSpeciale ? "error" : ""}
                    inputId="iD"
                    labelContent={`ID prodotto${errors.dataSpeciale ? "*" : ""}`}
                    inputType="text"
                    inputName="id"
                    setValue={product.id}
                    setReadOnly={true}
                  />
                </div>
                <div className="row btns-container js-btns-container">
                  <button type="submit" className="btn js-btn-accept">
                    Accetta
                  </button>
                  <button
                    type="button"
                    className="btn js-btn-return"
                    onClick={() => dispatch(setRemoveIsOpen(false))}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          }
          modalFooter={undefined}
          cssClass={undefined}
          modalOnClose={undefined}
        ></Modal>
      </>
    );
}
