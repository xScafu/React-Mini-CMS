import { CircleX, PackageOpen } from "lucide-react";
import type { Product } from "../../../core/Types";
import { useProducts } from "../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import {
  setAddIsOpen,
  setDetailIsOpen,
  setRemoveIsOpen,
} from "../../../features/toggleDialogSlice";
import { setProduct } from "../../../features/product/productSlice";
import { setRefreshComponent } from "../../../features/refreshComponentSlice";
import { setCategory } from "../../../features/category/categorySlice";

export default function Table() {
  const { filteredProducts, loading } = useProducts();
  const dispatch = useDispatch();

  if (!loading) {
    return (
      <>
        <div className="container">
          <div className="table grid">
            <div className="row head">
              <h3 className="col-3">Nome</h3>
              <h3 className="col-3">Categoria</h3>
              <h3 className="col-3">Quantità</h3>
              <h3 className="col-3 product-detail-label">Gestisci prodotto</h3>
            </div>
            <div className="grid body js-table-body">
              {filteredProducts.map((product: Product) => (
                <div className="row" key={product.id}>
                  <p className="col-3">{product.nome}</p>
                  <p className="col-3">{product.categoria.nomeCategoria}</p>
                  <p className="col-3">{product.quantita}</p>
                  <div className="table-btns col-3">
                    <button
                      className="btn-icon"
                      onClick={() => {
                        dispatch(setAddIsOpen(false));
                        dispatch(setRemoveIsOpen(false));
                        dispatch(setDetailIsOpen(true));
                        dispatch(setProduct(product));
                        dispatch(setCategory(product.categoria));
                        console.log(product);
                      }}
                      title="Dettaglio prodotto"
                    >
                      <PackageOpen className="icon" />
                    </button>
                    <button
                      className="btn-icon"
                      onClick={() => {
                        if (!loading) {
                          dispatch(setAddIsOpen(false));
                          dispatch(setRemoveIsOpen(true));
                          dispatch(setDetailIsOpen(false));
                          dispatch(setRefreshComponent(false));
                          dispatch(setProduct(product));
                        }
                      }}
                      title="Elimina prodotto"
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
