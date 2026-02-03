import { useDispatch, useSelector } from "react-redux";
import { useCategories } from "../hook/useCategories";
import { postCategories } from "../../../core/ServerService";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm.component";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setAddCategoryIsOpen } from "../../../features/toggleDialogSlice";

export default function AddCategoryForm() {
  const addCategoryIsOpen = useSelector(
    (state: boolean) => state.dialog.addCategoryIsOpen
  );

  const dispatch = useDispatch();
  const categories = useCategories().categories;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postCategories(data);
    dispatch(addCategoryIsOpen(false));
  };
  return (
    <>
      <form
        className={`grid ${addCategoryIsOpen ? "" : "hidden"}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="form-description">
          Inserisci i dettagli della nuova categoria.
        </p>
        <div className="row">
          <InputForm
            registerProp={{ ...register("nome", { required: true }) }}
            gridClass="col-6"
            errorClass={errors.nome ? "errore" : ""}
            inputId="nomeCategoria"
            labelContent={`Nome categoria${errors.nome ? "*" : ""}`}
            inputType="text"
            inputName="nome"
          />
          <InputForm
            registerProp={{ ...register("tag", { required: true }) }}
            gridClass="col-6"
            errorClass={errors.nome ? "errore" : ""}
            inputId="tag"
            labelContent={`Tag categoria${errors.nome ? "*" : ""}`}
            inputType="text"
            inputName="tag"
          />
        </div>

        <FormControlLabel
          labelPlacement="end"
          control={<Checkbox />}
          label="Questa categoria prevede una o più sotto-categorie?"
        />
        <div className="row btns-container ">
          <button type="submit" className="btn small ">
            Accetta
          </button>
          <button
            type="button"
            className="btn small "
            onClick={() => {
              dispatch(setAddCategoryIsOpen(false));
              reset();
            }}
          >
            Annulla
          </button>
        </div>
      </form>
    </>
  );
}
