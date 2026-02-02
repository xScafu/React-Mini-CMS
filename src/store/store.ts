import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/categoryFilter/filterSlice";
import sortingReducer from "../features/categoryFilter/sortingSlice";
import toggleDialogReducer from "../features/toggleDialogSlice";
import productReducer from "../features/product/productSlice";
import searchReducer from "../features/categoryFilter/searchSlice";
import refreshComponentReducer from "../features/refreshComponentSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
import editProductReducer from "../features/product/editProductSlice";

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
  },
});
