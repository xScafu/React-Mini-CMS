import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import sortingReducer from "../features/filters/sortingSlice";
import toggleDialogReducer from "../features/toggleDialogSlice";
import productReducer from "../features/product/productSlice";
import searchReducer from "../features/filters/searchSlice";
import refreshComponentReducer from "../features/refreshComponentSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
import editProductReducer from "../features/product/editProductSlice";
import addCategoryReducer from "../features/category/addCategorySlice";
import categoryReducer from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sorting: sortingReducer,
    dialog: toggleDialogReducer,
    product: productReducer,
    category: categoryReducer,
    search: searchReducer,
    refresh: refreshComponentReducer,
    notifications: notificationsReducer,
    editProduct: editProductReducer,
    addCategory: addCategoryReducer,
  },
});

export default store;
