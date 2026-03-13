import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, Product, UnderCategory } from "../../core/Types";

const initialState: Product = {
  _id: "",
  nome: "",
  categoria: {
    idCategoria: "",
    nomeCategoria: "",
    tagCategoria: "",
    sottoCategorie: [
      {
        idSottoCategoria: "",
        nomeSottoCategoria: "",
        tagSottoCategoria: "",
      },
    ] as UnderCategory[],
  } as Category,
  costo: "",
  prezzo: "",
  quantita: "",
  dataAcquisto: "",
  dataSpeciale: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (_state, action: PayloadAction<Product>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
