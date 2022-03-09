import { types } from '../types/types';

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