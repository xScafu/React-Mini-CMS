import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
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
        ],
      },
      costo: "",
      prezzo: "",
      quantita: "",
      dataAcquisto: "",
      dataSpeciale: "",
    },
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
