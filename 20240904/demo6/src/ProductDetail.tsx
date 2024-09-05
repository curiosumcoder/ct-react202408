import IProduct from "./model/IProduct";

function ProductDetail({ p }: { p: IProduct }) {
  if (p) {
    return (
      <div>
        <h6>Detail</h6>

        <div className="card" style={{ width: "18rem;" }}>
          <div className="card-body">
            <h5 className="card-title">{p.productName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {p.category?.categoryName ?? "No category"}
            </h6>
            <dl>
              <dt>Price</dt>
              <dd>{p.unitPrice}</dd>
              <dt>Quantity Per Unit</dt>
              <dd>{p.quantityPerUnit}</dd>
              <dt>Supplier</dt>
              <dd>{p.supplier?.companyName ?? "No supplier"}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No product data</p>;
  }
}

export default ProductDetail;
