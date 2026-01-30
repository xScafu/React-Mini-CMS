import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {
      id: "",
      nome: "",
      tipo: "",
      costo: 0,
      prezzo: 0,
      quantita: 0,
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
