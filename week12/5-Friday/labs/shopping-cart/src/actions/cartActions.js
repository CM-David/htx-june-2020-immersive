export let addProduct = (productItem) => {
    return {
        type: 'AddProduct',
        productData: {
            id: productItem.id,
            productName: productItem.
        }
    };
};

export let deleteProduct = (id) => {
    return {
        type: 'deleteProduct',
        id: id,
    };
};
