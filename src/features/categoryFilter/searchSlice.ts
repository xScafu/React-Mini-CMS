import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchName: "",
  },
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
});

export const { setSearchName } = searchSlice.actions;
export default searchSlice.reducer;
