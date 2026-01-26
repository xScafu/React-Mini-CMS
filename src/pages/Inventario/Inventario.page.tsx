import { CirclePlus, ListFilter } from "lucide-react";
import FiltersDialog from "./components/FiltersDialog.component";
import Table from "./components/Table.component";
import AddProductModal from "./components/AddProductModal.component";

export default function Inventario() {
  return (
    <>
      <AddProductModal />
      <section className="inventario">
        <div className="container-header">
          <h1 className="section-title">Inventario</h1>
          <div className="filters-wrapper">
            <FiltersDialog />
            <div className="table-ctas">
              <button
                type="button"
                popoverTarget="openAddProduct"
                className="cta js-add-product"
              >
                <p>Aggiungi</p>
                <CirclePlus className="icon small" />
              </button>
              <button type="button" popoverTarget="openFilters" className="cta">
                <p>Filtri</p>
                <ListFilter className="icon small" />
              </button>
            </div>
          </div>
        </div>
        <Table />
      </section>
    </>
  );
}
