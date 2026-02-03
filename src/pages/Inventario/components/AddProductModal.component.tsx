import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { postProduct } from "../../../core/ServerService";
import InputForm from "./InputForm.component";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { setAddIsOpen } from "../../../features/toggleDialogSlice";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";
import { useCategories } from "../hook/useCategories";
import SelectForm from "./SelectForm.component";
import AddCategoryForm from "./AddCategoryForm.component";

export default function AddProductModal() {
  const dialogRef = useRef(null);
  const addIsOpen = useSelector((state: boolean) => state.dialog.addIsOpen);
  const dispatch = useDispatch();
  const { categories, loading } = useCategories();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    postProduct(data);
    dispatch(setAddIsOpen(false));
    dispatch(setRefreshComponent(true));
  };

  useEffect(() => {
    const dialogState = dialogRef.current;
    if (addIsOpen) {
      dialogState.showModal();
    } else {
      dialogState.close();
    }
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Modal
        modalId={"addDialog"}
        modalRef={dialogRef}
        modalHeader={
          <h1 className="js-modal-add-header-title title">Aggiungi</h1>
        }
        modalBody={
          <div className="container js-modal-add-content">
            <AddCategoryForm />
            <form className="grid js-form" onSubmit={handleSubmit(onSubmit)}>
              <p className="js-form-description form-description">
                Inserisci i dati relativi al nuovo prodotto. <br /> Tutti i
                campi sono obbligatori.
              </p>
              <div className="row">
                <InputForm
                  registerProp={{ ...register("nome", { required: true }) }}
                  gridClass="col-6"
                  errorClass={errors.nome ? "error" : ""}
                  inputId="nomeProdotto"
                  labelContent={`Nome${errors.nome ? "*" : ""}`}
                  inputType="text"
                  inputName="nome"
                />

                <SelectForm
                  control={control}
                  gridClass="col-6"
                  errorClass={errors.categoria ? "error" : ""}
                  inputId="categoriaProdotto"
                  labelContent={`Categoria${errors.categoria ? "*" : ""}`}
                  categoriesName={categories}
                  inputName="categoria"
                />

                {/* <InputForm
                  registerProp={{
                    ...register("categoria", { required: true }),
                  }}
                  gridClass="col-6"
                  errorClass={errors.categoria ? "error" : ""}
                  inputId="categoriaProdotto"
                  labelContent={`Categoria${errors.categoria ? "*" : ""}`}
                  inputType="text"
                  inputName="categoria"
                /> */}
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
                />
                <InputForm
                  registerProp={{ ...register("prezzo", { required: true }) }}
                  gridClass="col-6"
                  errorClass={errors.prezzo ? "error" : ""}
                  inputId="prezzoProdotto"
                  labelContent={`Prezzo${errors.prezzo ? "*" : ""}`}
                  inputType="text"
                  inputName="prezzo"
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
                />
              </div>
              <div className="row btns-container js-btns-container">
                <button type="submit" className="btn js-btn-accept">
                  Accetta
                </button>
                <button
                  type="button"
                  className="btn js-btn-return"
                  onClick={() => {
                    dispatch(setAddIsOpen(false));
                    reset();
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
