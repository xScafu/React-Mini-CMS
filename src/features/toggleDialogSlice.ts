import { createSlice } from "@reduxjs/toolkit";

const toggleDialogSlice = createSlice({
  name: "toggleDialog",
  initialState: {
    addIsOpen: false,
    removeIsOpen: false,
    detailIsOpen: false,
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
  },
});

export const { setAddIsOpen, setRemoveIsOpen, setDetailIsOpen } =
  toggleDialogSlice.actions;
export default toggleDialogSlice.reducer;
