import ProductSearch from "./ProductSearch";

function App() {
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
        <ProductSearch></ProductSearch>
      </div>
    </>
  );
}

export default App;
