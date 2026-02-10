import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { useRef, useEffect } from "react";
import { setDetailIsOpen } from "../../../features/toggleDialogSlice";
import InputForm from "./InputForm.component";
import { useForm } from "react-hook-form";
import { setToggleEditProduct } from "../../../features/product/editProductSlice";
import type { Product } from "../../../core/Types";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";
import { modifyProduct } from "../../../core/ServerService";
import { useCategories } from "../hook/useCategories";
import SelectForm from "./SelectForm.component";

export default function DetailProductModal() {
  const detailIsOpen = useSelector(
    (state: boolean) => state.dialog.detailIsOpen
  );
  const product = useSelector((state: Product) => state.product.product);
  const toggleEdit = useSelector(
    (state: boolean) => state.editProduct.toggleEditProduct
  );

  const dialogRef = useRef(null);
  const dispatch = useDispatch();
  const { categories, loading } = useCategories();

  useEffect(() => {
    const dialogState = dialogRef.current;
    if (detailIsOpen) {
      dialogState.showModal();
    }
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Dopo la modifica del prodotto
  const onSubmit = (data: Product) => {
    modifyProduct(data);
    dispatch(setDetailIsOpen(false));
    dispatch(setToggleEditProduct(false));
    dispatch(setRefreshComponent(true));
  };

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

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
              <form className="grid js-form" onSubmit={handleSubmit(onSubmit)}>
                <p className="js-form-description form-description">
                  Clicca su "Modifica" per modificare il prodotto.
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
                    setReadOnly={!toggleEdit ? true : false}
                  />

                  <SelectForm
                    control={control}
                    gridClass="col-6"
                    errorClass={errors.categoria ? "error" : ""}
                    inputId="categoriaProdotto"
                    labelContent={`Categoria${errors.categoria ? "*" : ""}`}
                    categoriesName={categories.map(
                      (category) => category.nomeCategoria
                    )}
                    inputName="categoria"
                    setReadOnly={!toggleEdit ? true : false}
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
                    setReadOnly={!toggleEdit ? true : false}
                  />
                  <InputForm
                    registerProp={{ ...register("prezzo", { required: true }) }}
                    gridClass="col-6"
                    errorClass={errors.prezzo ? "error" : ""}
                    inputId="prezzoProdotto"
                    labelContent={`Prezzo${errors.prezzo ? "*" : ""}`}
                    inputType="text"
                    inputName="prezzo"
                    setReadOnly={!toggleEdit ? true : false}
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
                    setReadOnly={!toggleEdit ? true : false}
                  />
                  <InputForm
                    registerProp={{
                      ...register("dataAcquisto", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataAcquisto ? "error" : ""}
                    inputId="dataAcquistoProdotto"
                    labelContent={`Data d'acquisto${
                      errors.dataAcquisto ? "*" : ""
                    }`}
                    inputType="date"
                    inputName="dataAcquisto"
                    setReadOnly={!toggleEdit ? true : false}
                  />
                  <InputForm
                    registerProp={{
                      ...register("dataSpeciale", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataSpeciale ? "error" : ""}
                    inputId="dataSpecialeProdotto"
                    labelContent={`Data speciale${
                      errors.dataSpeciale ? "*" : ""
                    }`}
                    inputType="date"
                    inputName="dataSpeciale"
                    setReadOnly={!toggleEdit ? true : false}
                  />
                  <InputForm
                    registerProp={{
                      ...register("id", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.dataSpeciale ? "error" : ""}
                    inputId="iD"
                    labelContent={`ID prodotto${
                      errors.dataSpeciale ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="id"
                    setReadOnly={true}
                  />
                </div>
                <div className="row btns-container js-btns-container">
                  {!toggleEdit ? (
                    <button
                      type="button"
                      className="btn "
                      onClick={() => {
                        dispatch(setToggleEditProduct(true));
                      }}
                    >
                      Modifica
                    </button>
                  ) : (
                    <input
                      type="submit"
                      className="btn "
                      value="Accetta"
                    ></input>
                  )}

                  <button
                    type="button"
                    className="btn js-btn-return"
                    onClick={() => {
                      dispatch(setDetailIsOpen(false));
                      dispatch(setToggleEditProduct(false));
                    }}
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
