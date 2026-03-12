import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCategory, UnderCategory } from "../../core/Types";

// Stato per la categoria selezionata (form editing)
interface CategoryState {
  category: ProductCategory;
}

const initialState: CategoryState = {
  category: {
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
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProductCategory>) => {
      state.category = action.payload;
    },
    resetCategory: (state) => {
      state.category = initialState.category;
    },
    updateCategoryField: (
      state,
      action: PayloadAction<{ field: keyof ProductCategory; value: string }>
    ) => {
      const { field, value } = action.payload;
      if (field !== "sottoCategorie") {
        (state.category[field] as string) = value;
      }
    },
  },
});

export const { setCategory, resetCategory, updateCategoryField } =
  categorySlice.actions;
export default categorySlice.reducer;
