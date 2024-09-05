import { SyntheticEvent, useRef } from "react";
import ProductService from "./services/ProductService";
import IProduct from "./model/IProduct";

type productSearchProps = { onResults?: (r: Array<IProduct>) => void };

// <ProductSearch PageSize="100" onResults={(r) => console.log(r)} />

// rfce
function ProductSearch({onResults}: productSearchProps) {
    // Destructuración de props
    //const ps = props.PageSize 
    //const onResults = props.onResults
    //const { PageSize, onResults } = props;  

    const iFilter = useRef<HTMLInputElement>(null);

    const search = async (event: SyntheticEvent) => {
        event.preventDefault();
        const filter = iFilter.current?.value ?? "";
        if (filter) {
          console.log(`Searching REST service for ${filter} ...`);
          const ps = new ProductService();
          try {
            const filtered = await ps.search(filter);
    
            onResults?.(filtered);
          } catch (error) {
            console.error(error)
          }
        }
      };

  return (
    <div className="mb-3">
      <h6>Product Search</h6>
      <form className="row g-3" onSubmit={(event) => search(event)}>
        <input
          type="search"
          className="form-control"
          placeholder="Search here ..."
          ref={iFilter}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default ProductSearch;
