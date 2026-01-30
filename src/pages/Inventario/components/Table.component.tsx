import { CircleX, PackageOpen } from "lucide-react";
import type { Product } from "../../../core/Types";
import { useProducts } from "../../../hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddIsOpen,
  setDetailIsOpen,
  setRemoveIsOpen,
} from "../../../features/toggleDialogSlice";
import { setProduct } from "../../../features/productSlice";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";

export default function Table() {
  const { filteredProducts, loading } = useProducts();
  const dispatch = useDispatch();

  if (!loading) {
    return (
      <>
        <div className="container">
          <div className="table grid">
            <div className="row head">
              <h3 className="col-5">Nome</h3>
              <h3 className="col-4">Genere</h3>
              <h3 className="col-3 product-detail-label">Gestisci prodotto</h3>
            </div>
            <div className="grid body js-table-body">
              {filteredProducts.map((product: Product) => (
                <div className="js-product row" key={product.id}>
                  <p className="js-nome col-5">{product.nome}</p>
                  <p className="js-genere col-4">{product.categoria}</p>
                  <div className="js-table-btns table-btns col-3">
                    <button
                      className="btn-icon js-detail-product-btn"
                      onClick={() => {
                        dispatch(setAddIsOpen(false));
                        dispatch(setRemoveIsOpen(false));
                        dispatch(setDetailIsOpen(true));
                        dispatch(setProduct(product));
                      }}
                    >
                      <PackageOpen className="icon" />
                    </button>
                    <button
                      className="btn-icon js-remove-product-btn"
                      onClick={() => {
                        dispatch(setAddIsOpen(false));
                        dispatch(setRemoveIsOpen(true));
                        dispatch(setDetailIsOpen(false));
                        dispatch(setRefreshComponent(false));
                        dispatch(setProduct(product));
                      }}
                    >
                      <CircleX className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  <p>CARICAMENTO</p>;
}
