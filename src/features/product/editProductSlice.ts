import { createSlice } from "@reduxjs/toolkit";

const editProductSlice = createSlice({
  name: "editProduct",
  initialState: {
    toggleEditProduct: false,
  },
  reducers: {
    setToggleEditProduct(state, actions) {
      state.toggleEditProduct = actions.payload;
    },
  },
});

export const { setToggleEditProduct } = editProductSlice.actions;
export default editProductSlice.reducer;
