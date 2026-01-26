import { CircleX, PackageOpen } from "lucide-react";
import type { Product } from "../../../core/Types";
import { useProducts } from "../../../hooks/useProducts";

export default function Table() {
  const { filteredProducts, loading } = useProducts();

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
                <div className="js-product row">
                  <p className="js-nome col-5">{product.nome}</p>
                  <p className="js-genere col-4">{product.tipo}</p>
                  <div className="js-table-btns table-btns col-3">
                    <button className="btn-icon js-detail-product-btn">
                      <PackageOpen className="icon" />
                    </button>
                    <button
                      className="btn-icon js-remove-product-btn"
                      popoverTarget="openDeleteProduct"
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
