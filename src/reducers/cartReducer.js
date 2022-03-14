import { types } from "../types/types";

const initialState = {
   products: []
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.cartSetProduct:
         console.log(action.payload);
         return {
            ...state,
            products: [...state.products, action.payload]
         }

      case types.cartRemoveProduct:
         return {
            ...state,
            products: [
               ...state.products,
               state.products.filter(product => product.code != action.payload.code)
            ]
         }

      case types.cartSetEmpty:
         return {
            products: [],
         }

      default:
         return state
   }
}