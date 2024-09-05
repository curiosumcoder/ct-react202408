import { useState } from "react";
import IProduct from "./model/IProduct";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  const [resultado, setResultado] = useState(Array<IProduct>());
  const [seleccionado, setSeleccionado] = useState<IProduct | null>(null);
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "1em" }}>
        <p>{resultado.length}</p>
        <ProductSearch onResults={ data => setResultado(data) } ></ProductSearch>

        <div className="row">
          <div className="col-8">
            <ProductList products={resultado} onSelect={ data => setSeleccionado(data)}></ProductList>
          </div>
          <div className="col-4">
            <ProductDetail p={seleccionado} ></ProductDetail>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
