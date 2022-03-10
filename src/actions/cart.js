import { types } from '../types/types';


export const addNewProduct = (code, nameProduct, price, cant, category, url, counter) => {
   return (dispatch, getState) => {
      const { products } = getState().cart;
      const exist = products.some(product => product.code === code);

      if (exist) {
         products.forEach(element => {
            if (element.code === code) {
               element.counter += counter;
            }
         });
      } else {
         dispatch(setProduct(code, nameProduct, price, cant, category, url, counter));
      }
   }
};

export const setProduct = (code, nameProduct, price, cant, category, url, counter) => ({
   type: types.cartSetProduct,
   payload: {
      code,
      nameProduct,
      price,
      cant,
      category,
      url,
      counter
   }
})

export const removeProduct = (code) => ({
   type: types.cartRemoveProduct,
   payload: {
      code
   }
})

export const setCartEmpty = () => ({
   type: types.cartSetEmpty
})