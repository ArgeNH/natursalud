export const getProductByCategory = (category, products) => {
    return products?.filter(product => product.category === category);
}