import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import {
  setAddCategoryIsOpen,
  setSubCategoryIsChecked,
} from "../features/category/addCategorySlice";

import { setAddIsOpen, setDetailIsOpen } from "../features/toggleDialogSlice";
import SelectForm from "../pages/Inventario/components/SelectForm.component";
import InputForm from "../pages/Inventario/components/InputForm.component";
import { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setToggleEditProduct } from "../features/product/editProductSlice";
import type { Product, UnderCategory } from "../core/Types";

import { useAppSelector } from "../store/store";

import { useLabels } from "../hooks/useLabels";

interface payload {
  getCategoriesName: string[];
  product: Product;
}

type formInputs = Array<[string | undefined]>;

export default function Form({
  onSubmit,
  formInputs,
  payload,
  inputType,
}: {
  onSubmit: SubmitHandler<any>;
  formInputs: formInputs;
  payload: payload;
  inputType: string;
}) {
  const subCategoryIsChecked = useAppSelector(
    (state) => state.addCategory.subCategoryIsChecked,
  );
  const addCategoryIsOpen = useAppSelector(
    (state) => state.addCategory.addCategoryIsOpen,
  );
  const category = useAppSelector((state) => state.category.category);

  const addIsOpen: boolean = useAppSelector((state) => state.dialog.addIsOpen);
  const detailIsOpen: boolean = useAppSelector(
    (state) => state.dialog.detailIsOpen,
  );
  const removeIsOpen: boolean = useAppSelector(
    (state) => state.dialog.removeIsOpen,
  );

  const toggleEdit = useAppSelector(
    (state) => state.editProduct.toggleEditProduct,
  );

  const dispatch = useDispatch();
  const { loading, labels } = useLabels();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (detailIsOpen) {
      const subCategory = payload.product?.categoria.sottoCategorie.map(
        (obj: UnderCategory) => Object.entries(obj),
      );

      const category = Object.entries(
        payload.product ? payload.product?.categoria : {},
      );

      const resetForm = [].concat(category, subCategory);

      console.log(resetForm);
      console.log(payload.product);
      reset(payload.product);
    }
  }, [detailIsOpen, payload.product, reset]);

  const underCategory = category.sottoCategorie[0];

  if (addIsOpen && !loading) {
    return (
      <>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
          <p className="form-description">
            Inserisci i dati relativi al nuovo prodotto. <br /> Tutti i campi
            sono obbligatori.
          </p>
          <div className="row">
            {formInputs.map((p) => {
              const key = p[0];
              const label = labels[key];
              if (key === "categoria") {
                return (
                  <>
                    <SelectForm
                      control={control}
                      gridClass={`col-6`}
                      errorClass={errors[key] ? "error" : ""}
                      inputId={key}
                      inputName={key}
                      labelContent={`${label}${errors[key] ? "*" : ""}`}
                      categoriesName={payload.getCategoriesName}
                    />
                  </>
                );
              } else if (key !== "id") {
                return (
                  <>
                    <InputForm
                      registerProp={{
                        ...register(`${key}`, { required: true }),
                      }}
                      gridClass="col-6"
                      errorClass={errors[key ? key : ""] ? "error" : ""}
                      inputId={key}
                      labelContent={`${label}${errors[key ? key : ""] ? "*" : ""}`}
                      inputType={inputType}
                      inputName={key}
                    />
                  </>
                );
              }
            })}
          </div>
          {/* Se addCategoryIsOpen === true, nuova sezione del form per aggiungere la categoria */}
          {addCategoryIsOpen && (
            <div className={`row ${!addCategoryIsOpen ? "hidden" : ""}`}>
              <p className="col-11">Aggiungi la categoria</p>
              {Object.keys(category ?? {}).map((c) => {
                const label = labels[c];
                if (
                  c !== "sottoCategorie" &&
                  c !== "idCategoria" &&
                  c !== "tagCategoria"
                ) {
                  return (
                    <InputForm
                      registerProp={{ ...register(`${c}`) }}
                      gridClass="col-6"
                      errorClass={errors[c] ? "error" : ""}
                      inputId={c}
                      labelContent={`${label}${errors[c] ? "*" : ""}`}
                      inputType={inputType}
                      inputName={c}
                    />
                  );
                }
              })}
            </div>
          )}
          <div className={`row `}>
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
          {subCategoryIsChecked && (
            <div className={`row ${!subCategoryIsChecked ? "hidden" : ""}`}>
              {Object.keys(underCategory).map((k) => {
                const label = labels[k];
                if (k !== "idSottoCategoria" && k !== "tagSottoCategoria") {
                  return (
                    <InputForm
                      registerProp={{ ...register(`${k}`) }}
                      gridClass="col-6"
                      errorClass={errors[k] ? "error" : ""}
                      inputId={k}
                      labelContent={`${label}${errors[k] ? "*" : ""}`}
                      inputType={inputType}
                      inputName={k}
                    />
                  );
                }
              })}
            </div>
          )}

          <div className="row btns-container">
            <button type="submit" className="btn">
              Accetta
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                dispatch(setAddIsOpen(false));
                dispatch(setAddCategoryIsOpen(false));
                dispatch(setSubCategoryIsChecked(false));
                reset();
              }}
            >
              Annulla
            </button>
          </div>
        </form>
      </>
    );
  } else if (detailIsOpen && !loading) {
    return (
      <>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
          <p className="form-description">
            Clicca su "Modifica" per modificare il prodotto.
          </p>
          <div className="row">
            {formInputs.map((p: any) => {
              const key = p[0];
              const value = p[1];
              const label = labels[key];
              if (key === "categoria") {
                return (
                  <>
                    <SelectForm
                      control={control}
                      gridClass={`col-6`}
                      errorClass={errors[key] ? "error" : ""}
                      inputId={key}
                      inputName={key}
                      labelContent={`${label}${errors[key] ? "*" : ""}`}
                      categoriesName={payload.getCategoriesName}
                      setReadOnly={!toggleEdit}
                      setValue={value}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <InputForm
                      registerProp={{
                        ...register(`${key}`, { required: true }),
                      }}
                      gridClass="col-6"
                      errorClass={errors[key] ? "error" : ""}
                      inputId={key}
                      labelContent={`${label}${errors[key] ? "*" : ""}`}
                      inputType={inputType}
                      inputName={key}
                      setReadOnly={!toggleEdit}
                    />
                  </>
                );
              }
            })}
          </div>

          <div className="row">
            <h2 className="col-11">
              Modifica la categoria e le sotto-categorie.
            </h2>
            {Object.keys(category ?? {}).map((k) => {
              const key = k;
              const label = labels[key];
              {
                return (
                  <InputForm
                    registerProp={{ ...register(`${key}`) }}
                    gridClass="col-6"
                    errorClass={errors[key] ? "error" : ""}
                    inputId={key}
                    labelContent={`${label}${errors[key] ? "*" : ""}`}
                    inputType={inputType}
                    inputName={key}
                    setReadOnly={!toggleEdit}
                  />
                );
              }
            })}
          </div>

          <div className="row">
            {Object.keys(underCategory).map((k) => {
              const key = k;
              const label = labels[key];
              {
                return (
                  <InputForm
                    registerProp={{ ...register(`${k}`) }}
                    gridClass="col-6"
                    errorClass={errors[key] ? "error" : ""}
                    inputId={key}
                    labelContent={`${label}${errors[key] ? "*" : ""}`}
                    inputType={inputType}
                    inputName={key}
                    setReadOnly={!toggleEdit}
                  />
                );
              }
            })}
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
              <input type="submit" className="btn " value="Accetta"></input>
            )}

            <button
              type="button"
              className="btn js-btn-return"
              onClick={() => {
                dispatch(setDetailIsOpen(false));
                dispatch(setToggleEditProduct(false));
                reset();
              }}
            >
              Annulla
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <p>CARICAMENTO</p>
      </>
    );
  }
}
