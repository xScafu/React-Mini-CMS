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

export default configureStore({
  reducer: {
    filter: filterReducer,
    sorting: sortingReducer,
    dialog: toggleDialogReducer,
    product: productReducer,
    search: searchReducer,
    refresh: refreshComponentReducer,
    notifications: notificationsReducer,
    editProduct: editProductReducer,
    addCategory: addCategoryReducer,
  },
});
