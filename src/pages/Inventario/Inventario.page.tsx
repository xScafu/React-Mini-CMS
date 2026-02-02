import { CirclePlus, ListFilter } from "lucide-react";
import FiltersDialog from "./components/FiltersDialog.component";
import Table from "./components/Table.component";

import { useDispatch, useSelector } from "react-redux";
import {
  setAddIsOpen,
  setDetailIsOpen,
  setRemoveIsOpen,
} from "../../features/toggleDialogSlice";
import AddProductModal from "./components/AddProductModal.component";
import RemoveProductModal from "./components/RemoveProductModal.component";
import DetailProductModal from "./components/DetailProductModal.component";
import { setRefreshComponent } from "../../features/refreshComponentSlice";

export default function Inventario() {
  const dispatch = useDispatch();
  const toggleRefresh = useSelector((state) => state.refresh.refreshComponent);
  let newKey = 0;
  const date = new Date();

  if (toggleRefresh) {
    newKey = date.getMilliseconds();
  }

  return (
    <>
      <AddProductModal />
      <RemoveProductModal />
      <DetailProductModal />
      <section className="inventario">
        <div className="container-header">
          <h1 className="section-title">Inventario</h1>
          <div className="filters-wrapper">
            <FiltersDialog />
            <div className="table-ctas">
              <button
                type="button"
                popoverTarget="toggleAddProduct"
                className="cta js-add-product"
                onClick={() => {
                  dispatch(setAddIsOpen(true));
                  dispatch(setRemoveIsOpen(false));
                  dispatch(setDetailIsOpen(false));
                  dispatch(setRefreshComponent(false));
                }}
                title="Aggiungi prodotto"
              >
                <p>Aggiungi</p>
                <CirclePlus className="icon small" />
              </button>
              <button
                type="button"
                popoverTarget="openFilters"
                className="cta"
                title="Filtra i prodotti"
              >
                <p>Filtri</p>
                <ListFilter className="icon small" />
              </button>
            </div>
          </div>
        </div>
        <Table key={newKey} />
      </section>
    </>
  );
}
