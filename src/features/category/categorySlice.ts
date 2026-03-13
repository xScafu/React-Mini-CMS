import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "../../core/Types";

const initialState: Category = {
  idCategoria: "",
  nomeCategoria: "",
  tagCategoria: "",
  sottoCategorie: [
    {
      idSottoCategoria: "",
      nomeSottoCategoria: "",
      tagSottoCategoria: "",
    },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
