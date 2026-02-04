import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import InputForm from "./InputForm.component";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { setAddIsOpen } from "../../../features/toggleDialogSlice";
import { useCategories } from "../hook/useCategories";
import SelectForm from "./SelectForm.component";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  setAddCategoryIsOpen,
  setCategorySubmit,
  setSubCategoryIsChecked,
} from "../../../features/category/addCategorySlice";
import { postCategories, postProduct } from "../../../core/ServerService";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";

export default function AddProductModal() {
  const dialogRef = useRef(null);
  const addIsOpen = useSelector((state: boolean) => state.dialog.addIsOpen);
  const addCategoryIsOpen = useSelector(
    (state: boolean) => state.addCategory.addCategoryIsOpen,
  );
  const subCategoryIsChecked: boolean = useSelector(
    (state: boolean) => state.addCategory.subCategoryIsChecked,
  );
  const categorySubmit = useSelector(
    (state: boolean) => state.addCategory.categorySubmit,
  );
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
    if (addCategoryIsOpen) {
      const product = {
        nome: data.nome,
        categoria: data.nomeCategoria,
        prezzo: data.prezzo,
        costo: data.costo,
        quantita: data.quantita,
        dataAcquisto: data.dataAcquisto,
        dataSpeciale: data.dataSpeciale,
      };
      const category = {
        nome: data.nomeCategoria,
        tagCategoria: data.tagCategoria,
        sottoCategoria: {
          nomeSottoCategoria: data.nomeSottoCategoria,
          tagSottoCategoria: data.tagSottoCategoria,
        },
      };
      console.log(category);
      console.log(product);
      postCategories(category);
      dispatch(setAddCategoryIsOpen(false));
      dispatch(setCategorySubmit(false));
      postProduct(product);
      dispatch(setAddIsOpen(false));
      dispatch(setRefreshComponent(true));
    } else {
      postProduct(data);
      dispatch(setAddIsOpen(false));
      dispatch(setRefreshComponent(true));
    }
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
              </div>
              <div
                className={`col-12 grid ${addCategoryIsOpen ? "" : "hidden"}`}
              >
                <div className={` row `}>
                  <InputForm
                    registerProp={{
                      ...register("nomeCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="nomeCategoria"
                    labelContent={`Nome categoria${errors.nome ? "*" : ""}`}
                    inputType="text"
                    inputName="nomeCategoria"
                  />
                  <InputForm
                    registerProp={{
                      ...register("tagCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="tagCategoria"
                    labelContent={`Tag categoria${errors.nome ? "*" : ""}`}
                    inputType="text"
                    inputName="tagCategoria"
                  />
                </div>
                <div className="row">
                  <FormControlLabel
                    className="col-11"
                    labelPlacement="end"
                    control={
                      <Checkbox
                        checked={subCategoryIsChecked}
                        onChange={(event) => {
                          const isChecked = event.target.checked;
                          dispatch(setSubCategoryIsChecked(isChecked));
                        }}
                      />
                    }
                    label="Questa categoria prevede una o più sotto-categorie?"
                  />
                </div>
                <div className={`row ${!subCategoryIsChecked ? "hidden" : ""}`}>
                  <InputForm
                    registerProp={{
                      ...register("nomeSottoCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="nomeSottoCategoria"
                    labelContent={`Nome sotto-categoria${errors.nome ? "*" : ""}`}
                    inputType="text"
                    inputName="nomeSottoCategoria"
                  />
                  <InputForm
                    registerProp={{
                      ...register("tagSottoCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="tagSottoCategoria"
                    labelContent={`Tag sotto-categoria${errors.nome ? "*" : ""}`}
                    inputType="text"
                    inputName="tagSottoCategoria"
                  />
                </div>
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
