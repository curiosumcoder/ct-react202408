import { useState } from "react";
import IProduct from "./model/IProduct";
import ProductSearch from "./components/product/ProductSearch";
import ProductList from "./components/product/ProductList";
import ProductDetail from "./components/product/ProductDetail";
import AppState from "./model/AppState";
import ProductCreate from "./components/product/ProductCreate";

function App() {
  const [resultado, setResultado] = useState(Array<IProduct>());
  const [seleccionado, setSeleccionado] = useState<IProduct | null>(null);
  const [appState, setAppState] = useState<AppState>(AppState.Search);

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
        {appState === AppState.Search && (
          <button
            className="btn btn-primary"
            onClick={() => setAppState(AppState.Create)}>
            Create
          </button>
        )}
        {appState === AppState.Create && <ProductCreate 
        onCreate={()=> setAppState(AppState.Search)} />}
        <hr />
        <p>{resultado.length}</p>
        <ProductSearch onResults={(data) => setResultado(data)}></ProductSearch>

        <div className="row">
          <div className="col-8">
            <ProductList
              products={resultado}
              onSelect={(data) => setSeleccionado(data)}
            ></ProductList>
          </div>
          <div className="col-4">
            <ProductDetail p={seleccionado}></ProductDetail>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
