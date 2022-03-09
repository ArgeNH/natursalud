import React from 'react';
import { useSelector } from 'react-redux';
import { ItemCart } from './ItemCard';

export const ShoppingScreen = () => {

   const { products } = useSelector(state => state.cart);

   if (products.length == 0) {
      return <div className='mt-20'>carrito vacio</div>
   }
   return (
      <div className='mt-20'>
         <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-coolGray-700">
            {
                  products.map(product => (
                     <ItemCart key={product.code} {...product} />
                  ))
               }
            </ul>
            <div className="space-y-1 text-right">
               <p>Total amount:
                  <span className="font-semibold">357 €</span>
               </p>
               <p className="text-sm dark:text-coolGray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
               <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
               </button>
               <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900 dark:border-violet-400">
                  <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
               </button>
            </div>
         </div>
      </div>
   )
}
