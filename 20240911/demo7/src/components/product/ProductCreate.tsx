import { SyntheticEvent, useState } from "react";
import IProduct from "../../model/IProduct";

function ProductCreate() {
    const [product, setProduct] = useState<IProduct>({} as IProduct);

    function checkValidation(event: SyntheticEvent) {
        console.log('checkValidation');

        const target = event.target as HTMLInputElement;

        if (target) {
            const property = target.name;
            const value = target.value;

            // const p1 = {productName: 'Chai'};
            // p1.productName = 'Chai';
            // p1['productName'] = 'Chai';

            setProduct({...product, ...{[property]: value}});
        }
    }

  return (
    <>
        <h2>Product</h2>
        <h3>Create</h3>  
        <hr />
        { JSON.stringify(product) }
        <form>
            <label htmlFor="">Name</label>            
            <input type="text" placeholder="Type product name .."
            name="productName"
            onChange={event => checkValidation(event) } />
            <br />
            <button type="submit">Save</button>
        </form>
    </>
  )
}

export default ProductCreate