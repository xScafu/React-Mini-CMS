import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, Product, UnderCategory } from "../../core/Types";

const initialState: Product = {
  product: {
    id: "",
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
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product["product"]>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
