import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    success: false,
    promise: false,
    update: false,
    reset: false,
    clearAll: false,
    failed: false,
  },
  reducers: {
    setPromise(state, actions) {
      state.promise = actions.payload;
    },
  },
});

export const { setPromise } = notificationsSlice.actions;
export default notificationsSlice.reducer;
