import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/categoryFilter/filterSlice";
import sortingReducer from "../features/categoryFilter/sortingSlice";

export default configureStore({
  reducer: { filter: filterReducer, sorting: sortingReducer },
});
