import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  setAddCategoryIsOpen,
  setSubCategoryIsChecked,
} from "../features/category/addCategorySlice";

import { setAddIsOpen } from "../features/toggleDialogSlice";
import SelectForm from "../pages/Inventario/components/SelectForm.component";
import InputForm from "../pages/Inventario/components/InputForm.component";
import { useEffect } from "react";

export default function Form({
  onSubmit,
  formInputs,
  payload,
  inputType,
  state,
}) {
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  console.log(formInputs);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  //State = 1: dialog aggiungi aperta

  if (state === 1) {
    return (
      <>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
          <p className="form-description">
            Inserisci i dati relativi al nuovo prodotto. <br /> Tutti i campi
            sono obbligatori.
          </p>
          <div className="row">
            {formInputs.map((p) => {
              console.log(p);
              if (p[0] == "categoria") {
                console.log("categoria");
                return (
                  <>
                    <SelectForm
                      control={control}
                      gridClass={`col-6`}
                      errorClass={errors ? "error" : ""}
                      inputId={p[0]}
                      inputName={p[0]}
                      labelContent={`${p[0]}${errors ? "*" : ""}`}
                      categoriesName={payload}
                    />
                  </>
                );
              } else if (p[0] !== "id") {
                console.log("input");
                return (
                  <>
                    <InputForm
                      registerProp={{
                        ...register(`${p[0]}`, { required: true }),
                      }}
                      gridClass="col-6"
                      errorClass={errors ? "error" : ""}
                      inputId={p[0]}
                      labelContent={`${p[0]}${errors ? "*" : ""}`}
                      inputType={inputType}
                      inputName={p[0]}
                    />
                  </>
                );
              }
            })}
          </div>
          <div className="row"></div>
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
  } else if (state === 0) {
    return (
      <>
        <p>ERRORE</p>
      </>
    );
  }
}
