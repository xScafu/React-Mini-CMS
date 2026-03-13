export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    filter: {
        filterArray: string[];
    };
    sorting: {
        sortingAscendance: boolean;
        sortingDescendance: boolean;
    };
    dialog: {
        addIsOpen: boolean;
        removeIsOpen: boolean;
        detailIsOpen: boolean;
    };
    product: import("../core/Types").Product;
    category: import("../core/Types").Category;
    search: {
        searchName: string;
    };
    refresh: {
        refreshComponent: boolean;
    };
    notifications: {
        success: boolean;
        promise: boolean;
        update: boolean;
        reset: boolean;
        clearAll: boolean;
        failed: boolean;
    };
    editProduct: {
        toggleEditProduct: boolean;
    };
    addCategory: {
        addCategoryIsOpen: boolean;
        subCategoryIsChecked: boolean;
        categorySubmit: boolean;
    };
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    filter: {
        filterArray: string[];
    };
    sorting: {
        sortingAscendance: boolean;
        sortingDescendance: boolean;
    };
    dialog: {
        addIsOpen: boolean;
        removeIsOpen: boolean;
        detailIsOpen: boolean;
    };
    product: import("../core/Types").Product;
    category: import("../core/Types").Category;
    search: {
        searchName: string;
    };
    refresh: {
        refreshComponent: boolean;
    };
    notifications: {
        success: boolean;
        promise: boolean;
        update: boolean;
        reset: boolean;
        clearAll: boolean;
        failed: boolean;
    };
    editProduct: {
        toggleEditProduct: boolean;
    };
    addCategory: {
        addCategoryIsOpen: boolean;
        subCategoryIsChecked: boolean;
        categorySubmit: boolean;
    };
}>;
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    filter: {
        filterArray: string[];
    };
    sorting: {
        sortingAscendance: boolean;
        sortingDescendance: boolean;
    };
    dialog: {
        addIsOpen: boolean;
        removeIsOpen: boolean;
        detailIsOpen: boolean;
    };
    product: import("../core/Types").Product;
    category: import("../core/Types").Category;
    search: {
        searchName: string;
    };
    refresh: {
        refreshComponent: boolean;
    };
    notifications: {
        success: boolean;
        promise: boolean;
        update: boolean;
        reset: boolean;
        clearAll: boolean;
        failed: boolean;
    };
    editProduct: {
        toggleEditProduct: boolean;
    };
    addCategory: {
        addCategoryIsOpen: boolean;
        subCategoryIsChecked: boolean;
        categorySubmit: boolean;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        filter: {
            filterArray: string[];
        };
        sorting: {
            sortingAscendance: boolean;
            sortingDescendance: boolean;
        };
        dialog: {
            addIsOpen: boolean;
            removeIsOpen: boolean;
            detailIsOpen: boolean;
        };
        product: import("../core/Types").Product;
        category: import("../core/Types").Category;
        search: {
            searchName: string;
        };
        refresh: {
            refreshComponent: boolean;
        };
        notifications: {
            success: boolean;
            promise: boolean;
            update: boolean;
            reset: boolean;
            clearAll: boolean;
            failed: boolean;
        };
        editProduct: {
            toggleEditProduct: boolean;
        };
        addCategory: {
            addCategoryIsOpen: boolean;
            subCategoryIsChecked: boolean;
            categorySubmit: boolean;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
