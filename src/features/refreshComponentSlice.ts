import { createSlice } from "@reduxjs/toolkit";

const refreshComponentSlice = createSlice({
  name: "refreshComponent",
  initialState: {
    refreshComponent: false,
  },
  reducers: {
    setRefreshComponent: (state, actions) => {
      state.refreshComponent = actions.payload;
    },
  },
});

export const { setRefreshComponent } = refreshComponentSlice.actions;
export default refreshComponentSlice.reducer;
