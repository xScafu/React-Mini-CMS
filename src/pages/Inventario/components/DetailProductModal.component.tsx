import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { useRef, useEffect } from "react";
import { setDetailIsOpen } from "../../../features/toggleDialogSlice";

import { type Category, type Product } from "../../../core/Types";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";
import { modifyProduct } from "../../../core/ServerService";
import { useCategories } from "../hook/useCategories";

import Form from "../../../components/Form";
import {
  setAddCategoryIsOpen,
  setCategorySubmit,
} from "../../../features/category/addCategorySlice";

export default function DetailProductModal() {
  const product: Product = useSelector((state) => state.product.product);

  const populateForm = Object.entries(product);

  const dialogRef = useRef(null);
  const detailIsOpen = useSelector(
    (state: boolean) => state.dialog.detailIsOpen,
  );

  const dispatch = useDispatch();
  const { categories, loading } = useCategories();

  const getCategoriesName: string[] = categories.map(
    (categoryName) => categoryName.nomeCategoria,
  );

  const payload = {
    getCategoriesName: getCategoriesName,
    product: product,
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

    dispatch(setAddCategoryIsOpen(false));
    dispatch(setCategorySubmit(false));
    // modifyCategory(category)
    modifyProduct(product);
    dispatch(setDetailIsOpen(false));
    dispatch(setRefreshComponent(true));
  };

  useEffect(() => {
    const dialogState = dialogRef.current;
    if (detailIsOpen) {
      dialogState.showModal();
    } else {
      dialogState.close();
    }
  });

  return (
    <>
      <Modal
        modalId={"detailDialog"}
        modalRef={dialogRef}
        modalHeader={<h1 className=" title">Dettaglio</h1>}
        modalBody={
          <div className="container ">
            <Form
              onSubmit={onSubmit}
              formInputs={populateForm ? populateForm : null}
              payload={payload}
              inputType={"text"}
            />
            {/* <form className="grid " onSubmit={handleSubmit(onSubmit)}>
                <p className=" form-description">
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
                      (category) => category.nomeCategoria,
                    )}
                    inputName="categoria"
                    setReadOnly={!toggleEdit ? true : false}
                    setValue={product.categoria}
                  />
                </div>

                <div className={` row `}>
                  <InputForm
                    registerProp={{
                      ...register("categoria.idCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.idCategoria ? "error" : ""}
                    inputId="idCategoria"
                    labelContent={`ID categoria${
                      errors.idCategoria ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="idCategoria"
                    setReadOnly={true}
                  />

                  <InputForm
                    registerProp={{
                      ...register("categoria.tagCategoria", { required: true }),
                    }}
                    gridClass="col-6"
                    errorClass={errors.tagCategoria ? "errore" : ""}
                    inputId="tagCategoria"
                    labelContent={`Tag categoria${errors.tagCategoria ? "*" : ""}`}
                    inputType="text"
                    inputName="tagCategoria"
                    setReadOnly={!toggleEdit ? true : false}
                  />

                  <InputForm
                    registerProp={{
                      ...register(
                        "categoria.sottoCategorie[0].nomeSottoCategoria",
                        { required: true },
                      ),
                    }}
                    gridClass="col-6"
                    errorClass={errors.nomeSottoCategoria ? "errore" : ""}
                    inputId="nomeSottoCategoria"
                    labelContent={`Nome sotto-categoria${
                      errors.nomeSottoCategoria ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="nomeSottoCategoria"
                    setReadOnly={!toggleEdit ? true : false}
                  />

                  <InputForm
                    registerProp={{
                      ...register(
                        "categoria.sottoCategorie[0].tagSottoCategoria",
                        { required: true },
                      ),
                    }}
                    gridClass="col-6"
                    errorClass={errors.tagSottoCategoria ? "errore" : ""}
                    inputId="tagSottoCategoria"
                    labelContent={`Tag sotto-categoria${
                      errors.tagSottoCategoria ? "*" : ""
                    }`}
                    inputType="text"
                    inputName="tagSottoCategoria"
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
