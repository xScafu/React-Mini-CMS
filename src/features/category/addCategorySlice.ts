import { createSlice } from "@reduxjs/toolkit";

const addCategorySlice = createSlice({
  name: "addCategory",
  initialState: {
    addCategoryIsOpen: false,
    subCategoryIsChecked: false,
    categorySubmit: false,
  },
  reducers: {
    setAddCategoryIsOpen(state, action) {
      state.addCategoryIsOpen = action.payload;
    },
    setSubCategoryIsChecked(state, action) {
      state.subCategoryIsChecked = action.payload;
    },
    setCategorySubmit(state, action) {
      state.categorySubmit = action.payload;
    },
  },
});

export const {
  setAddCategoryIsOpen,
  setSubCategoryIsChecked,
  setCategorySubmit,
} = addCategorySlice.actions;
export default addCategorySlice.reducer;
