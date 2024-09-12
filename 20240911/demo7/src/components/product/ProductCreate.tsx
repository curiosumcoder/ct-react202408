import { SyntheticEvent, useRef, useState } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";
import "./ProductCreate.css";

function ProductCreate() {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isValid, setIsValid] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSummit = async (event: SyntheticEvent) => {
    event.preventDefault();

    console.log("Saving product ...");
    const ps = new ProductService();
    await ps.save(product);
    console.log("Product saved!");
  };

  function checkValidation(event: SyntheticEvent) {
    console.log("checkValidation");

    const target = event.target as HTMLInputElement;

    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);

      if (target.validity.valid) {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        const property = target.name;
        const value = target.value;

        setProduct({ ...product, ...{ [property]: value } });
      }
      else {
        target.classList.remove("is-valid");
        target.classList.add("is-invalid");
      }
    }
  }

  return (
    <>
      <h2>Product</h2>
      <h3>Create</h3>
      <hr />
      {JSON.stringify(product)}
      <form onSubmit={handleSummit} ref={form}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Type product name .."
          name="productName"
          onChange={checkValidation}
          required
          minLength={2}
          maxLength={32}
        />
        <br />
        <label htmlFor="">Unit Price</label>
        <input
          type="number"
          placeholder="Type unit price .."
          name="unitPrice"
          onChange={checkValidation}
          required
          min={1}
        />
        <br />
        <button type="submit" disabled={!isValid}>
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;

// const p1 = {productName: 'Chai'};
// p1.productName = 'Chai';
// p1['productName'] = 'Chai';
