import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductCategory, UnderCategory } from "../../core/Types";

// Stato iniziale per un singolo prodotto (form editing)
interface ProductState {
  product: Product;
}

const initialState: ProductState = {
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
    } as ProductCategory,
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
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    resetProduct: (state) => {
      state.product = initialState.product;
    },
    updateProductField: (
      state,
      action: PayloadAction<{ field: keyof Product; value: string }>
    ) => {
      const { field, value } = action.payload;
      if (field !== "categoria") {
        (state.product[field] as string) = value;
      }
    },
  },
});

export const { setProduct, resetProduct, updateProductField } =
  productSlice.actions;
export default productSlice.reducer;
