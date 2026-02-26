import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { useEffect, useRef } from "react";
import { setAddIsOpen } from "../../../features/toggleDialogSlice";
import { useCategories } from "../hook/useCategories";
import {
  setAddCategoryIsOpen,
  setCategorySubmit,
} from "../../../features/category/addCategorySlice";
import { postCategories, postProduct } from "../../../core/ServerService";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";
import { type Category, type Product } from "../../../core/Types";
import Form from "../../../components/Form";
import { useAppSelector } from "../../../store/store";

export default function AddProductModal() {
  const product = useAppSelector((state) => state.product.product);

  const populateForm: [string, unknown][] = product
    ? Object.entries(product)
    : [];

  const dialogRef = useRef(null);
  const addIsOpen = useAppSelector((state) => state.dialog.addIsOpen);
  const addCategoryIsOpen = useAppSelector(
    (state) => state.addCategory.addCategoryIsOpen,
  );

  const dispatch = useDispatch();
  const { categories, loading } = useCategories();

  const getCategoriesName: string[] = categories.map(
    (categoryName) => categoryName.nomeCategoria,
  );

  const payload = {
    getCategoriesName: getCategoriesName,
  };

  const onSubmit = (data: any) => {
    console.log(data);

    const category: Category = {
      nomeCategoria: data.categoria.label,
      tagCategoria: data.categoria.value,
      sottoCategorie: [
        {
          nomeSottoCategoria: data.nomeSottoCategoria,
          tagSottoCategoria: data.nomeSottoCategoria.toLowerCase(),
        },
      ],
    };
    const product: Product = {
      nome: data.nome,
      categoria: category,
      costo: data.costo,
      prezzo: data.prezzo,
      quantita: data.quantita,
      dataAcquisto: data.dataAcquisto,
      dataSpeciale: data.dataSpeciale,
    };
    console.log(category);
    console.log(product);

    if (addCategoryIsOpen) {
      postCategories(category);
    } else {
      // In questo else viene solo modificata la categoria con una chiamata put
      // postSubCategory(category.sottoCategorie);
    }

    dispatch(setAddCategoryIsOpen(false));
    dispatch(setCategorySubmit(false));
    postProduct(product);
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

  return (
    <>
      <Modal
        modalId={"addDialog"}
        modalRef={dialogRef}
        modalHeader={
          <h1 className="js-modal-add-header-title title">Aggiungi</h1>
        }
        modalBody={
          <div className="container">
            <Form
              onSubmit={onSubmit}
              formInputs={populateForm ? populateForm : null}
              payload={payload}
              inputType={"text"}
            />
            {/* <form className="grid js-form" onSubmit={handleSubmit(onSubmit)}>
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
                  categoriesName={getCategoriesName}
                  inputName="categoria"
                />
              </div>
              <div
                className={`col-12 grid ${addCategoryIsOpen ? "" : "hidden"}`}
              >
                <div className={` row `}>
                  <InputForm
                    registerProp={{
                      ...register("categoria.nomeCategoria", {
                        required: true,
                      }),
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
                      ...register("categoria.tagCategoria", {
                        required: true,
                        pattern: /[a-z]/,
                      }),
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
                      ...register(
                        "categoria.sottoCategoria.nomeSottoCategoria",
                        {
                          required: true,
                        },
                      ),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="nomeSottoCategoria"
                    labelContent={`Nome sotto-categoria${
                      errors.nome ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="nomeSottoCategoria"
                  />
                  <InputForm
                    registerProp={{
                      ...register(
                        "categoria.sottoCategoria.tagSottoCategoria",
                        {
                          required: true,
                          pattern: /[a-z]/,
                        },
                      ),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nome ? "errore" : ""}
                    inputId="tagSottoCategoria"
                    labelContent={`Tag sotto-categoria${
                      errors.nome ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="tagSottoCategoria"
                    errorMessage={
                      errors.tagSottoCategoria?.type === "pattern" && (
                        <p className="error" role="alert">
                          Sono permesse solo lettere minuscole
                        </p>
                      )
                    }
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
                    dispatch(setAddCategoryIsOpen(false));
                    dispatch(setSubCategoryIsChecked(false));
                    reset();
                  }}
                >
                  Annulla
                </button>
              </div>
            </form> */}
          </div>
        }
      ></Modal>
    </>
  );
}
