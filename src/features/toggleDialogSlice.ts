import { createSlice } from "@reduxjs/toolkit";

const toggleDialogSlice = createSlice({
  name: "toggleDialog",
  initialState: {
    addIsOpen: false,
    removeIsOpen: false,
    detailIsOpen: false,
    addCategoryIsOpen: false,
  },
  reducers: {
    setAddIsOpen: (state, action) => {
      state.addIsOpen = action.payload;
    },
    setRemoveIsOpen: (state, action) => {
      state.removeIsOpen = action.payload;
    },
    setDetailIsOpen: (state, action) => {
      state.detailIsOpen = action.payload;
    },
    setAddCategoryIsOpen: (state, action) => {
      state.addCategoryIsOpen = action.payload;
    },
  },
});

export const {
  setAddIsOpen,
  setRemoveIsOpen,
  setDetailIsOpen,
  setAddCategoryIsOpen,
} = toggleDialogSlice.actions;
export default toggleDialogSlice.reducer;
