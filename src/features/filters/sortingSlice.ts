import { createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
  name: "sorting",
  initialState: {
    sortingAscendance: false,
    sortingDescendance: false,
  },
  reducers: {
    setToggleSorting: (state, action) => {
      if (action.payload === 1) {
        state.sortingDescendance = !state.sortingDescendance;
        if (state.sortingDescendance) {
          state.sortingAscendance = false;
        }
      }

      if (action.payload === 2) {
        state.sortingAscendance = !state.sortingAscendance;
        if (state.sortingAscendance) {
          state.sortingDescendance = false;
        }
      }
    },
  },
});

export const { setToggleSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
