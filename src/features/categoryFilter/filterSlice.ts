import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterArray: [],
  },
  reducers: {
    setFilterArray: (state, actions) => {
      const { name, checked } = actions.payload;

      if (checked) {
        state.filterArray.push(name);
      } else {
        state.filterArray = state.filterArray.filter(
          (category) => category !== name,
        );
      }
    },
  },
});

export const { setFilterArray } = filterSlice.actions;
export default filterSlice.reducer;
