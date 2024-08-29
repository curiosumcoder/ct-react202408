export const createProduct = (p) => {
    const pStr = `${p.productID}, ${p.productName}, ${p.unitPrice}`;
    console.log(pStr);
    return React.createElement('li', { key: p.productID, class: 'list-group-item' }, pStr);
};
