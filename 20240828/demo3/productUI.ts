import IProduct from "./IProduct"

export const createProduct = (p: IProduct) => {
    const pStr = `${p.productID}, ${p.productName}, ${p.unitPrice}`;
    console.log(pStr);

    return React.createElement('li', { key: p.productID, class: 'list-group-item' }, pStr)
}